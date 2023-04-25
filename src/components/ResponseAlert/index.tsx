import { Alert, AlertProps } from 'antd';
import { useEffect, useState } from 'react';

type ResponseAlertprops = {
  type: AlertProps['type'];
  message: string;
  onClose?: () => void;
};

const ResponseAlert = ({ type, message }: ResponseAlertprops) => {
  const [text, setText] = useState(message);
  useEffect(() => {
    if (text) {
      setTimeout(() => {
        setText('');
      }, 5000);
    }
  }, [text]);

  if (!text) return null;
  return <Alert description={message} type={type} closable onClose={() => setText('')} />;
};
export default ResponseAlert;
