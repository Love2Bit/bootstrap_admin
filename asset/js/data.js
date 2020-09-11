var database={
    "menu":{
        "dropdown":{
            "value":{
                "Emas 12K":["#1"],
                "Emas 13K":["#2"],
                "Emas 24K":["#3"]
            }
        },
        "link":{
            "value":{
                "home":["#1"],
                "kalung":["#2"],
                "cincin":["#3"],
                "emas":["#4"]
            }
        },
    }
};

//======================== Dropdown Menu

var menu_dropdown_temp="";

var menu_dropdown_key=Object.keys(database.menu.dropdown.value);


for(x=0;x<menu_dropdown_key.length;x++){
    
    menu_dropdown_temp+=`<a class="dropdown-item" href="`+database.menu.dropdown.value[menu_dropdown_key[x]]+`">`+menu_dropdown_key[x]+`</a>`;
}

$('#menu_dropdown').html(menu_dropdown_temp);

//======================= Link Menu 

var menu_link_temp="";

var menu_link_key=Object.keys(database.menu.link.value);


for(x=0;x<menu_link_key.length;x++){

    
    menu_link_temp+=`<li class="nav-item">
    <a class="nav-link" href="`+database.menu.link.value[menu_link_key[x]]+`">`+menu_link_key[x]+`</a>
    </li>`;
}

$('#menu_link').append(menu_link_temp);