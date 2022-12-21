import './Artist.css'

const Artist = () => {
  return (
    <div className='artist'>
      <div className='image'>
        <h1>Daft Punk <i className='bx bxs-badge-check'></i></h1>
      </div>
      <div>
        <ul className='top-songs'>
          <p style={{margin: 0}}>TOP SONGS</p>
          <li>
            <div className='li-cover'>
            </div>
            <div className='li-name'>
            </div>
            <div className="li-artist">
            </div>
            <div className="li-duration">
            </div>
            <div className="li-album">
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Artist