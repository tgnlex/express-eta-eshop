import layout from '../layout/index.ts';

const text = (content) => `<p class="text">${content}</p>`

const about = ()  => layout(`
  <main id="home" class="page">
    <h1>About</h1>
    ${text("This is where I would put my bio.")}
    ${text("But I am too poor to afford one.")}
  </main>
`);

export default about;
