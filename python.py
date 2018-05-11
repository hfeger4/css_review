#tree to string python

class Solution:
    def tree2str(self, t):
        """
        :type t: TreeNode
        :rtype: str
        """
        if not t:
            return ""
        s = str(t.val)

        if not t.left and t.right:
            s += "()(" + self.tree2str(t.right) + ")"
        else:
            if t.left:
                s += "(" + self.tree2str(t.left) + ")"
            if t.right:
                s += "(" + self.tree2str(t.right) + ")"

        return s
