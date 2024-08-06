let acc = document.querySelectorAll(".accordian");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", (e) => {
    let val = e.target;
    let newtarget = val.nextElementSibling;
    console.log("class ", newtarget.classList);
    if (newtarget.classList.contains("toggle")) {
      newtarget.classList.remove("toggle");
    } else {
      newtarget.classList.add("toggle");
    }
  });
}
