 # Matching brackets
 
Write the body of the function `isValid` that returns `true` if the brackets are paired correctly and `false` if they are not.

    function isValid(str: string): boolean {
    
    }
    
    isValid('(foo)'); // true
    isValid('(f[o]{o})'); // true
    isValid('[(){}()()]'); // true
    isValid('(foo'); // false
    isValid('{f[o}o]'); // false
