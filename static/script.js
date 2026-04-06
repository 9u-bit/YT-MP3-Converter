const urlInput = document.getElementById('urlInput');
const pasteBtn = document.getElementById('pasteBtn');
const convertBtn = document.getElementById('convertBtn');
const statusMessage = document.getElementById('statusMessage');
const hiddenForm = document.getElementById('hiddenForm');
const hiddenUrl = document.getElementById('hiddenUrl');

// Paste
pasteBtn.addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText();
        
        if (text) {
            urlInput.value = text;
            urlInput.focus();
            
            statusMessage.innerText = "URL Pasted OK";
            statusMessage.style.color = "#FFFFFF";
            
            setTimeout(() => {
                if (statusMessage.innerText === "URL Pasted.") {
                    statusMessage.innerText = "";
                }
            }, 2000);
        }
    } catch (err) {
        console.error("URL Pasted KO: ", err);
        alert("To use this button, please allow clipboard access in your browser settings.");
    }
});

// Convert
convertBtn.addEventListener('click', () => {
    const url = urlInput.value.trim();
    
    if (!url) {
        alert("Please paste a YouTube URL first.");
        return;
    }

    statusMessage.innerText = "Your file is downloading...";
    statusMessage.style.color = "#FFFFFF";
    
    hiddenUrl.value = url;
    hiddenForm.submit();

    setTimeout(() => {
        statusMessage.innerText = "File downloaded successfully.";
        statusMessage.style.color = "#FFFFFF";
        urlInput.value = "";
        
        setTimeout(() => {
            statusMessage.innerText = "";
        }, 5000);
    }, 5000); 
});