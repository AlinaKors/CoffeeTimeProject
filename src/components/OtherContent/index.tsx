import { memo } from 'react';
import { Contact } from '../Contact';
import { OtherInfo, OtherTitle } from './OtherContentStyles';

export const OtherContent = memo(() => {
  return (
    <OtherInfo>
      <OtherTitle>Also, you can recommend our coffee to your friends if you like ^^</OtherTitle>
      <Contact importantBlock={false} />
    </OtherInfo>
  );
});
