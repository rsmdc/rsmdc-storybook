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
window.customElements.define('rs-drawer', Drawer)

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
        <li>
          permanent (デフォルト) <br>
          常に開いた状態。 <br>
          <a class="link" href="#" data-sb-kind="Components|Drawer/スタイルのカスタマイズ/ドロワーのタイプを変える" data-sb-story="permanent(default)">参照はこちら</a>
        </li>
        <li>
          dismissible <br>
          表示・非表示が切り替えれる。 <br>
          <a class="link" href="#" data-sb-kind="Components|Drawer/スタイルのカスタマイズ/ドロワーのタイプを変える" data-sb-story="dismissible">参照はこちら</a>
        </li>
        <li>
          modal <br>
          モーダル状で表示される。 <br>
          <a class="link" href="#" data-sb-kind="Components|Drawer/スタイルのカスタマイズ/ドロワーのタイプを変える" data-sb-story="modal">参照はこちら</a>
        </li>
      </ul>
    `
  })
  .add('使用方法', () => {
    return `
      <rs-app-layout class="app-layout">
        <rs-drawer class="drawer" opened>
          <drawer-header class="header">
            <drawer-title class="title">タイトル</drawer-title>
            <drawer-subtitle class="subtitle">サブタイトル</drawer-subtitle>
          </drawer-header>
          <drawer-content class="contents"></drawer-content>
        </rs-drawer>
        <app-layout-content class="contents">
<<<<<<< Updated upstream
          <x-app-bar class="appbar">
            <app-bar-nav class="nav"></app-bar-nav>
            <app-bar-title>title</app-bar-title>
          </x-app-bar>
          <h4>使用方法</h4>
        </app-layout-content>
      </x-app-layout>
      ${copyCodeBlock(
        '<x-app-layout class="app-layout">\n' +
        '   <x-drawer class="drawer" opened>\n' +
=======
          <rs-app-bar class="appbar">
            <app-bar-nav></app-bar-nav>
            <app-bar-title>title</app-bar-title>
          </rs-app-bar>
          <div>
            <h4>使用方法</h4>
          </div>
        </app-layout-content>
      </rs-app-layout>
    
      ${copyCodeBlock(
        '<rs-app-layout class="app-layout">\n' +
        '   <rs-drawer class="drawer">\n' +
>>>>>>> Stashed changes
        '      <drawer-header class="header">\n' +
        '         <drawer-title class="title">タイトル</drawer-title>\n' +
        '         <drawer-subtitle class="subtitle">サブタイトル</drawer-subtitle>\n' +
        '      </drawer-header>\n' +
        '      <drawer-content class="contents">\n' +
        '         <x-list class="list">\n' +
        '               ...\n' +
        '         </x-list>\n' +
        '      </drawer-content>\n' +
        '   </rs-drawer>\n' +
        '   <app-layout-content class="contents">\n' +
<<<<<<< Updated upstream
        '       <x-app-bar class="appbar">\n' +
        '          <app-bar-nav></app-bar-nav>\n' +
        '          <app-bar-title>title</app-bar-title>\n' +
        '       </x-app-bar>\n' +
=======
        '       <rs-app-bar class="appbar">\n' +
        '             ...\n' +
        '       </rs-app-bar>\n' +
>>>>>>> Stashed changes
        '         ...\n' +
        '   </app-layout-content>\n' +
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
      <p>custom elementsを<code>rs</code>と<code>drawer</code>のプレフィックスをつけて定義した前提です。<br>
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
          <td>rs-drawer</td>
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
  .add('permanent (default)', () => {
    return `
      <x-app-layout class="app-layout">
        <x-drawer class="drawer -permanent" opened>
          <drawer-header class="header">
            <drawer-title class="title">タイトル</drawer-title>
            <drawer-subtitle class="subtitle">サブタイトル</drawer-subtitle>
          </drawer-header>
          <drawer-content class="contents"></drawer-content>
        </x-drawer>
        <app-layout-content class="contents">
          <x-app-bar class="appbar">
            <app-bar-title>title</app-bar-title>
          </x-app-bar>
          <h4>permanent（デフォルト）</h4>
        </app-layout-content>
      </x-app-layout>
      <p>ドロワーが左側に常に開きっぱなしの状態</p>
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-app-layout class="app-layout">\n' +
        '   <x-drawer class="drawer" opened>\n' +
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
        '          <app-bar-nav></app-bar-nav>\n' +
        '          <app-bar-title>title</app-bar-title>\n' +
        '       </x-app-bar>\n' +
        '         ...\n' +
        '   </app-layout-content>\n' +
        '</x-app-layout>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '.app-layout {\n' +
        '   > .drawer {\n' +
        '      @include rs-drawer-type(permanent);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('dismissible', () => {
    return `
      <x-app-layout class="app-layout">
        <x-drawer class="drawer" opened>
          <drawer-header class="header">
            <drawer-title class="title">タイトル</drawer-title>
            <drawer-subtitle class="subtitle">サブタイトル</drawer-subtitle>
          </drawer-header>
          <drawer-content class="contents"></drawer-content>
        </x-drawer>
        <app-layout-content class="contents">
          <x-app-bar class="appbar">
            <app-bar-nav class="nav"></app-bar-nav>
            <app-bar-title>title</app-bar-title>
          </x-app-bar>
          <h4>dismissible</h4>
        </app-layout-content>
      </x-app-layout>
      <p>
        ドロワーが左側に表示される。 <br>
        opened属性の有無によって表示・非表示が切り替わる。
      </p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-drawer-type($type);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-app-layout class="app-layout">\n' +
        '   <x-drawer class="drawer" opened>\n' +
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
        '          <app-bar-nav class="nav"></app-bar-nav>\n' +
        '          <app-bar-title>title</app-bar-title>\n' +
        '       </x-app-bar>\n' +
        '         ...\n' +
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
    `
  })
  .add('modal', () => {
    return `
    <x-app-layout class="app-layout">
        <x-drawer class="drawer -modal" opened>
          <drawer-header class="header">
            <drawer-title class="title">タイトル</drawer-title>
            <drawer-subtitle class="subtitle">サブタイトル</drawer-subtitle>
          </drawer-header>
          <drawer-content class="contents"></drawer-content>
        </x-drawer>
        <app-layout-content class="contents">
          <x-app-bar class="appbar">
            <app-bar-nav class="nav"></app-bar-nav>
            <app-bar-title>title</app-bar-title>
          </x-app-bar>
        </app-layout-content>
      </x-app-lauout>
      <h4>modal</h4>
      <p>
        ドロワーがモーダル状で表示される。 <br>
        opened属性の有無によって表示・非表示が切り替わる。
      </p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-drawer-type(type);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-app-layout class="app-layout">\n' +
        '   <x-drawer class="drawer" opened>\n' +
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
        '          <app-bar-nav class="nav"></app-bar-nav>\n' +
        '          <app-bar-title>title</app-bar-title>\n' +
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
    `
  })
storiesOf('Components|Drawer/スタイルのカスタマイズ', module)
  .add('タイトルの色を変える', () => {
    return `
      <x-app-layout class="app-layout">
        <x-drawer class="drawer -title-ink-color" opened>
          <drawer-header class="header">
            <drawer-title class="title">タイトル</drawer-title>
            <drawer-subtitle class="subtitle">サブタイトル</drawer-subtitle>
          </drawer-header>
          <drawer-content class="contents"></drawer-content>
        </x-drawer>
        <app-layout-content class="contents">
          <x-app-bar class="appbar">
            <app-bar-nav class="nav"></app-bar-nav>
            <app-bar-title>title</app-bar-title>
          </x-app-bar>
        </app-layout-content>
      </x-app-layout>
      <p>タイトルの色を指定した色に変える。</p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-drawer-title-ink-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-app-layout class="app-layout">\n' +
        '   <x-drawer class="drawer -title-ink-color" opened>\n' +
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
        '          <app-bar-nav class="nav"></app-bar-nav>\n' +
        '          <app-bar-title>title</app-bar-title>\n' +
        '       </x-app-bar>\n' +
        '         ...\n' +
        '   </app-layout-content>\n' +
        '</x-app-layout>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '.app-layout {\n' +
        '   > .drawer {\n' +
        '      &.-title-ink-color {\n' +
        '        @include rs-drawer-title-ink-color(brown);\n' +
        '      }\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>$color: インクの色コード <br> 例）#ee00ce</li>
      </ul>
    `
  })
  .add('サブタイトルの色を変える', () => {
    return `
      <x-app-layout class="app-layout">
        <x-drawer class="drawer -subtitle-ink-color" opened>
          <drawer-header class="header">
            <drawer-title class="title">タイトル</drawer-title>
            <drawer-subtitle class="subtitle">サブタイトル</drawer-subtitle>
          </drawer-header>
          <drawer-content class="contents"></drawer-content>
        </x-drawer>
        <app-layout-content class="contents">
          <x-app-bar class="appbar">
            <app-bar-nav class="nav"></app-bar-nav>
            <app-bar-title>title</app-bar-title>
          </x-app-bar>
        </app-layout-content>
      </x-app-layout>
      <p>サブタイトルの色を指定した色に変える。</p>
      ${copyCodeBlock(
        '@include rs-drawer-subtitle-ink-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-app-layout class="app-layout">\n' +
        '   <x-drawer class="drawer -subtitle-ink-color" opened>\n' +
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
        '          <app-bar-nav class="nav"></app-bar-nav>\n' +
        '          <app-bar-title>title</app-bar-title>\n' +
        '       </x-app-bar>\n' +
        '         ...\n' +
        '   </app-layout-content>\n' +
        '</x-app-layout>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '.app-layout {\n' +
        '   > .drawer {\n' +
        '      &.-subtitle-ink-color {\n' +
        '        @include rs-drawer-subtitle-ink-color(brown);\n' +
        '      }\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('背景色を変える', () => {
    return `
      <x-app-layout class="app-layout">
        <x-drawer class="drawer -surface-fill-color" opened>
          <drawer-header class="header">
            <drawer-title class="title">タイトル</drawer-title>
            <drawer-subtitle class="subtitle">サブタイトル</drawer-subtitle>
          </drawer-header>
          <drawer-content class="contents"></drawer-content>
        </x-drawer>
        <app-layout-content class="contents">
          <x-app-bar class="appbar">
            <app-bar-nav class="nav"></app-bar-nav>
            <app-bar-title>title</app-bar-title>
          </x-app-bar>
        </app-layout-content>
      </x-app-layout>
      <p>背景色を指定した色に変える。</p>
      ${copyCodeBlock(
        '@include rs-drawer-surface-fill-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-app-layout class="app-layout">\n' +
        '   <x-drawer class="drawer -surface-fill-color" opened>\n' +
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
        '          <app-bar-nav class="nav"></app-bar-nav>\n' +
        '          <app-bar-title>title</app-bar-title>\n' +
        '       </x-app-bar>\n' +
        '         ...\n' +
        '   </app-layout-content>\n' +
        '</x-app-layout>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '.app-layout {\n' +
        '   > .drawer {\n' +
        '      &.-surface-fill-color {\n' +
        '        @include rs-drawer-surface-fill-color(beige);\n' +
        '      }\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('モーダルの色を変える', () => {
    return `
      <x-app-layout class="app-layout">
        <x-drawer class="drawer -modal -scrim-fill-color" opened>
          <drawer-header class="header">
            <drawer-title class="title">タイトル</drawer-title>
            <drawer-subtitle class="subtitle">サブタイトル</drawer-subtitle>
          </drawer-header>
          <drawer-content class="contents"></drawer-content>
        </x-drawer>
        <app-layout-content class="contents">
          <x-app-bar class="appbar">
            <app-bar-nav class="nav"></app-bar-nav>
            <app-bar-title>title</app-bar-title>
          </x-app-bar>
        </app-layout-content>
      </x-app-layout>
      <p>モーダルの色を指定した色に変える。</p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-drawer-scrim-fill-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-app-layout class="app-layout">\n' +
        '   <x-drawer class="drawer -scrim-fill-color" opened>\n' +
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
        '          <app-bar-nav class="nav"></app-bar-nav>\n' +
        '          <app-bar-title>title</app-bar-title>\n' +
        '       </x-app-bar>\n' +
        '         ...\n' +
        '   </app-layout-content>\n' +
        '</x-app-layout>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '.app-layout {\n' +
        '   > .drawer {\n' +
        '      &.-scrim-fill-color {\n' +
        '        @include rs-drawer-scrim-fill-color(beige);\n' +
        '      }\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('背景色とテキストの色を変える', () => {
    return `
      <x-app-layout class="app-layout">
        <x-drawer class="drawer -fill-color-accessible" opened>
          <drawer-header class="header">
            <drawer-title class="title">タイトル</drawer-title>
            <drawer-subtitle class="subtitle">サブタイトル</drawer-subtitle>
          </drawer-header>
          <drawer-content class="contents"></drawer-content>
        </x-drawer>
        <app-layout-content class="contents">
          <x-app-bar class="appbar">
            <app-bar-nav class="nav"></app-bar-nav>
            <app-bar-title>title</app-bar-title>
          </x-app-bar>
        </app-layout-content>
      </x-app-layout>
      <p>
        背景色とテキストの色を変える。 <br>
        指定した背景色の色を元にテキストの色は自動で調整される。
      </p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-drawer-fill-color-accessible($containerColor);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-app-layout class="app-layout">\n' +
        '   <x-drawer class="drawer -fill-color-accessible" opened>\n' +
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
        '          <app-bar-nav class="nav"></app-bar-nav>\n' +
        '          <app-bar-title>title</app-bar-title>\n' +
        '       </x-app-bar>\n' +
        '         ...\n' +
        '   </app-layout-content>\n' +
        '</x-app-layout>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '.app-layout {\n' +
        '   > .drawer {\n' +
        '      &.-fill-color-accessible {\n' +
        '        @include rs-drawer-fill-color-accessible(orange);\n' +
        '      }\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>$containerColor: 背景色を指定。</li>
      </ul>
    `
  })
  .add('線の色を変える', () => {
    return `
      <x-app-layout class="app-layout">
        <x-drawer class="drawer -border-color" opened>
          <drawer-header class="header">
            <drawer-title class="title">タイトル</drawer-title>
            <drawer-subtitle class="subtitle">サブタイトル</drawer-subtitle>
          </drawer-header>
          <drawer-content class="contents"></drawer-content>
        </x-drawer>
        <app-layout-content class="contents">
          <x-app-bar class="appbar">
            <app-bar-nav class="nav"></app-bar-nav>
            <app-bar-title>title</app-bar-title>
          </x-app-bar>
        </app-layout-content>
      </x-app-layout>
      <p>線の色を指定した色に変える。</p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-drawer-border-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-app-layout class="app-layout">\n' +
        '   <x-drawer class="drawer -border-color" opened>\n' +
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
        '          <app-bar-nav class="nav"></app-bar-nav>\n' +
        '          <app-bar-title>title</app-bar-title>\n' +
        '       </x-app-bar>\n' +
        '         ...\n' +
        '   </app-layout-content>\n' +
        '</x-app-layout>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '.app-layout {\n' +
        '   > .drawer {\n' +
        '      &.-border-color {\n' +
        '        @include rs-drawer-border-color(brown);\n' +
        '      }\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('ドロワー内の仕切り線の色を変える', () => {
    return `
      <x-app-layout class="app-layout">
        <x-drawer class="drawer -divider-color" opened>
          <drawer-header class="header">
            <drawer-title class="title">タイトル</drawer-title>
            <drawer-subtitle class="subtitle">サブタイトル</drawer-subtitle>
            <x-list>
              <list-item>
                <list-text class="text">テキスト</list-text>
              </list-item>
            </x-list>
          <list-divider></list-divider>
          </drawer-header>
          <drawer-content class="contents"></drawer-content>
        </x-drawer>
        <app-layout-content class="contents">
          <x-app-bar class="appbar">
            <app-bar-nav class="nav"></app-bar-nav>
            <app-bar-title>title</app-bar-title>
          </x-app-bar>
        </app-layout-content>
      </x-app-layout>
      <p>ドロワー内の仕切り線の色を指定した色に変える。</p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-drawer-divider-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-app-layout class="app-layout">\n' +
        '   <x-drawer class="drawer -border-color" opened>\n' +
        '      <drawer-header class="header">\n' +
        '         <drawer-title class="title">タイトル</drawer-title>\n' +
        '         <drawer-subtitle class="subtitle">サブタイトル</drawer-subtitle>\n' +
        '         <x-list>\n' +
        '            <list-item>\n' +
        '              <list-text class="text">テキスト</list-text>\n' +
        '            </list-item>\n' +
        '         </x-list>\n' +
        '         <list-divider></list-divider>\n' +
        '      </drawer-header>\n' +
        '      <drawer-content class="contents">\n' +
        '         <x-list class="list">\n' +
        '               ...\n' +
        '         </x-list>\n' +
        '      </drawer-content>\n' +
        '   </x-drawer>\n' +
        '   <app-layout-content class="contents">\n' +
        '       <x-app-bar class="appbar">\n' +
        '          <app-bar-nav class="nav"></app-bar-nav>\n' +
        '          <app-bar-title>title</app-bar-title>\n' +
        '       </x-app-bar>\n' +
        '         ...\n' +
        '   </app-layout-content>\n' +
        '</x-app-layout>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '.app-layout {\n' +
        '   > .drawer {\n' +
        '      &.-border-color {\n' +
        '        @include rs-drawer-border-color(brown);\n' +
        '      }\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('ドロワーの幅を変える', () => {
    return `
      <x-app-layout class="app-layout">
        <x-drawer class="drawer -width" opened>
          <drawer-header class="header">
            <drawer-title class="title">タイトル</drawer-title>
            <drawer-subtitle class="subtitle">サブタイトル</drawer-subtitle>
          </drawer-header>
          <drawer-content class="contents"></drawer-content>
        </x-drawer>
        <app-layout-content class="contents">
          <x-app-bar class="appbar">
            <app-bar-nav class="nav"></app-bar-nav>
            <app-bar-title>title</app-bar-title>
          </x-app-bar>
        </app-layout-content>
      </x-app-layout>
      <p>ドロワーの幅を指定したサイズに変える。</p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-drawer-width($width);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-app-layout class="app-layout">\n' +
        '   <x-drawer class="drawer -width" opened>\n' +
        '      <drawer-header class="header">\n' +
        '         <drawer-title class="title">タイトル</drawer-title>\n' +
        '         <drawer-subtitle class="subtitle">サブタイトル</drawer-subtitle>\n' +
        '         <list-item>\n' +
        '            <list-text class="text">テキスト</list-text>\n' +
        '         </list-item>\n' +
        '         <list-divider></list-divider>\n' +
        '      </drawer-header>\n' +
        '      <drawer-content class="contents">\n' +
        '         <x-list class="list">\n' +
        '               ...\n' +
        '         </x-list>\n' +
        '      </drawer-content>\n' +
        '   </x-drawer>\n' +
        '   <app-layout-content class="contents">\n' +
        '       <x-app-bar class="appbar">\n' +
        '          <app-bar-nav class="nav"></app-bar-nav>\n' +
        '          <app-bar-title>title</app-bar-title>\n' +
        '       </x-app-bar>\n' +
        '         ...\n' +
        '   </app-layout-content>\n' +
        '</x-app-layout>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '.app-layout {\n' +
        '   > .drawer {\n' +
        '      &.-width {\n' +
        '        @include rs-drawer-width(300px);\n' +
        '      }\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>$width: 横幅を指定</li>
      </ul>
    `
  })
  .add('ドロワーの角の丸みを変える', () => {
    return `
      <x-app-layout class="app-layout">
        <x-drawer class="drawer -shape-radius" opened>
          <drawer-header class="header">
            <drawer-title class="title">タイトル</drawer-title>
            <drawer-subtitle class="subtitle">サブタイトル</drawer-subtitle>
          </drawer-header>
          <drawer-content class="contents"></drawer-content>
        </x-drawer>
        <app-layout-content class="contents">
          <x-app-bar class="appbar">
            <app-bar-nav class="nav"></app-bar-nav>
            <app-bar-title>title</app-bar-title>
          </x-app-bar>
        </app-layout-content>
      </x-app-layout>
      <p>ドロワーの角の丸みを指定したサイズに変える。</p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-drawer-item-shape-radius($radius);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-app-layout class="app-layout">\n' +
        '   <x-drawer class="drawer -shape-radius" opened>\n' +
        '      <drawer-header class="header">\n' +
        '         <drawer-title class="title">タイトル</drawer-title>\n' +
        '         <drawer-subtitle class="subtitle">サブタイトル</drawer-subtitle>\n' +
        '         <list-item>\n' +
        '            <list-text class="text">テキスト</list-text>\n' +
        '         </list-item>\n' +
        '         <list-divider></list-divider>\n' +
        '      </drawer-header>\n' +
        '      <drawer-content class="contents">\n' +
        '         <x-list class="list">\n' +
        '               ...\n' +
        '         </x-list>\n' +
        '      </drawer-content>\n' +
        '   </x-drawer>\n' +
        '   <app-layout-content class="contents">\n' +
        '       <x-app-bar class="appbar">\n' +
        '          <app-bar-nav class="nav"></app-bar-nav>\n' +
        '          <app-bar-title>title</app-bar-title>\n' +
        '       </x-app-bar>\n' +
        '         ...\n' +
        '   </app-layout-content>\n' +
        '</x-app-layout>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '.app-layout {\n' +
        '   > .drawer {\n' +
        '      &.-shape-radius {\n' +
        '        @include rs-drawer-shape-radius(10px);\n' +
        '      }\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>$radius: 角の丸みのサイズを指定</li>
      </ul>
    `
  })


