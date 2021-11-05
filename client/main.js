const baseURl = `http://localhost:4000/api/client`



document.getElementById("gherboButton").onclick = function () {
    axios.get("http://localhost:4000/api/gherbo/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

document.getElementById("yomamaButton").onclick = function () {
    axios.get("http://localhost:4000/api/yomama/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };
document.getElementById("inspireButton").onclick = function () {
    axios.get("http://localhost:4000/api/inspire/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };
document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };
  document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

