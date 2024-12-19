// Swiper js (testimonation)
const swiper = new Swiper('.swiper', {
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("nav .container ul");

// show menu
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})

// hide menu
closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})




const navItems = menu.querySelectorAll('li');

const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
}


navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        changeActiveItem();
        link.classList.add('active');
    })
})

// read more about
const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () => {
    readMoreContent.classList.toggle('show-content');

    if (readMoreContent.classList.contains('show-content')) {
        readMoreBtn.textContent = "Show less";
    } else {
        readMoreBtn.textContent = "Show more";
    }
})


// show/hide skills items
const skillItems = document.querySelectorAll('section.skills .skill');

skillItems.forEach(skill => {
    skill.querySelector('.head').addEventListener('click', () => {
        skill.querySelector('.items').classList.toggle('show-items');
    })
})


// ADD box shadow on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY > 0);
})







/// 
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggleBtn.querySelector('.material-icons-sharp');

// Kiểm tra xem Dark Mode đã được lưu trong Local Storage hay chưa
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    icon.textContent = 'light_mode';
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Cập nhật biểu tượng và lưu trạng thái vào Local Storage
    if (body.classList.contains('dark-mode')) {
        icon.textContent = 'light_mode';
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        icon.textContent = 'dark_mode';
        localStorage.setItem('dark-mode', 'disabled');
    }
});









document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');

    // Mặc định hiển thị tất cả các dự án khi trang tải
    const showAllProjects = () => {
        projects.forEach(project => {
            project.style.display = 'block';
        });
    };

    // Lọc dự án khi nhấn nút
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Xóa lớp 'active' khỏi tất cả các nút
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Lấy giá trị filter từ data-filter
            const filter = button.getAttribute('data-filter');

            // Hiển thị các dự án theo thể loại được chọn
            projects.forEach(project => {
                const category = project.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });

    // Mặc định hiển thị tất cả khi tải trang
    showAllProjects();

    // Đảm bảo các phần tử menu chỉ hiển thị khi có trong HTML
    const menuBtn = document.querySelector("#menu-btn");
    const closeBtn = document.querySelector("#close-btn");
    const menu = document.querySelector("nav .container ul");

    if (menuBtn && closeBtn && menu) {
        // Show menu
        menuBtn.addEventListener('click', () => {
            menu.style.display = 'block';
            menuBtn.style.display = 'none';
            closeBtn.style.display = 'inline-block';
        });

        // Hide menu
        closeBtn.addEventListener('click', () => {
            menu.style.display = 'none';
            menuBtn.style.display = 'inline-block';
            closeBtn.style.display = 'none';
        });
    }

    const navItems = menu ? menu.querySelectorAll('li') : [];

    const changeActiveItem = () => {
        navItems.forEach(item => {
            const link = item.querySelector('a');
            link.classList.remove('active');
        });
    };

    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.addEventListener('click', () => {
            changeActiveItem();
            link.classList.add('active');
        });
    });
});
