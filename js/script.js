// console.log(fillTestData());

const outTable = document.querySelector('.out-table');

const showTable = function (dataArray) {
    const {keys, data} = dataArray;

    // console.log(data);
    // console.log(keys);

    const table = document.createElement('table');

    // Вывод заголовка
    let trHeader = document.createElement('tr');
    for(let i = 0; i < keys.length; i++) {
        let th = document.createElement('th');
        th.textContent = keys[i];
        th.setAttribute('type',keys[i])
        trHeader.append(th);
    };
    table.append(trHeader);

    // Вывод данных
    for(let i = 0; i < data.length; i++) {
        let dataItems = data[i];

        // console.log(dataItems);

        let tr = document.createElement('tr');
        for(let k = 0; k < dataItems.length; k++) {
            let td = document.createElement('td');
            td.textContent = dataItems[k];
            tr.append(td);
        };
        table.append(tr);
    };


    outTable.append(table);


};

showTable(fillTestData());