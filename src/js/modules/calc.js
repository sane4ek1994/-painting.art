const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultlBlock = document.querySelector(result);
    
    let sum = 0;

    const calcFunctions = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value === '' || materialBlock.value === '') {
            resultlBlock.textContent = 'Пожалуйста выберете материал и размер картины!';
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultlBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultlBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', calcFunctions);
    materialBlock.addEventListener('change', calcFunctions);
    optionsBlock.addEventListener('change', calcFunctions);
    promocodeBlock.addEventListener('change', calcFunctions);
};  

export default calc;