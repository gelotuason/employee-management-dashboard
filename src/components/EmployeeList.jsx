import Employee from "./Employee";
import EmployeeCard from "./EmployeeCard";
import EditEmployee from "./EditEmployee";
import { useContext, useEffect } from "react";
import { AppState } from '../App'

export default function EmployeeList() {
    const context = useContext(AppState);

    const { employee, employeeList, empDetailsToggle, setEmpDetailsToggle, updateFormToggle } = context

    useEffect(() => {
        setEmpDetailsToggle(false);
    }, []);

    return (
        <main className="md:w-[648px] lg:w-full">
            <h1 className="text-3xl font-bold">List of Employee</h1>
            <p className="font-light">Current employed employees</p>

            <div className="rounded-md max-h-60 overflow-auto shadow mt-8">
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

            {
                empDetailsToggle ?
                    (
                        <>
                            {/* Employee Details */}
                            <h1 className="text-xl font-semibold mt-3">Employee Details</h1>
                            <section className="grid grid-cols-1 md:grid-cols-2">
                                <div className="cols-span-1">
                                    <EmployeeCard
                                        employeeID={employee.employeeID}
                                        firstname={employee.firstname}
                                        lastname={employee.lastname}
                                        contact={employee.contact}
                                        jobtitle={employee.jobtitle}
                                        department={employee.department}
                                        date={employee.date}
                                        updateFormToggle={updateFormToggle}
                                    />
                                </div>
                                {/* End of Employee Details */}


                                {/* Edit Employee Details */}
                                {
                                    updateFormToggle ?
                                        (
                                            <div className="cols-span-1">
                                                <EditEmployee
                                                    employeeID={employee.employeeID}
                                                    firstname={employee.firstname}
                                                    lastname={employee.lastname}
                                                    contact={employee.contact}
                                                    jobtitle={employee.jobtitle}
                                                    department={employee.department}
                                                    date={employee.date}
                                                />
                                            </div>
                                        ) :

                                        (
                                            <div>

                                            </div>
                                        )
                                }
                                {/* End of Edit Employee Details */}
                            </section>
                        </>
                    ) :

                    (
                        <div>

                        </div>
                    )
            }
        </main>
    )
}