import { Link } from "react-router-dom"

export default function NotSignedIn() {
    return (
        <div className="p-3">
            <h1 className=" text-5xl font-bold mb-2">Oops!</h1>
            <p>Looks like your not yet signed in. To view the content, please <Link className="text-slate-400 underline hover:text-slate-600" to='/signIn'>Sign In</Link> first.</p>
        </div>
    )
}