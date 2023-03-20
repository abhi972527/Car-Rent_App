// import React from 'react';

// const CarRentConfirmation = () => {
//   return (
//     <div className='border h-[400px] w-[500px] ' >
//         CarRentConfirmation
//     </div>
//   )
// }

// export default CarRentConfirmation;


import { useState } from 'react';

function CarRentConfirmation() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="border fixed inset-0 bg-gray-400 bg-opacity-50 z-50">
      <div className="border opacity-100 fixed flex flex-col gap-8 bg-white rounded-lg p-6 z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className='flex flex-col gap-1'>
          <div className='text-[20px] text-[#1A202C] font-bold'>
          Confirmation
          </div>
          <div className='text-[14px] text-[#90A3BF] font-normal'>
          We are getting to the end. Just few clicks and your rental is ready!
          </div>
        </div>
        <div>
          
        </div>
        <div>
          
        </div>
        <div>
          
        </div>
        
        
        {/* <p className="mb-4">popup confirmation</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Confirm</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cancel</button> */}
      </div>
    </div>
  );
}

export default CarRentConfirmation;