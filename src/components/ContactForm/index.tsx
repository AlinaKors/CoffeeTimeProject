import React, { useState } from 'react';
import type { Rule } from 'antd/es/form';
import { ContactFormComponent } from './ContactFormComponent';

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [isSendForm, setisSendForm] = useState(false);

  const handleSubmit = async (values: ContactFormValues) => {
    setisSendForm(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });

      const data = await res.json();
      setResponseMessage(data.message);
      setIsSubmitted(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setResponseMessage('Something went wrong. Please try again later.');
      setIsSubmitted(true);
    } finally {
      setisSendForm(false);
    }
  };

  const requiredRule = (message: string): Rule => ({
    required: true,
    message,
  });

  return (
    <ContactFormComponent
      isSubmitted={isSubmitted}
      responseMessage={responseMessage}
      handleSubmit={handleSubmit}
      requiredRule={requiredRule}
      isSendForm={isSendForm}
    ></ContactFormComponent>
  );
};
