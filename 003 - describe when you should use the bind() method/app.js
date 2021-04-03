var myModule = {
	name: "Myat Ko Ko",
	getName: () => {
		return console.log(this.name);
	}
}
myModule.getName();

var someName = myModule.getName.bind({name: "Poe Ei"});
someName();