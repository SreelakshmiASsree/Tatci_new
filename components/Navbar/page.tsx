"use client"
import Image from "next/image";
import Link from "next/link";
import { IoReorderThree } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import logo from "../../public/images/logo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-black shadow-md z-50">
            <div className="custom_container">
                <div className="flex justify-between items-center ">
                    {/* Logo */}
                    <div>
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="Company Logo"
                                width={80}
                                height={80}
                                className="w-40 md:w-20"
                            />
                        </Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex gap-10 justify-between items-center mr-36">
                        <button className="lg:text-lg text-[#ffffff] font-normal rounded-xl hover:bg-[#ffe2e2]">
                            Home
                        </button>
                        <button className="lg:text-lg text-[#ffffff] font-normal rounded-xl hover:bg-[#ffe2e2]">
                            Agency
                        </button>
                        <button className="lg:text-lg text-[#ffffff] font-normal rounded-xl hover:bg-[#ffe2e2]">
                            CoWorking
                        </button>

                        <button className="lg:text-lg text-[#ffffff] font-normal rounded-xl hover:bg-[#ffe2e2]">
                            Academy
                        </button>

                        <button className="lg:text-lg text-[#ffffff] font-normal rounded-xl hover:bg-[#ffe2e2]">
                            About
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="lg:hidden text-3xl text-gray-800"
                    >
                        <IoReorderThree />
                    </button>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="fixed top-0 right-0 w-3/4 h-full bg-white z-50 text-lg font-medium pt-28 transition-all duration-300">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 text-3xl text-gray-700 hover:text-black"
                            >
                                <MdClose />
                            </button>

                            <div className="flex flex-col items-center justify-center gap-4">
                                <button className="lg:text-lg font-normal py-1 px-5 rounded-xl hover:bg-[#ffe2e2]">
                                    Home
                                </button>
                                <button className="lg:text-lg font-normal py-1 px-5 rounded-xl hover:bg-[#ffe2e2]">
                                    Agency
                                </button>
                                <button className="lg:text-lg font-normal py-1 px-5 rounded-xl hover:bg-[#ffe2e2]">
                                    CoWorking
                                </button>
                                <button className="lg:text-lg font-normal py-1 px-5 rounded-xl hover:bg-[#ffe2e2]">
                                    Academy
                                </button>
                                <button className="lg:text-lg font-normal py-1 px-5 rounded-xl hover:bg-[#ffe2e2]">
                                    About
                                </button>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
