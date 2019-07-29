import { storiesOf } from '@storybook/html'
import { AppLayoutContent, AppLayout } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'

window.customElements.define('app-layout-content', AppLayoutContent)
window.customElements.define('x-app-layout', AppLayout)

storiesOf('Components|App layout', module)
  .addDecorator(withLinks)
  .add('概要', () => `


  `)
  .add('使い方', () => `
    <h4>使い方</h4>
    ${copyCodeBlock(
      '<rs-app-layout class="app-layout">\n' +
      '   <rs-drawer class="drawer">\n' +
      '       ...\n' +
      '   </rs-drawer>\n' +
      '   <rs-app-layout-content class="contents">\n' +
      '       <rs-app-bar class="topbar">\n' +
      '           ...\n' +
      '       </rs-app-bar>\n' +
      '       ...\n' +
      '   </rs-app-layout-content>\n' +
      '</rs-app-layout>\n',
      { lang: 'html' }
    )}
    ${copyCodeBlock(
      '.app-layout {\n' +
      '   > .drawer {\n' +
      '      @include rs-drawer-type(dismissible);\n' +
      '   }\n' +
      '}',
      { lang: 'scss' }
    )}
    <h4>HTML要素</h4>
    <p>custom elementsを<code>rs</code>のプレフィックスをつけて定義した前提です。<br>
      下記HTML要素を使うことで、custom elementsが表示されます。
    </p>
    <table>
    <tr>
      <th>要素名</th>
      <th>説明</th>
      <th>許可されている子要素</th>
      <th>備考</th>
    </tr>
    <tr>
      <td>rs-app-layout</td>
      <td>画面全体のレイアウトを整えます</td>
      <td>
        <ul>
          <li><code>rs-drawer</code></li>
          <li><code>rs-app-layout-content</code></li>
        </ul>
      </td>
      <td>DrawerとApp barを一緒に使う際は必須です<br>
        DrawerとApp barを横並びにします</td>
    </tr>
    <tr>
      <td>rs-app-layout-content</td>
      <td>アプリのコンテンツ部分を示します</td>
      <td>
        <ul>
          <li><code>rs-app-bar</code></li>
          <li>テキストなど全て可</li>
        </ul>
      </td>
      <td><code>rs-app-bar</code>はこの中に入ります</tr>
    </table>
    <h4>HTML属性</h4>
    <p>なし</p>
  `)