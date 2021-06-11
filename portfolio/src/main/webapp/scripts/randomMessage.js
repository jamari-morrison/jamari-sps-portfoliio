async function randomizeMessage() {
    console.log("wokrking")
  const responseFromServer = await fetch('/randomMessage');
  const textFromResponse = await responseFromServer.text();

  const msgContainer = document.getElementById('randomMessageTxt');
  msgContainer.innerText = textFromResponse;
}
