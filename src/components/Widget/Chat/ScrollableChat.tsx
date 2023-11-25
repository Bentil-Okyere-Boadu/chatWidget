import ScrollableFeed from 'react-scrollable-feed'
import data from '../../../data';
import { Avatar, Tooltip } from '@chakra-ui/react'
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "./config";

const ScrollableChat = () => {

  const messages = data.messages;
  const user = data.user;
  return (
    <div className='p-6'>
    <ScrollableFeed>
      {messages &&
      messages.map((m, i) => (
        <div style={{ display: "flex" }} key={m.id}>
          {(isSameSender(messages, m, i, user.id) ||
            isLastMessage(messages, i, user.id)) && (
            <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
              <Avatar
                mt="7px"
                mr={1}
                size="sm"
                cursor="pointer"
                name={m.sender.name}
              />
            </Tooltip>
          )}
          <span
            style={{
              backgroundColor: `${
                m.sender.id === user.id ? "#BEE3F8" : "#B9F5D0"
              }`,
              marginLeft: isSameSenderMargin(messages, m, i, user.id),
              marginTop: isSameUser(messages, m, i) ? 3 : 10,
              borderRadius: "20px",
              padding: "5px 15px",
              maxWidth: "75%",
            }}
          >
            {m.content}
          </span>
        </div>
      ))}
    </ScrollableFeed>
    </div>
  )
}

export default ScrollableChat
