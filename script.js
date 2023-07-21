function convertTemperature() {
    const tempInput = document.getElementById("tempInput").value;
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    if (fromUnit === toUnit) {
        document.getElementById("result").textContent = "Please select different units.";
        return;
    }

    let result;

    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            result = (tempInput * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            result = parseFloat(tempInput) + 273.15;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            result = (tempInput - 32) * 5/9;
        } else if (toUnit === "kelvin") {
            result = (tempInput - 32) * 5/9 + 273.15;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            result = tempInput - 273.15;
        } else if (toUnit === "fahrenheit") {
            result = (tempInput - 273.15) * 9/5 + 32;
        }
    }

    document.getElementById("result").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}
