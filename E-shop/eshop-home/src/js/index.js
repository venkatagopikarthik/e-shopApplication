// TechMart E-shop JavaScript

// Product data for pagination and carousel
const productsData = [
    {
        id: 1,
        name: "Sony WH-1000XM4",
        description: "Wireless Noise Canceling Headphones",
        price: 299,
        originalPrice: 379,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 5,
        reviews: 128,
        badge: "-20%",
        badgeColor: "bg-red-500"
    },
    {
        id: 2,
        name: "Apple Watch Series 8",
        description: "GPS, Always-On Display",
        price: 399,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
        rating: 4,
        reviews: 89,
        badge: null,
        badgeColor: null
    },
    {
        id: 3,
        name: "MacBook Pro 14\"",
        description: "M2 Pro Chip, 16GB RAM",
        price: 1999,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 5,
        reviews: 156,
        badge: "New",
        badgeColor: "bg-green-500"
    },
    {
        id: 4,
        name: "iPhone 15 Pro",
        description: "256GB, Natural Titanium",
        price: 1099,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2099&q=80",
        rating: 5,
        reviews: 203,
        badge: "Best",
        badgeColor: "bg-blue-500"
    },
    {
        id: 5,
        name: "Samsung Galaxy S24",
        description: "256GB, Phantom Black",
        price: 899,
        originalPrice: 999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
        rating: 4,
        reviews: 167,
        badge: "-10%",
        badgeColor: "bg-red-500"
    },
    {
        id: 6,
        name: "Dell XPS 13",
        description: "13.4\" 4K Touch, Intel i7",
        price: 1299,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 5,
        reviews: 94,
        badge: null,
        badgeColor: null
    },
    {
        id: 7,
        name: "Bose QuietComfort 45",
        description: "Wireless Noise Canceling",
        price: 329,
        originalPrice: 379,
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 4,
        reviews: 78,
        badge: "-13%",
        badgeColor: "bg-red-500"
    },
    {
        id: 8,
        name: "iPad Pro 12.9\"",
        description: "M2 Chip, 256GB, Space Gray",
        price: 1099,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 5,
        reviews: 145,
        badge: "Hot",
        badgeColor: "bg-orange-500"
    },
    {
        id: 9,
        name: "Logitech MX Master 3S",
        description: "Wireless Mouse, 8000 DPI",
        price: 99,
        originalPrice: 129,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 4,
        reviews: 203,
        badge: "-23%",
        badgeColor: "bg-red-500"
    },
    {
        id: 10,
        name: "Nintendo Switch OLED",
        description: "7\" OLED Screen, White",
        price: 349,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 5,
        reviews: 312,
        badge: null,
        badgeColor: null
    },
    {
        id: 11,
        name: "DJI Mini 3 Pro",
        description: "4K Camera Drone, 34min Flight",
        price: 759,
        originalPrice: 899,
        image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 4,
        reviews: 89,
        badge: "-16%",
        badgeColor: "bg-red-500"
    },
    {
        id: 12,
        name: "GoPro Hero 11 Black",
        description: "5.3K Video, 27MP Photos",
        price: 399,
        originalPrice: 499,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        rating: 5,
        reviews: 167,
        badge: "-20%",
        badgeColor: "bg-red-500"
    }
];

// Pagination variables
let currentPage = 1;
let productsPerPage = 8;
let totalPages = Math.ceil(productsData.length / productsPerPage);

// Carousel variables
let currentCarouselSlide = 0;
let currentProductCarouselSlide = 0;
const totalCarouselSlides = 3;
const productsPerCarouselSlide = 4;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize all app functionality
function initializeApp() {
    setupMobileMenu();
    setupScrollToTop();
    setupProductInteractions();
    setupSearchFunctionality();
    setupNewsletterForm();
    setupAnimations();
    setupCartFunctionality();
    setupWishlistFunctionality();
    setupDealCountdown();
    setupImageLazyLoading();
    setupPagination();
    setupCarousels();
}

// Pagination Setup
function setupPagination() {
    const productsGrid = document.getElementById('productsGrid');
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    const pageNumbers = document.getElementById('pageNumbers');
    const productsPerPageSelect = document.getElementById('productsPerPage');

    // Initial load
    renderProducts();
    renderPageNumbers();

    // Previous button
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderProducts();
                renderPageNumbers();
                updatePaginationButtons();
            }
        });
    }

    // Next button
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderProducts();
                renderPageNumbers();
                updatePaginationButtons();
            }
        });
    }

    // Products per page selector
    if (productsPerPageSelect) {
        productsPerPageSelect.addEventListener('change', (e) => {
            productsPerPage = parseInt(e.target.value);
            totalPages = Math.ceil(productsData.length / productsPerPage);
            currentPage = 1;
            renderProducts();
            renderPageNumbers();
            updatePaginationButtons();
        });
    }
}

// Render products for current page
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = productsData.slice(startIndex, endIndex);

    productsGrid.innerHTML = currentProducts.map(product => `
        <div class="product-card bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <div class="relative">
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-t-xl product-image">
                <button class="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                    <i class="fas fa-heart text-gray-400 hover:text-red-500"></i>
                </button>
                ${product.badge ? `<span class="absolute top-3 left-3 ${product.badgeColor} text-white text-xs px-2 py-1 rounded-full">${product.badge}</span>` : ''}
            </div>
            <div class="p-4">
                <h3 class="font-semibold text-gray-900 mb-2">${product.name}</h3>
                <p class="text-sm text-gray-600 mb-3">${product.description}</p>
                <div class="flex items-center mb-3">
                    <div class="flex text-yellow-400">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="text-sm text-gray-500 ml-2">(${product.reviews})</span>
                </div>
                <div class="flex items-center justify-between">
                    <div>
                        <span class="text-lg font-bold text-primary-500">$${product.price}</span>
                        ${product.originalPrice ? `<span class="text-sm text-gray-400 line-through ml-2">$${product.originalPrice}</span>` : ''}
                    </div>
                    <button class="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors" data-product-id="${product.id}">
                        <i class="fas fa-cart-plus mr-2"></i>Add
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Re-attach event listeners
    setupProductInteractions();
}

// Generate star rating HTML
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Render page numbers
function renderPageNumbers() {
    const pageNumbers = document.getElementById('pageNumbers');
    if (!pageNumbers) return;

    let pageNumbersHTML = '';
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbersHTML += `
            <button class="page-number w-10 h-10 rounded-lg font-semibold transition-colors ${i === currentPage ? 'bg-primary-500 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}" data-page="${i}">
                ${i}
            </button>
        `;
    }

    pageNumbers.innerHTML = pageNumbersHTML;

    // Add event listeners to page numbers
    document.querySelectorAll('.page-number').forEach(btn => {
        btn.addEventListener('click', () => {
            currentPage = parseInt(btn.dataset.page);
            renderProducts();
            renderPageNumbers();
            updatePaginationButtons();
        });
    });
}

// Update pagination buttons state
function updatePaginationButtons() {
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');

    if (prevBtn) {
        prevBtn.disabled = currentPage === 1;
    }
    if (nextBtn) {
        nextBtn.disabled = currentPage === totalPages;
    }
}

// Carousel Setup
function setupCarousels() {
    setupHeroCarousel();
    setupProductCarousel();
}

// Hero Carousel Setup
function setupHeroCarousel() {
    const carousel = document.getElementById('heroCarousel');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const indicators = document.querySelectorAll('.carousel-indicator');

    if (!carousel) return;

    // Previous button
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentCarouselSlide = (currentCarouselSlide - 1 + totalCarouselSlides) % totalCarouselSlides;
            updateCarousel();
        });
    }

    // Next button
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentCarouselSlide = (currentCarouselSlide + 1) % totalCarouselSlides;
            updateCarousel();
        });
    }

    // Indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentCarouselSlide = index;
            updateCarousel();
        });
    });

    // Auto-play
    setInterval(() => {
        currentCarouselSlide = (currentCarouselSlide + 1) % totalCarouselSlides;
        updateCarousel();
    }, 5000);

    // Initial update
    updateCarousel();
}

// Update hero carousel
function updateCarousel() {
    const carousel = document.getElementById('heroCarousel');
    const indicators = document.querySelectorAll('.carousel-indicator');

    if (carousel) {
        carousel.style.transform = `translateX(-${currentCarouselSlide * 100}%)`;
    }

    // Update indicators
    indicators.forEach((indicator, index) => {
        if (index === currentCarouselSlide) {
            indicator.classList.remove('bg-white/50');
            indicator.classList.add('bg-white');
        } else {
            indicator.classList.remove('bg-white');
            indicator.classList.add('bg-white/50');
        }
    });
}

// Product Carousel Setup
function setupProductCarousel() {
    const carousel = document.getElementById('productCarousel');
    const prevBtn = document.getElementById('productCarouselPrev');
    const nextBtn = document.getElementById('productCarouselNext');

    if (!carousel) return;

    // Render product carousel
    renderProductCarousel();

    // Previous button
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentProductCarouselSlide = Math.max(0, currentProductCarouselSlide - 1);
            updateProductCarousel();
        });
    }

    // Next button
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const maxSlides = Math.ceil(productsData.length / productsPerCarouselSlide) - 1;
            currentProductCarouselSlide = Math.min(maxSlides, currentProductCarouselSlide + 1);
            updateProductCarousel();
        });
    }

    // Auto-play product carousel
    setInterval(() => {
        const maxSlides = Math.ceil(productsData.length / productsPerCarouselSlide) - 1;
        currentProductCarouselSlide = (currentProductCarouselSlide + 1) % (maxSlides + 1);
        updateProductCarousel();
    }, 4000);
}

// Render product carousel
function renderProductCarousel() {
    const carousel = document.getElementById('productCarousel');
    if (!carousel) return;

    const totalSlides = Math.ceil(productsData.length / productsPerCarouselSlide);
    let carouselHTML = '';

    for (let i = 0; i < totalSlides; i++) {
        const startIndex = i * productsPerCarouselSlide;
        const endIndex = Math.min(startIndex + productsPerCarouselSlide, productsData.length);
        const slideProducts = productsData.slice(startIndex, endIndex);

        carouselHTML += `
            <div class="carousel-slide w-full flex-shrink-0">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${slideProducts.map(product => `
                        <div class="product-card bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                            <div class="relative">
                                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-t-xl product-image">
                                <button class="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                                    <i class="fas fa-heart text-gray-400 hover:text-red-500"></i>
                                </button>
                                ${product.badge ? `<span class="absolute top-3 left-3 ${product.badgeColor} text-white text-xs px-2 py-1 rounded-full">${product.badge}</span>` : ''}
                            </div>
                            <div class="p-4">
                                <h3 class="font-semibold text-gray-900 mb-2">${product.name}</h3>
                                <p class="text-sm text-gray-600 mb-3">${product.description}</p>
                                <div class="flex items-center mb-3">
                                    <div class="flex text-yellow-400">
                                        ${generateStars(product.rating)}
                                    </div>
                                    <span class="text-sm text-gray-500 ml-2">(${product.reviews})</span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div>
                                        <span class="text-lg font-bold text-primary-500">$${product.price}</span>
                                        ${product.originalPrice ? `<span class="text-sm text-gray-400 line-through ml-2">$${product.originalPrice}</span>` : ''}
                                    </div>
                                    <button class="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors" data-product-id="${product.id}">
                                        <i class="fas fa-cart-plus mr-2"></i>Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    carousel.innerHTML = carouselHTML;
}

// Update product carousel
function updateProductCarousel() {
    const carousel = document.getElementById('productCarousel');
    if (carousel) {
        carousel.style.transform = `translateX(-${currentProductCarouselSlide * 100}%)`;
    }
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('show');
            
            // Update icon
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.className = 'fas fa-bars text-lg';
            } else {
                icon.className = 'fas fa-times text-lg';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('show');
                const icon = mobileMenuBtn.querySelector('i');
                icon.className = 'fas fa-bars text-lg';
            }
        });
    }
}

// Scroll to Top Button
function setupScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.remove('hidden');
                scrollToTopBtn.classList.add('animate-fade-in-up');
            } else {
                scrollToTopBtn.classList.add('hidden');
                scrollToTopBtn.classList.remove('animate-fade-in-up');
            }
        });
        
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Product Interactions
function setupProductInteractions() {
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('button[data-product-id]');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add loading state
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Adding...';
            button.disabled = true;
            button.classList.add('btn-loading');
            
            // Simulate API call
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-check mr-2"></i>Added!';
                button.classList.remove('btn-loading');
                
                // Update cart count
                updateCartCount(1);
                
                // Show success message
                showNotification('Product added to cart!', 'success');
                
                // Reset button after 2 seconds
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.disabled = false;
                }, 2000);
            }, 1000);
        });
    });
    
    // Wishlist functionality
    const wishlistButtons = document.querySelectorAll('.fa-heart');
    
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (this.classList.contains('text-red-500')) {
                this.classList.remove('text-red-500');
                this.classList.add('text-gray-400');
                showNotification('Removed from wishlist', 'info');
            } else {
                this.classList.remove('text-gray-400');
                this.classList.add('text-red-500');
                showNotification('Added to wishlist!', 'success');
            }
        });
    });
}

// Search Functionality
function setupSearchFunctionality() {
    const searchInputs = document.querySelectorAll('input[placeholder*="Search"]');
    
    searchInputs.forEach(input => {
        input.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            
            // Add search functionality here
            if (query.length > 2) {
                // Simulate search results
                console.log('Searching for:', query);
            }
        });
        
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                // Handle search submission
                showNotification('Search functionality coming soon!', 'info');
            }
        });
    });
}

// Newsletter Form
function setupNewsletterForm() {
    const newsletterForm = document.querySelector('form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (validateEmail(email)) {
                // Simulate API call
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Subscribing...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Subscribed!';
                    showNotification('Successfully subscribed to newsletter!', 'success');
                    emailInput.value = '';
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    }, 2000);
                }, 1000);
            } else {
                showNotification('Please enter a valid email address', 'error');
            }
        });
    }
}

// Animations Setup
function setupAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.product-card, .category-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Cart Functionality
function setupCartFunctionality() {
    // Initialize cart from localStorage
    let cart = JSON.parse(localStorage.getItem('techmart-cart')) || [];
    let cartCount = cart.length;
    
    // Update cart count display
    updateCartCount(cartCount);
}

// Wishlist Functionality
function setupWishlistFunctionality() {
    // Initialize wishlist from localStorage
    let wishlist = JSON.parse(localStorage.getItem('techmart-wishlist')) || [];
    let wishlistCount = wishlist.length;
    
    // Update wishlist count display
    updateWishlistCount(wishlistCount);
}

// Deal Countdown Timer
function setupDealCountdown() {
    const dealCards = document.querySelectorAll('.bg-gradient-to-r');
    
    dealCards.forEach(card => {
        // Add countdown timer to deal cards
        const countdown = document.createElement('div');
        countdown.className = 'text-sm text-white/80 mt-2';
        countdown.innerHTML = '<i class="fas fa-clock mr-1"></i>Ends in 2 days';
        card.appendChild(countdown);
    });
}

// Image Lazy Loading
function setupImageLazyLoading() {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });
}

// Utility Functions
function updateCartCount(increment = 0) {
    const cartBadge = document.querySelector('.fa-shopping-cart').parentElement.querySelector('span');
    if (cartBadge) {
        let currentCount = parseInt(cartBadge.textContent) || 0;
        cartBadge.textContent = currentCount + increment;
    }
}

function updateWishlistCount(increment = 0) {
    const wishlistBadge = document.querySelector('.fa-heart').parentElement.querySelector('span');
    if (wishlistBadge) {
        let currentCount = parseInt(wishlistBadge.textContent) || 0;
        wishlistBadge.textContent = currentCount + increment;
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform transition-all duration-300 translate-x-full`;
    
    // Set colors based on type
    switch(type) {
        case 'success':
            notification.className += ' bg-green-500 text-white';
            break;
        case 'error':
            notification.className += ' bg-red-500 text-white';
            break;
        case 'warning':
            notification.className += ' bg-yellow-500 text-white';
            break;
        default:
            notification.className += ' bg-blue-500 text-white';
    }
    
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation-triangle' : 'info-circle'} mr-2"></i>
            <span>${message}</span>
            <button class="ml-auto text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            document.getElementById('mobileMenuBtn').click();
        }
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
window.addEventListener('scroll', debounce(function() {
    // Scroll-based animations and effects
}, 10));

// Service Worker Registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
