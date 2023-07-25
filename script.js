let day = document.querySelector("#Day");
let month = document.querySelector("#Month");
let year = document.querySelector("#Year");
let years = document.querySelector("#years");
let months = document.querySelector("#months");
let days = document.querySelector("#days");
let img = document.querySelector("#img");
let output = document.querySelector(".output");
let error = document.querySelector("#error");


    let arr = [];

    img.onclick = function() {
    if(day.value != '' && month.value != '' && year.value != '') {
        error.classList.add("notActive");
        day.style.border = "1px solid var(--Light-grey)";
        month.style.border = "1px solid var(--Light-grey)";
        year.style.border = "1px solid var(--Light-grey)";
        if(day.value > 31 || month.value > 12 || year.value > 2023){
            day.value > 31 ? error.innerHTML = `<p id="dayError">Must Be a Valid Day</p>` : day.style.border = "1px solid var(--Light-grey)";
            day.style.border = "1.4px solid hsl(0, 100%, 67%)";
            error.classList.remove("notActive");


            month.value > 12 ? error.innerHTML = `<p id="dayError">Must Be a Valid month</p>` : month.style.border = "1px solid var(--Light-grey)";
            month.style.border = "1.4px solid hsl(0, 100%, 67%)";
            error.classList.remove("notActive");


            year.value > 2023 ? error.innerHTML = `<p id="dayError">Must Be a Valid Year</p>` : year.style.border = "1px solid var(--Light-grey)";
            year.style.border = "1.4px solid hsl(0, 100%, 67%)";
            error.classList.remove("notActive");

            day.value > 31 && month.value > 12 && year.value > 2023 ? error.innerHTML = `   <p id="dayError">Must Be a Valid Day</p> <p id="monthError">Must Be a Valid month</p> <p id="yearError">Must Be a Valid Year</p>     ` : day.style.border = "1px solid var(--Light-grey)";
            day.style.border = "1.4px solid hsl(0, 100%, 67%)";
            month.style.border = "1.4px solid hsl(0, 100%, 67%)";
            year.style.border = "1.4px solid hsl(0, 100%, 67%)";

            error.classList.remove("notActive");
        } else {
            error.classList.add("notActive");
            day.style.border = "1px solid var(--Light-grey)";
            month.style.border = "1px solid var(--Light-grey)";
            year.style.border = "1px solid var(--Light-grey)";
        let obj = {
        day: day.value > new Date().getDate() ? day.value - new Date().getDate() : new Date().getDate() - day.value ,
        month: month.value > new Date().getMonth() ? month.value - new Date().getMonth() : new Date().getMonth() - month.value ,
        year: year.value > new Date().getFullYear() ? year.value - new Date().getFullYear() : new Date().getFullYear() - year.value  ,
        }
        arr.push(obj)
        clearData()
        showData()
        }
        }else {
            error.classList.remove("notActive");
            day.style.border = "1.4px solid hsl(0, 100%, 67%)";
            month.style.border = "1.4px solid hsl(0, 100%, 67%)";
            year.style.border = "1.4px solid hsl(0, 100%, 67%)";
        }

        


    }

    
    function clearData() {
        day.value = '';
        month.value = '';
        year.value = '';
    }


    function showData() {
        let table = '';

        for(let i = 0 ; i < arr.length ; i++) {
            table = `
            <h1 id="Years">   <span id="years">${arr[i].year}</span> years</h1>
            <h1 id="Months" style="margin-left: 7%;">  <span id="months">${arr[i].month}</span> months</h1>
            <h1 id="Days">    <span id="days">${arr[i].day}</span> days</h1>
            `
        }
        output.innerHTML = table;
    }

