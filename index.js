// Remember to import the data and Dog class!
import Dog from './Dog.js'
import dogs from './data.js'

function getNewDog(data) {
    const nextDog = dogs.shift()
    return nextDog ? new Dog(nextDog) : {}
}

function resetPage() {
  location.reload();
}

let dogChanger = getNewDog()


   
    
    document.getElementById('reject-button').addEventListener('click', function(){
        dogChanger.hasBeenSwiped = true
        render()
        
        setTimeout(function(){
                if(dogs.length >= 0){
                    
                    dogChanger = getNewDog()
                    render()
                    
                    
                }             
        
        }, 1500)
        
        
    })
   
    
    
    document.getElementById('accept-button').addEventListener('click', function(){
         dogChanger.hasBeenLiked = true
         render()
        
        
        setTimeout(function(){
                if(dogs.length >= 0){
                    
                    dogChanger = getNewDog()
                    render()
                    
                    
                }             
        
        }, 1500)
       
    })



function render() {
    const mainElement = document.getElementById('main')
    if (dogChanger instanceof Dog) {
        mainElement.innerHTML = dogChanger.getDogHtml()
    } else {
        document.body.innerHTML = `
        <div class="flex-div">
            <div class="end-message">
                No more dogs to show!
            </div>
            <button class="reset-btn" id="reset-btn">Reset</button>
        </div>
        `
        const resetButton = document.getElementById('reset-btn')
        resetButton.addEventListener('click', resetPage)
    }
}

render()