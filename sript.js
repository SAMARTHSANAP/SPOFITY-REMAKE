console.log("JavaScript Loaded");

let songs = [
  {
    title: "Jhol",
    artist: "Sunny Dancer",
    src: "songs/Jhol  Coke Studio Pakistan  Season 15  Maanu x Annural Khalid.mp3",
    cover: "jhol.jpeg"
  },
  {
    title: "Sahiba",
    artist: "Aditya Rikhari",
    src: "songs/Sahiba (Official Music Video) _ Aditya Rikhari, Ankita Chhetri  T-Series.mp3",
    cover: "saiba.jpeg"
  },
  {
    title: "Convo",
    artist: "Unknown Artist",
    src: "songs/Convo.mp3",
    cover: "convo.jpeg"
  },
  {
    title: "Saiyaara",
    artist: "Ahaan Panday",
    src: "songs/Saiyaara Title Song  Ahaan Panday, Aneet Padda  Tanishk Bagchi, Faheem A, Arslan N  Irshad Kamil.mp3",
    cover: "saiyarra.jpeg"
  },
  {
    title: "Monica",
    artist: "Coolie Tamil",
    src: "songs/Monica (From Coolie) (Tamil).mp3",
    cover: "diddy.jpeg"
  },
  {
    title: "freed from desire",
    artist: "indilaa",
    src: "songs/Freed from Desire.mp3",
    cover: "fread from desire.jpg"
  },
  {
    title: "Magic in air",
    artist: "Magic system",
    src: "songs/Magic in the Air (feat. Ahmed Chawki).mp3",
    cover: "magicintheair.jpg"
  },
  {
    title: "cael",
    artist: "african song",
    src: "songs/Ciel Afro Club.mp3",
    cover: "cael.jpg",
  },
  {
    title: "Матушка",
    artist: "Ronaldo",
    src: "songs/Матушка.mp3",
    cover: "masuka.jpg",
  },
];

let audio = new Audio();
let currentIndex = 0;

function loadSong(index) {
  const song = songs[index];
  audio.src = song.src;


  document.getElementById("playbar").style.display = "flex";


  document.querySelector(".song-info img").src = song.cover;
  document.querySelector(".song-info h4").innerText = song.title;
  document.querySelector(".song-info p").innerText = song.artist;


  audio.play();
}

function playSong(index) {
  currentIndex = index;
  loadSong(index);
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function playNext() {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
}

function playPrev() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
}


document.querySelector(".controls button:nth-child(1)").onclick = playPrev;
document.querySelector(".controls button:nth-child(2)").onclick = togglePlayPause;
document.querySelector(".controls button:nth-child(3)").onclick = playNext;

document.querySelectorAll(".card1, .card2, .card3, .card4, .card5, .card6, .card7, .card8, .card9").forEach((card, i) => {
  card.addEventListener("click", () => {
    playSong(i);
  });
});