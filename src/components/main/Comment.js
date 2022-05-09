import React, { useState, useRef, useEffect } from 'react';
import Typography from '../../elements/Typography';
import logo from '../../static/images/diarySummary/logo.png';
import eroomLogo from '../../static/images/event/eroom_logo.png';
import styled from 'styled-components';
import { service } from '../../services';

const Comment = () => {
  const [comments, setComment] = useState([]);
  const [id, setId] = useState();
  const [page, setPage] = useState(1);
  const [isModal, setModal] = useState(false);
  const pw = useRef();
  const delPw = useRef();
  const cmntText = useRef();

  useEffect(() => {
    // 처음 시작시 호출
    getComment(page);
  }, []);

  const getComment = pageNum => {
    service.comment.getComment(pageNum, 5).then(res => {
      pageNum == 1 ? setComment([...res]) : setComment([...comments, ...res]);
    });
  };

  const getModal = () => {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          zIndex: 5,
        }}>
        <div
          style={{
            width: window.innerWidth <= '500' ? '80%' : '400px',
            minHeight: 350,
            height: '60vh',
            backgroundColor: 'white',
            border: '1px solid #078d68',
            borderRadius: '50px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            paddingTop: '3em',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <>
            <Typography size="3rem" margin="10% 0 0 0">
              정말로
              <br />
              삭제하시겠습니까?
            </Typography>
            <Typography myType="detail" margin="1% 0">
              삭제하시려면 비밀번호를 입력해주세요
              <br />
              삭제하신 글은 되돌릴 수 없습니다.
            </Typography>
          </>

          <RowContainer style={{ width: '80%', marginTop: '15%' }}>
            <PwTitle>
              <Typography type="GothicB" size="1.4rem" color="white" margin="0">
                비밀번호
              </Typography>
            </PwTitle>
            <input
              type="password"
              inputMode="numeric"
              style={{
                width: '68%',
                height: '3.7rem',
                outlineColor: '#E6E6E6',
                border: '2px solid #E6E6E6',
              }}
              ref={delPw}
            />
          </RowContainer>
          <RowContainer
            style={{
              width: '100%',
              margin: '5% 0',
              justifyContent: 'center',
            }}>
            <Button
              style={{
                marginTop: '5%',
                borderRadius: '10px',
                width: window.innerWidth < '500' ? '40%' : '10em',
              }}
              onClick={() => {
                service.comment
                  .deleteComment(id, delPw.current.value)
                  .then(res => {
                    if (
                      res == "not matched data... check 'cmntid and cmntpw'" ||
                      res == '!= pw'
                    ) {
                      alert('비밀번호가 잘못되었습니다.');
                    } else {
                      setComment([]);
                      getComment(1);
                      setModal(false);
                    }
                  });
              }}>
              <Typography type="GothicB" size="1.8rem" color="white" margin="0">
                삭제하기
              </Typography>
            </Button>
            <Button
              style={{
                marginTop: '5%',
                borderRadius: '10px',
                width: window.innerWidth < '500' ? '40%' : '10em',
                marginLeft: '2%',
              }}
              onClick={() => {
                setModal(false);
              }}>
              <Typography type="GothicB" size="1.8rem" color="white" margin="0">
                닫기
              </Typography>
            </Button>
          </RowContainer>
        </div>
      </div>
    );
  };

  return (
    <section style={{ position: 'relative' }}>
      <img src={logo} style={{ width: '10%', marginTop: '3.0em' }} />
      <Typography myType="title" margin="0.5em 0 1em 0">
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
      <div
        style={{
          marginLeft: '10%',
          marginRight: '10%',
        }}>
        <RowContainer style={{ marginLeft: 0 }}>
          <PwTitle>
            <Typography type="GothicB" size="1.3rem" color="white" margin="0">
              비밀번호
            </Typography>
          </PwTitle>
          <input
            type="password"
            inputMode="numeric"
            style={{
              lineHeight: '3.25em',
              width: '100%',
              height: '3.6rem',
              outlineColor: '#E6E6E6',
              border: '2px solid #E6E6E6',
            }}
            ref={pw}
          />
        </RowContainer>
        <div style={{ width: '90%' }}>
          <Textarea
            placeholder="제로일기로 제로웨이스트 라이프 도전~!!"
            ref={cmntText}
          />
        </div>
        <Button
          onClick={() => {
            if (cmntText.current.value && pw.current.value) {
              service.comment
                .postComment(cmntText.current.value, pw.current.value)
                .then(() => {
                  setComment([]);
                  console.log(comments);
                  getComment(1);
                });
              alert('등록되었습니다.');
              cmntText.current.value = '';
              pw.current.value = '';
            } else if (cmntText.current.value == '') {
              alert('내용을 입력해주세요.');
            } else {
              alert('비밀번호를 입력해주세요.');
            }
          }}>
          <Typography type="GothicB" size="1.8rem" color="white" margin="0">
            등록
          </Typography>
        </Button>
      </div>
      {comments.map((data, idx, arr) => (
        <div key={data['row_number']}>
          <RowContainer
            style={{
              margin: '0',
              marginLeft: '10%',
              width: '80%',
              justifyContent: 'space-between',
            }}>
            <Typography
              myType="content"
              type="GothicB"
              textAlign="left"
              margin="3% 0 3% 0">
              {data['cmntid']}
            </Typography>
            <PageButton
              style={{ margin: '0 0 0 0' }}
              onClick={() => {
                setId(data['cmntid']);
                setModal(true);
              }}>
              <Typography type="GothicB" textAlign="right">
                삭제
              </Typography>
            </PageButton>
          </RowContainer>
          <Typography
            type="GothicL"
            size="1.4rem"
            lineHeight="2.4rem"
            textAlign="left"
            margin="0 10% 3% 10%"
            wordBreak="">
            {data['cmnttext']}
          </Typography>
          {!(idx == arr.length - 1) ? (
            <hr
              style={{
                borderTop: '0.6px solid #0B8765',
                width: '80%',
                marginTop: '5%',
              }}
            />
          ) : (
            <hr
              style={{
                borderTop: '2px solid #0B8765',
                width: '80%',
                marginTop: '5%',
              }}
            />
          )}
        </div>
      ))}
      <DetailButton
        onClick={() => {
          getComment(page + 1);
          setPage(page + 1);
        }}>
        <Typography type="GothicB" size="1.4rem" margin="1.5% 0 0 0">
          ... 댓글 더보기
        </Typography>
      </DetailButton>
      {isModal ? getModal() : null}
      <Footer>
        <img src={eroomLogo} style={{ height: '50%' }} />
      </Footer>
    </section>
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
  width: 25%;
  height: 4.19em;
  line-height: 4.19em;
  z-index: 3;
`;

const Textarea = styled.textarea`
  border: 2px solid #e6e6e6;
  outline-color: #e6e6e6;
  height: 5em;
  padding: 5% 5%;
  font-family: GothicM;
  margin: 0 auto;
  margin-top: -0.6%;
  z-index: 10;
  resize: none;
  width: 100%;

  ::placeholder {
    font-family: GothicM;
    color: #bbbbbb;
    font-size: 1.4rem;
  }
`;

const Button = styled.button`
  background-color: #078d68;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 4em;
  margin-bottom: 3em;
  margin-top: -0.7%;
`;

const DetailButton = styled.button`
  background-color: #00ff0000;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  vertical-align: middle;
  width: 50%;
  display: flex;
  margin-left: 10%;
  padding-left: 0;
`;

const PageButton = styled.button`
  background-color: #00ff0000;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
`;

export default Comment;
