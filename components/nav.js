const navbar = () => {
  //creating nav + container
  const nav = document.createElement("nav");
  nav.className = "navbar navbar-expand-lg navbar-dark bg-dark bg-dark rounded-3 rounded-pill-lg my-2";

  const container = document.createElement("div");
  container.className = "container-fluid";
  nav.appendChild(container);

//navbar brand + toggleButton
  const navbarBrand = document.createElement("a");
  Object.assign(navbarBrand,{
    className :"navbar-brand",
    href :"#",
    textContent :"Bas Noblesse" 
  })
  container.appendChild(navbarBrand);

  const toggleButton = document.createElement('button');
  Object.assign(toggleButton,{
    className : "navbar-toggler",
    type : "button"
  })
  toggleButton.dataset.bsToggle = "collapse";
  toggleButton.dataset.bsTarget = "#navbarSupportedContent"
  const ariaArray = {
    'aria-controls' : "#navbarSupportedContent",
    'aria-expanded' : "false",
    'aria-label' : "Toggle navigation"
  }
  for(const aria in ariaArray){
    toggleButton.setAttribute(`${aria}`,`${ariaArray[aria]}`)
  }
  container.appendChild(toggleButton);

  const toggleButtonIcon = document.createElement('span');
  toggleButtonIcon.className = "navbar-toggler-icon";
  toggleButton.appendChild(toggleButtonIcon);

  //div navLinks toggle
  const divNavToggle = document.createElement('nav');
  Object.assign(divNavToggle,{
    className:"collapse navbar-collapse",
    id:"navbarSupportedContent"
  })
  const navUl = document.createElement('ul');
  navUl.className = "navbar-nav me-auto mb-2 mb-lg-0";
  divNavToggle.appendChild(navUl);
  container.appendChild(divNavToggle)

  const menuItemsArray = ['home', 'gallery', 'about me', 'contact'];
  menuItemsArray.map((menuLink) => {
    const li = document.createElement('li');
    li.className = "nav-item";
    
    const a = document.createElement('a');
    Object.assign(a,{
      className: "nav-link",
      href: `#${menuLink}`,
      textContent: menuLink
    })
    li.appendChild(a);
    navUl.appendChild(li);
  })

  const searchBar = document.createElement('form');
  searchBar.className = "d-flex";

  const inputSearchBar = document.createElement('input');
  Object.assign(inputSearchBar,{
    className: "form-control me-2",
    type: "search",
    placeholder:"Search"
  })
  searchBar.appendChild(inputSearchBar);

  const buttonSearchBar = document.createElement('button');
  Object.assign(buttonSearchBar,{
    className: "btn btn-outline-success",
    type: "submit",
    textContent: "search"
  });
  searchBar.appendChild(buttonSearchBar);
  // in case of searchbar, uncomment line below
  //divNavToggle.appendChild(searchBar);
return nav

};

export default navbar;
