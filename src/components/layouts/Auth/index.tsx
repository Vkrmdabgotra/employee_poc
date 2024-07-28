import Link from "next/link";
import { ReactNode } from "react"
import { useTheme } from "styled-components";

const AuthLayout = (props:{children:ReactNode,heading:string|ReactNode}) => {
   const co= useTheme()

    return <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{props.heading}</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {props.children}
        </div>
        <p className="text-center mt-3"><Link href="/" className="underline" style={{ color: co.colors.primary }}>back to home</Link></p>

    </div>
};
export default AuthLayout;