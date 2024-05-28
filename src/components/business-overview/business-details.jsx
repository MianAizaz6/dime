import bndLogo from '../../assets/airbnb.png';

const BusinessDetails = () => {
  return (
    <div>
      <div className='relative my-4 mt-8 flex justify-center gap-2 text-center md:mt-12'>
        <div className='group inline-flex flex-wrap items-center text-center'>
          <img src={bndLogo} alt="" className='h-8' />
        </div>
        <h1 className="group inline-flex flex-wrap items-center gap-2 text-center text-2xl font-semibold">Airbnb</h1>
      </div>

      <h2 className="my-4 flex flex-col rounded-xl bg-violet-50 p-6 text-gray-700"><div className="font-bold">Business Summary</div><span className="text-typer block"><p>Airbnb is an online platform that enables hosts to offer unique stays and experiences to guests worldwide. It was founded in 2007 and has grown to over 4 million hosts who have welcomed over 1.5 billion guest arrivals in almost every country across the globe. The company provides a mobile application that allows users to list, discover, and book unique accommodations, including private rooms, primary homes, vacation homes, and more. Airbnb has a presence in over 200 countries and regions, with more than 7 million active listings worldwide. It has also facilitated over $180 billion in earnings for hosts and collected $7 billion in taxes globally. The companys mission is to create a world where anyone can belong anywhere.</p></span></h2>
    </div>
  )
}

export default BusinessDetails
