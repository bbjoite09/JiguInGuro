const baseUrl = 'https://hardcarrygr.herokuapp.com';
export const url = {
  src: baseUrl + '/hardcarry',
  downloadUrl: baseUrl + '/zero_diary+sticker.zip',
};

export const axiosSrc = {
  getComment: url.src + '/listCmnt',
  postComment: url.src + '/addCmnt',
  updateComment: url.src + '/updateCmnt',
  deleteComment: url.src + '/compareCmntPw',
  getFile: url.src + '/maeilZero',
};
