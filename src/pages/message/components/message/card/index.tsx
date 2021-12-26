import React from 'react'
import SystemMessage from './systemMessage/index'
import TextMessage from './textMessage/index'
import ImageMessage from './ImageMessage/index'
import './index.less';

// 消息类型
enum MessageType { text, image, system }

// 消息基本参数
interface MessageCardModel {
  messageType: MessageType
  isMy?: boolean
  userName: string
  userAvatar?: string
  info: any
}

// 消息组件
const MessageCard: React.FC<MessageCardModel> = (props) => {
  const { messageType } = props;

  // 不同消息渲染
  const cardKindRender = () => {
    switch (messageType) {
      case MessageType.text:
        {
          return <TextMessage {...props} />
        }
      case MessageType.image:
        {
          return <ImageMessage {...props} />
        }
      case MessageType.system:
        {
          return <SystemMessage {...props} />
        }

    }
  }

  return <div className="messageCard__components">
    {cardKindRender()}
  </div>;
}

export default MessageCard;
export { MessageType, MessageCardModel };
