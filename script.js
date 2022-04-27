async function getPhotos(){
    let response = await fetch("photos.json")
    let photos = await response.json()
    console.log(photos)
}

getPhotos()