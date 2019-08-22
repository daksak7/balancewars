			
var my={hp:5000,str:20,dp:10}
var enemy={hp:5000,str:14,dp:5}
var s = 0; //her saldırıda gelen stat
var ss = 0;//zamanla gelen stat
var es = 0;//rakibin hasar artış değişkeni
var totalenemyhp = enemy.hp;
var totalmyhp = my.hp;
attack.onclick = function () { //saldırı kısmı
    if (enemy.hp > 0) {
        var newenemyhp = enemy.hp - my.str;
        enemy.hp = newenemyhp;
        document.getElementById('bar').style.width = ((newenemyhp / totalenemyhp) * 190);
        document.getElementById('hit').style.width = ((my.str / totalenemyhp) * 190);
        enemyattackstack();
        statstack();
        enemyattack();
        console.log(enemy.str);
        if (enemy.hp <= 0) {
            document.getElementById("rakipbilgi").innerHTML = "Rakip öldü!";
            document.getElementById("rakip").innerHTML = "";
            return;
        }
        document.getElementById("rakipbilgi").innerHTML = enemy.hp;
        document.getElementById("rakip").innerHTML = "DEV ÖLÜM ÇİÇEĞİ";
    }}
    addstr.onclick = function () {  //str arttırma
        if (ss+s > 0) {
            document.getElementById("notstat").innerHTML = ""
            var newmystr = my.str + 2;
            s=s-1;
            my.str = newmystr;
        } else document.getElementById("notstat").innerHTML = "DAĞITILACAK YETERLİ STATÜ PUANI YOK"
        document.getElementById("hpinf").innerHTML = my.hp;
        document.getElementById("strinf").innerHTML = my.str;
        document.getElementById("dpinf").innerHTML = my.dp;
        document.getElementById("statinfo").innerHTML = ss+s;
    }
    addhp.onclick = function () {  //hp arttırma
        if (ss+s > 0) {
            document.getElementById("notstat").innerHTML = ""
            var newmyhp = my.hp + 100;
            s=s-1;
            my.hp = newmyhp;
        } else document.getElementById("notstat").innerHTML = "DAĞITILACAK YETERLİ STATÜ PUANI YOK"
        document.getElementById("hpinf").innerHTML = my.hp;
        document.getElementById("strinf").innerHTML = my.str;
        document.getElementById("dpinf").innerHTML = my.dp;
        document.getElementById("statinfo").innerHTML = ss+s;
    }
    adddp.onclick = function () {     //dp arttırma
        if (ss+s > 0) {
            document.getElementById("notstat").innerHTML = ""
            var newmydp = my.dp + 2;
            s=s-1;
            my.dp = newmydp;
        } else document.getElementById("notstat").innerHTML = "DAĞITILACAK YETERLİ STATÜ PUANI YOK"
        document.getElementById("hpinf").innerHTML = my.hp;
        document.getElementById("strinf").innerHTML = my.str;
        document.getElementById("dpinf").innerHTML = my.dp;
        document.getElementById("statinfo").innerHTML = ss+s;
    }
    startgame.onclick = function () {  //oyunu başlatır, diğer fonksiyonları tetikler
        setInterval("statstackbytime()", 4000);
        document.getElementById("rakipbilgi").innerHTML = enemy.hp;
        document.getElementById("benbilgi").innerHTML = my.hp;
        document.getElementById("hpinf").innerHTML = my.hp;
        document.getElementById("strinf").innerHTML = my.str;
        document.getElementById("dpinf").innerHTML = my.dp;
        document.getElementById("statinfo").innerHTML = s;
        document.getElementById("startgame").innerText = "Oyun başladı..	"; 
        document.getElementById("startgame").disabled = true;
        document.getElementById("attack").disabled = false;
    }
    function enemyattack() { //oyunun bize saldıracağı kısım
        if (my.hp > 0) {
            var newmyhp = my.hp - enemy.str;
            my.hp = newmyhp;
            document.getElementById('bar2').style.width= ((newmyhp / totalmyhp) * 190);
            document.getElementById('hit2').style.width= ((enemy.str / totalmyhp) * 190);
            if (my.hp <= 0) {
                document.getElementById("benbilgi").innerHTML = "Öldün";
                document.getElementById("ben").innerHTML = "";
                return;
            }
            document.getElementById("benbilgi").innerHTML = my.hp;
            document.getElementById("ben").innerHTML = "Oyuncu 1";
        }
}
function enemyattackstack() {	 //statü dağıtma üst kısım
    if (es < 100) {
        es++;
        enemy.str = enemy.str + es;
        return;
       // document.getElementById("myinfo").innerHTML = es;
    }
}
function statstack() {	 //statü dağıtma üst kısım
    if (s < 100) {
        s++;
        document.getElementById("statinfo").innerHTML = ss+s;
        if (s > 0) {
            document.getElementById("notstat").innerHTML = ""
        }
    }
}
function statstackbytime() {	 //statü dağıtma üst kısım
    if (ss < 15) {
        ss++;
        document.getElementById("statinfo").innerHTML = ss+s;
        if (ss > 0) {
            document.getElementById("notstat").innerHTML = ""
        }
    }
}
