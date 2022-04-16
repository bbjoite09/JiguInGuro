import React, { useState } from 'react';
import RoundButton from '../../elements/RoundButton';
import Typography from '../../elements/Typography';
import picture from '../../static/images/diary/pic.png';
import { service } from '../../services';

const DiarySummary = () => {
  const [blobData, setBlob] = useState();

  service.download.getFile().then(res => {
    setBlob(res.data);
  });
  const blob = new Blob([blobData], { type: 'application/pdf' });
  const path = window.URL.createObjectURL(blob);

  return (
    <>
      <Typography myType="title" margin="2em 0 1em 0">
        매일제로
        <br />
        다이어리 set
      </Typography>
      <img src={picture} style={{ width: '80%' }} />
      <Typography myType="content" type="GothicM" margin="2.5em 0 -1em 0">
        이제 막 제로인으로 거듭난 당신을 위해,
        <br />
        제로인구로 팀이 준비한 선물!
      </Typography>
      <a href={path} target="_self" download="제로일기.pdf">
        <RoundButton>다이어리 다운로드</RoundButton>
      </a>
    </>
  );
};
export default DiarySummary;
