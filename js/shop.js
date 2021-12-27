/*
let list = new Map(JSON.parse(localStorage.getItem('shop_list'), reviver));
console.log(list);

$(document).ready(function(){
    $('.catby').on('click', function(e) {
        
        let good_price = $(this).parent().text().split(" ")[0];
        let good_name = $(this).parent().parent().find('a').first().text();
        //console.log(good_name);
        //console.log(good_price);
        
        list.set(good_name, good_price);
        localStorage.setItem('shop_list', JSON.stringify(list, replacer));

        $()
    });
});

function replacer(key, value) {
    if (value instanceof Map) {
        return {
            dataType: 'Map',
            value: Array.from(value.entries()), // or with spread: value: [...value]
        };
    } else {
        return value;
    }
}

function reviver(key, value) {
    if (typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
            return new Map(value.value);
        }
    }
    return value;
}
*/