const screen = document.getElementById("screen"),
          page1 = document.getElementById("page1"),
          page2 = document.getElementById("page2")
    var memory = [], i = 0
    
    function add(wtf){
      screen.innerHTML += wtf
      let value = screen.innerHTML
      if(value.indexOf("0") == 0 && value.indexOf(".") == 1){
      
      }else if(value.indexOf("0") == 0){
        screen.innerHTML = value.substring(1)
      }else if(value.indexOf("H") == 0){
        screen.innerHTML = wtf
      }
      screen.scrollTo(i+=20, 0)
    }
    
    function showPage1(){
      page2.style.display = "none"
      page1.style.display = "block"
    }
    
    function showPage2(){
      page1.style.display = "none"
      page2.style.display = "block"
    }
    
    function factorial(n){
      let answer = 1;
      if (n == 0 || n == 1){
        return answer;
      }else{
        for(var i = n; i >= 1; i--){
        answer = answer * i;
        }
      return answer;
      }  
    }
    
    
    function sum(){
    
      try{
        let value = screen.innerHTML
        value = value.replace(/ln/g, "Math.log")
        value = value.replace(/²/g, "**2")
        value = value.replace(/³/g, "**3")
        value = value.replace(/π/g, "22/7")
        value = value.replace(/e/g, "Math.E")
        value = value.replace(/<sup>3<\/sup>√/g, "Math.cbrt")
        value = value.replace(/√/g, "Math.sqrt")
        value = value.replace(/log10/g, "Math.log10")
        value = value.replace(/sin/g, "Math.sin")
        value = value.replace(/cos/g, "Math.cos")
        value = value.replace(/tan/g, "Math.tan")
        value = value.replace(/!/g, "factorial")
        
        let total = eval(value)
        memory = memory.push(total)
        screen.innerHTML += " = " + total
      }catch(err){
        console.log(err)
        screen.innerHTML = err
      }
    }
    
    
    function allClear(){
      screen.innerHTML = 0
    }
    
    function removeLast(){
      let value = screen.innerHTML
      screen.innerHTML = value.substring(0, value.length - 1)
      if(screen.innerHTML == ""){
        screen.innerHTML = 0
      }
    }
