import React from "react";
import image1 from "../assets/Profile.jpeg";

export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-4 md:px-8">
            <div className="w-full max-w-6xl mx-auto border-b border-neutral-900 pb-8">
                <h1 className="text-4xl font-semibold text-center mb-12">About Me</h1>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Image column */}
                    <div className="lg:col-span-5">
                        <div className="max-w-md mx-auto rounded-xl overflow-hidden shadow-2xl shadow-blue-500/20">
                            <img
                                src={image1}
                                alt="Portrait of Raj Kumar Singh"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Text column */}
                    <div className="lg:col-span-7">
                        <div className="space-y-6 text-neutral-300 ">
                            <p className="text-lg leading-relaxed ">
                                I’m a cybersecurity-focused full-stack developer with a passion for building secure, scalable, and high-performance web applications. My work bridges the gap between software engineering and cybersecurity, ensuring every project I build is hardened against modern threats from the ground up.
                            </p>
                            <p className="text-lg leading-relaxed">
                                With hands-on experience in technologies like React, Node.js, and MongoDB, I create seamless and responsive user interfaces backed by secure, well-architected APIs and data layers. Whether it’s implementing secure authentication, designing resilient backend systems, or developing tools that simulate real-world cyber threats, I approach every project with a security-first mindset.
                            </p>
                            <p className="text-lg leading-relaxed">
                                My dual expertise enables me to deliver web solutions that not only function beautifully but also stand up to rigorous security scrutiny—whether for production systems or cybersecurity research environments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
