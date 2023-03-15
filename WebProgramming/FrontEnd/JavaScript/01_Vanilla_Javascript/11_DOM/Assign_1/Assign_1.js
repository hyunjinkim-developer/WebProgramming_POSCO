console.log("Connected!");

// container 클래스의 마지막 자식으로 img 태그 추가

let container = document.querySelector(".container");
console.log(container);

let img = document.createElement("img");
container.append(img);
img.setAttribute("src", "../../img/pooh.png");
img.setAttribute("alt", "pooh");
