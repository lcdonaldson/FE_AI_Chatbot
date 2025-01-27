// main.js
import {
    createMessageElement,
    scrollToLatestMessage,
    getBotResponse,
    handleUserMessage,
  } from "./chatbot.js";
  
  document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded!");
    const messageContainer = document.getElementById("chatbot-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
  
    function addMessage(message, sender) {
      const messageElement = createMessageElement(message, sender);
      messageContainer.appendChild(messageElement);
      scrollToLatestMessage(messageContainer);
    }
  
    function handleSendClick() {
      const userMessage = userInput.value;
      const botResponse = handleUserMessage(
        userMessage,
        addMessage,
        getBotResponse
      );
  
      if (botResponse) {
        userInput.value = ""; // Clear input
        setTimeout(() => addMessage(botResponse, "bot"), 500);
      }
    }
  
    sendButton.addEventListener("click", handleSendClick);
  
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        handleSendClick();
      }
    });
  });