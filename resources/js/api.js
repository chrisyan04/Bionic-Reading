async function convertText() {
    const url = 'https://bionic-reading1.p.rapidapi.com/convert';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '052e50bde3msh252d405d40faeacp102ddcjsnbbfdf01b05be',
            'X-RapidAPI-Host': 'bionic-reading1.p.rapidapi.com'
        },
        body: new URLSearchParams({
            content: document.getElementById('inputText').value,
            response_type: 'html',
            request_type: 'html',
            fixation: '1',
            saccade: '10'
        })
    };
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        document.getElementById('outputText').innerHTML = result;
    } catch (error) {
        console.error(error);
    }
}