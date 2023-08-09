console.log("Welcome To Spotify");
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressBar=document.getElementById('myprogressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songitems=Array.from(document.getElementsByClassName('songitem'));

let songs= [
    {songName: "Shape of You",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Justien Bieber hit",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName: "You call me baby",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName: "Bhool Bhulaiya 2",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName: "Malang title track",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName: "KK song-chehre se chehra chupa",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName: "Sooraj duba hai",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName: "Odhni udhe udhe ree",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName: "falling for you",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName: "Beleiver",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
]

songitems.forEach((element,i)=> {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// autoElement.play(); 

//Handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//add event listener
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value=progress;
})

myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime= myprogressBar.value * audioElement.duration/100;

})

const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
            })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.addEventListener('click',(e)=>{
        makeAllplays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause')
        audioElement.src =` songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
     })
})
document.getElementById('next').addEventListener('click',()=>{
    if (songIndex>=9) {
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=0) {
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})