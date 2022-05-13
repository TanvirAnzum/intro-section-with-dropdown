const sidebar = document.querySelector(".sidebar-area");
const sidebar_exit = document.querySelector(".sidebar__exit");
const toggle_btn = document.querySelector(".toggle-button");
const feature = document.querySelector(".dropdown-feature");
const company = document.querySelector(".dropdown-company");
const f_item = document.querySelector(".feature-item");
const c_item = document.querySelector(".company-item");
const df = document.querySelector(".df");
const df_item = document.querySelector(".df-item");
const cf = document.querySelector(".cf");
const cf_item = document.querySelector(".cf-item");

function sidebar_open() {
  sidebar.style.display = "block";
}

function sidebar_close() {
  sidebar.style.display = "none";
}

let flag = false;
function feature_open() {
  const icon = this.querySelector("i");
  if (flag) {
    f_item.style.display = "none";
    flag = false;
    icon.classList.replace("fa-caret-up", "fa-caret-down");
  } else {
    f_item.style.display = "block";
    flag = true;
    icon.classList.replace("fa-caret-down", "fa-caret-up");
  }
}

let flag2 = false;
function company_open() {
    const icon = this.querySelector("i");
    if (flag2) {
      c_item.style.display = "none";
      flag2 = false;
      icon.classList.replace("fa-caret-up", "fa-caret-down");
    } else {
      c_item.style.display = "block";
      flag2 = true;
      icon.classList.replace("fa-caret-down", "fa-caret-up");
    }
}

let flag3 = false;
function df_open() {
    const icon = this.querySelector("i");
    if (flag3) {
      df_item.style.display = "none";
      flag3 = false;
      icon.classList.replace("fa-caret-up", "fa-caret-down");
    } else {
      df_item.style.display = "flex";
      flag3 = true;
      icon.classList.replace("fa-caret-down", "fa-caret-up");
    }
}

let flag4 = false;
function cf_open() {
    const icon = this.querySelector("i");
    if (flag4) {
      cf_item.style.display = "none";
      flag4 = false;
      icon.classList.replace("fa-caret-up", "fa-caret-down");
    } else {
      cf_item.style.display = "flex";
      flag4 = true;
      icon.classList.replace("fa-caret-down", "fa-caret-up");
    }
}

toggle_btn.addEventListener("click", sidebar_open);

sidebar_exit.addEventListener("click", sidebar_close);

feature.addEventListener("click", feature_open);

company.addEventListener("click", company_open);

df.addEventListener("click", df_open);

cf.addEventListener("click", cf_open);