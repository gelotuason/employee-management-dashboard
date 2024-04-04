import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState, createContext } from 'react';
import Layout from './components/Layout'
import EmployeeList from './components/EmployeeList'
import AddEmployee from './components/AddEmployee'
import SignIn from './auth/SignIn';
import SignUp from './auth/Signup';
import NotSignedIn from './components/NotSignedIn';
import Swal from 'sweetalert2';
import firebaseApp from './components/FirebaseConfig';
import { getFirestore, collection, onSnapshot, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

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

  const [authenticated, setAuthenticated] = useState(false);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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

  const handleSignIn = () => {
    const auth = getAuth(firebaseApp);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        setAuthenticated(true);
        alert('Signed in!');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setAuthenticated(false);
        alert('Sign in failed!');
      });
  }

  const handleSignUp = () => {
    const auth = getAuth(firebaseApp);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        alert('Registered successfully!');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert('Registration failed!');
      });
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
      setUpdateForm,
      firstname,
      setFirstname,
      lastname,
      setLastname,
      email,
      setEmail,
      password,
      setPassword,
      confirmPassword,
      setConfirmPassword,
      authenticated,
      setAuthenticated,
      handleSignIn,
      handleSignUp
    }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<EmployeeList />} />
            <Route path='addEmployee' element={<AddEmployee />} />
          </Route>
          <Route path='signIn' element={<SignIn />} />
          <Route path='signUp' element={<SignUp />} />
          <Route path='notSignedIn' element={<NotSignedIn />} />
        </Routes>
      </BrowserRouter>
    </AppState.Provider>
  )
}

export default App
