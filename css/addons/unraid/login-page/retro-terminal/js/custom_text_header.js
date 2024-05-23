 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>              __             __            _     
  ____ ______/ /__________  / /___  ____ _(_)___ 
 / __ `/ ___/ __/ ___/ __ \\/ / __ \\/ __ `/ / __ \\
/ /_/ (__  ) /_/ /  / /_/ / / /_/ / /_/ / / / / /
\\__._/____/\\__/_/   \\____/_/\\____/\\__. /_/_/ /_/ 
                                 /____/
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
