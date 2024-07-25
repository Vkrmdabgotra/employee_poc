import { Button } from "@/components/formTags/Button/button.styled";
import ControlledInput from "@/components/formTags/Input/controlledInput";
import AuthLayout from "@/components/layouts/Auth";
import { inputValues, UserDetail } from "@/utils/common.types";
import { emailRegex } from "@/utils/regex";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import * as yup from "yup";
import { signUpType } from "./register.types";
const SignUp = () => {
    const co = useTheme()
    const signUpSchema = yup.object().shape({
        name: yup.string().trim().required("Please enter your name."),
        email: yup.string().required("Please enter an email.").matches(emailRegex, { message: "Please enter valid email" }),
        password: yup.string().trim().required("Please enter password")
    })
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(signUpSchema)
    })
    const submithandler = (data: signUpType) => {
        console.log(data);

    }
    return <form className="space-y-6" onSubmit={handleSubmit(submithandler)}>

        <ControlledInput control={control} name="name" label="Name" />


        <ControlledInput control={control} name="email" label="Email address" />


        <ControlledInput control={control} name="password" label="Password" />


        <Button btnsize="md" variant="primary" className="w-full" type="submit">
            Submit
        </Button>

        <p>already have an account? <Link href="/login" className="underline" style={{ color: co.colors.primary }}>login</Link></p>
    </form>
};
SignUp.getLayout = function (page: ReactElement) {
    return <AuthLayout heading="Register your account">
        {page}
    </AuthLayout>
}
export default SignUp;