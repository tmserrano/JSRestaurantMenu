"use strict";
let plates = [
    {
        Name: "Salmon",
        Day: "Monday",
        Type: "Fish",
        Price: 8,
        img: "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg",
    },
    {
        Name: "Lasagna",
        Day: "Monday",
        Type: "Meat",
        Price: 8,
        img: "https://cdn.pixabay.com/photo/2016/12/11/22/41/lasagna-1900529_960_720.jpg",
    },
    {
        Name: "Sardines",
        Day: "Tuesday",
        Type: "Fish",
        Price: 6,
        img: "https://cdn.pixabay.com/photo/2016/06/30/18/49/sardines-1489626_960_720.jpg",
    },
    {
        Name: "Chicken",
        Day: "Tuesday",
        Type: "Meat",
        Price: 5,
        img: "https://cdn.pixabay.com/photo/2016/11/18/17/42/barbecue-1836053_960_720.jpg",
    },
    {
        Name: "Fish And Chips",
        Day: "Wednesday",
        Type: "Fish",
        Price: 5,
        img: "https://cdn.pixabay.com/photo/2019/11/05/00/07/fish-and-chips-4602434_960_720.jpg",
    },
    {
        Name: "Hamburguer",
        Day: "Wednesday",
        Type: "Meat",
        Price: 4,
        img: "https://cdn.pixabay.com/photo/2016/03/05/19/37/appetite-1238459_960_720.jpg",
    },
    {
        Name: "Sushi",
        Day: "Thursday",
        Type: "Fish",
        Price: 10,
        img: "https://cdn.pixabay.com/photo/2016/11/25/16/08/sushi-1858696_960_720.jpg",
    },
    {
        Name: "Spaghetti bolognese",
        Day: "Thursday",
        Type: "Meat",
        Price: 7,
        img: "https://image.freepik.com/free-photo/plate-basil-cherry-gourmet-menu_1220-1184.jpg",
    },
    {
        Name: "Chicken",
        Day: "Friday",
        Type: "Meat",
        Price: 6,
        img: "https://cdn.pixabay.com/photo/2016/11/18/17/42/barbecue-1836053_960_720.jpg",
    },
    {
        Name: "Fish Soup",
        Day: "Friday",
        Type: "Fish",
        Price: 7,
        img: "https://cdn.pixabay.com/photo/2018/01/01/17/57/fish-soup-3054627_960_720.jpg",
    },
];
const mainSection = document.querySelector(".main__section");
const aboutSection = document.querySelector(".about__section");
const scheduleSection = document.querySelector(".schedule__section");
const formSignUp = document.querySelector(".form-signUp");
const formLogin = document.querySelector(".form-login");
const dynamicMenu = document.querySelector(".menuSection__dynamicData");
const dynamicHelloLogout = document.querySelector(".scheduleSection__dynamicHelloLogout");
const divDone = document.querySelector(".div-done");
const scrollToSections = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("navi") ||
        e.target.classList.contains("scroll__icon--down") ||
        e.target.classList.contains("btn-mainMenu")) {
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
};
const scrollToTop = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("scroll__icon--up")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
};
const stickyScroll = function (entries) {
    const [entry] = entries;
    const upIcon = document.querySelector(".scroll__icon--up");
    if (!entry.isIntersecting) {
        upIcon === null || upIcon === void 0 ? void 0 : upIcon.classList.add("sticky");
    }
    else {
        upIcon === null || upIcon === void 0 ? void 0 : upIcon.classList.remove("sticky");
    }
};
const sectionObserver = new IntersectionObserver(stickyScroll, {
    root: null,
    threshold: 0.2,
});
sectionObserver.observe(mainSection);
const scrollToSchedule = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("btn-login") ||
        e.target.classList.contains("btn-signUp")) {
        const id = e.target.getAttribute("href");
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
};
plates.forEach((data) => {
    const child = document.createElement("div");
    child.classList.add("col-lg-6");
    dynamicMenu === null || dynamicMenu === void 0 ? void 0 : dynamicMenu.insertAdjacentElement("beforeend", child);
    child.innerHTML = `<div>
  <div class="card mb-4 bg-light mx-auto">
  <img src="${data.img}" class="menuSection__img" />
    <div class="card-body">
      <h4 class="card-title text-dark">${data.Name}</h4>
      <p class="card-text text-dark fw-bold">${data.Day} | <span class="fw-lighter">${data.Type}</span></p>
      <p class="card-text colored-text">${data.Price}€</p>
      </div>
  </div>
</div>`;
});
function closeAllModals() {
    const modals = document.getElementsByClassName("modal");
    const modalOpen = document.getElementsByClassName("modal-open");
    for (let i = 0; i < modals.length; i++) {
        modals[i].classList.remove("show");
        modals[i].setAttribute("aria-hidden", "true");
        modals[i].setAttribute("style", "display: none");
        modalOpen[i].setAttribute("style", "overflow-y:scroll");
    }
    const modalsBackdrops = document.getElementsByClassName("modal-backdrop");
    for (let i = 0; i < modalsBackdrops.length; i++) {
        document.body.removeChild(modalsBackdrops[i]);
    }
}
const signUpFunc = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("btn-signUp")) {
        const username = document.getElementById("username-signUp").value;
        const password = document.getElementById("password-signUp").value;
        const user = {
            username: username,
            password: password,
        };
        if (localStorage.getItem(username) === null) {
            const lgnAtive = document.querySelector(".lgn-ative");
            const lgnInative = document.querySelector(".lgn-inative");
            const tabLogin = document.querySelector(".tab-login");
            const tabSign = document.querySelector(".tab-sign");
            const json = JSON.stringify(user);
            localStorage.setItem(username, json);
            alert(`${username} has been created!`);
            document.getElementById("username-signUp").value =
                "";
            document.getElementById("password-signUp").value =
                "";
            lgnInative === null || lgnInative === void 0 ? void 0 : lgnInative.classList.remove("active");
            lgnAtive === null || lgnAtive === void 0 ? void 0 : lgnAtive.classList.add("active");
            tabSign === null || tabSign === void 0 ? void 0 : tabSign.classList.remove("active");
            tabSign === null || tabSign === void 0 ? void 0 : tabSign.classList.remove("show");
            tabLogin === null || tabLogin === void 0 ? void 0 : tabLogin.classList.add("active");
            tabLogin === null || tabLogin === void 0 ? void 0 : tabLogin.classList.add("show");
        }
        else {
            alert(`${username} is already registered!`);
            document.getElementById("username-signUp").value =
                "";
            document.getElementById("password-signUp").value =
                "";
        }
    }
};
const loginFunc = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("btn-login")) {
        const username = document.getElementById("username-login").value;
        const password = document.getElementById("password-login").value;
        const user = localStorage.getItem(username);
        const data = JSON.parse(user);
        if (user === null) {
            alert("Wrong username!");
            document.getElementById("username-login").value =
                "";
            document.getElementById("password-login").value =
                "";
        }
        else if (username === data.username && password === data.password) {
            alert(`${username} is logged in!`);
            document.getElementById("username-login").value =
                "";
            document.getElementById("password-login").value =
                "";
            closeAllModals();
            mainSection === null || mainSection === void 0 ? void 0 : mainSection.addEventListener("click", scrollToSchedule);
            document.querySelector(".schedule__section").classList.remove("hidden");
            dynamicHelloLogout === null || dynamicHelloLogout === void 0 ? void 0 : dynamicHelloLogout.insertAdjacentHTML("beforeend", `<p class="helloLogout mx-4">Hello ${username} | <a href="#" class="text-decoration-none btn-logout-close">Logout</a></p>`);
            let arr = [];
            let food = [];
            plates.forEach((data) => {
                const dynamicSchedule = document.querySelector(".scheduleSection__dynamicSchedule");
                const child = document.createElement("div");
                child.classList.add("d-flex");
                child.classList.add("justify-content-between");
                dynamicSchedule === null || dynamicSchedule === void 0 ? void 0 : dynamicSchedule.insertAdjacentElement("beforeend", child);
                child.innerHTML = `
        <p class="fw-bold mb-4"> ${data.Day} | <span class="fw-light">${data.Name} | ${data.Price}€</span></p>
        </div>
        <div>
        <input type="radio" id="${data.Name}${data.Price}" name="${data.Day}" value="${data.Price}">
        </div>`;
                const radioButton = document.querySelector(`input[id="${data.Name}${data.Price}"]`);
                const loopChecked = (e) => {
                    e.preventDefault();
                    if (e.target.classList.contains("btn-done")) {
                        if (radioButton.checked) {
                            arr.push(data.Price);
                            food.push(data.Name);
                        }
                    }
                };
                divDone === null || divDone === void 0 ? void 0 : divDone.addEventListener("click", loopChecked);
            });
            const printChecked = (e) => {
                e.preventDefault();
                if (e.target.classList.contains("btn-done")) {
                    const dynamicTotal = document.querySelector(".scheduleSection__dynamicTotal");
                    const sum = arr.reduce((a, b) => a + b, 0);
                    localStorage.setItem(username + "OrderedFood", food.toString());
                    dynamicTotal === null || dynamicTotal === void 0 ? void 0 : dynamicTotal.insertAdjacentHTML("beforeend", `<p class="text-center">The price to pay for the selected meals are ${sum}€</p>`);
                }
            };
            divDone === null || divDone === void 0 ? void 0 : divDone.addEventListener("click", printChecked);
        }
        else {
            alert("Wrong password!");
            document.getElementById("password-login").value =
                "";
        }
    }
};
const logout = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("btn-logout-close")) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.setTimeout(function () {
            window.location.reload();
        }, 1000);
    }
};
mainSection === null || mainSection === void 0 ? void 0 : mainSection.addEventListener("click", scrollToSections);
aboutSection === null || aboutSection === void 0 ? void 0 : aboutSection.addEventListener("click", scrollToTop);
formSignUp === null || formSignUp === void 0 ? void 0 : formSignUp.addEventListener("click", signUpFunc);
formLogin === null || formLogin === void 0 ? void 0 : formLogin.addEventListener("click", loginFunc);
dynamicHelloLogout === null || dynamicHelloLogout === void 0 ? void 0 : dynamicHelloLogout.addEventListener("click", logout);
//# sourceMappingURL=app.js.map