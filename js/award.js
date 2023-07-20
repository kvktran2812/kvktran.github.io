let awardList = [
    {
        name: "Certifications: Deep Learn, Machine Learning, and Big Data",
        detail: "Issued by Cognitive Class, Powered by IBM Developer Skills Network",
    },
    {
        name: "Winner of CANDEV 2022 Hackathon",
        detail: "Achieved 2nd place over 400 participants and presented solution to Fisheries and Oceans Canada (DFO)",
    }, 
    {
        name: "Winner of Seneca Hackathon 2021",
        detail: "Winner of Rare Diseases Data Science and Research challenge",
    }
]


function computeAwardList(skills) {
    htmlStr = ""

    for (var i = 0; i < skills.length; i++) {
        htmlStr += 
        '<li style="margin-bottom: 10px">\
            <span><b>' + skills[i].name + '</b></span>\
            <div style="margin-left: 20px">' + skills[i].detail + '</div>\
        </li>'
    }

    return htmlStr
}

function computeAwardInfo() {
    htmlStr = 
    '<div class="accordion-item">\
        <h2 class="accordion-header">\
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#awardAcc" aria-expanded="true" aria-controls="awardAcc">\
            <h5>AWARDS</h5>\
        </button>\
        </h2>\
        <div id="awardAcc" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">\
            <div class="accordion-body">' + computeAwardList(awardList) + '\
            </div>\
        </div>\
    </div>'

    return htmlStr
}


document.querySelector("#award").innerHTML = computeAwardInfo()