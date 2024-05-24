import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import avengersEndgame from '../images/avengersEndgame.jpg'
import peakyBlinder from '../images/peakyblinder.jpeg'
import fukrey from '../images/fukrey.jpg'
import Navbar from './Navbar'
import Category from './Category';
const Home = () => {
    return (
        <>
            <Navbar />
            <div className='grid grid-rows-2 bg-black w-full'>
                <div className='bg-black pl-5 h- w-full pb-8'>
                    <h1 className="text-white text-5xl ml-11 font-semibold mt-7">Movies</h1>
                    <Carousel className='h-96 w-full mt-8' showThumbs={false} autoPlay={true}>
                        <div style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,7),rgba(0,0,0,0.1)),url(${fukrey})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '1100px 400px' }} className='h-96 w-full'>

                        </div>
                        <div>
                            <div style={{ backgroundImage: `linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)), url(${avengersEndgame})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '1100px 400px' }} className='h-96 w-full'>

                            </div>
                        </div>
                        <div>
                            <div style={{ backgroundImage: `linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)), url(${peakyBlinder})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: '1100px 400px' }} className='h-96 w-full'>

                            </div>
                        </div>
                    </Carousel>
                </div>
                <div>
                    <Category/>
                </div>
            </div>
        </>
    )
}

export default Home