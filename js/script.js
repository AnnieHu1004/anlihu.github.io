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