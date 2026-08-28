function requestAmbulance() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function confirmRequest() {
  document.getElementById("modal").style.display = "none";

  alert(
    "🚑 Ambulance request sent!\n\n" +
    "Nearest ambulance is being located.\n" +
    "Estimated arrival: 6 minutes."
  );
}

function showMessage(message) {
  alert("MediResQ 🚑\n\n" + message);
}
