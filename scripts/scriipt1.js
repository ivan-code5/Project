document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
});
const answers1 = ["азот 68кг/га", "азот 60кг/га", "азот 64кг/га", "азот 70кг/га, рекоммендуется органо-минеральное внесение", "фосфор 92кг/га", "фосфор 89кг/га", "фосфор 90кг/га", "фосфор 92кг/га", "фосфор 86кг/га", "фосфор 98кг/га", "фосфор 96кг/га", "фосфор 90кг/га", "фосфор 94кг/га", "фосфор 88кг/га", "калий 94кг/га", "калий 92кг/га", "калий 96кг/га", "калий 90кг/га", "калий 94кг/га", "калий 88кг/га", "калий 92кг/га", "рекомендуется внесение жидких и твёрдых прикорневых удобрений и микроэлементов", "рекомендуется основное внесение и полистовые подкормки"];
document.getElementById("h1").addEventListener("click", function (answer) { 
    document.getElementById("result1").textContent = answers1[0] + "" + ";";
});
document.getElementById("h2").addEventListener("click", function (answer) { 
    document.getElementById("result1").textContent = answers1[1] + "" + ";";
});
document.getElementById("h3").addEventListener("click", function (answer) { 
    document.getElementById("result1").textContent = answers1[2] + "" + ";";
});
document.getElementById("h4").addEventListener("click", function (answer) { 
    document.getElementById("result1").textContent = answers1[3] + "" + ";";
});
document.getElementById("h5").addEventListener("click", function (answer) { 
    document.getElementById("result2").textContent = answers1[4] + "" + ";";
});
document.getElementById("h6").addEventListener("click", function (answer) { 
    document.getElementById("result2").textContent = answers1[5] + "" + ";";
});
document.getElementById("h7").addEventListener("click", function (answer) { 
    document.getElementById("result2").textContent = answers1[6] + "" + ";";
});
document.getElementById("h8").addEventListener("click", function (answer) { 
    document.getElementById("result2").textContent = answers1[7] + "" + ";";
});
document.getElementById("h9").addEventListener("click", function (answer) { 
    document.getElementById("result2").textContent = answers1[8] + "" + ";";
});
document.getElementById("h10").addEventListener("click", function (answer) { 
    document.getElementById("result2").textContent = answers1[9] + "" + ";";
});
document.getElementById("h11").addEventListener("click", function (answer) { 
    document.getElementById("result2").textContent = answers1[10] + "" + ";";
});
document.getElementById("h12").addEventListener("click", function (answer) { 
    document.getElementById("result2").textContent = answers1[11] + "" + ";";
});
document.getElementById("h13").addEventListener("click", function (answer) { 
    document.getElementById("result2").textContent = answers1[12] + "" + ";";
});
document.getElementById("h14").addEventListener("click", function (answer) { 
    document.getElementById("result2").textContent = answers1[13] + "" + ";";
});
document.getElementById("h15").addEventListener("click", function (answer) { 
    document.getElementById("result3").textContent = answers1[14] + "" + ";";
});
document.getElementById("h16").addEventListener("click", function (answer) { 
    document.getElementById("result3").textContent = answers1[15] + "" + ";";
});
document.getElementById("h17").addEventListener("click", function (answer) { 
    document.getElementById("result3").textContent = answers1[16] + "" + ";";
});
document.getElementById("h18").addEventListener("click", function (answer) { 
    document.getElementById("result3").textContent = answers1[17] + "" + ";";
});
document.getElementById("h19").addEventListener("click", function (answer) { 
    document.getElementById("result3").textContent = answers1[18] + "" + ";";
});
document.getElementById("h20").addEventListener("click", function (answer) { 
    document.getElementById("result3").textContent = answers1[19] + "" + ";";
});
document.getElementById("h21").addEventListener("click", function (answer) { 
    document.getElementById("result3").textContent = answers1[20] + "" + ";";
});
document.getElementById("h22").addEventListener("click", function (answer) { 
    document.getElementById("result4").textContent = answers1[21] + "" + ";";
});
document.getElementById("h23").addEventListener("click", function (answer) { 
    document.getElementById("result4").textContent = answers1[22] + "" + ";";
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
        document.getElementById("result").textContent = "";
    }
    location.reload();

})
/*Массив*/
/*Функция forEach выводит все значения в консоль*/
/*Массив для вывода рекомендаций*/

const instructions = ["требуется дискование,", "требуется лущение,", "рекомендуется увеличить общие средние дозы удобрений", "рекомендуется уменьшить общие средние дозы удобрений", "рекомендуется увеличить общий состав органических удобрений на 10%"];

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