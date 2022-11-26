// var form=document.getElementById('addForm');
// var itemList=document.getElementById('items');

// form.addEventListener('submit',addItem);

// function addItem(e){
//     e.preventDefault()
//     console.log(newItem);

//      var newItem=document.getElementById('item').value;
     
//      var li=document.createElement('li');
//      li.className='list-group-item';
//      li.appendChild(document.createTextNode(newItem));
//      itemList.appendChild(li)
// }


var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');
var count=0;

form.addEventListener('submit',addform);
itemList.addEventListener('click',removeItem);

filter.addEventListener('keyup',filterItem);

function addform(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li)

    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    count++
    localStorage.setItem('Item'+count,newItem)
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
            var li=e.target.parentElement;
        }
    }
}


function filterItem(e){
    // convert text to lower case
    var text=e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) !=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    })
    }