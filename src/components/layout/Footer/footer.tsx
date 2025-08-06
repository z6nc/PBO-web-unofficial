import { Logo } from "../../common";
import { Link } from "react-router-dom";
import { Mail , Phone } from "lucide-react";
import { NavbarItems } from "../../../data/navbarItems";
import {RedesSociales} from "../../common/RedesSociales/listRedsocial";
export function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
            {/* Decorative background elements */}

            <div className="container mx-auto px-6 py-16 relative z-10 flex flex-col items-center justify-center ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12  ">

                    {/* Logo Section - Enhanced */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="group">
                            <Logo estilo="w-36" priority />
                            <div className="w-20 h-1 bg-gradient-to-r from-white to-transparent mt-3 group-hover:w-32 transition-all duration-300"></div>
                        </div>
                        <p className="text-sm text-gray-200 lg:w-96 text-wrap">Escúchanos por PBO radio 91.9 FM ¡La radio con fe! PBO es el primer canal multi-plataforma de Perú. Fundado en el 2016 por Phillip Butters, PBO te trae lo último en información nacional e internacional, comentarios políticos, tecnología, salud, deporte y entretenimiento.</p>
                    </div>

                    {/* About Section - Redesigned */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white relative">
                            About
                        </h3>
                        <nav className="space-y-4">
                            {
                            NavbarItems.map((item) => (
                                <Link
                                    key={item.item}
                                    to={item.url}
                                    className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm group"
                                >
                                    {item.item}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact & Social - Enhanced */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white relative">
                            Conecta
                        </h3>

                        {/* Contact Info - Compact */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 group">
                                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                                    <Mail className="h-4 w-4" />
                                </div>
                                <span className="text-gray-300 text-sm">PBO@empresa.com</span>
                            </div>
                            <div className="flex items-center space-x-3 group">
                                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                                    <Phone className="h-4 w-4" />
                                </div>
                                <span className="text-gray-300 text-sm">+51 1 6449550</span>
                            </div>
                        </div>

                        {/* Social Media - Improved */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-white">Síguenos</h4>
                            <RedesSociales estilo="flex space-x-3" />
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Enhanced */}
                <div className="border-t border-white/10 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} . Este sitio no es oficial.
                        </p>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}

