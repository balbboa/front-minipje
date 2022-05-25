import { Dialog, Transition } from "@headlessui/react"
import axios from "axios"
import Link from 'next/link'
import { Fragment, useState } from 'react'
import Container from "../components/container"

export default function NovoProcesso() {
  
  const [isOpen, setIsOpen] = useState<any>(false)

  const [processo, SetProcesso] = useState<any>()

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const addProcesso = async (obj) => {
    try {
    const res = await axios.post('https://pacific-shelf-02670.herokuapp.com/processo/', obj)
    SetProcesso(res.data) 
    console.log(processo)
    } 
    catch (err){
      console.log(err) 
    } 
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      date : e.target.elements.date.value,
      description : e.target.elements.description.value,
      name : e.target.elements.name.value,
      numero : e.target.elements.numero.value,
      valorCausa : e.target.elements.valorCausa.value,
      magistradoID : e.target.elements.magistradoID.value,
    }
    console.log(obj)
    
    await addProcesso(obj)
  }

  return (
    <Container title="MiniPJe - Criar processo">
        <div className="flex flex-col">
          <div className="my-40 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="flex flex-row align-middle">
                    <div className="mr-5">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Data do processo:
                      </label>
                      <input
                        type="text"
                        name="date"
                        id="date"
                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mr-5">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Descrição do processo:
                      </label>
                      <input
                        type="text"
                        name="description"
                        id="description"
                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mr-5">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Nome do processo:
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="flex flex-row align-middle mt-4">
                    <div className="mr-5">
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
                    <div className="mr-5">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Valor da causa:
                      </label>
                      <input
                        type="text"
                        name="valorCausa"
                        id="valorCausa"
                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="mr-5">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        ID do magistrado:
                      </label>
                      <input
                        type="text"
                        name="magistradoID"
                        id="magistradoID"
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
                    Criar
                  </button>

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
                              Processo {processo?.numero} criado com sucesso!
                            </Dialog.Title>
  

                            <div className="mt-4 text-center">
                            <Link href="/">
                              <button
                                  className="inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                                >
                                  Voltar
                              </button>
                            </Link>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
                </div>
              </div>
            </form>
          </div>
    </div>
    </Container>
  )
}