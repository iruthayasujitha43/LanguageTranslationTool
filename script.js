document.getElementById("translateButton").addEventListener("click", async function () {

    const inputText = document.getElementById("inputText").value;
    const sourceLanguage = document.getElementById("sourceLanguage").value;
    const targetLanguage = document.getElementById("targetLanguage").value;

    if (inputText.trim() === "") {
        alert("Please enter some text.");
        return;
    }

    const output = document.getElementById("outputText");

    output.innerText = "Translating...";

    try {

        const url =
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${sourceLanguage}|${targetLanguage}`;

        const response = await fetch(url);

        const data = await response.json();

        if (data.responseStatus === 200) {
            output.innerText = data.responseData.translatedText;
        } else {
            output.innerText = "Translation failed. Please try again.";
        }

    } catch (error) {

        console.error(error);
        output.innerText = "Error connecting to translation API.";

    }

});