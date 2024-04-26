let items = document.querySelectorAll(".item");
let firstBox = document.getElementById("firstBox");
let secondBox = document.getElementById("secondBox");


items.forEach((item)=> {
    item.addEventListener("dragstart",(event) => {
        let selected = event.target;

        secondBox.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        secondBox.addEventListener("drop", () => {
            secondBox.appendChild(selected);
            selected = null;
        })

        firstBox.addEventListener("dragover", (event) => {
          event.preventDefault();
        });

        firstBox.addEventListener("drop", () => {
          firstBox.appendChild(selected);
          selected = null;
        });

    })
})
