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

var var13, var14;
document.getElementById("comment1").addEventListener("click", function(){
    let var13 = "Требуется дискование";
     });
document.getElementById("comment2").addEventListener("click", function(){
    let var13 = "Требуется лущение";
    });
document.getElementById("comment3").addEventListener("click", function(){
    let var14 = "Рекомендуется уменьшить общие средние дозы удобрений";
    });
document.getElementById("comment4").addEventListener("click", function(){
    let var14 = "Рекомендуется уменьшить общие средние дозы удобрений";
     });
document.getElementById("comment5").addEventListener("click", function(){
    let var14 = "Рекомендуется увеличить общий состав органических удобрений на 10%";
     });
