import { Navbar } from "flowbite-react";
import Image from "next/image";
export default function HeaderWithSubNavbar() {
    return (
        <header>
            <Navbar className="dark:bg-gray-800">
                <Navbar.Brand href="/">
                    <div className="flex space-x-2">
                        <Image
                            src="/hh-logo6-trimmed.png"
                            alt="Flowbite Logo"
                            height={30}
                            width={25}
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-harmony-purple">
                        Harmony Haulage
                    </span>
                    </div>
                </Navbar.Brand>
                <div className="flex items-center">
                    <a
                        href="tel:5541251234"
                        className="mr-6 hidden text-sm font-medium text-gray-900 hover:underline dark:text-white sm:inline"
                    >
                        (555) 412-1234
                    </a>
                    <a
                        href="#"
                        className="text-sm font-medium text-violet-600 hover:underline dark:text-white sm:mr-6"
                    >
                        Contact us
                    </a>
                </div>
            </Navbar>
            <Navbar className="bg-gray-50 py-3 dark:bg-gray-700">
                <Navbar.Collapse>
                    <Navbar.Link
                        href="#"
                        className="hover:text-gray-900 hover:underline dark:text-white"
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link
                        href="#"
                        className="hover:underline dark:text-white md:hover:text-gray-900"
                    >
                        Company
                    </Navbar.Link>
                    <Navbar.Link
                        href="#"
                        className="hover:underline dark:text-white md:hover:text-gray-900"
                    >
                        Team
                    </Navbar.Link>
                    <Navbar.Link
                        href="#"
                        className="hover:underline dark:text-white md:hover:text-gray-900"
                    >
                        Trucks
                    </Navbar.Link>
                </Navbar.Collapse>
                <div className="flex items-center gap-5 lg:hidden">
                    <a
                        href="#"
                        className="text-sm hover:underline focus:underline dark:text-white"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-sm hover:underline focus:underline dark:text-white"
                    >
                        Company
                    </a>
                    <a
                        href="#"
                        className="text-sm hover:underline focus:underline dark:text-white"
                    >
                        Team
                    </a>
                    <a
                        href="#"
                        className="text-sm hover:underline focus:underline dark:text-white"
                    >
                        Features
                    </a>
                </div>
            </Navbar>
        </header>
    );
}