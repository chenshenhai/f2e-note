

function LinkNode(x){
  this.val = x;
  this.next = null;
}

function createLink(arr = []) {
  const link = new LinkNode(arr[0]);
  let head = link;
  for(let i = 1; i < arr.length; i++) {
    head.next = new LinkNode(arr[i]);
    head = head.next;
  }
  return link;
}

const link1 = createLink(['a', 'b', 'c', 'd', 'e'])
link1.next.next.next.next = link1.next.next;

const link2 = createLink(['a', 'b', 'c', 'd', 'e']);

 
function isLinkCycle(head) {
  const data = new Set();
  while (head !== null) {
    if (data.has(head)) {
      return true;
    }
    data.add(head);
    head = head.next;
  }
  return false;
}

console.log(isLinkCycle(link1)) // true
console.log(isLinkCycle(link2)) // false
