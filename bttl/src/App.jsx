import './App.css';
import Secti from './sec.jsx';
import noble1 from'./assets/bttl-react/noble1.jpeg';
import jjk from'./assets/bttl-react/jjk.jpg';
import butfly from'./assets/bttl-react/butfly.jpeg';
import noble3 from'./assets/bttl-react/noble3.jpg';
import pt from'./assets/bttl-react/pt.jpg';
import timmy from'./assets/bttl-react/timmy.jpeg';
import peace from'./assets/bttl-react/peace.JPG';
import noble2 from'./assets/bttl-react/noble2.jpg';
import Portrait from './assets/bttl-react/Portrait 1.JPG';
import Mobile from './assets/bttl-react/Portrait 4.PNG';
import Event from './assets/bttl-react/Portrait 3.jpg';
import Content from './assets/bttl-react/Portrait 5.jpg';
import  Lightroom  from './assets/bttl-react/Portrait 6.PNG';
import bttl from './assets/bttl-react/BTTL.png'

function App() {


  return (
    <>

<div className="hero">
  <div className="angled-background"> <h1>BTTl</h1> <button>contact Me</button></div>

  <div className="content">
    <header>
          <nav>
      <ul>
        <li><a href='./App.jsx'>home</a></li>
        <li><a href="#">About Me</a></li>
        <li><a href="#">works</a> </li>
      </ul>
    </nav>
    </header>
    <h1>😊Welcome to BTTL</h1>
    <h5>where every last shot is better than the last</h5>
    <p>|mobile photography. real moments. clean edits.
capturing with intention, editing with purpose</p>
<button>explore my work</button>
  </div>
</div>
<section className='imas'>
  <div className='sec'>
  <div className='item item1'><img src={noble1} alt="img1" /></div>
  <div className='item item2'> <img src={jjk} alt="img2" /></div>
  <div className='item item3'> <img src={butfly} alt="img3" /></div>
  <div className='item item4'> <img src= {noble3} alt="img4" /></div>
  <div className='item item5'> <img src={pt} alt="img5" /></div>
  <div className='item item6'> <img src={timmy} alt="img6" /></div>
  <div className='item item7'> <img src={peace} alt="img7" /></div>
  <div className='item item8'> <img src= {noble2} alt="img8" /></div>
</div>
</section> 
     <section className='section2'>
      <Secti />
      <div className='cards'>
        <h1>services</h1>

        <div className='sev'> 
          <img src={ Portrait } alt=" Portrait " /> <div className='come1'><h3>portrait photography</h3> <p>Capturing personal moments with depth and clarity — from solo shots to professional headshots.</p></div>
        </div>

        <div className='sev'>
            <div className='come2'><h3>Event Photography</h3><p>Covering birthdays, hangouts, ceremonies, and casual moments with storytelling through visuals.</p></div> <img src={Event} alt="Event Photography" />
        </div>
       

        <div className='sev'>
         <img src={Mobile} alt="Mobile" /><div className='come3'><h3>Mobile Photography Edits</h3><p>High-quality edits using only mobile tools to transform everyday shots into premium content.</p></div>
        </div>
        
        <div className='sev'>
          <div className='come4'><h3> Content Creation</h3><p>Short-form reels, behind-the-scenes, and creative shots for social media and branding</p></div> <img src={Content} alt="Content Creation" />
        </div>

        <div className='sev'>
          <img src={ Lightroom} alt=" Presets" /> <div className='come5'><h3>Lightroom Presets (Coming Soon)</h3><p>Exclusive BTTL presets to give your photos the signature “Better Than The Last” feel.</p></div>
        </div>

      </div>
      
 </section>
 <section className='section3'>
  <div>
        <div className="f-d">
        <h1>Get In Touch</h1>
        <p style={{ opacity: 0.8 }}>Let's discuss your next project or collaboration</p>
        <div>
        <form className="form">
            <input type="text" placeholder="name" /><br />
            <input type="text" placeholder="email" /><br />
           <textarea name="" id="" cols="100" rows="6" placeholder="drop a message" ></textarea> <br />
            <button>Send A message</button>
            <br /><hr />
            <p>or contact with</p>

        </form>
        </div>
    </div>
  </div> 
 </section>

 <footer  className='f-o'>
            <div className='f-1'>
              <div className="f-3">
                    <h2> BTTL</h2><br /><p>better than the last</p>
              <p style={{ opacity: 0.6 }}> mobile photography. real moments. clean edits. <br /> capturing with intention, editing with purpose</p>
                    
              </div>
              <div><img src={bttl} alt="bttl logo" /></div>
                        </div>


        <div className="ul">
                           
            <ul>
                <h3>Navigations</h3>
                <li><a href='./App.jsx'>home</a></li>
                <li><a href="">About Me</a></li>
                <li><a href="">contact Me</a></li>
            </ul>

            <ul>
                <h3>Content</h3>
                <li><a href="">explore my work</a></li>
                <li><a href="">contact Me</a></li>
            </ul>

            <ul>
                <h3>Contact</h3>
                <li><a href=""> timipaul7@gmail.com</a></li>
                <li><a href=""> shotbybttl</a></li>
                <li><a href=""> shotbybttl</a></li>
                <li><a href="">+2349031391991</a></li>
                <br />
                <p style={{ opacity: 0.6, padding: '5px' }}>Lagos/Nigeria</p>
            </ul>

        </div>

    </footer>
    </>
  )

}

export default App;
