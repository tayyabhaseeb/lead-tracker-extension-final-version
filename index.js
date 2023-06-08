// Variables declared

let inputBtn = document.getElementById('input-btn')
let tabBtn = document.getElementById("tab-btn")
let deleteBtn = document.getElementById("delete-btn")
let ulEl = document.getElementById("ul-el")
let inputEl = document.getElementById("input-el")
let arr = []
var storedArr = JSON.parse(localStorage.getItem("arr"));

if(storedArr){
    arr = storedArr;
    render()
}


// SAVE INPUT BUTTON
inputBtn.addEventListener('click',function(){
 arr.push(inputEl.value) 
 localStorage.setItem("arr", JSON.stringify(arr)); 
 render()
 inputEl.value = ''
})

// Delete All function

deleteBtn.addEventListener('dblclick',function(){
    arr = []
    localStorage.clear();
    render()
})

// save tab button

tabBtn.addEventListener('click', function(){
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var currentTab = tabs[0];
      var tabUrl = currentTab.url;
      arr.push(tabUrl)
      localStorage.setItem("arr", JSON.stringify(arr));
      render()
    })
})




// for loop => render function

function render(){
    let listItems = '';
  for (let i = 0; i < arr.length; i++){
        listItems  += `
    
              <li>
                 <a href = '${arr[i]}' target = '_blank'>${arr[i]}</a>
              </li>
    
    `
    } 
    ulEl.innerHTML = listItems
  
}


