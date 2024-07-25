import { Control, Controller } from "react-hook-form"
import { TextInput } from "./input.styled"
import { ReactNode } from "react";
interface ControlledInputProps {
    control: Control<any>;
    name: string;
    type?: "text" | "password" | "email";
    label?: string | ReactNode
}
const ControlledInput = ({ control, name, label, type = "text" }: ControlledInputProps) => {

    return <Controller
        control={control}
        name={name}
        render={({ field, formState: { errors } }) => {
            console.log(errors);

            return <>
                {label && <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">{label}</label>}
                <div className="mt-2">
                    <TextInput {...field} name={name} id={name} className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm" />
                </div>
                {errors[name]?.message && <p className="text-red-700">
                    {errors[name]?.message as string}
                </p>}
            </>
        }}

    />
    {/* <TextInput />
    </Controller> */}
}
export default ControlledInput;