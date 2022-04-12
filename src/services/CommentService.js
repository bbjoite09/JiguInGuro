import axios from 'axios';
import { axiosSrc } from '../static/url/axiosSrc';

class CommentService {
  async getComment() {
    const data = await axios
      .get(axiosSrc.getComment)
      .then(res => {
        return res.data;
      })
      .catch(error => {
        throw error;
      });
    return data;
  }

  async postComment(cmntid, cmnttext, cmntdate) {
    const data = await axios
      .post(axiosSrc.postComment, {
        cmntid,
        cmnttext,
        cmntdate,
      })
      .then(res => {
        return res.data;
      })
      .catch(error => {
        throw error;
      });
    return data;
  }

  async updateComment(cmntid, cmnttext, cmntdate) {
    const data = await axios
      .post(axiosSrc.updateComment, {
        cmntid,
        cmnttext,
        cmntdate,
      })
      .then(res => {
        return res.data;
      })
      .catch(error => {
        throw error;
      });
    return data;
  }

  async deleteComment(cmntid, cmnttext, cmntdate) {
    const data = await axios
      .post(axiosSrc.deleteComment, {
        cmntid,
        cmnttext,
        cmntdate,
      })
      .then(res => {
        return res.data;
      })
      .catch(error => {
        throw error;
      });
    return data;
  }
}
export default CommentService;
