/* =========================================================
   TASTEIFY 2026 — INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    const backToTop = document.getElementById("backToTop");
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    if (hamburger && navLinks) {

        hamburger.addEventListener("click", () => {

            const isOpen = navLinks.classList.toggle("show");

            /* Hamburger active state */
            hamburger.classList.toggle("active", isOpen);

            /* Accessibility */
            hamburger.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            hamburger.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

            /* Change icon */
            const icon = hamburger.querySelector("i");

            if (icon) {

                icon.classList.toggle("fa-bars", !isOpen);
                icon.classList.toggle("fa-xmark", isOpen);

            }
        });


        /* =================================================
           CLOSE MENU WHEN CLICKING A LINK
        ================================================= */

        navLinks.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("show");

                hamburger.classList.remove("active");

                hamburger.setAttribute(
                    "aria-expanded",
                    "false"
                );

                hamburger.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                const icon = hamburger.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                }
            });

        });


        /* =================================================
           CLOSE MENU WITH ESCAPE
        ================================================= */

        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {

                navLinks.classList.remove("show");

                hamburger.classList.remove("active");

                hamburger.setAttribute(
                    "aria-expanded",
                    "false"
                );

                hamburger.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                const icon = hamburger.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                }
            }

        });


        /* =================================================
           CLOSE MENU WHEN CLICKING OUTSIDE
        ================================================= */

        document.addEventListener("click", (event) => {

            const clickedInsideNavbar =
                navbar && navbar.contains(event.target);

            if (!clickedInsideNavbar) {

                navLinks.classList.remove("show");

                hamburger.classList.remove("active");

                hamburger.setAttribute(
                    "aria-expanded",
                    "false"
                );

                hamburger.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

                const icon = hamburger.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                }
            }

        });

    }


    /* =====================================================
       NAVBAR SCROLL
    ===================================================== */

    const handleScroll = () => {

        const scrollY = window.scrollY;

        /* Navbar */
        if (navbar) {

            if (scrollY > 50) {

                navbar.classList.add("scrolled");

            } else {

                navbar.classList.remove("scrolled");

            }

        }


        /* Back To Top */
        if (backToTop) {

            if (scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        }

    };


    window.addEventListener(
        "scroll",
        handleScroll,
        { passive: true }
    );

    handleScroll();


    /* =====================================================
       ACTIVE NAV LINK
    ===================================================== */

    const sections = document.querySelectorAll(
        "section[id], header[id]"
    );

    const links = document.querySelectorAll(
        "#nav-links a"
    );


    if (sections.length && links.length) {

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        const id =
                            entry.target.getAttribute("id");

                        links.forEach((link) => {

                            link.classList.remove("active");

                            if (
                                link.getAttribute("href") ===
                                `#${id}`
                            ) {

                                link.classList.add("active");

                            }

                        });

                    }

                });

            },
            {
                threshold: 0.3,

                rootMargin:
                    "-70px 0px -25% 0px"
            }
        );


        sections.forEach((section) => {

            observer.observe(section);

        });

    }


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const nameInput =
                    document.getElementById("name");

                const emailInput =
                    document.getElementById("email");

                const dateInput =
                    document.getElementById("date");


                const name =
                    nameInput
                        ? nameInput.value.trim()
                        : "";

                const email =
                    emailInput
                        ? emailInput.value.trim()
                        : "";

                const date =
                    dateInput
                        ? dateInput.value
                        : "";


                /* =================================================
                   VALIDATION
                ================================================= */

                if (!name || !email || !date) {

                    if (formMessage) {

                        formMessage.textContent =
                            "Please complete the required fields.";

                        formMessage.style.color =
                            "#ff7b7b";

                    }

                    return;
                }


                /* =================================================
                   SUCCESS
                ================================================= */

                if (formMessage) {

                    formMessage.textContent =
                        `Thank you, ${name}! Your reservation request has been received.`;

                    formMessage.style.color =
                        "#76d39a";

                }


                contactForm.reset();


                /* Clear message */
                setTimeout(() => {

                    if (formMessage) {

                        formMessage.textContent = "";

                    }

                }, 5000);

            }
        );

    }


    /* =====================================================
       SET MINIMUM DATE
    ===================================================== */

    const dateInput =
        document.getElementById("date");


    if (dateInput) {

        const today = new Date();

        const year =
            today.getFullYear();

        const month =
            String(
                today.getMonth() + 1
            ).padStart(2, "0");

        const day =
            String(
                today.getDate()
            ).padStart(2, "0");


        dateInput.min =
            `${year}-${month}-${day}`;

    }


    /* =====================================================
       GALLERY EFFECT
    ===================================================== */

    const galleryItems =
        document.querySelectorAll(
            ".gallery-item"
        );


    galleryItems.forEach((item) => {

        item.addEventListener("click", () => {

            const image =
                item.querySelector("img");


            if (image && image.src) {

                window.open(
                    image.src,
                    "_blank",
                    "noopener,noreferrer"
                );

            }

        });

    });


    /* =====================================================
       CLOSE MOBILE MENU ON RESIZE
    ===================================================== */

    window.addEventListener("resize", () => {

        if (
            window.innerWidth > 900 &&
            hamburger &&
            navLinks
        ) {

            navLinks.classList.remove("show");

            hamburger.classList.remove("active");

            hamburger.setAttribute(
                "aria-expanded",
                "false"
            );

            hamburger.setAttribute(
                "aria-label",
                "Open navigation menu"
            );


            const icon =
                hamburger.querySelector("i");


            if (icon) {

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }

    });

});