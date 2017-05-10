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

              function check() {
                var keves = [];
                for (var k in kavek) {
                    if (kavek[k].instock < 3) {
                        keves += kavek[k].name + ' , ';}
                 }
                 alert('3 kg alatti a készletmenyiség a következő fajtákból: ' + '\n' + keves);
               }

               function strenght() {
                   var light = [];
                   var medium = [];
                   var strong = [];
                   for (var k in kavek) {
                       if (kavek[k].strength > 0 && kavek[k].strength < 4) {
                           light.push(kavek[k].name);
                       } else if (kavek[k].strength >= 4 && kavek[k].strength < 8) {
                           medium.push(kavek[k].name);
                       } else {
                           strong.push(kavek[k].name)
                       }
                    }
                    alert('Light: ' + light + ', \n' + 'Medium: ' + medium + ', \n' + 'Strong: ' + strong)   
                 }

                 function country() {
                   var temp;
                   for (var i = 0; i < kavek.length - 1; i++) {
                       for (var j = i + 1; j < kavek.length; j++) {
                            if (kavek[i].origen.localeCompare(kavek[j].origen ) > 0) {
                                temp = [kavek[i], kavek[j]];
                                kavek[i] = temp[1];
                                kavek[j] = temp[0];
                            }
                            if (kavek[i].origen === kavek[j].origen && kavek[i].name.localeCompare(kavek[j].name) > 0) {
                                temp = [kavek[i], kavek[j]];
                                kavek[i] = temp[1];
                                kavek[j] = temp[0];
                            }
                       }
                    }
                  }

                  for (i=0; i<kavek.length;i++) {
                    document.getElementById('coffeetable').innerHTML += '<tr>' + '<td>' + kavek[i].name + ' </td> ' + '<td> ' + kavek[i].origen + ' </td> ' + '<td>' + kavek[i].strength + '</td>' + '<td>' + kavek[i].instock + '</td>' + '</tr>';   
                  } 
