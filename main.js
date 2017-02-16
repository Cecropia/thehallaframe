var startExperienteBtn = document.getElementById('start_experience');

startExperienteBtn.onclick = function(){
    document.getElementById('container').outerHTML = '';
    document.getElementsByTagName('a-scene')[0].style.zIndex = 'auto';
};