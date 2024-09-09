// Fetch news data from News API
const apiKey = 'YOUR_NEWS_API_KEY';  // Replace with your News API key
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        displayNews(data.articles);  // News API returns data in 'articles' array
    });

function displayNews(newsData) {
    const newsList = document.getElementById('newsList');
    newsList.innerHTML = '';  // Clear existing content

    // Loop through each article and display it
    newsData.forEach(news => {
        let newsItem = `
            <div>
                <h2>${news.title}</h2>
                <p>By ${news.author || 'Unknown'}</p>
                <p>${news.description}</p>
                <img src="${news.urlToImage}" alt="${news.title}" width="200">
                <p><a href="${news.url}" target="_blank">Read More</a></p>
            </div>
        `;
        newsList.innerHTML += newsItem;
    });
}

// Form validation
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Stop form from submitting normally
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    if (username && email) {
        alert('Sign-up successful!');
    }
});
