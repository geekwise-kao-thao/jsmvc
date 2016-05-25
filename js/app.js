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

var display_names = function (){
    get_element('input_box').addEventListener('keydown',function(event){
        if(event.keyCode === 13){
            name_array.push(this.value);
            console.log(name_array);
                create_view_elements('p','',name_array[name_array.length-1]);
                this.value = null;
        };
    });
};

document.addEventListener('DOMContentLoaded', function (event) {

    create_view_elements('h1','caption_1','Type in name then press ENTER');
    create_view_elements('input','input_box','');
    create_view_elements('h1','caption_2','CLICK on the name to delete');

    get_element('input_box').setAttribute('placeholder','First Name');

    display_names();
    
    document.body.addEventListener("click", function(event) {
        
        if (event.target.nodeName == "P"){
            
            event.target.remove();
            
            for(var i=0; i<name_array.length; i++){
                if(name_array[i] === event.target.innerHTML.toString()){
                    name_array.splice(i,1);
                    //return name_array;
                    console.log(name_array);
                };
            };
        }
    });
});
