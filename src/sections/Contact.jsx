import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const formRef = useRef();

    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        setForm({
            name: '',
            email: '',
            message: '',
        })

        try {
            await emailjs.send(
                'service_easnpm3',
                'template_lp6d6c7',
                {
                    from_name: form.name,
                    to_name: 'PokePiece',
                    from_email: form.email,
                    to_email: 'pokepiece33@gmail.com',
                    message: form.message,
                },
                '9IfCYevyIxe5MwyJi'
            )

            setLoading(false);

            alert('Your message has been sent!')
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert('Something went wrong, please try again later!')
        }


    }


    return (
        <section className='c-space my-20' id="contact">
            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                <div className='contact-container'>
                    <h3 className='head-text'><span className="text-lightRed">Let's talk</span></h3>
                    <p className='text-lg text-white-600 mt-3'>
                        Whether you're looking to build a new website, improve your existing
                        platform, or bring a unique project to life, I'm here to help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7' >
                        <label className='space-y-3'>
                            <span className='field-label'>Full Name</span>
                            <input type='text' name='name' value={form.name} onChange={handleChange} required className='field-input' placeholder='John Doe' />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Email</span>
                            <input type='email' name='email' value={form.email} onChange={handleChange} required className='field-input' placeholder='johndoe@gmail.com' />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Your message</span>
                            <textarea type='text' name='message' value={form.message} onChange={handleChange} required rows={5} className='field-input' placeholder='Hi, I wanna give you a job...' />
                        </label>

                        <button type='submit' className='field-btn' disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src='/assets/arrow-up.png' alt='arrow-up' className='field-btn_arrow' />
                        </button>

                    </form>
                </div>
            </div>


        </section>
    )
}

export default Contact