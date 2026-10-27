
document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".mobile-menu-toggle");
    const navigation = document.querySelector(".nav-links");
    const servicesDropdown = document.querySelector(".nav-dropdown");
    const servicesLink = document.querySelector(".dropdown-trigger");

    if (!menuButton || !navigation) return;

    // Open and close the mobile menu
    menuButton.addEventListener("click", function () {

        const isOpen = navigation.classList.toggle("is-open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        if (!isOpen && servicesDropdown) {
            servicesDropdown.classList.remove("submenu-open");
        }

    });

    // Open and close the Services dropdown on mobile
    if (servicesDropdown && servicesLink) {

        servicesLink.addEventListener("click", function (event) {

            if (window.matchMedia("(max-width: 900px)").matches) {

                event.preventDefault();

                servicesDropdown.classList.toggle("submenu-open");

            }

        });

    }

    // Reset the mobile menu when returning to desktop
    window.addEventListener("resize", function () {

        if (window.innerWidth > 900) {

            navigation.classList.remove("is-open");

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            if (servicesDropdown) {
                servicesDropdown.classList.remove("submenu-open");
            }

        }

    });

});
