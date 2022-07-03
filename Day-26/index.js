

var love = document.querySelector("h1");

love.addEventListener("mouseover",function(){
    love.classList.add("love");
});

love.addEventListener("mouseout",function(){
    love.classList.remove("love");
})
