import React from 'react'
import { MessageCardModel } from '../index';
import './index.less';

// 图片消息
interface ImageMessageProps extends MessageCardModel {
  info: {
    content?: string;
  }
}

const ImageMessage: React.FC<ImageMessageProps> = (props) => {
  const { isMy, userName, userAvatar, info } = props;

  const avatarRender = () => {
    return (
      <div className="avatar">
        <div className="avatar__name">{userName}</div>
        <img className="avatar__img" src={userAvatar} />
      </div>
    )
  }

  const imgRender = () => {
    return (
      <img className="img" src={info?.content} />
    )
  }

  return <div className='imageMessage__components'>
  <div className={`${isMy? 'reverse_order' : 'order'}`}>
    {avatarRender()}
    <div className='line'></div>
    {imgRender()}
  </div>
</div>;
}

export default ImageMessage;
