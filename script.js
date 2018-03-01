

//Creating the Variables
var bracket1taxrate = 0.15;
var bracket2taxrate = 0.25;
var tax;

var noneedtotax = 12000;
var bracket1upperam = 36000;
var bracket2upperam = 90000;
var salary;

function calcuateTaxes() {
   //setting variable salary to the text field
    salary = document.getElementById("txtSalary").value;
    

    //checking if the value is high enough
    if(salary > noneedtotax){
        tax = salary * bracket1taxrate;
        //setting the output field equal to the comment string plus the tax and salary
    document.getElementById("lblTaxOutPut").innerHTML = "You will need to pay " + '$' + tax + " on your " + '$' + salary + " income.";
    
    }
    
    //calculate salary times bracket2taxrate
    if(salary > bracket1upperam){
        tax = salary * bracket2taxrate;
        
    }
    
    //checking if the imput salary above is in the imput bracket
    
    
    
    
    //check if the salary is too high
        if(salary > bracket2upperam){
            document.getElementById("lbltaxOutPut").innerHTML = "Salary is too high to exist, please enter a possible human Salary.";
            
        }
        
        
}else{
        //tell the user their salary is too low to tax
        document.getElementById("lblTaxOutPut").innerHTML = "There is no need to tax this amount."; 
    }
    
    
    
    
    
    