import { Button } from "flowbite-react";

export default function HeroSection() {
    return (
        <section className="bg-gray-700 bg-[url('/truck.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply ">
            <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-8 text-white lg:py-16">
                <div className="mb-6 max-w-screen-lg lg:mb-0">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
                        Delivering Success, One Mile at a Time!
                    </h1>
                    <p className="mb-6 text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
                        Welcome to Harmony Haulage,
                        your premier partner in freight transportation solutions.
                        we specialize in delivering your cargo safely and efficiently to destinations near and far.
                        From streamlined logistics to personalized service, our team is dedicated to ensuring your shipments arrive on time, every time.
                        Experience the difference with Harmony Haulage - where reliability meets innovation, and your success is our priority.
                    </p>
                    <Button size="lg" className="[&>span]:items-center">
                        Learn more about us
                        <svg
                            className="-mr-1 ml-2 h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                </div>
                <div className="mt-8 grid gap-8 border-t border-gray-600 pt-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:pt-12">
                    <div>
                        <h2 className="mb-1 text-lg font-bold">24/7 Service</h2>
                        <p className="mb-1 text-sm text-gray-400">
                            Our team can be reached 24/7, no off days.
                        </p>
                    </div>
                    <div>
                        <h2 className="mb-1 text-lg font-bold">Proven Track Records</h2>
                        <p className="mb-1 text-sm text-gray-400">
                            Proven Track Records of delivery.
                        </p>
                    </div>
                    <div>
                        <h2 className="mb-1 text-lg font-bold">Maryland</h2>
                        <p className="mb-1 text-sm text-gray-400">
                            Based in Maryland
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}