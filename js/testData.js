function fillTestData(){
    // keys = ['date', 'number'];
    keys = ['date', 'number', 'string'];
    let data = [];
    let getRand = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    let randDate = () => new Date(Math.floor(now + Math.random() * (end_date - now))).toLocaleString();
    let getRandString = function(){
        let ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = "";
        for( let j = 0; j < 10; j++ ){
            result += ch.charAt(Math.floor(Math.random() * ch.length));
        }
        return result;
    };
    let now = Date.now();
    let end_date = now + (86400000 * 365 * 2);
    for( let i=0; i < 10; i++ ){
        data.push(
            [
                randDate(),
                getRand(1111, 99999),
                getRandString()
            ]
        );
    }
    return {
        keys: keys,
        data: data
    }
}

// console.log(fillTestData0())

// console.log(fillTestData().data)