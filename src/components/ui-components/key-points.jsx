import checkCirle from '../../assets/svgs/check-circle.svg';
import arrowRight from '../../assets/svgs/arrow-down-icon.svg';

const KeyPoints = ({ title }) => {
  return (
    <div className="mt-2 flex flex-col text-sm">
      <div className="flex cursor-pointer items-center gap-2 font-semibold">
        <img src={checkCirle} alt="" className='w-[20px] h-[20px]' />
        <span>{title}</span>
        <img src={arrowRight} alt="" className='h-[14px] w-[14px]' />
      </div>
    </div>
  )
}

export default KeyPoints
