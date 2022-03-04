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

// FUNCTION GỘP CHUỖI
function merge2Str() {
    let str1 = document.getElementById("s1").value;
    let str2 = document.getElementById("s2").value;

    for (let i = 0; i < str1.length; i++){
        console.log(str1[i]);
    }

    for (let i = 0; i < str2.length; i++){
        console.log(str2[i]);
    }

    
    let array1 = Array.from(str1, function(e) {
       return e;
    })
    let array2 = Array.from(str2, function(e) {
        return e;
     })
    mergedArray = [];

    for (i=0; i<=array1.length; i++) {
        mergedArray.push(array1.slice([i],i+1) + array2.slice([i],i+1));
    }
    console.log(mergedArray);
    mergedArray = mergedArray.join('');
    console.log(mergedArray)
    alert(`Chuỗi gộp là: ${mergedArray}`);
}

// FUNCTION QUAY SỐ
function random() {
    let randomNumber = Math.floor(Math.random() * 10);
    randomNumber = parseInt(randomNumber);

    let luckyNumber = document.getElementById("luckyNumber");
    luckyNumber.innerHTML = randomNumber;

    let userNumber = document.getElementById("userNumber").value;
    userNumber = parseInt(userNumber);
    if (userNumber > 9 || userNumber < 0) {
        alert(`You must choose number from 0 to 9!`);
        return false;
    }

    let userChooses = document.getElementById("userChooses");
    userChooses.innerHTML = userNumber;

    if (userNumber == randomNumber) {
        alert(`You won the lottery!`);
    } else {
        alert(`You lose!`)
    }

}

let count = 0;
count = parseInt(count);

function count2() {
    count = count + 1;
    console.log(count);
    console.log(typeof count);

    if (count == 1) {
        document.getElementById("count").innerHTML = "2"
    }
    if (count == 2) {
        document.getElementById("count").innerHTML = "1"
    }
    if (count == 3) {
        document.getElementById("count").innerHTML = "0"
        document.getElementById("btn").style.display ="none"
        document.getElementById("luotQuay").innerHTML = "Hết lượt"
    }
}




