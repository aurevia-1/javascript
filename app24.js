// let box = document.getElementById('box')

// function square(){
//     box.className = "square"
// }
// function circle(){
//     box.className = "circle"
// }
// function rectangle(){
//     box.className = "rectangle"
// }

let image = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPbOVDuJKHJxwjfT77nXgb_GaDM3s9iFHhQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnVZAeymVmjrm0g0rwzfUe1e2_3bChKsN0OYAzKs2FMFCSBDOvqjm1BnAWclY3f49ii2w&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchG7U2BYs-j7SKbCWKEy-l9dspLQRrWL6V-oG2hyYOeIyRVjomHZllChwHa7Bl8aIRYA&usqp=CAU"
]

let img = document.getElementById("img")
let imageindex = 0

function renderImage(){
    img.src =image[imageindex]
}
renderImage()

function nextImage