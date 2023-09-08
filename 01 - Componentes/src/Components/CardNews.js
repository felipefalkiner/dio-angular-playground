class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build())
        shadow.appendChild(this.sytles())
        
    }

    build(){
        const componentRoot = document.createElement("div")
        componentRoot.setAttribute("class", "card")

        const cardLeft = document.createElement("div")
        cardLeft.setAttribute("class", "card_left")
        const cardRight = document.createElement("div")
        cardRight.setAttribute("class", "card_right")

        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)

        // Card Left

        const author = document.createElement("span")
        author.textContent = `By: ${this.getAttribute('author') || "Anonymous"}`

        const title = document.createElement("a")
        title.href = this.getAttribute('link-url') || "#"
        title.textContent = this.getAttribute('title')

        const content = document.createElement("p")
        content.textContent = `${this.getAttribute('content')}`

        cardLeft.appendChild(author)
        cardLeft.appendChild(title)
        cardLeft.appendChild(content)

        // Card Right

        const newsImage = document.createElement("img")
        newsImage.src = this.getAttribute('newsImage') || "assets/default.jpg"
        newsImage.alt = this.getAttribute('altText')
        cardRight.appendChild(newsImage)

        return componentRoot
    }

    sytles(){
        const style = document.createElement("style")

        style.textContent = `
            .card {
                width: 80%;
                -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-bottom:30px;
            }
            
            .card_left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            
            }
            
            .card_left a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
                
            }
            
            .card_left p {
                color: gray;
            }
            
            .card_left span {
                font-weight: bold;
            }
            
            .card_right {
            
            }
        `

        return style

    }
}

customElements.define('card-news', CardNews)