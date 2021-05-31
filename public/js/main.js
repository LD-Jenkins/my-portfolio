// $(document).ready(function() {
//     $(".dropdown-toggle").dropdown();
// });

// $(window).on('click', function () {
//     $(".dropdown-menu").removeClass('show');
//   });

// const main = document.getElementById("main");
// const dropdownBtns = document.getElementsByClassName("dropdown-item");
// const dropdownMain = document.getElementById("dropdownBtn");
// // console.log(dropdownBtn);

// let pagesArr = ["about-me", "my-work", "contact"];

// function renderContent(text) {
//     main.innerHTML = "";
//     let contentToRender = document.getElementById(`${text}`).innerHTML;
//     main.innerHTML = contentToRender;
// }

// function updateDropdown(text) {
//     dropdownMain.textContent = text;
//     let pagesArr = ["about-me", "my-work", "contact"];
//     pagesArr = pagesArr.filter(i => i !== text);

//     for (btn of dropdownBtns) {
//         for (page of pagesArr) {
//             btn.textContent = page;
//             pagesArr = pagesArr.filter(i => i !== page);
//             break;
//         }
//     }
// }

// for (btn of dropdownBtns) {
//     btn.addEventListener("click", (event) => {
//         let btnText = event.target.textContent;
//         // console.log(btnText);
//         renderContent(btnText);
//         updateDropdown(btnText);
//     });
// }




