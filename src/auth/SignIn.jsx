import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppState } from '../App';
import firebaseApp from '../components/FirebaseConfig'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {

    let navigate = useNavigate();

    const context = useContext(AppState);

    const { setAuthenticated, email, setEmail, password, setPassword } = context;

    const handleSignIn = () => {
        const auth = getAuth(firebaseApp);
    
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
    
            setEmail('');
            setPassword('');

            alert('Signed in!');

            navigate('/');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
    
            setAuthenticated(false);
            alert('Incorrect email or password.');
          });
      }

    return (

        <main className="bg-gradient-to-r from-slate-700 to-gray-900 h-screen">
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
                                <p className="text-6xl">SIGN-IN</p>
                                <p className="text-6xl">YOUR</p>
                                <p className="text-6xl">ACCOUNT</p>
                            </div>
                            <div className="md:hidden">
                                <p className="text-2xl">SIGN-IN YOUR ACCOUNT</p>
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
                                handleSignIn();
                            }}
                                className="p-7">
                                <label htmlFor="email" className="text-white text-sm font-medium">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="rounded-md w-full focus:ring-0 text-white border-white mt-1 mb-2 bg-transparent text-sm"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    value={email}
                                />
                                <label htmlFor="password" className="text-white text-sm font-medium">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    className="rounded-md w-full focus:ring-0 text-white border-white mt-1 mb-5 bg-transparent text-sm"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    value={password}
                                />
                                <hr />
                                <button onClick={() => {

                                }}
                                    type="submit"
                                    className="bg-slate-500 rounded-md text-gray-100 py-2 px-4 font-medium hover:bg-slate-600 active:bg-slate-700 flex justify-center w-full gap-2 mt-5"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                    Sign in
                                </button>
                                <Link className='text-white font-semibold' to='/signUp'>
                                    <small className='hover:text-gray-300'>Don't have an account? Sign-up here.</small>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>


    )

}