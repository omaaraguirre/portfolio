import { FaGithub, FaRegEnvelope, FaWhatsapp } from 'react-icons/fa'

const Nav = () => {
  const navLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      href: 'https://github.com/omaaraguirre'
    },
    {
      name: 'Email',
      icon: <FaRegEnvelope />,
      href: 'mailto:omaaraguirre@hotmail.com'
    },
    {
      name: 'Whatsapp',
      icon: <FaWhatsapp />,
      href: 'https://wa.me/12109622234'
    }
  ]

  return (
    <ul className='flex items-center gap-5'>
      {
        navLinks.map(({ name, href, icon }) => (
          <li
            key={name}
            className='text-xl text-white/70 hover:text-white hover:scale-125 transition-all duration-100'
          >
            <a
              href={href}
              target='_blank'
              rel='noreferrer noopener'
            >
              {icon}
              <span className='sr-only'>{name}</span>
            </a>
          </li>
        ))
      }
    </ul>
  )
}
export default Nav
