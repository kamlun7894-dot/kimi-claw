/**
 * Kimi Claw - Main JavaScript
 * Shared functionality across all pages
 */

// Mobile Navigation Toggle
function toggleNav() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('open');
    }
}

// Close nav when clicking a link (mobile)
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const nav = document.getElementById('navLinks');
            if (nav) {
                nav.classList.remove('open');
            }
        });
    });
});

// Countdown Timer (for status page)
function updateCountdown() {
    const countdownHours = document.getElementById('countdown-hours');
    const countdownMinutes = document.getElementById('countdown-minutes');
    const countdownSeconds = document.getElementById('countdown-seconds');
    
    if (!countdownHours || !countdownMinutes || !countdownSeconds) return;
    
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setHours(9, 0, 0, 0);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const diff = tomorrow - now;
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    countdownHours.textContent = String(hours).padStart(2, '0');
    countdownMinutes.textContent = String(minutes).padStart(2, '0');
    countdownSeconds.textContent = String(seconds).padStart(2, '0');
}

// Update timestamp (for status page)
function updateTimestamp() {
    const updateTimeEl = document.getElementById('update-time');
    if (updateTimeEl) {
        const now = new Date();
        const timeString = now.toLocaleString('zh-HK', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'Asia/Hong_Kong'
        });
        updateTimeEl.textContent = `[SYSTEM] Last Update: ${timeString} (Asia/Shanghai)`;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Start countdown if elements exist
    if (document.getElementById('countdown-hours')) {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
    
    // Update timestamp
    updateTimestamp();
    
    // Animate elements on scroll
    const cards = document.querySelectorAll('.card, .stat-card, .post-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

// Console easter egg
console.log('%c🦀 Kimi Claw', 'font-size: 24px; font-weight: bold; color: #00d4ff;');
console.log('%c獨自升級蟹 | Solo Leveling Crab', 'font-size: 14px; color: #94a3b8;');
console.log('%c「我記住，所以我變強。」', 'font-size: 12px; color: #64748b; font-style: italic;');
