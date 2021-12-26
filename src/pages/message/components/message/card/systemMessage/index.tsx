import React from 'react'
import { MessageCardModel } from '../index';
import './index.less';

// 系统消息类型 撤销/加群
enum SystemMessageType { revoke, add }

interface SystemMessageProps extends MessageCardModel {
  info: {
    type?: SystemMessageType
    nameList?: any[]
  }
}

const SystemMessage: React.FC<SystemMessageProps> = (props) => {
  const { userName, isMy, info } = props;

  // 撤回
  const revokeRender = () => {
    return (
      <div>
        { isMy ? '你' : userName }撤回了一条消息
      </div>
    )
  }

  // 添加群组
  const addRender = () => {
    return (
      <div>
        { isMy ? '你' : userName }邀请
        {
          info?.nameList?.map((item, index) => {
            return `${item}${(index + 1) === info?.nameList?.length ? '' : '、'}`
          })
        }
        加入群组
      </div>
    )
  }

  return <div className="systemMessage__components">
    {
      info?.type === SystemMessageType.revoke ? revokeRender() : addRender()
    }
  </div>;
}

export default SystemMessage;
export { SystemMessageType };
