import { useContext } from "react";
import { AppState } from "../App";

export default function EditEmployee() {

    const context = useContext(AppState);

    const { employee, setEmployee, updateEmployee, setUpdateForm, setUpdateFormToggle, setEmpDetailsToggle } = context;

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            updateEmployee();
        }}
            className="container border-2 border-gray-400/40 rounded-md p-3">
            <div className="grid place-items-end">
                <button onClick={() => {
                    setUpdateFormToggle(false);
                    setUpdateForm(false);
                    setEmpDetailsToggle(false);
                }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            <label htmlFor="firstname" className="block">
                <span className="text-gray-700 font-semibold">First Name</span>
                <input id="firstname"
                    onChange={(e) => setEmployee({
                        ...employee,
                        firstname: e.target.value
                    })}
                    value={employee.firstname}
                    type="text"
                    className="text-xs md:text-base w-full block border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-black"
                    placeholder="ex. John"
                    maxLength={18}
                    required
                />
            </label>
            <label htmlFor="lastname" className="block mt-3">
                <span className="text-gray-700 font-semibold">Last Name</span>
                <input id="lastname"
                    onChange={(e) => setEmployee({
                        ...employee,
                        lastname: e.target.value
                    })}
                    value={employee.lastname}
                    type="text"
                    className="text-xs md:text-base w-full block border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-black"
                    placeholder="ex. Doe"
                    maxLength={18}
                    required
                />
            </label>
            <label htmlFor="contact" className="block mt-3">
                <span className="text-gray-700 font-semibold">Contact Number</span>
                <input id="contact"
                    onChange={(e) => setEmployee({
                        ...employee,
                        contact: e.target.value
                    })}
                    value={employee.contact}
                    type="tel"
                    className="text-xs md:text-base w-full block border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-black"
                    pattern="[0-9]{2}-[0-9]{9}"
                    placeholder="ex. 09-123456789"
                    required
                />
            </label>
            <label htmlFor="jobtitle" className="block mt-3">
                <span className="text-gray-700 font-semibold">Job Title</span>
                <select id="jobtitle"
                    onChange={(e) => setEmployee({
                        ...employee,
                        jobtitle: e.target.value
                    })}
                    value={employee.jobtitle}
                    className="text-xs md:text-base w-full block border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-black"
                    required
                >
                    <option value="">Select job title</option>
                    <option value={"Software Engineer"}>Software Engineer</option>
                    <option value={"Project Manager"}>Project Manager</option>
                </select>
            </label>

            <label htmlFor="department" className="block mt-3">
                <span className="text-gray-700 font-semibold">Department</span>
                <select id="department"
                    onChange={(e) => setEmployee({
                        ...employee,
                        department: e.target.value
                    })}
                    value={employee.department}
                    className="text-xs md:text-base w-full block border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-black"
                    required
                >
                    <option value="">Select department</option>
                    <option value={"IT"}>IT</option>
                </select>
            </label>
            <button
                type="submit"
                className="text-xs md:text-base bg-gray-900 rounded-md text-white py-2 px-8 font-medium hover:bg-gray-500 active:bg-gray-700 mt-3">
                Submit
            </button>
        </form>
    )
}