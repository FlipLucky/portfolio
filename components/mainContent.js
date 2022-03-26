const mainContent = () => {
  const mainContainer = document.createElement('main');
  {
    const row = document.createElement('div')
    Object.assign(row,{
      className:  "row p-3"
    })
    mainContainer.appendChild(row);
    {
      const col = document.createElement('div');
      Object.assign(col,{
        className: "col-lg-6 text-center"
      })
      row.appendChild(col);
      {
        const titleIntro = document.createElement('p');
        Object.assign(titleIntro,{
          className: "display-5",
          textContent: "Webdesign to fit"
        })
        col.appendChild(titleIntro);

        const textIntro = document.createElement('p');
        Object.assign(textIntro, {
          className: "lead",
          textContent: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Aut iure necessitatibus beatae provident quia? 
          Ut ipsa eum nostrum esse consequuntur odio veniam necessitatibus 
          minima iure doloribus expedita optio quo accusantium officia 
          recusandae corporis maiores voluptates temporibus, eveniet similique! 
          Voluptatem ducimus, distinctio commodi iste neque recusandae ratione 
          eligendi amet facere corporis.`

        })
        col.appendChild(textIntro);
      }
    }
    {
      const col = document.createElement('div');
      Object.assign(col,{
        className: "col-lg-6"
      })
      row.appendChild(col);

      const imgIntro = document.createElement('img');
      Object.assign(imgIntro, {
        className: "img-fluid",
        src: "https://jooinn.com/images/web-design-and-development.jpg",
        alt: "stock-design-img"
      });
      col.appendChild(imgIntro);

    }
  }
  {
    const row = document.createElement('div');
    Object.assign(row, {
      className: "row p-3"
    })
    mainContainer.appendChild(row);
    {
      const card1 = createCard("1","https://dummyimage.com/350x200/4a464a/ffea8c.png&text=Project+1")
      row.appendChild(card1);
      const card2 = createCard("2","https://dummyimage.com/350x200/4a464a/ffea8c.png&text=Project+2")
      row.appendChild(card2);
      const card3 = createCard("3","https://dummyimage.com/350x200/4a464a/ffea8c.png&text=Project+3")
      row.appendChild(card3);
    }
  }
  return mainContainer;
}

export default mainContent

const createCard = (projectName,projectPreview) => {
  const col = document.createElement('div');
  Object.assign(col,{
    className: "col-lg-4"
  })
  {
    const card = document.createElement('div');
    Object.assign(card,{
      className: "card"
    })
    col.appendChild(card);
    {
      const cardImg = document.createElement('img')     ;
      Object.assign(cardImg,{
        className : "card-img-top",
        src:projectPreview,
        alt: `${projectName}-preview`
      })
      card.appendChild(cardImg);
      
      const cardBody = document.createElement('div');
      Object.assign(cardBody, {
        className: "card-body"
      })
      card.appendChild(cardBody);
      {
        const cardBodyText = document.createElement('p');
        Object.assign(cardBodyText,{
          className: "card-text text-center",
          textContent: `showing off project ${projectName}`
        })
        cardBody.appendChild(cardBodyText)
      }
    }
    return col;
  }
}