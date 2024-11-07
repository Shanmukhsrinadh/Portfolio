// Toggle visibility of chatbot
function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    
    // Toggle between showing and hiding the chatbot
    if (chatbotContainer.style.display === "none" || chatbotContainer.style.display === "") {
        chatbotContainer.style.display = "flex"; // Show the chatbot
    } else {
        chatbotContainer.style.display = "none"; // Hide the chatbot
    }
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
    messages.scrollTop = messages.scrollHeight; // Auto-scroll to the bottom
}

// Function to process user input
function processInput() {
    const input = document.getElementById('userInput').value.trim();
    document.getElementById('userInput').value = ''; // Clear input

    if (input === "") {
        return; // Prevent empty messages from being processed
    }

    // Display user message
    addMessage('user', input);

// Respond based on input
if (input.match(/\b(hi|hello|hey)\b/i)) {
    const greetings = ["Hello! 👋", "Hi there! 😊", "Hey! How can I help you today?"];
    addMessage('bot', greetings[Math.floor(Math.random() * greetings.length)]);
} else if (input.match(/\b(how are you|how's it going)\b/i)) {
    addMessage('bot', "I'm just a bot, but I'm here to help you explore the portfolio! 😊 How are you?");
} else if (input.match(/\b(tell me a joke)\b/i)) {
    const jokes = [
        "Why did the web developer go broke? Because they lost their domain!",
        "Why do programmers prefer dark mode? Because the light attracts bugs!",
        "How many programmers does it take to change a light bulb? None, it's a hardware problem!"
    ];
    addMessage('bot', jokes[Math.floor(Math.random() * jokes.length)]);
} else if (input.match(/\b(home|main)\b/i)) {
    addMessage('bot', 'Sure! Taking you to the home page now – just click <a href="https://shanmukhsrinadh.github.io/Portfolio/#home">Home</a>.');
} else if (input.match(/\b(about him|about shannu|about)\b/i)) {
    addMessage('bot', 'You can learn all about Shanmukh in the <a href="https://shanmukhsrinadh.github.io/Portfolio/#about">About section</a>. Let me know if you have more questions!');
} else if (input.match(/\b(resume|his resume|his cv|CV)\b/i)) {
    addMessage('bot', 'You can view Shanmukh\'s resume in the <a href="https://shanmukhsrinadh.github.io/Portfolio/#service">Resume section</a>.');
} else if (input.match(/\b(skills|what does he know)\b/i)) {
    addMessage('bot', 'Check out the <a href="https://shanmukhsrinadh.github.io/Portfolio/#about">Skills section</a> to see what Shanmukh knows!');
} else if (input.match(/\b(projects|works|work|project)\b/i)) {
    addMessage('bot', 'Check out the <a href="https://shanmukhsrinadh.github.io/Portfolio/#work">Projects section</a> to see Shanmukh\'s amazing work.');
} else {
    addMessage('bot', "I'm not sure how to respond to that. Try asking about 'About', 'Resume', 'Projects', or 'Skills'.");
}
}

// Function to check if Enter key is pressed
function checkEnter(event) {
    if (event.key === "Enter") {
        processInput();
    }
}

// Resizer logic
const resizer = document.getElementById('resizer');
let isResizing = false;
let lastDownY = 0;

resizer.addEventListener('mousedown', function(e) {
    isResizing = true;
    lastDownY = e.clientY;
});

window.addEventListener('mousemove', function(e) {
    if (!isResizing) return;
    const offset = e.clientY - lastDownY;
    const newHeight = Math.max(200, document.getElementById('chatbot-container').offsetHeight + offset);
    document.getElementById('chatbot-container').style.height = newHeight + 'px';
    lastDownY = e.clientY;
});

window.addEventListener('mouseup', function() {
    isResizing = false;
});
