class Validator{
  constructor(){
    this.validations =[

      'data-min-length',
    ]  
  }  

  // inicia a validação de todos os campos 
  validate(form){

    // resgata todas as validações
    let currentValidations = document.querySelectorAll('form .error-validation');

    if(currentValidations.length) {
      this.cleanValidations(currentValidations);
    }
   
    // pegar os inputs
    let inputs = form.getElementsByTagName('input');

    // transformo uma HTMLCollection -> array

    let inputsArray = [...inputs];
   // loop nos inputs e validação mediante ao que for encontrado
    inputsArray.forEach(function(input){
      for(let i = 0; this.validations.length > i; i++){
        if(input.getAttribute(this.validations[i]) != null){

          // limpando a string para virar um método

          let method = this.validations[i].replace('data-','').replace('-','');
          // valor do input
          let value = input.getAttribute(this.validations[i]);
          // chamar o método
          this[method](input,value);
        }

      }
    }, this);


  }
  minlength(input, minValue){
    let inputLength = input.value.length;

    let errorMessage = ` O Campo precisa ter pelo menos ${minValue} caracteres`;

    if (inputLength < minValue){
      this.printMessage(input, errorMessage);
    }
  }

  printMessage(input,msg){

    let template = document.querySelector('.error-validation').cloneNode(true);

    template.textContent = msg;

    let inputParent = input.parentNode;

    template.classList.remove('template');

    inputParent.appendChild  (template);

  }
  // limpa as validações da tela
   cleanValidations(validations) {
    validations.forEach(el => el.remove());

  }
}

let form = document.getElementById("register-from");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

// evento que dispara as validações 

submit.addEventListener('click', function(e){
   e.preventDefault();
   
   validator.validate(form);
})