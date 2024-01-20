function makeCall() {
  window.location.href = "tel:8173923599";
}

// whatApp
function redirectToWhatsAppChat() {
  // const whatsappNumber = "9305243187";

  // Create the WhatsApp link
  var whatsappLink = "https://api.whatsapp.com/send?phone=" + 918173923599;

  // Redirect the user to the WhatsApp chat
  window.location.href = whatsappLink;
}

// function to redirect me to other pages

function redirectToHome() {
  window.location.href = "index.html";
}
function redirectToCarRental() {
  window.location.href = "cab-service-gorakhpur.html";
}

function redirectToOurService() {
  window.location.href = "our-services.html";
}

function redirectToAboutUs() {
  window.location.href = "about-us.html";
}

function redirectToBestTour() {
  window.location.href = "best-tour.html";
}

function redirectToDestination() {
  window.location.href = "places.html";
}

// for cards
// Sample data in an array of objects
const carData = [
  {
    name: "Swift Dzire",
    price: "Rs.11/- Per km",
    extraKmPrice: "Rs.11/- Per km",
    extraHoursPrice: "Rs. 120/-per Hour",
    nightCharge: "Rs. 300/-",
    outStationPrice: "11/Km (250/Day)",
    imageUrl: "assets/images/car-retnal/swift.jpg",
  },
  {
    name: "Suzuki Ciaz",
    price: "Rs.12/- Per km",
    extraKmPrice: "Rs.12/- Per km",
    extraHoursPrice: "Rs. 125/-per Hour",
    nightCharge: "Rs. 300/-",
    outStationPrice: "12/Km (250/Day)",
    imageUrl: "assets/images/car-retnal/ciaz.jpg",
  },
  {
    name: "Hyundai Verna ",
    price: "Rs.14/- Per km",
    extraKmPrice: "Rs.14/- Per km",
    extraHoursPrice: "Rs. 200/-per Hour",
    nightCharge: "Rs. 300/-",
    outStationPrice: "14/Km (300/Day)",
    imageUrl: "assets/images/car-retnal/verna.jpeg",
  },
  {
    name: "Suzuki Ertiga",
    price: "Rs.13/- Per km",
    extraKmPrice: "Rs.13/- Per km",
    extraHoursPrice: "Rs. 160/-per Hour",
    nightCharge: "Rs. 300/-",
    outStationPrice: "13/Km (250/Day)",
    imageUrl: "assets/images/car-retnal/Ertiga.jpeg",
  },
  {
    name: "Kia Carence",
    price: "Rs.14/- Per km",
    extraKmPrice: "Rs.14/- Per km",
    extraHoursPrice: "Rs. 170/-per Hour",
    nightCharge: "Rs. 300/-",
    outStationPrice: "14/Km (300/Day)",
    imageUrl: "assets/images/car-retnal/Kia .jpeg",
  },
  {
    name: "Innova",
    price: "Rs.15/- Per km",
    extraKmPrice: "Rs.15/- Per km",
    extraHoursPrice: "Rs. 230/-per Hour",
    nightCharge: "Rs. 300/-",
    outStationPrice: "18/Km (250/Day)",
    imageUrl: "assets/images/car-retnal/innova.jpeg",
  },
  {
    name: "Innova Crysta",
    price: "Rs.18/- Per km",
    extraKmPrice: "Rs.18/- Per km",
    extraHoursPrice: "Rs. 260/-per Hour",
    nightCharge: "Rs. 300/-",
    outStationPrice: "18/Km (400/Day)",
    imageUrl: "assets/images/car-retnal/innova.jpeg",
  },
  {
    name: "BMW 5 series",
    price: "Rs. 25000 + Oil: 5kmpl",
    extraKmPrice: " ",
    extraHoursPrice: " ",
    nightCharge: " ",
    outStationPrice: " ",
    imageUrl: "assets/images/car-retnal/bmw5.jpeg",
  },
  {
    name: "BMW 7 series",
    price: "Rs. 25000 + Oil: 5kmpl",
    extraKmPrice: " ",
    extraHoursPrice: " ",
    nightCharge: " ",
    outStationPrice: " ",
    imageUrl: "assets/images/car-retnal/bmw7.jpeg",
  },
  {
    name: "Audi A6",
    price: "Rs. 20000 + Oil: 5kmpl",
    extraKmPrice: " ",
    extraHoursPrice: " ",
    nightCharge: " ",
    outStationPrice: " ",
    imageUrl: "assets/images/car-retnal/audi.jpg",
  },
  {
    name: "Wedding Car Open Model",
    price: "Rs. 35000 + Oil: 5kmpl",
    extraKmPrice: " ",
    extraHoursPrice: " ",
    nightCharge: " ",
    outStationPrice: " ",
    imageUrl: "assets/images/car-retnal/open_model.jpg",
  },
  {
    name: "Verna Wedding Car",
    price: "Rs. 12000 + Oil: 10kmpl",
    extraKmPrice: " ",
    extraHoursPrice: " ",
    nightCharge: " ",
    outStationPrice: " ",
    imageUrl: "assets/images/car-retnal/werna_wedding.jpg",
  },
  {
    name: "Ciaz Wedding Car",
    price: "Rs. 8000 + Oil: 10kmpl",
    extraKmPrice: " ",
    extraHoursPrice: " ",
    nightCharge: " ",
    outStationPrice: " ",
    imageUrl: "assets/images/car-retnal/ciaz_wedding.jpg",
  },
  {
    name: "Force Traveller 12 seater",
    price: "Rs.28/- Per km",
    extraKmPrice: "Rs.28/- Per km",
    extraHoursPrice: "Rs. 350/-per Hour",
    nightCharge: "Rs. 500/-",
    outStationPrice: "28/Km (400/Day)",
    imageUrl: "assets/images/car-retnal/12-seater.jpg",
  },
  {
    name: "Force Traveller 15 seater",
    price: "Rs.35/- Per km",
    extraKmPrice: "Rs.35/- Per km",
    extraHoursPrice: "Rs. 350/-per Hour",
    nightCharge: "Rs. 500/-",
    outStationPrice: "35/Km (400/Day)",
    imageUrl: "assets/images/car-retnal/15-seater.jpg",
  },
  {
    name: "Force Traveller 17 seater",
    price: "Rs.40/- Per km",
    extraKmPrice: "Rs.40/- Per km",
    extraHoursPrice: "Rs. 350/-per Hour",
    nightCharge: "Rs. 500/-",
    outStationPrice: "40/Km (400/Day)",
    imageUrl: "assets/images/car-retnal/17-seater.jpg",
  },
  {
    name: "Force Traveller 20 seater",
    price: "Rs.43/- Per km",
    extraKmPrice: "Rs.43/- Per km",
    extraHoursPrice: "Rs. 350/-per Hour",
    nightCharge: "Rs. 500/-",
    outStationPrice: "43/Km (400/Day)",
    imageUrl: "assets/images/car-retnal/18-seater-2x1.jpeg",
  },
  {
    name: "Force Traveller 26 seater",
    price: "Rs.50/- Per km",
    extraKmPrice: "Rs.50/- Per km",
    extraHoursPrice: "Rs. 350/-per Hour",
    nightCharge: "Rs. 500/-",
    outStationPrice: "50/Km (400/Day)",
    imageUrl: "assets/images/car-retnal/18-seater-2x1.jpeg",
  },
  {
    name: "Bus Wedding 45 Seater",
    price: "Contact us",
    extraKmPrice: "",
    extraHoursPrice: "",
    nightCharge: "",
    outStationPrice: "",
    imageUrl: "assets/images/car-retnal/bus-hire.jpg",
  },
  {
    name: "Bus Wedding 52 Seater",
    price: "Contact us",
    extraKmPrice: "",
    extraHoursPrice: "",
    nightCharge: "",
    outStationPrice: "",
    imageUrl: "assets/images/car-retnal/bus_last.jpg",
  },
];

// Get the card container element
const cardContainer = document.getElementById("cardContainer");

// Iterate through the carData array and create cards
carData.forEach((car) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("col-sm-4", "col-md-4");

  cardDiv.innerHTML = `
    <div class="thumbnail">
      <div class="thumbnail-img">
        <img src="${car.imageUrl}" alt="Car Image" />
        <div class="thumbnail-img-overlay"></div>
      </div>
      <div class="caption">
        <div class="blog-txt">
          <h2 class="text-center" style="font-size: 2rem; padding: 0 0 10px 0;">${car.name}</h2>
          <table class="table table-striped">
            <tbody>
              <tr>
                <td>PRICE</td>
                <td>${car.price}</td>
              </tr>
              <tr>
                <td>EXTRA KM PRICE</td>
                <td>${car.extraKmPrice}</td>
              </tr>
              <tr>
                <td>Extra Hours</td>
                <td>${car.extraHoursPrice}</td>
              </tr>
              <tr>
                <td>Night Charge</td>
                <td>${car.nightCharge}</td>
              </tr>
              <tr>
                <td>Out Station</td>
                <td>${car.outStationPrice}</td>
              </tr>
              <tr>
                <td>
                <button class="about-view packages-btn" onclick="redirectToWhatsAppChat()">book now</button>
                </td>
                <td>
                <button class="about-view packages-btn" onclick="makeCall()">Call now</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  cardContainer.appendChild(cardDiv);
});
