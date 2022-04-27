let photos = []

function getPhotos(){
    fetch("photos.json")
    .then(response => response.json())
    .then(data=>{
        console.log(data)

        let photosHTML = ""

    for(let i=0; i<data.length; i++){
        photosHTML += `
        <div class="photo"><img src="https://picsum.photos/id/${data[i].id}/100/100" alt="${data[i].title}"></div>`
    }
    document.getElementById("photo-container").innerHTML = photosHTML

    })
}

getPhotos()


function outputPhotos(){
    // let photosHTML = ""
    // for(let i=0; i<photos.length; i++){
    //     photosHTML += `
    //     <div class="photo" src="https://picsum.photos/id/${photos[i].id}/100/100" alt="${photos[i].title}"></div>`
    // }
    // document.getElementById("container").innerHTML = photosHTML

   
}