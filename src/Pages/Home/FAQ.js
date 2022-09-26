import React from "react";

export default function FAQ() {
    return (
        <div className="flex items-center justify-center">
            <div className="bg-white w-full">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto">
                    <h2 className="text-2xl font-semiboldcmy-2 md:my-5 ">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        <details className=" rounded-lg ring-1 ring-gray-300">
                            <summary className="px-4 py-6 cursor-pointer">
                                Lorem ipsum dolor sit amet.
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 ">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, labore.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
}