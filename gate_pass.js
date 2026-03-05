document.getElementById("gateForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    let fields = [
        "name", "year", "dept", "regno", "place", "purpose",
        "outDate", "outTime", "outPeriod",
        "inDate", "inTime", "inPeriod"
    ];

    // clear errors
    document.querySelectorAll(".error").forEach(el => el.innerText = "");

    fields.forEach(id => {
        let value = document.getElementById(id).value.trim();
        if (value === "") {
            showError(id, "This field is required");
            valid = false;
        }
    });

    if (!valid) return;

    // SUCCESS
    document.getElementById("success").innerText = "Gate Pass Submitted Successfully!";
    document.getElementById("gateForm").reset();
});

// SHOW ERROR
function showError(id, message) {
    document.getElementById(id).parentElement.querySelector(".error").innerText = message;
}