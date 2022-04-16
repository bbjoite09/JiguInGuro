import CardService from './CardService';
import CommentService from './CommentService';
import DownloadService from './DownloadService';

export const service = {
  card: new CardService(),
  comment: new CommentService(),
  download: new DownloadService(),
};
