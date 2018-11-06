function hideOlderContentGCI(){
    document.getElementById("gci-section").innerHTML='\
    <h3 class="blue-text center">Google Code-in Stats</h3>\
        <div class="container grey darken-3 grey-text z-depth-2">\
        <h5>2017 &RightArrow;</h5>\
        <div class="center white-text"><h5>Winners</h5></div>\
        <table>\
        <td class="center"><h6><a href="#!" class="grey-text"><div class="icon center student z-depth-2"></div>Sheik Meeran Ashmith Kifah</a></h6></td>\
        <td class="center"><h6><a href="https://github.com/Tanvish"><div class="icon center student z-depth-2"></div>Tanvish Jha</a></h6></td>\
        </table>\
        <div class="white-text center"><h5>Finalists</h5></div>\
        <table>\
        <td class="center"><h6><a href="https://github.com/ragasirtahk"><div class="icon student center z-depth-2"></div>Sagar Khatri</a></h6></td>\
        <td class="center"><h6><a href="https://github.com/kg-kartik"><div class="icon student center z-depth-2"></div>Kartik Goel</a></h6></td>\
        <td class="center"><h6><a href="https://github.com/tan33sh"><div class="icon student center z-depth-2"></div>Tanish Kapur</a></h6></td>\
        </table>\
        </div>\
        <div class="container center">\
          <button onclick="hideOlderContentGCI()" class="header-button blue-grey white-text z-depth-3 center">Load more GCI students</button>\
        </div>\
    ';
}

function hideOlderContentGSoC(){
    document.getElementById("gsoc-section").innerHTML='\
    <div class="container">\
            <h3 class="center yellow-text">Google Summer of Code Stats</h3>\
            <h4 class="center blue-text">2018-Projects and Students</h4>\
  <div class="row">\
    <div class="col s12 m6">\
      <div class="card grey darken-4 z-depth-2">\
        <div class="card-content white-text">\
          <span class="card-title">Ankit Jain</span>\
          <p>Developing “Affiliates Connects” module for Drupal 8</p>\
        </div>\
        <div class="card-action">\
          <a href="https://summerofcode.withgoogle.com/archive/2018/projects/4769424951214080/">See the project</a>\
        </div>\
      </div>\
    </div>\
    </div>\
    <div class="container center">\
    <button onclick="displayMoreContentGSoC()" class="header-button blue-grey white-text z-depth-3 center" >Load more GSoC projects/students</button>\
    </div>\
    ';
}