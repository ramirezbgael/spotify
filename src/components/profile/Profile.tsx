import './Profile.css'
import axios from 'axios'
const Profile = () => {
  axios.get('https://api.deezer.com/album/302127')
    .then(res => console.log(res.data))
    .catch(err =>console.log('chin'))
  
  return (

    <section className="profile">

    </section>
  )
}

export default Profile