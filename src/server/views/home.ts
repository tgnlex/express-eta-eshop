import layout from './layout/index.ts';

const welcome = () => `
  <div id="welcome">
    <h1>Welcome</h1>
  </div>
`;


const home = ()  => layout(`
  <main id="home" class="page">
    ${welcome()}
  </main>
`);

export default home;
