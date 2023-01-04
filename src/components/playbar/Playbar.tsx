import { useRef, useState } from 'react'
import './Playbar.css'
const Playbar = () => {

  let audioRef = useRef()
  const [playBtn, setPlayBtn] = useState('M7 6v12l10-6z')
  
  const playPause = () =>{
    if (playBtn === 'M7 6v12l10-6z'){
      audioRef.current.play()
      setPlayBtn('M8 7h3v10H8zm5 0h3v10h-3z')
    } else {
      setPlayBtn('M7 6v12l10-6z')
      audioRef.current.pause()
    }
  }

console.log(audioRef.current.ended)
  return (
    <div className='playbar'>
      <div className="cover">
        <img src="https://e-cdns-images.dzcdn.net/images/cover/2d740784396546039fe626ac2b92877b/250x250-000000-80-0-0.jpg" alt="Tyler The Creator - Call me if you get lost" />
      </div>
      <div className="actions">
        <div className='actions-up'>
          <section id="bar"></section>
        </div>
        <div className='actions-down'>
          <section id="actions-down-left">
            <div id="adl-title">CORSO</div>
            <div id="adl-artist">Tyler, The Creator</div>
            <div id="adl-album">Call me if you get lost</div>
          </section>
          <section id="actions-down-right">
            <div id="adr-previous">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" style={{fill: '#ffffff', padding:'0'}}><path d="m16 7-7 5 7 5zm-7 5V7H7v10h2z"></path></svg>
            </div>
            <audio 
              src="https://cdns-preview-9.dzcdn.net/stream/c-9990cd5b96f85daf3f3dc57ed801a899-6.mp3" 
              ref={audioRef}
            ></audio>
            <div onClick={()=>playPause()}  id="adr-play">
              <svg xmlns="http://www.w3.org/2000/svg"  width="45" height="45" viewBox="0 0 24 24" style={{fill: '#ffffff', padding:'0'}}><path d={playBtn}></path></svg>
            </div>
            <div id="adr-next">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" style={{fill: "#ffffff", padding:'0'}}><path d="M7 7v10l7-5zm9 10V7h-2v10z"></path></svg>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Playbar