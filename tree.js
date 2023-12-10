/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let total = this.root.val;

    function totalSum(node) {
      // go over all the children for a Node
      for (let children of node.children) {
        total += children.val;
        // go over childrens' children
        if (children.children.length > 0) totalSum(children);
      }
    }

    totalSum(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = this.root.val % 2 === 0 ? 1 : 0;

    function totalEvenCount(node) {
      // go over all the children for a Node
      for (let children of node.children) {
        if (children.val % 2 === 0) count++;
        // go over childrens' children
        if (children.children.length > 0) totalEvenCount(children);
      }
    }

    totalEvenCount(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;

    function totalCount(node) {
      // go over all the children for a Node
      for (let children of node.children) {
        if (children.val > lowerBound) count++;
        if (children.children.length > 0) totalCount(children);
      }
    }

    totalCount(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
