const navbar = document.querySelector('nav')

window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
})

const phoneNumber = "2349078729164";
let message = "Hello.\nI would like to place an order for";
const message_btn = document.querySelector('.message_btn')

const whatsappLink =
    `https://wa.me/+${phoneNumber}?text=${encodeURIComponent(message)}`;


message_btn.addEventListener('click', ()=>{
  window.open(whatsappLink, "_blank");
})

const copyright = document.querySelector('.copyright')

copyright.innerHTML = `&copy Tebula ${new Date().getFullYear()}`

console.log(copyright)
// import { Analytics } from "@vercel/analytics/next"

// fetch("foods.json")
//     .then(response => response.json())
//     .then(data => {

//         const foodTables = document.getElementById("foodTables");

//         Object.keys(data).forEach(category => {

//             // Create category section
//             const section = document.createElement("section");

//             // Category heading
//             const heading = document.createElement("h2");
//             heading.textContent = category;

//             // Create table
//             const table = document.createElement("table");
//             table.classList.add("product-table")

//             table.innerHTML = `
//                 <thead>
//                     <tr>
//                         <th>Food</th>
//                         <th>Price</th>
//                     </tr>
//                 </thead>

//                 <tbody></tbody>
//             `;

//             const tbody = table.querySelector("tbody");


//             // Add foods to the table
//             data[category].forEach(food => {

//                 const row = document.createElement("tr");

//                 row.innerHTML = `
//                     <td class='left'>${food.name}</td>
//                     <td>₦${food.price.toLocaleString()}</td>
//                 `;

//                 tbody.appendChild(row);


//                 //THIS IS FOR ORDERING A SPECIFIC ITEM ON THE MENU
                
//                 // row.addEventListener("click", () => {
//                 //     message = 
//                 //     `Hello \nI would like to place an order for ${food.name} at the price of ₦${food.price.toLocaleString()}`
//                 //     window.open(`https://wa.me/+${phoneNumber}?text=${encodeURIComponent(message)}`)
//                 // })
//             });

//             // Add heading and table to section
//             section.appendChild(heading);
//             section.appendChild(table);

//             // Add section to page
//             foodTables.appendChild(section);
//         });

        

//     })
//     .catch(error => {
//         console.error("Error loading food data:", error);
//     });

    