
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
                                 
  ____ ______________  __________
 / __ `/ ___/ ___/ _ \/ ___/ ___/
/ /_/ / /__/ /__/  __(__  |__  ) 
\__,_/\___/\___/\___/____/____/  
                                  
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
