http://wakaworkshops.surge.sh/workshop/redux-intro-search/slides/0
#######################################################
http://wakaworkshops.surge.sh/workshop/redux-intro-search/slides/29

Instructions

Go over these questions to deepen your understanding
Question 1

Why do we need to use connect? Which components need to be connected and why?
Question 2

mapStateToProps returns an object. What do the properties of this object represent?
Question 3

How does information from from the Search component to the SearchResults component? Describe every step.
Question 4

Why do we need the value attribute on the input elements of the Search component? If we removed it, would we still need mapStateToProps when connecting that component?
Question 5

We could have not used redux and instead have 1 big component that does everything. Why is this a bad idea?
Question 6

True or false: the SearchResult node in rerendered every time a user changes one of the input boxes under the Search node
Question 7

When we connect a component, do we always need to provide a mapStateToProps?
Question 8

Why is redux necessary for this project?

#######################################################
http://wakaworkshops.surge.sh/workshop/redux-intro-search/slides/30

Instructions

Exercises
Question 1

Like in previous workshops, summarize the project and then rebuild it from scratch using the summary when necessary
Question 2

Add 2 items
Question 3

Right now the minimum and maximum price input boxes don't change anything. fix this.
Question 4

Add a property called inStock that refers to a boolean to each item. Add a checkbox to the form to indicate whether or not the user only wants to only see items that are in stock. You'll need to find out what input type to use to display a checkbox. Also, you'll need to find out out more about event.target.checked by using console.log
Question 5

Add a button to clear the form
Question 6

Right now the user sees all 3 text input boxes right away. Change it so that the user only sees the query text box and add a button that, when clicked, displays the other two boxes.
