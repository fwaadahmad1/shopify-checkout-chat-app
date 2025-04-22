import { Chat, reactExtension } from "@shopify/ui-extensions-react/checkout";

// 1. Choose an extension target
export default reactExtension("purchase.checkout.chat.render", () => (
  <ChatExtension />
));

function ChatExtension() {
  console.log("ChatExtension");
  return <Chat id="chat-extension" inlineSize={100} blockSize={50} />;
}
