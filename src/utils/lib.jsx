const validateType = (o, type)=>{
    let result = true;
    if (typeof o !== type) {
        result = false;
    }
    return result;
};
const isExist = (o)=>{
    let result = true;
    if (typeof o === undefined) {
        result = false;
    }
    return result;
};
// 惰性单例
var getSingle = function(fn) {
    // 由于闭包的存在，result一直存在于getSingle中
    var result;
    return function() {
        return result || (result = fn.apply(this, arguments));
    };
};
var createLoginLayer = function() {
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
export {
    validateType,
    isExist,
    getSingle,
    createLoginLayer
};

