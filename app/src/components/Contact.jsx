import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    const nameRegex = /^[a-zA-Z\s]+$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!name.trim()) {
      newErrors.name = 'Name is required'
    } else if (!nameRegex.test(name)) {
      newErrors.name = 'Invalid name'
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email'
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) return

    try {
      const HOST = import.meta.env.VITE_BACKEND_URL
      const res = await fetch(`${HOST}/api/email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      if(!res.ok) throw new Error(`(${res.status}) Something went wrong`)
      const data = await res.json() 

      if (!data.ok) {
        throw new Error(data.msg)
      }

      toast.success(data.msg, {
        style: {
          background: 'rgba(127, 29, 29, 1)',
          color: '#fff'
        },
        icon: '📧'
      })
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      toast.error(error.message,{
        style: {
          background: 'rgba(127, 29, 29, 1)',
          color: '#fff'
        }
      })
    }
  }

  return (
    <section className='montserrat flex flex-col py-14 bg-zinc-900'>
      <div className='relative w-11/12 max-w-5xl mx-auto'>
        <h2 className='flex flex-col text-3xl md:text-4xl text-center font-bold  text-zinc-200 mb-10 md:mb-20 transition-all duration-500'>
          <span className='text-white/70 uppercase text-xs md:text-sm'>Questions? Feel free to</span>
          Contact Me
        </h2>
        <Toaster />
        <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-5 border border-zinc-800 rounded-lg p-6 max-w-2xl mx-auto'>
          <div>
            <label htmlFor='name' className='text-gray-300 font-medium block mb-2'>Name</label>
            <input
              type='text'
              id='name'
              className='w-full px-4 py-2 rounded-sm focus:outline-none focus:ring-2 bg-white/80 focus:ring-red-900'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className='text-red-500 text-sm'>{errors.name}</span>}
          </div>
          <div>
            <label htmlFor='email' className='text-gray-300 font-medium block mb-2'>Email</label>
            <input
              type='email'
              id='email'
              className='w-full px-4 py-2 rounded-sm focus:outline-none focus:ring-2 bg-white/80 focus:ring-red-900'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className='text-red-500 text-sm'>{errors.email}</span>}
          </div>
          <div className='md:col-span-2'>
            <label htmlFor='message' className='text-gray-300 font-medium block mb-2'>Message</label>
            <textarea
              id='message'
              cols='30'
              rows='5'
              className='w-full p-4 rounded-sm focus:outline-none focus:ring-2 bg-white/80 focus:ring-red-900 resize-none'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && <span className='text-red-500 text-sm'>{errors.message}</span>}
          </div>
          <button
            type='submit'
            className='md:col-span-2 bg-red-900 hover:bg-red-800 text-white py-2 px-4 rounded-sm transition-colors duration-300 ease-in-out mx-auto w-1/2 md:w-1/4'
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
