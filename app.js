window.addEventListener('scroll', onScroll);


function onScroll(){
    window.setInterval("changeBackground()",100);
    window.setInterval("changeBackgroundBack()",800);
};

function changeBackground (){
            document.querySelector("body").style.backgroundColor = '#170140';
};

function changeBackgroundBack (){
    document.querySelector("body").style.backgroundColor = '#000000';
};

