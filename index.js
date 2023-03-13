const btn = document.getElementById("get-color")
const colorPallete = document.getElementById("color-pallete")
const selectedColor = document.getElementById("selected-color")
const selectedScheme = document.getElementById("scheme")


  renderColor()
     
    btn.addEventListener("submit", function(event){
       event.preventDefault();
       colorPallete.innerHTML = ''
       renderColor()
        })
        
        
        
    function renderColor(){
        fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor.value.replace('#', '')}&mode=${selectedScheme.value}`)
           .then(res => res.json())
           .then(data => {
            data.colors.forEach((color, index) => {
                let html = ''
                 html += `
            <div class="color" id="color-one" style="background: ${color.hex.value}"><h3>${color.hex.value}</h3></div>`
        
                colorPallete.innerHTML += html
        })
    
    })

        }
        
        


