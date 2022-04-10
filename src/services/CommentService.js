import axios from 'axios';
import { axiosSrc } from '../static/url/axiosSrc';

class CommentService {
  getComment() {
    const data = axios
      .get(axiosSrc.getComment)
      .then(res => {
        return res.data;
      })
      .catch(error => {
        throw error;
      });
    return data;
  }

  postComment(cmntid, cmnttext, cmntdate) {
    const data = axios
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

  updateComment(cmntid, cmnttext, cmntdate) {
    const data = axios
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

  deleteComment(cmntid, cmnttext, cmntdate) {
    const data = axios
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
