import { storiesOf } from '@storybook/html'
import { TopAppBarActionItem, TopAppBarActions, TopAppBarTitle, TopAppBarNav, TopAppBar } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'

window.customElements.define('app-bar-title', TopAppBarTitle)
window.customElements.define('app-bar-item', TopAppBarActionItem)
window.customElements.define('app-bar-actions', TopAppBarActions)
window.customElements.define('app-bar-nav', TopAppBarNav)
window.customElements.define('x-app-bar', TopAppBar)

storiesOf('Components|App bar', module)
  .addDecorator(withLinks)
  .add('概要', () => `


  `)
  .add('使い方', () => `
    <h4>使い方</h4>
    ${copyCodeBlock(
      '<x-app-bar class="app-bar">\n' +
      '   <app-bar-nav class="nav" />\n' +
      '   <app-bar-title class="title">タイトル</app-bar-title>\n' +
      '   <app-bar-actions class="actions">\n' +
      '      <app-bar-item class="item -cut"/>\n' +
      '      <app-bar-item class="item -copy"/>\n' +
      '   </app-bar-actions>\n' +
      '</x-app-layout>\n',
      { lang: 'html' }
    )}
    ${copyCodeBlock(
      '.app-bar {\n' +
      '   > .nav {\n' +
      '      @include rs-top-app-bar-nav-image(url(\'nav.png\'));\n' +
      '   }\n' +
      '   > .actions. > .item.-cut {\n' +
      '      @include rs-top-app-bar-action-image(url(\'cut.png\'));\n' +
      '   }\n' +
      '   > .actions. > .item.-copy {\n' +
      '      @include rs-top-app-bar-action-image(url(\'copy.png\'));\n' +
      '   }\n' +
      '}',
      { lang: 'scss' }
    )}
    <h4>HTML要素</h4>
    <p>custom elementsを<code>x</code>と<code>app</code>のプレフィックスをつけて定義した前提です。<br>
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
        <td>x-app-bar</td>
        <td>アップバー本体を表示します</td>
        <td>
          <ul>
            <li><code>app-bar-nav</code></li>
            <li><code>app-bar-title</code></li>
            <li><code>app-bar-actions</code></li>
          </ul>
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>app-bar-nav</td>
        <td>ナビゲーションを表示します</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>app-bar-title</td>
        <td>タイトルを表示します</td>
        <td>テキスト</td>
        <td>-</td>
      </tr>
      <tr>
        <td>app-bar-actions</td>
        <td>アクションエリアを表示します</td>
        <td><code>app-bar-item</code></td>
        <td>-</td>
      </tr>
      <tr>
        <td>app-bar-item</td>
        <td>アクションボタンを表示します</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>
    <h4>HTML属性</h4>
    <p>なし</p>
  `)
