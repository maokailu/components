export const validateType = (o, type)=>{
    let result = true;
    if (typeof o !== type) {
        result = false;
    }
    return result;
};
export const isExist = (o)=>{
    let result = true;
    if (typeof o === undefined) {
        result = false;
    }
    return result;
};
// 惰性单例
export const getSingle = function(fn) {
    // 由于闭包的存在，result一直存在于getSingle中
    var result;
    return function() {
        return result || (result = fn.apply(this, arguments));
    };
};
export const createLoginLayer = function() {
    var div = document.createElement('div');
    div.id = 'box';
    div.innerHTML = `<div style="margin-left: 10px">我是登录浮窗</div>`;
    div.style.display = 'none';
    document.body.appendChild(div);
    setTimeout(() => {
        const dom = document.getElementById('box');
        dom.style.display = 'none';
    }, 1000);
    return div;
};

export const copy = arr => {
    var obj = arr.constructor === Array ? [] : {};
    for (var item in arr) {
        const type = Object.prototype.toString.call(arr[item]);
        if (type === 'object Object' || type === 'object Array') {
            obj[item] = copy(arr[item]);
        } else {
            obj[item] = arr[item];
        }
    }
    return obj;
};

// es5
export const unique = list => {
    let obj = {};
    return list.filter(item => {
        const key = typeof item + item;
        if (Object.hasOwnProperty(key)) {
            return false;
        } else {
            obj[key] = true;
            return true;
        }
    });
};

const uniq = list => {
    let filteredList = [];
    // filteredList = list.filter((item, index) => list.indexOf(item) === index);
    // find length > 1
    // list.
    return filteredList;
};

export const getData = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                resolve(xhr.response);
                // reject(new Error(xhr.response));
            }
        };
        xhr.open('POST', url);
        xhr.send();
    });
};

