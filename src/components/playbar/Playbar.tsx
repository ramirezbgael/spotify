import './Playbar.css'
const Playbar = () => {
  
  return (
    <div className='playbar'>
      <div className="cover">
        Cover
      </div>
      <div className="actions">
       <audio controls src='https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-10.mp3'></audio>
      </div>
    </div>
  )
}

export default Playbar