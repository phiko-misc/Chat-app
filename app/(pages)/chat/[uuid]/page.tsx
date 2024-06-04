import Chatroom from "./Chatroom";
import { getUser } from "@/helpers/getUser";
import { notFound } from "next/navigation";
import {
  getChatrooms,
  getEncryptedChatKey,
  getMessages,
  sendMessage,
} from "./functions";

interface ChatProps {
  params: { uuid: UUID };
}

export default async function Chat({ params: { uuid } }: ChatProps) {
  const user = await getUser();

  if (!user) return notFound();

  const chatrooms = await getChatrooms(user.uuid);
  const messages = await getMessages(uuid);
  const encryptedChatKey = await getEncryptedChatKey(uuid, user.uuid);

  if (!encryptedChatKey) return notFound();

  return (
    <Chatroom
      chatroom_uuid={uuid}
      user={user}
      sendMessage={sendMessage}
      initialMessages={messages}
      initialChatrooms={chatrooms}
      encryptedChatKey={encryptedChatKey}
    />
  );
}
