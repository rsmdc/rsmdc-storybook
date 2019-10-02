import { storiesOf } from '@storybook/html'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'
const appLayout = require('@rsmdc/app-layout/loader')

import './css/style.scss'
import './css/app-layout.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

appLayout.defineCustomElements(window)

storiesOf('Components|App layout', module)
  .addDecorator(withLinks)
  .add('概要', () => `
    <h4>App layout</h4>
    <p>画面全体のレイアウトを整える。</p>
  `)
  .add('使い方', () => `
    <rs-app-bar class="app-bar">
      <rs-app-bar-nav class="nav"></rs-app-bar-nav>
      <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
    </rs-app-bar>
    <h4>使い方</h4>
    ${copyCodeBlock(
`<rs-app-bar class="app-bar">
  <rs-app-bar-nav class="nav"></rs-app-bar-nav>
  <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
</rs-app-bar>`,
      { lang: 'html' }
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