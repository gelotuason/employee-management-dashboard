import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="p-3">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">404 Not Found</h1>
            <p>Back to <Link className="text-slate-400 underline hover:text-slate-600" to='/'>Home</Link>.</p>
        </div>
    )
}