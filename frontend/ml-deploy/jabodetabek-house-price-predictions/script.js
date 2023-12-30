

function predictHouse() {
    // Retrieve values from the form
    var lokasi = document.getElementById("lokasi").value;
    var sertifikat = document.getElementById("sertifikat").value;
    var luasTanah = document.getElementById("luas-tanah").value;
    var luasBangunan = document.getElementById("luas-bangunan").value;
    var banyakLantai = document.getElementById("banyak-lantai").value;
    var banyakKamar = document.getElementById("banyak-kamar").value;
    var banyakKamarMandi = document.getElementById("banyak-kamar-mandi").value;
    var carports = document.getElementById("carports").value;
    var adaTidaknyaProperty = document.getElementById("ada-tidaknya-property").value;
    var kondisiProperty = document.getElementById("kondisi-property").value;
    
  // Construct the URL with query parameters based on your API endpoint
  var apiUrl = 'http://127.0.0.1:5000/api/model/predict?' +
    'lokasi=' + encodeURIComponent(lokasi) +
    '&sertifikat=' + encodeURIComponent(sertifikat) +
    '&luasTanah=' + encodeURIComponent(luasTanah) +
    '&luasBangunan=' + encodeURIComponent(luasBangunan) +
    '&banyakLantai=' + encodeURIComponent(banyakLantai) +
    '&banyakKamar=' + encodeURIComponent(banyakKamar) +
    '&banyakKamarMandi=' + encodeURIComponent(banyakKamarMandi) +
    '&carports=' + encodeURIComponent(carports) +
    '&adaTidaknyaProperty=' + encodeURIComponent(adaTidaknyaProperty) +
    '&kondisiProperty=' + encodeURIComponent(kondisiProperty);

  document.getElementById("loading-indicator").style.display = "block";

  // Make a GET request to the API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Process the data received from the API
      var predictionResult = data.preditct; // Modify this based on your API response structure

  // Display the result in a styled div
    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `
        <div class="prediction-result">
        <p class="result-text">Prediction: ${predictionResult}</p>
        <button type="button" onclick="clearForm()">Reset Isian</button>
        </div>
    `;

    document.getElementById("loading-indicator").style.display = "none";
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      // Display an error message if there is an issue with the API request
      document.getElementById("result").innerHTML = "Error fetching data. Please try again later.";
      document.getElementById("loading-indicator").style.display = "none";
    });
  }
  
  function clearForm(){
    document.getElementById("prediction-form").reset();

    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = ``;
  }