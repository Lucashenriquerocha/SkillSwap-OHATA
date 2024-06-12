// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const skills = [
        { name: "JavaScript", level: "80%" },
        { name: "HTML", level: "90%" },
        { name: "CSS", level: "85%" },
        { name: "Python", level: "70%" },
        { name: "Java", level: "60%" }
    ];

    const skillsContainer = document.getElementById("skills");

    skills.forEach(skill => {
        const skillElement = document.createElement("div");
        skillElement.className = "skills-bar";
        skillElement.style.width = skill.level;
        skillElement.textContent = skill.name;
        skillsContainer.appendChild(skillElement);
    });
});
