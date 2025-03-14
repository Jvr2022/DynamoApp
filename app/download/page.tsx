import React from 'react';
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FaAndroid, FaWindows, FaGlobe, FaLinux, FaApple, FaMobileAlt, } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import Image from 'next/image';

const DownloadPage = () => {
    const platforms = [
        { name: "Android", icon: FaAndroid, description: "Download for Android mobile devices." },
        { name: "Windows", icon: FaWindows, description: "Download for Windows desktop." },
        { name: "Web", icon: FaGlobe, description: "Use Dynamo directly in your web browser." },
        { name: "Linux", icon: FaLinux, description: "Download for Linux operating systems." },
        { name: "macOS", icon: FaApple, description: "Download for macOS desktop." },
        { name: "iOS", icon: FaMobileAlt, description: "Download for iOS mobile devices (iPhone, iPad)." },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <SiteHeader />

            <main className="container py-20 md:py-32">
                <section className="text-center">
                    <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        Get Ready to Experience Dynamo
                    </h1>
                    <p className="text-gray-500 text-xl mb-12 leading-relaxed">
                        Our application is in active development. Select your preferred platform to stay informed
                        about the release.
                    </p>
                </section>

                <motion.section
                    className="mt-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {platforms.map((platform, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                                variants={itemVariants}
                            >
                                <div className="p-6 flex flex-col items-center">
                                    {React.createElement(platform.icon, { className: "h-14 w-14 text-[#00AFF0] mb-4" })}
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{platform.name}</h3>
                                    <p className="text-gray-500 text-center mb-4">{platform.description}</p>
                                    <Button
                                        disabled
                                        className="w-full bg-gray-200 text-gray-500 cursor-not-allowed hover:bg-gray-300 transition-colors duration-200"
                                    >
                                        Coming Soon
                                    </Button>
                                </div>
                                <div className="bg-gray-100 py-3 text-center text-sm text-gray-500 italic">
                                    Stay Tuned for Updates
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <section className="mt-20 text-center">
                    <p className="text-gray-500 text-lg">
                        We appreciate your enthusiasm! We are working hard to bring Dynamo to you soon.
                    </p>
                    <div className="mt-8">
                        <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jouw%20alineatekst_20250306_230210_0000-mC7wtSLXwtKuvkpRGKUKjBbXns9xxC.png" 
                            alt="Illustration of Dynamo app in development"
                            width={200}
                            height={200}
                            className="rounded-full mx-auto shadow-md"
                        />
                    </div>
                </section>
            </main>

            <SiteFooter />
        </div>
    );
};

export default DownloadPage;
