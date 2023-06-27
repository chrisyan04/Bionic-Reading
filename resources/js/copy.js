let text = document.getElementById("outputText").innerText;
const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Content copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}