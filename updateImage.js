const responsiveImage = document.getElementById("responsiveImage");

    // Define image URLs for desktop and mobile versions
    const desktopImageUrl = "./assets/images/illustration-sign-up-desktop.svg";
    const mobileImageUrl = "./assets/images/illustration-sign-up-mobile.svg";

    // Function to set the appropriate image based on screen width
    function updateImage() {
      if (window.innerWidth >= 600) {
        responsiveImage.src = desktopImageUrl;
        
      } else {
        responsiveImage.src = mobileImageUrl;
      }
    }

    // Initial call to set the image based on the current screen width
    updateImage();

    // Update the image whenever the window is resized
    window.addEventListener("resize", updateImage);