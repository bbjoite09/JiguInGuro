import React from 'react';
import styled from 'styled-components';
import Typography from '../../elements/Typography';
import text1 from '../../static/images/diaryInfo/txt_1.png';
import mockup1 from '../../static/images/diaryInfo/mockup_1.png';
import check from '../../static/images/diaryInfo/check.png';
import r5 from '../../static/images/diaryInfo/5r.png';
import plan from '../../static/images/diaryInfo/plan.png';
import logo from '../../static/images/diaryInfo/logo.png';
import mockup4 from '../../static/images/diaryInfo/mockup_4.png';
import tracker from '../../static/images/diaryInfo/tracker.png';
import month from '../../static/images/diaryInfo/month.png';
import year from '../../static/images/diaryInfo/year.png';
import highlight from '../../static/images/diaryInfo/highlight.png';

const getTitle = (num, title, color) => {
  return (
    <div
      style={{
        width: '44%',
        height: '7.5em',
        border: '2.7px solid black',
        borderColor: color,
        borderRadius: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '0 auto',
        marginTop: '10em',
      }}>
      {num ? (
        <>
          <Typography myType="content" type="GothicM" margin="0" color={color}>
            {num}
          </Typography>
          <Typography myType="title" margin="0" color={color}>
            {title}
          </Typography>
        </>
      ) : (
        <Typography size="3rem" margin="0" lineHeight="4.6rem" color={color}>
          {title}
        </Typography>
      )}
    </div>
  );
};

const DiaryInfo = () => {
  return (
    <>
      <img src={logo} style={{ width: '100%', marginBottom: '-1%' }} />
      <GreenContainer>
        <Typography
          myType="content"
          type="GothicM"
          color="white"
          margin="0 0 8em 0">
          {'<제로일기>'}는 지구를 위한 장거리 마라톤을 달리는
          <br />
          여러분을 도와줄 든든한 도구입니다.
        </Typography>
        {getTitle(null, '전체구성', 'white')}
        <Typography
          myType="content"
          type="GothicL"
          color="white"
          margin="1.5em 0 2em 0">
          <span style={{ fontFamily: 'GothicEB' }}>
            설계, 계획, 실천, 피드백
          </span>{' '}
          총 4단계로 구성되어
          <br />
          있어 체계적인 제로웨이스트 실천이 가능합니다.
        </Typography>
        <img
          src={text1}
          style={{ width: '80%', marginTop: '10%', marginBottom: '16%' }}
        />
      </GreenContainer>
      <div style={{ paddingBottom: '5em' }}>
        {getTitle('Chapter.1', '설계', '#078d68')}
        <Typography myType="detail">
          제로라이프를 시작하기 전 알아둬야 할 것들
        </Typography>
        <img
          src={mockup1}
          style={{ width: '80%', marginTop: '5em', marginBottom: '1em' }}
        />
        <Typography myType="content" type="GothicEB">
          나를 거쳐간 쓰레기
        </Typography>
        <Typography myType="detail">
          제로라이프를 시작하기 전 측정하기, 진단하기, 해결하기의
          <br />
          총 3단계로 내가 어떤 종류의 쓰레기를
          <br />
          얼마나 많이 배출하는지 알아보는 시간을 가져봐요.
        </Typography>
        <img
          src={check}
          style={{ width: '80%', marginTop: '5em', marginBottom: '1em' }}
        />
        <Typography myType="content" type="GothicEB">
          제로인 3단계에 따른
          <br />
          제로웨이스트 체크리스트
        </Typography>
        <Typography myType="detail" margin="0 0 12em 0">
          나는 어떤 제로인일까? 지금까지 실천해 온<br />
          제로웨이스트들을 체크하며
          <br />
          몰랐던 제로라이프 실천 방법도 알 수 있어요.
        </Typography>
        {getTitle('Chapter.2', '계획', '#078d68')}
        <Typography myType="detail">원칙을 실천가능하게 구체화하기</Typography>
        <img
          src={r5}
          style={{ width: '80%', marginTop: '1em', marginBottom: '1em' }}
        />
        <Typography myType="content" type="GothicEB">
          제로웨이스트 실천을 위한
          <br />
          다섯 가지 원칙, 5R
        </Typography>
        <Typography myType="detail">
          다섯 가지 제로웨이스트 원칙을 알아보고
          <br />
          각각의 원칙과 관련해서 내가
          <br />
          할 수 있는 것들은 무엇일지 구상해봐요.
          <br />
        </Typography>
        <img
          src={plan}
          style={{ width: '80%', marginTop: '5em', marginBottom: '1em' }}
        />
        <Typography myType="content" type="GothicEB">
          제로라이프 실천 계획 세우기
        </Typography>
        <Typography myType="detail">
          다섯 가지 원칙 중 내가 먼저 도전할 수 있는 원칙을 정해
          <br />
          구체적인 실천 계획을 세울 수 있는 페이지입니다.
          <br />
        </Typography>
        <img
          src={plan}
          style={{ width: '80%', marginTop: '5em', marginBottom: '1em' }}
        />
        <Typography myType="content" type="GothicEB">
          만다라트
        </Typography>
        <Typography myType="detail">
          목표달성 툴인 만다라트를 이용해
          <br />
          실천 계획을 세우는 것도 좋은 방법이에요.
        </Typography>
        {getTitle('Chapter.3', '실천', '#078d68')}
        <Typography myType="detail">
          계획을 실행하며 시행착오를 기록하기
        </Typography>
        <img
          src={mockup4}
          style={{ width: '100%', marginTop: '3em', marginBottom: '1em' }}
        />
        <Typography myType="content" type="GothicM">
          여유롭게 기록할 수 있는
          <br />
          넓은 여백의 <span style={{ fontFamily: 'GothicEB' }}>먼슬리</span>와
          <span style={{ fontFamily: 'GothicEB' }}> 위클리</span>로
          <br />
          자유롭게 제로라이프를 기록하세요.
        </Typography>
        <img
          src={tracker}
          style={{ width: '80%', marginTop: '5em', marginBottom: '0.5em' }}
        />
        <Typography myType="content" type="GothicEB">
          제로지수 트래커
        </Typography>
        <Typography myType="detail">
          나는 한 달 동안 얼마나 제로라이프를 실천했을까?
          <br />
          매일매일 실천량에 따라 스티커를 붙이며
          <br />한 달 간의 양상을 파악할 수 있는 트래커입니다.
        </Typography>
        <img
          src={month}
          style={{ width: '80%', marginTop: '5em', marginBottom: '0.5em' }}
        />
        <Typography myType="content" type="GothicEB">
          월말정산
        </Typography>
        <Typography myType="detail" margin="0 0 12em 0">
          계획 챕터에서 만들었던 계획들이 잘 지켜졌는지
          <br />
          별점을 매기고 이유를 적어보는 페이지입니다.
        </Typography>
        {getTitle('Chapter.4', '피드백', '#078d68')}
        <Typography myType="detail">
          올 한 해 당신의 제로라이프는 어땠나요?
        </Typography>
        <img
          src={year}
          style={{ width: '80%', marginTop: '2em', marginBottom: '0.5em' }}
        />
        <Typography myType="content" type="GothicEB">
          연말정산
        </Typography>
        <Typography myType="detail">
          질의응답을 통해 일 년 동안의 제로라이프를
          <br />
          점검해볼 수 있는 페이지입니다.
        </Typography>{' '}
        <img
          src={highlight}
          style={{ width: '80%', marginTop: '5em', marginBottom: '0.5em' }}
        />
        <Typography myType="content" type="GothicEB">
          올해의 하이라이트
        </Typography>
        <Typography myType="detail" margin="0 0 5em 0">
          내가 실천한 작은 행동이 뿌듯했던 순간,
          <br />
          나와의 약속이 잘 지켜지지 않아 속상했던 순간,
          <br />
          한 해 동안 제로웨이스트를 지켜나가며
          <br />
          기억에 남았던 순간들을 적어보세요.
        </Typography>
      </div>
    </>
  );
};

const GreenContainer = styled.div`
  background-color: #078d68;
  width: 100%;
  padding-top: 5em;
`;

export default DiaryInfo;
