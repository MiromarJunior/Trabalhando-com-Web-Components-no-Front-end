class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode : "open"});

        // base componente
        const componetRoot = document.createElement("h1");
        componetRoot.textContent = this.getAttribute("titulo");

        // estilizar componente
        const style = document.createElement("style");
        style.textContent = `
        h1{
            color : red;
        }
        `;

        //enviar para a shadow
        shadow.appendChild(componetRoot);
        shadow.appendChild(style);
    }

}

customElements.define("titulo-dinamico",TituloDinamico);