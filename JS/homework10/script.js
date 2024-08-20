const newsData = JSON.parse(newsRawData);

function createNewsCard(news) {
  const card = document.createElement("article");
  card.classList.add("news");
  card.innerHTML = `
      <h2 class="news__title"></h2>
      <p class="news__datetime-publiched">Опубликовано: <time datetime=""></time></p>
      <p class="news__origin">Источник: <cite></cite></p>
      <img class="news__image" src="" alt="news image"/>
      <p class="news__summary"></p>
      <a class="news__link" href="" target="_blank">Читать ...</a>
    `;

  card.querySelector(".news__title").textContent = news.title;
  card.querySelector(".news__origin cite").textContent = news.news_site;
  card.querySelector(".news__image").src = news.image_url;
  card.querySelector(".news__summary").textContent = news.summary;
  card.querySelector(".news__link").href = news.url;

  const datetimePubliched = card.querySelector(
    ".news__datetime-publiched time"
  );
  datetimePubliched.setAttribute("datetime", news.published_at);
  const dt = new Date(Date.parse(news.published_at));
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    timezone: "UTC",
    hour: "numeric",
    minute: "numeric",
  };
  datetimePubliched.textContent = dt.toLocaleString("ru", options);

  return card;
}

const newsContent = document.querySelector(".news-content");

newsData.results.forEach((news) => {
  card = createNewsCard(news);
  newsContent.append(card);
});
