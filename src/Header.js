import React from "react";
import carWash from './carWash.jpg'
import {Link} from 'react-router-dom'
// import CarWashVideo from './carwashVideo.mp4'


function Header() {

    return (
        <div className="h-screen bg-cover bg-center bg-gradient-to-r from-indigo-800 to-indigo-500 relative" style={{
            backgroundImage: `url(${carWash})`

        }}>
             <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className='absolute inset-0 flex items-center justify-center text-white'>
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Car washing Service</h1>
                    <p className="pb-4 text-lg mt-2">hero descriptiom</p>
                    <Link to="/Booking"> {/* Use Link to navigate to the "new-page" route */}
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Saca Una Cita</button>
                     </Link>


                </div>
            </div>
           
        </div>
        
      );


}

// export default Header;




// function Header() {

//     return (
//         <div className="h-screen relative">
//       <video autoPlay muted loop className="w-full h-full object-cover">
//         <source src={CarWashVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="absolute inset-0 bg-black opacity-60"></div>
//       <div className="absolute inset-0 flex items-center justify-center text-white">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold">Sebastean car Wash</h1>
//           <p className="text-lg mt-2">Hero Description</p>
//         </div>
//       </div>
//     </div>
        
//     );


// }

export default Header;

