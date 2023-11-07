
import { Fragment, useRef } from "react";
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import icon from '../assets/cropped-ibd-icon-32x32.png'

const mont = Montserrat({ subsets: ['latin'], weight: ['200', '500', '600', '700'] })

export const ReadMoreModal = (props:any) => {
  const { setReadMoreModal, readMoreModal } = props;
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={readMoreModal} as={Fragment}>
      <Dialog as="div" className={`relative z-10 rounded-none ${mont.className}`} initialFocus={cancelButtonRef} onClose={setReadMoreModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto h-[calc(100%-1rem)] max-h-full">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 h-[calc(100%-1rem)] max-h-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="h-[calc(100%-1rem)] max-h-full relative transform overflow-hidden rounded-none shadow-xl transition-all lg:my-16 md:my-16 sm:my-8 sm:w-full sm:max-w-lg">
                <div className="relative bg-black border-2 border-current rounded-none shadow px-3 h-full overflow-hidden	border-white">
                  <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <svg data-prefix="far" data-icon="bookmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="svg-inline--fa fa-bookmark text-white fa-w-12 fa-3x w-5 h-5">
                      <path fill="currentColor" d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path>
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-primary">
                      Focus
                    </h3>
                    <button onClick={()=>setReadMoreModal(false)} className="text-gray-400 bg-transparent border-white rounded-full border hover:bg-gray-200 hover:text-gray-900 text-sm p-1.5 inline-flex items-center">
                      <svg aria-hidden="true" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div className="p-4 text-primary">
                    <div className="flex justify-between items-center">
                      <div className="from-pink-600 bg-gradient-to-l text-left text-[28px] w-4/5 leading-5 p-4">
                        News
                      </div>
                      <Image src={icon.src} alt='' width={30} height={30} className="rounded-full border-2 border-white" />
                    </div>
                    <div className='text-[24px] text-left font-bold leading-7 italic mt-4'>
                      Netflix Stock Wavers As Streaming Video Leader Misses Subscriber Target
                    </div>
                    <div className='text-[16px] text-left leading-5 h-[350px] lg:h-[550px] overflow-hidden mt-2'>
                      {`Netflix said Tuesday it is preparing a "broad rollout" of its plan to crackdown on password sharing in the coming months. In its latest earnings release, the streaming giant said its paid-sharing plan — designed to eliminate unpaid account sharing — would be unveiled in the second quarter of the year. “In Q1, we launched paid sharing in four countries and are pleased with the results,” Netflix said in its Q1 letter to shareholders. “We are planning on a broad rollout, including in the U.S., in Q2.” The four countries it was referring to are Canada, New Zealand, Portugal and Spain. In February, Netflix launched a “buy an extra member” option that lets primary account holders pay an additional monthly fee to give access to as many as two people they don't live with. Outside of the Netflix Inc. office in Los Angeles, on April 19, 2021. Bing Guan / Bloomberg via Getty Images file Last year, Netflix launched paid-sharing tests in three Latin American countries. In February, Variety reported the company will begin to block devices that it detects are being used by someone outside the account-holder’s primary residence after a certain number of days. Netflix said in its earnings release Tuesday that it would likely take a short-term financial hit as a result of the password-sharing crackdown, but that the paid-sharing plan is a good strategy long term. The company noted that, in Canada, its paid membership base is now larger than it was prior to the launch of paid sharing. “As with Latin America, we see a cancel reaction in each market when we announce [paid sharing plans], which impacts near-term member growth,” the company said. “But as borrowers start to activate their own accounts and existing members add ‘extra member’ accounts, we see increased acquisition and revenue.”...`}
                      <div className="absolute bottom-0 h-[150px] w-full article-img-gradient1"></div>  
                    </div>
                    <div className="absolute bottom-4">
                      <Link href="https://www.investors.com/news/technology/netflix-stock-drops-as-streamer-misses-subscriber-target/" target="_blank">
                        <div className="text-lg font-semibold text-white cursor-pointer">Read More→</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
              
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
