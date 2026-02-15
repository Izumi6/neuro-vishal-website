"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Mic2, Award } from "lucide-react";

export function Academic() {
    return (
        <section id="academic" className="py-20 bg-[#F0F9FF]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
                        Academic Excellence
                    </h2>
                    <p className="text-gray-600">
                        Dedicated to advancing neurological science through research, education, and global collaboration.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="bg-white border-none shadow-md">
                        <CardHeader className="text-center">
                            <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <CardTitle className="text-4xl font-bold text-blue-600">38+</CardTitle>
                            <p className="font-semibold text-gray-700">Publications</p>
                        </CardHeader>
                        <CardContent className="text-center text-gray-500 text-sm">
                            Published in rigorous peer-reviewed journals including *Frontiers in Neurotology* and *Neurology Asia*.
                        </CardContent>
                    </Card>

                    <Card className="bg-white border-none shadow-md">
                        <CardHeader className="text-center">
                            <div className="w-16 h-16 mx-auto bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mb-4">
                                <Mic2 className="w-8 h-8" />
                            </div>
                            <CardTitle className="text-4xl font-bold text-teal-600">120+</CardTitle>
                            <p className="font-semibold text-gray-700">Lectures</p>
                        </CardHeader>
                        <CardContent className="text-center text-gray-500 text-sm">
                            Keynote speaker at international neurology conferences across Europe, Asia, and the Middle East.
                        </CardContent>
                    </Card>

                    <Card className="bg-white border-none shadow-md">
                        <CardHeader className="text-center">
                            <div className="w-16 h-16 mx-auto bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-4">
                                <Award className="w-8 h-8" />
                            </div>
                            <CardTitle className="text-4xl font-bold text-amber-600">2</CardTitle>
                            <p className="font-semibold text-gray-700">Book Chapters</p>
                        </CardHeader>
                        <CardContent className="text-center text-gray-500 text-sm">
                            Authored chapters on "Vascular Vertigo" and "Complex Cases of Vertigo Decision Making."
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
