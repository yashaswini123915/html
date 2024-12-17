let arr = [
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100",
      title: "Grocery",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100",
      title: "Mobiles",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100",
      title: "Fashion",
      href:'Product.html'
    },
    ,
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100",
      title: "Electronics",
    },
    ,
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
      title: "Home and Furtinure",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/0ff199d1bd27eb98.png?q=100",
      title: "Appliances",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100",
      title: "Travel",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100",
      title: "Beauty,Toys and More",
      href: "",
    },
    {
      img_src:
        "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100",
      title: "Two Wheelers",
      href: "",
    },
  ];


arr.map((element)=>{
  let image = document.createElement('img');
  image.src = element.img_src;
  
  let title = document.createElement("p");
  title.innerHTML = element.title;
 
  let box = document.createElement('div');
  
  box.append(image,title);
  
 document.getElementById("categories").append(box);

})




let a = document.getElementById("categories");
//------------navigation bar---------//


// Select the container where the navbar will be added
const navbarContainer = document.getElementById('navbar-container');

// Create the <nav> element
const nav = document.createElement('nav');

// Create the left section (Logo and Search Bar)
const navLeft = document.createElement('div');
navLeft.className = 'nav-left';

// Logo
const logo = document.createElement('img');
logo.src = 'https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg'; // Replace with your logo path
logo.alt = 'Logo';
navLeft.appendChild(logo);

// Search Bar
const searchBar = document.createElement('div');
searchBar.className = 'search-bar';



const searchButton = document.createElement('button');
const searchIcon = document.createElement('i');
searchIcon.className = 'fa fa-search';
searchButton.appendChild(searchIcon);

const searchInput = document.createElement('input');
searchInput.type = 'search';
searchInput.placeholder = 'Search Products,Brands and More';


searchBar.appendChild(searchButton);
searchBar.appendChild(searchInput);


navLeft.appendChild(searchBar);

// Create the right section (Links and Icons)
const navRight = document.createElement('div');
navRight.className = 'nav-right';

// Login link
const loginLink = document.createElement('a');
loginLink.href = './sgin.html';
loginLink.innerHTML = `<i class="fa fa-user"></i> Login <i class="fa fa-angle-down"></i>`;
navRight.appendChild(loginLink);

// Cart link
const cartLink = document.createElement('a');
cartLink.href = '#';
cartLink.innerHTML = `<i class="fa fa-cart-shopping"></i> Cart`;
navRight.appendChild(cartLink);

// Become a Seller link
const sellerLink = document.createElement('a');
sellerLink.href = '#';
sellerLink.innerHTML = `<i class="fa fa-user"></i> Become a Seller`;
navRight.appendChild(sellerLink);

// More Options link
const moreOptionsLink = document.createElement('a');
moreOptionsLink.href = '#';
moreOptionsLink.innerHTML = `<i class="fa fa-ellipsis-vertical"></i>`;
navRight.appendChild(moreOptionsLink);

// Append sections to the nav
nav.appendChild(navLeft);
nav.appendChild(navRight);

// Append the nav to the container
navbarContainer.appendChild(nav);



//sliderbar---------------------------------slider bar-----------sliderbar---------------//



// Dynamic Slider Creation
const sliderContainer = document.getElementById('slider-container');

// Create slider elements
const slider = document.createElement('div');
slider.className = 'slider';

const slides = document.createElement('div');
slides.className = 'slides';

// Add images dynamically
const imagePaths = ['https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1316eb53d6f52c71.jpg?q=20', 'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/8074e7b2f6d2bfea.jpg?q=20', 'https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/96394e0900c8983c.jpg?q=20']; 
imagePaths.forEach((imagePath) => {
  const img = document.createElement('img');
  img.src = imagePath;
  img.alt = 'Slide Image';
  slides.appendChild(img);
});

// Create navigation arrows
const leftArrow = document.createElement('button');
leftArrow.className = 'arrow left';
leftArrow.innerHTML = '&lt;';

const rightArrow = document.createElement('button');
rightArrow.className = 'arrow right';
rightArrow.innerHTML = '&gt;';

// Append elements to slider
slider.appendChild(slides);
slider.appendChild(leftArrow);
slider.appendChild(rightArrow);
sliderContainer.appendChild(slider);

// Slider functionality
let currentIndex = 0;
const totalSlides = imagePaths.length;

// Function to update slider position
function updateSlider() {
  const slideWidth = slider.clientWidth;
  slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

// Function to show the next slide
function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
  updateSlider();
}

// Function to show the previous slide
function showPreviousSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back to the last slide
  updateSlider();
}

// Attach event listeners to arrows
rightArrow.addEventListener('click', () => {
  clearInterval(autoPlayInterval); // Reset autoplay on manual action
  showNextSlide();
  startAutoplay();
});

leftArrow.addEventListener('click', () => {
  clearInterval(autoPlayInterval); // Reset autoplay on manual action
  showPreviousSlide();
  startAutoplay();
});

// Automatically change slides every 3 seconds
let autoPlayInterval;

function startAutoplay() {
  autoPlayInterval = setInterval(showNextSlide, 3000); // Change every 3 seconds
}

// Adjust slider on window resize
window.addEventListener('resize', updateSlider);

// Initialize slider
updateSlider();
startAutoplay();
//----------------------------best electronic----------------------------//

const blogPosts = [
  {
    image:"https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
    title:"Best Truewireless....",
    content:"Grab Now"
  },
  {
    image:"https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
    title:"Best Monitors",
    content:"From ₹7949"
  },
  {
    image:"https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
    title:"Projector",
    content:"From ₹6990"
  },
  {
    image:"https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
    title:"boAt Smartwatches",
    content:"From ₹999"
  },
  {
    image:"https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
    title:"Printers",
    content:"From ₹2336"
  },
  {
    image:"https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
    title:"Monitor",
    content:"From ₹8279"
  },
  {
    image:"https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
    title:"Top Mirrorless Cameras",
    content:"Shop Now!"
  }

]
const bestElectronicsSection = document.getElementById("best-electronics");

// Add a container for the product items (this will make the section scrollable)
const electronicsContainer = document.createElement('div');
electronicsContainer.style.display = 'flex';
electronicsContainer.style.overflowX = 'auto';
electronicsContainer.style.whiteSpace = 'nowrap';
bestElectronicsSection.appendChild(electronicsContainer);

// Loop through the blogPosts array and create product items
blogPosts.forEach((element) => {
    const image1 = document.createElement('img');
    image1.src = element.image;
    image1.style.width = '100%';

    const title = document.createElement("p");
    title.innerHTML = element.title;

    const content = document.createElement("p");
    content.innerHTML = element.content;

    const box1 = document.createElement('div');
    box1.classList.add('product-box');
    box1.style.display = "inline-block";
    box1.style.width = "200px"; // Adjust size as needed
    box1.style.margin = "10px";
    box1.style.textAlign = "center";
    box1.append(image1, title, content);

    electronicsContainer.appendChild(box1);
});

// Scroll Right Button
const scrollRightButton = document.querySelector(".scroll-right-button");

// Add scroll functionality to the right button
scrollRightButton.addEventListener("click", () => {
    // Scroll content by 200px to the right
    electronicsContainer.style.transform = `translateX(-200px)`;
});



//-------------------add-----------------------//


let add = document.createElement('img');
add.src = "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90";

document.getElementById("add").append(add);

//--------------------------**********************------------------------//


const toys = [
  {
    image:"https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
    title:"Geared Cycles",
    content:"Up to 70% Off"
  },
  {
    image:"https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
    title:"Remote Control T.. ",
    content:"Up to 80% Off"
  },
  {
    image:"https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
    title:"Best of Action Toys",
    content:"Up to 70% Off"
  },
  {
    image:"https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
    title:"Soft Toys",
    content:"Upto 70% Off"
  },
  {
    image:"https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
    title:"Dry Fruits",
    content:"Upto 75% Off"
  },
  {
    image:"https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
    title:"Gym Essentials",
    content:"From ₹139"
  },
  {
    image:"https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
    title:"Microphones",
    content:"Up to 70% off"
  },
  {
    image:"https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
    title:"Honey",
    content:"Upto 75% off"
  }

]
toys.map((element)=>{
  let image2 = document.createElement('img');
  image2.src = element.image;
  
  let title = document.createElement("p");
  title.innerHTML = element.title;

  
  let content = document.createElement("p");
  content.innerHTML = element.content;
 
  let box2 = document.createElement('div');
  
  box2.append(image2,title,content);
  
 document.getElementById("beautyandtoys").append(box2);

})

document.getElementById("beautyandtoys");

//-----------------------------------------------------------------//




