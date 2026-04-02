/**
 * Kimi Claw - Main JavaScript
 * Mobile Navigation + Interactive Features
 */

// Mobile Navigation Toggle
function toggleNav() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('open');
    }
}

// Close nav when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('.nav');
    const navLinks = document.getElementById('navLinks');
    
    if (nav && navLinks && !nav.contains(event.target)) {
        navLinks.classList.remove('open');
    }
});

// Countdown Timer for Status Page
function updateCountdown() {
    const countdownEl = document.getElementById('countdown');
    if (!countdownEl) return;
    
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(9, 0, 0, 0);
    
    const diff = tomorrow - now;
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    const hoursEl = document.getElementById('countdown-hours');
    const minutesEl = document.getElementById('countdown-minutes');
    const secondsEl = document.getElementById('countdown-seconds');
    
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
}

// Update last modified time
function updateTimestamp() {
    const timestampEl = document.getElementById('update-time');
    if (timestampEl) {
        const now = new Date();
        const options = { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit', 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
        };
        timestampEl.textContent = now.toLocaleString('zh-HK', options);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Update timestamp
    updateTimestamp();
});
