console.log("wlecome to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [ 
    {songName: "Prada", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg"},
    {songName: "Age 19", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg"},
    {songName: "Manka da munda", filePath: "songs/3.mp3", coverPath: "covers/3.jpeg"},
    {songName: "Suit-Punjabi", filePath: "songs/4.mp3", coverPath: "covers/4.jpeg"},
    {songName: "Boss", filePath: "songs/5.mp3", coverPath: "covers/5.jpeg"},
    {songName: "Yaar-Mera", filePath: "songs/6.mp3", coverPath: "covers/6.jpeg"},
    {songName: "Kalli ho gyi", filePath: "songs/7.mp3", coverPath: "covers/7.jpeg"},
    {songName: "Lehanga", filePath: "songs/8.mp3", coverPath: "covers/8.jpeg"},
]

songItems.forEach((Element,i) => {
    console.log(Element,i);
Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})



audioElement.addEventListener('timeupdate', () => {
Progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value = Progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value* audioElement.duration/100;
})
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        //element.target.classList.remove('fa-circle-pause');  
       // element.target.classList.add('fa-circle-play');  
    })    
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
       songIndex = parseInt(e.target.id);
e.target.classList.remove('fa-circle-play');
e.target.classList.add('fa-circle-pause');
masterSongName.innerText = songs[songIndex].songName;
audioElement.src = 'songs/${songIndex+1}.mp3';
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove('fa-circle-play');
masterPlay.classList.add('fa-circle-pause');
    })

})


document.getElementById('next').addEventListener('click', ()=> {
    if(songIndex>=7) {
songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=> {
    if(songIndex<=0) {
songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');



})

