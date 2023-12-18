document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Extract form data
    var name = document.getElementById('petname').value;
    var weight = document.getElementById('petwt').value;
    var type = document.getElementById('pettype').value;
    var age = document.getElementById('petage').value;
    var likes = document.getElementById('petlikes').value;

    function Pet(name, age, weight, type, likes) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.type = type;
        this.likes = likes;
    }
    var petObject = new Pet(name, age, weight, type, likes);

    // Convert JavaScript object to JSON string
    var jsonData = JSON.stringify(petObject, null, 2); // Use null and 2 for pretty formatting

    // Display JSON string
    console.log(petObject);
    console.log(jsonData);

});