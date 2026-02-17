"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-20 bg-[#F8FAFC]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="relative">
                        <div className="h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden relative shadow-xl bg-white/50 border border-gray-100 backdrop-blur-sm">
                            <Image
                                src="/dr-vishal-2.png"
                                alt="Dr. Vishal Pawar"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                        {/* Decorative dots */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[url('/dots.svg')] opacity-20" />
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
                            About Dr. Vishal Pawar
                        </h2>
                        <h3 className="text-xl text-[#0D9488] font-medium">
                            Specialist Neurologist & Vertigo Expert
                        </h3>

                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                Dr. Vishal Pawar is a highly respected Specialist Neurologist with over 12 years of extensive experience in the field. He is widely recognized for establishing **Dubai's first dedicated Vertigo Clinic**, bringing relief to thousands of patients suffering from dizziness and balance disorders.
                            </p>
                            <p>
                                Board-certified with a Specialty Certificate in Neurology from the **Royal College of Physicians, UK**, Dr. Vishal combines academic excellence with a compassionate, patient-centered approach.
                            </p>
                        </div>

                        <ul className="space-y-3 pt-4">
                            {[
                                "MBBS, DNB (Internal Medicine), DNB (Neurology)",
                                "Member of the Royal College of Physicians (UK)",
                                "38+ International Research Publications",
                                "120+ Keynote Lectures Delivered Globally"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-[#0D9488]" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-8">
                            <Button variant="outline" className="text-[#0F172A] border-[#0F172A] hover:bg-[#0F172A] hover:text-white">
                                Read Full Bio
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
