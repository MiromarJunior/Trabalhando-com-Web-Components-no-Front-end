class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());



    }

    build() {
        const componetRoot = document.createElement("div");
        componetRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");


        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");


        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);



        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newImage = document.createElement("img");
        newImage.src = (this.getAttribute("photo") || "assets/default.png");
        newImage.alt = "Imagem da Noticia";

        cardRight.appendChild(newImage);


        componetRoot.appendChild(cardLeft);
        componetRoot.appendChild(cardRight);


        return componetRoot;
    }

    styles() {

        const style = document.createElement("style");
        style.textContent = `
        
        
        .card{
            margin-top : 10px;
            width: 720px;
            border: 1px solid black;
            display: flex;
            flex-direction: row;
            -webkit-box-shadow: 10px 3px 12px 8px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 3px 12px 8px rgba(0,0,0,0.75);
        box-shadow: 10px 3px 12px 8px rgba(0,0,0,0.75);
        justify-content: space-between;

        }

      

        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        .card__left h1{
            margin-top: 15px;
            font-size: 25px;
        }
        .card__left p{
            color: gray;
        }
        .card__left span{
            font-weight: bold;
        }
        .card__left a{
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        
        }
        `;
        return style;
    }
}
customElements.define("card-news", CardNews);