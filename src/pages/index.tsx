import Image from 'next/image';
import Link from 'next/link';
import Create from '../../public/add-file.png';
import Search from '../../public/seo.png';

export default function Home() {
  return (
  <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
    <h2 className="text-2xl font-extrabold text-black text-center">Mini PJe</h2>
    <div className="flex flex-row justify-center">
      <div className="m-6 flex flex-row justify-center">
        <div className="group relative">
        <Link href="/processo">
          <div className="cursor-pointer bg-white relative shadow-2xl rounded-3xl p-24 overflow-hidden group-hover:opacity-75">
            <Image
              src={Search}
              alt="Picture of the author"
              width={150}
              height={150}
              className="w-full h-full object-center object-cover"
            />   
            <h3 className="mt-6 text-2xl text-black text-center font-bold">
              Buscar Processo           
            </h3>
          </div>
          </Link>
        </div>
      </div>

      <div className="m-6 flex flex-col justify-center">
        <div className="group relative">
        <Link href="/novo">
          <div className="cursor-pointer bg-white relative shadow-2xl rounded-3xl p-24 overflow-hidden group-hover:opacity-75">
            <Image
              src={Create}
              alt="Picture of the author"
              width={150}
              height={150}
              className="w-full h-full object-center object-cover"
            />   
            <h3 className="mt-6 text-2xl text-black text-center font-bold">
              Criar Processo           
            </h3>
          </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
