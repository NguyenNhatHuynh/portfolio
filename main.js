// Swiper JS Initialization (testimonials)
const swiper = new Swiper('.swiper', {
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    // Additional swiper settings for responsiveness (optional)
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

// Menu Toggle
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("nav .container ul");

if (menuBtn && closeBtn && menu) {
    menuBtn.addEventListener('click', () => {
        menu.classList.add('active');
        menuBtn.style.display = 'none';
        closeBtn.style.display = 'inline-block';
    });

    closeBtn.addEventListener('click', () => {
        menu.classList.remove('active');
        menuBtn.style.display = 'inline-block';
        closeBtn.style.display = 'none';
    });
}

// Active Menu Item
const navItems = menu ? menu.querySelectorAll('li') : [];

const changeActiveItem = (link) => {
    navItems.forEach(item => {
        const currentLink = item.querySelector('a');
        if (currentLink) currentLink.classList.remove('active');
    });
    if (link) link.classList.add('active');
};

navItems.forEach(item => {
    const link = item.querySelector('a');
    if (link) {
        link.addEventListener('click', () => changeActiveItem(link));
    }
});

// Portfolio Filtering
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');

    if (filterButtons.length > 0 && projects.length > 0) {
        const showAllProjects = () => {
            projects.forEach(project => project.classList.add('active'));
        };

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.getAttribute('data-filter');

                projects.forEach(project => {
                    const category = project.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        project.classList.add('active');
                    } else {
                        project.classList.remove('active');
                    }
                });
            });
        });

        showAllProjects(); // Show all projects by default
    }
});

// Add box shadow on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.classList.toggle('show-box-shadow', window.scrollY > 0);
    }
});

// Dark Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggleBtn ? themeToggleBtn.querySelector('.material-icons-sharp') : null;

if (themeToggleBtn && icon) {
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        icon.textContent = 'light_mode';
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            icon.textContent = 'light_mode';
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            icon.textContent = 'dark_mode';
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
}












document.addEventListener("DOMContentLoaded", () => {
    const projectsData = [
        { id: 1, category: "web", title: "Fullstack Blog Website", description: "(PHP, MySQL, JavaScript)", image: "./images/work1.jpg", github: "", livedemo: "", watch: "https://www.youtube.com/watch?v=wPUVV15Sb0I&list=PL2MC9XP17b4eUtCxEcZZiEqK3BGZ8T8dU" },
        { id: 2, category: "web", title: "Design Website E-Commerce Fashion", description: "(React, Node.js, MongoDB)", image: "./images/work2.jpg", github: "", livedemo: "", watch: "https://www.youtube.com/watch?v=Ip5GkdkCdXo&list=PL2MC9XP17b4c4LZydndC89KZKidPY5F-X" },
        { id: 3, category: "web", title: "Web Travel", description: "(PHP, SQL Server)", image: "./images/work3.jpg", github: "", livedemo: "", livedemo: "https://www.youtube.com/watch?v=tYoQE_VB6Hw&list=PL2MC9XP17b4cBQzjv00fnB7X6pQYQhJ16" },
        { id: 4, category: "app", title: "App Weather WeatherWave", description: "(Flutter, Dart)", image: "./images/app_weather.png", github: "", livedemo: "", watch: "https://www.youtube.com/watch?v=PBh3lJZyXfU&list=PL2MC9XP17b4fVes2YB_Rr6id6URdnar-I" },
        { id: 5, category: "app", title: "Giao Diện App Bán Giày", description: "(React Native)", image: "./images/app_CURRENTCRAZE.jpg", github: "", livedemo: "", watch: "https://www.youtube.com/watch?v=yYwRrmmWyFQ&list=PL2MC9XP17b4fVes2YB_Rr6id6URdnar-I&index=2" },
        { id: 6, category: "app", title: "Finance App", description: "(Flutter, Dart)", image: "./images/app_finance.png", github: "", livedemo: "", watch: "#" },
    ];

    const projectsContainer = document.querySelector(".projects");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const prevPageBtn = document.querySelector(".prev-page");
    const nextPageBtn = document.querySelector(".next-page");

    let currentPage = 1;
    const projectsPerPage = 4;
    let currentFilter = "all";

    // Render projects
    const renderProjects = (filter) => {
        projectsContainer.innerHTML = "";

        const filteredProjects = filter === "all"
            ? projectsData
            : projectsData.filter(project => project.category === filter);

        const start = (currentPage - 1) * projectsPerPage;
        const end = start + projectsPerPage;

        const paginatedProjects = filteredProjects.slice(start, end);

        if (paginatedProjects.length === 0) {
            projectsContainer.innerHTML = "<p>No projects found for this category.</p>";
        }

        paginatedProjects.forEach(project => {
            const projectElement = document.createElement("div");
            projectElement.classList.add("project", "active");
            projectElement.innerHTML = `
                <div class="thumbnail">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                 <div class="action">
                        <a href="${github}" target="blank">Github</a>
                        <a href="${livedemo}" target="blank">Live Demo</a>
                        <a href="${watch}" target="blank">Xem Video</a>
                </div>
            `;
            projectsContainer.appendChild(projectElement);
        });

        updatePaginationButtons(filteredProjects.length);
    };

    // Update pagination buttons
    const updatePaginationButtons = (totalProjects) => {
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage * projectsPerPage >= totalProjects;
    };

    // Handle filter buttons
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            currentFilter = button.getAttribute("data-filter");
            currentPage = 1; // Reset to the first page when changing filters
            renderProjects(currentFilter);
        });
    });

    // Handle pagination
    prevPageBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderProjects(currentFilter);
        }
    });

    nextPageBtn.addEventListener("click", () => {
        currentPage++;
        renderProjects(currentFilter);
    });

    // Initial render
    renderProjects(currentFilter);
});
