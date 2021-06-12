const element = document.getElementById("random-message-btn")
element.addEventListener("click", randomizeMessage, false);

async function randomizeMessage() {
  const responseFromServer = await fetch('/randomMessage');
  const textFromResponse = await responseFromServer.text();

  const msgContainer = document.getElementById('random-message-txt');
  msgContainer.innerText = textFromResponse;
}





