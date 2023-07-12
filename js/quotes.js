const categories = [
  "age",
  "alone",
  "amazing",
  "anger",
  "architecture",
  "art",
  "attitude",
  "beauty",
  "best",
  "birthday",
  "business",
  "car",
  "change",
  "communications",
  "computers",
  "cool",
  "courage",
  "dad",
  "dating",
  "death",
  "design",
  "dreams",
  "education",
  "environmental",
  "equality",
  "experience",
  "failure",
  "faith",
  "family",
  "famous",
  "fear",
  "fitness",
  "food",
  "forgiveness",
  "freedom",
  "friendship",
  "funny",
  "future",
  "god",
  "good",
  "government",
  "graduation",
  "great",
  "happiness",
  "health",
  "history",
  "home",
  "hope",
  "humor",
  "imagination",
  "inspirational",
  "intelligence",
  "jealousy",
  "knowledge",
  "leadership",
  "learning",
  "legal",
  "life",
  "love",
  "marriage",
  "medical",
  "men",
  "mom",
  "money",
  "morning",
  "movies",
  "success",
];

function getQuote() {
  const category = categories[Math.floor(Math.random() * categories.length)];

  fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
    method: "GET",
    headers: { "X-Api-Key": "vVGvNLtmBrPPWnF3HxudUQ==wJjgZ9L5Et9UkcSe" },
    contentType: "application/json",
  })
    .then((response) => response.json())
    .then((result) => {
      const quote = document.querySelector("div#quote");
      const author = document.querySelector("div#author");

      quote.innerText = result[0].quote;
      author.innerText = result[0].author;
    });
}

getQuote();
setInterval(getQuote, 60000);
