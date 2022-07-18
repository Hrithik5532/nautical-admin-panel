// const nxtBtn = document.querySelector('#submitBtn');
// const form1 = document.querySelector('#form1');
// const form2 = document.querySelector('#form2');
// const form3 = document.querySelector('#form3');
// const form4 = document.querySelector('#form4');
// const form5 = document.querySelector('#form5');


// const icon1 = document.querySelector('#icon1');
// const icon2 = document.querySelector('#icon2');
// const icon3 = document.querySelector('#icon3');
// const icon4 = document.querySelector('#icon4');
// const icon5 = document.querySelector('#icon5');


// var viewId = 1;

// function nextForm() {
//     console.log("hellonext");
//     viewId = viewId + 1;
//     progressBar();
//     displayForms();

//     console.log(viewId);

// }

// function prevForm() {
//     console.log("helloprev");
//     viewId = viewId - 1;
//     console.log(viewId);
//     progressBar1();
//     displayForms();
// }

// function progressBar1() {
//     if (viewId === 1) {
//         icon2.classList.add('active');
//         icon2.classList.remove('active');
//         icon3.classList.remove('active');
//         icon4.classList.remove('active');
//         icon5.classList.remove('active');
//     }
//     if (viewId === 2) {
//         icon2.classList.add('active');
//         icon3.classList.remove('active');
//         icon4.classList.remove('active');
//         icon5.classList.remove('active');
//     }
//     if (viewId === 3) {
//         icon3.classList.add('active');
//         icon4.classList.remove('active');
//         icon5.classList.remove('active');
//     }
//     if (viewId === 4) {
//         icon4.classList.add('active');
//         icon5.classList.remove('active');
//     }
//     if (viewId === 5) {
//         icon5.classList.add('active');
//         nxtBtn.innerHTML = "Submit"
//     }
//     if (viewId > 5) {
//         icon2.classList.remove('active');
//         icon3.classList.remove('active');
//         icon4.classList.remove('active');
//         icon5.classList.remove('active');

//     }
// }

// function progressBar() {
//     if (viewId === 2) {
//         icon2.classList.add('active');
//     }
//     if (viewId === 3) {
//         icon3.classList.add('active');
//     }
//     if (viewId === 4) {
//         icon4.classList.add('active');
//     }
//     if (viewId === 5) {
//         icon5.classList.add('active');
//         nxtBtn.innerHTML = "Submit"
//     }
//     if (viewId > 5) {
//         icon2.classList.remove('active');
//         icon3.classList.remove('active');
//         icon4.classList.remove('active');
//         icon5.classList.remove('active');

//     }
// }

// function displayForms() {

//     if (viewId > 5) {
//         viewId = 1;
//     }

//     if (viewId === 1) {
//         form1.style.display = 'block';
//         form2.style.display = 'none';
//         form3.style.display = 'none';
//         form4.style.display = 'none';
//         form5.style.display = 'none';


//     } else if (viewId === 2) {
//         form1.style.display = 'none';
//         form2.style.display = 'block';
//         form3.style.display = 'none';
//         form4.style.display = 'none';
//         form5.style.display = 'none';

//     } else if (viewId === 3) {
//         form1.style.display = 'none';
//         form2.style.display = 'none';
//         form3.style.display = 'block';
//         form4.style.display = 'none';
//         form5.style.display = 'none';
//     } else if (viewId === 4) {
//         form1.style.display = 'none';
//         form2.style.display = 'none';
//         form3.style.display = 'none';
//         form4.style.display = 'block';
//         form5.style.display = 'none';

//     } else if (viewId === 5) {
//         form1.style.display = 'none';
//         form2.style.display = 'none';
//         form3.style.display = 'none';
//         form4.style.display = 'none';
//         form5.style.display = 'block';

//     }
// }

// // for slider

// var slider = document.querySelector(".slider");
// var output = document.querySelector(".output__value");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//     output.innerHTML = this.value;


// }

//DOM elements
const DOMstrings = {
    stepsBtnClass: 'multisteps-form__progress-btn',
    stepsBtns: document.querySelectorAll(`.multisteps-form__progress-btn`),
    stepsBar: document.querySelector('.multisteps-form__progress'),
    stepsForm: document.querySelector('.multisteps-form__form'),
    stepsFormTextareas: document.querySelectorAll('.multisteps-form__textarea'),
    stepFormPanelClass: 'multisteps-form__panel',
    stepFormPanels: document.querySelectorAll('.multisteps-form__panel'),
    stepPrevBtnClass: 'js-btn-prev',
    stepNextBtnClass: 'js-btn-next'
};

//remove class from a set of items
const removeClasses = (elemSet, className) => {
    elemSet.forEach(elem => {
        elem.classList.remove(className);
    });
};
//return exect parent node of the element
const findParent = (elem, parentClass) => {
    let currentNode = elem;
    while (!currentNode.classList.contains(parentClass)) {
        currentNode = currentNode.parentNode;
    }
    return currentNode;
};
//get active button step number
const getActiveStep = elem => {
    return Array.from(DOMstrings.stepsBtns).indexOf(elem);
};
//set all steps before clicked (and clicked too) to active
const setActiveStep = activeStepNum => {
    //remove active state from all the state
    removeClasses(DOMstrings.stepsBtns, 'js-active');
    //set picked items to active
    DOMstrings.stepsBtns.forEach((elem, index) => {
        if (index <= activeStepNum) {
            elem.classList.add('js-active');
        }
    });
};
//get active panel
const getActivePanel = () => {
    let activePanel;
    DOMstrings.stepFormPanels.forEach(elem => {
        if (elem.classList.contains('js-active')) {
            activePanel = elem;
        }
    });
    return activePanel;
};
//open active panel (and close unactive panels)
const setActivePanel = activePanelNum => {
    //remove active class from all the panels
    removeClasses(DOMstrings.stepFormPanels, 'js-active');
    //show active panel
    DOMstrings.stepFormPanels.forEach((elem, index) => {
        if (index === activePanelNum) {
            elem.classList.add('js-active');
            setFormHeight(elem);
        }
    });
};
//set form height equal to current panel height
const formHeight = activePanel => {
    const activePanelHeight = activePanel.offsetHeight;
    DOMstrings.stepsForm.style.height = `${activePanelHeight}px`;
};
const setFormHeight = () => {
    const activePanel = getActivePanel();
    formHeight(activePanel);
};
//STEPS BAR CLICK FUNCTION
DOMstrings.stepsBar.addEventListener('click', e => {
    //check if click target is a step button
    const eventTarget = e.target;
    if (!eventTarget.classList.contains(`${DOMstrings.stepsBtnClass}`)) {
        return;
    }
    //get active button step number
    const activeStep = getActiveStep(eventTarget);
    //set all steps before clicked (and clicked too) to active
    setActiveStep(activeStep);
    //open active panel
    setActivePanel(activeStep);
});
//PREV/NEXT BTNS CLICK
DOMstrings.stepsForm.addEventListener('click', e => {
    const eventTarget = e.target;
    //check if we clicked on `PREV` or NEXT` buttons
    if (!(eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`) || eventTarget.classList.contains(`${DOMstrings.stepNextBtnClass}`))) {
        return;
    }
    //find active panel
    const activePanel = findParent(eventTarget, `${DOMstrings.stepFormPanelClass}`);
    let activePanelNum = Array.from(DOMstrings.stepFormPanels).indexOf(activePanel);
    //set active step and active panel onclick
    if (eventTarget.classList.contains(`${DOMstrings.stepPrevBtnClass}`)) {
        activePanelNum--;
    } else {
        activePanelNum++;
    }
    setActiveStep(activePanelNum);
    setActivePanel(activePanelNum);
});
//SETTING PROPER FORM HEIGHT ONLOAD
window.addEventListener('load', setFormHeight, false);
//SETTING PROPER FORM HEIGHT ONRESIZE
window.addEventListener('resize', setFormHeight, false);