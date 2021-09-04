function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
};

// var findDuplicateSubtrees = function(root) {

//     let map = new Map();
//     let result = [];

//     let stack = [];
//     let currentSubTree;
//     stack.push(root);

//     while (stack.length !== 0) {
//         let currentRoot = stack.pop();
//         currentSubTree = '';
        
//         postOrderTraversal(currentRoot);

//         map.set(currentSubTree, (map.get(currentSubTree) || 0) + 1);

//         if (map.get(currentSubTree) === 2) {
//             result.push(currentRoot);
//         }
        
//         if (currentRoot.left) {
//             stack.push(currentRoot.left);
//         }

//         if (currentRoot.right) {
//             stack.push(currentRoot.right);
//         }
//     }
	

// 	function postOrderTraversal(root) {
// 		if (!root) {
// 			currentSubTree += '#';
//             return;
// 		}

// 		postOrderTraversal(root.left);
//         postOrderTraversal(root.right);
//         currentSubTree += `${root.val}>`;
// 	}

//     return result;
// };

var findDuplicateSubtrees = function(root) {
    const map = new Map(), res = []
    dfs(root, map, res)
    return res
  };
  
  function dfs(root, map, res){
    if(!root) return '#'
    const subtree = `${root.val}.${dfs(root.left,map,res)}.${dfs(root.right, map,res)}`
    map.set(subtree,(map.get(subtree)||0) + 1)
    if(map.get(subtree) === 2){
      res.push(root)
    }
    return subtree
  }

let treeRoot = new TreeNode(0);
treeRoot.left = new TreeNode(0);
treeRoot.right = new TreeNode(0);
treeRoot.left.left = new TreeNode(0);
treeRoot.right.right = new TreeNode(0);
treeRoot.right.right.right = new TreeNode(0);

console.log(findDuplicateSubtrees(treeRoot));
