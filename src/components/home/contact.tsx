"use client";

import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-[#0F172A] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

                    {/* Contact Info */}
                    <div className="p-10 md:p-16 md:w-1/2 space-y-8 text-white">
                        <h2 className="text-3xl md:text-4xl font-bold">Book Your Appointment</h2>
                        <p className="text-gray-300">
                            Take the first step towards recovery. Dr. Vishal Pawar is available for consultation at Aster Hospital, Mankhool.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-[#0D9488]" />
                                </div>
                                <div>
                                    <p className="font-semibold text-lg">Call Us</p>
                                    <p className="text-gray-400 text-sm">+971 4 413 1000</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-[#0D9488]" />
                                </div>
                                <div>
                                    <p className="font-semibold text-lg">Location</p>
                                    <p className="text-gray-400 text-sm">Aster Hospital, Mankhool, Dubai, UAE</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                    <Clock className="w-5 h-5 text-[#0D9488]" />
                                </div>
                                <div>
                                    <p className="font-semibold text-lg">Clinic Hours</p>
                                    <p className="text-gray-400 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <Button size="lg" className="w-full bg-[#0D9488] hover:bg-[#0F766E] text-white">
                            Call Now to Book
                        </Button>
                    </div>

                    {/* Map (Placeholder) */}
                    <div className="md:w-1/2 min-h-[400px] bg-gray-200 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.6653392471676!2d55.29749877607779!3d25.24810752962453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f432e185e2b61%3A0xe104332305545938!2sAster%20Hospital%20-%20Mankhool!5e0!3m2!1sen!2sae!4v1707521000000!5m2!1sen!2sae"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full border-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
