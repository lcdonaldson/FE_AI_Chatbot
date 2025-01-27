// script.js

export function createMessageElement(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);
  messageElement.innerHTML = `<p>${message}</p>`;
  return messageElement;
}

export function scrollToLatestMessage(container) {
  container.scrollTop = container.scrollHeight;
}

export function getBotResponse(userMessage) {
  return `You said: "${userMessage}". This is a placeholder response.`;
}

export function handleUserMessage(userMessage, addMessage, getResponse) {
  if (userMessage.trim()) {
    addMessage(userMessage, "user");
    const botResponse = getResponse(userMessage);
    return botResponse;
  }
  return null;
}

  