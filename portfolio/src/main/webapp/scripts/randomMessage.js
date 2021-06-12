const element = document.getElementById("random-message-btn")
element.addEventListener("click", randomizeMessage, false);

async function randomizeMessage() {
  const responseFromServer = await fetch('/randomMessage');
  const messagesJSON = await responseFromServer.json();

    msgArrIndex = Math.floor(Math.random()*messagesJSON.length)
   const msgContainer = document.getElementById('random-message-txt');

   msgContainer.innerText = messagesJSON[msgArrIndex];
}





