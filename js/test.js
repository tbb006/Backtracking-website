const IntrebariTest = [
    {
        intrebare: "Ce este metoda backtracking?",
        a: "Un algoritm ce calculează cel mai mare număr dintr-un șir ",
        b: "Un algoritm ce calculează cel mai mare divizor comun ",
        c: "Un algoritm de sortare ",
        d: "Un algoritm general de descoperire a tuturor soluțiilor unei probleme de calcul",
        corect: "d",
    },
    {
        intrebare: "Care dintre următoarele probleme NU se rezolvă cu ajutorul metodei backtracking?",
        a: "Generarea permutărilor",
        b: "Sortarea crescătoare a unui vector",
        c: "Generarea aranjamentelor",
        d: "Problema celor n regine",
        corect: "b",
    },
    {
        intrebare: "Câte soluții valide are problema celor 8 regine?",
        a: "92 soluții distincte",
        b: "48 soluții distincte",
        c: "24 soluții distincte",
        d: "8 soluții distincte",
        corect: "a",
    },
    {
        intrebare: "Pentru ce valori nu există soluții la problema celor n regine?",
        a: "n=4",
        b: "n=8",
        c: "n=2",
        d: "n=9",
        corect: "c",
    },
    {
        intrebare: "Care dintre următoarele variante NU reprezintă o soluție a generărării permutărilor pentru n=3?",
        a: "1,3,2",
        b: "3,1,2",
        c: "2,3,1",
        d: "2,1,0",
        corect: "d",
    },

];

const test= document.getElementById('test')
const raspunsE1 = document.querySelectorAll('.raspuns')
const intrebareE1 = document.getElementById('intrebare')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const trimiteBtn = document.getElementById('trimite')


let i = 0
let scor = 0

Test()

function Test() {

    debif()

    const info = IntrebariTest[i]

    intrebareE1.innerText = info.intrebare
    a_text.innerText = info.a
    b_text.innerText = info.b
    c_text.innerText = info.c
    d_text.innerText = info.d
}

function debif() {
    raspunsE1.forEach(raspunsE1 => raspunsE1.checked = false)
}

function select() {
    let raspuns
    raspunsE1.forEach(raspunsE1 => {
        if(raspunsE1.checked) {
            raspuns = raspunsE1.id
        }
    })
    return raspuns
}


trimiteBtn.addEventListener('click', () => {
    const raspuns = select()
    if(raspuns) {
       if(raspuns === IntrebariTest[i].corect) {
           scor++
       }

       i++

       if(i < IntrebariTest.length) {
           Test()
       } else {
        test.innerHTML = `
           <h3> Ai obținut ${scor}/${IntrebariTest.length} răspunsuri corecte </h3>
           <button onclick="location.reload()">Reîncercați</button>
           `
       }
    }
})