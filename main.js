// main.js
import {
    createMessageElement,
    scrollToLatestMessage,
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
  
    async function getBotResponse(userMessage) {
      try {
        const response = await fetch("http://localhost:8000/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userMessage }),
        });
        const data = await response.json();
        return data.response;
      } catch (error) {
        console.error("Error fetching bot response:", error);
        return "Sorry, something went wrong.";
      }
    }
  
    async function handleSendClick() {
      const userMessage = userInput.value;
      const botResponse = await handleUserMessage(
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