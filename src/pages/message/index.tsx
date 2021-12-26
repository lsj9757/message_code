import Message, { MessageProps } from './components/message/index';
import './index.less';

// 消息页面
export default function MessagePage() {
  const messageModel:MessageProps = {
    api: '/test'
  }
  return <div>
    <Message
      {...messageModel}
    />
  </div>;
};
