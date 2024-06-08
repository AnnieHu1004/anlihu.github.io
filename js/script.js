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