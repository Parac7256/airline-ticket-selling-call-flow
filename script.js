function switchMode(mode) {
  currentMode = mode;
  const bgColor = (mode === 'direct') ? '#2c3e50': '#f06d06';
  document.body.style.setProperty('background-color', bgColor, 'important');
  const scripts = document.querySelectorAll('[data-poetic]');
  scripts.forEach(el => {
    const newText = el.getAttribute('data-'+ mode);
    if (newText) {
      el.innerText = newText;
    }
  });
}
//====================================
function showFlightDates() {
  document.getElementById("screen-splash").style.display="none";
  document.getElementById("flight-date").style.display="block";
}
function showDiscovery() {
  document.getElementById("screen-discovery").style.display="block";
  document.getElementById("flight-date").style.display="none";
}
function backFromDestination(){
  document.getElementById("screen-discovery").style.display="none";
  document.getElementById("flight-date").style.display="block";
}
function showSplash() {
  document.getElementById("screen-splash").style.display= "block";
  document.getElementById("flight-date").style.display ="none";
}
function showFamilyVisit() {
  lastScreen="family-visit"
  document.getElementById("screen-discovery").style.display = "none";
  document.getElementById("family-visit").style.display ="block";
}
function backToDiscovery() {
  document.getElementById("screen-discovery").style.display = "block";
  document.getElementById("family-visit").style.display ="none";
}
function showProbing()  {
  document.getElementById("probing-questions").style.display="block"; 
  document.getElementById("family-visit").style.display="none";
}
function goToPreferences() {
  document.getElementById("preferences").style.display="block";
  document.getElementById("probing-questions").style.display="none";
}
function showMarketPrice2() {
  document.getElementById("market-price").style.display="block";
  document.getElementById("preferences").style.display="none";
}
function showLeisure() {
  lastScreen="leisure"
  document.getElementById("leisure").style.display="block";
  document.getElementById("screen-discovery").style.display="none";
}
function showBusiness() {
  lastScreen="business"
  document.getElementById("business").style.display="block";
  document.getElementById("screen-discovery").style.display="none";
}
let lastScreen = "screen-discovery";
function backFromProbingQuestions() {
  document.getElementById("probing-questions").style.display="none";
  if (lastScreen === "family-visit") {
    document.getElementById("family-visit").style.display="block";
  } else if (lastScreen === "leisure") {
    document.getElementById("leisure").style.display="block";
  } else if (lastScreen === "business") {
    document.getElementById("business").style.display="block";
  } else {
    document.getElementById("screen-discovery").style.display="block";
  }
}
function showPriceOffer() {
  document.getElementById("market-price").style.display="none";
  document.getElementById("price-offer").style.display="block";
}
function calculateAll() {
  let cheapBase = parseFloat(document.getElementById("price-cheap").value) || 0;
  let convBase = parseFloat(document.getElementById("price-conv").value) || 0;
  let goldenBase = parseFloat(document.getElementById("price-golden").value) || 0;
  
  let multiplier = 1.0;
  let protRadios = document.getElementsByName("prot");
  
  for (let i = 0; i < protRadios.length; i++) {
    if (protRadios[i].checked) {
      multiplier = parseFloat(protRadios[i].value);
    }
  }
  let membershipFee = 0;
  let memberRadios = document.getElementsByName("membership");
  for (let j = 0; j < memberRadios.length; j++) {
    if (memberRadios[j].checked) {
      membershipFee = parseFloat(memberRadios[j].value);
    }
  }
  document.getElementById("final-cheap").innerText = ((cheapBase * multiplier) + membershipFee).toFixed(2);
  document.getElementById("final-conv").innerText = ((convBase * multiplier) + membershipFee).toFixed(2);
  document.getElementById("final-golden").innerText = ((goldenBase * multiplier) + membershipFee).toFixed(2);
}
function backFromPriceOffer() {
  document.getElementById("price-offer").style.display="none";
  document.getElementById("market-price").style.display="block";
}
function showOfferingOptions() {
  document.getElementById("price-offer").style.display="none";
  document.getElementById("offering-options").style.display="block";
}
function backToPriceOffer() {
  document.getElementById("price-offer").style.display="block";
  document.getElementById("offering-options").style.display="none";
}
function syncPrices() {
  let  c = document.getElementById("price-cheap").value;
  let v = document.getElementById("price-conv").value;
  let g = document.getElementById("price-golden").value;
  
  document.getElementById("final-cheap").innerText = c ||"0.00";
  document.getElementById("final-conv").innerText = v ||"0.00";
  document.getElementById("final-golden").innerText = g || "0.00";
}
function show(val) {
    let box1 = document.getElementById("script-box");
    let box2 = document.getElementById("script-box2");
    let box3 = document.getElementById("script-box3");
    let box4 = document.getElementById("script-box4");
    let box5 = document.getElementById("script-box5");

    if (val == 1) {
        box1.innerHTML = "Thank you for calling ASAPTickets, this is Cluster speaking. How may I help you with your travel plans?";
    } else if (val == 2) {
        box1.innerHTML = "Hi, this is Cluster from ASAPTickets. I'm calling regarding the flight inquiry you recently submitted. How are you today?";
    } else if (val == 3) {
        box1.innerHTML = "Hi, this is Cluster from the promotional team. I'm calling because we have an ongoing promotion for your pending request.";
    } else if (val == 4) {
        box1.innerHTML = "Hi, this is Cluster. I'm calling to see how things work with your plan to book a ticket. I've found some great new rates.";
    } else if (val == 5) {
        box2.innerHTML = "<i>I can see that you are travelling so soon. I hope this is not for any emergency./What's the purpose of this trip?</i>";
    } else if (val == 9) {
        box2.innerHTML = "<i>I can see that you are planning to travel in a high season. Is it for vacation or family visit?</i>";
    } else if (val == 6) {
        box2.innerHTML = "<i>I commend you for searching a ticket ahead of time. I'm guessing this is for a very special occasion, right?</i>";
    } else if (val == 7) {
        box3.innerHTML = "<i>Wow, it's been a while since then, I'm sure your family is counting down the days until you arrive!</i>";
    } else if (val == 8) {
        box3.innerHTML = "<i>Oh, you were just there recently? That's great! You must be very close to your family to be heading back so soon.</i>";
    } else if (val == 10) {
        box4.innerHTML = "<i>Great! Atleast you might know that looking for a ticket for---(see checkbox)---is a high demands. But it's fine, I  will manually build a flight for you to our Central Agency for us to get a cheaper ticket than what is available online.</i>";
    } else if (val == 11) {
        box4.innerHTML = "<i>I see! because as a travel agent, I always remind my passengers to book their ticket ahead of time especially if they are planning to travel ----(see checkbox)----. But it's fine, I will manually build a flight for you to our Central Agency for us to get a cheaper ticket than what is avaialble online.</i>";
    } else if (val == 12) {
        box5.innerHTML = "<i></i>";
    } else if (val == 13) {
        box5.innerHTML = "<i>I see! because as a travel agent, I always remind my passengers to book their ticket ahead of time especially if they are planning to travel ----(see checkbox)----. But it's fine, I will manually build a flight for you to our Central Agency for us to get a cheaper ticket than what is avaialble online.</i>";
    }
}
const inputDiscovery = document.getElementById('discovery');
const displayDiscovery = document.getElementById('destination-display');
const displayFamily = document.getElementById('family-destination-display');
inputDiscovery.addEventListener('input', function() {
  const city = inputDiscovery.value|| "________";
displayDiscovery.textContent = city;
  if (displayFamily) {
    displayFamily.textContent = city;
  }
})
const input2 = document.getElementById('ssf-script');
const display2 = document.getElementById('ssf-display');
input2.addEventListener('input', function() {
  display2.textContent = input2.value || "_______";
})
function showPromotionalDeal() {
  document.getElementById("promotional-deal").style.display="block";
  document.getElementById("screen-discovery").style.display="none";
}
function backFromSSF() {
  document.getElementById("promotional-deal").style.display="none";
  document.getElementById("screen-discovery").style.display="block";
}
function goToEssentials() { document.getElementById("probe3").style.display="none"; document.getElementById("preferences").style.display="block";
}
function showMarketData() { document.getElementById("market-data").style.display="block"; document.getElementById("preferences").style.display="none";
}
function backFromMarketData() { 
  document.getElementById("market-data").style.display="none";       document.getElementById("preferences").style.display="block";
}
function showPage(pageId) {
  const screens = document.querySelectorAll('div.container[id]');
  screens.forEach(s => s.style.display = 'none');
  const target = document.getElementById(pageId);
  if (target) {
    target.style.display = 'block';
  } else {
    console.error("Page ID not found: " + pageId);
  }
}
function searchPlace() {
  
  
  const place = document.getElementById('discovery').value;
  if (place.trim() !== "") {
    const query = "what is " + place + " known for?";
    window.open("https://www.google.com/search?q=" + encodeURIComponent(query), "_blank");
  } else {
    alert("Place enter a place first!");
  }
}
function searchFlight(site) {
  let url = "";
  
    const from = document.getElementById('dep-input').value; 
    const to = document.getElementById('arr-input').value;  
    const date = document.getElementById('Departure-Date').value; 
    const retDate = document.getElementById('Return-Date').value;   
  
    const adt = flightData.pax.adult;
    const chd = flightData.pax.child;
    const infSeat = flightData.pax.infantSeat;
    const infLap = flightData.pax.infantLap;
  
  switch(site) {
    case 'justfly':
    // Start the URL with the departure (seg0)
    url = `https://www.justfly.com/flight/search?seg0_from=${from}&seg0_to=${to}&seg0_date=${date}`;

    // Add the return segment (seg1) only if Round trip is selected
    if (flightData.tripType === 'Round trip') {
        // Swap from/to and use the retDate we captured above
        url += `&seg1_from=${to}&seg1_to=${from}&seg1_date=${retDate}`;
    }

    // IMPORTANT: Note the '&' at the start of this string to join it correctly
    url += `&num_adults=${adt}&num_children=${chd}&num_infants=${infSeat}&num_infants_lap=${infLap}`;
    break;
    case 'kayak':
    // 1. Determine the path based on trip type
    let tripPath = (flightData.tripType === 'Round trip') ? `${from}-${to}/${date}/${retDate}` : `${from}-${to}/${date}`;

    // 2. Construct the full URL
    // Kayak uses a slash-based system for routes and dates
    url = `https://www.kayak.com/flights/${tripPath}?sort=bestflight_a`;

    // 3. Append passenger data (Kayak uses 'adults', 'children', etc.)
    url += `&adults=${adt}&children=${chd}&infants=${infSeat}&infantlap=${infLap}`;
    break;
    // Expedia
case 'expedia':
    url = `https://www.expedia.com/Flights-Search?leg1=from:${from},to:${to},departure:${date}TANYT`;
    if (flightData.tripType === 'Round trip') {
        url += `&leg2=from:${to},to:${from},departure:${retDate}TANYT&mode=roundtrip`;
    } else {
        url += `&mode=oneway`;
    }
    url += `&passengers=adults:${adt},children:${chd},infantinlap:${infLap},infantinseat:${infSeat}`;
    break;

// ITA Matrix (Google)
case 'ita':
    // ITA usually requires a specific format: origin:from, destination:to
    url = `https://matrix.itasoftware.com/search?search=true&slices=[{"origins":["${from}"],"destinations":["${to}"],"dates":{"specificDate":"${date}"}}`;
    if (flightData.tripType === 'Round trip') {
        url += `,{"origins":["${to}"],"destinations":["${from}"],"dates":{"specificDate":"${retDate}"}}]`;
    } else {
        url += `]`;
    }
    url += `&pax={"adults":${adt},"children":${chd},"infantsInLap":${infLap},"infantsInSeat":${infSeat}}`;
    break;

// Booking.com
case 'booking':
    url = `https://www.booking.com/flights/search.html?type=${flightData.tripType === 'Round trip' ? 'roundtrip' : 'oneway'}`;
    url += `&from=${from}&to=${to}&departure=${date}`;
    if (flightData.tripType === 'Round trip') url += `&return=${retDate}`;
    url += `&adults=${adt}&children=${chd}&infants=${infSeat + infLap}`;
    break;

// FlightHub (Very similar to JustFly)
case 'flighthub':
    url = `https://www.flighthub.com/flight/search?seg0_from=${from}&seg0_to=${to}&seg0_date=${date}`;
    if (flightData.tripType === 'Round trip') {
        url += `&seg1_from=${to}&seg1_to=${from}&seg1_date=${retDate}`;
    }
    url += `&num_adults=${adt}&num_children=${chd}&num_infants=${infSeat}&num_infants_lap=${infLap}`;
    break;

// Google Travel Explore
case 'googleflights':
    // Explore is great for open-ended searches
    url = `https://www.google.com/travel/explore?q=flights+from+${from}+to+${to}+on+${date}`;
    if (flightData.tripType === 'Round trip') url += "+return+" + retDate;
    break;
      case 'map':
    // Use 'dir' to show the travel path between the two points
    url = `https://www.google.com/maps/dir/${from}+Airport/${to}+Airport/data=!4m2!4m1!3e4`;
    break;
      
  } if (url) {
    window.open(url, '_blank');
  }
}
function showActualSale() {
  document.getElementById("market-data").style.display ="none";
  document.getElementById("market-price").style.display = "block";
}
//===============================================
const setupAutocomplete = (inputId, resultsId) => {
  const input = document.getElementById(inputId);
  const results = document.getElementById(resultsId);
  
  input.addEventListener('input', async () => {
    const query = input.value;
    if (query.length < 2) {
      results.style.display = 'none';
      return;
    }
    const url = `https://autocomplete.travelpayouts.com/places2?term=${query}&locale=en&types[]=airport&types[]=city`;
    try {
      const response = await fetch(url);
      const data =await response.json();
      results.innerHTML = '';
      
      if (data.length > 0) {
        results.style.display = 'block';
        data.forEach(place => {
          const div = document.createElement('div');
          div.className - 'result-item';
          div.innerText = `${place.code} - ${place.name}`;
          
          div.onclick = () => {
            input.value = place.code;
            results.style.display = 'none';
            
            const sumId = (inputId === 'dep-input') ? 'sum-dep' : 'sum-arr';
            document.getElementById(sumId).innerText = place.code;
          };
          results.appendChild(div);
        });
      }
    } catch (error) {  console.error(error); }
  });
}
setupAutocomplete('dep-input', 'dep-results');
setupAutocomplete('arr-input', 'arr-results');
//==================
function setTripType(type) {
    flightData.tripType = type;
    document.getElementById('sum-type').innerText = type;
    
    // Remove active class from all buttons and add to the clicked one
    document.querySelectorAll('.trip-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    const retContainer = document.getElementById('ret-container');
    
    if (type === 'One way') {
        retContainer.style.display = 'none';
    } else {
        // This handles 'Round trip'
        retContainer.style.display = 'block';
    }
}
//===================================
 document.getElementById('time').addEventListener('input', function() {
    document.getElementById('sum-last-visit').innerText = this.value;
});
// Listener for Online Price
document.getElementById('online-price').addEventListener('input', function() {
    document.getElementById('sum-online-price').innerText = this.value || '---';
});

document.getElementById('date-price').addEventListener('input', function() {
    document.getElementById('sum-date-price').innerText = this.value || '---';
});
document.getElementById('website-type').addEventListener('input', function() {
    document.getElementById('sum-website-type').innerText = this.value || '---';
});
document.getElementById('customer-needs').addEventListener('input', function() {
    document.getElementById('sum-customer-needs').innerText = this.value || '---';
});
document.getElementById('discovery').addEventListener('input', function() {
    document.getElementById('destination').innerText = this.value || '---';
});
document.getElementById('arrive').addEventListener('input', function() {
    document.getElementById('sum-arrive').innerText = this.value || '---';
});
document.getElementById('pax-name').addEventListener('input', function() {
    document.getElementById('sum-pax-name').innerText = this.value || '---';
});
document.getElementById('online-price-input').addEventListener('input', function() {
    document.getElementById('sum-online-price').innerText = this.value || '---';
});

   
//====================================
function resetAllData() {
 document.getElementById('sum-type').innerText = '___';
 document.getElementById('sum-dep').innerText = '___';
 document.getElementById('sum-arr').innerText = '___';
 document.getElementById('dep-date').innerText = '___';
 document.getElementById('ret-date').innerText = '___';
 document.getElementById('sum-last-visit').innerText = '___';
 document.getElementById('sum-online-price').innerText = '___';
 document.getElementById('sum-date-price').innerText = '___';
 document.getElementById('sum-website-type').innerText = '___';
 document.getElementById('sum-customer-needs').innerText = '___';
 document.getElementById('destination').innerText = '___';
 document.getElementById('sum-arrive').innerText = '___';
 document.getElementById('floating-map-btn').style.display = 'none';
  document.getElementById('sum-pax-name').innerText = '___';
  document.getElementById('sum-online-price').innerText = '___';
  

  
 
  
  const inputs = document.querySelectorAll('.flight-input');
  inputs.forEach(input => {
    input.value = "";
  });
 
  document.getElementById('dep-input').value ="";
  document.getElementById('arr-input').value ="";
  document.getElementById('Departure-Date').value ="";
  document.getElementById('Return-Date').value ="";
  document.getElementById('time').value = "";
  document.getElementById('online-price').value = "";
  document.getElementById('date-price').value = "";
  document.getElementById('website-type').value = "";
  document.getElementById('customer-needs').value = "";
  document.getElementById('discovery').value = "";
  document.getElementById('arrive').value = "";
  document.getElementById('pax-name').value = "";
  document.getElementById('online-price-input').value = "";
 
  
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => {cb.checked = false;                                                      });
  document.querySelectorAll('input[type="radio"]').forEach(radio => {radio.checked = false;                                                  });
  const paxBox = document.getElementById('pax-script-display');
  const visitBox = document.getElementById('visit-script-display');
  
  if (paxBox) paxBox.innerText = "";
  if (visitBox) visitBox.innerText = "";
  
  
  
  console.log("System Reset: Clear for next call");
  alert("All flight details will be cleared.");
}
//============================================
function updateSummaryDates() {
    const depDateValue = document.getElementById('Departure-Date').value;
    const retDateValue = document.getElementById('Return-Date').value;

    const options = { month: 'short', day: 'numeric', year: 'numeric' };

    if (depDateValue) {
        // REPLACE hyphens with slashes to fix the "minus 1 day" bug
        const localDep = depDateValue.replace(/-/g, '/'); 
        const formattedDep = new Date(localDep).toLocaleDateString('en-US', options);
        document.getElementById('dep-date').innerText = formattedDep;
    }

    if (retDateValue) {
        // REPLACE hyphens with slashes here too
        const localRet = retDateValue.replace(/-/g, '/');
        const formattedRet = new Date(localRet).toLocaleDateString('en-US', options);
        document.getElementById('ret-date').innerText = formattedRet;
    }
}
//=============================
document.getElementById('Departure-Date').addEventListener('change', updateSummaryDates);
document.getElementById('Return-Date').addEventListener('change', updateSummaryDates);
//=====================================
var flightData = {
  tripType: 'Round trip',
  departure: '',
  arrival: '',
  depDate: '',
  retDate: '',
  pax: {
    adult: 1,
    child: 0,
    infantSeat: 0,
    infantLap: 0
}
};
//======================================
function changePax(type, delta) {
    // 1. Find the correct span based on the type (adult, child, infantSeat, infantLap)
    const qtySpan = document.getElementById(`${type}-qty`);
    
    // 2. Get the current number and calculate the new total
    let currentQty = parseInt(qtySpan.innerText);
    let newQty = currentQty + delta;

    // 3. Prevent negative numbers (and ensure at least 1 adult)
    if (type === 'adult' && newQty < 1) return; 
    if (newQty < 0) return;

    // 4. Update the number on the screen
    qtySpan.innerText = newQty;

    // 5. Update the summary count at the top (Optional, but looks pro)
    updateTotalPaxCount();

    // 6. UPDATE THE PRICING TABLE HEADERS
    updatePricingTable();
}
//======update pricing table========
function updatePricingTable() {
    // 1. Get the current numbers from your spans
    const adults = parseInt(document.getElementById('adult-qty').innerText) || 0;
    const children = parseInt(document.getElementById('child-qty').innerText) || 0;
    const infants = (parseInt(document.getElementById('infantSeat-qty').innerText) || 0) + 
                     (parseInt(document.getElementById('infantLap-qty').innerText) || 0);

    // 2. Map the counts to your table IDs
    const paxData = [
        { type: 'adult', count: adults },
        { type: 'child', count: children },
        { type: 'infant', count: infants }
    ];

    paxData.forEach(pax => {
        // Get the header, net input, and selling input for this type
        const header = document.getElementById(`header-${pax.type}`);
        const netCell = document.getElementById(`net-${pax.type}`).parentElement;
        const sellCell = document.getElementById(`sell-${pax.type}`).parentElement;

        // If count is 0, hide them. If count > 0, show them.
        if (pax.count === 0) {
            header.classList.add('hidden-column');
            netCell.classList.add('hidden-column');
            sellCell.classList.add('hidden-column');
        } else {
            header.classList.remove('hidden-column');
            netCell.classList.remove('hidden-column');
            sellCell.classList.remove('hidden-column');
            
            // Update the header text to show the current count
            header.innerText = `${pax.type.charAt(0).toUpperCase() + pax.type.slice(1)} ${pax.count}`;
        }
    });
}
//====================================

function updateTotalPaxCount() {
    const a = parseInt(document.getElementById('adult-qty').innerText);
    const c = parseInt(document.getElementById('child-qty').innerText);
    const iS = parseInt(document.getElementById('infantSeat-qty').innerText);
    const iL = parseInt(document.getElementById('infantLap-qty').innerText);
    
    const total = a + c + iS + iL;
    document.getElementById('sum-pax-count').innerText = total;
}
//============================================================
function toggleColumn(type, count) {
    const displayStyle = (count > 0) ? "" : "none";
    
    // Hide/Show Header
    document.getElementById(`header-${type}`).style.display = displayStyle;
    
    // Hide/Show Net and Selling inputs for that type
    document.getElementById(`net-${type}`).parentElement.style.display = displayStyle;
    document.getElementById(`sell-${type}`).parentElement.style.display = displayStyle;
}
//=========================================================
function updatePaxLabel() {
    const p = flightData.pax;
    const total = p.adult + p.child + p.infantSeat + p.infantLap;
  
    let label = total + " Passengers";
    if (total === 1) {
    label = "1 Adult";
  }
    const mainBtn = document.getElementById('sum-pax-count');
    if (mainBtn) {
        mainBtn.innerText = label;
    }
}
//=============================================================
function togglePassengerMenu() {
  const menu = document.getElementById('pax-dropdown');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block';
  }else {
    menu.style.display  = 'none';
  }
}
//===============================
function updatePreferences() {
    const checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked');
    
    // 2. Create a list of the names (e.g., "Rush, Weekends")
    const values = Array.from(checkboxes).map(cb => cb.value);
}
//==============================================================
function calculateMarkup() {
  const inputField = document.getElementById('online-price-input');
  const displaySpan = document.getElementById('markup-display');
  
  let originalPrice = parseFloat(inputField.value);
  
  if (!isNaN(originalPrice)) {
    let markedUpPrice = originalPrice * 1.3;
    
    displaySpan.innerText = "$" + markedUpPrice.toFixed(2);
    displaySpan.style.fontWeight = "bold";
    displaySpan.style.color = "#007bff";
  } else {
    displaySpan.innerText = "____";
  }
}
//====================================================
function togglePaxType(checkbox) {
    const isPairs = checkbox.checked;
    const type = isPairs ? "Pairs" : "Solo";
    const message = isPairs ? "Wow! Traveling together is always more fun." : "Great! Solo travel gives you so much flexibility.";

    // 2. NEW: Update the on-page script instead of an alert
    const scriptDiv = document.getElementById('pax-script-display');
    if (scriptDiv) {
        scriptDiv.textContent = message;
        
        // Optional: Add a quick fade-in effect
        scriptDiv.style.opacity = 0;
        setTimeout(() => { scriptDiv.style.opacity = 1; }, 50);
    }
}
function toggleVisitType(checkbox) {
    const isFirstTime = checkbox.checked;
    const visitStatus = isFirstTime ? "First Time" : "Repeat Visitor";
    const message = isFirstTime 
        ? "It's your first time! I'll make sure to find the most convenient flight for you." 
        : "Welcome back! Let's see if we can find your preferred route again.";
    // 2. Update the italic script display
    const scriptDiv = document.getElementById('visit-script-display');
    if (scriptDiv) {
        scriptDiv.textContent = message;
    }
}
function toggleEmp(checkbox) {
    const isDeceased = checkbox.checked;
    const visitStatus = isDeceased ? "Deceased" : "Illness";
    const message = isDeceased 
        ? "I am so incredibly sorry for your loss. I can only imagine how difficult this time is for you and your family." 
        : "I’m very sorry to hear about your family member's health. It sounds like a very stressful situation, and I appreciate you reaching out to us to help you get there.";
    // 2. Update the italic script display
    const scriptDiv = document.getElementById('empathy-script-display');
    if (scriptDiv) {
        scriptDiv.textContent = message;
    }
}
//===============================================================
function checkAirports() {
    const from = document.getElementById('dep-input').value.trim();
    const to = document.getElementById('arr-input').value.trim();
    const mapBtn = document.getElementById('floating-map-btn');
    if (from.length === 3 && to.length === 3) {
        mapBtn.style.display = 'block';
    } else {
        mapBtn.style.display = 'none';
    }
}
//==================================================

document.getElementById('dep-input').addEventListener('input', checkAirports);
document.getElementById('arr-input').addEventListener('input', checkAirports);
//=====Bereavement
function showBereavement() {
  document.getElementById("bereavement").style.display="block";
  document.getElementById("screen-discovery").style.display="none";
}
//======Calculate TCS===========================================
function calculateTCS(inputId, multiplier) {
    const inputField = document.getElementById(inputId);
    let basePrice = parseFloat(inputField.value);

    // Only calculate if the box has a number higher than 0
    if (!isNaN(basePrice) && basePrice > 0) {
        let newTotal = basePrice * multiplier;
        // Updates the input box with the new price, rounded to 2 decimals
        inputField.value = newTotal.toFixed(2); 
    } else {
        alert("Please enter a starting price first.");
    }
}
//========TCS calculation============
function applyTCSToAll(tier) {
    let markupRate = 0;
    let minMarkup = 0;

    // Logic for the new "None" button and your existing tiers
    if (tier === 'none') {
        markupRate = 0; // Just Net + (Net * 0)
        minMarkup = 0;
    } else if (tier === 'basic') {
        markupRate = 0.19;
        minMarkup = 49.97;
    } else if (tier === 'premium') {
        markupRate = 0.23;
        minMarkup = 54.97;
    } else if (tier === 'all') {
        markupRate = 0.25;
        minMarkup = 69.97;
    }

    // This targets all three columns in your "Actual Sale" table
    const passengerTypes = ['adult', 'child', 'infant'];

    passengerTypes.forEach(type => {
        const netInput = document.getElementById(`net-${type}`);
        const sellInput = document.getElementById(`sell-${type}`);
        
        if (netInput && sellInput) {
            const netPrice = parseFloat(netInput.value);
            
            // Only update if there is a number in the Net box
            if (!isNaN(netPrice) && netPrice > 0) {
                const calculatedMarkup = netPrice * markupRate;
                
                // For "None", actualMarkup will be 0. 
                // For others, it picks the markup or the floor
                const actualMarkup = Math.max(calculatedMarkup, minMarkup);
                
                const finalSellingPrice = netPrice + actualMarkup;
                sellInput.value = finalSellingPrice.toFixed(2);
            } else {
                sellInput.value = "0.00";
            }
        }
    });
}
//=============Dreampas calculation========
function applyDreamPass(totalMembershipFee) {
    // 1. Get the real count of people from your dropdown spans
    const adults = parseInt(document.getElementById('adult-qty').innerText) || 0;
    const children = parseInt(document.getElementById('child-qty').innerText) || 0;
    const infantsSeat = parseInt(document.getElementById('infantSeat-qty').innerText) || 0;
    const infantsLap = parseInt(document.getElementById('infantLap-qty').innerText) || 0;

    // The total people sharing the cost
    const totalPax = adults + children + infantsSeat + infantsLap;

    if (totalPax === 0) {
        alert("Please add passengers first!");
        return;
    }

    // 2. Divide the fee (e.g., 194.97 / 3 people)
    const feePerPerson = totalMembershipFee / totalPax;

    // 3. Update the Selling boxes for EVERYONE
    const categories = ['adult', 'child', 'infant'];

    categories.forEach(type => {
        const netInput = document.getElementById(`net-${type}`);
        const sellInput = document.getElementById(`sell-${type}`);
        
        if (netInput && sellInput) {
            const netValue = parseFloat(netInput.value) || 0;

            // Only add the fee if there is a price in the Net box
            if (netValue > 0) {
                let currentSelling = parseFloat(sellInput.value) || 0;
                let newSelling = currentSelling + feePerPerson;
                sellInput.value = newSelling.toFixed(2);
            } else {
                sellInput.value = "0.00";
            }
        }
    });
}
//====Clear Button 
function clearSellingPrices() {
    // We target 'adult', 'child', and 'infant' to match your table columns
    const fields = ['sell-adult', 'sell-child', 'sell-infant'];

    fields.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.value = "0.00";
        }
    });
}
//======Clear all button
function clearAllPrices() {
    // These IDs must match your HTML input IDs exactly
    const fields = [
        'net-adult', 'sell-adult', 
        'net-child', 'sell-child', 
        'net-infant', 'sell-infant'
    ];

    fields.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.value = "0.00";
        }
    });
}
