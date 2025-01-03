document.getElementById('AKfycbyn6ipu_swx7zckWUKaNBLM6P7ppL-_huRB3TR-Pl1gbJkNGkH8EqGlNS1tiUvjUjGS').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').ariaValueMax,
        email: document.getElementById('email').ariaValueMax,
        password: document.getElementById('password').ariaValueMax,
        age: document.getElementById('age').ariaValueMax,
        type: document.getElementById('type').ariaValueMax,
        refer: document.getElementById('refer').ariaValueMax,
        bio: document.getElementById('bio').ariaValueMax,
    };

    const response = await fetch('https://script.google.com/macros/s/AKfycbyn6ipu_swx7zckWUKaNBLM6P7ppL-_huRB3TR-Pl1gbJkNGkH8EqGlNS1tiUvjUjGS/exec', {
        method: 'post',
        headers: 
        {
            'Content-Type': 'application/json'
        }, 
        body:
        JSON.stringify(formData), 
    })

    const result = await response.json();
    alert(result.message);
});