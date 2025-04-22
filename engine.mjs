import md from 'markdown-it';
import container from 'markdown-it-container';
import attrs from 'markdown-it-attrs';
import ins from 'markdown-it-ins';
import mark from 'markdown-it-mark'
import prism from 'markdown-it-prism';
import textualUml from 'markdown-it-textual-uml';

export default ({ marp }) => marp
  .use(textualUml)
  .use(prism, {
    plugins: ["line-highlight","line-numbers"]
  })
  .use(mark)
  .use(ins)
  .use(attrs)
  .use(container, '_')
  .use(container, 'c');
