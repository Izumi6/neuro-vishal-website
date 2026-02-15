"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Contact } from "@/components/home/contact"; // Reusing the component

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-20 bg-white">
            <Navbar />
            <div className="py-12 text-center bg-gray-50">
                <h1 className="text-4xl font-bold text-[#0F172A]">Contact & Location</h1>
                <p className="text-gray-600 mt-2">We look forward to helping you.</p>
            </div>
            <Contact />
            <Footer />
        </main>
    );
}
