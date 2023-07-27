class car {
    constructor(color, form, year) {
        this.color = color;
        this.form = form;
        this.year = year;
    }
}

let Porsche = new car('Red', 'Spider', 2023);

let PC = {
        Processor: 'Intel 9 2022',
        RAM: '32 Giga Bytes',
    }

console.log(Porsche, PC)