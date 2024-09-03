const commands = {
    help: `
Available commands:
- help: Display this help message.
- about: Display information about me.
- projects: Show a list of my projects.
- contact: Display contact information.
- clear: Clear the terminal.
    `,
    about: `
[Your Name] - Security Researcher & Developer
Experience in cloud architecture, DevOps, bug bounty hunting, and more.
    `,
    projects: `
Projects:
- Cloud Architecture Design: An efficient cloud infrastructure template.
- Active Directory Course: A detailed course covering AD fundamentals.
- DevOps CI/CD Pipeline: A fully automated pipeline setup.
    `,
    contact: `
Contact Information:
- Email: youremail@example.com
- LinkedIn: linkedin.com/in/yourprofile
- GitHub: github.com/yourprofile
    `,
    clear: ''
};

document.getElementById('user-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = this.value.trim().toLowerCase();
        const outputDiv = document.getElementById('output');

        if (commands[input]) {
            if (input === 'clear') {
                outputDiv.innerHTML = '';
            } else {
                outputDiv.innerHTML += `<p class="prompt">~[user@portfolio]$ ${input}</p>`;
                outputDiv.innerHTML += `<p>${commands[input]}</p>`;
            }
        } else {
            outputDiv.innerHTML += `<p class="prompt">~[user@portfolio]$ ${input}</p>`;
            outputDiv.innerHTML += `<p>Command not found: ${input}</p>`;
        }

        this.value = '';
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }
});
