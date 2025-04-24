import { memo } from 'react';
import { ContactBtn, ContactBtnImportant } from './ContactStyles';
import { Link } from 'react-router';

type ContactProps = {
  importantBlock: boolean;
};

export const Contact: React.FC<ContactProps> = memo(({ importantBlock }) => {
  return (
    <Link to="/contact">
      {importantBlock ? (
        <ContactBtnImportant>Contact us</ContactBtnImportant>
      ) : (
        <ContactBtn>Contact us</ContactBtn>
      )}
    </Link>
  );
});
