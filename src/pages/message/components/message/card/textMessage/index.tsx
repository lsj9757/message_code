import React from 'react'
import { MessageCardModel } from '../index';
import './index.less';

// 文本消息
interface TextMessageProps extends MessageCardModel {
  info: {
    content?: string;
  }
}

const TextMessage: React.FC<TextMessageProps> = (props) => {
  const { isMy, userName, userAvatar, info } = props;

  const avatarRender = () => {
    return (
      <div className="avatar">
        <div className="avatar__name">{userName}</div>
        <img className="avatar__img" src={userAvatar} />
      </div>
    )
  }

  const messageRender = () => {
    return (
      <div className={`message ${isMy? 'green' : 'white'}`}>
        { info?.content }
      </div>
    )
  }

  return <div className='textMessage__components'>
    <div className={`${isMy? 'reverse_order' : 'order'}`}>
      {avatarRender()}
      <div className='line'></div>
      {messageRender()}
    </div>
  </div>;
}

export default TextMessage;
