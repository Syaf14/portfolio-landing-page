import './MyStatistic.css'

function MyStatistic() {
    return (
        <div className="px-5 py-5 text-white" style={{background:'#202A66'}}>
            <h2 className="text-center fw-bolder">Statistics</h2>
            <div className='w-100 mb-4'>
                <span className='stat-desc'>
                    Here are some of my personal statistics that I have achieved so far in my career as a developer. 
                    The project are included freelance and full time job. However the followers are based on social media platform. Team are the people 
                    that I have worked with in my projects not including company colleagues.
                </span>                
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='card text-center bg-transparent border-0'>
                        <div className='card-title px-3'>
                            <h3 className='text-white'>Projects</h3>
                        </div>
                        <div className='card-body'>
                            <h1 className='text-white'>10+</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card text-center bg-transparent border-0'>
                        <div className='card-title px-3'>
                            <h3 className='text-white'>Followers</h3>
                        </div>
                        <div className='card-body'>
                            <h1 className='text-white'>100+</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card text-center bg-transparent border-0'>
                        <div className='card-title px-3'>
                            <h3 className='text-white'>Team</h3>
                        </div>
                        <div className='card-body'>
                            <h1 className='text-white'>5</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyStatistic;