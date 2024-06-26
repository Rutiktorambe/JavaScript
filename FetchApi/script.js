const root = document.querySelector('#root');
console.log(root)
const btn=document.querySelector('#btn');




function createitem(item){
    const card=document.createElement('div');
    card.classList.add('card');

    const photo=document.createElement('img');
    card.classList.add('photo');
    photo.src=t=item.thumbnailUrl;

    const title=document.createElement('h4');
    card.classList.add('title');
    title.innerHTML=item.title;

    card.appendChild(title);
    card.appendChild(photo);
    root.appendChild(card);
}

function display(items) {
    items.forEach( (item) => {
        createitem(item);
    });
   

}



btn.addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos').
then((res)=>res.json())
.then((items)=> 
{
    display(items);
})
});