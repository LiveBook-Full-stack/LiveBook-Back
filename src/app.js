document.querySelector(".modal").addEventListener("click", function() {
    console.log("Event change triggered");
    el.classList.add('active');
    error.textContent = '';
    alert('Action completed!');
});