function TodoItem(title) {
	this.id = generateRandomID();
	this.title = title;
	this.done = false;
}