import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppState } from '../App';
import firebaseApp from '../components/FirebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {

    let navigate = useNavigate();

    const context = useContext(AppState);

    const { firstname, setFirstname, lastname, setLastname, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword } = context;

    const handleSignUp = () => {
        const auth = getAuth(firebaseApp);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                setFirstname('');
                setLastname('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');

                navigate('/signIn');

                alert('Registered successfully!');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert('Registration failed!');
            });
    }

    return (

        <main className="bg-gradient-to-r from-slate-700 to-gray-900 h-screen static">
            <nav className="absolute top-8 left-4 md:top-8 md:left-16">
                <Link className="flex text-white font-medium gap-2 hover:text-gray-300" to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z" clipRule="evenodd" />
                    </svg>
                    Dashboard
                </Link>
            </nav>
            <section className="flex justify-center items-center h-screen p-3">
                <div className="container grid max-w-[768px] h-[540px] rounded-3xl">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                        <div className="cols-span-1 md:col-start-1 md:col-end-3 grid my-auto content-center justify-center text-white font-black">
                            <div className="hidden md:block">
                                <p className="text-6xl">CREATE</p>
                                <p className="text-6xl">YOUR FREE</p>
                                <p className="text-6xl">ACCOUNT</p>
                            </div>
                            <div className="md:hidden">
                                <p className="text-2xl">CREATE YOUR FREE ACCOUNT</p>
                            </div>

                            <div className="hidden md:block">
                                <div className="flex mt-2">
                                    <img className="h-6 w-6" src="https://img.icons8.com/color/48/men-age-group-5.png" alt="Logo" />
                                    <small className="text-base">Employee Management Dashboard</small>
                                </div>
                            </div>
                        </div>
                        <div className="cols-span-1 md:col-start-3 md:col-end-5 grid justify-center content-center">
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                handleSignUp();
                            }}
                                className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                                    <div className="cols-span-1">
                                        <label htmlFor="firstname" className="text-white text-sm font-medium">*First Name</label>
                                        <input
                                            id="firstname"
                                            type="text"
                                            className="rounded-md w-full focus:ring-0 text-white border-white mt-1 mb-2 bg-transparent text-sm"
                                            onChange={(e) => {
                                                setFirstname(e.target.value);
                                            }}
                                            value={firstname}
                                            placeholder=''
                                            required
                                        />
                                    </div>
                                    <div className="cols-span-1">
                                        <label htmlFor="lastname" className="text-white text-sm font-medium">*Last Name</label>
                                        <input
                                            id="lastname"
                                            type="text"
                                            className="rounded-md w-full focus:ring-0 text-white border-white mt-1 mb-2 bg-transparent text-sm"
                                            onChange={(e) => {
                                                setLastname(e.target.value);
                                            }}
                                            value={lastname}
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                                    <div className="cols-span-1">
                                        <label htmlFor="password" className="text-white text-sm font-medium">*Password</label>
                                        <input
                                            id="password"
                                            type="password"
                                            className="rounded-md w-full focus:ring-0 text-white border-white mt-1 mb-2 bg-transparent text-sm"
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                            }}
                                            value={password}
                                            required
                                        />
                                    </div>
                                    <div className="cols-span-1">
                                        <label htmlFor="confirmPassword" className="text-white text-sm font-medium">*Confirm Password</label>
                                        <input
                                            id="confirmPassword"
                                            type="password"
                                            className="rounded-md w-full focus:ring-0 text-white border-white mt-1 mb-2 bg-transparent text-sm"
                                            onChange={(e) => {
                                                setConfirmPassword(e.target.value);
                                            }}
                                            value={confirmPassword}
                                            required
                                        />
                                    </div>
                                </div>
                                <label htmlFor="email" className="text-white text-sm font-medium">*Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="rounded-md w-full focus:ring-0 text-white border-white mt-1 mb-2 bg-transparent text-sm"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    value={email}
                                    required
                                />
                                <label className="inline-flex items-center mb-5">
                                    <input
                                        type="checkbox"
                                        className="rounded hover:border-2 border-white focus:ring-0 bg-transparent"
                                    />
                                    <span className="ml-2 text-white text-xs">I agree to the terms & conditions and privacy policy</span>
                                </label>
                                <hr />
                                <button type="submit" className="bg-slate-500 rounded-md text-gray-100 py-2 px-4 font-medium hover:bg-slate-600 active:bg-slate-700 flex justify-center items-center w-full gap-2 mt-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                    </svg>
                                    Sign-up
                                </button>
                                <Link className='text-white font-semibold' to='/signIn'>
                                    <small className='hover:text-gray-300'>Already have an account? Sign-in here.</small>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>


    )

}