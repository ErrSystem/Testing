function model(color, text, ID) {
    this.color = color;
    this.text = text;
    this.id = ID;
    this.GetThis = function (){
      return this;
    }
}
function EditDom(Element) {
    const p = document.getElementById(Element.id);
    p.style.color = Element.color;
    p.innerHTML = Element.text;
    console.log(Element);
}

const paragraph = new model('red', 'yeah bro', 'contener');
const secondParagraph = new model('yellow', 'no way man', 'not_contener');
const thirdParagraph = new model('blue', 'woah', 'Obj');

const text = [paragraph, secondParagraph, thirdParagraph];

for (Element of text) {
    EditDom(Element.GetThis());
}