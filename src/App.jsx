import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState, createContext } from 'react';
import Layout from './components/Layout'
import EmployeeList from './components/EmployeeList'
import EmployeeCard from './components/EmployeeCard'
import AddEmployee from './components/AddEmployee'
import EditEmployee from './components/EditEmployee'
import firebaseApp from './components/FirebaseConfig';
import { getFirestore, collection, onSnapshot, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore";
import Swal from 'sweetalert2'

export const AppState = createContext();

function App() {

  const [employee, setEmployee] = useState({
    firstname: '',
    lastname: '',
    contact: '',
    jobtitle: '',
    department: '',
    date: ''
  });

  const [employeeList, setEmployeeList] = useState([]);

  const [empDetailsToggle, setEmpDetailsToggle] = useState(false);

  const [updateFormToggle, setUpdateFormToggle] = useState(false);

  const [updateForm, setUpdateForm] = useState(false);

  useEffect(() => {
    const db = getFirestore(firebaseApp);

    try {
      onSnapshot(collection(db, 'employees'), snapshot => {
        const newEmployeeList = [];

        snapshot.forEach(employee => {
          const tempEmployee = employee.data();
          tempEmployee["employeeID"] = employee.id;
          newEmployeeList.push(tempEmployee);
        })

        setEmployeeList(newEmployeeList);
      });
    } catch (e) {
      alert('Error fetching data!')
    }
  }, [])

  const addEmployee = () => {

    const db = getFirestore(firebaseApp);

    setEmployeeList(
      employeeList => [
        ...employeeList, employee]
    )

    addDoc(collection(db, 'employees'), employee)

    setEmployee({
      firstname: '',
      lastname: '',
      contact: '',
      jobtitle: '',
      department: '',
      date: ''
    })

    Swal.fire({
      title: "Success",
      text: "You successfully added employee!",
      icon: "success",
      confirmButtonColor: '#1f2937',
    });
  };

  const deleteEmployee = (employeeID, firstname, lastname) => {
    const db = getFirestore(firebaseApp);

    const confirmed = window.confirm(`Are you sure you want to delete ${firstname} ${lastname}?`)

    confirmed ? deleteDoc(doc(db, 'employees', employeeID)) : alert("Deletion cancelled!");
  }

  const updateEmployee = () => {
    const db = getFirestore(firebaseApp);

    const employeeRef = doc(db, 'employees', employee.employeeID);

    const confirmed = window.confirm(`Are you sure you want to update this employee?`)

    if (confirmed) {
      updateDoc(employeeRef, {
        firstname: employee.firstname,
        lastname: employee.lastname,
        contact: employee.contact,
        jobtitle: employee.jobtitle,
        department: employee.department
      });

      Swal.fire({
        title: "Success",
        text: "Updated successfully!",
        icon: "success",
        confirmButtonColor: '#1f2937'
      });

      setEmployee({
        firstname: '',
        lastname: '',
        contact: '',
        jobtitle: '',
        department: '',
      });

      setUpdateFormToggle(false);
      setUpdateForm(false);
      setEmpDetailsToggle(false);
    } else {
      alert('Updating cancelled!');
    }
  }

  return (
    <AppState.Provider value={{
      employee,
      setEmployee,
      employeeList,
      setEmployeeList,
      addEmployee,
      deleteEmployee,
      updateEmployee,
      empDetailsToggle,
      setEmpDetailsToggle,
      updateFormToggle,
      setUpdateFormToggle,
      updateForm,
      setUpdateForm
    }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<EmployeeList />} />
            <Route path='addEmployee' element={<AddEmployee />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppState.Provider>

  )
}

export default App
