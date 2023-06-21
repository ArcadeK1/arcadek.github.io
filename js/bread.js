function currentDateAdder()
{
    var currentDate = new Date();
    for (let i = 1; i <=4; i++)
    {
        document.getElementById('bakedate'+ i).innerText= `Дата изготовления: ${currentDate.toLocaleDateString()}`;
    }
   
    console.log(currentDate.toLocaleDateString());
}
currentDateAdder();


function carouselTextAnimation()
{
    var string = "Добро пожаловать в пекарню «Хлебушек»";
    var str = string.split("");
    var el = document.getElementById('carouselstr');
    (function animate() {
    str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
    var running = setTimeout(animate, 90);
    })();
}

carouselTextAnimation();


function bunsAmounts()
{
    for (let i = 1; i <=4; i++)
    {
        document.getElementById('amounts'+ i).style="width:45px";
    }
}
bunsAmounts()
