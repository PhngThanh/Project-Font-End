function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src == "image/red.png") {
        image.src = "image/black.png";
    } else if (image.src == "image/black.png")
	{
        image.src = "image/red.png";
    }
}