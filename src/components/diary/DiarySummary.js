import React, { useEffect, useState } from 'react';
import RoundButton from '../../elements/RoundButton';
import Typography from '../../elements/Typography';
import { service } from '../../services';
import mockup1 from '../../static/images/home/mockup_2.png';
import logo from '../../static/images/diarySummary/logo.png';
import char6 from '../../static/images/diarySummary/char_6.png';
import char7 from '../../static/images/diarySummary/char_7.png';
import char8 from '../../static/images/diarySummary/char_8.png';
import recycle1 from '../../static/images/diarySummary/recycle_1.png';
import recycle2 from '../../static/images/diarySummary/recycle_2.png';
import recycle3 from '../../static/images/diarySummary/recycle_3.png';

const DiarySummary = () => {
  const [path, setPath] = useState();
  useEffect(() => {
    service.download.getFile().then(res => {
      const blob = new Blob([res.data], { type: 'application/pdf' });
      setPath(window.URL.createObjectURL(blob));
    });
  }, []);

  return (
    <>
      <img src={logo} style={{ width: '10%', marginTop: '5em' }} />
      <Typography myType="title" margin="0.5em 0 0.5em 0">
        제로일기
        <br />
        다이어리 set
      </Typography>
      <img src={mockup1} style={{ width: '100%' }} />

      <Typography myType="content" type="GothicM" margin="2.5em 0 -1em 0">
        이제 막 제로인으로 거듭난 당신을 위해,
        <br />
        제로인구로 팀이 준비한 선물!
      </Typography>
      <a href={path} target="_self" download="제로일기.pdf">
        <RoundButton>다이어리 다운로드</RoundButton>
      </a>

      <img src={char6} style={{ width: '35%', margin: '5em 0 1em -45%' }} />
      <Typography myType="title" textAlign="left" margin="0 0 0 10%">
        플라스틱 없고,
        <br />
        비닐 없고,
        <br />
        새것 없고…
      </Typography>
      <Typography
        type="GothicM"
        textAlign="left"
        size="1.7rem"
        lineHeight="2.5rem"
        margin="5% 0 0 10%">
        지구를 위한 내일에는 신경써야 할 게 참 많죠.
        <br />
        불편하고 제약적인 삶을 지속하기란
        <br />
        어느 누구라도 쉽지 않습니다.
      </Typography>
      <div style={{ position: 'relative' }}>
        <img
          src={recycle1}
          style={{
            width: '15%',
            position: 'absolute',
            left: '18%',
            top: '-35%',
          }}
        />
        <img
          src={recycle2}
          style={{
            width: '10%',
            position: 'absolute',
            left: '10%',
            bottom: '-20%',
          }}
        />
        <img
          src={recycle3}
          style={{
            width: '8%',
            position: 'absolute',
            left: '40%',
            bottom: '-60%',
          }}
        />
        <Typography
          myType="title"
          textAlign="right"
          margin="4em 10% 0 0"
          mySpacing="-0.18rem">
          하지만
          <br />
          이건 어때요?
        </Typography>
        <Typography
          type="GothicM"
          textAlign="right"
          size="1.7rem"
          lineHeight="2.5rem"
          margin="5% 10% 0 0">
          그런데 유행하는 텀블러를 사지 않는
          <br />
          어떤가요? 배달음식을 시킬 때<br />
          플라스틱 식기를 거절하는 것은요?
        </Typography>
      </div>
      <div style={{ position: 'relative' }}>
        <img
          src={char7}
          style={{
            width: '18em',
            position: 'absolute',
            top: '-9.6em',
            left: '13em',
          }}
        />
        <Typography
          myType="title"
          textAlign="left"
          margin="8em 1% 0 10%"
          mySpacing="-0.18rem">
          이게
          <br />
          제로웨이스트냐구요?
          <br />
          그럼요!
        </Typography>
        <Typography
          type="GothicM"
          textAlign="left"
          size="1.7rem"
          lineHeight="2.5rem"
          margin="5% 0 0 10%">
          텀블러를 사지 않으면서 다회용품 생산에
          <br />
          발생하는 온실가스를 줄이고, 플라스틱 식기로 인한
          <br />
          대기오염과 해양오염을 방지한 걸요.
        </Typography>
      </div>
      <div
        style={{
          backgroundColor: '#078D68',
          width: '100%',
          height: '100%',
          paddingTop: '6em',
          paddingBottom: '6em',
          marginTop: '10em',
        }}>
        <Typography
          type="GothicM"
          size="1.7rem"
          lineHeight="2.8rem"
          color="white">
          우리의 생각보다도
          <br />
          사소한 선택으로 만들어지는
          <br />
          쓰레기들은 무궁무진하고,
        </Typography>
        <Typography
          type="GothicM"
          size="1.7rem"
          lineHeight="2.8rem"
          color="white">
          우리가 도전할 수 있는 제로라이프도
          <br />
          그만큼 무궁무진하답니다.
        </Typography>
      </div>
      <img src={char8} style={{ width: '100%' }} />
      <>
        <Typography
          type="GothicM"
          textAlign="left"
          size="1.7rem"
          lineHeight="2.7rem"
          margin="3em 0 6em 10%">
          우리 당장은 이런 쉬운 것들부터
          <br />
          시작해보면 어떨까요?
          <br />
          <br />
          어느 아름다운 미래에 뒤를 돌아봤을 때,
          <br />
          작은 습관들을 켜켜이 쌓아올리기 시작한
          <br />
          오늘을 떠올릴지 몰라요.
        </Typography>
      </>
    </>
  );
};
export default DiarySummary;
