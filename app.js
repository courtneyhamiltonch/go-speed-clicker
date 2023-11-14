// Access the window using the element
let element = document.getElementById('centered') // THis creates an array of all .centered elements
console.log('element', element)

let clicks = 0

// let timerStarted = true

// Add event listener
element.addEventListener("click", function(){
    // if (timerStarted === false) {
        // Put code here
    // }

    // if triggered add +1 to clicks
    clicks++ // clicks = clicks + 1
    document.getElementById('count').textContent = clicks
    //console.log('count', count)
    
    // Save to local storage
    window.localStorage.setItem('cookieName', clicks)
})


// Save cookie from local storage as clicks 
clicks = window.localStorage.getItem('cookieName')

// Run timeout setTimeout(() => { 
    // execute code here once timer reached
    // Remove event listener or use a variable for a conditional statement (if/else)
// }, [30000])

