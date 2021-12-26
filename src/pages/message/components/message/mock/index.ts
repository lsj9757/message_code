
import { MessageCardModel, MessageType } from '../card/index'
import { SystemMessageType } from '../card/systemMessage/index'

const mockList: MessageCardModel[] = [
  {
    messageType: MessageType.text,
    isMy: true,
    userName: '铃盛',
    userAvatar: 'https://p6-passport.byteacctimg.com/img/user-avatar/d5639b22afc2d60216762ca3771811b1~300x300.image',
    info: {
      content: '铃盛是用于语音、视频会议、团队通信和协作以及联络中心的一站式平台'
    }
  },
  {
    messageType: MessageType.text,
    isMy: false,
    userName: 'chuizi',
    userAvatar: 'https://lsj9757.github.io/images/hsq.png',
    info: {
      content: '这么厉害？'
    }
  },
  {
    messageType: MessageType.system,
    isMy: true,
    userName: '铃盛',
    userAvatar: 'https://p6-passport.byteacctimg.com/img/user-avatar/d5639b22afc2d60216762ca3771811b1~300x300.image',
    info: {
      type: SystemMessageType.revoke
    }
  },
  {
    messageType: MessageType.image,
    isMy: false,
    userName: 'chuizi',
    userAvatar: 'https://lsj9757.github.io/images/hsq.png',
    info: {
      content: 'https://www.ringcentral.com/content/dam/rc-www/cn/images/content/advantages/blade_1-png-rendition.webp'
    }
  },
  {
    messageType: MessageType.text,
    isMy: true,
    userName: '铃盛',
    userAvatar: 'https://p6-passport.byteacctimg.com/img/user-avatar/d5639b22afc2d60216762ca3771811b1~300x300.image',
    info: {
      content: '多种连接方式和强大的分析功能，保证客户在现有的基础架构中实现最佳语音质量'
    }
  },
  {
    messageType: MessageType.text,
    isMy: false,
    userName: 'chuizi',
    userAvatar: 'https://lsj9757.github.io/images/hsq.png',
    info: {
      content: '太强了'
    }
  },
  {
    messageType: MessageType.system,
    isMy: true,
    userName: '铃盛',
    userAvatar: 'https://p6-passport.byteacctimg.com/img/user-avatar/d5639b22afc2d60216762ca3771811b1~300x300.image',
    info: {
      type: SystemMessageType.add,
      nameList: [
        '铃盛2', '铃盛3'
      ]
    }
  },
]

export default mockList;
