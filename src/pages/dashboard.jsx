import BusinessOverview from "../components/business-overview"
import BusinessDetails from "../components/business-overview/business-details"
import LaunchScale from "../components/launch-and-scale"
import MarketResearch from "../components/market-research"
import RaiseCapital from "../components/raise-capital";
import menuIcon from '../assets/svgs/menu-icon.svg';
import Sidebar from "../components/sidebar";
import logo from '../assets/logo_clearimg.webp';
import { Link } from "react-router-dom";
import { useState } from "react";
import close from '../assets/svgs/close.svg'


const Dashboard = () => {


  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <div className="w-[100vw] relative flex">
      <div className="hidden md:flex fixed top-0 left-0 z-40 md:w-96 lg:flex-col bg-red-800">
        <div className="flex grow flex-col h-[100vh] gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
          <Link to={'/'}>
            <div className="flex h-16 shrink-0 gap-4 items-center">
              <img src={logo} alt="" className='h-6' />
              <h1 className='text-lg font-bold text-gray-900'>DimeADozen.Ai</h1>
            </div>
          </Link>
          <Sidebar />
        </div>
      </div>

      <div className=" md:pl-96 relative w-full border-l border-gray-200 md:px-4 ">
        <div className='md:px-4 px-0 sticky top-0 right-0 z-10'>
          <div className='flex items-center md:justify-end justify-between gap-x-4 border-b border-gray-200 bg-white px-4 py-2 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none'>
            <button className='-m-2.5 p-2.5 text-gray-700 lg:hidden'>
              <img src={menuIcon} alt="" className='"h-6 w-6' />
            </button>
            <a href="" className='rounded-lg text-center font-semibold transition-colors bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 inline-block px-4 py-2.5 text-sm'>
              Get your report
            </a>
          </div>
        </div>

        <div className='lg:px-16 md:px-16 px-4 relative'>
          <BusinessDetails />

          <BusinessOverview toggle={toggleModal} />

          <MarketResearch toggle={toggleModal}  />

          <LaunchScale toggle={toggleModal}  />

          <RaiseCapital toggle={toggleModal}  />

          <div className={`${openModal ? 'block' : 'hidden'} w-[50%] mx-auto  bg-white shadow-2xl rounded-[8px] p-[20px] fixed top-1/4 left-1/4`}>
            <div className="flex w-full flex-col  md:w-full md:rounded-lg py-10 px-6 md:p-10 relative">
              <span className=" absolute top-0 right-0 cursor-pointer" onClick={() => toggleModal()}> <img src={close} alt="" className="w-[30px] h-[30px]" /></span>
              <div className="relative flex flex-col">
                <div className="mb-6 mb:col-span-4">
                  <label for="8aa5dc3d641d40dbe7f0eff155d3f" className="block text-sm leading-6 text-gray-700 font-semibold">
                    <span className="flex flex-col gap-1">
                      <span className="flex">
                        <span className="flex whitespace-pre-wrap">Title</span>

                      </span>
                    </span>
                  </label>
                  <div className="mt-1"><input placeholder="Something catchy!" id="8aa5dc3d641d40dbe7f0eff155d3f" className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-none" value="" name="8aa5dc3d641d40dbe7f0eff155d3f" /></div>
                </div>
                <div className="absolute top-[100%] right-[0] flex touch-none p-0 -mt-5 text-xs text-primary-500"></div>
              </div>
              <div className="relative flex flex-col">
                <div className="mb-6 mb:col-span-4">
                  <label for="d20a54c8c35a22f8514ec39309749" className="block text-sm leading-6 text-gray-700 font-semibold">
                    <span className="flex flex-col gap-1">
                      <span className="flex">
                        <span className="flex whitespace-pre-wrap">Description</span>
                        <div className="flex flex-1"></div>
                      </span>
                    </span>
                  </label>
                  <div className="mt-1"><textarea placeholder="Example: Online marketplace that connects people who want to rent out their garage." id="d20a54c8c35a22f8514ec39309749" name="d20a54c8c35a22f8514ec39309749" className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" rows="10"></textarea></div>
                </div>
                <div className="absolute top-[100%] right-[0] flex touch-none p-0 -mt-5 text-xs text-primary-500"></div>
              </div>
              <Link to={'/dashboard'} className='rounded-lg text-center font-semibold transition-colors bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 inline-block px-4 py-2.5 text-sm'>
                <button ><span className="relative flex grow items-center justify-center"><span className="inline-flex grow items-center justify-center gap-2">Update section</span></span></button>
              </Link>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Dashboard
