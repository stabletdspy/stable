"use client"
import { Header } from "@/components/header/Header";
import { LateralNav } from "@/components/lateralNav/LateralNav";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });




export default function Dashboard() {
    const [login, setLogin] = useState<string | null>(null);

        useEffect(() => {
            const storedLogin = sessionStorage.getItem("clienteLogin");
            setLogin(storedLogin);
        }, []);

    return(
        <div className="flex">
          
            <LateralNav/>
            <div className="w-full pt-10">
                <h3 className={`${inter.className} titleForm text-center`}>Bem-vindo de volta <span className="text-corP1">{login}</span></h3>
            </div>
           

        
                    
        </div>
    );

}