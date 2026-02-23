import './ContactMe.css';
import emailjs from '@emailjs/browser';
import { useRef, useEffect } from 'react';

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_czd6b06', 'template_94yfh46', form.current, '5W94LOh4GNJnlw1uN')
      .then(() => {
        alert('Message beamed successfully!');
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert('Transmission failed. Please try again.');
      });
  };

  const sendWhatsApp = () => {
    const phone = "60172892440";
    const message = "Hi Pell, I'm interested in your development services! 😊";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className='contact-section py-5' id='contact-me'>
      <div className='container'>
        <div className='row align-items-center mb-5 fade-up'>
          <div className='col-lg-6'>
            <div className='contact-header'>
              <h5 className='text-emerald text-uppercase letter-spacing'>Get In Touch</h5>
              <h1 className='fw-bold display-4 text-white'>Let’s Build Something <span className='text-purple'>Great.</span></h1>
              <p className='text-gray'>Have a project in mind or just want to say hi? Feel free to reach out via email or WhatsApp.</p>
            </div>
          </div>
          <div className='col-lg-6 d-none d-lg-flex justify-content-center'>
            <div className='contact-illustration'>
              <img src="/images/icon_contact_me.png" alt="contact" className='floating-img' />
              <div className='purple-glow-sphere'></div>
            </div>
          </div>
        </div>

        <div className='row g-4'>
          {/* Email Form */}
          <div className='col-lg-8 fade-up'>
            <div className='contact-card glass-card'>
              <div className='card-top-bar'>
                <span className='dot red'></span>
                <span className='dot yellow'></span>
                <span className='dot green'></span>
                <span className='ms-3 text-gray fst-italic small'>new_message.exe</span>
              </div>
              <form ref={form} onSubmit={sendEmail} className='p-4'>
                <div className='row g-3'>
                  <div className='col-md-6'>
                    <label className='form-label-custom'>Name</label>
                    <input type="text" name='name' className='input-custom' placeholder='John Doe' required/>
                  </div>
                  <div className='col-md-6'>
                    <label className='form-label-custom'>Email</label>
                    <input type="email" name='email' className='input-custom' placeholder='john@example.com' required/>
                  </div>
                  <div className='col-md-12'>
                    <label className='form-label-custom'>Subject</label>
                    <input type="text" name='subject' className='input-custom' placeholder='Project Inquiry' />
                  </div>
                  <div className='col-md-12'>
                    <label className='form-label-custom'>Message</label>
                    <textarea name='message' rows="4" className='input-custom' placeholder='Tell me about your idea...' required></textarea>
                  </div>
                  <div className='col-12 text-end'>
                    <button type='submit' className='btn-submit-neon'>
                      Send Message <i className="bi bi-send-fill ms-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* WhatsApp / Quick Links */}
          <div className='col-lg-4 fade-up'>
            <div className='contact-card glass-card h-100 d-flex flex-column justify-content-center text-center p-4'>
              <div className='wa-icon-box mb-4'>
                <i className="bi bi-whatsapp"></i>
              </div>
              <h4 className='text-white fw-bold'>Fast Response?</h4>
              <p className='text-gray mb-4'>WhatsApp is the quickest way to reach me for urgent matters.</p>
              <button onClick={sendWhatsApp} className='btn-wa-neon'>
                Chat on WhatsApp
              </button>
              
              <div className='mt-5 pt-4 border-top border-secondary'>
                <p className='small text-uppercase text-gray letter-spacing'>Current Location</p>
                <p className='text-emerald fw-semibold'>Selangor, Malaysia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;