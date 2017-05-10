var kavek =     [{name:"Arabica", origen:"Columbia", strength: 5, instock:2, price:290},
                 {name:"Maragogype", origen:"Mexico", strength: 4, instock:20, price:190},
                 {name:"Blue Mountain", origen:"Jamaica", strength: 9, instock:15, price:230},
                 {name:"Kenyai", origen:"Kenya", strength: 6, instock:11, price:250},
                 {name:"Mocha", origen:"Jemen", strength: 3, instock:1, price:220},
                 {name:"Sidamo", origen:"Ethiopia", strength: 10, instock:25, price:200},
                 {name:"Latte", origen:"France", strength: 2, instock:14, price:150},
                 {name:"Cappuccino", origen:"Italy", strength: 7, instock:6, price:260},
                 {name:"Machiatto", origen:"Italy", strength: 8, instock:30, price:160},
                 {name:"Latte Machiatto", origen:"Italy", strength: 10, instock:18, price:210},
                 {name:"Melange", origen:"Austria", strength: 5, instock:16, price:230},
                 {name:"Café au Lait", origen:"France", strength: 6, instock:7, price:190},
                 {name:"Turkish", origen:"Turkey", strength: 10, instock:4, price:180},
                 {name:"Freddo", origen:"Spain", strength: 1, instock:3, price: 240},
                 {name:"Long Black", origen:"Australia", strength: 5, instock:3, price:170}
                 ];

//kávék megjelenítése a táblázatban, kosárba gomb onclick függvényhez kötése             
for (i=0; i<kavek.length;i++) {
                            document.getElementById('coffeetable').innerHTML += '<tr>' + '<td>' + kavek[i].name + ' </td> ' + '<td> ' + kavek[i].origen + ' </td> ' + '<td>' + kavek[i].strength + '</td>' + '<td>' + kavek[i].instock + '</td>' + '<td>' + '<button onclick="basket()" id="kosar">kosárba</button>' + '</td>' + '</tr>';   
                         }
//táblázat frissítése, kosárba gomb onclick függvényhez kötése
function tablaFrissitese() {
document.getElementById('coffeetable').innerHTML = '';
        for (i=0; i<kavek.length;i++) {
                document.getElementById('coffeetable').innerHTML += '<tr>'+'<td>'+kavek[i].name+'</td>'+'<td>'+kavek[i].origen+'</td>'+'<td>'+kavek[i].strength+'</td>'+'<td>'+kavek[i].instock+'</td>'+'<td>'+'<button onclick="basket()">kosárba</button>'+'</td>'+'</tr>';   
        }
}

//sorba rendező alapfüggvény
function rendez(key) {
    kavek.sort(function(first,second) {
           if (first[key] > second[key]) {
               return 1;
           } else {
           return -1;
           }
        });
        tablaFrissitese();
}

//visszafelé sorbarendező alapfüggvény
function rendezVissza(key) {
    kavek.sort(function(first,second) {
           if (first[key] < second[key]) {
               return 1;
           } else {
           return -1;
           }
        });
        tablaFrissitese();
}

//különféle tulajdonságok szerinti rendezések
function sortName() {
    rendez("name");
}

function sortNameRev() {
    rendezVissza("name");
}

function sortOrig() {
    rendez("origen");
}

function sortOrigRev() {
    rendezVissza("origen");
}

function sortStre() {
    rendez("strength");
}

function sortStreRev() {
    rendezVissza("strength");
}

function sortInst() {
    rendez("instock");
}

function sortInstRev() {
    rendezVissza("instock");
}

//kávé neve szerinti keresés
function keres() {
        var search = document.getElementById("search").value.toLowerCase();
        var eredmeny;
        for (var i = 0; i < kavek.length; i++) {
             if (kavek[i].name.toLowerCase().indexOf(search) > -1) {
                 eredmeny = "Fajta: " + kavek[i].name + " Származási hely: " + kavek[i].origen + " Erőssége: " + kavek[i].strength;
                 i = kavek.lenght;
              }
              else {eredmeny = "Jelenleg nem kapható."}
         }  
        alert(eredmeny);
}

//ország legördülő mező kiválasztása, szűrés eredményének táblázatban való megjelenítése
var origen = document.getElementById("orig");
origen.onchange = function() {
    var result = [];
    for (i=0; i<kavek.length;i++) {
        if (kavek[i].origen == origen.value) {
            result.push(kavek[i]);
        }
    }
    document.getElementById('coffeetable').innerHTML = '';
        for (k=0; k<result.length;k++) {
                document.getElementById('coffeetable').innerHTML += '<tr>'+'<td>'+result[k].name+'</td>'+'<td>'+result[k].origen+'</td>'+'<td>'+result[k].strength+'</td>'+'<td>'+result[k].instock+'</td>'+'<td>'+'<button>kosárba</button>'+'</td>'+'</tr>';   
        }
}

//szűrések törlése gombok működése
function cancel() {
    tablaFrissitese();
}

//erősség legördülő mező kiválasztása, szűrés eredményének táblázatban való megjelenítése
var strength = document.getElementById("stre");
function csoportosit() {
    var week = [];
    var medium = [];
    var strong = [];
    var result; 
    for (i=0; i<kavek.length;i++) {
        if (kavek[i].strength <= 3) {
            week.push(kavek[i]);
        } else if (kavek[i].strength > 3 && kavek[i].strength <= 7) {
            medium.push(kavek[i]);
        } else if (kavek[i].strength > 7) {
            strong.push(kavek[i]);
        }
    }
    document.getElementById('coffeetable').innerHTML = '';
    if (strength.value == 'gyenge') {
        result = week;
    } else if (strength.value == 'kozepes') {
        result = medium;
    } else {
        result = strong;
    }
    for (k=0;k<result.length;k++) {      
                document.getElementById('coffeetable').innerHTML += '<tr>'+'<td>'+result[k].name+'</td>'+'<td>'+result[k].origen+'</td>'+'<td>'+result[k].strength+'</td>'+'<td>'+result[k].instock+'</td>'+'<td>'+'<button>kosárba</button>'+'</td>'+'</tr>';   
        }
}

//basket függvény
function basket() {
    var kosar = document.getElementById('kosar')

}
