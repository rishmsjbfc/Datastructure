class Node
{
    constructor(data)
    {
        this.value = data;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(data)
    {
        let newNode = new Node(data);
        if(this.head===null)
        {

            this.head = newNode;
            this.tail = this.head;
        }
        else
        {
            
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode; 
        }
        this.length++;
        return this;
    }
    pop()
    {
        if(!this.head)
            return undefined;
        let deletedNode = this.tail;
        if(this.length===1)
        {
            this.head=null;
            this.tail=null;
        }
        else
        {
            this.tail = deletedNode.prev;
            deletedNode.prev = null;
            this.tail.next = null;
        }
        this.length--;
        return deletedNode;
    }
    shift()
    {
        if(!this.head)
            return undefined;
        let deletedNode = this.head;
        if(this.length===1)
        {
            this.head = null;
            this.tail = null;
        }
        else
        {
            this.head = deletedNode.next;
            this.head.prev = null;
            deletedNode.next = null;
        }
        this.length--;
        return deletedNode;
    }
    unshift(data)
    {
        let newNode = new Node(data);
        if(this.length===0)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index)
    {
        if(index>this.length||index<0)
            return null;
        let count = 0;
        let current = this.head;
        while(count<index)
        {
            count++;
            current = current.next;
        }
        return current;
    }
    set(index,value)
    {
        let node = this.get(index);
        if(!node)
            return false;
        node.value = value;
        return true;
    }
    insert(index,value)
    {
        if(index<0||index>this.length)
            return false;
        if(index===0)
            return !!this.unshift(value);
        else if(index===this.length)
            return !!this.push(value);
        else
        {
            let prevNode = this.get(index-1);
            let newNode = new Node(value);
            newNode.next = prevNode.next;
            newNode.prev = prevNode;
            prevNode.next.prev = newNode;
            prevNode.next = newNode;
            this.length++;
            return true;
        }
    }
    remove(index)
    {
        if(index<0||index>this.length)
            return undefined;
        if(index===0)
            return !!this.shift();
        else if(index===this.length)
            return !!this.pop();
        else
        {
            let prevNode = this.get(index-1);
            let deletedNode = prevNode.next;
            prevNode.next = deletedNode.next;
            deletedNode.next.prev = prevNode;
            deletedNode.next = null;
            deletedNode.prev = null;
            this.length--;
            return true;
        }
    }
    traverse()
    {
        if(this.length===0)
        {
            console.log("This list is empty");
            return;
        }
        let current = this.head;
        while(current)
        {
            console.log(current.value);
            current = current.next;
        }
    }
    traverseReverse()
    {
        if(this.length===0)
        {
            console.log("This list is empty");
            return;
        }
        let current = this.tail;
        while(current)
        {
            console.log(current.value);
            current = current.prev;
        }
    }
}
let dll = new DoubleLinkedList();
dll.push(1);
dll.push(2);
dll.push(3);
dll.unshift(6);
dll.unshift(5);
dll.unshift(4);
dll.traverse();
console.log("--------------------------------")
dll.insert(0,-1);
dll.insert(dll.length,100);
dll.insert(2,50);
dll.traverseReverse();
console.log(dll.pop());
console.log(dll.shift());
console.log(dll.remove(2));
console.log("--------------------------------")
dll.traverse();
dll.reverse();
console.log("--------------------------------")
dll.traverse()