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
            console.log("1");
            break;
        case 2:
            var2 = value;
            console.log("2");
            break;
        case 3:
            var3 = value;
            console.log("3");
            break;
        case 4:
            var4 = value;
            console.log("4");
            break;
        case 5:
            var5 = value;
            console.log("5");
            break;
        case 6:
            var6 = value;
            console.log("6");
            break;
        case 7:
            var7 = value;
            console.log("7");
            break;
        case 8:
            var8 = value;
            console.log("8");
            break;
        case 9:
            const input = document.getElementById('input-id');
            var9 = input.value;
            console.log("9");
    }
}

function getResult() {
    if (var1 > 0 && var2 > 0 && var3 > 0 && var4 > 0 && var5 > 0 && var6 > 0 && var7 > 0 && var8 > 0) {
        let product1 = var1 * var2 * var3 * var4 * var5 * var6 * var7 * var8 * var9 * var10;
        let product2 = var1 * var2 * var3 * var4 * var5 * var6 * var7 * var8 * var9 * var11;
        let product3 = var1 * var2 * var3 * var4 * var5 * var6 * var7 * var8 * var9 * var12;
        let output = document.getElementById("result");
        output.innerHTML = "азот" + " " + product1 + " " + "кг/га;" + " " + "калий" + " " + product2 + " " + "кг/га;" + "фосфор" + " " + product3 + " " + "кг/га.";
   
    }
    else {let output = document.getElementById("result");
        output.innerHTML = 'невозможно посчитать';
    }
}

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
