import axios from "axios"
import Link from 'next/link'
import { useState } from 'react'

export default function NovoProcesso() {

  const [isOpen, setIsOpen] = useState<any>(false)
  const [processo, SetProcesso] = useState<any>()
  const [processoDel, SetProcessoDel] = useState<any>()


  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const addProcesso = async (id: number) => {
    try {
    const res = await axios.post('https://pacific-shelf-02670.herokuapp.com/processo/'+id)
    SetProcesso(res.data) 
    console.log(processo)
    } 
    catch (err){
      console.log(err) 
    } 
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = e.target.elements.numero.value;
    
    await addProcesso(id)
  }

  return (
        <div className="flex flex-col">
          <div className="my-40 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="flex flex-row align-middle">
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

                  <div className="flex flex-row align-middle">
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
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    Criar
                  </button>
                </div>
              </div>
            </form>
          </div>
    </div>

  )
}