function buttons() {
    const marks1 = parseInt(document.getElementById('marks1').value) || 0;
    const marks2 = parseInt(document.getElementById('marks2').value) || 0;
    const marks3 = parseInt(document.getElementById('marks3').value) || 0;
    const marks4 = parseInt(document.getElementById('marks4').value) || 0;
    const marks5 = parseInt(document.getElementById('marks5').value) || 0;
    const marks6 = parseInt(document.getElementById('marks6').value) || 0;

    const total = marks1 + marks2 + marks3 + marks4 + marks5 + marks6;
    document.getElementById('totalMarks').innerText = `Total Marks: ${total}/600`;

    const percentage = Math.round((total / 600) * 100);
    document.getElementById('percentagess').innerText = `Percentage: ${percentage}%`;

    if((percentage < 40) && (percentage > 0)){
        document.getElementById('result').innerHTML = `" Fail 🥲"`;
    }
    else if((percentage >= 40) && (percentage < 60)){
        document.getElementById('result').innerHTML = `" Third Division 😊 ( 'B' )"`;
    }
    else if((percentage >= 60) && (percentage < 79)){
        document.getElementById('result').innerHTML = `" Second Division ✌️ ( 'B+' )"`;
    }
    else if((percentage >= 80) && (percentage < 89)) {
        document.getElementById('result').innerHTML = `" First Division 🥳 ( 'A' )"`;
    }
    else if(percentage >= 90)  {
        document.getElementById('result').innerHTML = `" First Division 🥳 ( 'A+' )"`;
    }
    else{
        document.getElementById('result').innerHTML = `" Invalid Input"`;
    }
}

const inputs = document.querySelectorAll('input[type="number"]');
inputs.forEach(input => {
     input.addEventListener('input', buttons); // everytime it is calling function  and eventListener no need to use a () for functions 
});


   

