import axios from 'axios';
import { axiosSrc } from '../static/url/axiosSrc';

class DownloadService {
  async getFile() {
    const data = await axios
      .get(axiosSrc.getFile, { responseType: 'blob' })
      .then(res => {
        return res;
      })
      .catch(error => {
        throw error;
      });
    return data;
  }
}
export default DownloadService;
