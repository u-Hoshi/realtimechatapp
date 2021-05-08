const ChatItem = ({ username, body}) => {
  return (
    <div>
      <li>{username}:{body}</li>
    </div>
  );
};

export default ChatItem;
