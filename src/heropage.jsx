import CustomButton from './public/button.jsx'

function HeroPage() {
  return (
    <>
        <h4 style={{fontSize:'30px'}}>Hello!</h4>
        <h1 style={{ fontSize: '80px', marginBottom: 0 }}>I'm PELL.CO</h1>
        <p style={{fontSize:'20px',marginBottom:'20px'}}>I'm Developer and designer of this website</p>
        <CustomButton label="Get Started" onClick={() => alert('Getting Started!')} />
    </>
  );
}

export default HeroPage;
