const apiKey = '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';
const chatlog = document.getElementById('chatlog');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Función para agregar un mensaje al registro del chat
function addMessage(message, sender) {
    const messageContainer = document.createElement('div');
    messageContainer.classList.add(sender);
    messageContainer.innerText = message;
    chatlog.appendChild(messageContainer);
}

// Función para obtener una respuesta del chatbot
async function getChatResponse(userMessage) {
    try {
        const response = await fetch('https://api.openai.com/v1/engines/text-davinci-002/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey
            },
            body: JSON.stringify({
                prompt: 'Planificar un evento: ' + userMessage,
                max_tokens: 150
            })
        });
        if (!response.ok) {
            throw new Error('Error al obtener respuesta del servidor');
        }
        const data = await response.json();
        const botMessage = data.choices[0].text;
        addMessage(botMessage, 'Chatbot');
    } catch (error) {
        console.error('Error:', error);
        addMessage('Ha ocurrido un error al comunicarse con el chatbot', 'Chatbot');
    }
}

// Evento para manejar el envío de mensajes
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const userMessage = userInput.value;
        userInput.value = '';
        addMessage(userMessage, 'Usuario');
        getChatResponse(userMessage);
    }
});

sendButton.addEventListener('click', () => {
    // Obtiene el mensaje del usuario del campo de entrada
    const userMessage = userInput.value;

    // Verifica si el campo de entrada no está vacío
    if (userMessage.trim() !== '') {
        // Borra el contenido del campo de entrada
        userInput.value = '';

        // Agrega el mensaje del usuario al registro del chat
        addMessage(userMessage, 'Usuario');

        // Obtiene una respuesta del chatbot
        getChatResponse(userMessage);
    }
});
