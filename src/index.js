const tweetInput = document.getElementById("tweet-input");
const button = document.getElementById("send-tweet");
const tweetArr = [];

button.addEventListener('click', (e) => {
    e.preventDefault();
    postTweet(tweetInput.value)
})

function postTweet(tweet) {
    tweet = {
        id: Date.now(),
        date: new Date().toLocaleString('pt-BR'),
        text: tweet.replace(/\n/g, "<br>"),
    }

    tweetArr.push(tweet);

    localStorage.setItem("myTweets", JSON.stringify(tweetArr));

    const template = `
        <div class="tweet-id" id=${tweet.id}>
          <p><strong>${tweet.id}</strong>@usuario</p><br>
          <p>${tweet.text}</p><br>
          <p>${tweet.date}</p>
          <p id="link${tweet.id}">Excluir</p>
        </div>
    `
    document.getElementById("tweets").innerHTML += template

}

const link = document.getElementById("link")
console.log(link)

function showTweets() {
    JSON.parse(localStorage.getItem("myTweets")).forEach(item => {
        document.getElementById("tweets").innerHTML += `
        <div class="tweet-id" id=${item.id}>
        <p><strong>${item.id}</strong>@usuario</p><br>
        <p>${item.text}</p><br>
        <p>${item.date}</p>
        <p id="link${item.id}">Excluir</p>
      </div>
        `
    })
}

window.onload = showTweets;

