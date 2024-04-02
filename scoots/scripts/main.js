// Display the copyright year
function getCopyrightYear() {
    const year = new Date().getFullYear();
    document.getElementById("cYear").innerHTML = `&copy; ${year}`;
}

// Display the last modified date of the page
function getLastModified() {
    const lastModified = new Date(document.lastModified).toGMTString();
    document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModified}`;
}

// ********* Weather Banner *********
function weatherBanner() {
    const banner = document.getElementById("banner");
    const closeBannerBtn = document.getElementById("closeBanner");

    // // Set initial visibility
    const isBannerVisible = true;
    banner.classList.toggle("banner", isBannerVisible);
    banner.classList.toggle("banner-hide", !isBannerVisible);

    // Close the banner when the close button is clicked
    closeBannerBtn.addEventListener("click", function () {
        banner.classList.add("banner-hide");
    });
}


// Call Functions
getCopyrightYear();
getLastModified();
weatherBanner();