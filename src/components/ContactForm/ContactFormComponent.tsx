import { Rule } from 'antd/es/form';
import { ContactFormValues } from '.';
import { FormContainer, ButtonForm, ResponseMsg } from './FormStyles';
import { Form, Input } from 'antd';
import { memo } from 'react';
const { TextArea } = Input;

type ContactFormComponentProps = {
  isSubmitted: boolean;
  responseMessage: string;
  handleSubmit: (values: ContactFormValues) => Promise<void>;
  requiredRule: (message: string) => Rule;
  isSendForm: boolean;
};

export const ContactFormComponent: React.FC<ContactFormComponentProps> = memo(
  ({ isSubmitted, responseMessage, handleSubmit, requiredRule, isSendForm }) => {
    const [form] = Form.useForm<ContactFormValues>();
    return (
      <FormContainer>
        {isSubmitted ? (
          <ResponseMsg>{responseMessage}</ResponseMsg>
        ) : (
          <>
            <h2>Contact Us</h2>
            <Form form={form} layout="vertical" onFinish={handleSubmit} requiredMark="optional">
              <Form.Item label="Name" name="name" rules={[requiredRule('Please enter your name')]}>
                <Input placeholder="Your name" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  requiredRule('Please enter your email'),
                  {
                    type: 'email',
                    message: 'Please enter a valid email',
                  },
                ]}
              >
                <Input placeholder="Your email" />
              </Form.Item>
              <Form.Item
                label="Message"
                name="message"
                rules={[requiredRule('Please enter your message')]}
              >
                <TextArea rows={5} placeholder="Your message" />
              </Form.Item>

              <Form.Item>
                <ButtonForm type="submit" disabled={isSendForm} $loading={isSendForm}>
                  {isSendForm ? 'Sending...' : 'Send'}
                </ButtonForm>
              </Form.Item>
            </Form>{' '}
          </>
        )}
      </FormContainer>
    );
  },
);
