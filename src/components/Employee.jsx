import { useContext } from "react";
import { AppState } from "../App";

export default function Employee({ employeeID, firstname, lastname, contact, jobtitle, department, date }) {

    const context = useContext(AppState);

    const { setEmployee, setEmpDetailsToggle, setUpdateFormToggle, setUpdateForm, deleteEmployee } = context;

    return (
        <tr>
            <td className="p-3 text-sm whitespace-nowrap">{firstname}</td>
            <td className="p-3 text-sm whitespace-nowrap">{lastname}</td>
            <td className="p-3 text-sm whitespace-nowrap">{date}</td>
            <td className="p-3 text-sm whitespace-nowrap text-center">
                <button
                    onClick={() => {
                        setEmpDetailsToggle(true);
                        setUpdateFormToggle(false);
                        setUpdateForm(false);
                        setEmployee({
                            employeeID: employeeID,
                            firstname: firstname,
                            lastname: lastname,
                            contact: contact,
                            jobtitle: jobtitle,
                            department: department,
                            date: date
                        });
                    }}
                    className="mx-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                    </svg>
                </button>
                <button onClick={() => {
                    deleteEmployee(employeeID, firstname, lastname);
                    setEmpDetailsToggle(false);
                }}
                    className="text-red-900">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M10.375 2.25a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25ZM10.375 12a7.125 7.125 0 0 0-7.124 7.247.75.75 0 0 0 .363.63 13.067 13.067 0 0 0 6.761 1.873c2.472 0 4.786-.684 6.76-1.873a.75.75 0 0 0 .364-.63l.001-.12v-.002A7.125 7.125 0 0 0 10.375 12ZM16 9.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z" />
                    </svg>
                </button>
            </td>
        </tr>
    )
}