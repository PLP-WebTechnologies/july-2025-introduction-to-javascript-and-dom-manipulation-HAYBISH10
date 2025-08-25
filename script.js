let age = 20
let isStudent = true
let statusMessage = ""

if (age >= 18 && isStudent) {
  statusMessage = "You are an adult student"
} else if (age >= 18) {
  statusMessage = "You are an adult"
} else {
  statusMessage = "You are not an adult"
}

document.getElementById("message").textContent = statusMessage

function greet(name) {
  return "Hello, " + name
}

function square(num) {
  return num * num
}

let numbers = [1, 2, 3, 4, 5]
for (let i = 0; i < numbers.length; i++) {
  let li = document.createElement("li")
  li.textContent = "Square of " + numbers[i] + " is " + square(numbers[i])
  document.getElementById("list").appendChild(li)
}

let fruits = ["Apple", "Banana", "Cherry"]
for (let fruit of fruits) {
  console.log(greet(fruit))
}

document.getElementById("btn").addEventListener("click", function() {
  document.getElementById("title").textContent = "Button Clicked!"
  document.body.style.backgroundColor = "lightblue"
  alert("You clicked the button!")
})