var get_element = function (element_id){
    return document.getElementById(element_id);
};

// model

var name_array = [];

// view
var create_view_elements = function(element_type,element_id,text_content){
    var element = document.createElement(element_type);
    element.setAttribute('id',element_id);
    element.textContent = text_content;
    document.body.appendChild(element);
};

// controller

var create_element_with_class = function(element,class_name,content){
    
    var p_tag = document.createElement(element);
    p_tag.setAttribute('class',class_name);
    p_tag.textContent = content;
    
    document.body.appendChild(p_tag);
    
};

var create_element_from_input_value = function(){
    var last_item_in_name_array = name_array[name_array.length-1];
    var name_in_array_capitalized = last_item_in_name_array.charAt(0).toUpperCase() + name_array[name_array.length-1].slice(1).toLowerCase();
    create_element_with_class('p','first_name',name_in_array_capitalized);
    
    
    console.log(name_array);
};

var lowercase_items_in_array = function(){
    for(var i=0; i<name_array.length; i++){
        name_array[i].charAt(0).toLowerCase() + name_array[i].slice(1).toLowerCase();
    };
};

var display_names = function (){
    get_element('input_box').addEventListener('keydown',function(event){
        if(event.keyCode === 13){
            name_array.push(this.value);
            
            create_element_from_input_value();
            this.value = null;
            //lowercase_items_in_array();
            
        };
    });
};



document.addEventListener('DOMContentLoaded', function (event) {

    create_view_elements('h1','caption_1','Type in name then press ENTER');
    create_view_elements('input','input_box','');
    create_view_elements('h1','caption_2','CLICK on the name to delete');
    
    var pre_populate_names_array = [
        'Veronica',
        'Alonzo',
        'Juston'
    ]
    
    var pre_populate_names = function(){
        for(var i=0; i<3; i++){
            create_view_elements('p','pre_populate_name_'+i,'');
            var pre_populate_names = get_element('pre_populate_name_'+i);
            pre_populate_names.setAttribute('data-name',pre_populate_names_array[i]);
            pre_populate_names.textContent = pre_populate_names.dataset.name;
            console.log(pre_populate_names_array);
        };
    };
    
    pre_populate_names();

    get_element('input_box').setAttribute('placeholder','First Name');

    display_names();
    
    document.body.addEventListener("click", function(event) {
        
        if (event.target.nodeName == "P"){
            
            event.target.remove();
            
            for(var i=0; i<name_array.length; i++){
                //console.log(event.target.innerHTML);
                event.target.innerHTML.toLowerCase();
                event.target.innerHTML.toString();
                //console.log(event.target.innerHTML.toLowerCase());
                if(event.target.innerHTML.toString() === name_array[i]){
                    name_array.splice(i,1);
                    console.log(name_array);
                };
            };
        }
    });
});

