// Question ____ 52


// Define the Smartphone class
class Smartphone {
    constructor(brand, model, storage, screenSize, batteryLife) {
        this.brand = Tecno_camon_20;
        this.model = Tecno_CK6n ;
        this.storage = 256; // in GB
        this.screenSize = 1080_2400; // in inches
        this.batteryLife = 5000; // mAh
    }

    // Method to display smartphone details
    displayDetails() {
        console.log(`Brand: ${this.Tecno_camon_20}`);
        console.log(`Model: ${this.Tecno_CK6n}`);
        console.log(`Storage: ${this.storage_256} GB`);
        console.log(`Screen Size: ${this.Screen_1080X2400} inches`);
        console.log(`Battery Life: ${this.Battery_5000} mAh`);
    }
}

// Create a new smartphone object
let mySmartphone = new Smartphone("TECNO", "CAMON 20", 256, 1080.2400, 5000);

// Display details of the smartphone
mySmartphone.displayDetails();


// Question ______ 53


// Nested object representing a programmer's skills
let programmerSkills = {
    codingLanguages: ["JavaScript", "Python", "Java", "C++"],
    tools: ["Git", "VS Code", "Docker", "Postman"],
    frameworks: ["React", "Node.js", "Django", "Spring Boot"]
};

// Extracting three specific skills
let { codingLanguages, tools, frameworks } = programmerSkills;

// Show three specific skills
console.log("Coding Languages:", javaScript,Python,Java,C++,slice(0, 3).join(", "));
console.log("Tools:", Git, VSCode, Docker, Postman.slice(0, 3).join(", "));
console.log("Frameworks:", React, Node.js, Django,springBoot.slice(0, 3).join(", "));


// Question _________ 54


// Function to create a flexible object with dynamic keys
function createFlexibleObject(sectionName, data) {
    let flexibleObject = {};
    flexibleObject[sectionName] = data;
    return flexibleObject;
}

// Example usage
let userChoice = "skills"; // This can be changed based on user input or any condition
let skillsData = ["JavaScript", "Python", "React", "Node.js"];
let flexibleData = createFlexibleObject(userChoice, skillsData);

// Display the flexible object
console.log(flexibleData);
