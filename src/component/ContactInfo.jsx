import React from 'react';

function ContactInfo() {
    return (
        <div className="flex flex-col items-center justify-center h-auto py-20 bg-[#e2e8f0]">
            <div className="w-full max-w-screen-xl p-6 bg-white rounded-lg shadow-lg">
                {/* Heading */}
                <h1 className="text-2xl sm:text-4xl font-semibold text-center mb-6 text-gray-800">
                    Contact Info
                </h1>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative aspect-w-1 aspect-h-1 bg-blue-500 text-white rounded-lg text-center transition-transform transform hover:scale-105 hover:bg-blue-600 hover:shadow-xl overflow-hidden">
                        <div className="flex flex-col items-center justify-center p-4">
                            <h2 className="text-lg font-semibold">Phone</h2>
                            <p className="mt-2 text-sm">+123 456 7890</p>
                        </div>
                    </div>
                    <div className="relative aspect-w-1 aspect-h-1 bg-green-500 text-white rounded-lg text-center transition-transform transform hover:scale-105 hover:bg-green-600 hover:shadow-xl overflow-hidden">
                        <div className="flex flex-col items-center justify-center p-4">
                            <h2 className="text-lg font-semibold">Email</h2>
                            <p className="mt-2 text-sm">info@example.com</p>
                        </div>
                    </div>
                    <div className="relative aspect-w-1 aspect-h-1 bg-red-500 text-white rounded-lg text-center transition-transform transform hover:scale-105 hover:bg-red-600 hover:shadow-xl overflow-hidden">
                        <div className="flex flex-col items-center justify-center p-4">
                            <h2 className="text-lg font-semibold">Address</h2>
                            <p className="mt-2 text-sm">123 Main St, Hometown</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
