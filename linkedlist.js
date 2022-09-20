function LinkedList(){
    let nodes = [];

    function append(value){
        let nnode = node();
        nnode.value = value;
        nnode.nextNode = null;
        nodes.push(nnode);
        if(nodes.length > 1)
        nodes[nodes.length-2].nextNode = nnode;
    }
    function prepend(value){
        let nnode = node();
        nnode.value = value;
        nodes.unshift(value);
        nnode.nextNode = nodes[1];
    }
    function size(){
        return nodes.length;
    }
    function head(){
        return nodes[0];
    }
    function tail(){
        return nodes[nodes.length - 1];
    }
    function at(index){
        return nodes[index];
    }
    function pop(){
        nodes.pop();
        nodes[nodes.length-1].nextNode = null;
    }
    function contains(value){
        for(let index = 0; index < nodes.length; index++)
        {
            if(nodes[index].value == value)
            return true;
        }
        return false;
    }
    function find(value){
        for(let index = 0; index < nodes.length; index++)
        {
            if(nodes[index].value == value)
            return index;
        }
        return null;
    }
    function toString(){
        let string = '';
        let temp = head();
        while(temp != null){
            string += '(' + temp.value+')' + ' -> ';
            temp = temp.nextNode;
        }
        string += '(null)';
        return string;
    }
    function insertAt(value, index){
        let nnode = node();
        nnode.value = value;
        let temp = nodes[index];
        nnode.nextNode = temp;
        nodes[index-1].nextNode = nnode;
        let left = nodes.slice(0, index);
        let right = nodes.slice(index, nodes.length);
        left.push(nnode);
        nodes = left.concat(right);
    }
    function removeAt(index){
        let left = nodes.slice(0, index+1);
        let right = nodes.slice(index+1, nodes.length);
        left.pop();
        left[left.length-1].nextNode = right[0];
        nodes = left.concat(right);
    }
    return {insertAt,removeAt,toString,find,contains,pop,at,tail,head,size,prepend, append};
}

function node(){
    let value = null;
    let nextNode = null;
    return {value , nextNode};
}

let list = LinkedList();
list.append('test0');
list.append('test1');
list.append('test2');
list.append('test3');
list.append('test4');
list.append('test6');
list.append('test7');
list.insertAt('test5', 5);
console.log(list.toString());
list.removeAt(2);

console.log(list.toString());
