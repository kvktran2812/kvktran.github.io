let navName = "KHUONG TRAN"
let navLinks = [
  {
    name: "Projects", 
    link: "project.html"
  }, 
  // {
  //   name: "Products", 
  //   link: "products.html"
  // },
  // {
  //   name: "Achievements", 
  //   link: "achievement.html"
  // },
]


function computeNavList(links) {
  let htmlStr = ""

  for (var i in links) {
    htmlStr += 
    '<li class="nav-item">\
      <a class="nav-link text-white" aria-current="page" href="'+ links[i].link + '">' + links[i].name + '</a>\
    </li>'
  }

  return htmlStr
}

function computeNavBar() {
  htmlStr = 
  '<nav class="navbar navbar-expand-lg bg-primary"> \
  <div class="container">\
    <a class="navbar-brand text-white" href="index.html">' + navName + '</a>\
    <div class="collapse navbar-collapse" id="navbarSupportedContent">\
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">' + computeNavList(navLinks) + '</ul>\
    </div>\
  </div>\
  </nav>'

  return htmlStr
}

document.querySelector("#navigator").innerHTML = computeNavBar()
