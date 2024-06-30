// ==========================================
// == Function to fetch and update content ==
function fetchAndSetContent(content, container) {
    fetch(content)
        .then((response) => response.text())
        .then((html) => {
            document.querySelector('.body-container').innerHTML = html;
        })
        .catch((error) => {
            console.error('Error fetching content:', error);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    const loadContent = (url, elementId) => {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                document.getElementById(elementId).innerHTML = html;
            })
            .catch(error => console.error(`Error loading ${url}:`, error));
    };

    // load nav and footer for project
    loadContent('nav.html', 'content-navigation-container');
    loadContent('footer.html', 'content-footer-container');
    // load nav and footer for index
    loadContent('content/nav.html', 'navigation-container');
    loadContent('content/footer.html', 'footer-container');
});


// ==========================================
// ===== Function for back-to-top button ====
var mybutton = document.getElementById("backToTopBtn");
var footer = document.querySelector(".footer");

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        mybutton.style.bottom = (footer.offsetHeight + 10) + "px";
    } else {
        mybutton.style.bottom = footer.offsetHeight + "px";
    }
}
// Run scrollFunction on page load to set the initial state
scrollFunction();

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}


// ================================================
// ===== Function for edit recommendation card ====

async function fetchArticlesData() {
    try {
        const response = await fetch('../js/articlesData.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching articles data:', error);
    }
}

function updateBadges(badges) {
    const badgesContainer = document.querySelector('.recommendationCard .project-badges');
    badgesContainer.innerHTML = ''; // Clear any existing badges
    badges.forEach(badge => {
        const badgeElement = document.createElement('span');
        badgeElement.className = 'badge badge-primary';
        badgeElement.textContent = badge;
        badgesContainer.appendChild(badgeElement);
    });
}

async function updateCard(articleId) {
    const articlesData = await fetchArticlesData();
    if (articlesData && articlesData[articleId]) {
        const article = articlesData[articleId];
        document.querySelector('.recommendationCard img').src = article.img;
        document.querySelector('.recommendationCard .card-title').textContent = article.title;
        document.querySelector('.recommendationCard .card-text').textContent = article.overview;
        document.querySelector('.recommendationCard .stretched-link').href = article.link;
        updateBadges(article.badges);
    }
}