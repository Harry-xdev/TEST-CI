// FUCTION TÌM SỐ ĐỐI NHẬP VÀO 2 THAM SỐ

function findOppositeNumber2() {
    let inputN = document.getElementById("inputN2").value;
    inputN = parseInt(inputN);

    if (inputN < 4 || inputN > 20) {
        alert(`Bạn phải nhập n trong khoảng từ 4 đến 20`);
        return false;
    } else if (inputN % 2 != 0) {
        alert(`Bạn phải nhập n là số chẵn`);
        return false;
    }
    let inputX = document.getElementById("inputX").value;
    inputX = parseInt(inputX);
    let oppositeX;
    oppositeX = parseInt(oppositeX);
    let x = inputX;
    let n = inputN;
    oppositeX = x + n/2;
    if (x >= n/2) { 
        oppositeX = x - n/2;
        alert(`Số đối của ${x} là ${oppositeX}`);
    } else {
        oppositeX = x + n/2
        alert(`Số đối của ${x} là ${oppositeX}`);
    }
}

// FUCTION TÌM SỐ ĐỐI TỪ 0 ĐẾN 9
function findOppositeNumber() {
    let inputNumber = document.getElementById("inputN").value;
    inputNumber = parseInt(inputNumber);
    let n = 10
    let x = inputNumber + 5;
    let oppositeN;
    oppositeN = parseInt(oppositeN);
    if (x < n) {
        oppositeN = x;
        alert(`Số đối của ${inputNumber} là ${oppositeN}`);
    } else if (x >= n) {
        oppositeN = x - 10;
        alert(`Số đối của ${inputNumber} là ${oppositeN}`);
    }
}

// FUNcTION GỘP CHUỖI
function merge() {
    let str1 = document.getElementById("string1").value;
    let str2 = document.getElementById("string2").value;
    console.log(str1)
    console.log(str2)

}