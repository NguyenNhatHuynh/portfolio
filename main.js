const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("nav .container ul");
const themeToggleBtn = document.querySelector("#theme-toggle");
const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector(".material-icons-sharp") : null;
const themeStorageKey = "theme";

const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(themeStorageKey, theme);

    if (themeIcon) {
        themeIcon.textContent = theme === "dark" ? "light_mode" : "dark_mode";
    }

    if (themeToggleBtn) {
        themeToggleBtn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    }
};

if (themeToggleBtn) {
    const initialTheme = document.documentElement.getAttribute("data-theme") || "light";
    applyTheme(initialTheme);

    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
        applyTheme(currentTheme === "dark" ? "light" : "dark");
    });
}

const handleMenuToggle = () => {
    if (!menu || !menuBtn || !closeBtn) return;

    if (window.innerWidth <= 768) {
        menu.classList.toggle("active");
        const isOpen = menu.classList.contains("active");
        menuBtn.style.display = isOpen ? "none" : "inline-flex";
        closeBtn.style.display = isOpen ? "inline-flex" : "none";
    }
};

if (menuBtn && closeBtn && menu) {
    menuBtn.addEventListener("click", handleMenuToggle);
    closeBtn.addEventListener("click", handleMenuToggle);

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            menu.classList.remove("active");
            menuBtn.style.display = "";
            closeBtn.style.display = "";
        }
    });
}

const navItems = menu ? menu.querySelectorAll("li") : [];

const changeActiveItem = (link) => {
    navItems.forEach((item) => {
        const currentLink = item.querySelector("a");
        if (currentLink) currentLink.classList.remove("active");
    });

    if (link) link.classList.add("active");
};

navItems.forEach((item) => {
    const link = item.querySelector("a");
    if (link) {
        link.addEventListener("click", () => changeActiveItem(link));
    }
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (nav) {
        nav.classList.toggle("show-box-shadow", window.scrollY > 0);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const projectsData = [
        {
            id: 1,
            category: "web",
            title: "Fullstack Blog Website",
            detail: "Ứng dụng web cho phép người dùng đăng ký, đăng nhập và quản lý blog cá nhân.",
            description: "(PHP, MySQL, JavaScript)",
            image: "./images/projects/fullstack-blog/banner.jpg",
            github: { label: "GitHub Private", url: null },
            livedemo: { label: "Live Demo", url: null },
            watch: { label: "Video Demo", url: "https://www.youtube.com/watch?v=wPUVV15Sb0I&list=PL2MC9XP17b4eUtCxEcZZiEqK3BGZ8T8dU" },
        },
        {
            id: 2,
            category: "web",
            title: "Design Website E-Commerce Fashion",
            detail: "Website thương mại điện tử thời trang với trải nghiệm mua sắm trực tuyến mượt mà.",
            description: "(React, Node.js, MongoDB)",
            image: "./images/projects/ecommerce-fashion/banner.jpg",
            github: { label: "GitHub Private", url: null },
            livedemo: { label: "Live Demo", url: "https://web-e-commerce-fashion.vercel.app/" },
            watch: { label: "Video Demo", url: "https://www.youtube.com/watch?v=Ip5GkdkCdXo&list=PL2MC9XP17b4c4LZydndC89KZKidPY5F-X" },
        },
        {
            id: 3,
            category: "web",
            title: "Web Travel",
            detail: "Website du lịch cho phép giới thiệu, quản lý và trải nghiệm các tour / hành trình.",
            description: "(PHP, SQL Server)",
            image: "./images/projects/web-travel/banner.jpg",
            github: { label: "GitHub", url: "https://github.com/NguyenNhatHuynh/Web_Travel.git" },
            livedemo: { label: "Live Demo", url: "https://webtravel-production.up.railway.app/" },
            watch: { label: "Video Demo", url: "https://www.youtube.com/watch?v=tYoQE_VB6Hw&list=PL2MC9XP17b4cBQzjv00fnB7X6pQYQhJ16" },
        },
        {
            id: 4,
            category: "mobile",
            title: "App Weather WeatherWave",
            detail: "Ứng dụng thời tiết Flutter với giao diện trực quan và cập nhật dữ liệu theo API.",
            description: "(Flutter, Dart)",
            image: "./images/projects/weather-wave/banner.png",
            github: { label: "GitHub", url: "https://github.com/NguyenNhatHuynh/Weather-App-RestAPI.git" },
            livedemo: { label: "Live Demo", url: null },
            watch: { label: "Video Demo", url: "https://www.youtube.com/watch?v=PBh3lJZyXfU&list=PL2MC9XP17b4fVes2YB_Rr6id6URdnar-I" },
        },
        {
            id: 5,
            category: "mobile",
            title: "Giao Diện App Bán Giày",
            detail: "Giao diện mua sắm giày với bố cục hiện đại, tối ưu cho trải nghiệm mobile.",
            description: "(React Native)",
            image: "./images/projects/shoes-nikexd/banner.jpg",
            github: { label: "GitHub", url: "https://github.com/NguyenNhatHuynh/app-shoes-nikeXD.git" },
            livedemo: { label: "Live Demo", url: null },
            watch: { label: "Video Demo", url: "https://www.youtube.com/watch?v=yYwRrmmWyFQ&list=PL2MC9XP17b4fVes2YB_Rr6id6URdnar-I&index=2" },
        },
        {
            id: 6,
            category: "mobile",
            title: "UniScore App",
            detail: "Ứng dụng tra cứu điểm và quản lý thông tin học tập.",
            description: "(Flutter, Dart, Shared Preferences)",
            image: "./images/projects/uniscore/banner.png",
            github: { label: "GitHub", url: "https://github.com/NguyenNhatHuynh/UniScore.git" },
            livedemo: { label: "Live Demo", url: null },
            watch: { label: "Video Demo", url: "https://youtu.be/QbQNyC2kZbE?si=UHIbe6roAxR15kIp" },
        },
        {
            id: 7,
            category: "mobile",
            title: "Time Tracker App",
            detail: "Ứng dụng theo dõi thời gian làm việc và quản lý thói quen.",
            description: "(Flutter, Dart)",
            image: "./images/projects/time-tracker/banner.jpg",
            github: { label: "GitHub", url: "https://github.com/NguyenNhatHuynh/Time-Tracker-App.git" },
            livedemo: { label: "Live Demo", url: null },
            watch: { label: "Video Demo", url: "https://youtu.be/NDD69b67IQI?si=lilHvg7dX3zl6uxr" },
        },
        {
            id: 8,
            category: "mobile",
            title: "Finance-XD App",
            detail: "Ứng dụng quản lý chi tiêu cá nhân với giao diện Flutter.",
            description: "(Flutter, Dart)",
            image: "./images/projects/finance-xd/banner.png",
            github: { label: "GitHub", url: "https://github.com/NguyenNhatHuynh/Finance-XD-App.git" },
            livedemo: { label: "Live Demo", url: null },
            watch: { label: "Video Demo", url: "https://youtu.be/NPSsAKFSj2E" },
        },
        {
            id: 9,
            category: "web",
            title: "RemoveBGNow",
            detail: "A fullstack AI background remover for images and GIFs with analytics and admin tools.",
            description: "(Next.js, FastAPI, rembg, Supabase, Tailwind CSS)",
            image: "./images/projects/removebgnow/banner.png",
            github: { label: "GitHub Private", url: null },
            livedemo: { label: "Live Demo", url: "https://remove-bg-nowxd.vercel.app" },
            watch: { label: "Video Demo", url: "https://www.youtube.com/watch?v=w6zZJ_-byOk" },
        },
        {
            id: 10,
            category: "web",
            title: "Online Voting System Using Blockchain",
            detail: "Hệ thống bầu cử trực tuyến với blockchain, OTP, MetaMask và MySQL.",
            description: "(Blockchain, Solidity, Node.js/Express, MySQL)",
            image: "./images/projects/online-voting-system-using-blockchain/banner.png",
            github: { label: "GitHub Private", url: null },
            livedemo: { label: "Live Demo", url: null },
            watch: { label: "Video Demo", url: "https://www.youtube.com/watch?v=eNCi5TuCu_w&t=24s" },
        },
        {
            id: 11,
            category: "mobile",
            title: "Voice Camera Pro",
            detail: "Ứng dụng di động chụp ảnh hoặc quay video bằng lệnh giọng nói.",
            description: "(Mobile App)",
            image: "./images/projects/voice-camera-pro/banner.png",
            github: { label: "GitHub Private", url: null },
            livedemo: { label: "Live Demo", url: null },
            watch: { label: "Video Demo", url: "https://www.youtube.com/watch?v=sVcAIhVC4PM" },
        },
        {
            id: 12,
            category: "mobile",
            title: "Plant Recognition App",
            detail: "Flutter app nhận diện cây từ ảnh, lưu lịch sử quét và đồng bộ dữ liệu qua Supabase.",
            description: "(Flutter, SQLite, Supabase, Gemini)",
            image: "./images/projects/plant-recognition-app/banner.png",
            github: { label: "GitHub Private", url: null },
            livedemo: { label: "Live Demo", url: null },
            watch: { label: "Video Demo", url: null },
        },
    ];

    const projectsContainer = document.querySelector(".projects");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const prevPageBtn = document.querySelector(".prev-page");
    const nextPageBtn = document.querySelector(".next-page");
    const readMoreBtn = document.querySelector(".read-more");
    const readMoreContent = document.querySelector(".read-more-content");
    const contactForm = document.querySelector("section.contact form");
    const formStatus = document.querySelector(".form-status");
    const submitButton = document.querySelector(".form-submit-btn");

    if (!projectsContainer || !prevPageBtn || !nextPageBtn || filterButtons.length === 0) {
        return;
    }

    let currentPage = 1;
    const projectsPerPage = 6;
    let currentFilter = "all";

    const updatePaginationButtons = (totalProjects) => {
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage * projectsPerPage >= totalProjects;
    };

    const renderAction = ({ label, url }) => {
        if (!url) {
            return `<span class="action-chip is-disabled">${label}</span>`;
        }

        return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="action-chip">${label}</a>`;
    };

    const renderProjects = (filter) => {
        projectsContainer.innerHTML = "";

        const filteredProjects = (filter === "all" ? projectsData : projectsData.filter((project) => project.category === filter))
            .slice()
            .sort((left, right) => right.id - left.id);

        const start = (currentPage - 1) * projectsPerPage;
        const end = start + projectsPerPage;
        const paginatedProjects = filteredProjects.slice(start, end);

        if (paginatedProjects.length === 0) {
            projectsContainer.innerHTML = "<p>No projects found for this category.</p>";
        }

        const fragment = document.createDocumentFragment();

        paginatedProjects.forEach((project) => {
            const projectElement = document.createElement("div");
            projectElement.classList.add("project", "active");
            projectElement.innerHTML = `
                <div class="thumbnail">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <h3>${project.title}</h3>
                <p>${project.detail}</p>
                <p>${project.description}</p>
                <div class="action">
                    ${renderAction(project.github)}
                    ${renderAction(project.livedemo)}
                    ${renderAction(project.watch)}
                </div>
            `;
            fragment.appendChild(projectElement);
        });

        projectsContainer.replaceChildren(fragment);

        requestAnimationFrame(() => {
            projectsContainer.querySelectorAll(".project").forEach((project, index) => {
                project.style.transitionDelay = `${index * 35}ms`;
                project.classList.add("is-visible");
            });
        });

        updatePaginationButtons(filteredProjects.length);
    };

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            currentFilter = button.getAttribute("data-filter");
            currentPage = 1;
            renderProjects(currentFilter);
        });
    });

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

    renderProjects(currentFilter);

    if (readMoreBtn && readMoreContent) {
        readMoreBtn.addEventListener("click", () => {
            const isHidden = readMoreContent.style.display === "none";
            readMoreContent.style.display = isHidden ? "block" : "none";
            readMoreBtn.textContent = isHidden ? "Show less" : "Show more";
        });
    }

    if (contactForm && formStatus && submitButton) {
        const defaultSubmitLabel = submitButton.textContent;
        let formStatusTimer = null;
        const toastIcon = formStatus.querySelector(".toast-icon");
        const toastText = formStatus.querySelector(".toast-text");

        const showFormStatus = (message, statusClass) => {
            clearTimeout(formStatusTimer);
            if (toastText) {
                toastText.textContent = message;
            } else {
                formStatus.textContent = message;
            }

            if (toastIcon) {
                toastIcon.textContent = statusClass === "is-success" ? "check_circle" : "error";
            }

            formStatus.className = `form-status is-visible ${statusClass}`;
            formStatusTimer = window.setTimeout(() => {
                formStatus.className = "form-status";
                if (toastText) {
                    toastText.textContent = "";
                } else {
                    formStatus.textContent = "";
                }
            }, 4500);
        };

        contactForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            clearTimeout(formStatusTimer);
            formStatus.className = "form-status";
            if (toastText) {
                toastText.textContent = "";
            } else {
                formStatus.textContent = "";
            }
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";
            submitButton.classList.add("is-loading");

            try {
                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    body: new FormData(contactForm),
                    headers: {
                        Accept: "application/json",
                    },
                });

                if (response.ok) {
                    contactForm.reset();
                    showFormStatus("Thanks, your message has been sent successfully.", "is-success");
                } else {
                    const payload = await response.json().catch(() => null);
                    const message =
                        payload?.errors?.[0]?.message || "Something went wrong. Please try again in a moment.";
                    showFormStatus(message, "is-error");
                }
            } catch (error) {
                showFormStatus("Unable to send the message right now. Please try again later.", "is-error");
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = defaultSubmitLabel;
                submitButton.classList.remove("is-loading");
            }
        });
    }
});
