import { Button } from "@/components/formTags/Button/button.styled";
import ControlledInput from "@/components/formTags/Input/controlledInput";
import AuthLayout from "@/components/layouts/Auth";
import { inputValues, UserDetail } from "@/utils/common.types";
import { emailRegex, passwordRegex } from "@/utils/regex";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import * as yup from "yup";
import { signUpType } from "./register.types";
import { signUpFields, signUpValidation } from "./register.constants";
import { FormSpace } from "../formTags/Form/index.styled";

const SignUp = () => {
    const co = useTheme()
    const signUpSchema = yup.object().shape({
        name: yup.string().trim().required(signUpValidation.nameRequired),
        email: yup.string().trim().required(signUpValidation.emailRequired).matches(emailRegex, { message: signUpValidation.validEmail }),
        password: yup.string().trim().required(signUpValidation.passwordRequired).matches(passwordRegex,{message:signUpValidation.validPassword})
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
    return <FormSpace onSubmit={handleSubmit(submithandler)}>
        <ControlledInput control={control} name={signUpFields.name.key} label={signUpFields.name.label} />
        <ControlledInput control={control} name={signUpFields.email.key} label={signUpFields.email.label} />
        <ControlledInput control={control} name={signUpFields.password.key} label={signUpFields.password.label} />
        <Button btnsize="md" variant="primary" className="w-full" type="submit">
            Submit
        </Button>
        <p>already have an account? <Link href="/login" className="underline mt-2" style={{ color: co.colors.primary }}>login</Link></p>

    </FormSpace>
};
SignUp.getLayout = function (page: ReactElement) {
    return <AuthLayout heading="Register your account">
        {page}
    </AuthLayout>
}
export default SignUp;