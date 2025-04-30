document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});
function getValue(value, section) {
        switch (section) {
            case 1:
                var1 = value;
                console.log(var1);
                break;
            case 2:
                var2 = value;
                console.log(var2);
                break;
            case 3:
                var3 = value;
                console.log(var3);
                break;
            case 4:
                var4 = value;
                console.log(var4);
                break;
            case 5:
                var5 = value;
                console.log(var5);
                break;
            case 6:
                var6 = value;
                console.log(var6);
                break;
            case 7:
                var7 = value;
                console.log(var7);
                break;
            case 8:
                var8 = value;
                console.log(var8);
                break;
            case 9:
                const input = document.getElementById('input');
                var9 = input.value;
                console.log(var9);
                break;
        }
    }
document.getElementById("calculate").addEventListener("click", function () {
    getResult();
    var var1, var2, var3, var4, var5, var6, var7, var8, var9;
    let var10 = 60;
    let var11 = 90;
    let var12 = 90;
    
    const vars = [var1, var2, var3, var4, var5, var6, var7, var8, var9];
    let vars_res = [];
    vars.forEach(function (elem) {
        if (typeof elem == "number") vars_res.push(elem);
    });
    console.log(vars_res);

    function getResult() {
        if (var1 > 0 && var2 > 0 && var3 > 0 && var4 > 0 && var5 > 0 && var6 > 0 && var7 > 0 && var8 > 0 && var9 > 0) {
            let product1 = var1 * var2 * var3 * var4 * var5 * var6 * var7 * var8 * var9 * var10;
            let product2 = var1 * var2 * var3 * var4 * var5 * var6 * var7 * var8 * var9 * var11;
            let product3 = var1 * var2 * var3 * var4 * var5 * var6 * var7 * var8 * var9 * var12;
            let product4 = var1 * var2 * var3 * var4 * var5 * var6 * var7 * var8 * var10;
            let product5 = var1 * var2 * var3 * var4 * var5 * var6 * var7 * var8 * var11;
            let product6 = var1 * var2 * var3 * var4 * var5 * var6 * var7 * var8 * var12;

            let output = document.getElementById("result");
            output.innerHTML = "азот:" + " " + product1 + " " + "кг/" + var9 + "га" + ";" + " " + " " + " " + "калий:" + " " + product2 + " " + "кг/" + var9 + "га" + ";" + " " + " " + " " + "фосфор:" + " " + product3 + " " + "кг/" + var9 + "га" + ";" + " " + " " + " " + " " + "азот:" + " " + product4 + " " + "кг/га" + ";" + " " + " " + "калий:" + " " + product5 + " " + "кг/га" + ";" + " " + " " + " " + "фосфор:" + " " + product6 + " " + "кг/га" + ".";
        }
        else {
            alert ('невозможно посчитать')
        }
    }
});

document.getElementById("reset").addEventListener("click", function () {
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

document.getElementById("comment1").addEventListener("click", function () {
    document.getElementById("output").textContent = instructions[0] + " ";
});
document.getElementById("comment2").addEventListener("click", function () {
    document.getElementById("output").textContent = instructions[1] + " ";
});
document.getElementById("comment3").addEventListener("click", function () {
    document.getElementById("output").textContent = instructions[0] + " ";
});

document.getElementById("comment4").addEventListener("click", function () {
    document.getElementById("output").textContent = instructions[1] + " ";
});

document.getElementById("comment5").addEventListener("click", function () {
    document.getElementById("output").textContent = instructions[1] + " ";
});

document.getElementById("comment6").addEventListener("click", function () {
    document.getElementById("output").textContent = instructions[1] + " ";
});

document.getElementById("comment7").addEventListener("click", function () {
    document.getElementById("output").textContent = instructions[1] + " ";
});

document.getElementById("comment8").addEventListener("click", function () {
    document.getElementById("comment").textContent = instructions[2];
});
document.getElementById("comment9").addEventListener("click", function () {
    document.getElementById("comment").textContent = instructions[3];
});
document.getElementById("comment10").addEventListener("click", function () {
    document.getElementById("comment").textContent = instructions[4];
});

const recomendations = [
    { var: '1.011, 2', comment: 'Требуется дискование' },
    { var: '1.013, 1.015, 2', comment: 'Требуется лущение' },
    { var: '1.023, 5', comment: 'Рекомендуется увеличить общие средние дозы удобрений' },
    { var: '1.011, 5', comment: 'Рекомендуется уменьшить общие средние дозы удобрений' },
    { var: '1,018, 5', comment: 'Рекомендуется увеличить общий состав органических удобрений на 10%' },
];
recomendations.forEach((recomendation) => {
    console.log(`${recomendation.var} ${recomendation.comment}`);
});


/*json+object*/
const apiUrl = 'data.json';
let datajson;
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(typeof (data));
        datajson = data;
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    });

const a = document.getElementById("a")
a.addEventListener("click", function () {
    const objectDiv = document.getElementById('object1');
    const text = "Предупреждение об урожайности";
    const output11 = datajson.image1;
    const output12 = datajson.output1;
    objectDiv.innerHTML = `<p>${text}</p><img src="images/${output11}" alt="Image" /><p>${output12}</p>
                                       <button id="removeButton">Понятно</button>`;

    setTimeout(() => {
        objectDiv.style.display = 'block';
    }, 2000);

    const removeButton = document.getElementById('removeButton');
    removeButton.addEventListener('click', () => {
        objectDiv.style.display = 'none';
    });
});
const b = document.getElementById("b")
b.addEventListener("click", function () {
    const objectDiv = document.getElementById('object1');
    const text = "Предупреждение об урожайности";
    const output13 = datajson.image2;
    const output14 = datajson.output2;
    objectDiv.innerHTML = `<p>${text}</p><img src="images/${output13}" alt="Image" /><p>${output14}</p>
                                       <button id="removeButton">Понятно</button>`;

    setTimeout(() => {
        objectDiv.style.display = 'block';
    }, 2000);

    const removeButton = document.getElementById('removeButton');
    removeButton.addEventListener('click', () => {
        objectDiv.style.display = 'none';
    });
});
const c = document.getElementById("c")
c.addEventListener("click", function () {
    const objectDiv = document.getElementById('object1');
    const text = "Предупреждение об урожайности";
    const output15 = datajson.image3;
    const output16 = datajson.output3;
    objectDiv.innerHTML = `<p>${text}</p><img src="images/${output15}" alt="Image" /><p>${output16}</p>
                                       <button id="removeButton">Понятно</button>`;

    setTimeout(() => {
        objectDiv.style.display = 'block';
    }, 2000);

    const removeButton = document.getElementById('removeButton');
    removeButton.addEventListener('click', () => {
        objectDiv.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    preloader = document.querySelector('div#preloader');
    console.log(preloader);

    const content = document.querySelector('.content');
    if (preloader && content) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';

            content.style.display = 'block';


            preloader.remove();
        }, 1800);
    }
});