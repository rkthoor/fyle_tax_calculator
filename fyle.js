document.getElementById("incomeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    let grossIncome = parseFloat(document.getElementById("grossIncome").value);
    let extraIncome = parseFloat(document.getElementById("extraIncome").value) || 0; 
    let ageGroup = document.getElementById("ageGroup").value;
    let deductions = parseFloat(document.getElementById("deductions").value) || 0; 

    // Calculate taxable income after deductions
    let taxableIncome = grossIncome + extraIncome - deductions;

    // Apply tax rules based on age group and income
    let taxAmount = 0;
    if (taxableIncome > 800000) { // Income over 8 Lakhs
        if (ageGroup === "under40") {
            taxAmount = (taxableIncome - 800000) * 0.3; 
        } else if (ageGroup === "40to60") {
            taxAmount = (taxableIncome - 800000) * 0.4; 
        } else if (ageGroup === "over60") {
            taxAmount = (taxableIncome - 800000) * 0.1; 
        }
    }

    // Calculate overall income after tax
    let overallIncome = taxableIncome - taxAmount;

    //Display result
    let newWindow = window.open("", "_blank");
    newWindow.document.write(`<html><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Overall Income</title>
    <style>
        /* Container styles */
        .container {
            position: relative;
            width: 400px;
            height: 400px;
            border: 2px solid #aca9a9;
            margin: 50px auto;
            display: flex;
            justify-content: center;
            align-items: center;
            
        }
        
        /* Box styles */
        .rect-box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 500px;
            height: 300px;
            border: 2px solid #aca9a9;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: #414040;
        }
    </style>
    </head>
    <body>
        <div class="container">
            <div class="rect-box">
                <div>
                <div style="font-size: 32px; line-height: 1;">Your overall income will be</div>
                <div style="font-size: 20px; line-height: 1;">${overallIncome}</div>
                <div style="font-size: 16px; line-height: 1;">after tax deductions</div>
                </div>
            </div>
        </div>
    </body>
    </html>`)

});
