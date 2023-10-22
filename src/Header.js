import React from "react";
import carWash from './carWash.jpg'
import CarWashVideo from './carwashVideo.mp4'


// function Header() {

//     return (
//         <div className="h-screen bg-cover bg-center bg-gradient-to-r from-indigo-800 to-indigo-500 relative" style={{
//             backgroundImage: `url(${carWash})`

//         }}>
//              <div className="absolute inset-0 bg-black opacity-60"></div>
//             <div className='absolute inset-0 flex items-center justify-center text-white'>
//                 <div className="text-center">
//                     <h1 className="text-4xl font-bold">Car washing Service</h1>
//                     <p className="text-lg mt-2">hero descriptiom</p>
//                     <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Button</button>

//                 </div>
//             </div>
           
//         </div>
        
//       );


// }

// export default Header;




function Header() {

    return (
        <div className="h-screen relative">
      <video autoPlay muted loop className="w-full h-full object-cover">
        <source src={CarWashVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Sebastean car Wash</h1>
          <p className="text-lg mt-2">Hero Description</p>
        </div>
      </div>
    </div>
        
    );


}

export default Header;

