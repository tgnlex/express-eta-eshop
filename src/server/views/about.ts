import layout from './layout/index.ts';
import { text } from './components/basic.ts';


const about = ()  => layout(`
  <main id="about" class="page">
    <h1 class="heading">About</h1>
    ${text("This is where I would put my bio.")}
    ${text("But I am too poor to afford one.")}
  </main>
`);

export default about;
