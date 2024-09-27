function mudaCor(cor){
    let body = document.body;
    switch(cor){
        case 'img1': body.style.backgroundImage = "url('img1.jpeg')"; break;
        case 'img2': body.style.backgroundImage = "url('img2.jpeg')"; break;
        case 'img3': body.style.backgroundImage = "url('img3.jpeg')"; break;
        case 'img4': body.style.backgroundImage = "url('img4.jpeg')"; break;
        case 'img5': body.style.backgroundImage = "url('img5.jpeg')"; break;
        default: body.style.backgroundColor = 'black';
    }
}