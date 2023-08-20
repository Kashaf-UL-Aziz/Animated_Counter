const myNum = document.querySelectorAll(".count");
let speed = 100;

myNum.forEach((myCount) => {
    let target_count = myCount.dataset.count;
    let init_count = +myCount.innerText;
    let newIncrement = Math.floor(target_count / speed);
    const updateNum = () => {
        init_count += newIncrement;
        myCount.innerText = init_count;
        if (init_count < target_count) {
            setTimeout(() => {
                updateNum()
            }, 5)
        }

    }

    updateNum();

})