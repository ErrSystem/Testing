function model(color, text, ID) {
    this.color = color;
    this.text = text;
    this.id = ID;
    Objs.push(this)
}
function EditDom(Element) {
    for (Obj of Objs) {
        const p = document.getElementById(Obj.id);
        p.style.color = Obj.color;
        p.innerHTML = Obj.text;
        console.log(Obj);
    }
}

const Objs = [];

const paragraph = new model('red', 'yeah bro', 'contener');
const secondParagraph = new model('yellow', 'no way man', 'not_contener');
const thirdParagraph = new model('blue', 'woah', 'Obj');

EditDom();