///// we are going to create a custome hook for adding new folder and file respective parent folder

const useTraverseHook = () => {
  function insertNode(tree, folderId, item, isFolder) {
    // console.log(tree.id, folderId, item, isFolder, "from hook")
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime().toString(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    } else {
      // console.log(tree, "from hook")
      let latestNode = [];
      latestNode = tree.items.map((obj) => {
        return insertNode(obj, folderId, item, isFolder);
      });
      return { ...tree, latestNode };
    }
  }

  return { insertNode };
};

export default useTraverseHook;
