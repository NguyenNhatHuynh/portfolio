// Swiper js (testimonation)
const swiper = new Swiper('.swiper', {
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});

// Menu toggle
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

// Active menu item
const navItems = menu ? menu.querySelectorAll('li') : [];

const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        if (link) link.classList.remove('active');
    });
};

navItems.forEach(item => {
    const link = item.querySelector('a');
    if (link) {
        link.addEventListener('click', () => {
            changeActiveItem();
            link.classList.add('active');
        });
    }
});

// Portfolio filtering
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');

    if (filterButtons.length > 0 && projects.length > 0) {
        // Hiển thị tất cả dự án mặc định
        const showAllProjects = () => {
            projects.forEach(project => project.classList.add('active'));
        };

        // Lọc dự án theo danh mục
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

        // Hiển thị tất cả dự án mặc định khi tải trang
        showAllProjects();
    }
});

// Add box shadow on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.classList.toggle('show-box-shadow', window.scrollY > 0);
    }
});

// Dark mode toggle
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
