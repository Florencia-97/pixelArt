// Nada por aquí aun

$(document).ready(function(){
    $('.pixelart .dibujo').bind('click', function() {
        changeImgOrGif(this)
    })
})

function changeImgOrGif(imagen){
    var basename = getBasename(imagen)
    var type = getType(imagen)
    
    var gif = 'gif/'+basename+'.gif'
    var alt = 'alt/'+basename+'.png'
    var img = 'img/'+basename+'.png'
    
    if (type == 2 || type == 3) {
        $(imagen).attr('src', img)
        return
    }

    var origwidth = $(imagen).width()
    var origheight = $(imagen).height()
    
    var intentogif = new Image(); var intentoalt = new Image(); var intentoimg = new Image();
    intentogif.src = gif; intentoalt.src = alt; intentoimg.src = img
    
    if(intentogif.height != 0){
        $(imagen).attr('src', gif)
        $(imagen).attr('width',origwidth)
        $(imagen).attr('height',origheight)
    } 
    else if(intentoalt.height != 0) $(imagen).attr('src', alt)
}

function getBasename(file){
    var basename = $(file).attr('src').split('/')[1]
    basename = basename.split('.')[0]
    return basename
}

function getType(file){
    if ($(file).attr('src').match("^img")) return 1
    if ($(file).attr('src').match("^alt")) return 2
    if ($(file).attr('src').match("^gif")) return 3
}