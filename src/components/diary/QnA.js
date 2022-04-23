import React from 'react';
import Typography from '../../elements/Typography';
import mockup5 from '../../static/images/qna/mockup_5.png';

const QnA = () => {
  const getNumber = (num, margin) => {
    return (
      <div
        style={{
          width: '6.2em',
          height: '3.4em',
          border: '0.27em solid #0B8765',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '100%',
          margin: '0 auto',
          marginTop: margin ? margin : '5em',
        }}>
        <Typography size="2.2rem" margin="0">
          Q{num}
        </Typography>
      </div>
    );
  };
  return (
    <div style={{ paddingBottom: '5em' }}>
      {getNumber(1, '10em')}
      <Typography size="3.2rem" margin="0.5em 0 1em 0">
        어떻게 사용하나요?
      </Typography>
      <Typography myType="content" type="GothicM" margin="0 10%">
        {'<제로일기 다이어리>'}는 굿노트, 노타빌리티 등의 아이패드 어플에서
        사용가능한 <span style={{ fontFamily: 'GothicEB' }}>PDF 파일</span>{' '}
        입니다.
        <br />
        <br />
        {'- 굿노트: [불러오기] > [저장위치]'}
        <br />
        {'- 노타빌리티: [파일] > [저장위치] > [새 노트 생성]'}
        <br />
        <br />
        위와 같은 경로를 통해 어플에서 불러올 수 있습니다!
      </Typography>
      <hr
        style={{
          borderTop: '0.6px solid #0B8765',
          width: '80%',
          marginTop: '5em',
        }}
      />
      {getNumber(2)}
      <Typography size="3.2rem" margin="0.5em 0 1em 0">
        어렵지 않나요?
      </Typography>
      <img src={mockup5} style={{ width: '80%' }} loading="lazy" />
      <Typography myType="content" type="GothicM" margin="2em 10%">
        어떻게 써야 할지 막막한 분들을 위해, 참고하며 쓸 수 있는 샘플 페이지를
        같이 구성했습니다.
        <br />다 작성한 후에는 샘플페이지들만 삭제할 수 있습니다.
      </Typography>
      <hr
        style={{
          borderTop: '0.6px solid #0B8765',
          width: '80%',
          marginTop: '5em',
        }}
      />
      {getNumber(3)}
      <Typography size="3.2rem" margin="0.5em 0 1em 0">
        인쇄해서 쓸 수 있나요?
      </Typography>
      <Typography myType="content" type="GothicM" margin="2em 10%">
        {'<제로일기 다이어리>'}는 종이로 인한 환경오염을 줄이는 페이퍼리스
        라이프를 위해 만들어진{' '}
        <span style={{ fontFamily: 'GothicEB' }}>디지털 다이어리</span> 입니다.
        <br />
        <br />
        컴퓨터를 통해 인쇄를 할 수는 있지만, 인쇄용 종이 규격이 아닌 아이패드
        규격에 맞춰 제작되었다는 점, 유의해주세요!
      </Typography>
    </div>
  );
};
export default QnA;
