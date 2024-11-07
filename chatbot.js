// Toggle visibility of chatbot
function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    chatbotContainer.style.display = chatbotContainer.style.display === "none" ? "flex" : "none";
}

// Function to show typing indicator
function showTyping() {
    const messages = document.getElementById('chatbot-messages');
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('message', 'bot', 'typing');
    typingIndicator.innerHTML = `
        <div class="avatar bot"></div>
        <div class="bubble">...</div>
    `;
    messages.appendChild(typingIndicator);
    messages.scrollTop = messages.scrollHeight;
    return typingIndicator;
}

// Function to add a message to the chat window
function addMessage(sender, text) {
    const messages = document.getElementById('chatbot-messages');
    const message = document.createElement('div');
    message.classList.add('message', sender);
    message.innerHTML = `
        <div class="avatar ${sender}"></div>
        <div class="bubble">${text}</div>
    `;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
}

// Function to process user input
function processInput() {
    const input = document.getElementById('userInput').value.trim();
    document.getElementById('userInput').value = ''; // Clear input

    if (input === "") return;

    addMessage('user', input);

    // Show typing indicator and add a delay before responding
    const typingIndicator = showTyping();

    setTimeout(() => {
        typingIndicator.remove();

        if (input.match(/\b(hi|hello|hey|greetings)\b/i)) {
            const greetings = [
                "Hello there! 😊 How’s your day going so far?",
                "Hey! I’m here and ready to chat. What’s up?",
                "Hi! Great to see you here! Anything interesting on your mind?",
                "Hey there! How can I brighten up your day today?"
            ];
            addMessage('bot', greetings[Math.floor(Math.random() * greetings.length)]);
        } else if (input.match(/\b(portfolio|project|website|services)\b/i)) {
            const portfolioResponses = [
                "Sure! I'd love to help with portfolio questions. What specifically would you like to know?",
                "I can definitely guide you on portfolio-related topics. Feel free to ask!",
                "Anything about the portfolio, project details, or sections – I'm here for it!",
                "Portfolio guidance? You’ve come to the right chatbot! 😊"
            ];
            addMessage('bot', portfolioResponses[Math.floor(Math.random() * portfolioResponses.length)]);
        } else if (input.match(/\b(goodbye|bye|see you later)\b/i)) {
            const goodbyes = [
                "Goodbye for now! Chat again soon! 😊",
                "See you later! And remember, I’m just a message away.",
                "Bye! Come back anytime you need a friend to chat with.",
                "See you around! Take care until next time!"
            ];
            addMessage('bot', goodbyes[Math.floor(Math.random() * goodbyes.length)]);
        } else if (input.match(/\b(home|main)\b/i)) {
            addMessage('bot', 'Sure! Taking you to the home page now – just click <a href="https://shanmukhsrinadh.github.io/Portfolio/#home">Home</a>.');
        } else if (input.match(/\b(about him|about shannu|about)\b/i)) {
            addMessage('bot', 'You can learn all about Shanmukh in the <a href="https://shanmukhsrinadh.github.io/Portfolio/#about">About section</a>. Let me know if you have more questions!');
        } else if (input.match(/\b(resume|his resume|his cv|CV)\b/i)) {
            addMessage('bot', 'You can view Shanmukh\'s resume in the <a href="https://drive.google.com/file/d/1G1TQ3d8znA-lqlTkOMLv8TPNnVbtpVUB/view">Resume section</a>.');
        } else if (input.match(/\b(skills|what does he know)\b/i)) {
            addMessage('bot', 'Check out the <a href="https://shanmukhsrinadh.github.io/Portfolio/#about">Skills section</a> to see what Shanmukh knows!');
        } else if (input.match(/\b(projects|works|work|project)\b/i)) {
            addMessage('bot', 'Check out the <a href="https://shanmukhsrinadh.github.io/Portfolio/#work">Projects section</a> to see Shanmukh\'s amazing work.');
        } else {
            addMessage('bot', "My AI knowledge is focused on the portfolio. Please phrase your questions or ask me something else related to the portfolio; I'll be happy to guide you through.");
        }
    }, 1000); // 1-second typing delay for realism
}

// Function to check if Enter key is pressed
function checkEnter(event) {
    if (event.key === "Enter") {
        processInput();
    }
}
