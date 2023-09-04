let coordinates = {}

$(document).ready(function(){
    get_coordinates()
    
})

function get_coordinates(){
    let searchParams = new URLSearchParams(window.location.search)
    console.log(searchParams)
    if(searchParams.has("source") && searchParams.has("destination")){
        let source = searchParams.get("source")
        let destination = searchParams.get("destination")
        coordinates.source.lat = source.split(";")[0]
        coordinates.source.lng = source.split(";")[1]
        coordinates.destination.lat = destination.split(";")[0]
        coordinates.destination.lng = destination.split(";")[1]
    }
    else{
        alert("Coordinates not selected")
        window.history.back()
    }
}