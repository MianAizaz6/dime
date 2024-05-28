import logo from './assets/logo_clearimg.webp';
import Sidebar from './components/sidebar';
import menuIcon from './assets/svgs/menu-icon.svg';
import BusinessDetails from './components/business-overview/business-details';
import BusinessOverview from './components/business-overview';
import MarketResearch from './components/market-research';
import LaunchScale from './components/launch-and-scale';
import RaiseCapital from './components/raise-capital';
function App() {

  return (
    <div className="w-[100vw] relative flex">
      <div className="hidden md:flex fixed top-0 left-0 z-40 md:w-96 lg:flex-col bg-red-800">
        <div className="flex grow flex-col h-[100vh] gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
          <div className="flex h-16 shrink-0 gap-4 items-center">
            <img src={logo} alt="" className='h-6' />
            <h1 className='text-lg font-bold text-gray-900'>DimeADozen.Ai</h1>
          </div>
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

        <div className='lg:px-16 md:px-16 px-4'>
          <BusinessDetails />

          <BusinessOverview />

          <MarketResearch />

          <LaunchScale />

          <RaiseCapital />
        </div>


      </div>
    </div>
  )
}

export default App
