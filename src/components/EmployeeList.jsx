import Employee from "./Employee";
import EmployeeCard from "./EmployeeCard";
import EditEmployee from "./EditEmployee";
import NotSignedIn from './NotSignedIn';
import { useContext, useEffect } from "react";
import { AppState } from '../App'

export default function EmployeeList() {
    const context = useContext(AppState);

    const { authenticated, setEmployee, employeeList, empDetailsToggle, setEmpDetailsToggle, setUpdateFormToggle, setUpdateForm, updateFormToggle, deleteEmployee } = context

    useEffect(() => {
        setEmpDetailsToggle(false);
    }, []);

    if (authenticated) {
        return (
            <main className="w-[285px] md:w-[670px] lg:w-full">
                <h1 className="text-xl md:text-3xl font-bold">List of Employee</h1>
                <p className="text-sm md:text-base font-light">Current employed employees</p>

                <div className="hidden md:block">
                    {
                        empDetailsToggle ?
                            (
                                <>
                                    {/* Employee List Table (Employee Details Toggled ON) */}
                                    <div className="rounded-md max-h-60 overflow-auto shadow mt-3">
                                        <table className="w-full">
                                            <thead className=" bg-slate-200 border-b-2 border-slate-300">
                                                <tr>
                                                    <th className="p-3 font-semibold text-left">First Name</th>
                                                    <th className="p-3 font-semibold text-left">Last Name</th>
                                                    <th className="p-3 font-semibold text-left">Hired Date</th>
                                                    <th className="p-3 font-semibold text-left"></th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                {
                                                    employeeList.map((employeeRecord) => (
                                                        <Employee
                                                            employeeID={employeeRecord.employeeID}
                                                            firstname={employeeRecord.firstname}
                                                            lastname={employeeRecord.lastname}
                                                            contact={employeeRecord.contact}
                                                            jobtitle={employeeRecord.jobtitle}
                                                            department={employeeRecord.department}
                                                            date={employeeRecord.date}
                                                        />
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* End of Employee List Table (Employee Details Toggled ON) */}

                                    {/* Employee Details */}

                                    <section className="grid grid-cols-2">
                                        <div className="cols-span-1">
                                            <h1 className="text-xl font-semibold mt-3">Employee Details</h1>
                                            <EmployeeCard />
                                        </div>
                                        {/* End of Employee Details */}


                                        {/* Edit Employee Details */}
                                        {
                                            updateFormToggle ?
                                                (
                                                    <div className="cols-span-1">
                                                        <h1 className="text-xl font-semibold mt-3">Edit Employee Details</h1>
                                                        <EditEmployee />
                                                    </div>
                                                ) :

                                                (
                                                    <div></div>
                                                )
                                        }
                                        {/* End of Edit Employee Details */}
                                    </section>
                                </>
                            ) :

                            (
                                <>
                                    {/* Employee List Table (Employee Details Toggled Off) */}
                                    <div className="rounded-md shadow max-h-[450px] overflow-auto mt-3">
                                        <table className="w-full">
                                            <thead className=" bg-slate-200 border-b-2 border-slate-300">
                                                <tr>
                                                    <th className="p-3 text-md font-semibold text-left">First Name</th>
                                                    <th className="p-3 text-md font-semibold text-left">Last Name</th>
                                                    <th className="p-3 text-md font-semibold text-left">Hired Date</th>
                                                    <th className="p-3 text-md font-semibold text-left"></th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                {
                                                    employeeList.map((employeeRecord) => (
                                                        <Employee
                                                            employeeID={employeeRecord.employeeID}
                                                            firstname={employeeRecord.firstname}
                                                            lastname={employeeRecord.lastname}
                                                            contact={employeeRecord.contact}
                                                            jobtitle={employeeRecord.jobtitle}
                                                            department={employeeRecord.department}
                                                            date={employeeRecord.date}
                                                        />
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* End of Employee List Table (Employee Details Toggled Off) */}
                                </>
                            )
                    }
                </div>

                <div className="block md:hidden text-gray-700">
                    {
                        empDetailsToggle ?
                            (
                                <div className="text-xs">
                                    {/* Employee List Table (Employee Details Toggled ON) */}
                                    <div className="rounded-md w-full max-h-60 mt-1 overflow-auto">
                                        {
                                            employeeList.map((employeeRecord) => (
                                                <div className="flex flex-row border rounded-lg p-3 overflow-auto mt-2">
                                                    <div className="flex flex-col w-48">
                                                        <p>First Name: <span className="font-medium">{employeeRecord.firstname}</span></p>
                                                        <p>Last Name: <span className="font-medium">{employeeRecord.lastname}</span></p>
                                                        <p>Hired Date: <span className="font-medium">{employeeRecord.date}</span></p>
                                                    </div>

                                                    <div className="flex flex-row shrink-0 my-auto mx-auto">
                                                        <button
                                                            onClick={() => {
                                                                setEmpDetailsToggle(true);
                                                                setUpdateFormToggle(false);
                                                                setUpdateForm(false);
                                                                setEmployee({
                                                                    employeeID: employeeRecord.employeeID,
                                                                    firstname: employeeRecord.firstname,
                                                                    lastname: employeeRecord.lastname,
                                                                    contact: employeeRecord.contact,
                                                                    jobtitle: employeeRecord.jobtitle,
                                                                    department: employeeRecord.department,
                                                                    date: employeeRecord.date
                                                                });
                                                            }}
                                                            className="mx-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                                                            </svg>
                                                        </button>
                                                        <button onClick={() => {
                                                            deleteEmployee(employeeRecord.employeeID, employeeRecord.firstname, employeeRecord.lastname);
                                                            setEmpDetailsToggle(false);
                                                        }}
                                                            className="text-red-900">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                                <path d="M10.375 2.25a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25ZM10.375 12a7.125 7.125 0 0 0-7.124 7.247.75.75 0 0 0 .363.63 13.067 13.067 0 0 0 6.761 1.873c2.472 0 4.786-.684 6.76-1.873a.75.75 0 0 0 .364-.63l.001-.12v-.002A7.125 7.125 0 0 0 10.375 12ZM16 9.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    {/* Employee List Table (Employee Details Toggled ON) */}

                                    {/* Employee Details */}
                                    <h1 className="font-semibold mt-3 text-sm">Employee Details</h1>
                                    <section className="grid grid-cols-1">
                                        <div className="cols-span-1">
                                            <EmployeeCard />
                                        </div>
                                        {/* End of Employee Details */}


                                        {/* Edit Employee Details */}
                                        {
                                            updateFormToggle ?
                                                (
                                                    <div className="cols-span-1">
                                                        <h1 className="text-sm font-semibold">Edit Employee Details</h1>
                                                        <EditEmployee />
                                                    </div>
                                                ) :

                                                (
                                                    <div></div>
                                                )
                                        }
                                        {/* End of Edit Employee Details */}
                                    </section>
                                </div>
                            ) :

                            (
                                <>
                                    {/* Employee List Table (Employee Details Toggled Off) */}
                                    <div className="rounded-md w-full h-[750px] overflow-auto mt-1 text-xs">
                                        {
                                            employeeList.map((employeeRecord) => (
                                                <div className="flex flex-row border-2 rounded-lg p-3 overflow-auto mt-2">
                                                    <div className="flex flex-col w-48">
                                                        <p>First Name: <span className="font-medium">{employeeRecord.firstname}</span></p>
                                                        <p>Last Name: <span className="font-medium">{employeeRecord.lastname}</span></p>
                                                        <p>Hired Date: <span className="font-medium">{employeeRecord.date}</span></p>
                                                    </div>

                                                    <div className="flex flex-row shrink-0 my-auto mx-auto">
                                                        <button
                                                            onClick={() => {
                                                                setEmpDetailsToggle(true);
                                                                setUpdateFormToggle(false);
                                                                setUpdateForm(false);
                                                                setEmployee({
                                                                    employeeID: employeeRecord.employeeID,
                                                                    firstname: employeeRecord.firstname,
                                                                    lastname: employeeRecord.lastname,
                                                                    contact: employeeRecord.contact,
                                                                    jobtitle: employeeRecord.jobtitle,
                                                                    department: employeeRecord.department,
                                                                    date: employeeRecord.date
                                                                });
                                                            }}
                                                            className="mx-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                                                            </svg>
                                                        </button>
                                                        <button onClick={() => {
                                                            deleteEmployee(employeeRecord.employeeID, employeeRecord.firstname, employeeRecord.lastname);
                                                            setEmpDetailsToggle(false);
                                                        }}
                                                            className="text-red-900">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                                <path d="M10.375 2.25a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25ZM10.375 12a7.125 7.125 0 0 0-7.124 7.247.75.75 0 0 0 .363.63 13.067 13.067 0 0 0 6.761 1.873c2.472 0 4.786-.684 6.76-1.873a.75.75 0 0 0 .364-.63l.001-.12v-.002A7.125 7.125 0 0 0 10.375 12ZM16 9.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    {/* End of Employee List Table (Employee Details Toggled Off) */}
                                </>
                            )
                    }
                </div>
            </main>
        )
    } else {
        return (
            <NotSignedIn />
        )
    }

}