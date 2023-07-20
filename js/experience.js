let experienceList = [
    {
        type: "experience",
        company: "Ki3 Photonics Technologies",
        jobTitle: "SOFTWARE DEVELOPER ASSISTANT",
        time: "SEPTEMBER 2022 - APRIL 2023",
        tasks: [
            "Collaborated closely with quantum physicists to develop Python packages that help in simulation, inverse design, and optimization of noisy quantum circuits.",
            "Optimized program efficiency by analyzing, refactoring, and rewriting Python code.",
            "Built and wrote unit tests for quality assurance using Pytest.",
            "Developed pipeline that generates, collects, and stores quantum information data.",
        ]
    },
    {
        type: "project",
        jobTitle: "DATA ANALYST - CANDEV 2022 HACKATHON",
        time: "FEBRUARY 2022",
        tasks: [
            "Worked in a team of 3 to build a system that collects vessel data and notifies commodores about whale habitats using Python.",
            "Used Pandas and NumPy to generate analytical reports of vessel data, which will help scientists in policy decisions that impact endangered species.",
            "Processed and cleaned geospatial data using Shapely and Rasterio.",
            "Visualized data on earth map using Folium.",
        ]
    },
    {
        type: "project",
        jobTitle: "SOFTWARE DEVELOPER - CAPSTONE PROJECT",
        time: "SEPTEMBER 2020 – APRIL 2021",
        tasks: [
            "Collaborated in a team of 4 to design an operational system that gathers information from solar power plants.",
            "Made a website that displayed the data with user-friendly interface using Grafana.",
            "Made an alarm system that can send email using Grafana alert functions.",
            "Practiced and enhanced teamwork, problem solving and time management skill.",
        ]
    },
    {
        type: "project",
        jobTitle: "DATA ENGINEER - SENECA COLLEGE 2021 HACKATHON",
        time: "MARCH 2021",
        tasks: [
            "Worked in a team of 4 to model open-registry clinical data, which helped Healthcare Professionals (HCPs) in patient care decision-making for rare disease.",
            "Processed and cleaned rare disease data using Pandas, NumPy, and SciPy",
            "Visualized data using Matplotlib and build user-interface with Ip widgets",
        ]
    }
]

function computeTaskList(tasks) {
    htmlStr = ''

    for (var i in tasks) {
        htmlStr += '<li>' + tasks[i] + '</li>'
    }

    return htmlStr
}

function computeExperienceList(expr) {
    htmlStr = ''

    for (var i in expr) {
        htmlStr += 
        '<div class="row">\
            <div class="col"><b>' + expr[i].jobTitle + '</b></div>\
            <div class="col"><b>' + expr[i].time + '</b></div>\
        </div>'

        if (expr[i].type == "experience") {
            htmlStr += 
            '<div class="row"><b>Company: ' + expr[i].company + '</b></div>'
        }

        htmlStr += '<div class="row">\
            <ul>' + computeTaskList(expr[i].tasks) + '\
            </ul>\
        </div>\
        <br />'
    }

    return htmlStr
}

function computeExperienceInfo() {
    htmlStr = 
    '<div class="accordion-item">\
        <h2 class="accordion-header">\
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#experienceAcc" aria-expanded="true" aria-controls="experienceAcc">\
            <h5>EXPERIENCE & PROJECTS</h5>\
        </button>\
        </h2>\
        <div id="experienceAcc" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">\
            <div class="accordion-body">' + computeExperienceList(experienceList) + '\
            </div>\
        </div>\
    </div>'

    return htmlStr
}

document.querySelector("#experience").innerHTML = computeExperienceInfo()
