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
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Show corresponding section (simulation)
                const targetId = link.getAttribute('href');
                document.querySelectorAll('.dashboard-section').forEach(section => {
                    section.classList.add('d-none');
                });
                document.querySelector(targetId)?.classList.remove('d-none');
            }
        });
    });

    // Dummy Chart Initialization (if using Chart.js)
    // For now, just a placeholder for dashboard metrics
    console.log('Dashboard initialized');
});
