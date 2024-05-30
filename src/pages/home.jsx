import { Link } from 'react-router-dom';
import logo from '../assets/logo_clearimg.webp'
import KeyPoints from '../components/ui-components/key-points';

const Home = () => {


  return (
    <div className="bg-[#eff4ff] h-[100vh] px-[16px]">
      <nav className=" max-w-[1200px] mx-auto sticky top-0 border-b-1">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <a href="" className="inline-flex flex-row items-center justify-center gap-2">
                <img src={logo} alt="" className='h-8 w-[37.24px] flex-shrink-0 flex-grow-0 object-cover' />
                <h1 className="flex-shrink-0 flex-grow-0 text-left text-xl md:text-2xl font-semibold text-black">DimeADozen.AI</h1>
              </a>
            </div>

            <div className="hidden md:ml-8 md:flex md:space-x-6">
              <a data-track="nav-link-examples" href="/example-reports" className="inline-flex items-center px-2 pt-1 text-base text-sm font-medium border-transparent text-gray-600 hover:text-gray-700" target="_self">Examples</a>
              <a data-track="nav-link-pricing" href="/pricing" className="inline-flex items-center px-2 pt-1 text-base text-sm font-medium border-transparent text-gray-600 hover:text-gray-700" target="_self">Pricing</a>
            </div>


            <div className="-mr-2 flex items-center md:hidden">
              <button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" id="headlessui-disclosure-button-:ru:" type="button" aria-expanded="false" data-headlessui-state="">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="block h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
              </button>
            </div>
          </div>

          <div className="ml-1  hidden items-center justify-end gap-4 md:ml-3 md:flex">
            <Link to={'/dashboard'} className="rounded-lg text-center font-semibold transition-colors bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 block px-4 py-2.5 text-sm" data-track="dashboard-link-sign up" href="/user/register"><span className="relative flex grow items-center justify-center"><span className="inline-flex grow items-center justify-center gap-2">Dashboard</span></span></Link></div>

        </div>
      </nav>

      <section className='bg-primary-light flex items-start pb-6 pt-4 md:py-12 lg:py-16'>
        <div className='max-w-[1200px] mx-auto px-[1rem]'>
          <div className='flex grow flex-col gap-8 md:flex-row md:gap-24'>
            <div className="flex basis-1/2 items-start">
              <div className="relative max-w-2xl text-center md:text-left">
                <div className="relative">
                  <h1 className="text-[2.5rem] font-[500] leading-[3.5rem] mb-4 text-indigo-700 md:mb-4">Validate Any Business Idea,<strong className="text-gradient whitespace-nowrap"> In Seconds</strong></h1>
                  <h2 className="text-[1.3rem]">Instantly analyze and validate your business ideas. Receive a comprehensive business report in just minutes, not days!</h2>
                  <p className="my-4">Dive in now for free - just enter your business name and idea!</p>
                  <div className="relative">
                    <svg className="absolute  left-0 top-full -mt-5 text-indigo-500 md:right-0 md:-mr-[120px] md:hidden" width="20" height="90" viewBox="0 0 23 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.4508 90.8651C18.4508 90.8651 -11.1407 61.6426 9.19003 2.00024M5.79936 86.926C5.79936 86.926 18.0839 92.2395 18.8533 91.5659C19.6249 90.8902 21.325 81.2741 21.3743 80.0446" stroke="currentColor" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </div>
                  <div className="mt-8 hidden md:flex md:flex-col md:gap-2">
                    <h3 className="text-base font-semibold text-indigo-600">Whats inside my business report?</h3>

                    <KeyPoints title={'Business overview'} />
                    <KeyPoints title={'Market research'} />
                    <KeyPoints title={'Launch and scale'} />
                    <KeyPoints title={'Raise capital'} />

                    <div className="mt-4 flex items-center gap-x-6"><a className="rounded-md bg-indigo-100 px-3.5 py-2.5 text-sm font-medium leading-5 text-indigo-700 shadow-sm hover:bg-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-200" href="/example-reports">See full reports from real businesses <span aria-hidden="true">→</span></a></div>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex basis-1/2 items-start'>
              <div className="w-full">
                <div className="md:mx-0 -mx-4">
                  <div className="flex w-full flex-col bg-white md:w-full md:rounded-lg py-10 px-6 md:p-10">
                    <div className="relative flex flex-col">
                      <div className="mb-6 mb:col-span-4">
                        <label for="8aa5dc3d641d40dbe7f0eff155d3f" className="block text-sm leading-6 text-gray-700 font-semibold">
                          <span className="flex flex-col gap-1">
                            <span className="flex">
                              <span className="flex whitespace-pre-wrap">What is your business's name?</span>

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
                              <span className="flex whitespace-pre-wrap">Describe your business</span>
                              <div className="flex flex-1"></div>
                            </span>
                          </span>
                        </label>
                        <div className="mt-1"><textarea placeholder="Example: Online marketplace that connects people who want to rent out their garage." id="d20a54c8c35a22f8514ec39309749" name="d20a54c8c35a22f8514ec39309749" className="block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" rows="10"></textarea></div>
                      </div>
                      <div className="absolute top-[100%] right-[0] flex touch-none p-0 -mt-5 text-xs text-primary-500"></div>
                    </div>
                    <Link to={'/dashboard'} className='rounded-lg text-center font-semibold transition-colors bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 inline-block px-4 py-2.5 text-sm'>
                      <button ><span className="relative flex grow items-center justify-center"><span className="inline-flex grow items-center justify-center gap-2">Process</span></span></button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>




        </div>
      </section>

    </div>
  )
}

export default Home
