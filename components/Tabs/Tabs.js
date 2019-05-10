class TabLink {
  constructor(e) {
    // Assign this.e to the passed in DOM e
    this.e = e;
    // Get the custom data attribute on the Link
    this.data = this.e.dataset.tab;
    // Using the custom data attribute get the associated Item e
    this.item = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    // Using the Item e, create a new instance of the TabItem class
    this.tabitem = new TabItem(this.item);
    // Add a click event listener on this instance, calling the select method on click
    this.e.addEventListener('click', () => {
      this.select();
    });
  }

  select() {
    // Get all of the es with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    links.forEach(link => {
      link.classList.remove('tabs-link-selected');
    });
    // Add a class named "tabs-link-selected" to this link
    this.e.classList.add('tabs-link-selected');
    // Call the select method on the item associated with this link
    this.tabitem.select();
  }
}

class TabItem {
  constructor(e) {
    // Assign this.e to the passed in e
    this.e = e;
  }

  select() {
    // Select all ".tabs-item" es from the DOM
    const items = document.querySelectorAll('.tabs-item');
    // Remove the class "tabs-item-selected" from each e
    items.forEach(item => {
      item.classList.remove('tabs-item-selected');
    });
    // Add a class named "tabs-item-selected" to this e
    this.e.classList.add('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll('.tabs-link');
links.forEach(link => new TabLink(link));
