import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import Create from '../../public/add-file.png';
import List from '../../public/list.png';
import Search from '../../public/seo.png';


export default function Home() {

  const [listProcesso, SetListProcesso] = useState<any>()
  const [isOpen, setIsOpen] = useState<any>(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const listarProcesso = async () => {
    try {
    const res = await axios.get('https://pacific-shelf-02670.herokuapp.com/processo')
    SetListProcesso(res.data) 
    console.log(listProcesso)
    } 
    catch (err){
      console.log(err) 
    } 
  }

  async function handleClick() {
    await listarProcesso()
    openModal()
  }

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

      <div className="m-6 flex flex-col justify-center">
        <div className="group relative">
          <div onClick={handleClick}className="cursor-pointer bg-white relative shadow-2xl rounded-3xl p-24 overflow-hidden group-hover:opacity-75">
            <Image
              src={List}
              alt="Picture of the author"
              width={150}
              height={150}
              className="w-full h-full object-center object-cover"
            />   
            <h3 className="mt-6 text-2xl text-black text-center font-bold">
              Listar Processos           
            </h3>
          </div>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-bold text-center text-black"
                    >
                      Processos:
                    </Dialog.Title>
                    <div className="mt-4 text-center">
                      <button onClick={closeModal}
                          className="inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                        >
                          Voltar
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  </div>
  )
}
