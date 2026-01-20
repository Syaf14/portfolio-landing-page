import './MyStatistic.css'

function MyStatistic() {
    return (
        <div className="px-5 py-5 text-white" style={{background:'#202A66'}}>
            <h2 className="text-center mb-5 fw-bolder">Statistics</h2>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='card text-center bg-transparent border-0'>
                        <div className='card-title px-3'>
                            <h3 className='text-white'>Projects</h3>
                        </div>
                        <div className='card-body'>
                            <h1 className='text-white' style={{fontSize:'60px', fontWeight:'bold'}}>50+</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card text-center bg-transparent border-0'>
                        <div className='card-title px-3'>
                            <h3 className='text-white'>Followers</h3>
                        </div>
                        <div className='card-body'>
                            <h1 className='text-white' style={{fontSize:'60px', fontWeight:'bold'}}>100K+</h1>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card text-center bg-transparent border-0'>
                        <div className='card-title px-3'>
                            <h3 className='text-white'>Team</h3>
                        </div>
                        <div className='card-body'>
                            <h1 className='text-white' style={{fontSize:'60px', fontWeight:'bold'}}>10</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyStatistic;