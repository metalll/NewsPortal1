/**
 * Created by NSD on 25.04.17.
 */
function handleZayavka(inputRadio) {






    var list="";
    list += " <ul class=\"collection left left-align\">";








    if(inputRadio.id=='exp_zost_obl'||inputRadio.id=='exp_zost_post'||inputRadio.id=='exp_zost_vendor'){


        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"1\" \/><label for=\"1\">Устаткування, пов'язане з використанням, виготовленням, переробкою, зберіганням, транспортуванням, утилізацією чи знешкодженням небезпечних або шкідливих речовин.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"2\" \/><label for=\"2\">Технологічне устаткування та лінійні частини магістральних газопроводів, нафтопроводів, продуктопроводів (нафтопродуктопроводів, аміакопроводів, етиленопроводів тощо).<\/label><\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"3\" \/><label for=\"3\">Технологічне устаткування, лінійні частини та їх елементи систем газопостачання природним і зрідженим газом суб'єктів господарювання та населених пунктів, а також газовикористовуюче обладнання потужністю понад 100 кВт.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"4\" \/><label for=\"4\">Технологічне устаткування систем промислового та міжпромислового збору нафти і газу.<\/label> <\/p><\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"5\" \/><label for=\"5\">Технологічне устаткування об'єктів нафтогазовидобувної промисловості. <\/label><\/p><\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"6\" \/><label for=\"6\">Технологічне устаткування для утилізації зброї, звичайних видів боєприпасів та виробів ракетної техніки.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"7\" \/><label for=\"7\">Гірничошахтне та гірничорятувальне устаткування.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"8\" \/><label for=\"8\">Устаткування для видобутку та транспортування корисних копалин відкритим способом.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"9\" \/><label for=\"9\">Конвеєрні стрічки для вугільної, гірничорудної, нерудної, металургійної та коксохімічної промисловості.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"10\" \/><label for=\"10\">Устаткування для дроблення, сортування, збагачення корисних копалин і огрудкування руд та концентратів, технологічне обладнання з переробки природного каменю.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"11\" \/><label for=\"11\">Устаткування та технічні засоби для виготовлення, використання і транспортування вибухових матеріалів і виробів на їх основі, комплекси для їх переробки та зберігання.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"12\" \/><label for=\"12\">Технологічне устаткування хімічної, біохімічної, нафтохімічної, нафтогазопереробної, металургійної, коксохімічної, ливарної, олійно-жирової, ефіроолійної, деревообробної промисловості, хлор- та аміаковикористовуючих виробництв.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"13\" \/><label for=\"13\">Технологічне устаткування для целюлозно-паперового виробництва, переробки пластмас, полімерних матеріалів і гумотехнічних виробів.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"14\" \/><label for=\"14\">Електрообладнання, призначене для експлуатації (застосування) у вибухонебезпечних зонах.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"15\" \/><label for=\"15\">Електричне устаткування електричних станцій та мереж, технологічне електрообладнання напругою понад 1000 В.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"16\" \/><label for=\"16\">Парові і водогрійні котли теплопродуктивністю понад 0,1 МВт.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"17\" \/><label for=\"17\">Посудини, що працюють під тиском понад 0,05 МПа.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"18\" \/><label for=\"18\">Трубопроводи пари та гарячої води з робочим тиском понад 0,05 МПа і температурою води вище 110 град. С, які підлягають реєстрації в територіальних органах Держпраці.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"19\" \/><label for=\"19\">Вантажопідіймальні крани і машини, ліфти, ескалатори, траволатори, канатні дороги, підйомники, зокрема будівельні, та фунікулери.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"20\" \/><label for=\"20\">Технологічні транспортні засоби, що підлягають реєстрації в територіальних органах Держпраці.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"21\" \/><label for=\"21\">Атракціони підвищеної небезпеки стаціонарні, пересувні та мобільні.<\/label> <\/p> <\/li>";






    }

    if(inputRadio.id=='exp_zost_robotu'){

        /*

         4. Вибухові роботи та роботи, пов'язані з використанням енергії вибуху.

         5. Утилізація зброї, звичайних видів боєприпасів та виробів ракетної техніки.

         6. Газонебезпечні роботи та роботи у вибухопожежонебезпечних зонах.

         7. Переробка нафти, вуглеводневих газів і конденсату.
         8. Спорудження магістральних газопроводів, нафтопроводів і продуктопроводів (нафтопродуктопроводів, аміакопроводів, етиленопроводів тощо), систем газопостачання природним та зрідженим газом.

         9. Роботи з вироблення агломерату, коксу, розплавів чорних і кольорових металів та сплавів на основі таких металів, заготовок для прокатного виробництва, готового прокату, металевих труб і феросплавів.

         10. Буріння, експлуатація та капітальний ремонт свердловин під час геологічного вивчення і розробки родовищ корисних копалин.

         11. Зберігання балонів, контейнерів, цистерн та інших ємностей із стисненим, зрідженим, отруйним, вибухонебезпечним та інертним газом, їх заповнення, спорожнення і ремонт.


         12. Роботи в діючих електроустановках напругою понад 1000 В та в зонах дії струму високої частоти.

         13. Підземні та відкриті гірничі роботи.

         14. Маркшейдерські роботи.

         15. Роботи в колодязях, шурфах, траншеях, котлованах, бункерах, камерах, колекторах, замкнутому просторі (ємностях, боксах, топках, трубопроводах).

         16. Земляні роботи, що виконуються на глибині понад 2 метри або в зоні розташування підземних

         17. Водолазні роботи.

         18. Роботи верхолазні та скелелазні, що виконуються на висоті 5 метрів і більше над поверхнею ґрунту, з перекриття або робочого настилу, та роботи, що виконуються за допомогою підйомних і підвісних колисок, механічних підіймачів та будівельних підйомників.

         19.
         Зведення, монтаж і демонтаж будинків, споруд, зміцнення їх аварійних частин, електропрогрівання бетону та електророзморожування ґрунтів.

         20. Будівництво, ремонт, експлуатація та ліквідація підземних споруд, не пов'язаних з видобутком корисних копалин.

         21. Лісосічні роботи, трелювання, транспортування та сплав лісу.

         22. Роботи із збагачування корисних копалин.

         23. Зварювальні, газополум'яні, наплавні роботи.

         24. Обстеження, ремонт та чищення димарів, повітропроводів.

         25. Роботи із збереження та переробки зерна.

         26. Звалювання та розпилювання блоків природного каменю.

         *
        *
        *
        * */


        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"1\" \/><label for=\"1\">Технічний огляд, випробування, експертне обстеження, технічне діагностування машин, механізмів, устаткування підвищеної небезпеки, що зазначені у додатку 3 до Порядку видачі дозволів на виконання робіт підвищеної небезпеки та на експлуатацію (застосування) машин, механізмів, устатковання підвищеної небезпеки та пункті 1 додатку 7 до такого Порядку.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"2\" \/><label for=\"2\">Монтаж, демонтаж, налагодження, ремонт, технічне обслуговування, реконструкція машин, механізмів, устаткування підвищеної небезпеки, що зазначені у додатку 3 до Порядку видачі дозволів на виконання робіт підвищеної небезпеки та на експлуатацію (застосування) машин, механізмів, устаткування підвищеної небезпеки.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"3\" \/><label for=\"3\">Виробництво, переробка, розподіл та застосування шкідливих небезпечних речовин 1, 2 і 3 класу небезпеки, а також аміаку, водню та продуктів розділення повітря.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"4\" \/><label for=\"4\">Вибухові роботи та роботи, пов'язані з використанням енергії вибуху.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"5\" \/><label for=\"5\">Утилізація зброї, звичайних видів боєприпасів та виробів ракетної техніки.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"6\" \/><label for=\"6\">Газонебезпечні роботи та роботи у вибухопожежонебезпечних зонах.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"7\" \/><label for=\"7\">Переробка нафти, вуглеводневих газів і конденсату.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"8\" \/><label for=\"8\">Спорудження магістральних газопроводів, нафтопроводів і продуктопроводів (нафтопродуктопроводів, аміакопроводів, етиленопроводів тощо), систем газопостачання природним та зрідженим газом.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"9\" \/><label for=\"9\">Роботи з вироблення агломерату, коксу, розплавів чорних і кольорових металів та сплавів на основі таких металів, заготовок для прокатного виробництва, готового прокату, металевих труб і феросплавів.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"10\" \/><label for=\"10\">Буріння, експлуатація та капітальний ремонт свердловин під час геологічного вивчення і розробки родовищ корисних копалин.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"11\" \/><label for=\"11\">Зберігання балонів, контейнерів, цистерн та інших ємностей із стисненим, зрідженим, отруйним, вибухонебезпечним та інертним газом, їх заповнення, спорожнення і ремонт.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"12\" \/><label for=\"12\">Роботи в діючих електроустановках напругою понад 1000 В та в зонах дії струму високої частоти.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"13\" \/><label for=\"13\">Підземні та відкриті гірничі роботи.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"14\" \/><label for=\"14\">Маркшейдерські роботи.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"15\" \/><label for=\"15\">Роботи в колодязях, шурфах, траншеях, котлованах, бункерах, камерах, колекторах, замкнутому просторі (ємностях, боксах, топках, трубопроводах).<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"16\" \/><label for=\"16\">Земляні роботи, що виконуються на глибині понад 2 метри або в зоні розташування підземних<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"17\" \/><label for=\"17\">Водолазні роботи.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"18\" \/><label for=\"18\">Роботи верхолазні та скелелазні, що виконуються на висоті 5 метрів і більше над поверхнею ґрунту, з перекриття або робочого настилу, та роботи, що виконуються за допомогою підйомних і підвісних колисок, механічних підіймачів та будівельних підйомників.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"19\" \/><label for=\"19\">Зведення, монтаж і демонтаж будинків, споруд, зміцнення їх аварійних частин, електропрогрівання бетону та електророзморожування ґрунтів.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"20\" \/><label for=\"20\">Будівництво, ремонт, експлуатація та ліквідація підземних споруд, не пов'язаних з видобутком корисних копалин.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"21\" \/><label for=\"21\">Лісосічні роботи, трелювання, транспортування та сплав лісу.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"22\" \/><label for=\"22\">Роботи із збагачування корисних копалин.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"23\" \/><label for=\"23\">Зварювальні, газополум'яні, наплавні роботи.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"24\" \/><label for=\"24\">Обстеження, ремонт та чищення димарів, повітропроводів.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"25\" \/><label for=\"25\">Роботи із збереження та переробки зерна.<\/label> <\/p> <\/li>";
        list += "      <li class=\"collection-item\"> <p><input type=\"checkbox\" id=\"26\" \/><label for=\"26\">Звалювання та розпилювання блоків природного каменю.<\/label><\/p> <\/li>";

        }


    // list += "                <option value=\"1\">Option 1<\/option>";
    // list += "                <option value=\"2\">Option 2<\/option>";
    // list += "                <option value=\"3\">Option 3<\/option>";
    list += "    <\/ul>";


    if(inputRadio.id=='exp_zost_obl'||inputRadio.id=='exp_zost_post'||inputRadio.id=='exp_zost_vendor'){


        list += "<div class=\"row\">";
        list += "    <table class=\"col s12 m12 l12\" id = \"table\">";
        list += "        <thead>";
        list += "        <tr>";
        list += "            <th>Найменування, тип, марка обладнання<\/th>";
        list += "            <th>Кількість<\/th>";
        list += "            <th>Країна-виробник<\/th>";
        list += "            <th>Рік випуску<\/th>";
        list += "            <th><\/th>";
        list += "        <\/tr>";
        list += "        <\/thead>";
        list += "        <tbody>";
        list += "        <tr>";
        list += "            <td>";
        list += "                <div class=\"input-field col s12\">";
        list += "                    <input id=\"name\" type=\"text\" class=\"validate\">";
        list += "                    <label for=\"name\">Найменування, тип, марка обладнання<\/label>";
        list += "                <\/div>";
        list += "            <\/td>";
        list += "            <td>";
        list += "                <div class=\"input-field col s12\">";
        list += "                    <input id=\"elem_size\" type=\"number\" class=\"validate\">";
        list += "                    <label for=\"elem_size\">Кількість<\/label>";
        list += "                <\/div>";
        list += "            <\/td>";
        list += "            <td> <div class=\"input-field col s12\">";
        list += "                <input id=\"country_vendor\" type=\"text\" class=\"validate\">";
        list += "                <label for=\"country_vendor\">Країна-виробник<\/label>";
        list += "            <\/div><\/td>";
        list += "            <td> <div class=\"input-field col s12\">";
        list += "                <input id=\"date_vendor\" type=\"text\" class=\"validate\">";
        list += "                <label for=\"date_vendor\">Рік випуску<\/label>";
        list += "            <\/div><\/td>";
        list += "            <td> <a href=\"javascript:void(0);\" onclick=\"deleteZayavka(this)\" class=\"waves-effect col s12 waves-light red darken-3 btn\"><i class=\"material-icons white-text\">delete<\/i><\/a><\/td>";
        list += "        <\/tr>";
        list += "";
        list += "        <\/tbody>";
        list += "";
        list += "    <\/table>";
        list += "";
        list += "    <a href=\"javascript:void(0);\" onclick=\"addZayavka(this)\" class=\"waves-effect col s12 waves-light green darken-3 btn\"><i class=\"material-icons white-text\">add<\/i><\/a>";
        list += "";
        list += "<\/div>";



    }



    document.getElementById('zayavka_container').innerHTML = list;

    //$('select').material_select();
    //$('#zayavka_dialog').scrollTo('select');




}


function addZayavka(sender) {

    var id = Math.round(Math.random()*1000);





  //  console.log(id);


    var table =  sender.parentNode.childNodes[1].childNodes[3];
    var buffer = "";

    buffer += "  <tr>";
    buffer += "            <td>";
    buffer += "                <div class=\"input-field col s12\">";
    buffer += "                    <input id=\"name"+id+"\" type=\"text\" class=\"validate\">";
    buffer += "                    <label for=\"name"+id+"\">Найменування, тип, марка обладнання<\/label>";
    buffer += "                <\/div>";
    buffer += "            <\/td>";
    buffer += "            <td>";
    buffer += "                <div class=\"input-field col s12\">";
    buffer += "                    <input id=\"elem_size"+id+"\" type=\"number\" class=\"validate\">";
    buffer += "                    <label for=\"elem_size"+id+"\">Кількість<\/label>";
    buffer += "                <\/div>";
    buffer += "            <\/td>";
    buffer += "            <td> <div class=\"input-field col s12\">";
    buffer += "                <input id=\"country_vendor"+id+"\" type=\"text\" class=\"validate\">";
    buffer += "                <label for=\"country_vendor"+id+"\">Країна-виробник<\/label>";
    buffer += "            <\/div><\/td>";
    buffer += "            <td> <div class=\"input-field col s12\">";
    buffer += "                <input id=\"date_vendor"+id+"\" type=\"text\" class=\"validate\">";
    buffer += "                <label for=\"date_vendor"+id+"\">Рік випуску<\/label>";
    buffer += "            <\/div><\/td>";
    buffer += "            <td> <a href=\"javascript:void(0);\" onclick=\"deleteZayavka(this)\" class=\"waves-effect col s12 waves-light red darken-3 btn\"><i class=\"material-icons white-text\">delete<\/i><\/a><\/td>";
    buffer += "        <\/tr>";

    $('#table').append(buffer);

}

function deleteZayavka(sender){
    //console.log(sender.parentNode.parentNode);

    var removedTR = sender.parentNode.parentNode;
    var table = removedTR.parentNode;

    table.removeChild(removedTR);


}
