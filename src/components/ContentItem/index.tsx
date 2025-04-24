import { memo } from 'react';
import { ContentItemContainer, ContentItemDesc, ContentItemTitle } from './ContentItemStyles';

type ContentItemProps = {
  title: string;
  description: string;
};

export const ContentItem: React.FC<ContentItemProps> = memo(({ title, description }) => {
  return (
    <ContentItemContainer>
      <section>
        <ContentItemTitle>{title}</ContentItemTitle>
        <ContentItemDesc>{description}</ContentItemDesc>
      </section>
    </ContentItemContainer>
  );
});
