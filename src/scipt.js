let randomizeBtn = document.querySelector('button');
let colorContainer = document.querySelector('.color-container')


const randomColorFunction = () => {
    for (let i = 0; i < 8; i++) {
        let randomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
        let color = randomColor();
        let box = document.createElement('div');
        let boxClasses = "bg-white rounded-lg shadow-lg".split(' ')
        box.classList.add(...boxClasses)
        box.innerHTML = `
        <div class="h-52 xs:h-56 lg:h-64 xl:h-72 rounded-t-lg" style="background-color:${color}"></div>
        <div class="flex-grow flex justify-center items-center p-8">
        <h2 class="text-lg sm:text-xl md:text-2xl font-semibold text-gray-950">${color}</h2>
        </div>
        `
        colorContainer.append(box)
    }
}

randomizeBtn.addEventListener('click', () => {
    const boxes = colorContainer.querySelectorAll('div')
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].remove();
    }
    randomColorFunction()
})
randomizeBtn.onload = randomColorFunction();