var create_name_containers = function(){
    for(i in contact_array){
        var current_name_container = document.createElement('p');
        current_name_container.textContent = contact_array[i].first_name;
        current_name_container.setAttribute('data-name',contact_array[i].first_name);
        
        var parent_name_container = name_view();
        parent_name_container.parentNode.insertBefore(current_name_container,parent_name_container.nextSibling);
    };
};