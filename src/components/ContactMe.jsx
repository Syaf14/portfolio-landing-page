import './ContactMe.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

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
    return (
        <div className='px-5 py-5' id='contact-me' style={{color:"#202A66"}}>
            <div>
                <h2 className='text-center mb-5 fw-bolder'>Contact Me</h2>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='card w-50 border-0'>
                    <div className='card-title p-3 rounded-top-2 mb-0' style={{background:"#1d64af"}}>
                        <h4 className='text-center text-white'>Fill this form</h4>
                    </div>
                    <div className='card-body bg-light'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <label className='fw-semibold fst-italic'>Full name :</label>
                                    <input type="text" name='name' className='form-control' placeholder='Enter your Name'/>
                                </div>
                                <div className='col-md-6'>
                                    <label className='fw-semibold fst-italic'>Email :</label>
                                    <input type="email" name='email' className='form-control' placeholder='example@gmail.com'/>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-4'>
                                    <label className='fw-semibold fst-italic'>Phone No :</label>
                                    <input type="text" name='phone_no' className='form-control' placeholder='+6012-345 6789'/>
                                </div>
                                <div className='col-md-8'>
                                    <label className='fw-semibold fst-italic'>Email Subject :</label>
                                    <input type="text" name='subject' className='form-control' placeholder='Enter your Email Subject'/>
                                </div>                                
                            </div>                            
                            <div className='email-context'>
                                <label className='fw-semibold fst-italic'>Email Context :</label>
                                <textarea className='form-control' name='message' rows="4" placeholder='Enter your Message'></textarea>
                            </div>
                            <div className='d-flex justify-content-end px-3'>
                                <button type='submit' className='submit-btn btn-primary'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default ContactMe;