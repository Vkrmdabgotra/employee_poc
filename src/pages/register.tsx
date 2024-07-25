import AuthLayout from "@/components/layouts/Auth";
import SignUp from "@/components/register";
import { ReactElement } from "react";
const Register = () => {
       return <SignUp />
};
Register.getLayout = function (page: ReactElement) {
    return <AuthLayout heading="Register your account">
        {page}
    </AuthLayout>
}
export default Register;