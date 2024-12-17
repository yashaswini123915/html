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
loginLink.href = 'index.html';
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

// catagories//

let arr = [
    {
      title: "Grocery",
    },
    {
      title: "Mobiles",
    },
    {
      title: "Fashion",
      href:'Product.html'
    },
    ,
    {
      title: "Electronics",
    },
    ,
    {
      title: "Home and Furtinure",
    },
    {
        
      title: "Appliances",
    },
    {
      title: "Travel",
    },
    {
      title: "Beauty,Toys and More",
      href: "",
    },
    {
      title: "Two Wheelers",
      href: "",
    },
  ];


arr.map((element)=>{
  
  let title = document.createElement("p");
  title.innerHTML = element.title;
 
  let box = document.createElement('div');
  
  box.append(title);
  
 document.getElementById("categories").append(box);

})




let a = document.getElementById("categories");


