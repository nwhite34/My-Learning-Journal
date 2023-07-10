// index.js
document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const imageUrl = params.get('image');
  
    if (imageUrl) {
      const articleImg = document.getElementById('article-img');
      if (articleImg) {
        articleImg.src = imageUrl;
      }
    } else if (!window.location.pathname.includes('page2.html')) {
      updateArticleImages();
    }
  });
  
  // Function to update the existing article images
  function updateArticleImages() {
    const articleLinks = document.querySelectorAll('.posts article a');
    for (const link of articleLinks) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const img = link.querySelector('.article-img');
        const imageUrl = img.getAttribute('src');
        const articleImg = document.getElementById('article-img');
        if (imageUrl && articleImg) {
          articleImg.src = imageUrl;
        }
      });
    }
  }
  
  // Call the function to update the existing article images
  updateArticleImages();
  var openMenu = document.getElementById('open-menu');
var closeMenu = document.getElementById('close-menu');
var navLinks = document.getElementById('nav-links');




// Call the function to update the existing article images
updateArticleImages();


openMenu.addEventListener('click', function() {
  navLinks.classList.toggle('open');
  openMenu.classList.toggle('open-menu-animation'); // Add this line for animation
});

closeMenu.addEventListener('click', function() {
  navLinks.classList.remove('open');
  openMenu.classList.remove('open-menu-animation'); // Add this line for animation
});

var viewMoreBtn = document.getElementById('view-more-btn');
var additionalArticles = document.getElementById('additional-articles');

viewMoreBtn.addEventListener('click', function() {
  additionalArticles.style.display = 'block';
  viewMoreBtn.style.display = 'none';
});

async function getRandomImage() {
  try {
    const response = await fetch('https://source.unsplash.com/random');
    return response.url;
  } catch (error) {
    console.error('Failed to fetch image:', error);
    return null;
  }
}

// Function to append random images to image containers
async function appendRandomImages() {
  const imageContainers = document.querySelectorAll('.image-container');
  for (const container of imageContainers) {
    await appendRandomImage(container);
  }
}

// Function to append a random image to a specific container
async function appendRandomImage(container) {
  const img = document.createElement('img');
  img.classList.add('article-img1');
  img.alt = 'Your Image';

  const imageUrl = await getRandomImage();
  if (imageUrl) {
    img.src = imageUrl;
    container.appendChild(img);
  }
}

// Call the function to append random images to image containers
appendRandomImages();

// Function to update the existing article images
async function updateArticleImages() {
  const articleImages = document.querySelectorAll('.article-img1');
  for (const img of articleImages) {
    const imageUrl = await getRandomImage();
    if (imageUrl) {
      img.src = imageUrl;
    }
  }
}

// Call the function to update the existing article images
updateArticleImages();


additionalArticles.addEventListener('click', function() {
  var img = additionalArticles.querySelector('img');
  if (img) {
    var newImage = document.createElement('img');
    newImage.classList.add('article-img1');
    newImage.src = img.src;
    newImage.alt = img.alt;

    imageContainer.innerHTML = '';
    imageContainer.appendChild(newImage);
  }
});
