let currentIndex = 0;

const images = document.querySelectorAll(".gallery img");

function openLightbox(img){

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightbox-img").src = img.src;

    images.forEach((image,index)=>{
        if(image === img){
            currentIndex = index;
        }
    });
}

function closeLightbox(){
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(step){

    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.style.opacity = "0";

    setTimeout(()=>{

        currentIndex += step;

        if(currentIndex < 0){
            currentIndex = images.length - 1;
        }

        if(currentIndex >= images.length){
            currentIndex = 0;
        }

        lightboxImg.src = images[currentIndex].src;

        lightboxImg.style.opacity = "1";

    },200);
}

function filterImages(category){

    const items = document.querySelectorAll(".image");

    items.forEach(item=>{

        if(category === "all"){
            item.style.display = "block";
        }
        else if(item.classList.contains(category)){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }

    });
}