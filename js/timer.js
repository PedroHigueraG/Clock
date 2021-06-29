var timerSpan = document.getElementById('timer_span');

function timerOn(){

    document.querySelector('.start_timer').addEventListener('click',startTimer);
    document.querySelector('.stop_timer').addEventListener('click',stopTimer);
    document.querySelector('.restart_timer').addEventListener('click',restartTimer);  

    timerSpan.innerHTML="00:00:00";
}

function cargar(){

    hrs_tmr = document.getElementById('hours').value;
    min_tmr = document.getElementById('minutes').value;
    sec_tmr = document.getElementById('seconds').value;

    timerSpan.innerHTML=testTime(hrs_tmr)+":"+testTime(min_tmr)+":"+testTime(sec_tmr);
}

function startTimer(){
    writeTimer();
    idTimer = setInterval(writeTimer,1000);
    document.querySelector('.start_timer').removeEventListener('click',startTimer);
    document.getElementById('hours').disabled=true;
    document.getElementById('minutes').disabled=true;
    document.getElementById('seconds').disabled=true;
}

function writeTimer(){

    hrs_tmr = parseInt(hrs_tmr);
    min_tmr = parseInt(min_tmr);
    sec_tmr = parseInt(sec_tmr);

    if(hrs_tmr==0 && min_tmr==0 && sec_tmr==0){
        alert('Time Out!');
        stopTimer();
        restartTimer();
    }else if(hrs_tmr==0 && min_tmr==0){
        sec_tmr--;
    }else if(hrs_tmr==0){
        if(sec_tmr==0){
            min_tmr--;
            sec_tmr=59;
        }else{
            sec_tmr--;
        }
    }else{
        if(min_tmr==0 && sec_tmr==0){
            hrs_tmr--;
            min_tmr=59;
            sec_tmr=59;
        }else{
            if(sec_tmr==0){
                min_tmr--;
                sec_tmr=59;
            }else{
                sec_tmr--;
            }
        }
        
    }

    if(hrs_tmr<10){
        hrs_tmr_Aux = '0'+hrs_tmr;
    }else{
        hrs_tmr_Aux = hrs_tmr;
    }
    if(min_tmr<10){
        min_tmr_Aux = '0'+min_tmr;
    }else{
        min_tmr_Aux = min_tmr;
    }
    if(sec_tmr<10){
        sec_tmr_Aux = '0'+sec_tmr
    }else{
        sec_tmr_Aux = sec_tmr
    }

    timerSpan.innerHTML= hrs_tmr_Aux+':'+min_tmr_Aux+':'+sec_tmr_Aux;
}
function stopTimer(){
    document.getElementById('hours').disabled=false;
    document.getElementById('minutes').disabled=false;
    document.getElementById('seconds').disabled=false;
    clearInterval(idTimer);
    document.querySelector('.start_timer').addEventListener('click',startTimer);
}
function restartTimer(){
    clearInterval(idTimer);
    document.getElementById('hours').value=0;
    document.getElementById('minutes').value=0;
    document.getElementById('seconds').value=0;
    timerSpan.innerHTML='00:00:00';
    hrs_tmr = 0;
    min_tmr = 0;
    sec_tmr = 0;

    document.querySelector('.start_timer').addEventListener('click',startTimer);

}