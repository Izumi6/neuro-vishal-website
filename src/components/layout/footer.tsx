import Link from "next/link";
import { Mail, MapPin, Phone, Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0F172A] text-white py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">
                            Neuro<span className="text-[#0D9488]">Vishal</span>
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Dr. Vishal Pawar provides world-class neurology and vertigo care, combining advanced diagnostics with compassionate treatment.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="#about" className="hover:text-white transition-colors">About Dr. Vishal</Link></li>
                            <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="#academic" className="hover:text-white transition-colors">Academic Activities</Link></li>
                            <li><Link href="#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#0D9488] shrink-0" />
                                <span>Aster Hospital, Mankhool, Dubai, UAE</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#0D9488] shrink-0" />
                                <span>+971 4 413 1000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#0D9488] shrink-0" />
                                <span>info@neurovishal.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Connect</h3>
                        <div className="flex gap-4">
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#0D9488] transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#0D9488] transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#0D9488] transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} NeuroVishal. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
