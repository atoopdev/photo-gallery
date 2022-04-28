
function getPhotos(){
    fetch("photos.json")
    .then(response => response.json())
    .then(data=>{
        console.log(data)
        photos = JSON.parse(JSON.stringify(data))
        console.log(photos)

        let photosHTML = ""

    for(let i=0; i<data.length; i++){
        let id="photo"+(i+1)
        photosHTML += `
        <div class="photo-item"><img class="photo" id="${id}" src="https://picsum.photos/id/${data[i].id}/100/100" alt="${data[i].title}"></div>`
    }
    document.getElementById("photo-container").innerHTML = photosHTML

    })
}

// function getPhotosHTML(photos){
//     let photosHTML = ""

//     for(let i=0; i<photos.length; i++){
//         let id="photo"+(i+1)
//         photosHTML += `
//         <div class="photo-item"><img class="photo" id="${id}" src="https://picsum.photos/id/${photos[i].id}/100/100" alt="${photos[i].title}"></div>`
//     }
//     return photosHTML
// }

getPhotos()



document.getElementById("photo-container").addEventListener("click", loadImage)

// other method
// let myPhotoImgs = Array.from(document.getElementsByClassName("my-photo"))
//     myPhotoImgs.forEach(photoImg => {
//         photoImg.addEventListener("click", event => {
//             console.log(event)
//         })
//     })
// })

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img

function loadImage(e){
    console.log("clicked")
    let clickedImageID = e.target.id
    console.log(clickedImageID)

    let img = document.getElementById(clickedImageID)
    console.log(img.src)
    let selectedImg = `${img.src.substring(0, img.src.length-7)}200/200`
    console.log(selectedImg)
    document.getElementById("my-photo").src = selectedImg
    
}
