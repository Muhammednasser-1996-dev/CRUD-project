var productNameInput = document.getElementById("siteName");
var productUrlInput = document.getElementById("siteUrl");
var site;

if (localStorage.getItem("myBookmark") == null) {
    site = [];
} else {
    site = JSON.parse(localStorage.getItem("myBookmark"));
    displayBookMark();
}


function submit() {

    if (productNameInput.value === "") {
        displayValidationMessage();
    } else if (productUrlInput.value === "") {
        displayValidationMessage();
    } else {
        document.getElementById("nameError").innerHTML = "";
        document.getElementById("urlError").innerHTML = "";
        var webSite = {
            name: productNameInput.value,
            url: productUrlInput.value
        }
        site.push(webSite);

        localStorage.setItem("myBookmark", JSON.stringify(site));
        displayBookMark()
    }
}

function displayBookMark() {
    var bookmark = "";
    for (var i = 0; i < site.length; i++) {
        var webName = site[i].name;
        var webUrl = site[i].url;
        bookmark += `<div class="web">` +
            `<h2 >` + webName + `</h2>` +
            `<a class = " btn btn-primary" href = "` + webUrl + `" > visit </a>` +
            `<button onclick = "deleteBookmark(` + i + `)" class = "btn btn-danger" href = "#" > Delete </button>` +
            ` </div>`;

    }

    document.getElementById("bookmarkList").innerHTML = bookmark;

}

function displayValidationMessage() {
    var validName = "";
    var validUrl = "";

    validName += `<div class="alert alert-error m-auto  w-100">name is required</div>`
    validUrl += `<div class="alert alert-error m-auto  w-100">url is required</div>`


    document.getElementById("nameError").innerHTML = validName;
    document.getElementById("urlError").innerHTML = validUrl;
}

function deleteBookmark(index) {

    site.splice(index, 1);
    localStorage.setItem("myBookmark", JSON.stringify(site));
    displayBookMark()
}

function searchProducts(search){
   var searchTerm = '';
   var searchTerm2 = '';
   var newName = '';

   for(var i = 0; i < site.length; i++)

   if(site[i].name.includes(search.trim()) == true){
    var webName = site[i].name;
    var webUrl = site[i].url;

    searchTerm += `<div class="web">` +
    `<h2 >` + webName + `</h2>` +
    `<a class = " btn btn-primary" href = "` + webUrl + `" > visit </a>` +
    `<button onclick = "deleteBookmark(` + i + `)" class = "btn btn-danger" href = "#" > Delete </button>` +
    ` </div>`; 

    newName = webName.replace(search, `<span class="search-para">` + search + `</span>`)
    searchTerm2 += `<p>` + newName + `</p>`

   }
   document.getElementById("bookmarkList").innerHTML = searchTerm;
   document.getElementById("searchResults").innerHTML = searchTerm2;


}




