import './MySkill.css';

function MySkill() {
    return (
        <div className='px-5 py-5' style={{background:'#202A66'}} id='my-skill'>
            <h2 className='text-center text-white mb-5 fw-bolder'>My Skills</h2>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='text-center mb-3'>
                        <label className='text-white mb-3' style={{fontSize:'20px'}}>Laravel</label>
                        <div className="progress" role="progressbar" style={{height: "20px"}}>
                            <div className="progress-bar" style={{width:"75%"}}></div>
                        </div>
                    </div>
                    <div className='text-center mb-3'>
                        <label className='text-white mb-3' style={{fontSize:'20px'}}>ReactJS</label>
                        <div className="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "20px"}}>
                            <div className="progress-bar" style={{width:"70%"}}></div>
                        </div>
                    </div>
                    <div className='text-center mb-3'>
                        <label className='text-white mb-3' style={{fontSize:'20px'}}>Figma</label>
                        <div className="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "20px"}}>
                            <div className="progress-bar" style={{width:"50%"}}></div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='text-center mb-3'>
                        <label className='text-white mb-3' style={{fontSize:'20px'}}>Adobe After Effect</label>
                        <div className="progress" role="progressbar" style={{height: "20px"}}>
                            <div className="progress-bar" style={{width:"50%"}}></div>
                        </div>
                    </div>
                    <div className='text-center mb-3'>
                        <label className='text-white mb-3' style={{fontSize:'20px'}}>Adobe Photoshop</label>
                        <div className="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "20px"}}>
                            <div className="progress-bar" style={{width:"65%"}}></div>
                        </div>
                    </div>
                    <div className='text-center mb-3'>
                        <label className='text-white mb-3' style={{fontSize:'20px'}}>Adobe Illustrator</label>
                        <div className="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "20px"}}>
                            <div className="progress-bar" style={{width:"68%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MySkill;