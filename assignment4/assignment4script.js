
Person = {};

Person = function(firstname, lastname, age)
{
	this.FirstName = firstname;
	this.LastName = lastname;
	this.Age = age;
}

Person.prototype.Setfirstname = function(name)
{
	this.FirstName = name;
}
Person.prototype.Setlastname = function(name)
{
	this.LastName = name;
}
Person.prototype.Setage = function(age)
{
	this.Age = age;
}
Person.prototype.Getfullname = function()
{
	return this.FirstName + " " + this.LastName;
}

Me = new Person("Sean", "Sutila", 22);
Becky = new Person("Becky", "Sutila", 23);
Steph = new Person("Steph", "Sutila", 25);
Mom = new Person("Ann", "Sutila", 53);
Dad = new Person("Rick", "Sutila", 54);

document.body.innerHTML = Me.Getfullname() + " age " + Me.Age;
document.body.innerHTML += "<br>" + Becky.Getfullname() + " age " + Becky.Age;
document.body.innerHTML += "<br>" + Steph.Getfullname() + " age " + Steph.Age;
document.body.innerHTML += "<br>" + Mom.Getfullname() + " age " + Mom.Age;
document.body.innerHTML += "<br>" + Dad.Getfullname() + " age " + Dad.Age;