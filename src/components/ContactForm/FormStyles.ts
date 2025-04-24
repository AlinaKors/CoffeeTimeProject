import styled from 'styled-components';

type ButtonFormProps = {
  disabled?: boolean;
  $loading?: boolean;
};

export const FormContainer = styled.div`
  margin: 110px 0px;
  text-align: center;
  color: #5c4943;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: clamp(8px, 2vw, 32px) clamp(16px, 4vw, 64px);
  h2 {
    font-size: 42px;
  }

  form {
    max-width: 360px;
    width: 100%;
    background-color: rgb(209, 190, 156);
    padding: 24px;
    border: 3px #5c4943 solid;
    border-radius: 20px;
  }

  label {
    color: #5c4943 !important;
    font-size: 16px !important;
    font-family: 'Shantell Sans', cursive;
  }

  .ant-form-item-explain-error {
    font-family: 'Shantell Sans', cursive;
  }

  input,
  textarea {
    border: 3px #5c4943 solid;
    border-radius: 10px;
    font-family: 'Shantell Sans', cursive;
    font-size: 14px;
    &:hover {
      border: 3px rgba(92, 73, 67, 0.62) solid;
    }
    &:focus,
    &:focus-within {
      border: 3px rgb(155, 142, 126) solid;
      box-shadow: 0 0 0 2px rgba(202, 198, 175, 0.1);
    }
    &.ant-input-outlined.ant-input-status-error {
      border: 3px rgb(214, 69, 25) solid;
    }
  }
`;

export const ButtonForm = styled.button<ButtonFormProps>`
  background-color: ${({ disabled }) => (disabled ? '#9b8e8a' : '#5c4943')};
  width: 100%;
  position: relative;
  color: #d1be9c;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Shantell Sans', cursive;
  padding: 12px;
  margin-top: 8px;
  border-radius: 10px;
  border: none;
  transition: background 0.3s ease-in-out, transform 0.3s ease-in-out;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#9b8e8a' : '#3f312d')};
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.05)')};
  }

  &::before {
    display: ${({ $loading }) => ($loading ? 'block' : 'none')};
    content: '';
    position: absolute;
    right: 16px;
    top: 50%;
    margin-top: -12px;
    width: 24px;
    height: 24px;
    border: 2px solid;
    border-left-color: transparent;
    border-right-color: transparent;
    border-radius: 50%;
    transition-delay: 0.5s;
    transition-duration: 1s;
    animation: 0.8s linear infinite spin;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ResponseMsg = styled.h2`
  text-align: center;
  margin-top: 240px;
  padding: 0px 24px;
`;
