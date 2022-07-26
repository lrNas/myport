let title = " Lucas Nascimento - Dev. Fullstack - ";
let position = 0;
function scrolltitle() {
    
            document.title = title.substring(position, title.length) + title.substring(0, position); 
            position++;
            if (position > title.length) position = 0;
            titleScroll = window.setTimeout(scrolltitle,200);
}
scrolltitle();