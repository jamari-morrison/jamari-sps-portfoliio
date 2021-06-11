
async function randomizeMessage() {
    console.log("wokrking")
  const responseFromServer = await fetch('/randomMessage');
  const textFromResponse = await responseFromServer.text();

  const msgContainer = document.getElementById('random-message-txt');
  msgContainer.innerText = textFromResponse;
}
