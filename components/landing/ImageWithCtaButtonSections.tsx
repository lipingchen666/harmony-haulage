import { Button } from "flowbite-react";
import Image from 'next/image'

export default function ImageWithCTAButtonSection() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
                <Image
                    alt=""
                    src="/truckdriving.jpg"
                    className="w-full dark:hidden"
                    width={500}
                    height={500}
                />
                <Image
                    alt=""
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
                    className="hidden w-full dark:block"
                    width={500}
                    height={500}
                />
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Drive your business together
                    </h2>
                    <p className="mb-6 text-gray-500 dark:text-gray-400 md:text-lg">
                        Contact us now to discuss your transportation
                        needs and discover how we can tailor our
                        services to exceed your expectations.
                        Let us drive your business forward, together!
                    </p>
                    <Button
                        color="info"
                        href="#"
                        size="lg"
                        className="w-fit [&>span]:items-center"
                    >
                        Contact us now
                        <svg
                            className="-mr-1 ml-2 h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                </div>
            </div>
        </section>
    );
}