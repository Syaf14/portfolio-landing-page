import './ContactMe.css';

function ContactMe() {
    return (
        <div className='px-5 py-5' id='contact-me' style={{color:"#202A66"}}>
            <div>
                <h2 className='text-center mb-5 fw-bolder'>Contact Me</h2>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='card w-50 border-2'>
                    <div className='card-title bg-primary p-3 rounded-top-2'>
                        <h4 className='text-center text-white'>Fill this form</h4>
                    </div>
                    <div className='card-body'>
                        <form action="">
                            <div className='mb-3'>
                                <input type="text" className='form-control' placeholder='Enter your Name'/>
                            </div>
                            <div className='mb-3'>
                                <input type="text" className='form-control' placeholder='Enter your Email'/>
                            </div>
                            <div className='mb-3'>
                                <input type="text" className='form-control' placeholder='Enter your Phone No'/>
                            </div>
                            <div className='mb-3'>
                                <textarea className='form-control' rows="4" placeholder='Enter your Message'></textarea>
                            </div>
                            <div className='d-flex justify-content-end px-3'>
                                <a className='btn btn-success'>Submit</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default ContactMe;