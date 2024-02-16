setInterval(function () {
    var badItems = document.querySelectorAll('[class^="footer_footer"]');
    if (badItems) {
        for (var i = 0; i < badItems.length; i += 1) {
            badItems[i].remove();
        }
    }
    var stupidItems = document.querySelectorAll('[class^="price_productCard"], [alt="Society6 Logo"], #breadcrumbs, h1#title, [qa-id="related-categories"], #promo-bar, #main-nav, [class^="menu_menu_"], [qa-id="product-type-info-header"], [qa-id="product-card-atc"], [class^="wrapper_designDetailsModule"], #detailsPrice, #addToCart-btn-desktop, [class^="quantityContainer_details"], #artistShop, [qa-id="follow"], #reviews-container, [class^="productDescription_productDescription_"], [qa-id="affiliate-section"], [class^="ddOption-default_dropdown"] > span:nth-child(2), [qa-id="ad-card"], [qa-id="newsletter-signup"], #recent-container [qa-id], [qa-id="related-searches"], [qa-id="related-products"]');
    if (stupidItems) {
        for (var i = 0; i < stupidItems.length; i += 1) {
            stupidItems[i].style.opacity = 0;
        }
    }
}, 100);
