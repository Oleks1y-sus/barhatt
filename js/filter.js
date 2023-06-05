
























let articles = document.querySelectorAll(".new-block");
let filter = document.querySelector(".filter");
filter.onchange = function(){
    console.log(filter.value);
    for (let article of articles){
        if (article.dataset.category !== filter.value && filter.value !== 'all'){
            article.classList.add('hidden');
        }
        else{
            article.classList.remove('hidden');
        }
    }
}