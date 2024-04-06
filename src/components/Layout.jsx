import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { AppState } from '../App';
import firebaseApp from '../components/FirebaseConfig';
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Layout() {

    let navigate = useNavigate();

    const context = useContext(AppState);

    const { authenticated, setAuthenticated } = context;

    useEffect(() => {
        const auth = getAuth(firebaseApp);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;

                setAuthenticated(true);

            } else {
                setAuthenticated(false);
            }
        });
    }, []);

    const handleSignOut = () => {
        const auth = getAuth(firebaseApp);
        signOut(auth).then(() => {
            // Sign-out successful.

            navigate('/');

        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <main id='main' className='flex'>
            <nav className="min-w-16 md:w-16 lg:w-64 transition-all duration-200 bg-gray-900 text-white p-3 h-screen">
                {
                    authenticated ?
                        <>
                            <div className="hidden lg:block">
                                <div className="flex items-center mb-3 gap-2">
                                    <img className="h-12 w-12" src="https://img.icons8.com/color/48/men-age-group-5.png" alt="Logo" />
                                    <h1 className="font-bold text-2xl">Employee Management Dashboard</h1>
                                </div>
                                {/* Employee List */}
                                <Link className="flex rounded gap-5 p-2 hover:bg-gray-600 font-medium" to='/'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                                        <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                    </svg>
                                    <span className=''>Employee List</span>
                                </Link>
                                {/* End of Employee List */}

                                {/* Add Employee */}
                                <Link className="flex rounded gap-5 p-2 hover:bg-gray-600 font-medium" to='addEmployee'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
                                    </svg>
                                    <span className=''>Add Employee</span>
                                </Link>
                                {/* End of Add Employee */}

                                <hr className='mt-2 mb-2' />

                                {/* Sign Out */}
                                <Link onClick={() => {
                                    setTimeout(() => {
                                        handleSignOut();
                                    }, 1000);
                                }}
                                    className="flex rounded gap-5 p-2 hover:bg-gray-600 font-medium"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                                    </svg>

                                    <span className=''>Sign out</span>
                                </Link>
                                {/* End of Sign Out */}
                            </div>

                            <div className="lg:hidden">
                                {/* Employee List */}
                                <Link title='Employee List' className="flex rounded gap-5 p-2 hover:bg-gray-600 font-medium" to='/'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                                        <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                    </svg>
                                </Link>
                                {/* End of Employee List */}

                                {/* Employee List */}
                                <Link title='Add Employee' className="flex rounded gap-5 p-2 hover:bg-gray-600 font-medium" to='addEmployee'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
                                    </svg>
                                </Link>
                                {/* End of Add Employee */}

                                <hr className='mt-2 mb-2' />

                                {/* Sign Out */}
                                <Link title='Sign Out' className="flex rounded gap-5 p-2 hover:bg-gray-600 font-medium" >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                                    </svg>

                                </Link>
                                {/* End of Sign Out */}
                            </div>
                        </>

                        :

                        <>
                            <div className="hidden lg:block">
                                <div className="flex items-center mb-3 gap-2">
                                    <img className="h-12 w-12" src="https://img.icons8.com/color/48/men-age-group-5.png" alt="Logo" />
                                    <h1 className="font-bold text-2xl">Employee Management Dashboard</h1>
                                </div>
                                {/* Sign In */}
                                <Link className="flex rounded gap-5 p-2 hover:bg-gray-600 font-medium" to='signIn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                    <span className=''>Sign in</span>
                                </Link>
                                {/* End of Sign In */}

                                {/* Sign Up */}
                                <Link className="flex rounded gap-5 p-2 hover:bg-gray-600 font-medium" to='signUp'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                    </svg>
                                    <span className=''>Sign up</span>
                                </Link>
                                {/* End of Sign Up */}
                            </div>

                            <div className="lg:hidden">
                                {/* Sign In */}
                                <Link title='Sign In' className="flex rounded gap-5 p-2 hover:bg-gray-600 font-medium" to='SignIn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                                {/* End of Sign In */}

                                {/* Sign Up */}
                                <Link title='Sign Up' className="flex rounded gap-5 p-2 hover:bg-gray-600 font-medium" to='signUp'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                    </svg>
                                </Link>
                                {/* End of Sign Up */}
                            </div>
                        </>
                }
            </nav>

            <section className='flex-1 overflow-auto h-[700px] md:h-screen p-4'>
                <Outlet></Outlet>
            </section>

            <footer className='bg-gray-800 text-white grid place-items-center text-center fixed w-full bottom-0 p-4'>
                    <small>Copyright © 2024 Employee Management Dashboard. All rights reserved.</small>
                    <small>Developed by <strong>Ferangelo Tuason</strong></small>

                    <div className="flex gap-3 mt-1">
                        <a className='hover:text-gray-300' href="https://www.facebook.com/gelo.tuason26/" target="_blank">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>

                        <a className='hover:text-gray-300' href="https://www.linkedin.com/in/ferangelo-tuason/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>

                        <a className='hover:text-gray-300' href="https://www.instagram.com/gelotuason/?hl=en" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>

                        <a className='hover:text-gray-300' href="https://www.tiktok.com/@gelotuason" target="_blank">
                            <FontAwesomeIcon icon={faTiktok} />
                        </a>

                        <a className='hover:text-gray-300' href="mailto:gelotuason@gmail.com" target="_blank">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>

                    <a className='mt-2 md:hidden' href="#main">
                        <div className='flex font-semibold hover:text-gray-300'>
                            Back to top
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 my-auto">
                                <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06l-2.47-2.47V21a.75.75 0 0 1-1.5 0V4.81L8.78 7.28a.75.75 0 0 1-1.06-1.06l3.75-3.75Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </a>
                </footer>

        </main>
    )
}