import React, { useState } from 'react';
import styled from 'styled-components';
import Typography from '../../elements/Typography';
import divider from '../../static/images/guro/divider.svg';
import greenUp from '../../static/images/guro/green_up.svg';
import greenDown from '../../static/images/guro/green_down.svg';
import pinkDown from '../../static/images/guro/pink_down.svg';
import pinkUp from '../../static/images/guro/pink_up.svg';
import blueDown from '../../static/images/guro/blue_down.svg';
import blueUp from '../../static/images/guro/blue_up.svg';

const GuroTip = () => {
  const [isClick, setClick] = useState([false, false, false]);

  return (
    <Container>
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#D29BBA',
          padding: '10% 0',
        }}>
        <Typography
          size="3.2rem"
          lineHeight="42px"
          color="white"
          textAlign="left"
          margin="5% 0 0 10%">
          <span style={{ color: '#F5E376' }}>종이팩</span>은 모아서
          <br />
          종량제 봉투로 교환해요
        </Typography>
        <Typography
          size="1.4rem"
          lineHeight="22px"
          color="white"
          type="AppleSDGothicB00"
          textAlign="left"
          margin="5% 10%">
          종이팩은 일반 지류와 같이 배출하면 안 된다는 사실, 알고 계셨나요?
          종이팩은 다른 지류와 다르게 100% 천연펄프로 만들어져 있어 다양하게
          재활용 될 수 있어요. 이렇게 모아진 종이팩은 고급 화장지로도
          만들어진답니다.
        </Typography>
        <Button
          onClick={() => {
            setClick([
              ...isClick.slice(0, 0),
              !isClick[0],
              ...isClick.slice(1),
            ]);
          }}
          style={{ margin: '3em 0 2em 10%' }}>
          <img
            src={isClick[0] ? pinkUp : pinkDown}
            style={{ marginLeft: '-3%' }}
          />
          <Typography
            size="1.4rem"
            lineHeight="22px"
            color="white"
            type="AppleSDGothicB00"
            margin="0 0 0 10px">
            자세히 알아보기
          </Typography>
        </Button>
        {!isClick[0] ? null : (
          <>
            <img src={divider} style={{ width: '80%' }} />
            <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
              <Typography
                size="1.4rem"
                lineHeight="24px"
                color="white"
                type="AppleSDGothicB00"
                textAlign="left"
                margin="1.5em 0 1em 0">
                교환장소: 구로 관내 동주민센터
              </Typography>
              <Typography
                size="1.4rem"
                lineHeight="24px"
                color="white"
                type="AppleSDGothicB00"
                textAlign="left"
                margin="1em 0">
                교환방법: 종이팩 1.5kg을 종량재 봉투(10ℓ) 1매와 교환 가능
              </Typography>
              <Typography
                size="1.4rem"
                lineHeight="24px"
                color="white"
                type="AppleSDGothicB00"
                textAlign="left"
                margin="0">
                주의사항:
              </Typography>
              <Typography
                size="1.2rem"
                lineHeight="24px"
                color="white"
                type="AppleSDGothicB00"
                textAlign="left"
                margin="0"
                paddingLeft="1em"
                textIndent="-1em">
                1) 종이팩의 내용물을 비우고 물로 깨끗하게 헹군 후, 펼쳐서 건조한
                상태로 교환해주세요.
              </Typography>
              <Typography
                size="1.2rem"
                lineHeight="24px"
                color="white"
                type="AppleSDGothicB00"
                textAlign="left"
                margin="0"
                paddingLeft="1em"
                textIndent="-1em">
                2) 교환할 수 있는 종이팩으로는 우유팩, 주스팩, 기타 음료팩이
                있어요. 멸균 우유 처럼 종이팩 안쪽이 은박지로 코팅이 되어있는
                종이팩은 교환 할 수 없어요.
              </Typography>
              <Typography
                size="1.4rem"
                lineHeight="24px"
                color="white"
                type="AppleSDGothicB00"
                textAlign="left"
                margin="1em 0">
                문의전화: 구로구 청소행정과 02-860-2376
              </Typography>
            </div>
            <img src={divider} style={{ width: '80%' }} />
          </>
        )}
      </div>

      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#4D99CB',
          padding: '10% 0',
        }}>
        <Typography
          size="3.2rem"
          lineHeight="42px"
          color="white"
          textAlign="left"
          margin="5% 0 0 10%">
          <span style={{ color: '#F5E376' }}>아이스팩</span>은
          <br />
          전용 수거함에
          <br />
          넣어주세요
        </Typography>
        <Typography
          size="1.4rem"
          lineHeight="22px"
          color="white"
          type="AppleSDGothicB00"
          textAlign="left"
          margin="5% 10%">
          대부분 미세 플라스틱으로 제작된 젤 아이스팩은 자연분해가 어려워
          환경오염의 원인이 된다고 해요. 수거된 아이스팩은 세척, 소독, 재포장
          작업을 거쳐 지역 소상공인에게 무료로 제공 해드리고 있답니다.
        </Typography>
        <Button
          onClick={() => {
            setClick([
              ...isClick.slice(0, 1),
              !isClick[1],
              ...isClick.slice(2),
            ]);
          }}
          style={{ margin: '3em 0 2em 10%' }}>
          <img
            src={isClick[1] ? blueUp : blueDown}
            style={{ marginLeft: '-3%' }}
          />
          <Typography
            size="1.4rem"
            lineHeight="22px"
            color="white"
            type="AppleSDGothicB00"
            margin="0 0 0 10px">
            자세히 알아보기
          </Typography>
        </Button>
        {!isClick[1] ? null : (
          <>
            <img src={divider} style={{ width: '80%' }} />
            <>
              <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                <Typography
                  size="1.4rem"
                  lineHeight="24px"
                  color="white"
                  type="AppleSDGothicB00"
                  textAlign="left"
                  margin="1.5em 0 1em 0">
                  수거장소: 동주민센터 아이스팩 전용수거함
                </Typography>
                <Typography
                  size="1.4rem"
                  lineHeight="24px"
                  color="white"
                  type="AppleSDGothicB00"
                  textAlign="left"
                  margin="1em 0">
                  배출방법: 규격에 맞는 아이스팩을 세척 및 건조한 후 배출
                </Typography>
                <Typography
                  size="1.4rem"
                  lineHeight="24px"
                  color="white"
                  type="AppleSDGothicB00"
                  textAlign="left"
                  margin="0">
                  주의사항:
                </Typography>
                <Typography
                  size="1.2rem"
                  lineHeight="24px"
                  color="white"
                  type="AppleSDGothicB00"
                  textAlign="left"
                  margin="0"
                  paddingLeft="1em"
                  textIndent="-1em">
                  1) 오염이나 훼손되지 않은 젤 타임 아이스팩이 재활용
                  대상이에요. 펼쳐서 건조한 상태로 교환해주세요.
                </Typography>
                <Typography
                  size="1.2rem"
                  lineHeight="24px"
                  color="white"
                  type="AppleSDGothicB00"
                  textAlign="left"
                  margin="0"
                  paddingLeft="1em"
                  textIndent="-1em">
                  2) 정해진 규격의 아이스팩만 전용수거함에 넣어야 해요. 있어요.
                  (15cmx20cm,16cmx23cm)
                  <Typography
                    size="1.2rem"
                    lineHeight="24px"
                    color="white"
                    type="AppleSDGothicB00"
                    textAlign="left"
                    margin="0"
                    paddingLeft="1em"
                    textIndent="-1em">
                    3) 배출시간은 평일 09:00 ~ 18:00 이고, 공휴일에는 운영하지
                    않아요.
                  </Typography>
                </Typography>
                <Typography
                  size="1.4rem"
                  lineHeight="24px"
                  color="white"
                  type="AppleSDGothicB00"
                  textAlign="left"
                  margin="1em 0">
                  문의전화: 구로구 청소행정과 02-860-2376
                </Typography>
              </div>
            </>
            <img src={divider} style={{ width: '80%' }} />
          </>
        )}
      </div>
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#078D68',
          padding: '10% 0',
        }}>
        <Typography
          size="3.2rem"
          lineHeight="42px"
          color="white"
          textAlign="left"
          margin="5% 0 0 10%">
          <span style={{ color: '#F5E376' }}>투명 페트병</span>은
          <br />
          별도 분리 배출
          <br />
          해주세요
        </Typography>
        <Typography
          size="1.4rem"
          lineHeight="22px"
          color="white"
          type="AppleSDGothicB00"
          textAlign="left"
          margin="5% 10%">
          투명 페트병은 재활용 제품을 생산하는 고품질 재생 원료에요. 약 80%가
          재활용 되고 있지만 다른 플라스틱과 혼합 배출이 되고 있어 약 10% 정도만
          고품질 원료로 재활용되고 있어요. 투명 페트병만 별도 분리 배출해도
          고품질 폐페트병의 해외 수입양을 최소화 시킬 수 있어요
        </Typography>
        <Button
          onClick={() => {
            setClick([
              ...isClick.slice(0, 2),
              !isClick[2],
              ...isClick.slice(3),
            ]);
          }}
          style={{ margin: '3em 0 2em 10%' }}>
          <img
            src={isClick[2] ? greenUp : greenDown}
            style={{ marginLeft: '-3%' }}
          />
          <Typography
            size="1.4rem"
            lineHeight="22px"
            color="white"
            type="AppleSDGothicB00"
            margin="0 0 0 10px">
            자세히 알아보기
          </Typography>
        </Button>
        {!isClick[2] ? null : (
          <>
            <img src={divider} style={{ width: '80%' }} />
            <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
              <Typography
                size="1.4rem"
                lineHeight="2.4rem"
                color="white"
                type="AppleSDGothicB00"
                textAlign="left"
                margin="1.5em 0 1em 0"
                paddingLeft="4em"
                textIndent="-4em">
                배출방법: 정해진 요일에 투명 페트병 전용 수거함에 분리배출(전용
                수거함이 없을 경우 투명페트병만 따로 모아서)
              </Typography>
              <Typography
                size="1.4rem"
                lineHeight="2.4rem"
                color="white"
                type="AppleSDGothicB00"
                textAlign="left"
                margin="0">
                주의사항
              </Typography>
              <Typography
                size="1.2rem"
                lineHeight="2.4rem"
                color="white"
                type="AppleSDGothicB00"
                textAlign="left"
                margin="0"
                paddingLeft="1em"
                textIndent="-1em">
                1) 투명 페트병의 내용물을 비우고 깨끗하게 헹군 다음, 라벨을
                제거해요. 그 다음 이물질이 들어가지 않게 페트병을 잘 압착한 후
                뚜껑을 닫아서 배출해요. *뚜껑은 세척 과정에서 분리할 수 있어
                같이 배출해도 무방해요.
              </Typography>
              <Typography
                size="1.2rem"
                lineHeight="2.4rem"
                color="white"
                type="AppleSDGothicB00"
                textAlign="left"
                margin="0"
                paddingLeft="1em"
                textIndent="-1em">
                2) 투명페트병은 무색의 투명한 먹는 샘물, 음료 페트병만
                분리배출해요. 일회용컵, 계란판 등은 투명페트병과 따로 분리해서
                일반 플라스틱류로 배출해야 돼요.
              </Typography>

              <Typography
                size="1.4rem"
                lineHeight="24px"
                color="white"
                type="AppleSDGothicB00"
                textAlign="left"
                margin="1em 0">
                문의전화: 구로구 청소행정과 02-860-2376
              </Typography>
            </div>
            <img src={divider} style={{ width: '80%' }} />
          </>
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #d29bba;
  overflow: hidden;
`;

const Button = styled.button`
  background-color: #00ff0000;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  vertical-align: middle;
  width: 50%;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: inherit;
`;
export default GuroTip;
