import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import arrowDown from '../assets/svgs/arrow-down-icon.svg';
import { staticData } from '../staticData';
import { useState } from 'react';
import { Link } from 'react-scroll';

export default function Sidebar() {
  const [active, setActive] = useState(staticData.sideBarTabs[0].subMenu[0].scrollId);
  const [activeTab, setActiveTab] = useState(staticData.sideBarTabs[0].scrollId);

  const toggleTab = (id) => {
    setActiveTab(id);
  }
  const handleTab = (id) => {
    setActive(id);
  }

  return (
    <div className="h-screen w-full">
      <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
        {
          staticData.sideBarTabs.map((item) => {
            return (
              <Disclosure key={item.scrollId} as="div" className="p-1" defaultOpen={false}>
                <DisclosureButton className="group flex w-full items-center justify-between">
                  <span className="text-sm/6 font-medium text-black group-data-[hover]:text-black/80 w-full">
                    <button className={`text-gray-90 hover:bg-gray-50 group flex w-full items-center justify-between gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 transition-colors duration-150 ${item.scrollId === activeTab ? 'text-indigo-500' : 'text-[#2a2a2a]'} `} onClick={() => toggleTab(item.scrollId)} >
                      <span className='inline-flex items-center'>
                        <img src={item.icon} alt="" className='mr-2 h-6 w-6 shrink-0 text-indigo-500' />
                        {item.label}
                      </span>
                      <img src={arrowDown} alt="" className='mr-2 h-4 w-4 shrink-0 text-indigo-500' />
                    </button>
                  </span>
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-black/50">
                  <div className='flex flex-col'>
                    {
                      item?.subMenu?.length && item.subMenu.map((subItem) => {
                        return (

                          <Link to={subItem.scrollId}
                            className={`flex flex-grow cursor-pointer flex-row items-center py-1 pl-2 text-left text-sm text-gray-600 hover:text-indigo-500 ${subItem.scrollId === active ? 'text-indigo-500' : 'text-'}`} onClick={() => handleTab(subItem.scrollId)} key={subItem.scrollId} spy={true} offset={-76} duration={500}>
                            <span className='flex shrink-0 items-center'>
                              <div className='mr-3 h-5 w-5'></div>
                            </span>
                            <span>{subItem.label}</span>
                          </Link>

                        )
                      })
                    }
                  </div>
                </DisclosurePanel>
              </Disclosure>
            )
          })
        }

      </div>
    </div>
  )
}
