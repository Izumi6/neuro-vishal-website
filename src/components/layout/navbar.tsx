"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Academic", href: "/academic" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    {/* Logo */}
                    <div className="relative w-8 h-8 md:w-10 md:h-10">
                        <Image
                            src="/logo.png"
                            alt="NeuroVishal Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className={cn("text-xl md:text-2xl font-bold tracking-tight", isScrolled ? "text-[#0F172A]" : "text-[#0F172A]")}>
                        Neuro<span className="text-[#0D9488]">Vishal</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-[#0D9488]",
                                isScrolled ? "text-gray-700" : "text-gray-800"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant={isScrolled ? "primary" : "primary"} size="sm" className="gap-2">
                        <Phone className="w-4 h-4" />
                        +971 4 413 1000
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6 text-[#0F172A]" />
                    ) : (
                        <Menu className="w-6 h-6 text-[#0F172A]" />
                    )}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4 border-t">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium text-gray-700 hover:text-[#0D9488]"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button className="w-full gap-2">
                        <Phone className="w-4 h-4" />
                        Call Now
                    </Button>
                </div>
            )}
        </header>
    );
}
