import React from 'react'
import MessageList from './list/index'
import mockList from './mock/index'
import './index.less';

interface MessageProps {
  api?: string
}


// 消息组件 可做数据请求或直接接收数据
const Message: React.FC<MessageProps> = (props) => {
  const { api } = props;

  return <div>
    <MessageList listData={mockList} />
  </div>;
}

export default Message;
export { MessageProps };
