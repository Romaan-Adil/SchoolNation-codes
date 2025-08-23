// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.toggle('active');
            hamburgerBtn.classList.toggle('hamburger-active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                hamburgerBtn.classList.remove('hidden');
            }
        });
        
        // Prevent mobile menu from closing when clicking inside it
        mobileMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // City card hover effect enhancement
    const cityCards = document.querySelectorAll('.city-card');
    cityCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #e0f2fe 0%, #ffffff 100%)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)';
        });
    });
    
    // Simple search functionality
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const cityInput = document.querySelector('input[placeholder="Enter your city..."]');
            const schoolInput = document.querySelector('input[placeholder="Search for schools..."]');
            
            if (cityInput.value || schoolInput.value) {
                alert(`Searching for schools in ${cityInput.value || 'all cities'} matching "${schoolInput.value || 'all schools'}"`);
            } else {
                alert('Please enter a city or school name to search');
            }
        });
    }
    
    // View All Cities button functionality
    const viewAllBtn = document.querySelector('.cta-btn');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function() {
            alert('Viewing all cities');
        });
    }
    
    // Add click event to city cards
    const cityCardsClick = document.querySelectorAll('.city-card');
    cityCardsClick.forEach(card => {
        card.addEventListener('click', function() {
            const cityName = this.querySelector('.city-name').textContent;
            alert(`Exploring schools in ${cityName}`);
        });
    });
    
    // Mobile menu links functionality
    const mobileMenuLinks = document.querySelectorAll('.mobile-nav-link');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            const hamburgerBtn = document.getElementById('hamburger-btn');
            
            mobileMenu.classList.add('hidden');
            hamburgerBtn.classList.remove('hamburger-active');
        });
    });

});



