import { useState } from 'react'
import { showErrorToast, showSuccessToast } from '../helpers/toast'

const useMail = () => {
  const [errors, setErrors] = useState({})
  const [email, setEmail] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = e => {
    setEmail({
      ...email,
      [e.target.name]: e.target.value
    })
  }

  const validateForm = () => {
    const newErrors = {}
    const nameRegex = /^[a-zA-Z\s]+$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (!nameRegex.test(email.name)) {
      newErrors.name = 'Invalid name'
    }

    if (!email.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(email.email)) {
      newErrors.email = 'Invalid email'
    }

    if (!email.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return newErrors
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) return

    try {
      const { MODE, VITE_BACKEND_URL_DEV, VITE_BACKEND_URL_PROD } = import.meta.env
      const HOST = MODE === 'development' ? VITE_BACKEND_URL_DEV : VITE_BACKEND_URL_PROD

      const res = await fetch(`${HOST}/api/email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(email)
      })
      if (!res.ok) throw new Error(`(${res.status}) Something went wrong`)

      const data = await res.json()
      if (!data.ok) throw new Error(data.msg)

      showSuccessToast(data.msg)
      setEmail({ name: '', email: '', message: '' })
    } catch (error) {
      showErrorToast('Something went wrong')
    }
  }

  return {
    email,
    errors,
    handleChange,
    handleSubmit
  }
}

export default useMail
