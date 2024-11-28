// script.js

const tracks = [
    { title: "_intro_", file: "songs/_intro_.mp3", cover: "cover.jpg" },
    { title: "WE GONNA COOK", file: "songs/WE GONNA COOK.mp3", cover: "cover.jpg" },
    { title: "_______(!ntern@l c00k!ng)", file: "songs/_______(!ntern@l c00k!ng).mp3", cover: "cover.jpg" },
    { title: "COOK", file: "songs/04 COOK.mp3", cover: "cover.jpg" },
    { title: "High on Cooking", file: "songs/05 High on Cooking.mp3", cover: "cover.jpg" },
    { title: "casual_cookage", file: "songs/06 casual_cookage.mp3", cover: "cover.jpg" },
    { title: "_interlude_", file: "songs/_interlude_.mp3", cover: "cover.jpg" },
    { title: "he used to be cooking", file: "songs/he used to be cooking.mp3", cover: "cover.jpg" },
    { title: "LET HIM COOK", file: "songs/LET HIM COOK.mp3", cover: "cover.jpg" },
    { title: "I COOKED", file: "songs/I COOKED.mp3", cover: "cover.jpg" },
    { title: "flow (cooking)", file: "songs/11 flow (cooking).mp3", cover: "cover.jpg" },
    { title: "maximum_cookage", file: "songs/maximum_cookage.exe.mp3", cover: "cover.jpg" },
    { title: "_outro_", file: "songs/_outro_.mp3", cover: "cover.jpg" }
];

const audio = document.getElementById("audio");
const audioSource = document.getElementById("audio-source");
const tracklist = document.getElementById("tracklist");
const coverImage = document.getElementById("cover-image");

let currentTrackIndex = 0;

// Function to load a track
function loadTrack(index) {
    const track = tracks[index];
    audioSource.src = track.file;
    coverImage.src = track.cover;
    audio.load();
    highlightTrack(index);
}

// Function to highlight the current track
function highlightTrack(index) {
    Array.from(tracklist.children).forEach((item, i) => {
        item.classList.toggle("active", i === index);
    });
}

// Populate tracklist dynamically
tracks.forEach((track, index) => {
    const li = document.createElement("li");
    var displayIndex;
    if (index+1 < 10){
        displayIndex = "0"+(index+1);
    }else{
        displayIndex = ""+(index+1)
    }
    li.innerHTML ="<span class = 'track'><span class = 'track-index'>" + displayIndex+"</span> "+track.title + "</span>";
    li.addEventListener("click", () => {
        currentTrackIndex = index;
        loadTrack(index);
        audio.play();
    });
    tracklist.appendChild(li);
});

// Initialize player
loadTrack(currentTrackIndex);