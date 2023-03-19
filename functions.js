var size1 = window.matchMedia("(max-width: 500px)");
var size2 = window.matchMedia("(max-width: 800px)");
var size3 = window.matchMedia("(max-width: 1030px)");
var size4 = window.matchMedia("(max-width: 750px)");
var size5 = window.matchMedia("(max-width: 650px)");

function funciones_onload_index(){
    primera_carga_menu_footer();
    change_index();
}

function funciones_onload_videoclips(){
    primera_carga_menu_footer();
    // change_videoclips();
}

function funciones_onload_latidos(){
    primera_carga_menu_footer();
}

function funciones_onload_biografia(){
    primera_carga_menu_footer();
}

function funciones_onload_discografia(){
    primera_carga_menu_footer();
}

function funciones_onresize_index(){
    change_menus()
    change_index();
}

function funciones_onresize_videoclips(){
    change_menus()
    // change_videoclips();
}

function funciones_onresize_latidos(){
    change_menus()
}

function funciones_onresize_biografia(){
    change_menus()
}

function funciones_onresize_discografia(){
    change_menus()
}

function primera_carga_menu_footer(){
    if(size2.matches){

        //Cargar Menú en todas las páginas - MÓVIL
        var miMenu = '<div class="nav1" id="nav1">' +
        '<div class="menu row d-flex flex-row">' +
            '<a href="index.html" class="col-3 menu-item home h-100"><img class="h-100" src="images/logo_enziskaos.jpg" alt="Logo Enziskaos"></a>' +
            '<div class="dropdown p-0 m-0 col-3 menu-item">' + 
                '<button class="my-dropdown w-100 h-100 btn btn-secondary dropdown-toggle p-0 m-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">' +
                    '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">' + 
                        '<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>' +
                '</svg>' + 
                '</button>' + 
                '<ul class="bg-dark dropdown-menu w-100 p-0 m-0" aria-labelledby="dropdownMenuButton1">' +
                    '<li class="bg-danger m-0 p-1">' +
                        '<div class="w-100 h-100 dropdown-item text-center pt-3 pb-3 mb-1 rounded dropdown-header">Discografía</div>' +
                        '<hr class="p-0 m-0">' +
                        '<a class="w-100 h-100 dropdown-item text-center pt-3 pb-3 rounded mb-1 mt-1" href="discografia.html">Toda la discografía</a>' +
                        '<a class="w-100 h-100 dropdown-item text-center pt-3 pb-3 mt-1 rounded" href="latidos.html">Latidos</a>' +
                    '</li>' +
                    '<div class="dropdown-divider bg-danger"></div>' +
                    '<li class="bg-danger h-100 m-0 p-1"><a href="videoclips.html" class="w-100 h-100 dropdown-item text-center pt-3 pb-3 rounded mb-1">Videoclips</a></li>' +
                    '<li class="bg-danger h-100 m-0 p-1"><a href="biografia.html" class="w-100 h-100 dropdown-item text-center pt-3 pb-3 rounded mb-1">Biografía</a></li>' +
                '</ul>' +
            '</div>' +
        '</div>' +
    '</div>';

    var menuImportado = document.getElementById('menu-importado');

    menuImportado.innerHTML = miMenu;

    //Cargar Footer en todas las páginas - MÓVIL

    var miFooter = "<div class='d-flex flex-column justify-content-center align-items-center'>" +
        "<div class='w-100 d-flex flex-column justify-content-center align-items-center'>" + 
            "<h4 class='enlaces-rapidos-titulo mt-4 mb-4'>Enlaces Rápidos</h4>" + 
            "<p><a class='enlaces-rapidos' href='discografia.html'>Discografía</a></p>" +
            "<p><a class='enlaces-rapidos' href='latidos.html'>Latidos</a></p>" +
            "<p><a class='enlaces-rapidos' href='biografia.html'>Biografía</a></p>" +
        "</div>" + 
        '<div class="divider"></div>'+
        "<div class='w-100 d-flex flex-column justify-content-center align-items-center m-3'>"+
            "<a class='w-50' href='index.html' data-bs-custom-class='custom-tooltip-4' data-bs-toggle='tooltip' data-bs-html='true' title='Inicio' data-bs-placement='top'>" +
                "<img class='w-50' src='images/logo_enziskaos.jpg' alt='Logo Enziskaos'>" +
            "</a>" +
            "<p class='copyright mt-2 w-50'>&#174; Enziskaos 2023.</p>" +
        "</div>" +
        '<div class="divider"></div>'+
        "<div class='w-100 d-flex flex-column justify-content-center align-items-center'>" +
            "<h4 class='redes-sociales-titulo mt-4 mb-4'>Redes Sociales</h4>" +
            "<p><a class='redes-sociales' href='https://www.facebook.com/EnziskaosRock' target='_blank'><i class='bi bi-facebook'></i>&nbsp; Enziskaos</a></p>" +
            "<p><a class='redes-sociales' href='https://instagram.com/enziskaos?igshid=YmMyMTA2M2Y=' target='_blank'><i class='bi bi-instagram'></i>&nbsp; @enziskaos</a></p>" +
            "<p><a class='redes-sociales' href='https://youtube.com/@rafaelperezagua' target='_blank'><i class='bi bi-youtube'></i>&nbsp; @RafaelPerezagua (Enziskaos)</a></p>" +
        "</div>" +
    "</div>";

    var footerImportado = document.getElementById('footer-importado');

    footerImportado.innerHTML = miFooter;

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    } else {

        //Cargar Menú en todas las páginas - ESCRITORIO
        var miMenu = '<div class="nav1" id="nav1">' +
                        '<div class="menu row d-flex flex-row">' +
                            '<a href="index.html" class="col-3 menu-item home h-100"><img class="h-100" src="images/logo_enziskaos.jpg" alt="Logo Enziskaos"></a>' +
                            '<div class="dropdown p-0 m-0 col-3 menu-item">' + 
                                '<button class="w-100 h-100 btn btn-secondary dropdown-toggle p-0 m-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">' +
                                    'Discografía' + 
                                '</button>' + 
                                '<ul class="dropdown-menu w-100 p-0 m-0" aria-labelledby="dropdownMenuButton1">' +
                                    '<li class="h-100 m-0 p-0"><a class="w-100 h-100 dropdown-item text-center pt-3 pb-3 rounded mb-1" href="discografia.html">Toda la discografía</a></li>' +
                                    '<li class="d-flex justify-content-center"><hr class="rounded dropdown-divider p-0 m-0 bg-danger text-center"></li>' +
                                    '<li><a class="w-100 h-100 dropdown-item text-center pt-3 pb-3 mt-1 rounded" href="latidos.html">Latidos</a></li>' +
                                '</ul>' +
                            '</div>' +
                            '<a href="videoclips.html" class="col-3 menu-item">Videoclips</a>'+
                            '<a href="biografia.html" class="col-3 menu-item">Biografía</a>' + 
                        '</div>' +
                    '</div>';

        var menuImportado = document.getElementById('menu-importado');

        menuImportado.innerHTML = miMenu;


        //Cargar Footer en todas las páginas - ESCRITORIO

        var miFooter = "<div class='row d-flex justify-content-center align-items-center'>" +
                            "<div class='col-3'>" + 
                                "<h4 class='enlaces-rapidos-titulo mt-4 mb-4'>Enlaces Rápidos</h4>" + 
                                "<p><a class='enlaces-rapidos' href='discografia.html'>Discografía</a></p>" +
                                "<p><a class='enlaces-rapidos' href='latidos.html'>Latidos</a></p>" +
                                "<p><a class='enlaces-rapidos' href='biografia.html'>Biografía</a></p>" +
                            "</div>" + 
                            "<div class='col-5 d-flex flex-column justify-content-center align-items-center'>"+
                                "<a href='index.html' data-bs-custom-class='custom-tooltip-4' data-bs-toggle='tooltip' data-bs-html='true' title='Inicio' data-bs-placement='top'>" +
                                    "<img class='w-50' src='images/logo_enziskaos.jpg' alt='Logo Enziskaos'>" +
                                "</a>" +
                            "</div>" +
                            "<div class='col-3'>" +
                                "<h4 class='redes-sociales-titulo mt-4 mb-4'>Redes Sociales</h4>" +
                                "<p><a class='redes-sociales' href='https://www.facebook.com/EnziskaosRock' target='_blank'><i class='bi bi-facebook'></i>&nbsp; Enziskaos</a></p>" +
                                "<p><a class='redes-sociales' href='https://instagram.com/enziskaos?igshid=YmMyMTA2M2Y=' target='_blank'><i class='bi bi-instagram'></i>&nbsp; @enziskaos</a></p>" +
                                "<p><a class='redes-sociales' href='https://youtube.com/@rafaelperezagua' target='_blank'><i class='bi bi-youtube'></i>&nbsp; @RafaelPerezagua (Enziskaos)</a></p>" +
                            "</div>" +
                            "<p class='copyright mt-2'>&#174; Enziskaos 2023.</p>" +
                        "</div>";

        var footerImportado = document.getElementById('footer-importado');

        footerImportado.innerHTML = miFooter;
    }

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

}

function change_menus(){ 
    if(size2.matches){

            //Cargar Menú en todas las páginas - MÓVIL
            var miMenu = '<div class="nav1" id="nav1">' +
            '<div class="menu row d-flex flex-row">' +
                '<a href="index.html" class="col-3 menu-item home h-100"><img class="h-100" src="images/logo_enziskaos.jpg" alt="Logo Enziskaos"></a>' +
                '<div class="dropdown p-0 m-0 col-3 menu-item">' + 
                    '<button class="my-dropdown w-100 h-100 btn btn-secondary dropdown-toggle p-0 m-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">' +
                        '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">' + 
                            '<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>' +
                    '</svg>' + 
                    '</button>' + 
                    '<ul class="bg-dark dropdown-menu w-100 p-0 m-0" aria-labelledby="dropdownMenuButton1">' +
                        '<li class="bg-danger m-0 p-1">' +
                            '<div class="w-100 h-100 dropdown-item text-center pt-3 pb-3 mb-1 rounded dropdown-header">Discografía</div>' +
                            '<hr class="p-0 m-0">' +
                            '<a class="w-100 h-100 dropdown-item text-center pt-3 pb-3 rounded mb-1 mt-1" href="discografia.html">Toda la discografía</a>' +
                            '<a class="w-100 h-100 dropdown-item text-center pt-3 pb-3 mt-1 rounded" href="latidos.html">Latidos</a>' +
                        '</li>' +
                        '<div class="dropdown-divider bg-danger"></div>' +
                        '<li class="bg-danger h-100 m-0 p-1"><a href="videoclips.html" class="w-100 h-100 dropdown-item text-center pt-3 pb-3 rounded mb-1">Videoclips</a></li>' +
                        '<li class="bg-danger h-100 m-0 p-1"><a href="biografia.html" class="w-100 h-100 dropdown-item text-center pt-3 pb-3 rounded mb-1">Biografía</a></li>' +
                    '</ul>' +
                '</div>' +
            '</div>' +
        '</div>';

        var menuImportado = document.getElementById('menu-importado');

        menuImportado.innerHTML = miMenu;

        //Cargar Footer en todas las páginas - MÓVIL

        var miFooter = "<div class='d-flex flex-column justify-content-center align-items-center'>" +
            "<div class='w-100 d-flex flex-column justify-content-center align-items-center'>" + 
                "<h4 class='enlaces-rapidos-titulo mt-4 mb-4'>Enlaces Rápidos</h4>" + 
                "<p><a class='enlaces-rapidos' href='discografia.html'>Discografía</a></p>" +
                "<p><a class='enlaces-rapidos' href='latidos.html'>Latidos</a></p>" +
                "<p><a class='enlaces-rapidos' href='biografia.html'>Biografía</a></p>" +
            "</div>" + 
            '<div class="divider"></div>'+
            "<div class='w-100 d-flex flex-column justify-content-center align-items-center m-3'>"+
                "<a class='w-50' href='index.html' data-bs-custom-class='custom-tooltip-4' data-bs-toggle='tooltip' data-bs-html='true' title='Inicio' data-bs-placement='top'>" +
                    "<img class='w-50' src='images/logo_enziskaos.jpg' alt='Logo Enziskaos'>" +
                "</a>" +
                "<p class='copyright mt-2 w-50'>&#174; Enziskaos 2023.</p>" +
            "</div>" +
            '<div class="divider"></div>'+
            "<div class='w-100 d-flex flex-column justify-content-center align-items-center'>" +
                "<h4 class='redes-sociales-titulo mt-4 mb-4'>Redes Sociales</h4>" +
                "<p><a class='redes-sociales' href='https://www.facebook.com/EnziskaosRock' target='_blank'><i class='bi bi-facebook'></i>&nbsp; Enziskaos</a></p>" +
                "<p><a class='redes-sociales' href='https://instagram.com/enziskaos?igshid=YmMyMTA2M2Y=' target='_blank'><i class='bi bi-instagram'></i>&nbsp; @enziskaos</a></p>" +
                "<p><a class='redes-sociales' href='https://youtube.com/@rafaelperezagua' target='_blank'><i class='bi bi-youtube'></i>&nbsp; @RafaelPerezagua (Enziskaos)</a></p>" +
            "</div>" +
        "</div>";

    var footerImportado = document.getElementById('footer-importado');

    footerImportado.innerHTML = miFooter;

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    } else {

        //Cargar Menú en todas las páginas - ESCRITORIO
        var miMenu = '<div class="nav1" id="nav1">' +
                        '<div class="menu row d-flex flex-row">' +
                            '<a href="index.html" class="col-3 menu-item home h-100"><img class="h-100" src="images/logo_enziskaos.jpg" alt="Logo Enziskaos"></a>' +
                            '<div class="dropdown p-0 m-0 col-3 menu-item">' + 
                                '<button class="w-100 h-100 btn btn-secondary dropdown-toggle p-0 m-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">' +
                                    'Discografía' + 
                                '</button>' + 
                                '<ul class="dropdown-menu w-100 p-0 m-0" aria-labelledby="dropdownMenuButton1">' +
                                    '<li class="h-100 m-0 p-0"><a class="w-100 h-100 dropdown-item text-center pt-3 pb-3 rounded mb-1" href="discografia.html">Toda la discografía</a></li>' +
                                    '<li class="d-flex justify-content-center"><hr class="rounded dropdown-divider p-0 m-0 bg-danger text-center"></li>' +
                                    '<li><a class="w-100 h-100 dropdown-item text-center pt-3 pb-3 mt-1 rounded" href="latidos.html">Latidos</a></li>' +
                                '</ul>' +
                            '</div>' +
                            '<a href="videoclips.html" class="col-3 menu-item">Videoclips</a>'+
                            '<a href="biografia.html" class="col-3 menu-item">Biografía</a>' + 
                        '</div>' +
                    '</div>';

        var menuImportado = document.getElementById('menu-importado');

        menuImportado.innerHTML = miMenu;


        //Cargar Footer en todas las páginas - ESCRITORIO

        var miFooter = "<div class='row d-flex justify-content-center align-items-center'>" +
                            "<div class='col-3'>" + 
                                "<h4 class='enlaces-rapidos-titulo mt-4 mb-4'>Enlaces Rápidos</h4>" + 
                                "<p><a class='enlaces-rapidos' href='discografia.html'>Discografía</a></p>" +
                                "<p><a class='enlaces-rapidos' href='latidos.html'>Latidos</a></p>" +
                                "<p><a class='enlaces-rapidos' href='biografia.html'>Biografía</a></p>" +
                            "</div>" + 
                            "<div class='col-5 d-flex flex-column justify-content-center align-items-center'>"+
                                "<a href='index.html' data-bs-custom-class='custom-tooltip-4' data-bs-toggle='tooltip' data-bs-html='true' title='Inicio' data-bs-placement='top'>" +
                                    "<img class='w-50' src='images/logo_enziskaos.jpg' alt='Logo Enziskaos'>" +
                                "</a>" +
                            "</div>" +
                            "<div class='col-3'>" +
                                "<h4 class='redes-sociales-titulo mt-4 mb-4'>Redes Sociales</h4>" +
                                "<p><a class='redes-sociales' href='https://www.facebook.com/EnziskaosRock' target='_blank'><i class='bi bi-facebook'></i>&nbsp; Enziskaos</a></p>" +
                                "<p><a class='redes-sociales' href='https://instagram.com/enziskaos?igshid=YmMyMTA2M2Y=' target='_blank'><i class='bi bi-instagram'></i>&nbsp; @enziskaos</a></p>" +
                                "<p><a class='redes-sociales' href='https://youtube.com/@rafaelperezagua' target='_blank'><i class='bi bi-youtube'></i>&nbsp; @RafaelPerezagua (Enziskaos)</a></p>" +
                            "</div>" +
                            "<p class='copyright mt-2'>&#174; Enziskaos 2023.</p>" +
                        "</div>";

        var footerImportado = document.getElementById('footer-importado');

        footerImportado.innerHTML = miFooter;

        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    }
}

function change_index(){
    var bienvenida = document.getElementById("bienvenida");

    if(size1.matches){
        bienvenida.style.fontSize = "45px";
    } else {
        bienvenida.style.fontSize = "70px";
    }
}

// function change_videoclips(){
//     var contenedorIframe = document.querySelector(".fotorama__video");
//     var fotoramaVideoclips = document.querySelector(".fotorama__video iframe");
//     var fotoramaThumbs = document.querySelector(".fotorama__nav-wrap");

//     if(size3.matches){
//         contenedorIframe.setAttribute("style", "display: flex; flex-direction: row; justify-content: center; align-content: center;");
//         fotoramaVideoclips.style.height = "60%";
//         fotoramaThumbs.setAttribute("style", "display: none;");
//     } else {
//         fotoramaVideoclips.style.height = "90%";
//     }
// }

function cargar_letra(id){
    alert(id);
    var divLetra = document.getElementById("letra");
    var divDescripcion = document.getElementById("descripcion");

    divDescripcion.setAttribute("style", "display: none;");
    divLetra.setAttribute("style", "display: block;");
}

function cargar_descripcion(id){
    alert(id);
    var divLetra = document.getElementById("letra");
    var divDescripcion = document.getElementById("descripcion");

    divLetra.setAttribute("style", "display: none;");
    divDescripcion.setAttribute("style", "display: block;");
}

function mostrar_info_disco(id){
    var contenedorPresentacion = document.getElementById("info_disco_2");
    var contenedorDescripcion = document.getElementById("presentacion_disco_3");

    if(id == "swipe_container"){
        contenedorPresentacion.setAttribute("style", "display: none !important");
        contenedorDescripcion.setAttribute("style", "display: block");

    } else if(id == "return"){
        contenedorDescripcion.setAttribute("style", "display: none");
        contenedorPresentacion.setAttribute("style", "display: block");
    }
}

function switch_poster_youtube(id){
    var miPoster = document.getElementById("poster" + id);
    var miVideo = document.getElementById("youtube" + id); 
    var miRuta = miVideo.getAttribute("src");
     
    miVideo.setAttribute("src", miRuta + "?autoplay=1");
    miPoster.setAttribute("style", "display: none !important;");
    miVideo.setAttribute("style", "display: block;");
}