// Define menu items and prices for all categories
const soups = [
    "Chicken Soup",
    "Mutton Soup",
    "Chicken Murg Soup",
    "Chilli Chicken Soup",
    "Mutton Bone Soup",
    "Mutton Leg Soup",
    "Chicken Manchow Soup",
    "Sweet Corn Soup",
    "Tomato Soup",
    "Vegetable Soup (Chef's Special)"
];
const soupPrices = [60, 70, 80, 70, 80, 75, 80, 65, 70, 90]; // Add prices for each soup

const starters = [
    "Hong Kong Chicken",
    "Chilli Chicken",
    "Chicken Lolipop",
    "Chicken 555",
    "Chicken Manchuria",
    "Chicken Majestic",
    "Kasturi Chicken",
    "Kaju Chicken",
    "Tagupothu Chicken",
    "Chicken Ghee Roast",
    "Pepper Chicken",
    "Chef Special Chicken - Chicken Charan",
    "Mutton Roast",
    "Mutton 65",
    "Chilli Mutton",
    "Mutton Ghee Roast",
    "Mutton Nawab Masala",
    "Baby Corn Chilli",
    "Paneer Chilli",
    "Mushroom Chilli",
    "Gobi Chilli",
    "Gobi 65",
    "Gobi Manchuria",
    "Gobi Pakoda",
    "Paneer Manchuria",
    "Paneer 65",
    "Paneer 90",
    "Baby Corn Manchuria",
    "Mushroom Manchuria",
    "Mushroom Pepper",
    "Fish Fry",
    "Fish 65",
    "Fish Manchuria",
    "Fish Chilli",
    "Fish Tikka",
    "Prawn Fry",
    "Prawn 65",
    "Prawn Manchuria",
    "Prawn Chilli",
    "Prawn Tikka",
    "Fish Finger",
    "Fish Cutlet",
    "Fish Pakora",
    "Fish Amritsari",
    "Fish Tandoori",
    "Prawn Finger",
    "Prawn Cutlet",
    "Prawn Pakora",
    "Prawn Amritsari",
    "Prawn Tandoori"
];
const starterPrices = [150, 160, 140, 160, 170, 180, 170, 180, 150, 190, 160, 180, 180, 170, 180, 200, 210, 150, 160, 150, 160, 170, 180, 140, 150, 160, 170, 150, 160, 180, 170, 160, 180, 200, 180, 190, 200, 210, 220, 170, 180, 190, 200, 210, 180, 190, 200, 210, 220, 230, 240, 250];

const breads = [
    "Naan",
    "Roti",
    "Paratha",
    "Butter Naan",
    "Garlic Naan",
    "Kulcha",
    "Puri",
    "Bhatura",
    "Poori",
    "Tandoori Roti",
    "Chapati",
    "Phulka",
    "Roomali Roti",
    "Aloo Paratha",
    "Paneer Paratha",
    "Gobi Paratha",
    "Onion Kulcha",
    "Paneer Kulcha",
    "Lachha Paratha",
    "Missi Roti"
];
const breadsPrices = [20, 25, 30, 25, 30, 35, 20, 25, 20, 25, 15, 20, 20, 25, 30, 35, 40, 45, 30, 25]; // Add prices for each bread

const biryanis = [
    "Chicken Biryani",
    "Mutton Biryani",
    "Prawn Biryani",
    "Fish Biryani",
    "Egg Biryani",
    "Veg Biryani",
    "Paneer Biryani",
    "Hyderabadi Biryani",
    "Lucknowi Biryani",
    "Kolkata Biryani",
    "Dindigul Biryani",
    "Ambur Biryani",
    "Chettinad Biryani",
    "Malabar Biryani",
    "Thalassery Biryani",
    "Kerala Biryani",
    "Goan Biryani",
    "Kashmiri Biryani",
    "Awadhi Biryani",
    "Bhatkali Biryani",
    "Combos & Family Packs",
    "Biryani Buckets"
];
const biryanisPrices = [100, 150, 200, 120, 180, 130, 140, 180, 190, 160, 180, 150, 170, 190, 200, 220, 250, 230, 240, 180, 200, 250]; // Add prices for each biryani

const dessertsDrinks = [
    "Gulab Jamun",
    "Rasgulla",
    "Rasmalai",
    "Kheer",
    "Jalebi",
    "Rice Pudding",
    "Carrot Halwa",
    "Moong Dal Halwa",
    "Shahi Tukda",
    "Ice Cream Sundae",
    "Fruit Salad",
    "Pineapple Kesari",
    "Coconut Ladoo",
    "Chocolate Cake",
    "Black Forest Cake",
    "Tiramisu",
    "Cheesecake",
    "Peda",
    "Barfi",
    "Sohan Halwa",
    "Chocolate Milkshake",
    "Vanilla Milkshake",
    "Strawberry Milkshake",
    "Mango Milkshake",
    "Banana Milkshake",
    "Coffee Milkshake",
    "Butterscotch Milkshake",
    "Oreo Milkshake",
    "Nutella Milkshake",
    "Peanut Butter Milkshake",
    "Kit Kat Milkshake",
    "Caramel Milkshake",
    "Pineapple Milkshake",
    "Blueberry Milkshake",
    "Pista Milkshake",
    "Almond Milkshake",
    "Rose Milkshake",
    "Coconut Milkshake",
    "Chikoo Milkshake",
    "Papaya Milkshake",
    "Sprite",
    "Coca Cola",
    "Mirinda",
    "Fanta",
    "Maaza",
    "Thums Up",
    "Pepsi",
    "Mountain Dew"
];
const dessertsDrinksPrices = [60, 70, 80, 90, 50, 60, 70, 80, 90, 100, 80, 90, 60, 70, 80, 90, 100, 80, 70, 60, 80, 60, 70, 80, 90, 100, 80, 90, 60, 70, 80, 90, 100, 80, 70, 60, 80, 60, 70, 80, 90, 100, 80, 90, 60, 70, 80, 90, 100, 80, 70, 60, 80, 60, 70, 80, 90, 100, 80, 90]; // Add prices for each dessert & drink

// Function to display menu
function displayMenu(category, items, prices) {
    const menuDiv = document.getElementById("menu");
    menuDiv.innerHTML = `<h2>${category}</h2>`;
    for (let i = 0; i < items.length; i++) {
        menuDiv.innerHTML += `<div>${items[i]} - Rs. ${prices[i]}</div>`;
    }
}

// Display menu when page loads
window.onload = function() {
    displayMenu("Soups", soups, soupPrices);
    displayMenu("Starters", starters, starterPrices);
    displayMenu("Breads", breads, breadsPrices);
    displayMenu("Biryanis", biryanis, biryanisPrices);
    displayMenu("Desserts & Drinks", dessertsDrinks, dessertsDrinksPrices);
};
