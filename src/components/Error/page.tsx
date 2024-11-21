import Image from 'next/image'
import Link from 'next/link'
import logo from "../../../public/assets/images/stable-icon.png"

export default function ErrorComponent(){
return(
    <div className="bg-white flex flex-col justify-center items-center content-center">
        <h2 className='text-black text-2xl pt-10 pb-6'>Página não encontrada, clique <Link href="/" className='text-green-500 text-2xl font-bold'>aqui</Link> para voltar para página inicial</h2>
        <Image
      src={logo}
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </div>
)
}