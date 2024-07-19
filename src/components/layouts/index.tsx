import { ReactElement } from "react"
import Header from "./Header"

const Layout = (props: { children: ReactElement }) => {
    return <>
        <Header />
        {props.children}
    </>
}
export default Layout;