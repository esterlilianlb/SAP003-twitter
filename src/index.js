let tweet = document.getElementById('tweet-input');
const button = document.getElementById('send-tweet');
const section = document.getElementById("tweets");

button.addEventListener('click', postTweet);

function postTweet(e, index) {
    e.preventDefault();

    JSON.stringify(localStorage.setItem(index, tweet.value));

    section.innerHTML += `
    <div>
      <p><strong>usuario</strong> @usuario</p>
      <p>${localStorage.getItem(index)}</p>
    </div>
    `
    tweet.value = '';
    button.disabled = true;
};

tweet.addEventListener('input', () => button.disabled = false);