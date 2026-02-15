"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Mic2, FileText, Award } from "lucide-react";

export default function AcademicPage() {
    return (
        <main className="min-h-screen pt-20 bg-white">
            <Navbar />

            <section className="py-20 bg-[#F8FAFC]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-8 text-center">
                            Academic Contributions
                        </h1>

                        <div className="grid gap-8">
                            {/* Publications */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#0F172A]">Research Publications</h2>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Dr. Vishal has authored over **38 publications** in esteemed international journals. His work contributes significantly to the understanding of neurotology and vertigo management.
                                </p>
                                <div className="space-y-4">
                                    <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                                        <h3 className="font-semibold text-[#0F172A]">Posterior Circulation Stroke Presenting as Vertigo</h3>
                                        <p className="text-sm text-gray-500">Published in *Neurology Asia*</p>
                                    </div>
                                    <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                                        <h3 className="font-semibold text-[#0F172A]">Vascular Vertigo: Clinical Characteristics</h3>
                                        <p className="text-sm text-gray-500">Keynote Topic, Frontiers in Neurotology</p>
                                    </div>
                                </div>
                            </div>

                            {/* Lectures */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-teal-100 text-teal-600 rounded-lg">
                                        <Mic2 className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#0F172A]">Invited Lectures</h2>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    A sought-after speaker, Dr. Vishal has delivered over **120 lectures** globally.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex gap-4 items-start">
                                        <span className="font-mono text-[#0D9488] whitespace-nowrap">Nov 2024</span>
                                        <span>"Meningo-encephalitis" - Postgraduate Training, Dubai</span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="font-mono text-[#0D9488] whitespace-nowrap">Nov 2024</span>
                                        <span>"Nurtec for Acute Therapy" - Pfizer Scientific Meeting</span>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="font-mono text-[#0D9488] whitespace-nowrap">Oct 2024</span>
                                        <span>"Core Concepts in BPPV" - Dubai-Oto 24</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
