// dashboard.js - Dashboard Logic

document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Toggle
    const sidebarToggle = document.querySelector('#sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth < 992 && 
            !sidebar.contains(e.target) && 
            !sidebarToggle.contains(e.target) && 
            sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });

    // Tab Switching Simulation
    const navLinks = document.querySelectorAll('.sidebar .nav-link');
    const sections = document.querySelectorAll('.dashboard-section');

    const showSection = (id) => {
        sections.forEach(section => {
            section.classList.add('d-none');
            section.classList.remove('active');
        });
        const targetSection = document.querySelector(id);
        if (targetSection) {
            targetSection.classList.remove('d-none');
            // Trigger animation
            setTimeout(() => targetSection.classList.add('active'), 50);
        }
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                showSection(link.getAttribute('href'));
            }
        });
    });

    // Handle initial load
    const initialHash = window.location.hash || (sections.length > 0 ? '#' + sections[0].id : null);
    if (initialHash) {
        showSection(initialHash);
        const activeLink = document.querySelector(`.sidebar .nav-link[href="${initialHash}"]`);
        if (activeLink) activeLink.classList.add('active');
    }

    // Dummy Chart Initialization (if using Chart.js)
    // For now, just a placeholder for dashboard metrics
    console.log('Dashboard initialized');
});
