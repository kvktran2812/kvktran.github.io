let skillList1 = [
    {
        name: "Data Processing",
        detail: "NumPy, Pandas, SciPy",
    },
    {
        name: "Data Visualization",
        detail: "Plotly, Matplotlib, Seaborn",
    }, 
    {
        name: "Big Data",
        detail: "Spark, Hadoop",
    },
    {
        name: "ML and Deep Learn",
        detail: "Scikit-learn, TensorFlow",
    },
    {
        name: "Web Scraping",
        detail: "Beautiful Soup, Selenium, Scrapy",
    },
    {
        name: "Version Control",
        detail: "Git, GitHub",
    },
]

let skillList2 = [
    {
        name: "Programming Language",
        detail: "Python, Java, JavaScript, C++",
    }, 
    {
        name: "Database/Server",
        detail: "SQL, MySQL, NoSQL, MongoDB",
    },
    {
        name: "Operating System",
        detail: "Linux CLI, PowerShell",
    },
    {
        name: "Web Development",
        detail: "Flask, Django, React.js, Node.js",
    },
    {
        name: "Mobile Development",
        detail: "React Native, Expo",
    },
]


function computeSkillList(skills) {
    htmlStr = ""

    for (var i = 0; i < skills.length; i++) {
        htmlStr += 
        '<li>' + skills[i].name + ': ' + skills[i].detail + '</li>'
    }

    return htmlStr
}

function computeSkillInfo() {
    htmlStr = 
    '<div class="accordion-item">\
        <h2 class="accordion-header">\
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#skillAcc" aria-expanded="true" aria-controls="skillAcc">\
            <h5>SKILLS</h5>\
        </button>\
        </h2>\
        <div id="skillAcc" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">\
            <div class="accordion-body">\
                <div class="row">\
                    <div class="col">' + computeSkillList(skillList1) + '</div>\
                    <div class="col">' + computeSkillList(skillList2) + '</div>\
                </div>\
            </div>\
        </div>\
    </div>'

    return htmlStr
}


document.querySelector("#skill").innerHTML = computeSkillInfo()