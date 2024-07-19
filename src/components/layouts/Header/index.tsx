import { Flex } from "@/components/flex/index.styled"
import { Button } from "@/components/formTags/Button/button.styled";
import Link from "next/link"

const Header = () => {

    return <header className="bg-white shadow">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8" aria-label="Global">
            <Flex justify="space-between" align="center" className="w-full p-4" >
                <Link href='/'> <Button btnsize="md" variant="outline">
                Home
                    </Button></Link>
                <Flex justify="space-between" align="center" className="gap-2">
                <Link href='/login'>
                    <Button btnsize="md" variant="primary">
                        Sign In
                    </Button>
                </Link>
                <Link href='/signup'>
                    <Button btnsize="md" variant="primary">
                        Sign Up
                    </Button>
                </Link>
                </Flex>
            </Flex>
        </nav>
    </header>
}
Header.displayName = "Header";
export default Header;