let photos = []

function getPhotos(){
    fetch("photos.json")
    .then(response => response.json())
    .then(data=>{
        console.log(data)

        let photosHTML = ""

    for(let i=0; i<data.length; i++){
        photosHTML += `
        <div class="photo-item"><img class="photo" src="https://picsum.photos/id/${data[i].id}/100/100" alt="${data[i].title}"></div>`
    }
    document.getElementById("photo-container").innerHTML = photosHTML

    })
}

getPhotos()


