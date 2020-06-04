// CALLBACK FUNCTIONS

// $(document).ready( () => {
//     // LOGIC
//     console.log("DOCUMENT IS READY")
// })

// RAW JS
// getElementById => GETTER
// var button = document.getElementById("button")
// button.addEventListener('click', function(){
//     var divTarget = document.getElementById("target")
//     // innerHTML => SETTER
//     divTarget.innerHTML = "<h1>Hello World</h1>"
// })

// jQuery
$(document).ready(function(){

    // var srcBefore = $("img").attr("src")

    // console.log("SRC ATTRIBUTE BEFORE: ", srcBefore )
    // $("img").attr("src" , "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLion_of_Babylon_(tank)&psig=AOvVaw2EVOB-XC2kcERWvCpamgiW&ust=1590626821214000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCynOfo0ukCFQAAAAAdAAAAABAD")

    // var srcAfter = $("img").attr("src")
    // console.log("SRC ATTRIBUTE AFTER: ", srcAfter)






    $('#button').click(function(){
        // // GETTER
        // console.log("GET INFO FROM HTML: " , $("#target").html())
        // // SETTER
        // $("#target").html("<h1>Hello World</h1>")

        // var src = $("img").attr("src")
        // var altSrc = $("img").attr("data-alt-src")

        // console.log("SRC ATTRIBUTE BEFORE: ", srcBefore )
        // $("img").attr("src" , "./ninjancat.bmp")
    
        // var srcAfter = $("img").attr("src")
        // console.log("SRC ATTRIBUTE AFTER: ", srcAfter)

        var href = $("#mode").attr("href")
        var altHref = $("#mode").attr("alt-href")

        $("#mode").attr("href" , altHref)
        $("#mode").attr("alt-href", href)


    })
})
// EVENT LISTENERS



// GETTERS

// SETTERS


// SWAP CAPABILITIES
