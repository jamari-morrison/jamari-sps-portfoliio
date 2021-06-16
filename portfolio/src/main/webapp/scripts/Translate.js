document.getElementById('translate-submit-btn').addEventListener("click", requestTranslation);
      
      
      function requestTranslation() {
        const text = document.getElementById('text-to-translate').value;
        const direction = document.getElementById('select-language').value;

        const resultContainer = document.getElementById('translated-text');
        resultContainer.innerText = 'Loading...';

        const params = new URLSearchParams();
        params.append('text', text);
        params.append('direction', direction);

        fetch('/translate', {
          method: 'POST',
          body: params
        }).then(response => response.text())
        .then((translatedMessage) => {
          resultContainer.innerText = translatedMessage;
        });
      }