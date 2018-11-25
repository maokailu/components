// state: default false (closed)
const createToast = () => {
    // eslint-disable-next-line no-unused-vars
    var t = 1;
    return () =>{
        console.log(t++); // 123456
    };
};
export { createToast };
