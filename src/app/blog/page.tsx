"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link"; // Changed from 'lucide-react' to 'next/link' for actual links if needed

const blogs = [
    {
        title: "What Should I Do During a Vertigo Attack?",
        date: "August 30, 2025",
        description: "Experiencing a sudden vertigo attack can be terrifying. Here is a step-by-step action plan to manage the symptoms effectively until you can see a specialist.",
        slug: "what-to-do-vertigo-attack"
    },
    {
        title: "What is Vertigo? Understanding the Spin",
        date: "August 21, 2025",
        description: "Vertigo is more than just dizziness. It's a specific sensation that you or the world around you is spinning. Learn about the causes and types.",
        slug: "what-is-vertigo"
    },
    {
        title: "Migraine vs. Vertigo: What's the Link?",
        date: "July 12, 2025",
        description: "Did you know that migraines can cause vertigo? Vestibular migraine is a common but often undiagnosed condition.",
        slug: "migraine-vs-vertigo"
    }
];

export default function BlogPage() {
    return (
        <main className="min-h-screen pt-20 bg-white">
            <Navbar />

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h1 className="text-4xl font-bold text-[#0F172A] mb-4">
                            Patient Education & Blog
                        </h1>
                        <p className="text-gray-600">
                            Insights, tips, and medical information to help you understand your condition better.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog, index) => (
                            <Card key={index} className="flex flex-col hover:shadow-lg transition-all border-none shadow-sm">
                                <CardHeader>
                                    <div className="flex items-center gap-2 text-sm text-[#0D9488] mb-3">
                                        <Calendar className="w-4 h-4" />
                                        <span>{blog.date}</span>
                                    </div>
                                    <CardTitle className="text-xl leading-snug hover:text-[#0D9488] transition-colors cursor-pointer">
                                        {blog.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {blog.description}
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="link" className="p-0 text-[#0F172A] hover:text-[#0D9488]">
                                        Read Article <ArrowRight className="w-4 h-4 ml-1" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
