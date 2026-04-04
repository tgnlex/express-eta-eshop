const navbar = () => `
  <nav id="navbar">
    <a class="link" href="/">Home</a>
    <a class="link" href="/store">Store</a>
    <a class="link" href="/about">About</a>
  </nav>
`;

const layout = (children)  => `
  <html>
    <head>
      <title>Eshop</title>
      <link rel="stylesheet" href="style/app.css" />
    </head>
    <body>
      <div id="layout">
         <header>
           <img id="banner" src="assets/banner.png" />
         </header>
         ${navbar()}
         ${children}
         <footer id="layout--footer"></footer>
       </div>
    </body>
  </html>
`

export default layout;
