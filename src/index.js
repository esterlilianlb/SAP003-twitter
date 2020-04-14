let tweet = document.getElementById('tweet-input');
const button = document.getElementById('send-tweet');
const section = document.getElementById("tweets");
let key = Storage.key(index);

button.addEventListener('click', postTweet);

function postTweet(e) {
    e.preventDefault();
    
    //fazer um loop for numa constante? como printar tudo na tela?
    //olhar a pagina de storage.key no mdn

    localStorage.setItem(key, JSON.stringify(tweet.value));

    section.innerHTML += `
    <div>
      <p><strong>usuario</strong> @usuario</p>
      <p>${localStorage.getItem(tweet.value)}</p>
    </div>
    `
    tweet.value = '';
    button.disabled = true;
};

tweet.addEventListener('input', () => button.disabled = false);

function showTweets() {
    localStorage.getItem(
        Storage.key(   )
    )
}
showTweets();