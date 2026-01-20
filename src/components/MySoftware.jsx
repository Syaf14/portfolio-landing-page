import './MySoftware.css';

function MySoftware() {
    return(
        <div className='my-software-body px-5 py-5' style={{color:"#202A66"}}>
            <h2 className='text-center mb-4 fw-bolder'>My Software</h2>
            <div className='row d-flex justify-content-around'>
                <div className='card col-md-3 border-0'>
                    <div className='card-title'>
                        <h6 className='text-center p-3 fw-bolder' style={{color:"#202A66"}}>Adobe Illustrator</h6>
                    </div>
                    <div className='card-body text-center'>
                        <img src="/images/adobe_software.png" alt="Illustrator Logo" className='software-logo w-100'/>
                    </div>
                </div>
                <div className='card col-md-3 border-0'>
                    <div className='card-title'>
                        <h6 className='text-center p-3 fw-bolder' style={{color:"#202A66"}}>Visual Studio Code</h6>
                    </div>
                    <div className='card-body text-center'>
                        <img src="/images/laravel_img.png" alt="Visual Studio Code Logo" className='software-logo w-75'/>
                    </div>
                </div>
                <div className='card col-md-3 border-0'>
                    <div className='card-title'>
                        <h6 className='text-center p-3 fw-bolder' style={{color:"#202A66"}}>Figma</h6>
                    </div>
                    <div className='card-body text-center'>
                        <img src="/images/figma_img.png" alt="Figma Logo" className='software-logo w-75'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MySoftware;