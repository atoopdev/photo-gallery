let photos = []

function getPhotos(){
    fetch("photos.json")
    .then(response => response.json())
    .then(data=>{
        console.log(data)

        let photosHTML = ""

    for(let i=0; i<data.length; i++){
        let id="photo"+(i+1)
        photosHTML += `
        <div class="photo-item"><img class="photo" id="${id}" src="https://picsum.photos/id/${data[i].id}/100/100" alt="${data[i].title}"></div>`
    }
    document.getElementById("photo-container").innerHTML = photosHTML

    })
}

getPhotos()

document.getElementById("photo-container").addEventListener("click", loadImage)

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img

function loadImage(e){
    console.log("clicked")
    let clickedImageID = e.target.id
    console.log(clickedImageID)

    let img = document.getElementById(clickedImageID)
    document.getElementById("my-photo").src = img.src
}
