const recipient = 'cspablocortez@gmail.com';
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const button = document.getElementById('submit-btn');

message.addEventListener('change', function() {
    const body = encodeURIComponent(message.value);
    button.href = `mailto:${recipient}?subject=Message from Website&body=${body}`;
})




