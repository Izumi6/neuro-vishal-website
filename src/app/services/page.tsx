"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Activity, Brain, Ear, Eye, HandHeart, MessageSquare, Microscope, Stethoscope, Zap } from "lucide-react";

const allServices = [
    {
        title: "Vertigo & Dizziness",
        description: "Specialized diagnosis and treatment for BPPV, Meniere's disease, Vestibular Migraine, and Vestibular Neuritis. Dr. Vishal utilizes advanced Videonystagmography (VNG) for precise root-cause analysis.",
        icon: Activity,
    },
    {
        title: "Headache & Migraine",
        description: "Comprehensive management of chronic headaches, tension headaches, and complex migraines. We offer personalized treatment plans including lifestyle modifications and advanced therapies.",
        icon: Brain,
    },
    {
        title: "Stroke Management",
        description: "Acute stroke care, secondary prevention, and post-stroke rehabilitation strategies to maximize recovery and quality of life.",
        icon: Zap,
    },
    {
        title: "Video Nystagmography (VNG)",
        description: "State-of-the-art diagnostic testing to assess inner ear and central motor function. Critical for differentiating between central and peripheral vertigo.",
        icon: Eye,
    },
    {
        title: "Neuropathy & Nerve Pain",
        description: "Expert care for peripheral neuropathy, diabetic neuropathy, and other nerve-related pain conditions, focusing on pain relief and nerve health.",
        icon: Stethoscope,
    },
    {
        title: "Vestibular Rehabilitation",
        description: "Customized exercise-based programs designed to promote gaze stability, improve balance, and reduce dizziness symptoms.",
        icon: Ear,
    },
    {
        title: "Video Head Impulse Test (vHIT)",
        description: "Advanced testing to assess the function of all six semicircular canals in the inner ear, providing a detailed map of vestibular function.",
        icon: Microscope,
    },
    {
        title: "Epilepsy & Seizures",
        description: "Diagnosis and long-term management of epilepsy and seizure disorders, with a focus on seizure control and medication optimization.",
        icon: Activity,
    },
    {
        title: "Multiple Sclerosis (MS)",
        description: "Compassionate care for autoimmune conditions affecting the central nervous system, with the latest disease-modifying therapies.",
        icon: HandHeart,
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-20 bg-gray-50">
            <Navbar />

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
                            Our Services
                        </h1>
                        <p className="text-xl text-gray-600">
                            World-class neurological care powered by advanced diagnostics and a patient-centered approach. Similar to the best centers globally.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center text-[#0D9488] mb-6 group-hover:bg-[#0D9488] group-hover:text-white transition-colors duration-300">
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
