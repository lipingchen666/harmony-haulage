import {Card} from "flowbite-react";

export function OurTrucksSideBySideSection() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto grid max-w-screen-xl gap-16 px-4 py-8 lg:grid-cols-2 lg:px-6 lg:py-16">
                <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        We have top of the line fleets
                    </h2>
                    <p className="mb-2 md:text-lg">
                        Here at Harmony Haulage, we are proud of our trucks. Inspected and maintained daily.
                    </p>
                    <p className="md:text-lg">
                        Work with us means your load will always be carried with the top trucks industry can offer
                    </p>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    <div className="flex flex-col items-center pb-8 sm:flex-row">
                        <Card className="shadow-sm">
                            <a href="#">
                                <img
                                    className="w-full rounded-lg"
                                    src="/ourtruck.jpg"
                                    alt="our truck 1"
                                />
                            </a>
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <a href="#">Truck 1</a>
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                1080 horse power, 2024
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
