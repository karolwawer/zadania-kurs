  function elementFibonacci(n) { 
    let fibonacci;
    let fibonacci1;
    let fibonacci2;
    
    if (n <= 2) {
      
        return 1;
        
    } else {
      
        fibonacci1 = 1;
        fibonacci2 = 1;
        
    for (i = 3; i <= n; i++) { 
        
        fibonacci = fibonacci1 + fibonacci2;
        fibonacci1 = fibonacci2;
        fibonacci2 = fibonacci;
        
    } 
    
      return fibonacci;
      
    }}

console.log(elementFibonacci(7));