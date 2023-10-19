class CoffeeMachine {
    _waterAmount = 0;  // protected variable waterAmount
  
    constructor(power) {
        this._power = power;   // protected variable power
      }  

    set waterAmount(value) {  
      if (value < 0) {
        value = 0;
      }
      this._waterAmount = value;
    }
  
    get waterAmount() {
      return this._waterAmount;
    }

    get power() {
        return this._power;
      }
  }
  
  // create the coffee machine
  let coffeeMachine = new CoffeeMachine(100);
  
  // add water
  coffeeMachine.waterAmount = 10; 

  console.log(`Power is: ${coffeeMachine.power}W`);
  console.log('Water Amount in coffe machine: '+ coffeeMachine.waterAmount);