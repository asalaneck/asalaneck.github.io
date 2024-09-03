document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('terminal');
    const inputField = document.getElementById('input');
    const output = document.getElementById('output');
    let history = [];

    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const command = inputField.value.trim();
            history.push(command);
            processCommand(command);
            inputField.value = '';
        }
    });

    function processCommand(command) {
        let response = '';

        switch (command.toLowerCase()) {
            case 'about':
                response = 'About Me: I am a security researcher and IT professional.';
                break;
            case 'projects':
                response = 'Projects:\n- Project 1: A description of project 1.\n- Project 2: A description of project 2.';
                break;
            case 'contact':
                response = 'Contact: Email me at alysia@example.com.';
                break;
            case 'exit':
                response = 'Goodbye!';
                break;
            default:
                response = 'Command not found. Type "about", "projects", "contact", or "exit".';
                break;
        }

        output.innerHTML += `<br><span class="prompt">$</span> ${command}<br><span class="response">${response}</span><br>`;
        terminal.scrollTop = terminal.scrollHeight;
    }
});
