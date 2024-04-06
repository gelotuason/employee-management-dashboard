import { useContext, useEffect } from "react";
import { AppState } from '../App';

export default function AddEmployee() {

    const context = useContext(AppState);

    const { employee, setEmployee, addEmployee } = context;

    useEffect(() => {
        setEmployee({
            firstname: '',
            lastname: '',
            contact: '',
            jobtitle: '',
            department: '',
            date: ''
        });
    }, []);

    return (
        <main className="grid grid-cols-1 md:grid-cols-4 mt-5">
            <div className="md:col-start-2 md:col-end-4">
                <div className="grid place-items-center">
                    <h1 className="text-3xl font-bold">Employee Profile</h1>
                    <p className="font-light">Add newly hired employee</p>
                </div>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    addEmployee();
                }}
                    className="mt-5">
                    <label htmlFor="firstname" className="block">
                        <span className="text-gray-700 font-semibold">First Name</span>
                        <input id="firstname"
                            onChange={(e) => {
                                setEmployee({
                                    ...employee,
                                    firstname: e.target.value
                                })
                            }}
                            value={employee.firstname}
                            type="text"
                            className="w-full rounded-md shadow-sm block border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                            placeholder="ex. John"
                            maxLength={18}
                            required
                        />
                    </label>
                    <label htmlFor="lastname" className="block mt-3">
                        <span className="text-gray-700 font-semibold">Last Name</span>
                        <input id="lastname"
                            onChange={(e) => {
                                setEmployee({
                                    ...employee,
                                    lastname: e.target.value
                                })
                            }}
                            value={employee.lastname}
                            type="text"
                            className="w-full rounded-md shadow-sm block border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                            placeholder="ex. Doe"
                            maxLength={18}
                            required
                        />
                    </label>
                    <label htmlFor="contact" className="block mt-3">
                        <span className="text-gray-700 font-semibold">Contact Number</span>
                        <input id="contact"
                            onChange={(e) => {
                                setEmployee({
                                    ...employee,
                                    contact: e.target.value
                                })
                            }}
                            value={employee.contact}
                            type="tel"
                            className="w-full rounded-md shadow-sm block border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                            pattern="[0-9]{2}-[0-9]{9}"
                            placeholder="ex. 09-123456789"
                            required
                        />
                    </label>
                    <label htmlFor="jobtitle" className="block mt-3">
                        <span className="text-gray-700 font-semibold">Job Title</span>
                        <select id="jobtitle"
                            onChange={(e) => {
                                setEmployee({
                                    ...employee,
                                    jobtitle: e.target.value
                                })
                            }}
                            value={employee.jobtitle}
                            className="w-full rounded-md shadow-sm block border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
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
                            onChange={(e) => {
                                setEmployee({
                                    ...employee,
                                    department: e.target.value
                                })
                            }}
                            value={employee.department}
                            className="w-full rounded-md shadow-sm block border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                            required
                        >
                            <option value="">Select department</option>
                            <option value={"IT"}>IT</option>
                        </select>
                    </label>
                    <label htmlFor="date" className="block mt-3">
                        <span className="text-gray-700 font-semibold">Hire Date</span>
                        <input id="date"
                            onChange={(e) => {
                                setEmployee({
                                    ...employee,
                                    date: e.target.value
                                })
                            }}
                            value={employee.date}
                            type="date"
                            className="rounded-md shadow-sm block border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                            required
                        />
                    </label>
                    <div className="w-full flex md:flex-row flex-col mt-7 gap-1">
                        <button
                            type="submit"
                            className="bg-gray-900 rounded-md text-white py-2 px-8 font-medium hover:bg-gray-600 active:bg-gray-700">
                            Submit
                        </button>
                        <button
                            onClick={() => {
                                setEmployee({
                                    firstname: '',
                                    lastname: '',
                                    contact: '',
                                    jobtitle: '',
                                    department: ''
                                })
                            }}
                            type="reset"
                            className="rounded-md text-gray-900 bg-gray-300 py-2 px-8 font-medium hover:bg-gray-400 active:bg-gray-500">
                            Reset
                        </button>
                    </div>
                </form>
            </div>

        </main>
    )
}