// script.js
const chatIdDisplay = document.getElementById('chat-id-display');
const chatContainer = document.getElementById('chat-container');
const status = document.getElementById('status');
const chatIdInput = document.getElementById('chat-id-input');
const messageInput = document.getElementById('message-input');
const messagesDiv = document.getElementById('messages');
const sendButton = document.getElementById('send-button');
const emailInput = document.getElementById('email-input');
const getIdButton = document.getElementById('get-id-button');
const joinChatButton = document.getElementById('join-chat-button');

let chatId = null;
let userChatId = null;
let usersInChat = 0;

// Generate a random chat ID
function generateChatId() {
    return Math.floor(Math.random() * 1000000);
}

// Simulate user getting a chat ID
getIdButton.addEventListener('click', () => {
    chatId = generateChatId();
    chatIdDisplay.textContent = `Your Chat ID: ${chatId}`;
    document.getElementById('login-container').style.display = 'none';
    chatContainer.style.display = 'block';
});

// Join chat by entering the chat ID
joinChatButton.addEventListener('click', () => {
    const enteredId = chatIdInput.value.trim();
    if (enteredId == chatId) {
        usersInChat++;
        if (usersInChat === 2) {
            status.textContent = 'You can start chatting now!';
            messageInput.style.display = 'block';
            sendButton.style.display = 'block';
            chatIdInput.style.display = 'none';
            joinChatButton.style.display = 'none';
        } else {
            status.textContent = `Waiting for another person to join... (${2 - usersInChat} more needed)`;
        }
    } else {
        status.textContent = 'Invalid Chat ID';
    }
});

// Send message
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        const messageContainer = document.createElement('div');
        messageContainer.textContent = message;
        messagesDiv.appendChild(messageContainer);
        messageInput.value = '';
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
});
