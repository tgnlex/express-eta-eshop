import path from 'path';
const ROOT = path.resolve('../../../');

const PATH = {
  STATIC: path.join(ROOT, 'static'),
  SOURCE: path.join(ROOT, 'src'),
  BUILD: path.join(ROOT, "build"),
  VIEWS: path.join(ROOT, 'views'),
  FILES: path.join(ROOT, 'files')
}

  const NEWLINE = '\n';

export {NEWLINE, PATH};
