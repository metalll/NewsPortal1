/**
 * Created by NSD on 21.04.17.
 */


var navigationStack = [];

function PageLoader(url,relative) {



    if(navigationStack==[]||navigationStack.size==0||navigationStack==null){

        var navigationItem = new Object();
        navigationItem.url = 'index.html';
        navigationItem.relative = true;

        navigationStack.push(navigationItem);

    }



    var preloader="<div class=\"row\">";
    preloader += "   <div id=\"global_preloader_div\" class=\" col s12 m12 l12 center center-align\">";
    preloader += "";
    preloader += "";
    preloader += "        <img id=\"global_preloader\" src=\"images\/bx_loader.gif\">";
    preloader += "   <\/div> <\/div>";

    document.getElementById('page_content').innerHTML=preloader;


    var finalUrl = '';




    finalUrl += window.location.protocol+ '//' ;


    if(relative==true){


        finalUrl   += window.location.host + "/NewsPortal/" + url;


    }else{

        finalUrl += url

    }





    $.ajax({
        url: finalUrl,
        type:'GET',
        cache: true,
        success: function(html){





            var navigationItem = new Object();
            navigationItem.url = url;
            navigationItem.relative = relative;
            
            document.getElementById('page_content').innerHTML= html;
            if(url.indexOf('index_content')){
                index_content();
            }
        }
    });

}



function goBack() {
    var navItem = navigationStack.pop();
    if (navItem!=null) {


        PageLoader(navItem.url,navItem.relative);

        //load content with ajax
    }


};

window.addEventListener('popstate', function (e) {
    var state = e.state;
    if (state !== null) {
        goBack();
    }
});