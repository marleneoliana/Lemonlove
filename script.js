elementImg = document.getElementById("idImage");

listImage =["as1.png","as2.png","as3.png","as4.png","as5.png"];
i=0;
function gantiGbr(){
    elementImg.src=listImage[i];
    i = (i+1)% listImage.length;
}
setInterval(gantiGbr,10000)

