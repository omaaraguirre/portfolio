import { HiDownload } from 'react-icons/hi'

const HeroSection = () =>
  <section className='grid place-items-center py-40 min-h-screen text-zinc-400 w-11/12 max-w-5xl mx-auto'>
    <div className='font-montserrat flex flex-col items-center gap-5'>
      <img
        className='w-36 h-36 sm:w-48 sm:h-48 rounded-full object-cover'
        src='https://github.com/omaaraguirre.png'
        alt='avatar'
      />
      <p className='font-medium text-sm'>Hey there 👋 My name is Omar</p>
      <h1 className='p-2 font-medium text-3xl md:text-5xl md:max-w-xl text-center bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent transition-all duration-500 ease-in-out'>
        Developer by day, code dreamer by night
      </h1>
      <a
        href='/resume.pdf'
        target='_blank'
        className='text-sm font-medium uppercase flex items-center gap-2 mt-5 md:mt-10 px-8 py-3 rounded-sm bg-zinc-900 border border-zinc-800 hover:border-zinc-500 hover:scale-110 transition-all duration-300'
      >
        Resume
        <HiDownload className='text-lg text-white/70' />
      </a>
    </div>
  </section>

export default HeroSection
