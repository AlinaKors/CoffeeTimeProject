import { useEffect, useState } from 'react';
import { Contact } from '../Contact';
import { ContentItem } from '../ContentItem';
import { ContentHeader, ContentContainer, Main } from './ContentStyles';

type itemType = {
  title: string;
  description: string;
};

export const Content = () => {
  const [items, setItems] = useState<itemType[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://1167e4bdea249f9f.mokky.dev/coffeeContent');
        const data: itemType[] = await res.json();
        setItems(data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <Main>
      <ContentHeader>Some more important facts about coffee</ContentHeader>
      <ContentContainer>
        {items?.map((item) => (
          <ContentItem key={item.title} title={item.title} description={item.description} />
        ))}
      </ContentContainer>
      <Contact importantBlock={true} />
    </Main>
  );
};
