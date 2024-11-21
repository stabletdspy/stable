"use client";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import logo from '../../../public/assets/svg/logoNav.svg';
import problemIcon from '../../../public/assets/svg/scanProblem.svg';
import configIcon from '../../../public/assets/svg/configIcon.svg';
import sairIcon from '../../../public/assets/svg/sairIcon.svg';

export const LateralNav = () => {
    const router = useRouter();

    const handleLogout = () => {
        sessionStorage.removeItem('clienteLogin'); 
        router.push('/login'); 
    };

    return (
        <>
            <div className='max-w-max'>
                <nav className='flex flex-col items-center h-screen justify-between py-[50px] px-5 border-r-1 border-solid border-[#E9E9E9]'>
                   <Image src={logo} alt="Logo AutoCare" className=''/>
                   <button className='p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full'><Image src={problemIcon} alt='Scan Problem'/></button>
                   <ul className='flex flex-col items-center gap-10'>
                        <li><button><Image src={configIcon} alt='Config'/></button></li>
                        <li><button onClick={handleLogout} className='p-3 bg-[#F0F0F0] rounded-full hover:bg-[#d6d6d6]'><Image src={sairIcon} alt='Sair'/></button></li>
                   </ul>
                </nav>
            </div>
        </>
    );
};