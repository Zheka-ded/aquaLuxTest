// Куда выводим таблицу
const outTable = document.querySelector('.out-table');

const fillTestDataArr = fillTestData();

const attributeDataName = 'data-name';

const showTable = function (dataArray) {

    let countDate = 0;
    let countNumber = 0;
    let countString = 0;

    const {keys, data} = dataArray;

    const table = document.createElement('table');

    // Вывод заголовка
    let trHeader = document.createElement('tr');
    for(let i = 0; i < keys.length; i++) {

        let th = document.createElement('th');
        th.textContent = keys[i];
        th.classList.add('keys');
        th.setAttribute(attributeDataName,keys[i]);

        trHeader.append(th);
    };

    table.append(trHeader);

    // Вывод данных
    const tableData = function(data){

        for(let i = 0; i < data.length; i++) {

            let dataItems = data[i];

            let tr = document.createElement('tr');
            tr.classList.add('table-items');

            for(let k = 0; k < dataItems.length; k++) {
                let td = document.createElement('td');
                td.textContent = dataItems[k];
                tr.append(td);
            };

            table.append(tr);
        };
    }

    tableData(data)

    outTable.append(table);

    // Очистка таблицы перед отрисовкой
    const removeTadle = function(){
        let forRemoved = document.querySelectorAll('.table-items');
        for(let i = 0; i < forRemoved.length; i++) forRemoved[i].remove();
    };
    
    // // Сортировка даты
    const sortDate = function(){
        
        let date = fillTestDataArr.data;

        date.sort(function(a, b) {

            // Махинации для корректного перевода даты в миллисекунды
            let a1 = a[0].split(',');
            let a2 = a1[0].split('.').reverse().join('.').concat(a1[1]);
            
            let b1 = b[0].split(',');
            let b2 = b1[0].split('.').reverse().join('.').concat(b1[1]);
            
            return Date.parse(a2) - Date.parse(b2);

        });

        countDate++;

        countDate % 2 === 1 ? tableData(date) : tableData(date.reverse());
    }

    // Сортировка номеров
    const sortNumber = function(){
        
        let numbers = fillTestDataArr.data;

        numbers.sort(function(a, b) {
            return a[1] - b[1];
        });

        countNumber++;

        countNumber % 2 === 1 ? tableData(numbers) : tableData(numbers.reverse());
    }

    // Сортировка строк
    const sortString = function(){
        
        let someString = fillTestDataArr.data;

        someString.sort(function(a, b){

            if (a[2] < b[2]) return -1;

            if (a[2] > b[2]) return 1;

            return 0;
        })

        countString++;

        countString % 2 === 1 ? tableData(someString) : tableData(someString.reverse());
    }

    // Заголовки таблицы
    const tableHeaderList = document.querySelectorAll('.keys');

    // Выбор фильтра
    const checkFilter = function(event) {
        let name = event.target.getAttribute(attributeDataName);

        // Очистить таблицу
        removeTadle();

        if(name === 'date') sortDate();

        if(name === 'number') sortNumber();

        if(name === 'string') sortString();

        
        for (let i = 0; i < tableHeaderList.length; i++) tableHeaderList[i].classList.remove('active');

        event.target.classList.add('active');
        
    };

    // Вешаем функцию выбор фильтра на событие клик
    for (let i = 0; i < tableHeaderList.length; i++) tableHeaderList[i].onclick = checkFilter;

};

showTable(fillTestDataArr);