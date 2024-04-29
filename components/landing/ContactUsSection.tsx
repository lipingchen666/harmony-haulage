import { Dropdown, Footer,  } from "flowbite-react";

export default function ContactUsSection() {
    return (
        <Footer className="rounded-none flex flex-col items-center">
            <h2 className="mb-8 text-center text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-16">
                Contact Us
            </h2>
            <div className="mx-auto max-w-screen-xl p-4 py-6 md:p-8 lg:p-10">
                <div className="gap-8 space-y-12 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
                    <address className="not-italic">
                        <p className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                            Maryland
                        </p>
                        <div className="flex md:space-x-16 flex-col md:flex-row space-y-8 md:space-y-0">
                            <div className="flex-1">
                                <p className="mb-3 text-gray-500 dark:text-gray-400">
                                    Physical Address
                                    <br />881 Concorde circle  , Linthicum heights md 21090
                                </p>
                                <ul className="space-y-3 text-gray-500 dark:text-gray-400">
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-2 h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Office: 443-577-8643
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-2 h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        Email:&nbsp;
                                        <a
                                            href="mailto:company@name.com"
                                            className="ml-2 hover:underline"
                                        >
                                            Janelle@harmonyhaulage.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1">
                                <p className="mb-3 text-gray-500 dark:text-gray-400">
                                    Mailing Address
                                    <br />881 Concorde circle  , Linthicum heights md 21090
                                </p>
                                <ul className="space-y-3 text-gray-500 dark:text-gray-400">
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-2 h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Office: 443-577-8643
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="mr-2 h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        Email:&nbsp;
                                        <a
                                            href="mailto:company@name.com"
                                            className="ml-2 hover:underline"
                                        >
                                            Janelle@harmonyhaulage.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </address>
                </div>
                <Footer.Divider />
                <div className="flex flex-col items-center justify-between lg:flex-row">
                    <Footer.Brand
                        alt="Flowbite logo"
                        href="https://flowbite.com"
                        name="Flowbite"
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mb-4 sm:mb-4 lg:mb-0"
                    />
                    <Footer.Copyright
                        by="Harmony Haulage™. All Rights Reserved."
                        href="https://harmony-haulage.com"
                        year={2024}
                        className="mb-2 lg:mb-0"
                    />
                </div>
            </div>
        </Footer>
    );
}
