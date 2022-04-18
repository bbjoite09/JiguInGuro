import React, { useState } from 'react';
import Typography from '../../elements/Typography';
import logo from '../../static/images/diarySummary/logo.png';
import eroomLogo from '../../static/images/event/eroom_logo.png';
import styled from 'styled-components';
import down from '../../static/images/comment/down.svg';
import up from '../../static/images/comment/up.svg';
import divider from '../../static/images/comment/divider.svg';
import { service } from '../../services';

const Comment = () => {
  const [isSelect, setSelect] = useState(false);
  const [comments, setComment] = useState();

  const getComment = pageNum => {
    service.comment.getComment(pageNum, 10).then(res => {
      setComment(res);
      // 로그 확인...
      console.log(comments[0].cmnttext);
    });

    // comments.map(data => {
    //   return (
    //     <>
    //       <Typography myType="content" type="GothicB">
    //         {data['cmntid']}
    //       </Typography>
    //       <Typography type="GothicL" size="1.4rem" lineHeight="2.4rem">
    //         {data['cmnttext']}
    //       </Typography>
    //       <img src={divider} style={{ width: '80%' }} />
    //     </>
    //   );
    // });
  };

  return (
    <>
      <img src={logo} style={{ width: '10%', marginTop: '7em' }} />
      <Typography myType="title" margin="0.5em 0 0.5em 0">
        다짐해요
        <br />
        #제로웨이스트
      </Typography>
      <Typography myType="content" type="GothicM">
        {'<제로일기>'}로{' '}
        <span style={{ fontFamily: 'GothicB' }}>
          제로라이프를 시작하는
          <br />
          여러분의 각오
        </span>
        를 댓글에 공유해봐요!
        <br />
        <br />
        또는 제로인구로 팀에게 전하고 싶은 말이
        <br />
        있으시다면 댓글로 남겨주세요!
      </Typography>
      <RowContainer>
        <PwTitle>
          <Typography type="GothicB" size="1.3rem" color="white" margin="0">
            비밀번호
          </Typography>
        </PwTitle>
        <input
          type="password"
          style={{
            width: '50%',
            height: '2em',
            outlineColor: '#E6E6E6',
            border: '2px solid #E6E6E6',
          }}
        />
      </RowContainer>
      <Textarea placeholder="제로일기로 제로웨이스트 라이프 도전~!! " />
      <Button>
        <Typography type="GothicB" size="1.8rem" color="white" margin="0">
          등록
        </Typography>
      </Button>
      <DetailButton
        onClick={() => {
          setSelect(!isSelect);
        }}>
        <img src={isSelect ? up : down} />
        <Typography type="GothicB" size="1.4rem" margin="0 0 0 10%">
          댓글 더보기
        </Typography>
      </DetailButton>
      <img src={divider} style={{ width: '80%' }} />
      {isSelect ? getComment(1) : null}

      <Footer>
        <img src={eroomLogo} style={{ height: '55%' }} />
      </Footer>
    </>
  );
};

const Footer = styled.footer`
  background-color: #078d68;
  height: 5.6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30%;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10%;
  margin-top: 15%;
  align-items: center;
`;

const PwTitle = styled.div`
  background-color: #078d68;
  width: 18%;
  height: 3.25em;
  line-height: 3.25em;
  z-index: 3;
`;

const Textarea = styled.textarea`
  border: 2px solid #e6e6e6;
  outline-color: #e6e6e6;
  width: 69%;
  height: 4em;
  padding: 5% 5%;
  font-family: GothicM;
`;

const Button = styled.button`
  background-color: #078d68;
  border: none;
  cursor: pointer;
  width: 80%;
  height: 4em;
  margin-bottom: 3em;
`;

const DetailButton = styled.button`
  background-color: #00ff0000;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  vertical-align: middle;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  margin-left: 10%;
`;

export default Comment;
