const music = new Audio('audio/mostgirl.mp3');



// create Array

const songs = [
    {
        id: '1',
        songName: `Most Girls <br> 
        <div class="subtitle">Haille Stenfield</div>`,
        poster: "https://lastfm.freetls.fastly.net/i/u/ar0/2c88a4bae0d18e7b638d9c94b6f3cbd8"
    },
    
    {
        id: '2',
        songName: `Bad Habits <br> 
        <div class="subtitle">Ed Sheeran</div>`,
        poster: "https://upload.wikimedia.org/wikipedia/pt/c/c1/Bad_Habits_-_Ed_Sheeran.png",

    },
    {
        id: '3',
        songName: `Toxic <br> 
        <div class="subtitle">Britney Spears</div>`,
        poster: "https://i.ytimg.com/vi/B6qBrZ81LlQ/mqdefault.jpg"
    },
    {
        id: '4',
        songName: `kato & sigala feat. <br> hailee steinfeld <br> 
        <div class="subtitle">KATO Music</div>`,
        poster: "https://i.discogs.com/PI-IfaPtB85QiCaL9nAS-oTxVN-aDr2BZ7kxNrFLRgE/rs:fit/g:sm/q:90/h:399/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTM5MzY5/NzUtMTU5NjQ2NDg1/Ni02NDkxLmpwZWc.jpeg"
    },
    {
        id: '5',
        songName: `Me Too <br> 
        <div class="subtitle">Meghan Trainor</div>`,
        poster: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/a/c/6/3/494291460741869.jpg"
    },
    {
        id: '6',
        songName: `Heaven <br> 
        <div class="subtitle">Julia Michaels</div>`,
        poster: "https://lastfm.freetls.fastly.net/i/u/ar0/c6bf7adc16e6d1a244b69e10ae22f6e7.jpg"
    },
  
    {
        id: '11',
        songName: `Heat waves <br> 
        <div class="subtitle">glass animals</div>`,
        poster: "https://m.media-amazon.com/images/I/514dqTp4bcS._AC_SY450_.jpg"
    },
    {
        id: '12',
        songName: `The Kid LAROI<br> 
        <div class="subtitle">Justin Bieber Stay</div>`,
        poster: "https://upload.wikimedia.org/wikipedia/pt/0/07/Stay_-_The_Kid_Laroi_e_Justin_Bieber.png"
    },
    {
        id: '13',
        songName: `Watermelon Sugar<br> 
        <div class="subtitle">Harry Styles. </div>`,
        poster: "https://br.jetss.com/wp-content/uploads/2019/11/73401834_472438170033612_3921474701504190027_n.jpg"
    },
    {
        id: '14',
        songName: `Easy On Me. <br> 
        <div class="subtitle">Adele</div>`,
        poster: "https://esheetmusics.com/wp-content/uploads/2021/10/adele-easy-on-me-piano-violin-cover.jpg"
    },
    {
        id: '15',
        songName: `Beggin  <br> 
        <div class="subtitle">Måneskin</div>`,
        poster: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/4/4/1/f/934271595948653.jpg"
    },
    {
        id: '16',
        songName: `Cold Heart <br> 
        <div class="subtitle">Elton John, Dua Lipa</div>`,
        poster: "https://m.extra.globo.com/incoming/25218745-7d1-b04/w367h550-PROP/my-universe.jpg"
    },
    {
        id: '17',
        songName: `My Universe <br> 
        <div class="subtitle">Coldplay X BTS</div>`,
        poster: "https://m.media-amazon.com/images/I/514dqTp4bcS._AC_SY450_.jpg"
    },
    {
        id: '18',
        songName: ` Leave the Door Open <br> 
        <div class="subtitle">Bruno Mars, Anderson .Paak, Silk Sonic.</div>`,
        poster: "https://i.scdn.co/image/ab67616d0000b2730d18a58b311b58820ba4735f"
    },
    {
        id: '19',
        songName: `Abcdefu <br> 
        <div class="subtitle">Gayle</div>`,
        poster: "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d0/ABCDEFU_-_Gayle.png/220px-ABCDEFU_-_Gayle.png"
    },
    {
        id: '20',
        songName: `Shivers <br> 
        <div class="subtitle">Ed Sheeran</div>`,
        poster: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/9/6/6/0/1150231631621832.jpg"
        
        
    },
    {
        id: '21',
        songName: `Shivers <br> 
        <div class="subtitle">Ed Sheeran</div>`,
        poster: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/9/6/6/0/1150231631621832.jpg"
        
        
    },
    {
        id: '22',
        songName: `Shivers <br> 
        <div class="subtitle">Ed Sheeran</div>`,
        poster: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/9/6/6/0/1150231631621832.jpg"
        
        
    },
    {
        id: '23',
        songName: `Shivers <br> 
        <div class="subtitle">Ed Sheeran</div>`,
        poster: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/9/6/6/0/1150231631621832.jpg"
        
        
    },
    {
        id: '24',
        songName: `Shivers <br> 
        <div class="subtitle">Ed Sheeran</div>`,
        poster: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/9/6/6/0/1150231631621832.jpg"
        
        
    },
    {
        id: '25',
        songName: `Shivers <br> 
        <div class="subtitle">Ed Sheeran</div>`,
        poster: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/9/6/6/0/1150231631621832.jpg"
        
        
    },
    {
        id: '26',
        songName: `Shivers <br> 
        <div class="subtitle">Ed Sheeran</div>`,
        poster: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/9/6/6/0/1150231631621832.jpg"
        
        
    },
    {
        id: '27',
        songName: `Shivers <br> 
        <div class="subtitle">Ed Sheeran</div>`,
        poster: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/9/6/6/0/1150231631621832.jpg"
        
        
    },
    {
        id: '28',
        songName: `Shivers <br> 
        <div class="subtitle">Ed Sheeran</div>`,
        poster: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/9/6/6/0/1150231631621832.jpg"
        
        
    },
    {
        id: '29',
        songName: `Shivers <br> 
        <div class="subtitle">Ed Sheeran</div>`,
        poster: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/9/6/6/0/1150231631621832.jpg"
        
        
    },
    {
        id: '30',
        songName: `Shivers <br> 
        <div class="subtitle">Ed Sheeran</div>`,
        poster: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/9/6/6/0/1150231631621832.jpg"
        
        
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img') [0].src = songs[i].poster;
    element.getElementsByTagName('h5') [0].innerHTML = songs[i].songName;
    
})

let masterplay = document.getElementById('masterplay');
let wave = document.getElementsByClassName('wave')[0];

masterplay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <=0) {
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
        wave.classList.add('active2');

    } else{
        music.pause();
        masterplay.classList.add('bi-play-fill');
        masterplay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');

    }
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
       
    })
}

let index = 0;



Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        music.play();
       
    })
    

})