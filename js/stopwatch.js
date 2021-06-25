var span = document.getElementById('stopwatch');

function init(){

    document.querySelector('.start').addEventListener('click',start);
    document.querySelector('.stop').addEventListener('click',stop);
    document.querySelector('.restart').addEventListener('click',restart);

    mls = 0;
    sec = 0;
    min = 0;

    span.innerHTML='00:00:00';
}

function start(){
    write();
    id = setInterval(write,10);
    document.querySelector('.start').removeEventListener('click',start);
}
function write(){
    mls++;
    if(mls>99){
        sec++;
        mls=0;
    }
    if(sec>59){
        min++;
        sec=0;
    }

    if(mls<10){
        mlsAux = '0'+mls;
    }else{
        mlsAux = mls
    }
    if(sec<10){
        secAux = '0'+sec
    }else{
        secAux = sec
    }
    if(min<10){
        minAux = '0'+min
    }else{
        minAux = min
    }

    span.innerHTML= minAux+':'+secAux+':'+mlsAux;
    
}
function stop(){
    clearInterval(id);
    document.querySelector('.start').addEventListener('click',start);
}
function restart(){
    clearInterval(id);
    span.innerHTML='00:00:00'

    mls = 0;
    sec = 0;
    min = 0;
    
    document.querySelector('.start').addEventListener('click',start);
}