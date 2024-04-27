import { Card } from "flowbite-react";

export default function OurTrucksSection() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
                <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Our Trucks
                    </h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
        </section>
    );
}
