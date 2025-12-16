let plans = JSON.parse(localStorage.getItem("plans")) || [];

function displayPlans() {
    const list = document.getElementById("planList");
    list.innerHTML = "";

    plans.forEach((plan, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${plan.subject}</strong><br>
            ${plan.date} at ${plan.time}
            <br><br>
            <button onclick="deletePlan(${index})">Delete</button>
        `;
        list.appendChild(li);
    });
}

function addPlan() {
    const subject = document.getElementById("subject").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (subject === "" || date === "" || time === "") {
        alert("Please fill all fields");
        return;
    }

    plans.push({ subject, date, time });
    localStorage.setItem("plans", JSON.stringify(plans));

    document.getElementById("subject").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";

    displayPlans();
}

function deletePlan(index) {
    plans.splice(index, 1);
    localStorage.setItem("plans", JSON.stringify(plans));
    displayPlans();
}

displayPlans();
