const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const btn = document.querySelector("header button")

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert("Dia já incluso ✅")
    return
  }
  nlwSetup.addDay(today)
}
function save() {
  localStorage.setItem("NlWSetup@habits", JSON.stringify(nlwSetup.data))
}
btn.addEventListener("click", add)
form.addEventListener("change", save)
// const data = {
//   run: ["01-01", "01-02", "01-03"],
// }
const data = JSON.parse(localStorage.getItem("NlWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
