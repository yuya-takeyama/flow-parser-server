const app = () => {
  const inputElem = document.querySelector('textarea#input');
  const outputElem = document.querySelector('.output-col pre code');
  inputElem.addEventListener('change', () => {
    fetch('/parse', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        body: inputElem.value,
      }),
    }).then(res => res.json())
    .then(json => {
      console.log(json);
      outputElem.textContent = JSON.stringify(json, null, 2);
    }).catch(err => {
      console.error(err);
    });
  });
};

if (document.readyState !== 'loading') {
  app();
} else {
  document.addEventListener('DOMContentLoaded', app)
}
