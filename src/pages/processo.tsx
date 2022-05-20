import { Dialog, Transition } from '@headlessui/react'
import axios from "axios"
import Link from 'next/link'
import { Fragment, useState } from 'react'

export default function Processo() {

  const [isOpen, setIsOpen] = useState<any>(false)
  const [processo, SetProcesso] = useState<any>()
  const [processoDel, SetProcessoDel] = useState<any>()


  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const getProcesso = async (numero: any) => {
    try {
    const res = await axios.get('https://pacific-shelf-02670.herokuapp.com/processo/pesquisarPor?numero='+numero)
    SetProcesso(res.data) 
    console.log(processo)
    } 
    catch (err){
      console.log(err) 
    } 
  }

  const deleteProcesso = async (id: number) => {
    try {
      await axios.delete('https://pacific-shelf-02670.herokuapp.com/processo/'+processo?.id)
    } 
    catch (err){
      console.log(err) 
    } 
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const numero = e.target.elements.numero.value;
    
    await getProcesso(numero)

    SetProcessoDel(numero)
  }

  async function handleDel() {
    await deleteProcesso(processoDel)
    closeModal()
  }


  return (
        <div className="flex flex-col">
          <div className="my-40 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="flex flex-row align-middle justify-center">
                    <div className="col-span-10">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Número do processo:
                      </label>
                      <input
                        type="text"
                        name="numero"
                        id="numero"
                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 text-center bg-gray-50">
                <Link href="/">
                  <button
                      className="mr-4 inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                    >
                      Voltar
                  </button>
                </Link>
                  <button
                  onClick={openModal}
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    Buscar
                  </button>
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
                              Processo {processo?.numero}
                            </Dialog.Title>
                            <div className="mt-2">
                              <ul className="text-lg text-gray-500">
                                <li><span className='text-black font-bold'>ID: </span>{processo?.id}</li>
                                <li><span className='text-black font-bold'>Nome: </span>{processo?.name}</li>
                                <li><span className='text-black font-bold'>Descrição: </span>{processo?.description}</li>
                                <li><span className='text-black font-bold'>Valor da causa: </span>{processo?.valorCausa}</li>
                                <li><span className='text-black font-bold'>Numero: </span>{processo?.numero}</li>
                                <li><span className='text-black font-bold'>Data: </span>{processo?.date}</li>
                                <li><span className='text-black font-bold'>Nome do Magistrado: </span>{processo?.magistrado?.name}</li>
                                <li><span className='text-black font-bold'>Matricula do Magistrado: </span>{processo?.magistrado?.matricula}</li>
                              </ul>
                            </div>

                            <div className="mt-4 text-center">
                              <button
                                type="button"
                                className="mr-4 inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                                onClick={closeModal}
                              >
                                Voltar
                              </button>

                              <button
                                type="button"
                                className="inline-flex justify-center py-2 px-4 mr-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                onClick={handleDel}
                              >
                                Deletar
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
              </div>
            </form>
          </div>
    </div>

  )
}