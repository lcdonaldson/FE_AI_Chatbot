// script.js
document.addEventListener("DOMContentLoaded", () => {
    const messageContainer = document.getElementById("chatbot-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
  
    // Function to add a message to the chat
    function addMessage(message, sender) {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message", sender);
      messageElement.innerHTML = `<p>${message}</p>`;
      messageContainer.appendChild(messageElement);
      messageContainer.scrollTop = messageContainer.scrollHeight; // Auto-scroll to the latest message
    }
  
    // Simulate a bot response
    function getBotResponse(userMessage) {
      // For now, just echo the user's message
      return `You said: "${userMessage}". This is a placeholder response.`;
    }
  
    // Handle send button click
    sendButton.addEventListener("click", () => {
      const userMessage = userInput.value.trim();
      if (userMessage) {
        addMessage(userMessage, "user");
        userInput.value = ""; // Clear the input box
  
        // Simulate a bot response after a short delay
        setTimeout(() => {
          const botResponse = getBotResponse(userMessage);
          addMessage(botResponse, "bot");
        }, 500);
      }
    });
  
    // Allow pressing "Enter" to send a message
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendButton.click();
      }
    });
  });