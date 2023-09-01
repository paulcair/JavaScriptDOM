var addForm = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
addForm.addEventListener('submit',addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Search event
filter.addEventListener('keyup', filterItems);

// add Item
function addItem(e){
    e.preventDefault();
    
    // Get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create the delete button element
    var deleteBtn = document.createElement('button');
    // Add classes to deleteBtn
    deleteBtn.className = 'btn btn-danger btn-sm delete';
    // Add text node for x of the button
    deleteBtn.appendChild(document.createTextNode('X'));
    // Add text node to the li parent
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
}

// Remove item function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter items function
function filterItems(e){
    // convert text to lower case
    var text = e.target.value.toLowerCase();
    // Get li's
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.classList.remove('d-none');
            item.classList.add('d-block');
        } 
        else {
            item.classList.remove('d-block');
            item.classList.add('d-none');
        }
    });
}