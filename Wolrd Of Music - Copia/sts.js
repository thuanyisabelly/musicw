let musicas =[
    {titulo:'Monst Girls', artista: 'Hailee Steinfeld', src: 'audio/mostgirl.mp3', img:'img/mostgirl.png'}, 
    {titulo:'Bad Habits', artista: 'Ed Sheeran', src: 'audio/badhabits.mp3', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbBLF6y45h0IsN92JXFQZ8GbJy0tFYq3HrqA&usqp=CAU'},
    {titulo:'Take You Dancing', artista: 'Jason Derulo', src: 'musicas/takeyoudancing.mp3', img:'imagens/take you dancing.jpg'},
    {titulo:'You Say Voce', artista: 'Lauren Diagle', src: 'musicas/yousayvoce.mp3', img:'imagens/diz.jpg'},
     {titulo:'ON', artista: 'BTS', src: 'musicas/on.mp3', img:'imagens/on.jpg'},
      {titulo:'World Is Spinnin', artista: 'Tik Tok', src: 'musicas/World Is Spinnin.mp3', img:'imagens/world.jpg'},
       {titulo:'Ousado Amor', artista: 'Isaias Saad', src: 'musicas/ousado.mp3', img:'imagens/ousado.jpg'}
  ]
  let musica = document.querySelector('audio');
  let indexMusica = 0;
  let duracaoMusica = document.querySelector('.fim');
  let imagem = document.querySelector('img');
  let nomeMusica = document.querySelector('.descricao h2');
  let nomeArtista = document.querySelector('.descricao i');
  
  duracaoMusica.textContent = segundosParaMinutos(Math.floor (musica.duration));
  
  // Eventos
  document.querySelector('.botao-play').addEventListener('click',tocarMusica);
  
  document.querySelector('.botao-pause').addEventListener('click',pausarMusica);
  
  musica.addEventListener('timeupdate',atualizarBarra);
  
  document.querySelector('.anterior').addEventListener('click', ()=>{
    indexMusica--;
    renderizarMusica(indexMusica);
  });
  
  document.querySelector('.proxima').addEventListener('click', ()=>{
    indexMusica++;
    renderizarMusica(indexMusica);
  });
  
  
  // Funções
  function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata',() =>{
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
       duracaoMusica.textContent = segundosParaMinutos(Math.floor (musica.duration));
    });
  
  }
  
  
  function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
  }
  
  function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
  }
  
  function atualizarBarra(){
  let barra = document.querySelector('progress');
  barra.style.width = Math.floor ((musica.currentTime / musica.duration) * 100) + '%';
  let tempoDecorrido = document.querySelector('.inicio');
  tempoDecorrido.textContent= segundosParaMinutos(Math.floor(musica.currentTime));
  }
  
  function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos <10){
      campoSegundos = '0' + campoSegundos;
    }
  
    return campoMinutos + ':' + campoSegundos;
  }
  
  