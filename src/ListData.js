const List = (() => {
  var index = 0;
  return {
    get () {
      let newList = [];
      for (let i = index, j = index; i < j + 30; i++, index++) {
        newList.push({ id: i, text: 'Ipsum Lorem - ' + i})
      }
      return newList;
    }
  }
})();

export default List.get;