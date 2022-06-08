//Data
let plates: {
  Name: string;
  Day: string;
  Type: string;
  Price: number;
  img: string;
}[] = [
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

//Global elements
const mainSection: Element | null = document.querySelector(".main__section");
const aboutSection: Element | null = document.querySelector(".about__section");
const scheduleSection: Element | null =
  document.querySelector(".schedule__section");

const formSignUp: Element | null = document.querySelector(".form-signUp");
const formLogin: Element | null = document.querySelector(".form-login");

const dynamicMenu: Element | null = document.querySelector(
  ".menuSection__dynamicData"
);
const dynamicHelloLogout: Element | null = document.querySelector(
  ".scheduleSection__dynamicHelloLogout"
);

const divDone: Element | null = document.querySelector(".div-done");

//Logic
/* scroll to section via navbar links or scroll icon*/
const scrollToSections = (e: Event): void => {
  e.preventDefault();
  if (
    (e.target as Element).classList.contains("navi") ||
    (e.target as Element).classList.contains("scroll__icon--down") ||
    (e.target as Element).classList.contains("btn-mainMenu")
  ) {
    const id: any = (e.target as Element).getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
};

/* scroll to up */
const scrollToTop = (e: Event): void => {
  e.preventDefault();
  if ((e.target as Element).classList.contains("scroll__icon--up")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

/* scrollToUp icon apears only when about section appears */

const stickyScroll = function (entries: any): void {
  const [entry] = entries;
  const upIcon: Element | null = document.querySelector(".scroll__icon--up");
  if (!entry.isIntersecting) {
    upIcon?.classList.add("sticky");
  } else {
    upIcon?.classList.remove("sticky");
  }
};

const sectionObserver = new IntersectionObserver(stickyScroll, {
  root: null,
  threshold: 0.2,
});
sectionObserver.observe(mainSection as Element);

/* scroll to schedule */
const scrollToSchedule = (e: Event): void => {
  e.preventDefault();
  if (
    (e.target as Element).classList.contains("btn-login") ||
    (e.target as Element).classList.contains("btn-signUp")
  ) {
    const id: any = (e.target as Element).getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
};

/* drop data for menu section  */
plates.forEach((data): void => {
  const child = document.createElement("div");
  child.classList.add("col-lg-6");
  dynamicMenu?.insertAdjacentElement("beforeend", child);
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

/* close modal */
function closeAllModals(): void {
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

/* sign up*/
const signUpFunc = (e: Event): void => {
  e.preventDefault();

  if ((e.target as Element).classList.contains("btn-signUp")) {
    const username = (
      document.getElementById("username-signUp") as HTMLInputElement
    ).value;
    const password = (
      document.getElementById("password-signUp") as HTMLInputElement
    ).value;

    const user = {
      username: username,
      password: password,
    };

    if (localStorage.getItem(username) === null) {
      const lgnAtive: Element | null = document.querySelector(".lgn-ative");
      const lgnInative: Element | null = document.querySelector(".lgn-inative");
      const tabLogin: Element | null = document.querySelector(".tab-login");
      const tabSign: Element | null = document.querySelector(".tab-sign");
      const json = JSON.stringify(user);
      localStorage.setItem(username, json);
      alert(`${username} has been created!`);
      (document.getElementById("username-signUp") as HTMLInputElement).value =
        "";
      (document.getElementById("password-signUp") as HTMLInputElement).value =
        "";
      lgnInative?.classList.remove("active");
      lgnAtive?.classList.add("active");
      tabSign?.classList.remove("active");
      tabSign?.classList.remove("show");
      tabLogin?.classList.add("active");
      tabLogin?.classList.add("show");
    } else {
      alert(`${username} is already registered!`);
      (document.getElementById("username-signUp") as HTMLInputElement).value =
        "";
      (document.getElementById("password-signUp") as HTMLInputElement).value =
        "";
    }
  }
};

/* login */
const loginFunc = (e: Event): void => {
  e.preventDefault();

  if ((e.target as Element).classList.contains("btn-login")) {
    const username = (
      document.getElementById("username-login") as HTMLInputElement
    ).value;
    const password = (
      document.getElementById("password-login") as HTMLInputElement
    ).value;
    const user = localStorage.getItem(username)!;
    const data = JSON.parse(user);

    if (user === null) {
      alert("Wrong username!");
      (document.getElementById("username-login") as HTMLInputElement).value =
        "";
      (document.getElementById("password-login") as HTMLInputElement).value =
        "";
    } else if (username === data.username && password === data.password) {
      alert(`${username} is logged in!`);
      (document.getElementById("username-login") as HTMLInputElement).value =
        "";
      (document.getElementById("password-login") as HTMLInputElement).value =
        "";
      closeAllModals();

      mainSection?.addEventListener("click", scrollToSchedule);
      (
        document.querySelector(".schedule__section") as HTMLElement
      ).classList.remove("hidden");

      dynamicHelloLogout?.insertAdjacentHTML(
        "beforeend",
        `<p class="helloLogout mx-4">Hello ${username} | <a href="#" class="text-decoration-none btn-logout-close">Logout</a></p>`
      );

      /* Drop data for schedule Section */
      let arr: number[] = [];
      let food: string[] = [];
      plates.forEach((data) => {
        const dynamicSchedule: Element | null = document.querySelector(
          ".scheduleSection__dynamicSchedule"
        );
        const child = document.createElement("div");
        child.classList.add("d-flex");
        child.classList.add("justify-content-between");
        dynamicSchedule?.insertAdjacentElement("beforeend", child);
        child.innerHTML = `
        <p class="fw-bold mb-4"> ${data.Day} | <span class="fw-light">${data.Name} | ${data.Price}€</span></p>
        </div>
        <div>
        <input type="radio" id="${data.Name}${data.Price}" name="${data.Day}" value="${data.Price}">
        </div>`;

        /* radio button checked */
        const radioButton = document.querySelector(
          `input[id="${data.Name}${data.Price}"]`
        );
        const loopChecked = (e: Event): void => {
          e.preventDefault();
          if ((e.target as Element).classList.contains("btn-done")) {
            if ((radioButton as HTMLInputElement).checked) {
              arr.push(data.Price);
              food.push(data.Name);
            }
          }
        };
        divDone?.addEventListener("click", loopChecked);
      });

      /* radio button print sum */
      const printChecked = (e: Event): void => {
        e.preventDefault();
        if ((e.target as Element).classList.contains("btn-done")) {
          const dynamicTotal: Element | null = document.querySelector(
            ".scheduleSection__dynamicTotal"
          );
          const sum = arr.reduce((a, b) => a + b, 0);
          localStorage.setItem(username + "OrderedFood", food.toString());
          dynamicTotal?.insertAdjacentHTML(
            "beforeend",
            `<p class="text-center">The price to pay for the selected meals are ${sum}€</p>`
          );
        }
      };
      divDone?.addEventListener("click", printChecked);
    } else {
      alert("Wrong password!");
      (document.getElementById("password-login") as HTMLInputElement).value =
        "";
    }
  }
};
/* Logout*/
const logout = (e: Event) => {
  e.preventDefault();
  if ((e.target as Element).classList.contains("btn-logout-close")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.setTimeout(function () {
      window.location.reload();
    }, 1000);
  }
};

//Event Listeners
mainSection?.addEventListener("click", scrollToSections);
aboutSection?.addEventListener("click", scrollToTop);
formSignUp?.addEventListener("click", signUpFunc);
formLogin?.addEventListener("click", loginFunc);
dynamicHelloLogout?.addEventListener("click", logout);
