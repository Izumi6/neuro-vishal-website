"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-[#F0F9FF] to-white">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E0F2FE] opacity-40 blur-3xl -z-10 rounded-full translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-[#F0XDF4] opacity-30 blur-3xl -z-10 rounded-full -translate-x-1/4" />

            <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 md:space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-[#0D9488] text-sm font-medium border border-teal-100">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                        </span>
                        Accepting New Patients
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#0F172A]">
                        Restoring Balance, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] to-[#0F766E]">
                            Reclaiming Life.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
                        Dr. Vishal Pawar is a world-renowned Specialist Neurologist & Vertigo Expert.
                        Founder of Dubai's First Dedicated Vertigo Clinic.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <Button size="lg" className="rounded-full px-8 gap-2 bg-[#0F172A] hover:bg-[#1E293B]">
                            Book Appointment <Calendar className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full px-8 gap-2 border-gray-300 text-gray-700 hover:bg-gray-50">
                            Explore Services <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                        <div>
                            <p className="text-3xl font-bold text-[#0F172A]">12+</p>
                            <p className="text-sm text-gray-500">Years Experience</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[#0F172A]">30k+</p>
                            <p className="text-sm text-gray-500">Patients Treated</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[#0F172A]">6k+</p>
                            <p className="text-sm text-gray-500">Vertigo Cases</p>
                        </div>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[500px] md:h-[700px] w-full max-w-[500px] mx-auto md:ml-auto"
                >
                    <div className="absolute inset-0 bg-[#0F172A] rounded-[2rem] rotate-3 opacity-5 translate-x-4 translate-y-4" />
                    <div className="relative h-full w-full rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl">
                        <Image
                            src="/dr-vishal.jpg"
                            alt="Dr. Vishal Pawar"
                            fill
                            className="object-cover object-top"
                            priority
                        />

                        {/* Floating Card */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-teal-50 flex items-center justify-center text-[#0D9488]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#0F172A]">Specialist Neurologist</p>
                                    <p className="text-xs text-[#0D9488]">MBBS, DNB, MRCP (UK)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
