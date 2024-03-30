import { useContext } from "react";
import { AppState } from '../App'

export default function EmployeeCard({ employeeID, firstname, lastname, contact, jobtitle, department, date }) {

    const context = useContext(AppState);
    
    const { deleteEmployee, updateForm, setUpdateForm, updateFormToggle, setUpdateFormToggle, setEmpDetailsToggle } = context;

    return (
        <div className="mt-3 p-2 rounded-lg">
            <div className="grid grid-rows-2 gap-5 justify-center">
                <div className="rows-span-1">
                    <img src="https://cdn2.iconfinder.com/data/icons/ui-camera-set-from-iconspace-2/21/iconspace_Portrait_Mode_25px-512.png" alt="Employee Picture" className="mx-auto my-auto w-auto h-40 rounded-full" />
                    <div className="flex gap-1 mt-5 justify-center">
                        {
                            updateForm ?
                                (
                                    <button
                                        onClick={() => {
                                            setUpdateFormToggle(!updateFormToggle);
                                        }}
                                        className="bg-gray-400 text-white rounded px-4 py-1 font-medium"
                                        disabled
                                        >
                                        Edit
                                    </button>
                                ) :

                                (
                                    <button
                                        onClick={() => {
                                            setUpdateFormToggle(!updateFormToggle);
                                            setUpdateForm(true);
                                        }}
                                        className="bg-gray-900 text-white rounded px-4 py-1 font-medium hover:bg-gray-500 active:bg-gray-700">
                                        Edit
                                    </button>
                                )
                        }

                        <button
                            onClick={() => {
                                deleteEmployee(employeeID, firstname, lastname);
                                setEmpDetailsToggle(false);
                            }}
                            className="bg-red-800 text-white rounded px-4 py-1 font-medium hover:bg-red-400 active:bg-red-600">
                            Delete
                        </button>
                    </div>
                </div>

                <div className="rows-span-1">
                    <div className="grid grid-cols-2 text-gray-500">
                        <div className="cols-span-1">
                            <div className="grid grid-rows-5">
                                <span>First Name: </span>
                                <span>Last Name: </span>
                                <span>Contact Number: </span>
                                <span>Job Title: </span>
                                <span>Department: </span>
                                <span>Hired Date: </span>
                            </div>
                        </div>

                        <div className="cols-span-1">
                            <div className="grid grid-rows-5">
                                <span className="font-medium">{firstname}</span>
                                <span className="font-medium">{lastname}</span>
                                <span className="font-medium">{contact}</span>
                                <span className="font-medium">{jobtitle}</span>
                                <span className="font-medium">{department}</span>
                                <span className="font-medium">{date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}