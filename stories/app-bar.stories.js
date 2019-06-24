import { storiesOf } from '@storybook/html'
import { TopAppBarActionItem, TopAppBarActions, TopAppBarTitle, TopAppBarNav, TopAppBar } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'
import './css/app-bar.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

window.customElements.define('rs-app-bar-title', TopAppBarTitle)
window.customElements.define('rs-app-bar-item', TopAppBarActionItem)
window.customElements.define('rs-app-bar-actions', TopAppBarActions)
window.customElements.define('rs-app-bar-nav', TopAppBarNav)
window.customElements.define('rs-app-bar', TopAppBar)

storiesOf('Components|App bar', module)
  .addDecorator(withLinks)
  .add('概要', () => {
    return `
    <h4>App bar</h4>
    <p>現在の画面に関連するコンテンツとアクションが表示される。</p>
    <p>
      参照:
      <a href="https://material.io/design/components/app-bars-top.html">
        https://material.io/design/components/app-bars-top.html
      </a>
    </p>
    `
  })
  .add('使用方法', () => `
    <p>
      <rs-app-bar class="app-bar">
        <rs-app-bar-nav class="nav"></rs-app-bar-nav>
        <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
        <rs-app-bar-actions class="actions">
          <rs-app-bar-item class="item -search"></rs-app-bar-item>
          <h4>使用方法</h4>
        </rs-app-bar-actions>
      </rs-app-bar>
    </p>
    ${copyCodeBlock(
      '<rs-app-bar class="app-bar">\n' +
      '   <rs-app-bar-nav class="nav" />\n' +
      '   <rs-app-bar-title class="title">タイトル</rs-app-bar-title>\n' +
      '   <rs-app-bar-actions class="actions">\n' +
      '      <rs-app-bar-item class="item -search"/>\n' +
      '   </rs-app-bar-actions>\n' +
      '</rs-app-bar>\n',
      { lang: 'html' }
    )}
    ${copyCodeBlock(
      '.app-bar {\n' +
      '   > .nav {\n' +
      '      @include rs-top-rs-app-bar-nav-icon-image(url(\'nav.png\'));\n' +
      '   }\n' +
      '   > .actions. > .item.-search {\n' +
      '      @include rs-top-app-bar-action-icon-image(url(\'search.png\'));\n' +
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
        <td>rs-app-bar</td>
        <td>アップバー本体を表示します</td>
        <td>
          <ul>
            <li><code>rs-app-bar-nav</code></li>
            <li><code>rs-app-bar-title</code></li>
            <li><code>rs-app-bar-actions</code></li>
          </ul>
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-app-bar-nav</td>
        <td>ナビゲーションを表示します</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-app-bar-title</td>
        <td>タイトルを表示します</td>
        <td>テキスト</td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-app-bar-actions</td>
        <td>アクションエリアを表示します</td>
        <td><code>rs-app-bar-item</code></td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-app-bar-item</td>
        <td>アクションボタンを表示します</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>
    <h4>HTML属性</h4>
    <p>なし</p>
  `)

storiesOf('Components|App bar/スタイルのカスタマイズ/アップバーのタイプを変える', module)
  .add('normal (default)', () => {
    return `
      <p>
        <rs-app-bar class="app-bar -dense">
          <rs-app-bar-nav class="nav"></rs-app-bar-nav>
          <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
          <rs-app-bar-actions class="actions">
            <rs-app-bar-item class="item -cut"></rs-app-bar-item>
            <rs-app-bar-item class="item -copy"></rs-app-bar-item>
          </rs-app-bar-actions>
        </rs-app-bar>
      </p>
      <h4>normal（デフォルト）</h4>
      <p>
        normalを使用する場合mixinは不要。<br>
        denseを使用する場合はmixinが必要（後述）。<br>
        （ 表示されているのはdense ）
      </p>
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<rs-app-bar class="app-bar">\n' +
        '   <rs-app-bar-nav class="nav"></rs-app-bar-nav>\n' +
        '   <rs-app-bar-title class="title">タイトル</rs-app-bar-title>\n' +
        '   <rs-app-bar-actions class="actions">\n' +
        '       <rs-app-bar-item class="item -cut"></rs-app-bar-item>\n' +
        '       <rs-app-bar-item class="item -copy"></rs-app-bar-item>\n' +
        '   </rs-app-bar-actions>\n' +
        '</rs-app-bar>\n',
        { lang: 'html' }
      )}
      <p>denseを使用する場合</p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-top-app-bar-type($type);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<rs-app-bar class="app-bar -dense">\n' +
        '   <rs-app-bar-nav class="nav"></rs-app-bar-nav>\n' +
        '   <rs-app-bar-title class="title">タイトル</rs-app-bar-title>\n' +
        '   <rs-app-bar-actions class="actions">\n' +
        '       <rs-app-bar-item class="item -cut"></rs-app-bar-item>\n' +
        '       <rs-app-bar-item class="item -copy"></rs-app-bar-item>\n' +
        '   </rs-app-bar-actions>\n' +
        '</rs-app-bar>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/top-app-bar/rs-top-app-bar.scss\';\n\n' +
        '.app-bar {\n' +
        '   &.-dense {\n' +
        '      @include rs-top-app-bar-type(dense);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('short', () => {
    return `
      <p>
        <rs-app-bar class="app-bar -short">
          <rs-app-bar-nav class="nav"></rs-app-bar-nav>
          <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
          <rs-app-bar-actions class="actions">
            <rs-app-bar-item class="item -cut"></rs-app-bar-item>
            <rs-app-bar-item class="item -copy"></rs-app-bar-item>
          </rs-app-bar-actions>
        </rs-app-bar>
      </p>
      <h4>short</h4>
      <p>app barの横幅を短くする。</p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-top-app-bar-type($type);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<rs-app-bar class="app-bar -short">\n' +
        '   <rs-app-bar-nav class="nav"></rs-app-bar-nav>\n' +
        '   <rs-app-bar-title class="title">タイトル</rs-app-bar-title>\n' +
        '   <rs-app-bar-actions class="actions">\n' +
        '       <rs-app-bar-item class="item -cut"></rs-app-bar-item>\n' +
        '       <rs-app-bar-item class="item -copy"></rs-app-bar-item>\n' +
        '   </rs-app-bar-actions>\n' +
        '</rs-app-bar>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/top-app-bar/rs-top-app-bar.scss\';\n\n' +
        '.app-bar {\n' +
        '   &.-short {\n' +
        '      @include rs-top-app-bar-type(short);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('prominent', () => {
    return `
      <p>
        <rs-app-bar class="app-bar -prominent">
          <rs-app-bar-nav class="nav"></rs-app-bar-nav>
          <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
          <rs-app-bar-actions class="actions">
            <rs-app-bar-item class="item -cut"></rs-app-bar-item>
            <rs-app-bar-item class="item -copy"></rs-app-bar-item>
          </rs-app-bar-actions>
        </rs-app-bar>
      </p>
      <h4>prominent</h4>
      <p>denseも同時に指定できる</p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-top-app-bar-type($type);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<rs-app-bar class="app-bar -prominent">\n' +
        '   <rs-app-bar-nav class="nav"></rs-app-bar-nav>\n' +
        '   <rs-app-bar-title class="title">タイトル</rs-app-bar-title>\n' +
        '   <rs-app-bar-actions class="actions">\n' +
        '       <rs-app-bar-item class="item -cut"></rs-app-bar-item>\n' +
        '       <rs-app-bar-item class="item -copy"></rs-app-bar-item>\n' +
        '   </rs-app-bar-actions>\n' +
        '</rs-app-bar>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/top-app-bar/rs-top-app-bar.scss\';\n\n' +
        '.app-bar {\n' +
        '   &.-prominent {\n' +
        '      @include rs-top-app-bar-type(prominent);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('fixed', () => {
    return `
      <p>
        <rs-app-bar class="app-bar -fixed">
          <rs-app-bar-nav class="nav"></rs-app-bar-nav>
          <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
          <rs-app-bar-actions class="actions">
            <rs-app-bar-item class="item -cut"></rs-app-bar-item>
            <rs-app-bar-item class="item -copy"></rs-app-bar-item>
          </rs-app-bar-actions>
        </rs-app-bar>
      </p>
      <h4>fixed</h4>
      App barを固定する。
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-top-app-bar-type($type);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<rs-app-bar class="app-bar -fixed">\n' +
        '   <rs-app-bar-nav class="nav"></rs-app-bar-nav>\n' +
        '   <rs-app-bar-title class="title">タイトル</rs-app-bar-title>\n' +
        '   <rs-app-bar-actions class="actions">\n' +
        '       <rs-app-bar-item class="item -cut"></rs-app-bar-item>\n' +
        '       <rs-app-bar-item class="item -copy"></rs-app-bar-item>\n' +
        '   </rs-app-bar-actions>\n' +
        '</rs-app-bar>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/top-app-bar/rs-top-app-bar.scss\';\n\n' +
        '.app-bar {\n' +
        '   &.-fixed {\n' +
        '      @include rs-top-app-bar-type(fixed);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('collapsed', () => {
  return `
    <p>
      <rs-app-bar class="app-bar -collapsed">
        <rs-app-bar-nav class="nav"></rs-app-bar-nav>
        <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
        <rs-app-bar-actions class="actions">
          <rs-app-bar-item class="item -cut"></rs-app-bar-item>
          <rs-app-bar-item class="item -copy"></rs-app-bar-item>
        </rs-app-bar-actions>
      </rs-app-bar>
    </p>
    <h4>collapsed</h4>
    <p>shortも同時に指定できる。</p>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      '@include rs-top-app-bar-type($type);',
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      '<rs-app-bar class="app-bar -collapsed">\n' +
      '   <rs-app-bar-nav class="nav"></rs-app-bar-nav>\n' +
      '   <rs-app-bar-title class="title">タイトル</rs-app-bar-title>\n' +
      '   <rs-app-bar-actions class="actions">\n' +
      '       <rs-app-bar-item class="item -cut"></rs-app-bar-item>\n' +
      '       <rs-app-bar-item class="item -copy"></rs-app-bar-item>\n' +
      '   </rs-app-bar-actions>\n' +
      '</rs-app-bar>\n',
      { lang: 'html' }
    )}
    ${copyCodeBlock(
      '@import \'@rsmdc/top-app-bar/rs-top-app-bar.scss\';\n\n' +
      '.app-bar {\n' +
      '   &.-collapsed {\n' +
      '      @include rs-top-app-bar-type(collapsed);\n' +
      '   }\n' +
      '}',
      { lang: 'scss' }
    )}
    
  `
  })

storiesOf('Components|App bar/スタイルのカスタマイズ', module)
  .add('タイトルの色を変える', () => {
    return `
      <p>
        <rs-app-bar class="app-bar -ink-color">
          <rs-app-bar-nav class="nav"></rs-app-bar-nav>
          <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
          <rs-app-bar-actions class="actions">
            <rs-app-bar-item class="item -cut"></rs-app-bar-item>
            <rs-app-bar-item class="item -copy"></rs-app-bar-item>
          </rs-app-bar-actions>
        </rs-app-bar>
      </p>
      <p>タイトルの色を指定した色に変える。</p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@includers-top-rs-app-bar-title-ink-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<rs-app-bar class="app-bar -ink-color">\n' +
        '   <rs-app-bar-nav class="nav"></rs-app-bar-nav>\n' +
        '   <rs-app-bar-title class="title">タイトル</rs-app-bar-title>\n' +
        '   <rs-app-bar-actions class="actions">\n' +
        '       <rs-app-bar-item class="item -cut"></rs-app-bar-item>\n' +
        '       <rs-app-bar-item class="item -copy"></rs-app-bar-item>\n' +
        '   </rs-app-bar-actions>\n' +
        '</rs-app-bar>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/top-app-bar/rs-top-app-bar.scss\';\n\n' +
        '.app-bar {\n' +
        '   &.-ink-color {\n' +
        '      @includers-top-rs-app-bar-title-ink-color(yellow);\n' +
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
  .add('アイコンの色を変える', () => {
    return `
      <p>
        <rs-app-bar class="app-bar -fill-color-accessible">
          <rs-app-bar-nav class="nav"></rs-app-bar-nav>
          <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
          <rs-app-bar-actions class="actions">
            <rs-app-bar-item class="item -cut"></rs-app-bar-item>
            <rs-app-bar-item class="item -copy"></rs-app-bar-item>
          </rs-app-bar-actions>
        </rs-app-bar>
      </p>
      <p>
        背景色とタイトルの色を変える。<br>
        指定した背景色の色を元に、タイトルの色は自動調整される。
      </p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-top-app-bar-icon-ink-color($containerColor);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<rs-app-bar class="app-bar -fill-color-accessible">\n' +
        '   <rs-app-bar-nav class="nav"></rs-app-bar-nav>\n' +
        '   <rs-app-bar-title class="title">タイトル</rs-app-bar-title>\n' +
        '   <rs-app-bar-actions class="actions">\n' +
        '       <rs-app-bar-item class="item -cut"></rs-app-bar-item>\n' +
        '       <rs-app-bar-item class="item -copy"></rs-app-bar-item>\n' +
        '   </rs-app-bar-actions>\n' +
        '</rs-app-bar>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/top-app-bar/rs-top-app-bar.scss\';\n\n' +
        '.app-bar {\n' +
        '   &.-fill-color-accessible {\n' +
        '      @include rs-top-app-bar-fill-color-accessible(beige);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('背景色を変える', () => {
    return `
      <p>
        <rs-app-bar class="app-bar -fill-color">
          <rs-app-bar-nav class="nav"></rs-app-bar-nav>
          <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
          <rs-app-bar-actions class="actions">
            <rs-app-bar-item class="item -cut"></rs-app-bar-item>
            <rs-app-bar-item class="item -copy"></rs-app-bar-item>
          </rs-app-bar-actions>
        </rs-app-bar>
      </p>
      <p>背景色を指定した色に変える。</p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-top-app-bar-fill-color($color);',
        { lang: 'scss' }
      )}
      ${copyCodeBlock(
        '<rs-app-bar class="app-bar -fill-color">\n' +
        '   <rs-app-bar-nav class="nav"></rs-app-bar-nav>\n' +
        '   <rs-app-bar-title class="title">タイトル</rs-app-bar-title>\n' +
        '   <rs-app-bar-actions class="actions">\n' +
        '       <rs-app-bar-item class="item -cut"></rs-app-bar-item>\n' +
        '       <rs-app-bar-item class="item -copy"></rs-app-bar-item>\n' +
        '   </rs-app-bar-actions>\n' +
        '</rs-app-bar>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/top-app-bar/rs-top-app-bar.scss\';\n\n' +
        '.app-bar {\n' +
        '   &.-fill-color {\n' +
        '      @include rs-top-app-bar-fill-color(orange);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>$color: コンテナの色の塗りコード <br> 例）#ee00ce</li>
      </ul>
    `
  })
  .add('リップルの色を変える', () => {
    return `
      <p>
        <rs-app-bar class="app-bar -fill-color-accessible">
          <rs-app-bar-nav class="nav"></rs-app-bar-nav>
          <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
          <rs-app-bar-actions class="actions">
            <rs-app-bar-item class="item -cut"></rs-app-bar-item>
            <rs-app-bar-item class="item -copy"></rs-app-bar-item>
          </rs-app-bar-actions>
        </rs-app-bar>
      </p>
      <p>
        背景色とタイトルの色を変える。<br>
        指定した背景色の色を元に、タイトルの色は自動調整される。
      </p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-top-app-bar-icon-states-color($containerColor);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<rs-app-bar class="app-bar -fill-color-accessible">\n' +
        '   <rs-app-bar-nav class="nav"></rs-app-bar-nav>\n' +
        '   <rs-app-bar-title class="title">タイトル</rs-app-bar-title>\n' +
        '   <rs-app-bar-actions class="actions">\n' +
        '       <rs-app-bar-item class="item -cut"></rs-app-bar-item>\n' +
        '       <rs-app-bar-item class="item -copy"></rs-app-bar-item>\n' +
        '   </rs-app-bar-actions>\n' +
        '</rs-app-bar>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/top-app-bar/rs-top-app-bar.scss\';\n\n' +
        '.app-bar {\n' +
        '   &.-fill-color-accessible {\n' +
        '      @include rs-top-app-bar-fill-color-accessible(beige);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('背景色とタイトルの色を変える', () => {
    return `
      <p>
        <rs-app-bar class="app-bar -fill-color-accessible">
          <rs-app-bar-nav class="nav"></rs-app-bar-nav>
          <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
          <rs-app-bar-actions class="actions">
            <rs-app-bar-item class="item -cut"></rs-app-bar-item>
            <rs-app-bar-item class="item -copy"></rs-app-bar-item>
          </rs-app-bar-actions>
        </rs-app-bar>
      </p>
      <p>
        背景色とタイトルの色を変える。<br>
        指定した背景色の色を元に、タイトルの色は自動調整される。
      </p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-top-app-bar-fill-color-accessible($containerColor);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<rs-app-bar class="app-bar -fill-color-accessible">\n' +
        '   <rs-app-bar-nav class="nav"></rs-app-bar-nav>\n' +
        '   <rs-app-bar-title class="title">タイトル</rs-app-bar-title>\n' +
        '   <rs-app-bar-actions class="actions">\n' +
        '       <rs-app-bar-item class="item -cut"></rs-app-bar-item>\n' +
        '       <rs-app-bar-item class="item -copy"></rs-app-bar-item>\n' +
        '   </rs-app-bar-actions>\n' +
        '</rs-app-bar>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/top-app-bar/rs-top-app-bar.scss\';\n\n' +
        '.app-bar {\n' +
        '   &.-fill-color-accessible {\n' +
        '      @include rs-top-app-bar-fill-color-accessible(beige);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('アップバーの角の丸みを変える', () => {
    return `
      <p>
        <rs-app-bar class="app-bar -short -shape-radiu">
          <rs-app-bar-nav class="nav"></rs-app-bar-nav>
          <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
          <rs-app-bar-actions class="actions">
            <rs-app-bar-item class="item -cut"></rs-app-bar-item>
            <rs-app-bar-item class="item -copy"></rs-app-bar-item>
          </rs-app-bar-actions>
        </rs-app-bar>
      </p>
      <p>
        アップバーの角の丸みを指定したサイズに変える。<br>
        タイプがshortの時のみ。
      </p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-top-app-bar-short-shape-radius($radius);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<rs-app-bar class="app-bar -short -shape-radius">\n' +
        '   <rs-app-bar-nav class="nav"></rs-app-bar-nav>\n' +
        '   <rs-app-bar-title class="title">タイトル</rs-app-bar-title>\n' +
        '   <rs-app-bar-actions class="actions">\n' +
        '       <rs-app-bar-item class="item -cut"></rs-app-bar-item>\n' +
        '       <rs-app-bar-item class="item -copy"></rs-app-bar-item>\n' +
        '   </rs-app-bar-actions>\n' +
        '</rs-app-bar>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/top-app-bar/rs-top-app-bar.scss\';\n\n' +
        '.app-bar {\n' +
        '   &.-shape-radiu {\n' +
        '      @include rs-top-app-bar-short-shape-radius(20px);\n' +
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
  .add('ナビゲーションのアイコンを設定する', () => {
    return `
      <p>
        <rs-app-bar class="app-bar -short -shape-radiu">
          <rs-app-bar-nav class="nav"></rs-app-bar-nav>
          <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
          <rs-app-bar-actions class="actions">
            <rs-app-bar-item class="item -cut"></rs-app-bar-item>
            <rs-app-bar-item class="item -copy"></rs-app-bar-item>
          </rs-app-bar-actions>
        </rs-app-bar>
      </p>
      <p>
        アップバーの角の丸みを指定したサイズに変える。<br>
        タイプがshortの時のみ。
      </p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-top-rs-app-bar-nav-icon-image($radius);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<rs-app-bar class="app-bar -short -shape-radius">\n' +
        '   <rs-app-bar-nav class="nav"></rs-app-bar-nav>\n' +
        '   <rs-app-bar-title class="title">タイトル</rs-app-bar-title>\n' +
        '   <rs-app-bar-actions class="actions">\n' +
        '       <rs-app-bar-item class="item -cut"></rs-app-bar-item>\n' +
        '       <rs-app-bar-item class="item -copy"></rs-app-bar-item>\n' +
        '   </rs-app-bar-actions>\n' +
        '</rs-app-bar>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/top-app-bar/rs-top-app-bar.scss\';\n\n' +
        '.app-bar {\n' +
        '   &.-shape-radiu {\n' +
        '      @include rs-top-app-bar-short-shape-radius(20px);\n' +
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
  .add('アクションのアイコンを設定する', () => {
    return `
      <p>
        <rs-app-bar class="app-bar -short -shape-radiu">
          <rs-app-bar-nav class="nav"></rs-app-bar-nav>
          <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
          <rs-app-bar-actions class="actions">
            <rs-app-bar-item class="item -cut"></rs-app-bar-item>
            <rs-app-bar-item class="item -copy"></rs-app-bar-item>
          </rs-app-bar-actions>
        </rs-app-bar>
      </p>
      <p>
        アップバーの角の丸みを指定したサイズに変える。<br>
        タイプがshortの時のみ。
      </p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-top-app-bar-action-icon-image($radius);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<rs-app-bar class="app-bar -short -shape-radius">\n' +
        '   <rs-app-bar-nav class="nav"></rs-app-bar-nav>\n' +
        '   <rs-app-bar-title class="title">タイトル</rs-app-bar-title>\n' +
        '   <rs-app-bar-actions class="actions">\n' +
        '       <rs-app-bar-item class="item -cut"></rs-app-bar-item>\n' +
        '       <rs-app-bar-item class="item -copy"></rs-app-bar-item>\n' +
        '   </rs-app-bar-actions>\n' +
        '</rs-app-bar>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/top-app-bar/rs-top-app-bar.scss\';\n\n' +
        '.app-bar {\n' +
        '   &.-shape-radiu {\n' +
        '      @include rs-top-app-bar-short-shape-radius(20px);\n' +
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






