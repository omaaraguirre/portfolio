import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import useMail from '../hooks/useMail'

const Contact = () => {
  const { email, errors, handleChange, handleSubmit } = useMail()

  return (
    <section className='font-montserrat flex flex-col py-14 bg-zinc-900'>
      <div className='relative w-11/12 max-w-5xl mx-auto'>
        <h2 className='flex flex-col text-3xl md:text-4xl text-center font-bold text-zinc-200 mb-10 md:mb-20 transition-all duration-500'>
          <span className='text-white/70 uppercase text-xs md:text-sm'>Questions? Feel free to</span>
          Contact Me
        </h2>
        <ToastContainer />
        <form
          onSubmit={handleSubmit}
          className='grid grid-cols-1 md:grid-cols-2 gap-5 border border-zinc-800 rounded-lg p-6 max-w-2xl mx-auto'
        >
          <label className='text-gray-300 font-medium block mb-2'>
            Name
            <input
              name='name'
              type='text'
              className='w-full px-4 py-2 rounded-sm bg-zinc-300 text-black focus:outline-none focus:ring-2 focus:ring-red-900'
              value={email.name}
              onChange={e => handleChange(e)}
            />
            {errors.name && <span className='text-red-500 text-sm'>{errors.name}</span>}
          </label>
          <label className='text-gray-300 font-medium block mb-2'>
            Email
            <input
              name='email'
              type='email'
              className='w-full px-4 py-2 rounded-sm bg-zinc-300 text-black focus:outline-none focus:ring-2 focus:ring-red-900'
              value={email.email}
              onChange={e => handleChange(e)}
            />
            {errors.email && <span className='text-red-500 text-sm'>{errors.email}</span>}
          </label>
          <label className='md:col-span-2 text-gray-300 font-medium block mb-2'>
            Message
            <textarea
              name='message'
              cols='30'
              rows='5'
              value={email.message}
              onChange={e => handleChange(e)}
              className='w-full p-4 rounded-sm bg-zinc-300 text-black focus:outline-none focus:ring-2 focus:ring-red-900 resize-none'
            />
            {errors.message && <span className='text-red-500 text-sm'>{errors.message}</span>}
          </label>
          <button
            type='submit'
            className='md:col-span-2 bg-red-950 hover:bg-red-900 text-white py-2 px-4 rounded-sm transition-colors duration-300 ease-in-out mx-auto w-1/2 md:w-1/4'
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
