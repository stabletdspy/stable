"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image';

import logoHeader from '../../logo.svg';
import { Roboto } from "next/font/google";
import { MdMenu } from "react-icons/md";
import { usePathname } from "next/navigation";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const Header = () => {
    const currentPath = usePathname();
    const[drawer, setDrawer] = useState(false);

    useEffect(() => {
        setDrawer(false);
    }, [currentPath]);

    return (
        <header className="max-w-screen-2xl mx-auto">
            <nav className="flex justify-between items-center py-10 px-5">
                <Link href="/">
                    <Image
                        src={logoHeader} 
                        width={130}
                        height={19}
                        alt="Logo AutoCare"
                    />
                </Link>

                <button className="md:hidden" onClick={() => setDrawer(true)}>
                    <MdMenu className="size-8 text-corP1"/>
                </button>

                <ul 
                    className="hidden md:flex gap-10 text-base" 
                    tabIndex={drawer ? -1 : undefined}
                >
                    <li>
                        <a href="/#sobre-serviço" className={roboto.className}>
                            DIFERENCIAIS
                        </a>
                    </li>
                    <li>
                        <a href="/#como-funciona" className={roboto.className}>
                            COMO FUNCIONA
                        </a>
                    </li>
                    <li>
                        <Link href="/integrantes" className={roboto.className}>
                            QUEM SOMOS NÓS
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/login"
                            className={`${roboto.className} text-corP1 p-2 rounded-lg border border-corP1 hover:bg-corP1 hover:text-branco`}
                        >
                            ÁREA DO CLIENTE
                        </Link>
                    </li>
                </ul>

                <div 
                    data-open={drawer} 
                    className="bg-black bg-opacity-25 fixed top-0 left-0 bottom-0 right-0 transition-transform data-[open=false]:translate-x-full" 
                    onClick={() => setDrawer(false)} 
                    tabIndex={drawer ? 0 : -1}
                >
                    <ul className="ml-auto flex gap-10 text-sm flex-col items-center justify-around bg-branco px-4 w-60 h-full" onClick={e => e.stopPropagation()}>
                        <li>
                            <a href="/#sobre-serviço" className={roboto.className}>
                                DIFERENCIAIS
                            </a>
                        </li>
                        <li>
                            <a href="/#como-funciona" className={roboto.className}>
                                COMO FUNCIONA
                            </a>
                        </li>
                        <li>
                            <Link href="/integrantes" className={roboto.className}>
                                QUEM SOMOS NÓS
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/login"
                                className={`${roboto.className} text-corP1 p-2 rounded-lg border-[1px] border-corP1 hover:bg-corP1 hover:text-branco`}
                            >
                                ÁREA DO CLIENTE
                            </Link>
                        </li>
                    </ul>
                </div>  
            </nav>
        </header>
    );
};