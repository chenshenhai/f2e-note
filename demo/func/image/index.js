
function main(){
  let $list = document.getElementById('list');
  let $dragElem;
  let $nextElem;
 
  function _onDragOver(e){
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    let target = e.target;
    if( target && target !== $dragElem){
      if(!target.getAttribute('draggable')) {
        e.stopPropagation();
      } else {
        let targetPos = target.getBoundingClientRect();
        let next = (e.clientY - targetPos.top) / (targetPos.bottom - targetPos.top) > .5 || (e.clientX - targetPos.left) / (targetPos.right - targetPos.left) > .5;    
        $list.insertBefore($dragElem, next && target.nextSibling || target);
      }
    }   
  }
  
  function _onDragEnd(e){
    e.preventDefault();
    $dragElem.classList.remove('item-change');
    $list.removeEventListener('dragover', _onDragOver, false);
    $list.removeEventListener('dragend', _onDragEnd, false);
  }
     
  $list.addEventListener('dragstart', function(e){     
    $dragElem = e.target; 
    $nextElem = $dragElem.nextSibling;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('Text', $dragElem.textContent);
  
    $list.addEventListener('dragover', _onDragOver, false);
    $list.addEventListener('dragend', _onDragEnd, false);
    
    $dragElem.classList.add('item-change');
  });
}
                                        
main();
