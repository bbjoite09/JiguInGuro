import axios from 'axios';

class CardService {
  getClickNum = async () => {
    const data = await axios
      .get('https://hardcarrygr.herokuapp.com/')
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
    return await data;
  };
}

export default CardService;
