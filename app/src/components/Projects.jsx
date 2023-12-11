import Masonry from '@mui/lab/Masonry'
import Project from './Project'

const Projects = () => {
  const projects = [
    {
      title: 'MediaPlayer',
      image: '/img/mediaplayer/1.webp',
      description: ['MediaPlayer is a web-based music player built using React and the Howler library for audio management.', 'It enables play, pause, forward, and rewind functionalities, along with volume adjustment, repeat activation, and shuffle mode.'],
      link: 'https://mediaplayer.omao.dev/',
      github: 'https://github.com/omaaraguirre/mediaplayer',
      tags: ['JavaScript', 'React', 'Tailwind']
    },
    {
      title: 'APV',
      image: '/img/apv/1.webp',
      description: ['APV is tailored for veterinary clinics, offering user authentication, email verification using tokens, and efficient appointment management.', 'Veterinarians can seamlessly create, modify, or delete appointments, specifying details such as date, time, pet\'s name, owner\'s email, and symptoms.', 'Users can also update their profile information, including name, website, phone number, email, and password.'],
      link: 'https://apv-app.omao.dev/',
      github: 'https://github.com/omaaraguirre/apv-monorepo',
      tags: ['JavaScript', 'React', 'Tailwind', 'Express', 'MongoDB']
    },
    {
      title: 'FakeShop',
      image: '/img/fakeshop/1.webp',
      description: ['A web sales component seamlessly integrating with an API to fetch and showcase product details.', 'Users can easily filter products by price range or category. Each product listing includes an "Add to Cart" button, revealing the current quantity in the cart.', 'The shopping cart displays added products and their quantities. Users have interactive control to modify quantities, remove specific items, or clear the entire cart.'],
      link: 'https://shoppingcart.omao.dev/',
      github: 'https://github.com/omaaraguirre/shoppingcart',
      tags: ['JavaScript', 'React', 'Tailwind']
    },
    {
      title: 'MediaHub',
      image: '/img/mediahub/1.webp',
      description: ['MediaHub provides a streamlined exploration of movies, TV shows, and people.', 'Users can delve into detailed movie information, enjoy interactive playback with embedded videos, explore individual profiles, and efficiently discover content through a responsive search.', 'With data fetching and a visually appealing presentation, MediaHub offers a cohesive and user-friendly experience for navigating the diverse landscape of entertainment.'],
      link: 'https://mediahub.omao.dev/',
      github: 'https://github.com/omaaraguirre/moviecatalog',
      tags: ['React', 'Tailwind', 'JavaScript']
    },
    {
      title: 'NotesApp',
      image: '/img/notesapp/1.webp',
      description: ['NotesApp empowers users to effortlessly create and manage notes and reminders. Featuring user account creation and authentication, individuals can securely log in to create notes, assign them an "important" label, and efficiently delete notes when no longer necessary.', 'This user-friendly platform serves as a convenient tool for users to stay organized, offering a streamlined approach to track essential tasks, events, or any noteworthy information while allowing prioritization through the "important" label.'],
      link: 'https://notas-app.omao.dev/',
      github: 'https://github.com/omaaraguirre/notes-monorepo',
      tags: ['JavaScript', 'React', 'Express', 'MongoDB', 'Tailwind']
    },
    {
      title: 'TicTacToe',
      image: '/img/tictactoe/1.webp',
      description: ['TicTacToe is a web page hosting the timeless game also known as "Tres en Raya".', 'Providing a virtual platform for players to engage in this classic game, participants take turns strategically placing Xs and Os on a grid.', 'The objective remains simple: be the first to achieve three marks in a row, whether horizontally, vertically, or diagonally, in a friendly battle for victory against an opponent.'],
      link: 'https://tictactoe.omao.dev/',
      github: 'https://github.com/omaaraguirre/react_tictactoe',
      tags: ['JavaScript', 'React', 'Tailwind']
    }
  ]

  return (
    <section className='font-montserrat flex flex-col items-center py-14 mt-20 max-w-xl min-[900px]:max-w-5xl mx-auto'>
      <h2 className='flex flex-col text-3xl md:text-4xl text-center font-bold  text-zinc-200 mb-10 md:mb-20 transition-all duration-500'>
        <span className='text-white/70 uppercase text-xs md:text-sm'>some of my</span>
        Projects
      </h2>
      <Masonry
        columns={{ xs: 1, md: 2 }}
        spacing={5}
        className='mx-auto'
      >
        {
        projects.map(project =>
          <Project key={project.title} {...project} />
        )
      }
      </Masonry>
    </section>
  )
}

export default Projects
