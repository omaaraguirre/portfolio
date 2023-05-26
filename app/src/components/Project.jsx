import PropTypes from 'prop-types'
import { FaExternalLinkAlt, FaGithubSquare } from 'react-icons/fa'
import ProjectDescription from './ProjectDescription'

const Project = ({ title, description, image, link, github, tags }) => {
  const tagColors = {
    PHP: 'bg-purple-500',
    JavaScript: 'bg-yellow-500',
    SCSS: 'bg-pink-500',
    MySQL: 'bg-orange-500',
    React: 'bg-blue-500',
    Tailwind: 'bg-cyan-500',
    Express: 'bg-white/80',
    MongoDB: 'bg-green-500'
  }

  return (
    <div data-aos='zoom-in-up' className='flex flex-col items-center  bg-zinc-900 text-white rounded-md w-full'>
      <img
        className='w-auto h-auto object-cover rounded-t-md brightness-90'
        src={image}
        alt={`${title} image`}
        height='100%'
        width='100%'
      />
      <div className='roboto flex flex-col gap-5 flex-1 pt-5'>
        <div className='flex justify-center gap-3 flex-wrap'>
          {
            tags.map((tag, index) => (
              <span key={index} className={`px-2 rounded-xl font-medium text-zinc-900 ${tagColors[tag]}`} aria-label='Project tag'>
                {tag}
              </span>
            ))
          }
        </div>
        <div className='flex flex-col justify-center items-center'>
          <ProjectDescription description={description} title={title} />
        </div>
      </div>
      <div className='flex justify-center gap-10 py-5 border-t border-zinc-800 w-full'>
        <a href={link} target='_blank' rel='noopener noreferrer' className='text-xs font-medium uppercase flex items-center gap-2 px-8 py-3 rounded-sm bg-black border border-zinc-800 hover:border-zinc-500 hover:scale-90 transition-all duration-300'>
          <FaExternalLinkAlt className='text-md' />
          Demo
        </a>
        <a href={github} target='_blank' rel='noopener noreferrer' className='text-xs font-medium uppercase flex items-center gap-2 px-8 py-3 rounded-sm bg-black border border-zinc-800 hover:border-zinc-500 hover:scale-90 transition-all duration-300'>
          <FaGithubSquare className='text-lg' />
          Code
        </a>
      </div>
    </div>
  )
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.array,
  image: PropTypes.string,
  link: PropTypes.string,
  github: PropTypes.string,
  tags: PropTypes.array
}

export default Project
