import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react';
import {useNavigate} from 'react-router-dom';

export default function DonePage({setOpenModal}) {
  let navigate = useNavigate();
  const CloseModal = () => {
    setOpenModal(false);
    navigate("/");
  }
  return (
    <>

      <Transition appear show={true} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={() => {setOpenModal(false)}}>
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
                <Dialog.Panel className="w-3/4 max-w-md transform overflow-hidden rounded-2xl bg-neutral-100 p-6 text-center align-middle shadow-xl transition-all ">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 "
                  >
                    <img src="https://simg.nicepng.com/png/small/443-4439064_blue-check-mark-icon-png-check-mark-circle.png" className='h-10 inline-block .relative -mt-2 -ml-2'/>
                    <div className='inline-block text-2xl ml-2'>Done</div>
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Password reset successfully
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => CloseModal() }
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
