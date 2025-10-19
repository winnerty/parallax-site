import { useState } from 'react'
import styles from './ContactComp.module.scss'
import { FaPhone } from "react-icons/fa6"
import { MdAlternateEmail } from "react-icons/md"

const ContactComp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all fields")
      setTimeout(() => setError(""), 2000)
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Invalid email")
      setTimeout(() => setError(""), 2000)
      return
    }
    console.log(formData)
  }

  return (
    <section className={styles.contact}>
      <form onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <p>Feel free to contact us anytime. We'll get back to you soon!</p>

        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
        />

        <button type="submit">Send</button>
        {error && <span className={styles.error}>{error}</span>}
      </form>
      <article className={styles["contact-info"]}>
        <h2>Contact Info</h2>

        <ul>
            <li>
                <FaPhone /> +91 8009 054294
            </li>
            <li>
                <MdAlternateEmail /> info@medieval.com
            </li>
        </ul>

        <p>
            1000+ Travel partners and 65+ Service city across India, USA, Canada & UAE
        </p>
    </article>
    </section>
  )
}

export default ContactComp