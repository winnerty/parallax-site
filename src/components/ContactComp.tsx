import styles from './ContactComp.module.scss'
import { useState } from 'react'

const ContactComp = () => {
    const [formData, setFormData] = useState({})
    
    return (
        <section className={styles.contact}>
            <form>
                    <h2>Contact Us</h2>
                    <p>
                        Feel Free to contact us any time. We will get back to you as soon as
                        we can!.
                        <div className={styles["contact-container"]}>
                            <input
                                value={formData?.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                type="text"
                                placeholder="Name"
                            />
                            <input
                                value={formData?.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                type="email"
                                placeholder="Email"
                            />
                            <textarea
                                value={formData?.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                                placeholder="Message"
                                id="message-body"
                            ></textarea>
                            <button>Send</button>
                        </div>
                    </p>
                </form>
        </section>
    )
}

export default ContactComp