
document.addEventListener("DOMContentLoaded", function () {

    // Load Navbar
    fetch("/Components/navbar.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Navbar loading failed");
            }
            return response.text();
        })
        .then(data => {

            document.getElementById("navbar-container").innerHTML = data;

            // Highlight active navigation link
            const currentPage = window.location.pathname;

            document.querySelectorAll("#navbar-container .nav-link")
                .forEach(link => {

                    const linkPath = new URL(
                        link.href,
                        window.location.origin
                    ).pathname;

                    if (linkPath === currentPage) {
                        link.classList.add("active");
                    }

                });

        })
        .catch(error => console.error(error));


    // Load Footer
    fetch("/Components/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Footer loading failed");
            }
            return response.text();
        })
        .then(data => {

            document.getElementById("footer-container").innerHTML = data;

            // Dynamic Copyright Year
            document.getElementById("currentYear").textContent =
                new Date().getFullYear();

        })
        .catch(error => console.error(error));

});
