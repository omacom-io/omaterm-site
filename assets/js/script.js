document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.command--copy').forEach(command => {

    const button = document.createElement('button');

    command.append(button);

    button.setAttribute('aria-label', 'Copy the Omaterm install command');

    button.addEventListener('click', (e) => {

      e.preventDefault();

      const code = command.querySelector('code').innerText.trim();

      navigator.clipboard.writeText(code);

    });

  });

});
