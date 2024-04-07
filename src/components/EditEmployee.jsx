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
            className="container rounded-md p-1"
        >
            <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="cols-span-1">
                    <label htmlFor="firstname">First Name</label>
                    <input id="firstname"
                        onChange={(e) => setEmployee({
                            ...employee,
                            firstname: e.target.value
                        })}
                        value={employee.firstname}
                        type="text"
                        className="text-xs md:text-base w-full rounded-md shadow-sm border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black mt-1"
                        placeholder="ex. John"
                        maxLength={18}
                        required
                    />
                </div>
                <div className="cols-span-1">
                    <label htmlFor="lastname">Last Name</label>
                    <input id="lastname"
                        onChange={(e) => setEmployee({
                            ...employee,
                            lastname: e.target.value
                        })}
                        value={employee.lastname}
                        type="text"
                        className="text-xs md:text-base w-full rounded-md shadow-sm border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black mt-1"
                        placeholder="ex. Doe"
                        maxLength={18}
                        required
                    />
                </div>
            </div>

            <label htmlFor="contact">Contact Number</label>
            <input id="contact"
                onChange={(e) => setEmployee({
                    ...employee,
                    contact: e.target.value
                })}
                value={employee.contact}
                type="tel"
                className="text-xs md:text-base w-full rounded-md shadow-sm border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black mt-1 mb-2"
                pattern="[0-9]{2}-[0-9]{9}"
                placeholder="ex. 09-123456789"
                required
            />

            <label htmlFor="jobtitle">Job Title</label>
            <select id="jobtitle"
                onChange={(e) => setEmployee({
                    ...employee,
                    jobtitle: e.target.value
                })}
                value={employee.jobtitle}
                className="text-xs md:text-base w-full rounded-md shadow-sm border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black mt-1 mb-2"
                required
            >
                <option value="">Select job title</option>
                <option value={"Software Engineer"}>Software Engineer</option>
                <option value={"Project Manager"}>Project Manager</option>
            </select>

            <label htmlFor="department">Department</label>
            <select id="department"
                onChange={(e) => setEmployee({
                    ...employee,
                    department: e.target.value
                })}
                value={employee.department}
                className="text-xs md:text-base w-full rounded-md shadow-sm border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black mt-1"
                required
            >
                <option value="">Select department</option>
                <option value={"IT"}>IT</option>
            </select>

            <button
                type="submit"
                className="text-xs md:text-base bg-gray-900 rounded-md text-white py-2 px-8 font-medium hover:bg-gray-600 active:bg-gray-700 mt-5">
                Submit
            </button>

            <button
                onClick={() => {
                    setUpdateFormToggle(false);
                    setUpdateForm(false);
                    setEmpDetailsToggle(false);
                }}
                className="text-xs md:text-base rounded-md text-gray-900 bg-gray-300 py-2 px-8 font-medium hover:bg-gray-400 active:bg-gray-500 mx-1 mt-3">
                Cancel
            </button>
        </form>
    )
}