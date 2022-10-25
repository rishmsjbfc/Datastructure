class Node
{
    constructor(data,next=null)
    {
        this.data = data;
        this.next = null;
    }
}
class SinglyLinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(data)
    {
        if(this.length===0)
        {
            this.head = new Node(data);
            this.tail = this.head;
        }
        else
        {
            let newNode = new Node(data);
            this.tail.next = newNode;
            this.tail = newNode; 
        }
        this.length++;
        return this;
    }
    pop()
    {
        if(this.head === null)
            return undefined;
        let deletedNode;
        if(this.length===1)
        {
            this.head = null;
            deletedNode = this.tail.data;    
            this.tail = null;
        }
        else
        {
            let current = this.head;
            while(current.next !== this.tail)
                current = current.next;
            current.next = null;
            deletedNode = this.tail.data;
            this.tail =  current;
        }
        this.length--;
        return deletedNode;
    }
    shift()
    {
        if(this.head === null)
            return undefined;
        let current = this.head;
        let deletedNode = current;
        current = current.next;
        deletedNode.next = null;
        this.head = current;
        if(this.length===1)
            this.tail = this.head;
        this.length--;
        return deletedNode.data;
    }
    unshift(data)
    {
        let newNode = new Node(data);
        if(!this.head)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(position)
    {
        if(position<0 || position>this.length)
            return null;
        let count = 0;
        let current = this.head;
        while(count<position)
        {
            count++;
            current = current.next;
        }
        return current;
    }
    set(positon,value)
    {
        let current = this.get(positon);
        if(!current)
            return false;
        current.data = value;
        return true;
    }
    insert(position,value)
    {
        if(position<0||position>this.length)
            return false;
        if(position===this.length)
            return !!this.push(value);
        else if(position===0)
            return !!this.unshift(value);
        else
        {
            let current = this.get(position-1);//We need to find the item right before this index
            let newNode = new Node(value);
            newNode.next = current.next;
            current.next = newNode;
            this.length++;
            return true;
        }
    }
    remove(index)
    {
        if(index>this.length||index<0)
            return undefined;
        if(index===0)
            return this.shift().data;
        else if(index===this.length)
            return this.pop().data;
        else
        {
            let prevNode = this.get(index-1);
            let deletedNode = prevNode.next;
            prevNode.next = deletedNode.next;
            deletedNode.next=null;
            this.length--;
            return deletedNode.data;
        }
    }
    reverse()
    {
        if(this.length===0)
            return false;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = null;
        let prev = null;
        while(node!==null)
        {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return true;
    }
    traverse()
    {
        if(this.length===0)
            console.log("The list is empty");
        let current = this.head;
        while(current!==null)
        {
            console.log(current.data);
            current = current.next;
        }
    }
}
let sll = new SinglyLinkedList();
sll.push(3);
sll.push(4);
sll.push(5);
sll.unshift(2);
sll.unshift(1);
sll.set(4,10);
sll.insert(2,150);
sll.insert(0,300);
sll.insert(sll.length,900);
// sll.traverse();
// console.log("----------------------------------------------------------")
sll.remove(2);
sll.remove(sll.length);
sll.remove(0);
sll.traverse();
sll.reverse();
console.log("----------------")
sll.traverse();
// console.log(sll.pop());
// console.log(sll.pop());
// console.log(sll.pop());
// console.log(sll.pop());
// console.log(sll.shift());
// console.log(sll.shift());
// console.log(sll.tail);
// console.log(sll.shift());
// console.log(sll.tail);
// console.log(sll.shift());

