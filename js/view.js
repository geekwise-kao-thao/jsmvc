var name_view = function(){
    var name_container = document.querySelectorAll('[data-name]')[0];
    return name_container;
};

var create_containers = function(container_element,container_id,container_parent){
    var container = document.createElement(container_element);
    container.setAttribute('id',container_id);
    container_parent.appendChild(container);
};

var create_multi_elements = function(number_of_top_row_element,element_type,element_id,element_parent){
    for(var i=0; i<number_of_top_row_element; i++){
        create_containers(element_type,element_id+i,element_parent);
    };
};

// code to create add photo element and make a feature to take a picture with the laptop camera

var create_element = function (element_name, element_attributes) {
    var element = document.createElement(element_name);
    
    if(element_attributes.hasOwnProperty('id')){
        element.setAttribute('id',element_attributes.id);
    }
    
    if(element_attributes.hasOwnProperty('class')){
        for(i in element_attributes.class){
            if(element_attributes.class[i] !== '' || null || undefined){
                element.classList.add(element_attributes.class[i]);
            }
        }
    }
    element.classList.add('offscreen');
    //document.body.appendChild(element);
    get_element('left_input_section_container_div').appendChild(element);
    
}

var get_keys = function(object){
    return Object.keys(object);
}

var get_values = function(object){
    var values = [];
    for(i in object){
        values.push(object[i]);
    }
    return values;
}


var set_value = function(element_id,element_attributes){
    
    var element = document.getElementById(element_id);
    var element_attributes_keys = Object.keys(element_attributes);
    
    var keys = get_keys(element_attributes);
    var values = get_values(element_attributes);
    
    for(var i=0;i<keys.length;i++){
        var current_key = keys[i];
        var current_value = values[i];
    
        console.log(current_key);
        console.log(current_value);
        
        if(current_key === 'textContent'){
            element.textContent = current_value;
        }else{
            element.setAttribute(current_key,current_value);
        }
    }
};  // end of code to use laptop camera 

//***adding text content to containers, visible next to plus symbol
var add_text_content = function (){
    for(var i=0; i<add_info_array.length; i++){
        get_element('add_container_'+i).textContent = add_info_array[i];
    };
};

// Creating All Contacts disply screen

    create_containers('div','contact_container',document.body);
    create_containers('div','top_row_container',get_element('contact_container'));
    
    
    create_multi_elements(3,'span','top_row_element_',get_element('top_row_container'));
    create_containers('div','search_container',get_element('contact_container'));
    create_containers('div','names_container',get_element('contact_container'));
    create_containers('div','right_column_letters_container',get_element('contact_container'));
    
    create_containers('span','search_icon',get_element('search_container'));
    get_element('search_icon').setAttribute('class','fa fa-search');
    create_containers('input','search',get_element('search_container'));
    
    get_element('search').setAttribute('placeholder','Search');
    
    get_element('top_row_element_0').textContent = 'Groups';;
    get_element('top_row_element_1').textContent = 'All Contacts';;
    var plus_button = get_element('top_row_element_2');
    plus_button.textContent = '+';

// plus_button event displaying New Contact display screen

    plus_button.addEventListener('click',function(event){
       
       get_element('new_contact_container').style.display = 'inline-block';
       if(get_element('new_contact_container').style.display === 'inline-block'){
           get_element('contact_container').style.display = 'none';
       };
    });



