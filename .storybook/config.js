import { addParameters, configure } from '@storybook/html'

addParameters({
  options: {
    panelPosition: 'right'
  }
})

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/)
function loadStories() {
  req.keys().sort().forEach(filename => req(filename))
}

configure(loadStories, module)
