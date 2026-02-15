"use client";

import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { CheckCircle2, Award, BookOpen, GraduationCap } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-20">
            <Navbar />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
                            Dr. Vishal Pawar
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Specialist Neurologist, Vertigo Expert, and Founder of Dubai's First Dedicated Vertigo Clinic.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative bg-gray-100">
                                <Image
                                    src="/dr-vishal-2.png"
                                    alt="Dr. Vishal Pawar"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0D9488]/10 rounded-full blur-2xl -z-10" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Professional Excellence</h2>
                                <div className="prose text-gray-600 space-y-4">
                                    <p>
                                        Dr. Vishal Pawar is a highly distinguished Neurologist with over 12 years of specialized experience. His dedication to treating complex dizziness and balance disorders led him to establish the **first dedicated Vertigo Clinic in Dubai** in 2019.
                                    </p>
                                    <p>
                                        He has successfully treated over 30,000 general neurology patients and more than 6,000 patients suffering from vertigo and vestibular disorders.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-[#0F172A]">Qualifications</h3>
                                <ul className="space-y-3">
                                    {[
                                        "MBBS - 2001",
                                        "DNB (Internal Medicine) - 2008",
                                        "DNB (Neurology) - 2012",
                                        "Specialty Certificate in Neurology (Royal College of Physicians, UK) - 2017"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100">
                                            <GraduationCap className="w-5 h-5 text-[#0D9488] shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-[#0F172A]">Key Achievements</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3 p-4 bg-blue-50/50 rounded-xl">
                                        <BookOpen className="w-6 h-6 text-blue-600 mt-1" />
                                        <div>
                                            <p className="font-bold text-[#0F172A]">38+ Publications</p>
                                            <p className="text-sm text-gray-500">In international journals</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-4 bg-teal-50/50 rounded-xl">
                                        <Award className="w-6 h-6 text-[#0D9488] mt-1" />
                                        <div>
                                            <p className="font-bold text-[#0F172A]">Best Paper Award</p>
                                            <p className="text-sm text-gray-500">Multiple conferences</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
