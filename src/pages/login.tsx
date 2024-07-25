import { Button } from "@/components/formTags/Button/button.styled";
import ControlledInput from "@/components/formTags/Input/controlledInput";
import AuthLayout from "@/components/layouts/Auth";
import { inputValues, UserDetail } from "@/utils/common.types";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import * as yup from "yup";
export type loginType=Pick<UserDetail,"email"|"password">

const Login = () => {
   const co= useTheme()
   
    const signInSchema = yup.object().shape({
        email: yup.string().required("Please enter an email.").matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, { message: "Please enter valid email" }),
        password: yup.string().required("Please enter password")
    })
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(signInSchema)
    })
    const submithandler = (data: loginType) => {
        console.log(data);

    }
    return <form className="space-y-6" onSubmit={handleSubmit(submithandler)}>
        <div>
            <ControlledInput control={control} name="email" label="Email address" />
        </div>
        <div>
            <ControlledInput control={control} name="password" label="Password" />
        </div>
        <div>
            <Button btnsize="md" variant="primary" className="w-full" type="submit">
                Submit
            </Button>
        </div>
        <p>don&apos;t have an account? <Link  href="/register" className="underline"style={{color:co.colors.primary}}>Sign Up</Link></p>
    </form>
};
Login.getLayout = function (page: ReactElement) {
    return <AuthLayout heading="Sign in to your account">
        {page}
    </AuthLayout>
}
export default Login;