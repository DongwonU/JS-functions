

//select the DOM contains all the single tags
const tranContent = document.querySelector('ul.sideBar-classifications');
//create array from children elements
const children = Array.from(tranContent.children); 

//loop over all the single tags
children.forEach(child => {
  innerTran(child.id, "currTag", "currContent"); //Call function here
});

// The transfer function
function innerTran(selectedTagID, activeTagID, corresActTagID){
  //get the clicked tags and add click event
  const selectedDOM = document.getElementById(`${selectedTagID}`);
  selectedDOM.addEventListener('click', changeContent);

  //define call back function for click event
  function changeContent(c){
    //get sibling elements and clear "activeTagID" first
    const id = this.id;
    const children = Array.from(c.target.parentElement.children);
    
    children.forEach(child => {
      if(child.classList.contains(activeTagID)){
        child.classList.remove(activeTagID);
      }
    });
    //add "activeTagID" to clicked tag
    c.target.classList.add(activeTagID);
    
    //get corresponding content and its sibling elements
    //check and clear "corresActTagID"
    const changedId = `corres-${id}`
    const changedContent = document.getElementById(`${changedId}`);
    const changedChildren = Array.from(changedContent.parentElement.children);
  
    changedChildren.forEach(child => {
      if(child.classList.contains(corresActTagID)){
        child.classList.remove(corresActTagID);
      }
    });
    // add "corresActTagID" to corresponding content
    changedContent.classList.add(corresActTagID);
  }
}


