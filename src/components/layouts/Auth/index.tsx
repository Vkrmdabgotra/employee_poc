import { ReactNode } from "react"

const AuthLayout = (props:{children:ReactNode,heading:string|ReactNode}) => {
    return <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{props.heading}</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {props.children}
        </div>
    </div>
};
export default AuthLayout;