const noteArea = document.getElementById("noteArea");

noteArea.value = localStorage.getItem("notes") || "";

noteArea.addEventListener("input", () => {
    localStorage.setItem("notes", noteArea.value);
});
