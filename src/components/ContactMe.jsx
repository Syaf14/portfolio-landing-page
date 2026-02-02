import './ContactMe.css';
import emailjs from '@emailjs/browser';
import { useRef,useEffect } from 'react';

function ContactMe() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
        'service_czd6b06',
        'template_94yfh46',
        form.current,
        '5W94LOh4GNJnlw1uN'
        )
        .then(() => {
        alert('Email sent successfully!');
        form.current.reset();
        })
        .catch((error) => {
        console.error(error);
        alert('Failed to send email');
        });
    };

    const sendWhatsApp = () => {
    const phone = "60172892440"; // guna format international (MY = 60)
    const message = "Hi, saya berminat dengan servis anda 😊";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    };

    useEffect(() => {
            const faders = document.querySelectorAll('.contact-me-img');

            const appearOnScroll = () => {
                faders.forEach(fader => {
                    const rect = fader.getBoundingClientRect();
                    if (rect.top < window.innerHeight - 50) {
                        fader.classList.add('show');
                    }
                });
            };

            window.addEventListener('scroll', appearOnScroll);
            window.addEventListener('load', appearOnScroll);

            // Cleanup listener when component unmounts
            return () => {
                window.removeEventListener('scroll', appearOnScroll);
                window.removeEventListener('load', appearOnScroll);
            };
        }, []);
    return (
        <div className='px-5 py-5' id='contact-me'>
            <div className='row mb-5'>
                <div className='col-md-6'>
                    <div className='contact-me-text'>
                        <h1 className='fw-bolder'>Want to Contact Me?</h1>
                        <p>Want to get in touch with me. You can contact through email or just whatsapp us below.</p>
                    </div>
                </div>
                <div className='col-md-6 d-flex justify-content-center'>
                    <div className='contact-me-img'>
                        <img src="/images/icon_contact_me.png" alt="contact-me" />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='card w-100 border-0'>
                            <div className='card-title rounded-top-2 mb-0' style={{background:"#070844"}}>
                                <h4 className='text-center text-white fst-italic'>Email Us<i className="mx-2 bi bi-envelope-paper"></i></h4>
                            </div>
                            <div className='card-body rounded-bottom-2' style={{background:"#047aa8"}}>
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <label className='fw-semibold fst-italic'>Full name :</label>
                                            <input type="text" name='name' className='form-control' placeholder='Enter your Name' required/>
                                        </div>
                                        <div className='col-md-6'>
                                            <label className='fw-semibold fst-italic'>Email :</label>
                                            <input type="email" name='email' className='form-control' placeholder='example@gmail.com' required/>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <label className='fw-semibold fst-italic'>Phone No :</label>
                                            <input type="text" name='phone_no' className='form-control' placeholder='+6012-345 6789' required/>
                                        </div>
                                        <div className='col-md-8'>
                                            <label className='fw-semibold fst-italic'>Email Subject :</label>
                                            <input type="text" name='subject' className='form-control' placeholder='Enter your Email Subject'/>
                                        </div>                                
                                    </div>                            
                                    <div className='email-context mb-3'>
                                        <label className='fw-semibold fst-italic'>Email Context :</label>
                                        <textarea className='form-control' name='message' rows="4" placeholder='Enter your Message' required></textarea>
                                    </div>
                                    <div className='d-flex justify-content-end px-3'>
                                        <button type='submit' className='submit-btn btn-primary'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="card w-75 border-0">
                            <div className="card-title rounded-top-2 mb-0" style={{background:"#070844"}}>
                                <h4 className='text-center text-white fst-italic'>Whatsapp<i class="mx-2 bi bi-whatsapp"></i></h4>
                            </div>
                            <div className="card-body rounded-bottom-2" style={{background:"#047aa8"}}>
                                <div>
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="mb-3">
                                                <label className='fw-semibold fst-italic'>Phone No :</label>
                                                <p className='whatsapp-text'>+6017-289 2440</p>                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-end px-3'>
                                        <button type='submit' onClick={sendWhatsApp} className='submit-btn btn-primary'>Whatsapp me</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
        </div>
    )
}

export default ContactMe;