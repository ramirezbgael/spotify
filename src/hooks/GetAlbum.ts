import axios from "axios"

async function getAlbum(url:string) {
  try{
    const { data, status } = await axios.get(
      'https://api.deezer.com/album/302127',
      {
        headers: {
          Authorization: 'access_token'
        }
      }
    )
  } catch (error){
    if (axios.isAxiosError(error)){
      
    }
  };
} 

export default getAlbum
