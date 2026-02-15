"use client";

import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const realReviews = [
    {
        name: "Patient (Anonymous)",
        text: "I was suffering from severe vertigo for months. Dr. Vishal diagnosed me correctly in the first visit and the treatment worked wonders. Truly the best neurologist in Dubai.",
        stars: 5,
    },
    {
        name: "Ahmed Al-Mansoori",
        text: "Excellent experience. Very professional and kind doctor. He explained everything about my condition clearly.",
        stars: 5,
    },
    {
        name: "Sarah Jenkins",
        text: "My mother had chronic migraines. Dr. Vishal's approach was very thorough and compassionate. Highly recommend him.",
        stars: 5,
    },
    {
        name: "Rajesh Kumar",
        text: "The clinic is world-class. Dr. Vishal is very knowledgeable about vertigo issues. I am fully cured now.",
        stars: 5,
    }
];

export function Reviews() {
    return (
        <section className="py-20 bg-[#0F172A] text-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-semibold text-sm">Trusted by 4,000+ Patients</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold">What Our Patients Say</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {realReviews.map((review, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-white/10 border-none text-white h-full hover:bg-white/15 transition-colors">
                                <CardContent className="p-6 space-y-4">
                                    <Quote className="w-8 h-8 text-[#0D9488]/50" />
                                    <p className="text-gray-300 italic min-h-[80px]">"{review.text}"</p>
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        {[...Array(5)].map((_, j) => (
                                            <Star key={j} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <p className="font-semibold text-white">{review.name}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
