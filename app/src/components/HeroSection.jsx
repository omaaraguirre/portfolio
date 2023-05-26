import { HiDownload } from 'react-icons/hi'

const HeroSection = () => {
  return (
    <section className='grid place-items-center py-40 min-h-screen text-zinc-400 w-11/12 max-w-5xl mx-auto'>
      <div className='flex flex-col items-center gap-5'>
        <img
          className='w-36 h-36 rounded-full object-cover'
          src='https://github.com/omaaraguirre.png'
          alt='avatar'
        />
        <p className='montserrat font-medium text-sm'>Hey there 👋 My name is Omar</p>
        <h1
          className='montserrat p-2 font-medium text-3xl md:text-5xl md:max-w-xl text-center bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent transition-all duration-500 ease-in-out'
          // data-aos='zoom-in'
        >
          Developer by day, code dreamer by night
        </h1>
        <a
          href='/resume.pdf'
          target='_blank'
          className='montserrat text-sm font-medium uppercase flex items-center gap-2 mt-5 md:mt-10 px-8 py-3 rounded-sm bg-zinc-900 border border-zinc-800 hover:border-zinc-500 hover:scale-90 transition-all duration-300'
        >
          Resume
          <HiDownload className='text-lg text-white/70' />
        </a>
      </div>
    </section>
  )
}
export default HeroSection
