import Masonry from '@mui/lab/Masonry'
import Project from './Project'

const Projects = () => {
  const projects = [
    {
      title: 'AppSalon',
      description: ['Web platform for barbershops or stylists. Provides user authentication, email verification with tokens, creation of custom appointments, and service management.', 'Users can schedule appointments by selecting the date, time, and services, while administrators have access to the appointment calendar and can create, modify, or delete available services.'],
      image: '/img/appsalon/1.webp',
      link: 'https://appsalon.ceragui.com/',
      github: 'https://github.com/omaaraguirre/appsalon_mvc',
      tags: ['PHP', 'JavaScript', 'SCSS', 'MySQL']
    },
    {
      title: 'APV',
      description: ['Web application for a veterinary clinic that provides user authentication, email verification with tokens, and appointment management.', 'Veterinarians can create appointments by selecting the date, time, pet\'s name, owner\'s email, and symptoms. They can also view the appointment calendar and modify or delete existing appointments.', 'Additionally, the application allows users to update their profile information, including name, website, phone number, email, and change their password.'],
      image: '/img/apv/1.webp',
      link: 'https://apv-app.ceragui.com/',
      github: 'https://github.com/omaaraguirre/apv-monorepo',
      tags: ['JavaScript', 'React', 'Tailwind', 'Express', 'MongoDB']
    },
    {
      title: 'DevWebCamp',
      description: ['Web application for an event website that includes user authentication, email verification with tokens, and different user roles (user and administrator). Users can purchase tickets for the event (in-person or virtual) using PayPal. They can view the scheduled conferences and workshops, including the time and speakers. Users receive a virtual ticket with a unique access token, which is permanently available in their account on the portal.', 'Administrators have the ability to create, modify, and delete events, manage speakers, and define topics for each session. They can also access a summary of user registrations, track revenue, and view the gifts selected by registered users.', 'Overall, the web application provides a comprehensive platform for managing event registrations, ticket sales, speaker information, and administrative tasks, offering a seamless experience for both users and administrators.'],
      image: '/img/devwebcamp/1.webp',
      link: 'https://devwebcamp.ceragui.com/',
      github: 'https://github.com/omaaraguirre/devwebcamp',
      tags: ['PHP', 'JavaScript', 'SCSS', 'MySQL']
    },
    {
      title: 'FakeShop',
      description: ['A web sales component that retrieves product information from an API and displays it on the page. Users can filter products based on price range or category. Each product is accompanied by an "Add to Cart" button, along with the quantity of that product already added to the cart.', 'The shopping cart dynamically displays the added products and their quantities. Users can modify the quantity of products, remove individual items, or empty the entire cart. This component provides a convenient and interactive way for users to browse and manage their shopping experience, making it easy to add, adjust, and remove items from their cart.'],
      image: '/img/fakeshop/1.webp',
      link: 'https://shoppingcart.ceragui.com/',
      github: 'https://github.com/omaaraguirre/shoppingcart',
      tags: ['JavaScript', 'React', 'Tailwind']
    },
    {
      title: 'MediaHub',
      description: ['A web page component that serves as a catalog and search tool for media items such as movies, series, video games, and more. It retrieves media information from an API and displays it on the page.', 'The component allows users to search for specific items by their title and optionally sort them alphabetically. Each item in the catalog displays basic information, and when a user hovers over or touches an item, additional details are revealed. This interactive feature provides users with a quick preview or summary of the media item, helping them make informed decisions and explore the catalog more efficiently.'],
      image: '/img/mediahub/1.webp',
      link: 'https://mediahub.ceragui.com/',
      github: 'https://github.com/omaaraguirre/moviecatalog',
      tags: ['React', 'Tailwind', 'JavaScript']
    },
    {
      title: 'NotesApp',
      description: ['A web page for creating and managing notes/reminders. The application has its own backend with endpoints for retrieving and storing information.', 'The website includes user account creation and authentication functionality. Once logged in, users can create notes/reminders and optionally assign them an "important" label. The notes can be easily deleted by the user when they are no longer needed.', 'This web application provides a convenient way for users to keep track of their important tasks, events, or any other information they want to remember. The ability to label notes as important allows users to prioritize their tasks and easily identify crucial information.'],
      image: '/img/notesapp/1.webp',
      link: 'https://notas-app.ceragui.com/',
      github: 'https://github.com/omaaraguirre/notes-monorepo',
      tags: ['JavaScript', 'React', 'Express', 'MongoDB', 'Tailwind']
    },
    {
      title: 'TicTacToe',
      description: ['Web page featuring the classic game of Tic Tac Toe, also known as "Tres en Raya" in Spanish. Players can enjoy a virtual version of this popular game where they take turns marking Xs and Os on a grid.', 'The objective is to get three of their marks in a row, either horizontally, vertically, or diagonally, before their opponent does.'],
      image: '/img/tictactoe/1.webp',
      link: 'https://tictactoe.ceragui.com/',
      github: 'https://github.com/omaaraguirre/react_tictactoe',
      tags: ['JavaScript', 'React', 'Tailwind']
    },
    {
      title: 'UpTask',
      description: ['Web application for project and task management. Users can create an account with secure authentication and email verification. Once logged in, they can create multiple projects and assign tasks to each project.', 'The interface displays a clear list of tasks for each project, allowing users to mark tasks as completed or  delete them. The task view includes convenient filters to display all tasks, completed tasks, or pending tasks. Users also have the flexibility to update their account name and associated email address as needed.'],
      image: '/img/uptask/1.webp',
      link: 'https://up-task.ceragui.com/',
      github: 'https://github.com/omaaraguirre/uptask',
      tags: ['PHP', 'SCSS', 'JavaScript', 'MySQL']
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
