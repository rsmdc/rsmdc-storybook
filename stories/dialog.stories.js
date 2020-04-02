import { storiesOf } from '@storybook/html'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'
const dialog = require('@rsmdc/dialog/loader')

import './css/style.scss'
import './css/dialog.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

dialog.defineCustomElements(window)

storiesOf('Components|Dialog', module)
  .addDecorator(withLinks)
  .add('概要', () => `
    <h4>Dialog</h4>
    <p>ダイアログは、ユーザーによる意思決定や追加情報の入力用などに表示される。</p>
    参考: <a href="https://material.io/components/dialogs/#">https://material.io/components/dialogs/#</a>

    <p>Dialogタイプ</p>
    <table>
      <tr>
        <th>タイプ</th>
        <th>概要</th>
      </tr>
      <tr>
        <td>normal</td>
        <td>アクション部分が横並びに表示されるダイアログ。</td>
      </tr>
      <tr>
        <td>stacked</td>
        <td>アクション部分が縦並びに表示されるダイアログ。</td>
      </tr>
    </table>
  `)
  .add('使用方法', () => `
    <h4>使用方法</h4>
    
    <rs-dialog class="info-dialog" opened>
      <rs-dialog-title>タイトル</rs-dialog-title>
      <rs-dialog-content>ダイアログの内容が入る</rs-dialog-content>
      <rs-button onclick="window.document.querySelector('.info-dialog').removeAttribute('opened')">OK</rs-button>
    </rs-dialog>

    ${copyCodeBlock(
`<rs-dialog class="info-dialog">
  <rs-dialog-title class="title">タイトル</rs-dialog-title>
  <rs-dialog-content class="content">ダイアログの内容が入る</rs-dialog-content>
  <rs-button class="button">ボタン1</rs-button>
  <rs-button class="button">ボタン2</rs-button>
</rs-dialog>
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
        <td>rs-dialog</td>
        <td>ダイアログ本体を表示します。</td>
        <td>
          <ul>
            <li>rs-dialog-title</li>
            <li>rs-dialog-content</li>
          </ul>
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-dialog-title</td>
        <td>タイトルを表示します。</td>
        <td>テキスト</td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-dialog-content</td>
        <td>コンテンツ部分を表示します。</td>
        <td>
          <ul>  
            <li>rs-list</li>
            <li>テキスト</li>
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
        <td>ダイアログを表示状態にします。</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
      <tr>
        <td>scrollable</td>
        <td>コンテンツが溢れる場合スクロール状態にします。</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
    </table>

    <h4>テーマ変数</h4>
    <p>
    　rs-dialogで使われるテーマ変数です。 <br>
    　下記変数に新しく色を指定することで、テーマカラーが上書きされます。
    </p>
    <table>
      <tr>
        <th>変数名</th>
        <th>説明</th>
      </tr>
      <tr>
        <td>$rs-theme-surface</td>
        <td>選択状態の背景色に関わります。</td>
      </tr>
      <tr>
        <td>$rs-theme-on-surface</td>
        <td>選択状態のテキストの色に関わります。</td>
      </tr>
    </table>
  `)

  storiesOf('Components|Dialog/スタイルのカスタマイズ/ダイアログのタイプを変える', module)

  .add('normal（デフォルト）', () => `
    <h4>normal</h4>
    <p>normalの場合mixinは不要。</p>
    <rs-dialog class="info-dialog" opened>
      <rs-dialog-title class="title">タイトル</rs-dialog-title>
      <rs-dialog-content class="content">ああああああああああ</rs-dialog-content>
      <rs-button class="button">cancel</rs-button>
      <rs-button class="button" onclick="window.document.querySelector('.info-dialog').removeAttribute('opened')">ok</rs-button>
    </rs-dialog>
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-dialog class="info-dialog" opened>
  <rs-dialog-title class="title">タイトル</rs-dialog-title>
  <rs-dialog-content class="content">ああああああああああ</rs-dialog-content>
  <rs-button class="button">cancel</rs-button>
  <rs-button class="button">ok</rs-button>
</rs-dialog>`,
      { lang: 'html' }
    )}
  `)

  .add('stacked', () => `
    <h4>stacked</h4>
    <p>アクション部分を縦並びに表示。</p>
    <rs-dialog class="info-dialog -stacked" opened>
      <rs-dialog-title class="title">タイトル</rs-dialog-title>
      <rs-dialog-content class="content">ああああああああああ</rs-dialog-content>
      <rs-button class="button">cancel</rs-button>
      <rs-button class="button" onclick="window.document.querySelector('.info-dialog').removeAttribute('opened')">ok</rs-button>
    </rs-dialog>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-dialog-type(stacked);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-dialog class="info-dialog -stacked" opened>
  <rs-dialog-title class="title">タイトル</rs-dialog-title>
  <rs-dialog-content class="content">ああああああああああ</rs-dialog-content>
  <rs-button class="button">cancel</rs-button>
  <rs-button class="button">ok</rs-button>
</rs-dialog>`,
    { lang: 'html' }
  )}
    ${copyCodeBlock(
`@import '@rsmdc/dialog/rs-dialog.scss';

.info-dialog {
  &.-stacked {
    @include rs-dialog-type(stacked);
  }
}
`,
      { lang: 'scss' }
    )}
  `)

  storiesOf('Components|Dialog/スタイルのカスタマイズ', module)
    
  .add('タイトルの色を変える', () => `
    <h4>タイトルの色を指定した色に変える。</h4>
    <rs-dialog class="info-dialog -title-orange" opened>
      <rs-dialog-title class="title">タイトル</rs-dialog-title>
      <rs-dialog-content class="content">ダイアログの内容が入る</rs-dialog-content>
      <rs-button class="button" onclick="window.document.querySelector('.info-dialog').removeAttribute('opened')">ok</rs-button>
    </rs-dialog>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-dialog-title-ink-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-dialog class="info-dialog -title-orange" opened>
  <rs-dialog-title class="title">タイトル</rs-dialog-title>
  <rs-dialog-content class="content">ダイアログの内容が入る</rs-dialog-content>
  <rs-button class="button">ok</rs-button>
</rs-dialog>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/dialog/rs-dialog.scss';

.info-dialog {
  &.-title-orange {
    @include rs-dialog-title-ink-color(orange);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $color: インクの色コード。 <br> 例）#ee00ce
      </li>
    </ul>
  `)

  .add('コンテンツのテキストの色を変える', () => `
    <h4>コンテンツのテキストの色を指定した色に変える。</h4>
    <rs-dialog class="info-dialog -text-orange" opened>
      <rs-dialog-title class="title">タイトル</rs-dialog-title>
      <rs-dialog-content class="content">ダイアログの内容が入る</rs-dialog-content>
      <rs-button class="button" onclick="window.document.querySelector('.info-dialog').removeAttribute('opened')">ok</rs-button>
    </rs-dialog>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-dialog-content-ink-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-dialog class="info-dialog -text-orange" opened>
  <rs-dialog-title class="title">タイトル</rs-dialog-title>
  <rs-dialog-content class="content">ダイアログの内容が入る</rs-dialog-content>
  <rs-button class="button">ok</rs-button>
</rs-dialog>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/dialog/rs-dialog.scss';

.info-dialog {
  &.-text-orange {
    @include rs-dialog-content-ink-color(orange);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $color: インクの色コード。 <br> 例）#ee00ce
      </li>
    </ul>
  `)

  .add('背景色を変える', () => `
    <h4>背景色を指定した色に変える。</h4>
    <rs-dialog class="info-dialog -fill-beige" opened>
      <rs-dialog-title class="title">タイトル</rs-dialog-title>
      <rs-dialog-content class="content">ダイアログの内容が入る</rs-dialog-content>
      <rs-button class="button" onclick="window.document.querySelector('.info-dialog').removeAttribute('opened')">ok</rs-button>
    </rs-dialog>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-dialog-container-fill-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-dialog class="info-dialog -fill-beige" opened>
<rs-dialog-title class="title">タイトル</rs-dialog-title>
<rs-dialog-content class="content">ダイアログの内容が入る</rs-dialog-content>
<rs-button class="button">ok</rs-button>
</rs-dialog>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/dialog/rs-dialog.scss';

.info-dialog {
  &.-fill-beige {
    @include rs-dialog-container-fill-color(#f3f3ae);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $color: インクの色コード。 <br> 例）#ee00ce
      </li>
    </ul>
  `)
    
  .add('仕切り線の色を変える', () => `
    <h4>仕切り線の色を指定した色に変える。</h4>
    <p>scrollable属性をつけた時に適用される。</p>
    <rs-dialog class="info-dialog -divider-orange" scrollable opened>
      <rs-dialog-title class="title">タイトル</rs-dialog-title>
        <rs-dialog-content class="content">
          Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry, who was a farmer, and Aunt Em, who was the farmer's wife. Their house was small, for the lumber to build it had to be carried by wagon many miles. There were four walls, a floor and a roof, which made one room; and this room contained a rusty looking cookstove, a cupboard for the dishes, a table, three or four chairs, and the beds. Uncle Henry and Aunt Em had a big bed in one corner, and Dorothy a little bed in another corner. There was no garret at all, and no cellar--except a small hole dug in the ground, called a cyclone cellar, where the family could go in case one of those great whirlwinds arose, mighty enough to crush any building in its path. It was reached by a trap door in the middle of the floor, from which a ladder led down into the small, dark hole.
          When Dorothy stood in the doorway and looked around, she could see nothing but the great gray prairie on every side. Not a tree nor a house broke the broad sweep of flat country that reached to the edge of the sky in all directions. The sun had baked the plowed land into a gray mass, with little cracks running through it. Even the grass was not green, for the sun had burned the tops of the long blades until they were the same gray color to be seen everywhere. Once the house had been painted, but the sun blistered the paint and the rains washed it away, and now the house was as dull and gray as everything else.
          When Aunt Em came there to live she was a young, pretty wife. The sun and wind had changed her, too. They had taken the sparkle from her eyes and left them a sober gray; they had taken the red from her cheeks and lips, and they were gray also. She was thin and gaunt, and never smiled now. When Dorothy, who was an orphan, first came to her, Aunt Em had been so startled by the child's laughter that she would scream and press her hand upon her heart whenever Dorothy's merry voice reached her ears; and she still looked at the little girl with wonder that she could find anything to laugh at.
          Uncle Henry never laughed. He worked hard from morning till night and did not know what joy was. He was gray also, from his long beard to his rough boots, and he looked stern and solemn, and rarely spoke.
        </rs-dialog-content>
      <rs-button class="button" onclick="window.document.querySelector('.info-dialog').removeAttribute('opened')">ok</rs-button>
    </rs-dialog>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-dialog-scroll-divider-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-dialog class="info-dialog -divider-orange" scrollable opened>
  <rs-dialog-title class="title">タイトル</rs-dialog-title>
  <rs-dialog-content class="content">
    Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry, who was a farmer, and Aunt Em, who was the farmer's wife. Their house was small, for the lumber to build it had to be carried by wagon many miles. There were four walls, a floor and a roof, which made one room; and this room contained a rusty looking cookstove, a cupboard for the dishes, a table, three or four chairs, and the beds. Uncle Henry and Aunt Em had a big bed in one corner, and Dorothy a little bed in another corner. There was no garret at all, and no cellar--except a small hole dug in the ground, called a cyclone cellar, where the family could go in case one of those great whirlwinds arose, mighty enough to crush any building in its path. It was reached by a trap door in the middle of the floor, from which a ladder led down into the small, dark hole.
    When Dorothy stood in the doorway and looked around, she could see nothing but the great gray prairie on every side. Not a tree nor a house broke the broad sweep of flat country that reached to the edge of the sky in all directions. The sun had baked the plowed land into a gray mass, with little cracks running through it. Even the grass was not green, for the sun had burned the tops of the long blades until they were the same gray color to be seen everywhere. Once the house had been painted, but the sun blistered the paint and the rains washed it away, and now the house was as dull and gray as everything else.
    When Aunt Em came there to live she was a young, pretty wife. The sun and wind had changed her, too. They had taken the sparkle from her eyes and left them a sober gray; they had taken the red from her cheeks and lips, and they were gray also. She was thin and gaunt, and never smiled now. When Dorothy, who was an orphan, first came to her, Aunt Em had been so startled by the child's laughter that she would scream and press her hand upon her heart whenever Dorothy's merry voice reached her ears; and she still looked at the little girl with wonder that she could find anything to laugh at.
    Uncle Henry never laughed. He worked hard from morning till night and did not know what joy was. He was gray also, from his long beard to his rough boots, and he looked stern and solemn, and rarely spoke.
  </rs-dialog-content>
  <rs-button class="button">ok</rs-button>
</rs-dialog>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/dialog/rs-dialog.scss';

.info-dialog {
  &.-divider-orange {
    @include rs-dialog-scroll-divider-color(orange);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $color: インクの色コード。 <br> 例）#ee00ce
      </li>
    </ul>
  `)
    
  .add('ダイアログの角の丸みを変える', () => `
    <h4>ダイアログの角の丸みを指定したサイズに変える。</h4>
    <rs-dialog class="info-dialog -radius" opened>
      <rs-dialog-title class="title">タイトル</rs-dialog-title>
        <rs-dialog-content class="content">コンテンツの内容が入る</rs-dialog-content>
      <rs-button class="button" onclick="window.document.querySelector('.info-dialog').removeAttribute('opened')">ok</rs-button>
    </rs-dialog>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include dialog-shape-radius($radius);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-dialog class="info-dialog -radius" opened>
  <rs-dialog-title class="title">タイトル</rs-dialog-title>
  <rs-dialog-content class="content">コンテンツの内容が入る</rs-dialog-content>
  <rs-button class="button">ok</rs-button>
</rs-dialog>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/dialog/rs-dialog.scss';

.info-dialog {
  &.-radius {
    @include rs-dialog-shape-radius(20px);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $radius: 角の丸みを指定。 <br> 例）20px
      </li>
    </ul>
  `)

  .add('ダイアログのサイズ（最小値）を変える', () => `
    <h4>ダイアログの横幅の最小値を指定したサイズに変える。</h4>
    <rs-dialog class="info-dialog -min-width" opened>
      <rs-dialog-title class="title">タイトル</rs-dialog-title>
        <rs-dialog-content class="content">コンテンツの内容が入る</rs-dialog-content>
      <rs-button class="button" onclick="window.document.querySelector('.info-dialog').removeAttribute('opened')">ok</rs-button>
    </rs-dialog>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-dialog-min-width($min-width);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-dialog class="info-dialog -min-width" opened>
  <rs-dialog-title class="title">タイトル</rs-dialog-title>
  <rs-dialog-content class="content">コンテンツの内容が入る</rs-dialog-content>
  <rs-button class="button">ok</rs-button>
</rs-dialog>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/dialog/rs-dialog.scss';

.info-dialog {
  &.-min-width {
    @include rs-dialog-min-width(500px);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $min-width: 横幅の最小値を指定。 <br> 例）500px
      </li>
    </ul>
  `)

  .add('ダイアログのサイズ（最大値）を変える', () => `
    <h4>ダイアログの横幅の最大値を指定したサイズに変える。</h4>
    <rs-dialog class="info-dialog -max-width" opened>
      <rs-dialog-title class="title">タイトル</rs-dialog-title>
        <rs-dialog-content class="content">コンテンツの内容が入る</rs-dialog-content>
      <rs-button class="button" onclick="window.document.querySelector('.info-dialog').removeAttribute('opened')">ok</rs-button>
    </rs-dialog>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-dialog-max-width($max-width);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-dialog class="info-dialog -max-width" opened>
  <rs-dialog-title class="title">タイトル</rs-dialog-title>
  <rs-dialog-content class="content">コンテンツの内容が入る</rs-dialog-content>
  <rs-button class="button">ok</rs-button>
</rs-dialog>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/dialog/rs-dialog.scss';

.info-dialog {
  &.-max-width {
    @include rs-dialog-max-width(200px);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $max-width: 横幅の最大値を指定。 <br> 例）200px
      </li>
    </ul>
  `)

  .add('ダイアログの高さを変える', () => `
    <h4>ダイアログの高さを指定したサイズに変える。</h4>
    <rs-dialog class="info-dialog -height" opened>
      <rs-dialog-title class="title">タイトル</rs-dialog-title>
        <rs-dialog-content class="content">
          Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry, who was a farmer, and Aunt Em, who was the farmer's wife. Their house was small, for the lumber to build it had to be carried by wagon many miles. There were four walls, a floor and a roof, which made one room; and this room contained a rusty looking cookstove, a cupboard for the dishes, a table, three or four chairs, and the beds. Uncle Henry and Aunt Em had a big bed in one corner, and Dorothy a little bed in another corner. There was no garret at all, and no cellar--except a small hole dug in the ground, called a cyclone cellar, where the family could go in case one of those great whirlwinds arose, mighty enough to crush any building in its path. It was reached by a trap door in the middle of the floor, from which a ladder led down into the small, dark hole.
          When Dorothy stood in the doorway and looked around, she could see nothing but the great gray prairie on every side. Not a tree nor a house broke the broad sweep of flat country that reached to the edge of the sky in all directions. The sun had baked the plowed land into a gray mass, with little cracks running through it. Even the grass was not green, for the sun had burned the tops of the long blades until they were the same gray color to be seen everywhere. Once the house had been painted, but the sun blistered the paint and the rains washed it away, and now the house was as dull and gray as everything else.
          When Aunt Em came there to live she was a young, pretty wife. The sun and wind had changed her, too. They had taken the sparkle from her eyes and left them a sober gray; they had taken the red from her cheeks and lips, and they were gray also. She was thin and gaunt, and never smiled now. When Dorothy, who was an orphan, first came to her, Aunt Em had been so startled by the child's laughter that she would scream and press her hand upon her heart whenever Dorothy's merry voice reached her ears; and she still looked at the little girl with wonder that she could find anything to laugh at.
          Uncle Henry never laughed. He worked hard from morning till night and did not know what joy was. He was gray also, from his long beard to his rough boots, and he looked stern and solemn, and rarely spoke.
        </rs-dialog-content>
      <rs-button class="button" onclick="window.document.querySelector('.info-dialog').removeAttribute('opened')">ok</rs-button>
    </rs-dialog>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-dialog-max-height($max-height);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-dialog class="info-dialog -height" opened>
  <rs-dialog-title class="title">タイトル</rs-dialog-title>
  <rs-dialog-content class="content">
    Dorothy lived in the midst of the great Kansas prairies, with Uncle Henry, who was a farmer, and Aunt Em, who was the farmer's wife. Their house was small, for the lumber to build it had to be carried by wagon many miles. There were four walls, a floor and a roof, which made one room; and this room contained a rusty looking cookstove, a cupboard for the dishes, a table, three or four chairs, and the beds. Uncle Henry and Aunt Em had a big bed in one corner, and Dorothy a little bed in another corner. There was no garret at all, and no cellar--except a small hole dug in the ground, called a cyclone cellar, where the family could go in case one of those great whirlwinds arose, mighty enough to crush any building in its path. It was reached by a trap door in the middle of the floor, from which a ladder led down into the small, dark hole.
    When Dorothy stood in the doorway and looked around, she could see nothing but the great gray prairie on every side. Not a tree nor a house broke the broad sweep of flat country that reached to the edge of the sky in all directions. The sun had baked the plowed land into a gray mass, with little cracks running through it. Even the grass was not green, for the sun had burned the tops of the long blades until they were the same gray color to be seen everywhere. Once the house had been painted, but the sun blistered the paint and the rains washed it away, and now the house was as dull and gray as everything else.
    When Aunt Em came there to live she was a young, pretty wife. The sun and wind had changed her, too. They had taken the sparkle from her eyes and left them a sober gray; they had taken the red from her cheeks and lips, and they were gray also. She was thin and gaunt, and never smiled now. When Dorothy, who was an orphan, first came to her, Aunt Em had been so startled by the child's laughter that she would scream and press her hand upon her heart whenever Dorothy's merry voice reached her ears; and she still looked at the little girl with wonder that she could find anything to laugh at.
    Uncle Henry never laughed. He worked hard from morning till night and did not know what joy was. He was gray also, from his long beard to his rough boots, and he looked stern and solemn, and rarely spoke.
  </rs-dialog-content>
  <rs-button class="button">ok</rs-button>
</rs-dialog>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/dialog/rs-dialog.scss';

.info-dialog {
  &.-height {
    @include rs-dialog-max-height(250px);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $max-height: 高さを指定。 <br> 250px
      </li>
    </ul>
  `)
