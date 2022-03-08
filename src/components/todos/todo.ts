class Todo {
  text: string;
  id: string;

  constructor(itemText: string) {
    this.text = itemText;
    this.id = new Date().toISOString()
  }
}


export default Todo