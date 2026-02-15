"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Brain, Ear, Eye, Stethoscope, Zap } from "lucide-react";

const services = [
    {
        title: "Vertigo & Dizziness",
        description: "Expert diagnosis and treatment for BPPV, Meniere's disease, and vestibular migraines.",
        icon: Activity,
    },
    {
        title: "Headache & Migraine",
        description: "Comprehensive management of chronic headaches, migraines, and facial pain.",
        icon: Brain,
    },
    {
        title: "Stroke Management",
        description: "Acute stroke care and post-stroke rehabilitation strategies.",
        icon: Zap, // Symbolizing sudden impact/electricity of neural firing
    },
    {
        title: "Video Nystagmography",
        description: "Advanced VNG diagnostics to assess inner ear and central motor function.",
        icon: Eye,
    },
    {
        title: "Neuropathy",
        description: "Treatment for peripheral neuropathy, numbness, and nerve pain.",
        icon: Stethoscope,
    },
    {
        title: "Vestibular Rehab",
        description: "Specialized therapy to improve balance and reduce dizziness.",
        icon: Ear,
    },
];

export function Services() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                        Advanced Neurological Care
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Using state-of-the-art diagnostic tools and evidence-based treatments to provide the best possible outcomes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full hover:shadow-lg hover:border-[#0D9488]/20 transition-all group">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-[#F0FBFA] flex items-center justify-center text-[#0D9488] mb-4 group-hover:bg-[#0D9488] group-hover:text-white transition-colors">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
