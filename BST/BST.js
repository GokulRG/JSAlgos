class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(value) {
        this.queue.push(value);
    }

    dequeue() {
        if (this.queue.length > 0) {
            return this.queue.shift();
        }
        return null;
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
            return;
        }

        let temp = this.root;

        while (temp !== null) {
            if (value < temp.value) {
                if (temp.left !== null) {
                    temp = temp.left;
                } else {
                    temp.left = new Node(value);
                    return;
                }             
            } else {
                if (temp.right !== null) {
                    temp = temp.right;
                } else {
                    temp.right = new Node(value);
                    return;
                }   
            }
        }
    }

    find(value) {
        if (this.root.value === value) {
            return this.root;
        }

        let temp = this.root;

        while (temp !== null) {
            if (value < temp.value) {
                temp = temp.left;
            } else if (value > temp.value) {
                temp = temp.right;
            } else {
                return temp;
            }
        }

        return temp;
    }

    // Breadth First Search -- Level Order Traversal
    levelOrderTraversal() {

        if (!this.root || this.root === null) {
            return [];
        } 

        let queue = new Queue();
        let visited = [];

        queue.enqueue(this.root);

        while (!queue.isEmpty()) {

            let topNode = queue.dequeue();

            visited.push(topNode.value);

            if (topNode.left !== null) {
                queue.enqueue(topNode.left);
            }

            if (topNode.right !== null) {
                queue.enqueue(topNode.right);
            }
        }

        return visited;
    }

    // Depth First Search -- PreOrder Traversal
    preOrderTraversal() {
        
        let visited = [];

        if (this.root === null) {
            return visited;
        }

        function preOrder(node) {
            if (node === null) {
                return;
            }

            visited.push(node.value);
            preOrder(node.left);
            preOrder(node.right);
        }

        preOrder(this.root);
        return visited;
    }


    // Depth First Search -- Post Order Traversal
    postOrderTraversal() {

        let visited = [];

        function postOrder(node) {
            if (node !== null) {
                if (node.left !== null) postOrder(node.left);
                if (node.right !== null) postOrder(node.right);
                visited.push(node.value);
            }
        }

        postOrder(this.root);
        return visited;
    }

    // Depth First Search -- InOrder Traversal
    inOrderTraversal() {
        let visited = [];

        function inOrder(node) {
            if (node !== null) {
                if (node.left !== null) inOrder(node.left);
                visited.push(node.value);
                if (node.right !== null) inOrder(node.right);
            }
        }

        inOrder(this.root);
        return visited;
    }
}



var tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.levelOrderTraversal())
console.log(tree.preOrderTraversal());
console.log(tree.postOrderTraversal());
console.log(tree.inOrderTraversal());
