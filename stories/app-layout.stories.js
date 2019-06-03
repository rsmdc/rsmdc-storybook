import { storiesOf } from '@storybook/html'
import { AppLayoutContent, AppLayout } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'

window.customElements.define('app-layout-content', AppLayoutContent)
window.customElements.define('x-app-layout', AppLayout)

storiesOf('Components|App-layout', module)
  .addDecorator(withLinks)
  .add('概要', () => `


  `)
  .add('使い方', () => `
    <h4>使い方</h4>
    ${copyCodeBlock(
      '<x-app-layout class="app-layout">\n' +
      '   <x-drawer class="drawer">\n' +
      '       ...\n' +
      '   </x-drawer>\n' +
      '   <app-layout-content class="contents">\n' +
      '       <x-app-bar class="topbar">\n' +
      '           ...\n' +
      '       </x-app-bar>\n' +
      '       ...\n' +
      '   </app-layout-content>\n' +
      '</x-app-layout>\n',
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
      <td>x-app-layout</td>
      <td>画面全体のレイアウトを整えます</td>
      <td>
        <ul>
          <li><code>x-drawer</code></li>
          <li><code>app-layout-content</code></li>
        </ul>
      </td>
      <td>DrawerとApp barを一緒に使う際は必須です<br>
        DrawerとApp barを横並びにします</td>
    </tr>
    <tr>
      <td>app-layout-content</td>
      <td>アプリのコンテンツ部分を示します</td>
      <td>
        <ul>
          <li><code>x-app-bar</code></li>
          <li>テキストなど全て可</li>
        </ul>
      </td>
      <td><code>x-app-bar</code>はこの中に入ります</tr>
    </table>
    <h4>HTML属性</h4>
    <p>なし</p>
  `)
  
storiesOf('Components|App-layout/スタイルのカスタマイズ', module)
  .add('ドロワーが常に開かれている際のレイアウトを整える (廃止予定)', () => `
    @include rs-app-layout-type($drawerType);<br>
    @include rs-top-app-bar-with-drawer($drawerType);<br>
    ドロワータイプがpermanentの時のみ
  `)

  

