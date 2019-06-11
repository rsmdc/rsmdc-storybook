import { storiesOf } from '@storybook/html'
import { DrawerContent, DrawerTitle, DrawerSubtitle, DrawerHeader, Drawer } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'
import './css/drawer.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

window.customElements.define('drawer-title', DrawerTitle)
window.customElements.define('drawer-subtitle', DrawerSubtitle)
window.customElements.define('drawer-header', DrawerHeader)
window.customElements.define('drawer-content', DrawerContent)
window.customElements.define('x-drawer', Drawer)

storiesOf('Components|Drawer', module)
  .addDecorator(withLinks)
  .add('概要', () =>  {
    return `
      <h4>Drawer</h4>
      <p>
        遷移先への切り替えやアカウントの切り替えなど、アプリ機能へのアクセスを提供する。
      </p>
      <p>
        参考:
        <a href="https://material.io/design/components/navigation-drawer.html#">
          https://material.io/design/components/navigation-drawer.html#
        </a>
      </p>
      <p>タイプ</p>
      <ul>
        <li>permanent (default)</li>
        <li>dismissible</li>
        <li>modal</li>
      </ul>
    `
  })
  .add('使用方法', () => {
    return `
      <x-app-layout class="app-layout">
        <x-drawer class="drawer" opened>
          <drawer-header class="header">
            <drawer-title class="title">aiuo</drawer-title>
            <drawer-subtitle class="subtitle">サブタイトル</drawer-subtitle>
          </drawer-header>
          <drawer-content class="contents"></drawer-content>
        </x-drawer>
        <app-layout-content class="contents">
          <x-app-bar class="appbar">
            <app-bar-nav></app-bar-nav>
            <app-bar-title>title</app-bar-title>
          </x-app-bar>
          <div>
            <h4>使用方法</h4>
          </div>
        </app-layout-content>
      </x-app-layout>
    
      ${copyCodeBlock(
        '<x-app-layout class="app-layout">\n' +
        '   <x-drawer class="drawer">\n' +
        '      <drawer-header class="header">\n' +
        '         <drawer-title class="title">タイトル</drawer-title>\n' +
        '         <drawer-subtitle class="subtitle">サブタイトル</drawer-subtitle>\n' +
        '      </drawer-header>\n' +
        '      <drawer-content class="contents">\n' +
        '         <x-list class="list">\n' +
        '               ...\n' +
        '         </x-list>\n' +
        '      </drawer-content>\n' +
        '   </x-drawer>\n' +
        '   <app-layout-content class="contents">\n' +
        '       <x-app-bar class="appbar">\n' +
        '             ...\n' +
        '       </x-app-bar>\n' +
        '         ...\n' +
        '   </app-layout-content>\n' +
        '</x-app-layout>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '.app-layout {\n' +
        '   > .drawer {\n' +
        '      @include rs-drawer-type(modal);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
      <h4>HTML要素</h4>
      <p>custom elementsを<code>x</code>と<code>drawer</code>のプレフィックスをつけて定義した前提です。<br>
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
          <td>x-drawer</td>
          <td>ドロワー本体を表示します</td>
          <td>
            <ul>
              <li><code>drawer-header</code></li>
              <li><code>drawer-content</code></li>
            </ul>
          </td>
          <td>-</td>
        </tr>
        <tr>
          <td>drawer-header</td>
          <td>ドロワーのヘッダーを表示します</td>
          <td>
            <ul>
              <li><code>drawer-title</code></li>
              <li><code>drawer-subtitle</code></li>
            </ul>
          </td>
          <td>-</td>
        </tr>
        <tr>
          <td>drawer-title</td>
          <td>ドロワーのタイトルを表示します</td>
          <td>テキスト</td>
          <td>-</td>
        </tr>
        <tr>
          <td>drawer-subtitle</td>
          <td>ドロワーのサブタイトルを表示します</td>
          <td>テキスト</td>
          <td>-</td>
        </tr>
        <tr>
          <td>drawer-content</td>
          <td>ドロワーのコンテンツ部分を表示します</td>
          <td>
            <ul>
              <li><code>x-list</code></li>
              <li>テキストなど全て可</li>
            </ul>
          </td>
          <td>-</td>
        </tr>
      </table>
      <h4>HTML属性</h4>
      <p>下記HTML属性をつけることで、custom elementsの状態が変化します。</p>
      <table>
        <tr>
          <th>属性</th>
          <th>説明</th>
          <th>タイプ</th>
          <th>備考</th>
        </tr>
        <tr>
          <td>opened</td>
          <td>ドロワーを表示状態にします</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
      </table>
    `
  })

storiesOf('Components|Drawer/スタイルのカスタマイズ/ドロワーのタイプを変える', module)
  .add('permanent (default)', () => `
    ドロワーが左側に常に開きっぱなしの状態<br>
  `)
  .add('dismissible', () => `
    @include rs-drawer-type(dismissible);<br>

    ドロワーが左側に表示される。opened属性の有無によって表示・非表示が切り替わる
  `)
  .add('modal', () => `
    @include rs-drawer-type(modal);<br>

    ドロワーがモーダル状で表示される。opened属性の有無によって表示・非表示が切り替わる
  `)

storiesOf('Components|Drawer/スタイルのカスタマイズ', module)
  .add('タイトルの色を変える', () => {
    return `
      <p>タイトルの色を指定した色に変える。</p>
      @incldue rs-drawer-title-ink-color($color);
    `
  })
  .add('サブタイトルの色を変える', () => {
    return `
      <p>サブタイトルの色を指定した色に変える。</p>
      @incldue rs-drawer-subtitle-ink-color($color);
    `
  })
  .add('背景色を変える', () => {
    return `
      <p>背景色を指定した色に変える。</p>
      @incldue rs-drawer-surface-fill-color($color);
    `
  })
  .add('モーダルの色を変える', () => {
    return `
      <p>モーダルの色を指定した色に変える。</p>
      @incldue rs-drawer-scrim-fill-color($color);
    `
  })
  .add('背景色とテキストの色を変える', () => {
    return `
      <p>
        背景色とテキストの色を変える。 <br>
        指定した背景色の色を元にテキストの色は自動で調整される。
      </p>
      @incldue rs-drawer-fill-color-accessible($containerColor);<br>
    `
  })
  .add('線の色を変える', () => {
    return `
      <p>線の色を指定した色に変える。</p>
      @incldue rs-drawer-border-color($color);
    `
  })
  .add('ドロワー内の仕切り線の色を変える', () => {
    return `
      <p>ドロワー内の仕切り線の色を指定した色に変える。</p>
      @incldue rs-drawer-divider-color($color);
    `
  })
  .add('ドロワーの幅を変える', () => {
    return `
      <p>ドロワーの幅を指定したサイズに変える。</p>
      @incldue rs-drawer-width($width);
    `
  })
  .add('ドロワーの角の丸みを変える', () => {
    return `
      <p>ドロワーの角の丸みを指定したサイズに変える。</p>
      @incldue rs-drawer-item-shape-radius($radius);
    `
  })


