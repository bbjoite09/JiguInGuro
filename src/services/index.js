import CardService from './CardService';
import CommentService from './CommentService';

export const service = {
  card: new CardService(),
  comment: new CommentService(),
};
