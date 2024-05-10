import { Footer } from "flowbite-react";

export default function FooterSection() {
    return (
        <Footer className="rounded-none">
            <div className="mx-auto flex max-w-screen-xl flex-col items-center p-4 text-center md:p-8 lg:p-10 [&>div]:w-fit">
                <Footer.Brand
                    alt="Harmony Haulage logo"
                    href="/"
                    name="Harmony Haulage"
                    src="/hh-logo6-trimmed.png"
                />
                <p className="my-6 text-gray-500 dark:text-gray-400">
                    Open-source library of over 400+ web components and interactive
                    elements built for better web.
                </p>
                <Footer.LinkGroup className="mb-6 flex flex-wrap items-center justify-center text-base text-gray-900 dark:text-white">
                    <Footer.Link href="#" className="mr-4 hover:underline md:mr-6 ">
                        About
                    </Footer.Link>
                    <Footer.Link href="#" className="mr-4 hover:underline md:mr-6">
                        Premium
                    </Footer.Link>
                    <Footer.Link href="#" className="mr-4 hover:underline md:mr-6 ">
                        Campaigns
                    </Footer.Link>
                    <Footer.Link href="#" className="mr-4 hover:underline md:mr-6">
                        Blog
                    </Footer.Link>
                    <Footer.Link href="#" className="mr-4 hover:underline md:mr-6">
                        Affiliate Program
                    </Footer.Link>
                    <Footer.Link href="#" className="mr-4 hover:underline md:mr-6">
                        FAQs
                    </Footer.Link>
                    <Footer.Link href="#" className="mr-4 hover:underline md:mr-6">
                        Contact
                    </Footer.Link>
                </Footer.LinkGroup>
                <Footer.Copyright
                    by="Flowbite™. All Rights Reserved."
                    href="https://flowbite.com"
                    year={2023}
                />
            </div>
        </Footer>
    );
}
