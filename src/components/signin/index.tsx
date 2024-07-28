import { Button } from "@/components/formTags/Button/button.styled";
import ControlledInput from "@/components/formTags/Input/controlledInput";
import AuthLayout from "@/components/layouts/Auth";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import * as yup from "yup";
import { FormSpace } from "@/components/formTags/Form/index.styled";
import { signInFields, signInValidation } from "./signin.constants";
import { emailRegex } from "@/utils/regex";
import { loginType } from "./signin.types";

const SignIn = () => {
    const co = useTheme()
    const signInSchema = yup.object().shape({
        email: yup.string().trim().required(signInValidation.emailRequired).matches(emailRegex, { message: signInValidation.validEmail }),
        password: yup.string().required(signInValidation.passwordRequired)
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
    return <FormSpace onSubmit={handleSubmit(submithandler)}>
        <ControlledInput control={control} name={signInFields.email.key} label={signInFields.email.label} />
        <ControlledInput control={control} name={signInFields.password.key} label={signInFields.password.label} />
        <Button btnsize="md" variant="primary" className="w-full" type="submit">
            Submit
        </Button>
        <p>don&apos;t have an account? <Link href="/register" className="underline" style={{ color: co.colors.primary }}>register</Link></p>
    </FormSpace>
};
SignIn.getLayout = function (page: ReactElement) {
    return <AuthLayout heading="Sign in to your account">
        {page}
    </AuthLayout>
}
export default SignIn;