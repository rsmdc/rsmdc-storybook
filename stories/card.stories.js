import { storiesOf } from '@storybook/html'
import { CardActions, CardMedia, CardDescription, CardSubtitle, CardTitle, CardHeader, CardContents, Card } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'

window.customElements.define('card-actions', CardActions)
window.customElements.define('card-media', CardMedia)
window.customElements.define('card-description', CardDescription)
window.customElements.define('card-subtitle', CardSubtitle)
window.customElements.define('card-title', CardTitle)
window.customElements.define('card-header', CardHeader)
window.customElements.define('card-contents', CardContents)
window.customElements.define('x-card', Card)

storiesOf('Components|Card', module)
  .addDecorator(withLinks)
  .add('概要', () => `


  `)
  .add('使い方', () => `
    <h4>使い方</h4>
    ${copyCodeBlock(
      '<x-card class="my-card">\n' +
      '   <card-contents class="contents">\n' +
      '      <card-media class="media" />\n' +
      '      <card-header class="header">\n' +
      '         <card-title>タイトル</card-title>\n' +
      '         <card-subtitle>サブタイトル</card-subtitle>\n' +
      '      </card-header>\n' +
      '      <card-description class="description">説明</card-description>\n' +
      '   </card-contents>\n' +
      '   <card-actions class="actions">\n' +
      '       <x-button>ボタン</x-button>\n' +
      '       <x-button class="icon" />\n' +
      '   </card-actions>\n' +
      '</x-card>\n',
      { lang: 'html' }
    )}
    ${copyCodeBlock(
      '.my-card {\n' +
      '   @include rs-card-size(350px);\n' +
      '   > .contents > .media {\n' +
      '      @include rs-card-media-type(16-9);\n' +
      '      @include rs-card-media-image(url(\'example.png\'));\n' +
      '   }\n' +
      '   > .actions > .icon {\n' +
      '      @include rs-button-icon-image(url(\'icon.png\'));\n' +
      '   }\n' +
      '}',
      { lang: 'scss' }
    )}
    <h4>HTML要素</h4>
    <p>custom elementsを<code>x</code>と<code>card</code>のプレフィックスをつけて定義した前提です。<br>
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
      <td>x-card</td>
      <td>カード本体を表示します</td>
      <td>
        <ul>
          <li><code>card-contents</code></li>
          <li><code>card-media</code></li>
          <li><code>card-header</code></li>
          <li><code>card-description</code></li>
          <li><code>card-actions</code></li>
        </ul>
      </td>
      <td>-</td>
    </tr>
    <tr>
      <td>card-contens</td>
      <td>カードの主要エリアを示します</td>
      <td>
        <ul>
          <li><code>card-media</code></li>
          <li><code>card-header</code></li>
          <li><code>card-description</code></li>
        </ul>
      </td>
      <td>主要エリアにはリップルがつきます<br>※主要エリアは必須ではありません</td>
    </tr>
    <tr>
      <td>card-media</td>
      <td>カードの画像を表示します</td>
      <td>テキスト</td>
      <td>テキストは画像のタイトルを示します</td>
    </tr>
    <tr>
      <td>card-header</td>
      <td>カードのヘッダーを表示します</td>
      <td>
        <ul>
          <li><code>card-title</code></li>
          <li><code>card-subtitle</code></li>
        </ul>
      </td>
      <td>-</td>
    </tr>
    <tr>
      <td>card-title</td>
      <td>カードのタイトルを表示します</td>
      <td>テキスト</td>
      <td>-</td>
    </tr>
    <tr>
      <td>card-subtitle</td>
      <td>カードのサブタイトルを表示します</td>
      <td>テキスト</td>
      <td>-</td>
    </tr>
    <tr>
      <td>card-description</td>
      <td>カードの説明部分を表示します</td>
      <td>テキストなど全て可</td>
      <td>-</td>
    </tr>
    <tr>
      <td>card-actions</td>
      <td>カードのアクション部分を表示します</td>
      <td><code>x-button</code></td>
      <td>-</td>
    </tr>
    </table>
    <h4>HTML属性</h4>
    <p>なし</p>
  `)

storiesOf('Components|Card/スタイルのカスタマイズ', module)
  .add('カードの背景色を変える', () => `
    @include rs-card-title-ink-color($color)；
  `)
  .add('タイトルの色を変える', () => `
    @include rs-card-title-ink-color($color)；
  `)
  .add('サブタイトルの色を変える', () => `
    @include rs-card-subtitle-ink-color($color)；
  `)
  .add('説明部分の色を変える', () => `
    @include rs-card-description-ink-color($color)；
  `)
  .add('画像タイトルの色を変える', () => `
    @include rs-card-media-content-ink-color($color)；
  `)
  .add('カード全体のサイズを変える', () => `
    @include rs-card-size($width);
  `)
  .add('画像を設定する', () => `
    @include rs-card-media-image($url)；
  `)
  .add('画像のサイズを設定する', () => `
    @include rs-card-media-type($type); square, 16-9 決められたアスペクト比<br>
    @include rs-card-media-aspect-ratio($X, $y); アスペクト比カスタマイズできる<br>
  `)
  .add('カードに枠線をつける', () => `
    @include rs-card-type($type); outlinedのみ
  `)
  .add('ボタン幅をアクションエリア幅に合わせる', () => `
    @include rs-card-actions-type($type); full-bleedのみ
  `)
  .add('カードの角の丸みを変える', () => `
    @include rs-card-shape-radius($radius)；
  `)




