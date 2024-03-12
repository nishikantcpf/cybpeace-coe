import { useState } from "react";
import { CCOELogo } from "../assets/photos";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navigate = useNavigate();

    const navLinks = [
        {
            href: "/",
            name: "Home"
        },
        {
            href: "/events",
            name: "Events"
        },
        {
            href: "/register",
            name: "Register For COE"
        },
        {
            href: "/glimpses",
            name: "Glimpses"
        },
        {
            href: "/about-cyberpeace",
            name: "About us"
        },
        {
            href: "/contact",
            name: "Contact us"
        }
    ];

    const isActiveLink = (href) => {
        return location.pathname === href;
    };

    return (
        <div className="navbar">
            <div className="logo" onClick={() => navigate("/")}>
                <img src={CCOELogo} alt="logo" />
            </div>

            {/* DESKTOP VIEW */}
            <div className="links">
                {navLinks.map((link, index) => (
                    <div className="nav-link" key={index}>
                        <a href={link.href} className={isActiveLink(link.href) ? 'active' : ''}>{link.name}</a>
                    </div>
                ))}

                {/* <motion.div
                    className="contact"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <a href="/contact">Contact us</a>
                </motion.div> */}
            </div>

            {/* Mobile VIEW */}
            <div className="mobile-view">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 800, damping: 10 }}
                >
                    <Bars3Icon
                        className="ham-icon"
                        onClick={() => setIsOpen(prev => !prev)}
                    />
                </motion.div>

                <div
                    className='side-nav'
                    style={{
                        transform: isOpen ? 'translateX(0%)' : 'translateX(-110%)',
                        position: isOpen ? 'fixed' : 'absolute'
                    }}
                >
                    <XMarkIcon
                        className="close-icon"
                        onClick={() => setIsOpen(prev => !prev)}
                    />
                    <ul className="mob-links">
                        {navLinks.map((link, index) => (
                            <motion.li
                                key={index}
                                whileHover={{ scale: 1.1 }}
                            >
                                <a href={link.href} className={isActiveLink(link.href) ? 'active' : ''}>{link.name}</a>
                                <hr />
                            </motion.li>
                        ))}
                        {/* <motion.li whileHover={{ scale: 1.2 }}>
                            <a href="/contact">Contact us</a>
                            <hr />
                        </motion.li> */}
                    </ul>

                    <div className="side-nav-footer">
                        <p>
                            Copyright ©️ 2021 CyberPeace
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
