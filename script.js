// star
// star clear
// reciet
// payment modify
// cart css stability
function login() {
  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("Login-Username").value.trim();
    const password = document.getElementById("Login-Password").value;

    let valid = true;

    // Validation
    if (username.length < 6) {
      document.getElementById("NameError").textContent = "Name must be at least 6 characters";
      valid = false;
    } else {
      document.getElementById("NameError").textContent = "";
    }

    if (password.length < 6) {
      document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
      valid = false;
    } else {
      document.getElementById("passwordError").textContent = "";
    }

    if (!valid) return;

    // const storedUser = localStorage.getItem(username);
const storedUser = JSON.parse(localStorage.getItem(username));
    if (!storedUser) {
      alert("No account found. Please register.");
      return;
    }

    if (username === storedUser.username && password === storedUser.password) {
      localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
      alert(`Welcome, ${storedUser.username}!`);
      window.location.href = "index.html";
    } else {
      alert("Invalid credentials.");
    }
  });
}
function register(){
  
  const form = document.getElementById("registerForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("Register-Username").value.trim();
    const email = document.getElementById("Register-Email").value.trim();
    const password = document.getElementById("Register-Password").value;
    const confirmPassword = document.getElementById("Register-Confirmpassword").value;

    if (username === "" || password === "" || email===""||confirmPassword==="") {
      alert("Please fill in everything");
      return;
    }
    let valid = true;
    
    document.getElementById("NameError").textContent =username.name>=6
      username.length >= 6 ? "" : "Name must be at least 6 characters";
  
     valid= valid && username.length >= 6;

    // ^=start a string;  [^\S@]= S means space and @ not allowed; +=combine; @=@ compulsory; [^\S@]= S means space and @ not allowed; \.=. is compulsory
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    document.getElementById("emailError").textContent =
      emailRegex.test(email) ? "" : "Invalid email format";
    valid=valid && emailRegex.test(email);

   
    document.getElementById("passwordError").textContent =
      password.length >= 6 ? "" : "Password must be at least 6 characters";
    valid=valid && password.length >= 6;

    document.getElementById("confirmPasswordError").textContent =
      password === confirmPassword ? "" : "Confirm password doesn't match password";
    valid=valid && password === confirmPassword;

    if (!valid) return;



    if (localStorage.getItem(email)) {
      alert("Already registered with this email");
      return;
    }
const user={
  username:username,
  email:email,
  password:password,
  confirmPassword:confirmPassword
}
  
    localStorage.setItem(username, JSON.stringify(user));
    alert("Registered Successfully!");
    window.location.href = "login.html";
  })
}

const product={
    1: {
    name: "Latest Smartphone",
    price: "$799",
    image: "https://via.placeholder.com/500x400/4CAF50/white?text=Smartphone",
    description:
      "This high-performance smartphone features a stunning display, advanced camera system, and lightning-fast processor. Perfect for photography, gaming, and productivity. With 5G connectivity and all-day battery life, it's the ultimate mobile companion.",
    features: [
      '6.7" OLED Display',
      "Triple Camera System",
      "5G Connectivity",
      "All-day Battery Life",
      "Water Resistant",
    ],
  },
  1: {
    name: "Latest Smartphone",
    price: "$799",
    image: "https://via.placeholder.com/500x400/4CAF50/white?text=Smartphone",
    description:
      "This high-performance smartphone features a stunning display, advanced camera system, and lightning-fast processor. Perfect for photography, gaming, and productivity. With 5G connectivity and all-day battery life, it's the ultimate mobile companion.",
    features: [
      '6.7" OLED Display',
      "Triple Camera System",
      "5G Connectivity",
      "All-day Battery Life",
      "Water Resistant",
    ],
  },



2: {
    name: "Gaming Laptop",
    price: "$1299",
    image: "https://via.placeholder.com/500x400/2196F3/white?text=Laptop",
    description:
      "Experience ultimate gaming performance with this powerful laptop. Featuring a high-end graphics card, fast processor, and advanced cooling system. Perfect for gaming, content creation, and professional work.",
    features: [
      "Intel Core i7 Processor",
      "NVIDIA RTX Graphics",
      "16GB RAM",
      "512GB SSD Storage",
      "144Hz Display",
    ],
  },
  3: {
    name: "Wireless Headphones",
    price: "$199",
    image: "https://via.placeholder.com/500x400/FF9800/white?text=Headphones",
    description:
      "Premium wireless headphones with industry-leading noise cancellation. Enjoy crystal-clear audio quality and comfortable all-day wear. Perfect for music, calls, and travel.",
    features: [
      "Active Noise Cancellation",
      "30-hour Battery Life",
      "Bluetooth 5.0",
      "Quick Charge",
      "Comfortable Design",
    ],
  },
  4: {
    name: "Smartwatch",
    price: "$399",
    image: "https://via.placeholder.com/500x400/9C27B0/white?text=Smartwatch",
    description:
      "Stay connected and track your health with this advanced smartwatch. Features comprehensive health monitoring, GPS, and seamless smartphone integration.",
    features: [
      "Heart Rate Monitor",
      "GPS Tracking",
      "Water Resistant",
      "7-day Battery Life",
      "Fitness Tracking",
    ],
  },
  5: {
    name: "Tablet Pro",
    price: "$699",
    image: "https://via.placeholder.com/500x400/F44336/white?text=Tablet",
    description:
      "Professional-grade tablet with stunning display and powerful performance. Perfect for creative work, productivity, and entertainment. Compatible with professional stylus and keyboard.",
    features: [
      '12.9" Retina Display',
      "Apple M1 Chip",
      "All-day Battery",
      "USB-C Connectivity",
      "Apple Pencil Support",
    ],
  },
  6: {
    name: "Smart Speaker",
    price: "$149",
    image: "https://via.placeholder.com/500x400/607D8B/white?text=Speaker",
    description:
      "Voice-controlled smart speaker with premium sound quality. Control your smart home, play music, and get information with simple voice commands.",
    features: [
      "Voice Control",
      "Premium Audio",
      "Smart Home Hub",
      "Multi-room Audio",
      "Privacy Controls",
    ],
  },
  7: {
    name: "Digital Camera",
    price: "$899",
    image: "https://via.placeholder.com/500x400/795548/white?text=Camera",
    description:
      "Professional-grade digital camera with advanced features for photography enthusiasts. Capture stunning photos and 4K videos with exceptional quality.",
    features: [
      "24MP Sensor",
      "4K Video Recording",
      "Image Stabilization",
      "Wi-Fi Connectivity",
      "Professional Lenses",
    ],
  },
  8: {
    name: "Drone with Camera",
    price: "$549",
    image: "https://via.placeholder.com/500x400/FF5722/white?text=Drone",
    description:
      "High-tech drone with 4K camera and advanced flight features. Perfect for aerial photography, videography, and exploration. GPS navigation and obstacle avoidance included.",
    features: [
      "4K Camera",
      "GPS Navigation",
      "Obstacle Avoidance",
      "30-min Flight Time",
      "Remote Control",
    ],
  },
  9: {
    name: "PC",
    price: "$999",
    image: "https://via.placeholder.com/500x400/4CAF50/white?text=PC",
    description:
      "Strong computer that holds lots of data",
    features: [
      "holds 10 gigabytes",
      "Big screen",
      "runs smoothly with good graphics card",
    ],
  },
  10: {
    name: "DVD Player",
    price: "$99",
    image: "https://via.placeholder.com/500x400/4CAF50/white?text=DVDPlayer",
    description:
      "Can play DVD Disc",
    features: [
      "unlimited uses",
      "One disc at a time",
      "runs smoothly on the TV",
    ],
  },
  11: {
    name: "DVD Disc",
    price: "$49",
    image: "https://via.placeholder.com/500x400/4CAF50/white?text=DVDDisc",
    description:
      "Can hold video recordings",
    features: [
      "Small",
      "hold up to 3 hours of footage",
      "unlimited uses",
    ],
  },
  12: {
    name: "Computer Mouse",
    price: "$39",
    image: "https://via.placeholder.com/500x400/4CAF50/white?text=Mouse",
    description:
      "Can control cursor on computers",
    features: [
      "Small",
      "can control anytime",
      "Has a scroll wheel",
      
    ],
  },
  13: {
    name: "Fan",
    price: "$199",
    image: "https://via.placeholder.com/500x400/4CAF50/white?text=Fan",
    description:
      "Can keep you chilly",
    features: [
      "Makes a lot of wind",
      "lasts 1 hour with full charge",
      "Turn it on, on command",
    ],
  },
  14: {
    name: "Lamp",
    price: "$599",
    image: "https://via.placeholder.com/500x400/4CAF50/white?text=Lamp",
    description:
      "Gives you light",
    features: [
      "Very Bright",
      "Lasts 2 hour",
      "Lights up on command",
    ],
  },
  15: {
    name: "Charging Cord",
    price: "$29",
    image: "https://via.placeholder.com/500x400/4CAF50/white?text=ChargingCord",
    description:
      "Can charge your phone",
    features: [
      "Fast Charging",
      "Portable",
      "Charge many Phones",
    ],
  },
}
document.addEventListener("DOMContentLoaded",function(){
  const page = window.location.pathname.split("/").pop();
  if(page==="singleProduct.html"){
    renderProductDetails()
    addToCart()
  }
  else if(page==="signup.html"){
    register()
  }
  else if(page==="login.html"){
    login()
  }
  updateLoginStatus()
})
function renderProductDetails() {
  const id = new URLSearchParams(window.location.search).get("id");
  
  const singleProduct = product?.[id]; // Ensure 'product' is defined


  if (!singleProduct) return;


  document.getElementById("productName").textContent = singleProduct.name;
  document.getElementById("productPrice").textContent = singleProduct.price;
  document.getElementById("productDescription").textContent = singleProduct.description;


  const imageURL = new URLSearchParams(window.location.search).get("img") || singleProduct.image;  //blaa blaa blaa
  const productImage = document.getElementById("productImage");
  productImage.src = imageURL;
  productImage.alt = singleProduct.name;


  const featuresList = document.getElementById("productFeatures");
  featuresList.innerHTML = "";


  // Fixed: Should use singleProduct.features
  singleProduct.features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    featuresList.appendChild(li);
  });
}

function updateLoginStatus(){
   const user = JSON.parse(localStorage.getItem("loggedInUser"));
   const loginLink=document.getElementById("loginLink")
    if(user&&loginLink){
      loginLink.textContent=user.username
      loginLink.href="#"
      loginLink.addEventListener("click",(e)=>{
        e.preventDefault()
        if(confirm("Logout?")){
          localStorage.removeItem("loggedInUser")
          window.location.href = "login.html";
        }
      })
    }
   
}
function addToCart(){
  let btn=document.getElementById("addToCartBtn")
  if(!btn)return
  btn.addEventListener("click", () => {
    const id = new URLSearchParams(window.location.search).get("id");
    const selectedProduct = product?.[id];
    if(!selectedProduct){
      alert("Product Not Found")
      return
    }
    const qty = parseInt(document.getElementById("quantity").value) || 1;
const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item.id === id);
    if(existing){
      existing.quantity+=qty
    }
else {
      cart.push({
        id,
        name: selectedProduct.name,
        price: parseFloat(selectedProduct.price.replace("$", "")),
        image: selectedProduct.image,
        quantity: qty
      });
    }


    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${qty} x ${selectedProduct.name} added to cart!`);
  });
    
    
}
const stars=document.querySelectorAll(".star")
const rating=document.getElementById("rating")
stars.forEach((star)=>{
  star.addEventListener("click",()=>{
    let ratingValue=star.getAttribute("data-rating")
    rating.value=ratingValue
    stars.forEach((s,index)=>{
      if(index<ratingValue){
        s.style.color="#bfc22a"
      }
      else{
        s.style.color="#333"
      }
    })
      localStorage.setItem("rating",ratingValue)
    })
    star.addEventListener("mouseenter", ()=>{
      let hoverValue=star.getAttribute("data-rating")
      stars.forEach((s,index)=>{
        s.style.color=index<hoverValue? "#bfc22a": "#333"
      })
    })
    star.addEventListener("mouseleave", ()=>{
      let crunchRating=rating.value
      stars.forEach((s,index)=>{
        s.style.color=index<crunchRating? "#bfc22a": "#333"
    })
  })
})
const submit=document.querySelector(".submit-btn")
submit.addEventListener("click",(Event)=>{
  Event.preventDefault()
  alert("Thank you for your Feedback!")
})