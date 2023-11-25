import Nav from './Nav'

const Header = () =>
  <header className='fixed top-0 z-[9999] w-full py-4 md:py-7 border-b border-zinc-800 bg-black/10 backdrop-blur-sm transition-all duration-500'>
    <nav className='flex justify-between items-center w-11/12 max-w-5xl mx-auto'>
      <a href='/' className='text-lg text-white/70'>
        <img src='/logo.svg' alt='image/svg' width={30} height={30} />
      </a>
      <Nav />
    </nav>
  </header>

export default Header
