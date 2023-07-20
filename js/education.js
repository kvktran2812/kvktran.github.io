let profileName = "KHUONG TRAN"
let profileEmail = "kvktran@gmail.com"
let profilePhone = "+1 (647) 617 2281"
let profileImg = "public/img/profile.jpg"

let eduList = [
    {
        degree: "Bachelor of Science",
        time: "Fall 2021 - Present",
        school: "University of Ontario Institute of Technology - School of Science & Engineering Technology",
        major: "Computer Science",
    },
    {
        degree: "Ontario College Advance Diploma",
        time: "2018 - 2021",
        school: "Seneca College of Applied Arts and Technology - School of Software Design & Data Science",
        major: "Computer Programming",
    },
]

function computeProfileInfo() {
    let htmlStr = 
    '<div class="row align-items-start" style="margin-top: 30px;">\
    <div class="col">\
    <h1>' + profileName + '</h1>\
    </div>\
    <div class="col">\
    <p><b>Phone</b>: ' + profilePhone + '</p>\
    <p><b>Email</b>: ' + profileEmail + '</p>\
    </div>\
    </div>'

    return htmlStr
}

function computeEduList(educations) {
    htmlStr = ''
    
    for (var i in educations) {
        htmlStr += 
        '<div class="row">\
            <div class="col"><b>' + educations[i].degree + '</b></div>\
            <div class="col"><b>' + educations[i].time + '</b></div>\
        </div>\
        <div class="row"><p style="margin-bottom: 2px;">' + educations[i].school + '</p></div>\
        <div class="row"><p style="margin-bottom: 2px;">Major: ' + educations[i].major + '</p></div>\
        <br />'
    }

    return htmlStr
}

function computeEducationInfo() {
    htmlStr = 
    '<div class="row align-items-start">\
    <div class="col">\
      <img src="' + profileImg + '" class="rounded float-start" alt="profile" style="width: 300px; height: 400px;">\
    </div>  \
    <div class="col">\
      <h5><b>EDUCATION:</b></h5>' + computeEduList(eduList) + '\
    </div>\
  </div>'

    return htmlStr
}

document.querySelector("#education").innerHTML = computeEducationInfo()
document.querySelector("#profileInfo").innerHTML = computeProfileInfo()
