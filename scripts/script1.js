document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
  });

document.getElementById("calculate").addEventListener("click", function () {
    alert("Результаты получены");
    getResult();
});
var var1, var2, var3, var4, var5, var6, var7, var8, var9;
let var10 = 60;
let var11 = 90;
let var12 = 90;
function getValue(value, section) {
    switch (section) {
        case 1:
            var1 = value;
            break;
        case 2:
            var2 = value;
            break;
        case 3:
            var3 = value;
            break;
        case 4:
            var4 = value;
            break;
        case 5:
            var5 = value;
            break;
        case 6:
            var6 = value;
            break;
        case 7:
            var7 = value;
            break;
        case 8:
            var8 = value;
            break;
        case 9:
            const input = document.getElementById('input-id');
            var9 = input.value;
    }
}
        const vars = [var1, var2, var3, var4, var5, var6, var7, var8, var9];
        let vars_res = [];
        vars.forEach(function(elem) {
         if(typeof elem == "number") vars_res.push(elem);
        });
        console.log(vars_res);

function getResult() {
    if (var1 > 0 && var2 > 0 && var3 > 0 && var4 > 0 && var5 > 0 && var6 > 0 && var7 > 0 && var8 > 0) {
        let product1 = var1 * var2 * var3 * var4 * var5 * var6 * var7 * var8 * var9 * var10;
        let product2 = var1 * var2 * var3 * var4 * var5 * var6 * var7 * var8 * var9 * var11;
        let product3 = var1 * var2 * var3 * var4 * var5 * var6 * var7 * var8 * var9 * var12;
        let product4 = var1 * var2 * var3 * var4 * var5 * var6 * var7 * var8 * var10;
        let product5 = var1 * var2 * var3 * var4 * var5 * var6 * var7 * var8 * var11;
        let product6 = var1 * var2 * var3 * var4 * var5 * var6 * var7 * var8 * var12;
        let output = document.getElementById("result");
        output.innerHTML = "азот:" + " " + product1 + " " + "кг/" + var9 + "га" + ";" + " " + " " + " " + "калий:" + " " + product2 + " " + "кг/" + var9 + "га" + ";" + " " + " " + " " + "фосфор:" + " " + product3 + " " + "кг/" + var9 + "га" + ";" + " " + " " + " " + " " + "азот:" + " " + product4 + " " + "кг/га" + ";" + " " + " " + "калий:" + " " + product5 + " " + "кг/га" + ";" + " " + " " + " " + "фосфор:" + " " + product6 + " " + "кг/га" + ".";
        }
    else {let output = document.getElementById("result");
        output.innerHTML = 'невозможно посчитать';
    }
}

document.getElementById("reset").addEventListener("click", function(){
    window.scrollTo(0, 0)
    function reset() {
        var1 = null;
        var2 = null;
        var3 = null;
        var4 = null;
        var5 = null;
        var6 = null;
        var7 = null;
        var8 = null;
        var9 = null;
        document.getElementById("result").textContent = "";
    }
    location.reload();
    })

/*Массив*/
/*Функция forEach выводит все значения в консоль*/ 
/*Массив для вывода рекомендаций*/ 

const instructions = ["Требуется дискование,", "Требуется лущение,", "рекомендуется увеличить общие средние дозы удобрений", "рекомендуется уменьшить общие средние дозы удобрений", "рекомендуется увеличить общий состав органических удобрений на 10%"];

     document.getElementById("comment1").addEventListener("click", function() {
        document.getElementById("output").textContent=instructions[0] + " ";
    });
     document.getElementById("comment2").addEventListener("click", function() {
        document.getElementById("output").textContent=instructions[1] + " ";
    });
     document.getElementById("comment3").addEventListener("click", function() {
        document.getElementById("output").textContent=instructions[0] + " ";
    });

     document.getElementById("comment4").addEventListener("click", function() {
        document.getElementById("output").textContent=instructions[1] + " ";
    });
      
      document.getElementById("comment5").addEventListener("click", function() {
        document.getElementById("output").textContent=instructions[1] + " ";
    });

      document.getElementById("comment6").addEventListener("click", function() {
        document.getElementById("output").textContent = instructions[1] + " ";
    }); 

      document.getElementById("comment7").addEventListener("click", function() {
        document.getElementById("output").textContent = instructions[1] + " ";
    });
  
     document.getElementById("comment8").addEventListener("click", function() {
        document.getElementById("comment").textContent = instructions[2];
    });
     document.getElementById("comment9").addEventListener("click", function() {
        document.getElementById("comment").textContent = instructions[3];
    });
     document.getElementById("comment10").addEventListener("click", function() {
        document.getElementById("comment").textContent = instructions[4];
});

const recomendations = [
    { var: '1.011, 2', comment: 'Требуется дискование'},
    { var: '1.013, 1.015, 2', comment: 'Требуется лущение'},
    { var: '1.023, 5', comment: 'Рекомендуется увеличить общие средние дозы удобрений'},
    { var: '1.011, 5', comment: 'Рекомендуется уменьшить общие средние дозы удобрений'},
    { var: '1,018, 5', comment: 'Рекомендуется увеличить общий состав органических удобрений на 10%'},
    ];
    recomendations.forEach((recomendation) => {
    console.log(`${recomendation.var} ${recomendation.comment}`);
});    

/*object*/

const object1 = {
    section: "1",
    var: "Количество осадков за прошлый год",
};
for (let key in object1) {
    console.log(`${key}: ${object1[key]}`);
 }

const object2 = {
    section: "2",
    var: "Регион",
};
for (let key in object2) {
    console.log(`${key}: ${object2[key]}`);
 }

const object3 = {
    section: "3",
    var: "Предыдущая культура",
};
for (let key in object3) {
    console.log(`${key}: ${object3[key]}`);
}

const object4 = {
   section: "4",
    var: "Структура почвы",
};
for (let key in object4) {
    console.log(`${key}: ${object4[key]}`);
}

const object5 = {
    section: "5",
    var: "Тип почвы",
};
for (let key in object5) {
    console.log(`${key}: ${object5[key]}`);
}

const object6 = {
    section: "6",
    var: "Использованные удобрения",
};
for (let key in object6) {
    console.log(`${key}: ${object6[key]}`);
}

const object7 = {
    section: "7",
    var: "Нынешняя культура",
};
for (let key in object7) {
    console.log(`${key}: ${object7[key]}`);
}

const object8 = {
    section: "8",
    var: "Гибридность",
};
for (let key in object8) {
    console.log(`${key}: ${object8[key]}`);
}

const object9 = {
    section: "9",
    var: "Способ обработки почвы",
};
for (let key in object9) {
    console.log(`${key}: ${object9[key]}`);
}

const object10 = {
    section: "10",
    var: "Площадь",
};
for (let key in object10) {
    console.log(`${key}: ${object10[key]}`);
}

const object11 = {
    section: "11",
    var: "Результаты",
};
for (let key in object11) {
    console.log(`${key}: ${object11[key]}`);
}
