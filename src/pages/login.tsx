import AuthLayout from "@/components/layouts/Auth";
import SignIn from "@/components/signin";
import { ReactElement } from "react";

const Login = () => {
    return <SignIn/>
};
Login.getLayout = function (page: ReactElement) {
    return <AuthLayout heading="Sign in to your account">
        {page}
    </AuthLayout>
}
export default Login;