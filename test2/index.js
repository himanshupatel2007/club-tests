const heading = document.querySelector("h2")
const cleaerButton = document.querySelector("button")
const items = document.querySelectorAll("li")


let selected = 0

items.forEach((e) => {
    e.addEventListener("click", () => {

        if (e.classList.contains("clicked")) {
            e.classList.remove("clicked")
            selected--
        }
        else {
            e.classList.add("clicked")
            selected++
        }
        heading.textContent = `Selected Items : ${selected}`
    })
})



cleaerButton.addEventListener("click", () => {
    items.forEach((e) => {
        e.classList.remove("clicked")
    })
    selected = 0
    heading.textContent = `Selected Items :${selected}`
})

