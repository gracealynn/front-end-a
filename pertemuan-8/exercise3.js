let grace = {
    firstName: "Grace",
    weight: 73,
    height:1.5,
    calculateBMI: function(){
        let BMI = this.weight/(this.height*this.height);
        console.log(BMI);
        if(BMI<16.0){
            return "Severely Underweight";
        } else if(BMI >=16.0 && BMI <=18.4){
            return "Underweight";
        } else if(BMI >=18.5 && BMI <=24.9){
            return "Normal";
        } else if(BMI >=25.0 && BMI <=29.9){
            return "Overweight";
        } else if (BMI >= 30.0 && BMI <=34.9){
            return "Moderately Obese";
        } else if (BMI >= 35.0 && BMI <=94.9){
            return "Severly Obese";
        } else if (BMI >= 40.0){
            return "Morbidly Obese";
        }
    }
}
grace.BMI = grace.calculateBMI();
console.log(grace);