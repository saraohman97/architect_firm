import home from '../assets/home.jpg'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import Line from '../components/Line';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import cap from '../assets/cap.gif'

const comments = [
    {
        id: 1,
        name: 'Mumin and sons',
        comment: 'We got to see through the eyes of our enemies. '
    },
    {
        id: 2,
        name: 'Mumin and sons',
        comment: 'We got to see through the eyes of our enemies. '
    },
    {
        id: 3,
        name: 'Mumin and sons',
        comment: 'We got to see through the eyes of our enemies. '
    },
    {
        id: 4,
        name: 'Mumin and sons',
        comment: 'We got to see through the eyes of our enemies. '
    },
    {
        id: 5,
        name: 'Mumin and sons',
        comment: 'We got to see through the eyes of our enemies. '
    },
    {
        id: 6,
        name: 'Mumin and sons',
        comment: 'We got to see through the eyes of our enemies. '
    }
]

const work = [
    {
        id: 1,
        image: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        url: 'https://www.google.com',
        name: 'Mumin and sons',
        comment: 'We got to see through the eyes of our enemies.'
    },
    {
        id: 2,
        image: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        url: 'https://www.google.com',
        name: 'Mumin and sons',
        comment: 'We got to see through the eyes of our enemies.'
    },
    {
        id: 3,
        image: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        url: 'https://www.google.com',
        name: 'Mumin and sons',
        comment: 'We got to see through the eyes of our enemies.'
    },
    {
        id: 4,
        image: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        url: 'https://www.google.com',
        name: 'Mumin and sons',
        comment: 'We got to see through the eyes of our enemies.'
    }
]

function Home() {
    // menu state
    const [openMenu, setOpenMenu] = useState(false)
    // Toggle visit-us-section
    const [map, setMap] = useState(false)

    return (
        <div className='p-6 md:p-10 max-w-screen-xl m-auto overflow-x-hidden'>
            <header className='h-screen w-full md:px-10'>
                {/* navbar */}
                <nav className='pb-6 md:pb-10 flex flex-row justify-between'>
                    <div className='uppercase'>Wynonna Earp</div>
                    <div className='flex flex-row gap-5 max-md:hidden'>
                        <Link to='/' className='hover:text-yellow-500 cursor-pointer'>Home</Link>
                        <Link to='/empty' className='hover:text-yellow-500 cursor-pointer'>Events</Link>
                        <Link to='/empty' className='hover:text-yellow-500 cursor-pointer'>About</Link>
                        <p>012 345 67 89</p>
                    </div>

                    {/* menu */}
                    <AiOutlineMenu className='md:hidden hover:text-yellow-500 cursor-pointer' size={20} onClick={() => setOpenMenu(true)} />
                    {openMenu && (
                        <>
                            <div className='bg-black fixed inset-0 z-20 bg-opacity-50' onClick={() => setOpenMenu(false)} />
                            <div className='flex flex-col items-center justify-center gap-6 p-4 bg-white fixed top-0 right-0 h-screen md:w-1/2 w-52 z-50'>
                                <Link to='/' className='hover:text-yellow-500 cursor-pointer'>Home</Link>
                                <Link to='/empty' className='hover:text-yellow-500 cursor-pointer'>Events</Link>
                                <Link to='/empty' className='hover:text-yellow-500 cursor-pointer'>About</Link>
                                <p>012 345 67 89</p>
                            </div>
                            <div className='fixed top-4 right-4 z-50 cursor-pointer hover:text-yellow-500' onClick={() => setOpenMenu(false)}>X</div>
                        </>
                    )}
                </nav>

                {/* header */}
                <div className='w-full bg-black relative'>
                    <img src={home} alt="" className='mix-blend-luminosity h-[400px] md:h-[500px] w-full object-cover' />
                    <div className='bg-black absolute inset-0 bg-opacity-75'>
                        <div className='flex items-center justify-center flex-col text-white absolute inset-0'>
                            <h1 className='uppercase text-2xl md:text-7xl font-extralight tracking-[15px] mb-8 text-center'>Wynonna Earp</h1>
                            <h3 className='uppercase text-sm md:text-xl font-light tracking-[12px] text-center'>Architect and developer</h3>
                        </div>
                    </div>
                </div>

                {/* second navbar */}
                <div className='flex flex-row items-center justify-center pt-6 md:pt-10 gap-5 font-light'>
                    <p className='max-md:hidden'>wynonnaearp@gmail.com</p>
                    <Link to='/empty'><BsInstagram size={25} className='hover:text-yellow-500 cursor-pointer' /></Link>
                    <Link to='/empty'><BsLinkedin size={25} className='hover:text-yellow-500 cursor-pointer' /></Link>
                    <Link to='/empty'><FaFacebookSquare size={25} className='hover:text-yellow-500 cursor-pointer' /></Link>
                    <p className='max-md:hidden'>Wynonna Earp</p>
                    <p onClick={() => window.scrollTo(0, 1100)} className='max-md:hidden cursor-pointer hover:text-yellow-500'>See More</p>
                </div>
            </header>

            <Line />

            {/* comments section */}
            <section className='flex flex-col items-center w-auto my-10'>
                <p className='font-light md:w-[550px] text-center flex justify-center mb-28'>The only way to get to know a company is by its talents and
                    connections. Wynonna Earp and company dominate in both.
                    Don’t believe us? Ask our previous customers. </p>

                <div className='md:columns-2 w-full md:px-20'>
                    {comments && comments.map(comment => (
                        <div key={comment.id} className='py-3 flex flex-row gap-5 items-center'>
                            <div className='w-20 h-20 bg-black rounded-full'></div>

                            <div>
                                <p className='font-bold'>{comment.name}</p>
                                <p className='font-light'>- {comment.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Line />

            {/* work section */}
            <section className='flex flex-col items-center w-auto my-10'>
                <p className='font-light w-[550px] text-center flex justify-center mb-12'>Our Work</p>

                <div className='md:columns-2 md:px-32 md:gap-20'>
                    {work && work.map(item => (
                        <div key={item.id} className='relative item cursor-pointer mb-10 md:mb-20'>
                            <img src={item.image} alt="" className='w-full h-full object-cover' />
                            <div className='bg-black bg-opacity-50 absolute inset-0 p-4 content text-white'>
                                <div className='w-full h-full flex flex-col items-center justify-center'>
                                    <p className='font-bold text-xl'>{item.name}</p>
                                    <p className='font-light'>{item.comment}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Line />

            {/* contact section */}
            <section className='flex flex-col items-center w-auto my-10 relative'>
                <p className='font-light text-center flex justify-center mb-6'>Visit Us</p>

                <div className='flex flex-row gap-14 mb-20 font-bold cursor-pointer'>
                    <p onClick={() => setMap(false)} className={map === false && 'border-b-2 border-black'}>Contact form</p>
                    <p onClick={() => setMap(true)} className={map && 'border-b-2 border-black'}>Our location</p>
                </div>

                {map ? (
                    <iframe className='grayscale' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2018.5198928468974!2d16.54683719162071!3d59.607706623609616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465e613c4d4d6065%3A0xa98f1fb897a0eae5!2sV%C3%A4ster%C3%A5s%20Centralstation!5e0!3m2!1ssv!2sse!4v1696887938759!5m2!1ssv!2sse" class='map' width='auto' height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='karta'></iframe>
                ) : (
                    <div className='flex justify-center w-full'>
                        <form className='flex flex-col gap-8 items-end w-80'>
                            <input type="text" id="name" required placeholder='Your Name' className='w-full px-14 py-2 border-b-2 border-black placeholder-black outline-none' />
                            <input type="text" id="name" required placeholder='Your email' className='w-full px-14 py-2 border-b-2 border-black placeholder-black outline-none' />
                            <textarea rows='5' type="text" id="name" required placeholder='Message' className='w-full px-14 py-2 border-b-2 border-black placeholder-black outline-none' />
                            <img src={cap} alt="" />

                            <button class="rounded-full border bg-white border-black before:ease relative h-10 w-24 overflow-hidden before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:before:-rotate-180">
                                <span class="relative z-10">Send</span>
                            </button>
                        </form>
                    </div>
                )}
            </section>

            <Line />

            {/* footer */}
            <section className='flex flex-col gap-8 py-10 items-center'>
                <p>wynonnaearp@gmail.com</p>
                <div className='flex flex-row gap-2'>
                    <Link to='/empty'><BsInstagram size={25} className='hover:text-yellow-500 cursor-pointer' /></Link>
                    <Link to='/empty'><BsLinkedin size={25} className='hover:text-yellow-500 cursor-pointer' /></Link>
                    <Link to='/empty'><FaFacebookSquare size={25} className='hover:text-yellow-500 cursor-pointer' /></Link>
                </div>
                <p>Wynnona Earp</p>
                <p onClick={() => window.scrollTo(0, 0)} className='hover:text-yellow-500 cursor-pointer'>Get to the top</p>
            </section>

        </div>
    );
}

export default Home;