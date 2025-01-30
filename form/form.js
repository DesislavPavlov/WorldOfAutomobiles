// Switch form logic
const datasteps = document.querySelectorAll('[data-step]');
const dataProgressSteps = document.querySelectorAll('[data-progress-step]');
const buttons = document.querySelectorAll('.btn');

let currentDataStep = 0;

datasteps[currentDataStep].style.animationName = "showDataStep";
datasteps[currentDataStep].style.display = "flex";

buttons.forEach(button => {
    let incrementor;
    if (button.hasAttribute('data-next'))
        incrementor = 1;
    else if (button.hasAttribute('data-end'))
        return;
    else 
        incrementor = -1;


    button.addEventListener("click", () => {
        button.disabled = true;
        currentDataStep += incrementor;
        updateDataStep();
        setTimeout(() => {
            button.disabled = false;
        }, 500);
    });
});

function updateDataStep() {
    datasteps.forEach(ds => {
        if (ds !== datasteps[currentDataStep]) {
            ds.style.animationName = "hideDataStep";

            setTimeout(() => {
                ds.style.display = "none"; 
            }, 500);

            for (let i = 0; i < dataProgressSteps.length; i++) {
                const dpsClassList = dataProgressSteps[i].classList;
                dpsClassList.remove('completed', 'active');

                if (i === currentDataStep) {
                    dpsClassList.add('active');
                }
                else if (i < currentDataStep) {
                    dpsClassList.add('completed');
                }
            }
        }
    });
    
    setTimeout(() => {
        datasteps[currentDataStep].style.animationName = "showDataStep";
        datasteps[currentDataStep].style.display = "flex"; 
    }, 500);
}

updateDataStep();



// Form select active state logic
const selects = document.querySelectorAll('select');

document.addEventListener("click", e => {
    selects.forEach(select => {
        if (select === e.target) {
            select.classList.toggle('active');
        }
        else {
            select.classList.remove('active');
        }
    });
});



// Form brand/model selects logic
const brands = {
    'bmw': [
        "1-серия",
        "&nbsp;&nbsp;&nbsp;114",
        "&nbsp;&nbsp;&nbsp;116",
        "&nbsp;&nbsp;&nbsp;118",
        "&nbsp;&nbsp;&nbsp;120",
        "&nbsp;&nbsp;&nbsp;123",
        "&nbsp;&nbsp;&nbsp;125",
        "&nbsp;&nbsp;&nbsp;128",
        "&nbsp;&nbsp;&nbsp;130",
        "&nbsp;&nbsp;&nbsp;135",
        "&nbsp;&nbsp;&nbsp;1800",
        "&nbsp;&nbsp;&nbsp;1M",
        "2-серия",
        "&nbsp;&nbsp;&nbsp;2 Active Tourer",
        "&nbsp;&nbsp;&nbsp;2 Gran Coupe",
        "&nbsp;&nbsp;&nbsp;2 Gran Tourer",
        "&nbsp;&nbsp;&nbsp;2000",
        "&nbsp;&nbsp;&nbsp;2002",
        "&nbsp;&nbsp;&nbsp;216",
        "&nbsp;&nbsp;&nbsp;218",
        "&nbsp;&nbsp;&nbsp;220",
        "&nbsp;&nbsp;&nbsp;220 d",
        "&nbsp;&nbsp;&nbsp;225",
        "&nbsp;&nbsp;&nbsp;228",
        "&nbsp;&nbsp;&nbsp;230",
        "&nbsp;&nbsp;&nbsp;235",
        "&nbsp;&nbsp;&nbsp;240",
        "3-серия",
        "&nbsp;&nbsp;&nbsp;315",
        "&nbsp;&nbsp;&nbsp;316",
        "&nbsp;&nbsp;&nbsp;318",
        "&nbsp;&nbsp;&nbsp;320",
        "&nbsp;&nbsp;&nbsp;323",
        "&nbsp;&nbsp;&nbsp;324",
        "&nbsp;&nbsp;&nbsp;325",
        "&nbsp;&nbsp;&nbsp;328",
        "&nbsp;&nbsp;&nbsp;330",
        "&nbsp;&nbsp;&nbsp;335",
        "&nbsp;&nbsp;&nbsp;340",
        "&nbsp;&nbsp;&nbsp;3gt",
        "4-серия",
        "&nbsp;&nbsp;&nbsp;418",
        "&nbsp;&nbsp;&nbsp;420",
        "&nbsp;&nbsp;&nbsp;425",
        "&nbsp;&nbsp;&nbsp;428",
        "&nbsp;&nbsp;&nbsp;430",
        "&nbsp;&nbsp;&nbsp;435",
        "&nbsp;&nbsp;&nbsp;440",
        "5-серия",
        "&nbsp;&nbsp;&nbsp;5 Gran Turismo",
        "&nbsp;&nbsp;&nbsp;501",
        "&nbsp;&nbsp;&nbsp;518",
        "&nbsp;&nbsp;&nbsp;520",
        "&nbsp;&nbsp;&nbsp;523",
        "&nbsp;&nbsp;&nbsp;524",
        "&nbsp;&nbsp;&nbsp;525",
        "&nbsp;&nbsp;&nbsp;528",
        "&nbsp;&nbsp;&nbsp;530",
        "&nbsp;&nbsp;&nbsp;530E",
        "&nbsp;&nbsp;&nbsp;535",
        "&nbsp;&nbsp;&nbsp;540",
        "&nbsp;&nbsp;&nbsp;545",
        "&nbsp;&nbsp;&nbsp;550",
        "6-серия",
        "&nbsp;&nbsp;&nbsp;6 GT",
        "&nbsp;&nbsp;&nbsp;628",
        "&nbsp;&nbsp;&nbsp;630",
        "&nbsp;&nbsp;&nbsp;635",
        "&nbsp;&nbsp;&nbsp;640",
        "&nbsp;&nbsp;&nbsp;645",
        "&nbsp;&nbsp;&nbsp;650",
        "7-серия",
        "&nbsp;&nbsp;&nbsp;700",
        "&nbsp;&nbsp;&nbsp;725",
        "&nbsp;&nbsp;&nbsp;728",
        "&nbsp;&nbsp;&nbsp;730",
        "&nbsp;&nbsp;&nbsp;733",
        "&nbsp;&nbsp;&nbsp;735",
        "&nbsp;&nbsp;&nbsp;740",
        "&nbsp;&nbsp;&nbsp;745",
        "&nbsp;&nbsp;&nbsp;750",
        "&nbsp;&nbsp;&nbsp;760",
        "840",
        "850",
        "M-серия",
        "&nbsp;&nbsp;&nbsp;M Coupе",
        "&nbsp;&nbsp;&nbsp;M135",
        "&nbsp;&nbsp;&nbsp;M140",
        "&nbsp;&nbsp;&nbsp;M2",
        "&nbsp;&nbsp;&nbsp;M3",
        "&nbsp;&nbsp;&nbsp;M4",
        "&nbsp;&nbsp;&nbsp;M5",
        "&nbsp;&nbsp;&nbsp;M6",
        "&nbsp;&nbsp;&nbsp;M8",
        "X1",
        "X2",
        "X3",
        "X4",
        "X5",
        "X5M",
        "X6",
        "X7",
        "XM",
        "Z3",
        "Z4",
        "i3",
        "i4",
        "i5",
        "i7",
        "i8",
        "iX",
        "iX1",
        "iX2",
        "iX3"
      ],
    'mercedes-benz': [
        "110",
        "110",
        "111",
        "113",
        "114",
        "115",
        "116",
        "123",
        "124",
        "126",
        "126-260",
        "150",
        "170",
        "180",
        "190",
        "200",
        "220",
        "230",
        "240",
        "250",
        "260",
        "280",
        "290",
        "300",
        "320",
        "350",
        "380",
        "420",
        "450",
        "500",
        "560",
        "600",
        "A-класа",
        "&nbsp;&nbsp;&nbsp;A 140",
        "&nbsp;&nbsp;&nbsp;A 150",
        "&nbsp;&nbsp;&nbsp;A 160",
        "&nbsp;&nbsp;&nbsp;A 170",
        "&nbsp;&nbsp;&nbsp;A 180",
        "&nbsp;&nbsp;&nbsp;A 190",
        "&nbsp;&nbsp;&nbsp;A 200",
        "&nbsp;&nbsp;&nbsp;A 210",
        "&nbsp;&nbsp;&nbsp;A 220",
        "&nbsp;&nbsp;&nbsp;A 250",
        "&nbsp;&nbsp;&nbsp;A 35",
        "&nbsp;&nbsp;&nbsp;A 45",
        "A45 AMG",
        "AMG GT",
        "AMG GT C",
        "AMG GT R",
        "AMG GT S",
        "B-класа",
        "&nbsp;&nbsp;&nbsp;B 150",
        "&nbsp;&nbsp;&nbsp;B 160",
        "&nbsp;&nbsp;&nbsp;B 170",
        "&nbsp;&nbsp;&nbsp;B 180",
        "&nbsp;&nbsp;&nbsp;B 200",
        "&nbsp;&nbsp;&nbsp;B 220",
        "&nbsp;&nbsp;&nbsp;B 250",
        "C-класа",
        "&nbsp;&nbsp;&nbsp;C 160",
        "&nbsp;&nbsp;&nbsp;C 180",
        "&nbsp;&nbsp;&nbsp;C 200",
        "&nbsp;&nbsp;&nbsp;C 220",
        "&nbsp;&nbsp;&nbsp;C 230",
        "&nbsp;&nbsp;&nbsp;C 240",
        "&nbsp;&nbsp;&nbsp;C 250",
        "&nbsp;&nbsp;&nbsp;C 270",
        "&nbsp;&nbsp;&nbsp;C 280",
        "&nbsp;&nbsp;&nbsp;C 30 AMG",
        "&nbsp;&nbsp;&nbsp;C 300",
        "&nbsp;&nbsp;&nbsp;C 32 AMG",
        "&nbsp;&nbsp;&nbsp;C 320",
        "&nbsp;&nbsp;&nbsp;C 350",
        "&nbsp;&nbsp;&nbsp;C 36 AMG",
        "&nbsp;&nbsp;&nbsp;C 400",
        "&nbsp;&nbsp;&nbsp;C 43 AMG",
        "&nbsp;&nbsp;&nbsp;C 450 AMG",
        "&nbsp;&nbsp;&nbsp;C 55 AMG",
        "&nbsp;&nbsp;&nbsp;C 63 AMG",
        "CL-класа",
        "&nbsp;&nbsp;&nbsp;CL 320",
        "&nbsp;&nbsp;&nbsp;CL 420",
        "&nbsp;&nbsp;&nbsp;CL 500",
        "&nbsp;&nbsp;&nbsp;CL 55 AMG",
        "&nbsp;&nbsp;&nbsp;CL 600",
        "&nbsp;&nbsp;&nbsp;CL 63 AMG",
        "&nbsp;&nbsp;&nbsp;CL 65 AMG",
        "CLA-класа",
        "&nbsp;&nbsp;&nbsp;CLA 180",
        "&nbsp;&nbsp;&nbsp;CLA 200",
        "&nbsp;&nbsp;&nbsp;CLA 220",
        "&nbsp;&nbsp;&nbsp;CLA 250",
        "&nbsp;&nbsp;&nbsp;CLA 350 AMG",
        "&nbsp;&nbsp;&nbsp;CLA 45 AMG",
        "CLC-класа",
        "&nbsp;&nbsp;&nbsp;CLC 160",
        "&nbsp;&nbsp;&nbsp;CLC 180",
        "&nbsp;&nbsp;&nbsp;CLC 200",
        "&nbsp;&nbsp;&nbsp;CLC 220",
        "&nbsp;&nbsp;&nbsp;CLC 230",
        "&nbsp;&nbsp;&nbsp;CLC 350",
        "CLE",
        "CLK-класа",
        "&nbsp;&nbsp;&nbsp;CLK 55 AMG",
        "CLS-класа",
        "&nbsp;&nbsp;&nbsp;CLS 220",
        "&nbsp;&nbsp;&nbsp;CLS 250",
        "&nbsp;&nbsp;&nbsp;CLS 300",
        "&nbsp;&nbsp;&nbsp;CLS 320",
        "&nbsp;&nbsp;&nbsp;CLS 350",
        "&nbsp;&nbsp;&nbsp;CLS 400",
        "&nbsp;&nbsp;&nbsp;CLS 450",
        "&nbsp;&nbsp;&nbsp;CLS 500",
        "&nbsp;&nbsp;&nbsp;CLS 53 AMG",
        "&nbsp;&nbsp;&nbsp;CLS 55",
        "&nbsp;&nbsp;&nbsp;CLS 55 AMG",
        "&nbsp;&nbsp;&nbsp;CLS 550",
        "&nbsp;&nbsp;&nbsp;CLS 63 AMG",
        "Citan",
        "E-класа",
        "&nbsp;&nbsp;&nbsp;E 200",
        "&nbsp;&nbsp;&nbsp;E 220",
        "&nbsp;&nbsp;&nbsp;E 230",
        "&nbsp;&nbsp;&nbsp;E 240",
        "&nbsp;&nbsp;&nbsp;E 250",
        "&nbsp;&nbsp;&nbsp;E 260",
        "&nbsp;&nbsp;&nbsp;E 270",
        "&nbsp;&nbsp;&nbsp;E 280",
        "&nbsp;&nbsp;&nbsp;E 290",
        "&nbsp;&nbsp;&nbsp;E 300",
        "&nbsp;&nbsp;&nbsp;E 320",
        "&nbsp;&nbsp;&nbsp;E 350",
        "&nbsp;&nbsp;&nbsp;E 36 AMG",
        "&nbsp;&nbsp;&nbsp;E 400",
        "&nbsp;&nbsp;&nbsp;E 420",
        "&nbsp;&nbsp;&nbsp;E 43 AMG",
        "&nbsp;&nbsp;&nbsp;E 430",
        "&nbsp;&nbsp;&nbsp;E 450",
        "&nbsp;&nbsp;&nbsp;E 50 AMG",
        "&nbsp;&nbsp;&nbsp;E 500",
        "&nbsp;&nbsp;&nbsp;E 53 AMG",
        "&nbsp;&nbsp;&nbsp;E 55",
        "&nbsp;&nbsp;&nbsp;E 55 AMG",
        "&nbsp;&nbsp;&nbsp;E 63 AMG",
        "EQA",
        "EQB",
        "EQC",
        "EQE",
        "EQS",
        "EQV",
        "G-класа",
        "&nbsp;&nbsp;&nbsp;G 230",
        "&nbsp;&nbsp;&nbsp;G 240",
        "&nbsp;&nbsp;&nbsp;G 250",
        "&nbsp;&nbsp;&nbsp;G 270",
        "&nbsp;&nbsp;&nbsp;G 280",
        "&nbsp;&nbsp;&nbsp;G 290",
        "&nbsp;&nbsp;&nbsp;G 300",
        "&nbsp;&nbsp;&nbsp;G 320",
        "&nbsp;&nbsp;&nbsp;G 350",
        "&nbsp;&nbsp;&nbsp;G 400",
        "&nbsp;&nbsp;&nbsp;G 450",
        "&nbsp;&nbsp;&nbsp;G 500",
        "&nbsp;&nbsp;&nbsp;G 55 AMG",
        "&nbsp;&nbsp;&nbsp;G 580",
        "&nbsp;&nbsp;&nbsp;G 63 AMG",
        "&nbsp;&nbsp;&nbsp;G 65 AMG",
        "GL-класа",
        "&nbsp;&nbsp;&nbsp;GL 320",
        "&nbsp;&nbsp;&nbsp;GL 350",
        "&nbsp;&nbsp;&nbsp;GL 420",
        "&nbsp;&nbsp;&nbsp;GL 450",
        "&nbsp;&nbsp;&nbsp;GL 500",
        "&nbsp;&nbsp;&nbsp;GL 55 AMG",
        "&nbsp;&nbsp;&nbsp;GL 63 AMG",
        "GLA-класа",
        "&nbsp;&nbsp;&nbsp;GLA 180",
        "&nbsp;&nbsp;&nbsp;GLA 200",
        "&nbsp;&nbsp;&nbsp;GLA 220",
        "&nbsp;&nbsp;&nbsp;GLA 250",
        "&nbsp;&nbsp;&nbsp;GLA 45 AMG",
        "GLB",
        "GLC-класа",
        "&nbsp;&nbsp;&nbsp;GLC 200",
        "&nbsp;&nbsp;&nbsp;GLC 220",
        "&nbsp;&nbsp;&nbsp;GLC 250",
        "&nbsp;&nbsp;&nbsp;GLC 300",
        "&nbsp;&nbsp;&nbsp;GLC 350",
        "&nbsp;&nbsp;&nbsp;GLC 400",
        "&nbsp;&nbsp;&nbsp;GLC 43 AMG",
        "&nbsp;&nbsp;&nbsp;GLC 63 AMG",
        "GLE-класа",
        "&nbsp;&nbsp;&nbsp;GLE 250",
        "&nbsp;&nbsp;&nbsp;GLE 350",
        "&nbsp;&nbsp;&nbsp;GLE 400",
        "&nbsp;&nbsp;&nbsp;GLE 43 AMG",
        "&nbsp;&nbsp;&nbsp;GLE 450",
        "&nbsp;&nbsp;&nbsp;GLE 450 AMG",
        "&nbsp;&nbsp;&nbsp;GLE 500",
        "&nbsp;&nbsp;&nbsp;GLE 53 4MATIC",
        "&nbsp;&nbsp;&nbsp;GLE 580",
        "&nbsp;&nbsp;&nbsp;GLE 63 AMG",
        "&nbsp;&nbsp;&nbsp;GLE 63 S AMG",
        "&nbsp;&nbsp;&nbsp;GLE Coupe",
        "GLK",
        "GLS-класа",
        "&nbsp;&nbsp;&nbsp;GLS 350",
        "&nbsp;&nbsp;&nbsp;GLS 400",
        "&nbsp;&nbsp;&nbsp;GLS 450",
        "&nbsp;&nbsp;&nbsp;GLS 500",
        "&nbsp;&nbsp;&nbsp;GLS 600",
        "&nbsp;&nbsp;&nbsp;GLS 63 AMG",
        "GLS580",
        "GT",
        "GTS",
        "ML-класа",
        "&nbsp;&nbsp;&nbsp;ML 230",
        "&nbsp;&nbsp;&nbsp;ML 250",
        "&nbsp;&nbsp;&nbsp;ML 270",
        "&nbsp;&nbsp;&nbsp;ML 280",
        "&nbsp;&nbsp;&nbsp;ML 300",
        "&nbsp;&nbsp;&nbsp;ML 320",
        "&nbsp;&nbsp;&nbsp;ML 350",
        "&nbsp;&nbsp;&nbsp;ML 400",
        "&nbsp;&nbsp;&nbsp;ML 420",
        "&nbsp;&nbsp;&nbsp;ML 430",
        "&nbsp;&nbsp;&nbsp;ML 450",
        "&nbsp;&nbsp;&nbsp;ML 500",
        "&nbsp;&nbsp;&nbsp;ML 55 AMG",
        "&nbsp;&nbsp;&nbsp;ML 550",
        "&nbsp;&nbsp;&nbsp;ML 63 AMG",
        "Maybach",
        "R-класа",
        "&nbsp;&nbsp;&nbsp;R 280",
        "&nbsp;&nbsp;&nbsp;R 300",
        "&nbsp;&nbsp;&nbsp;R 320",
        "&nbsp;&nbsp;&nbsp;R 350",
        "&nbsp;&nbsp;&nbsp;R 500",
        "S-класа",
        "&nbsp;&nbsp;&nbsp;S 250",
        "&nbsp;&nbsp;&nbsp;S 280",
        "&nbsp;&nbsp;&nbsp;S 300",
        "&nbsp;&nbsp;&nbsp;S 320",
        "&nbsp;&nbsp;&nbsp;S 350",
        "&nbsp;&nbsp;&nbsp;S 400",
        "&nbsp;&nbsp;&nbsp;S 420",
        "&nbsp;&nbsp;&nbsp;S 430",
        "&nbsp;&nbsp;&nbsp;S 450",
        "&nbsp;&nbsp;&nbsp;S 500",
        "&nbsp;&nbsp;&nbsp;S 55 AMG",
        "&nbsp;&nbsp;&nbsp;S 550",
        "&nbsp;&nbsp;&nbsp;S 560",
        "&nbsp;&nbsp;&nbsp;S 580",
        "&nbsp;&nbsp;&nbsp;S 600",
        "&nbsp;&nbsp;&nbsp;S 63",
        "&nbsp;&nbsp;&nbsp;S 63 AMG",
        "&nbsp;&nbsp;&nbsp;S 65 AMG",
        "&nbsp;&nbsp;&nbsp;S 680",
        "SL-класа",
        "&nbsp;&nbsp;&nbsp;SL 400",
        "&nbsp;&nbsp;&nbsp;SL 43 AMG",
        "&nbsp;&nbsp;&nbsp;SL 500",
        "&nbsp;&nbsp;&nbsp;SL 55 AMG",
        "&nbsp;&nbsp;&nbsp;SL 600",
        "&nbsp;&nbsp;&nbsp;SL 63 AMG",
        "&nbsp;&nbsp;&nbsp;SL 65 AMG",
        "SLC",
        "SLK-класа",
        "&nbsp;&nbsp;&nbsp;SLK 55 AMG",
        "SLS AMG",
        "T-класа",
        "V 300",
        "Vaneo",
        "Viano",
        "X-Klasse"
      ],
    'audi': [
        "100",
        "100",
        "200",
        "80",
        "90",
        "A1",
        "A2",
        "A3",
        "A4",
        "A4 Allroad",
        "A5",
        "A6",
        "A6 Allroad",
        "A7",
        "A8",
        "Allroad",
        "Cabriolet",
        "Coupe",
        "E-Tron",
        "E-Tron GT",
        "Q2",
        "Q3",
        "Q4",
        "Q5",
        "Q6",
        "Q7",
        "Q8",
        "Quattro",
        "R8",
        "RSQ3",
        "RSQ8",
        "Rs3",
        "Rs4",
        "Rs5",
        "Rs6",
        "Rs7",
        "S1",
        "S2",
        "S3",
        "S4",
        "S5",
        "S6",
        "S7",
        "S8",
        "SQ5",
        "SQ7",
        "SQ8",
        "Tt"
      ],
    'vw': [
        "1200",
        "1200",
        "1300",
        "1302",
        "1303",
        "1500",
        "1600",
        "Alltrack",
        "Amarok",
        "Arteon",
        "Atlas",
        "Beetle",
        "Bora",
        "CC",
        "Caddy",
        "Eos",
        "Fox",
        "Golf",
        "Golf Plus",
        "Golf Variant",
        "ID.3",
        "ID.4",
        "ID.5",
        "ID.6",
        "ID.7",
        "ID.Buzz",
        "Jetta",
        "Karmann-ghia",
        "Lupo",
        "Multivan",
        "New beetle",
        "Passat",
        "Phaeton",
        "Polo",
        "Scirocco",
        "Sharan",
        "Sportsvan",
        "T-Cross",
        "T-Roc",
        "Taigo",
        "Tiguan",
        "Tiguan Allspace",
        "Touareg",
        "Touran",
        "Up",
        "Vento"
      ],
    'opel': [
        "Adam",
        "Adam",
        "Admiral",
        "Agila",
        "Ampera",
        "Antara",
        "Ascona",
        "Astra",
        "Calibra",
        "Campo",
        "Cascada",
        "Combo",
        "Corsa",
        "Crossland X",
        "Frontera",
        "Grandland X",
        "Gt",
        "Insignia",
        "Kadett",
        "Kapitaen",
        "Karl",
        "Manta",
        "Meriva",
        "Mokka",
        "Mokka X",
        "Monterey",
        "Omega",
        "Rekord",
        "Senator",
        "Signum",
        "Sintra",
        "Tigra",
        "Vectra",
        "Zafira"
      ],
    'skoda': [
        "100",
        "100",
        "105",
        "120",
        "Citigo",
        "Enyaq",
        "Fabia",
        "Favorit",
        "Felicia",
        "Forman",
        "Kamiq",
        "Karoq",
        "Kodiaq",
        "Octavia",
        "Praktik",
        "Rapid",
        "Roomster",
        "Scala",
        "Superb",
        "Yeti"
      ],
    'renault': [
        "10",
        "10",
        "11",
        "12",
        "16",
        "18",
        "19",
        "20",
        "25",
        "4",
        "5",
        "Alpine",
        "Arkana",
        "Austral",
        "Avantime",
        "Captur",
        "Clio",
        "Espace",
        "Express",
        "Fluence",
        "Grand espace",
        "Grand scenic",
        "Kadjar",
        "Kangoo",
        "Koleos",
        "Laguna",
        "Laguna Coupe",
        "Latitude",
        "Megane",
        "Modus",
        "Rafale",
        "Rapid",
        "Safrane",
        "Scenic",
        "Scenic rx4",
        "Symbol",
        "Talisman",
        "Twingo",
        "Twizy",
        "Vel satis",
        "Wind",
        "Zoe"
      ],
    'honda': [
        "Accord",
        "Accord",
        "Civic",
        "Cr-v",
        "Crosstour",
        "Crx",
        "Crz",
        "Electric",
        "Element",
        "Fr-v",
        "Hr-v",
        "Insight",
        "Jazz",
        "Legend",
        "Logo",
        "M-NV",
        "Nsx",
        "Odyssey",
        "Pilot",
        "Prelude",
        "Ridgeline",
        "S2000",
        "Shuttle",
        "Stream",
        "ZR-V",
        "e",
        "e:Ny1"
      ],
};
const brandSelect = document.getElementById('brand');
const modelSelect = document.getElementById('model');

function generateModelOptions() {
    if (modelSelect.disabled) {
        modelSelect.disabled = false;
    }

    brands[brandSelect.value].forEach(model => {
        const option = document.createElement('option');
        option.value = returnValue(model);
        option.innerHTML = model;
        modelSelect.appendChild(option);
    });
};

function returnText(input) {
    return input.split('&nbsp;').join('');
  }

function returnValue(input) {
  return returnText(input).toLowerCase().replace(/\s+/g, '-');
}



// Double range slider
class DoubleRangeSlider {
    constructor(container) {
        this.container = container;
        this.slider1 = container.querySelector(".slider-1");
        this.slider2 = container.querySelector(".slider-2");
        this.range = container.querySelector(".range");
        this.value1 = container.nextElementSibling.querySelector(".value-1");
        this.value2 = container.nextElementSibling.querySelector(".value-2");
        this.min = parseInt(this.slider1.min);
        this.max = parseInt(this.slider1.max);
  
        this.init();
    }
    
    init() {
        this.slider1.addEventListener("input", () => this.updateSlider("slider1"));
        this.slider2.addEventListener("input", () => this.updateSlider("slider2"));
        this.updateSlider();
    }
  
    updateSlider(changedSlider) {
        const slider1Val = parseInt(this.slider1.value);
        const slider2Val = parseInt(this.slider2.value);
    
        if (changedSlider === "slider1" && slider2Val - slider1Val <= 0) {
            this.slider1.value = slider2Val;
        }
        if (changedSlider === "slider2" && slider2Val - slider1Val <= 0) {
            this.slider2.value = slider1Val;
        }
    
        this.range.style.left = ((this.slider1.value - this.min) / (this.max -this.min)) * 100 + "%";
        this.range.style.width = ((this.slider2.value - this.slider1.value) / (this.max - this.min)) * 100 + "%";

        this.value1.textContent = this.slider1.value;
        this.value2.textContent = this.slider2.value;
    }
}

document.querySelectorAll(".slider-container").forEach((sliderContainer) => {
    new DoubleRangeSlider(sliderContainer);
});



// Form submit logic
const form = document.querySelector('[data-form]');
form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData);

    let url = 'https://www.mobile.bg/obiavi/avtomobili-dzhipove/';

    // Append car/engine characteristics
    appendToUrl(obj['brand']);
    appendToUrl(obj['model']);
    appendToUrl(obj['type']);

    appendToUrl(obj['engine']);
    appendToUrl(obj['gearbox']);

    // Append years
    url += 'ot-';
    appendToUrl(obj['ot']);
    url += 'do-';
    appendToUrl(obj['do']);

    // Append query
    //Price
    appendQuery('price', obj['price'], true);
    appendQuery('price1', obj['price1']);

    // Cubature
    if (!obj['no-cubature']) {
        if (obj['higher-cubature']) {
            appendQuery('engine_cubature', obj['engine_cubature']);
            appendQuery('engine_cubature1', '99999');
        }
        else {
            appendQuery('engine_cubature', obj['engine_cubature']);
            appendQuery('engine_cubature1', obj['engine_cubature1']);
        }
    }

    // Condition
    let conditionValue = '';
    if (obj['condition-used']) {
        conditionValue += '0';
    }

    if (obj['condition-new']) {
        conditionValue += '1';
    }

    if (obj['condition-parts']) {
        conditionValue += '2';
    }

    if (obj['condition-damaged']) {
        conditionValue += '3';
    }

    conditionValue += '4';
    appendQuery('nup', conditionValue)

    // Open mobile.bg
    window.open(url);

    function appendToUrl(text) {
        if (text == "" || text == undefined || text == null)
            return;

        url += text;
        url += '/';
    }

    function appendQuery(propName, propValue, first = false) {
        if (first)
            url += '?';
        else {
            url += '&';
        }

        url += `${propName}=${propValue}`;
    }
});
