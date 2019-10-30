import { storiesOf } from '@storybook/html'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'
const snackbar = require('@rsmdc/snackbar/loader')

import './css/style.scss'
import './css/snackbar.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

snackbar.defineCustomElements(window)

storiesOf('Components|Snackbar', module)
  .addDecorator(withLinks)
  .add('概要', () => `
    <h4>Snackbar</h4>
    <p>アプリプロセスに関する簡単なメッセージを表示する</p>
    参考: <a href="https://material.io/design/components/snackbars.html">https://material.io/design/components/snackbars.html</a>
    <p>スナックバーのタイプ</p>
    <ul>
      <li>normal（デフォルト）</li>
      <li>stacked：テキストとアクション部分を改行して表示</li>
      <li>leading：スナックバー本体を左端に表示</li>
    </ul>
  `)
  .add('使用方法', () => `
    <h4>使用方法</h4>
    <rs-snackbar class="snack-bar" opened>
      <rs-snackbar-text>sample</rs-snackbar-text>
      <rs-button onclick="window.document.querySelector('.snack-bar').removeAttribute('opened')">button</rs-button>
    </rs-snackbar>
    ${copyCodeBlock(
`<rs-snackbar class="snack-bar" opened>
  <rs-snackbar-text>sample</rs-snackbar-text>
  <rs-button>button</rs-button>
</rs-snackbar>
`,
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
        <td>rs-snackbar</td>
        <td>スナックバー本体を表示します</td>
        <td>rs-snackbar-text</td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-snackbar-text</td>
        <td>テキスト部分を表示します</td>
        <td>テキスト</td>
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
        <td>スナックバーを表示状態にします。</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
    </table>
    <h4>テーマ変数</h4>
    <p>
      rs-snackbarで使われるテーマ変数です。 <br>
      下記変数に新しく色を指定することで、テーマカラーが上書きされます。
    </p>
    <table>
      <tr>
        <th>変数名</th>
        <th>説明</th>
      </tr>
      <tr>
        <td>$rs-theme-on-surface</td>
        <td>背景色に関わります。</td>
      </tr>
    </table>
  `)

  storiesOf('Components|Snackbar/スタイルのカスタマイズ/スナックバーのタイプを変える', module)
  .add('normal（デフォルト）', () => `
  <h4>normal</h4>
  <p>normalの場合mixinは不要。</p>
  <rs-snackbar class="snack-bar" opened>
    <rs-snackbar-text class="label">テキスト</rs-snackbar-text>
    <rs-button class="button" onclick="window.document.querySelector('.info-dialog').removeAttribute('opened')">button</rs-button>
  </rs-snackbar>
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-snackbar class="snack-bar" opened>
  <rs-snackbar-text class="label">テキスト</rs-snackbar-text>
  <rs-button class="button">button</rs-button>
</rs-snackbar>`,
      { lang: 'html' }
    )}
  `)
  
  .add('stacked', () => `
    <h4>stacked</h4>
    <p>
      テキスト部分とアクション部分を縦並びに表示。<br>
      leadingとの併用可能。
    </p>
    <rs-snackbar class="snack-bar -stacked" opened>
      <rs-snackbar-text class="label">テキスト</rs-snackbar-text>
      <rs-button class="button" onclick="window.document.querySelector('.snack-bar').removeAttribute('opened')">button</rs-button>
    </rs-snackbar>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-snackbar-type(stacked);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-snackbar class="snack-bar -stacked" opened>
  <rs-snackbar-text class="label">テキスト</rs-snackbar-text>
  <rs-button class="button">button</rs-button>
</rs-snackbar>`,
      { lang: 'html' }
  )}
    ${copyCodeBlock(
`@import '@rsmdc/snackbar/rs-snackbar.scss';

.snack-bar {
  &.-stacked {
    @include rs-snackbar-type(stacked);
  }
}
`,
      { lang: 'scss' }
    )}
  `)

  .add('leading', () => `
    <h4>leading</h4>
    <p>
      スナックバーを左端に表示。 <br>
      stackedとの併用可能。
    </p>
    <rs-snackbar class="snack-bar -leading" opened>
      <rs-snackbar-text class="label">テキスト</rs-snackbar-text>
      <rs-button class="button" onclick="window.document.querySelector('.snack-bar').removeAttribute('opened')">button</rs-button>
    </rs-snackbar>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-snackbar-type(leading);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-snackbar class="snack-bar -leading" opened>
  <rs-snackbar-text class="label">テキスト</rs-snackbar-text>
  <rs-button class="button">button</rs-button>
</rs-snackbar>`,
      { lang: 'html' }
  )}
    ${copyCodeBlock(
`@import '@rsmdc/snackbar/rs-snackbar.scss';

.snack-bar {
  &.-leading {
    @include rs-snackbar-type(leading);
  }
}
`,
      { lang: 'scss' }
    )}
  `)
  
  storiesOf('Components|Snackbar/スタイルのカスタマイズ', module)
  .add('テキストの色を変える', () => `
    <h4>テキストの色を指定した色に変える。</h4>
    <rs-snackbar class="snack-bar -text-orange" opened>
      <rs-snackbar-text class="label">テキスト</rs-snackbar-text>
      <rs-button class="button" onclick="window.document.querySelector('.snack-bar').removeAttribute('opened')">button</rs-button>
    </rs-snackbar>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-snackbar-label-ink-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-snackbar class="snack-bar" opened>
  <rs-snackbar-text class="label">テキスト</rs-snackbar-text>
  <rs-button class="button">button</rs-button>
</rs-snackbar>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/snackbar/rs-snackbar.scss';

.snack-bar {
  &.-text-orange {
    @include rs-snackbar-label-ink-color(orange);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $color: インクの色コード <br> 例）#ee00ce
      </li>
    </ul>
  `)
    
  .add('背景色を変える', () => `
    <h4>背景色を指定した色に変える。</h4>
    <rs-snackbar class="snack-bar" opened>
      <rs-snackbar-text class="label">テキスト</rs-snackbar-text>
      <rs-button class="button" onclick="window.document.querySelector('.snack-bar').removeAttribute('opened')">button</rs-button>
    </rs-snackbar>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-snackbar-fill-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-snackbar class="snack-bar -fill-beige" opened>
  <rs-snackbar-text class="label">テキスト</rs-snackbar-text>
  <rs-button class="button">button</rs-button>
</rs-snackbar>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/snackbar/rs-snackbar.scss';

.snack-bar {
  &.-fill-beige {
    @include rs-snackbar-fill-color(beige);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $color: インクの色コード <br> 例）#ee00ce
      </li>
    </ul>
  `)

  .add('スナックバーの角の丸みを変える', () => `
    <h4>スナックバーの角の丸みを指定したサイズに変える。</h4>
    <rs-snackbar class="snack-bar -radius" opened>
      <rs-snackbar-text class="label">テキスト</rs-snackbar-text>
      <rs-button class="button" onclick="window.document.querySelector('.snack-bar').removeAttribute('opened')">button</rs-button>
    </rs-snackbar>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-snackbar-shape-radius($radius);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-snackbar class="snack-bar -radius" opened>
  <rs-snackbar-text class="label">テキスト</rs-snackbar-text>
  <rs-button class="button">button</rs-button>
</rs-snackbar>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/snackbar/rs-snackbar.scss';

.snack-bar {
  &.-radius {
    @include rs-snackbar-shape-radius(20px);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $radius: 角の丸みを指定 <br> 例）20px
      </li>
    </ul>
  `)

  .add('サイズを変える（最小値）', () => `
    <h4>横幅の最小値を指定したサイズに変える。</h4>
    <rs-snackbar class="snack-bar -min-width" opened>
      <rs-snackbar-text class="label">テキスト</rs-snackbar-text>
      <rs-button class="button" onclick="window.document.querySelector('.snack-bar').removeAttribute('opened')">button</rs-button>
    </rs-snackbar>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-snackbar-min-width($width)`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-snackbar class="snack-bar -min-width" opened>
  <rs-snackbar-text class="label">テキスト</rs-snackbar-text>
  <rs-button class="button">button</rs-button>
</rs-snackbar>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/snackbar/rs-snackbar.scss';

.snack-bar {
  &.-min-width {
    @include rs-snackbar-min-width(500px);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $width: 横幅の最小値を指定 <br> 例）180px;
      </li>
    </ul>
  `)

  .add('サイズを変える（最大値）', () => `
    <h4>横幅の最大値を指定したサイズに変える。</h4>
    <rs-snackbar class="snack-bar -max-width" opened>
      <rs-snackbar-text class="label">テキスト</rs-snackbar-text>
      <rs-button class="button" onclick="window.document.querySelector('.snack-bar').removeAttribute('opened')">button</rs-button>
    </rs-snackbar>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-snackbar-max-width($width)`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-snackbar class="snack-bar -max-width" opened>
  <rs-snackbar-text class="label">テキスト</rs-snackbar-text>
  <rs-button class="button">button</rs-button>
</rs-snackbar>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/snackbar/rs-snackbar.scss';

.snack-bar {
  &.-max-width {
    @include rs-snackbar-max-width(500px);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $width: 横幅の最大値を指定 <br> 例）180px;
      </li>
    </ul>
  `)

  .add('スナックバーの高さを変える', () => `
    <h4>高さを指定した高さ（重なり順）に変える。</h4>
    <rs-snackbar class="snack-bar -elevation" opened>
      <rs-snackbar-text class="label">テキスト</rs-snackbar-text>
      <rs-button class="button" onclick="window.document.querySelector('.snack-bar').removeAttribute('opened')">button</rs-button>
    </rs-snackbar>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-snackbar-elevation($z-index);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-snackbar class="snack-bar -elevation" opened>
  <rs-snackbar-text class="label">テキスト</rs-snackbar-text>
  <rs-button class="button">button</rs-button>
</rs-snackbar>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/snackbar/rs-snackbar.scss';

.snack-bar {
  &.-elevation {
    @include rs-snackbar-elevation(5);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $z-index: 重なり順を指定。
      </li>
    </ul>
  `)

  .add('スナックバーの位置を変える', () => `
    <h4>スナックバーとビューポートの間の距離を指定した距離に変える。</h4>
    <rs-snackbar class="snack-bar -margin" opened>
      <rs-snackbar-text class="label">テキスト</rs-snackbar-text>
      <rs-button class="button" onclick="window.document.querySelector('.snack-bar').removeAttribute('opened')">button</rs-button>
    </rs-snackbar>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-snackbar-viewport-margin($margin);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-snackbar class="snack-bar -margin" opened>
  <rs-snackbar-text class="label">テキスト</rs-snackbar-text>
  <rs-button class="button">button</rs-button>
</rs-snackbar>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/snackbar/rs-snackbar.scss';

.snack-bar {
  &.-margin {
    @include rs-snackbar-viewport-margin(90px);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $margin: ビューポートからの距離を指定<br> 例）90px;
      </li>
    </ul>
  `)