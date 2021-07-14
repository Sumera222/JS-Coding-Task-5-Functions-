/*3. Problem Name: FunctionWithMultipleInputParameters
Create a function with the name “AddTwoNumbers.”
Take two input parameters using names “Num1” and “Num2.”
Perform addition operation on these input numbers.
Save the result in variable Sum.
Return the result.*/
function AddTwoNumbers(Num1, Num2) {
    var sum = Num1 + Num2;
    document.write(sum)
    return sum;
}

AddTwoNumbers(33,76);
document.write("<br>"); //for line break

function AddThreeNumbers(Num1, Num2, Num3) {
    var sum1 = Num1 + Num2 + Num3;
    document.write(sum1)
    return sum1;
}

AddThreeNumbers(3,7,21);
