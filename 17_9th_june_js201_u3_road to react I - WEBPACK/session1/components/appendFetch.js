let getData = async(url)=>{
    let res=await fetch(url);
    let data=await res.json();
    console.log(data)
    return data;

}


let append=(data,container)=>{
    data.forEach((el) => {
    const div = document.createElement('div');
    const p = document.createElement('p');   
    p.innerText=el.title
    const img = document.createElement('img'); 
    img.src=el.image     
    div.append(img,p)
    container.append(div)
    });
}

export {getData,append}