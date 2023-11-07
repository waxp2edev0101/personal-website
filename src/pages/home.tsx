import { useState, useEffect } from "react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import Logo from '../assets/logo-light.png'
import { Article, SearchModal, ReadMoreModal } from "@/components";
import { getControlBlocks, postControlBlocks } from "@/services/api.service";
import data from '../data.json'

import { Montserrat } from 'next/font/google'
const mont = Montserrat({ subsets: ['latin'], weight: ['200', '500', '600', '700'] })
interface IBlock {
  articles: any[]
  category: string
}

const swiperBreakpoints = {
  320: {
    width: 320,
    slidesPerView: 1,
    spaceBetween: 5
  },
  375: {
    width: 375,
    slidesPerView: 1,
    spaceBetween: 5
  },
  425: {
    width: 425,
    slidesPerView: 1.4,
    spaceBetween: 5
  },
  640: {
    width: 640,
    slidesPerView: 2,
    spaceBetween: 5
  },
  768: {
    width: 768,
    slidesPerView: 2.3,
    spaceBetween: 5
  },
  1024: {
    width: 1024,
    slidesPerView: 3,
    spaceBetween: 5
  },
  1440: {
    width: 1440,
    slidesPerView: 5,
    spaceBetween: 5
  },
  1920: {
    width: 1920,
    slidesPerView: 7,
    spaceBetween: 7
  }
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
function Home () {
  const date = new Date()
  const [ showSearchModal, setShowSearchModal ] = useState(false)
  const [swiper, setSwiper] = useState(null);
  const [blocks, setBlocks] = useState<IBlock[]>([])
  const [ readMoreModal, setReadMoreModal ] = useState(false)
  
  useEffect(() => {
    (async () => {
      // const controlBlocks = await getControlBlocks() || {}
      // console.log('control blocks', controlBlocks)
      // const result: any = await postControlBlocks(controlBlocks) || {}

      // console.log('data blocks', result)
      // if (result && result?.dataBlocks && result?.dataBlocks?.length) {
      //   setBlocks(result?.dataBlocks)
      // }
      setBlocks(data.dataBlocks)
    })()
  }, [])

  return (
    <div className="bg-black">
      <div className="relative">
        <div className="flex lg:justify-items-start md:justify-items-start sm:justify-items-center xs:justify-items-center py-4 px-2 header">
          <Image src={Logo.src} alt='' width={150} height={38}/>
        </div>
        <div className="absolute right-3 top-5 sm:top-5 lg:top-5 cursor-pointer" onClick={()=>setShowSearchModal(true)}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" stroke="white" viewBox="0 0 512 512" className="svg-inline--fa fa-search fa-w-16 w-6 h-6 sm:w-8 sm:h-8 text-primary">
            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </div>
      </div>
      <div className='bg-primary py-2 px-2'>
        <p>{`Top Stories ${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}</p>
      </div>
      { showSearchModal && <SearchModal setShowSearchModal={setShowSearchModal} showSearchModal={showSearchModal} />}

      {blocks && blocks.map((block: IBlock, index: number) => (
          <div key={index}>
            <div className="category-header text-white text-[24px] leading-7 my-1 px-2">
              <p className={`capitalize text-left ${mont.className}`}>{block.category === 'unassigned' ? 'None' : block.category}</p>
            </div>
            <Swiper
              id="swiper"
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              slidesPerView={10/2}
              initialSlide={1}
              spaceBetween={5}
              breakpoints={swiperBreakpoints}
              navigation
              onSwiper={(s:any) => {
                setSwiper(s);
              }}
            >
              {block.articles.map((article: any, index: number) => (
                <SwiperSlide 
                  key={`slide-${index}`} 
                >
                  <Article data={article} setReadMoreModal={setReadMoreModal} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
      ))}
      {
        readMoreModal &&
        <ReadMoreModal setReadMoreModal={setReadMoreModal} readMoreModal={readMoreModal} />
      }
    </div>
  )
}

export default Home
