// Create the Dog class here


function Dog(data) {
    Object.assign(this, data)
    
    this.reaction = function () {
        if(this.hasBeenLiked === true){
            return `<img class='picture' src='images/badge-like.png'>`
        } else if (this.hasBeenSwiped){
            return `<img class='picture' src='images/badge-nope.png'>`
        } else {
            return ''
        }
    }
    
    this.getDogHtml = function () {
        const {name, avatar, age, bio} = data

        return `
            <div class="character-card">
                <div class="dog-information">
                    <h4 class = "name"> ${name} ${age} </h4>
                    <div class = "bio"> ${bio} </div>
                     
                </div>
                
                <div class='badge-div'>
                    ${this.reaction()}
                    <img class="dog-image" src="${avatar}" />
                </div>
                
            </div>`
        
    }
}

export default Dog