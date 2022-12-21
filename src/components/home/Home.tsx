import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>Welcome human</h1>
      </div>
      {/*Artists*/}
      <div className='artists'>
        <p style={{margin: 0, fontSize: '.8em'}}>Top Artists</p>
        <div className='row'>
          <div className='item-card'>
            <div className="item-image">
              <img src="https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/250x250-000000-80-0-0.jpg" alt="" />
            </div>
            <div className="item-name">
              <h3>Daft Punk</h3>
            </div>
          </div>
          <div className='item-card'>
            <div className="item-image">
              <img src="https://e-cdns-images.dzcdn.net/images/artist/e963ffe19a2424a9d8ce44f88e9a09ad/250x250-000000-80-0-0.jpg" alt="" />
            </div>
            <div className="item-name">
              <h3>Selena Gomez</h3>
            </div>
          </div>
          <div className='item-card'>
            <div className="item-image">
              <img src="https://i.scdn.co/image/ab6761610000e5eb8278b782cbb5a3963db88ada" alt="" />
            </div>
            <div className="item-name">
              <h3>Tyler, the Creator</h3>
            </div>
          </div>
          <div className='item-card'>
            <div className="item-image">
              <img src="https://e-cdns-images.dzcdn.net/images/artist/76b19db9e6d06f95b25abb2da521b3b8/250x250-000000-80-0-0.jpg" alt="" />
            </div>
            <div className="item-name">
              <h3>Morat</h3>
            </div>
          </div>
          <div className='item-card'>
            <div className="item-image">
              <img src="https://e-cdns-images.dzcdn.net/images/artist/2b44a30475448e49add6f1c63c6f77b8/250x250-000000-80-0-0.jpg" alt="" />
            </div>
            <div className="item-name">
              <h3>Harry Styles</h3>
            </div>
          </div>
        </div>
      </div>
      {/*Charts*/}
      <div className="charts">
        <p style={{margin: 0, fontSize: '.8em'}}>Charts</p>
        <div className='row'>
          <div className='item-card'>
            <div className="item-image">
              <img src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_large.jpg" alt="" />
            </div>
            <div className="item-name">
              <p>Top 50 Global</p>
            </div>
          </div>
          <div className='item-card'>
            <div className="item-image">
              <img src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_mx_large.jpg" alt="" />
            </div>
            <div className="item-name">
              <p>Top 50 México</p>
            </div>
          </div>
          <div className='item-card'>
            <div className="item-image">
              <img src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_ar_large.jpg" alt="" />
            </div>
            <div className="item-name">
              <p>Top 50 Argentina</p>
            </div>
          </div>
          <div className='item-card'>
            <div className="item-image">
              <img src="https://i.scdn.co/image/ab67706f0000000313ddfca34213e3875e32f7ab" alt="" />
            </div>
            <div className="item-name">
              <p>El Top 2022</p>
            </div>
          </div>
          <div className='item-card'>
            <div className="item-image">
              <img src="https://i.scdn.co/image/ab67706f000000037f4ea941fbb7278dd4198116" alt="" />
            </div>
            <div className="item-name">
              <p>Top Tracks of 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home