var xhr=new XMLHttpRequest() //readystate =0

xhr.onreadystatechange = function(){
    // console.log(xhr.readyState)
    if(xhr.readyState==4){
        if(xhr.status>=200 && xhr.status<300){
            var data = JSON.parse(xhr.responseText)
            console.log(data)
            var Band = document.getElementById("Band")
            var Artist = document.getElementById("Artist")
            for(let elem in data){
                var option = document.createElement("option");
                option.text = elem;
                option.value = elem;
                Band.appendChild(option);
            }
            Band.addEventListener("change", function () {
            Artist.innerHTML = ""  
            var artists = data[Band.value]
            for(let artist of artists){
                var option = document.createElement("option")
                option.text = artist.name
                option.value = artist.value
                Artist.appendChild(option)
            }
            });
            Artist.addEventListener("change",function(){
                window.open(this.value)
            })
        }
        else{
            if(xhr.status==404){
                document.getElementsByTagName("h1")[0].innerHTML="not found"
            }
        }
    }
}
xhr.open('GET',"rockbands.json") // readystate=1
xhr.send()