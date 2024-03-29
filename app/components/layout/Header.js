'use client'
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/imo-academy.png";
import {AiOutlineAlignRight, AiOutlineClose} from "react-icons/ai";
import { useState } from "react";

export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false);

    const HandleNav = () => {
      setMenuOpen(!menuOpen);
    }
    return(
        <header>
          <nav className="fixed w-full shadow-xl bg-teal-700">
            <div className="container flex justify-between items-center mx-auto px-3">
              <Link href={'/'} className="py-2">
                <Image src={Logo} alt='imo-vn-brand-name' width={'180'} className='cursor-pointer' priority />
              </Link>
              <div className="hidden sm:flex">
                <ul className="sm:flex text-white">
                  <Link href={'/'}>
                    <li className="ml-10 uppercase hover:text-teal-300 text-sm font-semibold">Trang chủ</li>
                  </Link>

                  <Link href={'/'}>
                    <li className="ml-10 uppercase hover:text-teal-300 text-sm font-semibold">Giới thiệu</li>
                  </Link>

                  <Link href={'/'}>
                    <li className="ml-10 uppercase hover:text-teal-300 text-sm font-semibold">Đào tạo</li>
                  </Link>

                  <Link href={'/'}>
                    <li className="ml-10 uppercase hover:text-teal-300 text-sm font-semibold">FAQs</li>
                  </Link>

                  <Link href={'/'}>
                    <li className="ml-10 uppercase hover:text-teal-300 text-sm font-semibold">Blog</li>
                  </Link>

                  <Link href={'/'}>
                    <li className="ml-10 uppercase hover:text-teal-300 text-sm font-semibold">Video</li>
                  </Link>

                  <Link href={'/'}>
                    <li className="ml-10 uppercase hover:text-teal-300 text-sm font-semibold">Liên hệ</li>
                  </Link>
                </ul>
              </div>

              <div onClick={HandleNav}  className="md:hidden cursor-pointer pl-24 text-white">
                <AiOutlineAlignRight size={23}/>
              </div>
            </div>

            <div className={
              menuOpen
              ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-primary p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }>
              <div className="flex w-full items-center justify-end">
                <div onClick={HandleNav} className="cursor-pointer">
                  <AiOutlineClose size={23} className="text-white"/>
                </div>
            </div>
            <div className="flex-col py-4 h-screen">
                <ul>
                  <Link href={'/'}>
                    <li onClick={()=>setMenuOpen(false)} className="py-3 text-sm cursor-pointer text-white uppercase font-semibold">Trang chủ</li>
                  </Link>

                  <Link href={'/'}>
                    <li onClick={()=>setMenuOpen(false)} className="py-3 text-sm cursor-pointer text-white uppercase font-semibold">Giới thiệu</li>
                  </Link>

                  <Link href={'/'}>
                    <li onClick={()=>setMenuOpen(false)} className="py-3 text-sm cursor-pointer text-white uppercase font-semibold">Đào tạo</li>
                  </Link>

                  <Link href={'/'}>
                    <li onClick={()=>setMenuOpen(false)} className="py-3 text-sm cursor-pointer text-white uppercase font-semibold">FAQs</li>
                  </Link>

                  <Link href={'/'}>
                    <li onClick={()=>setMenuOpen(false)} className="py-3 text-sm cursor-pointer text-white uppercase font-semibold">Blog</li>
                  </Link>

                  <Link href={'/'}>
                    <li onClick={()=>setMenuOpen(false)} className="py-3 text-sm cursor-pointer text-white uppercase font-semibold">Video</li>
                  </Link>

                  <Link href={'/'}>
                    <li onClick={()=>setMenuOpen(false)} className="py-3 text-sm cursor-pointer text-white uppercase font-semibold">Liên hệ</li>
                  </Link>
                </ul>
              </div>
              <div className="">
                  <ul>
                    <li onClick={()=>setMenuOpen(false)} className="cursor-pointer text-white uppercase font-semibold">Hotline: 0902 2226 119</li>
                  </ul>
              </div>
            </div>
          </nav>
      </header>
    );
}