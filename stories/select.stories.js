import { storiesOf } from '@storybook/html'
import { TopAppBarActionItem, TopAppBarActions, TopAppBarTitle, TopAppBarNav, TopAppBar } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

const customElement = require('@rsmdc/select/loader')
customElement.defineCustomElements(window)

storiesOf('Components|Select', module)
  .addDecorator(withLinks)
  .add('概要', () => ``)
  .add('使用方法', () => `
    <rs-select class="food-select" label="Pick a Food Group">
      <option value=""></option>
      <option value="grains"> 
        Bread, Cereal, Rice, and Pasta
      </option>
      <option value="vegetables" disabled>
        Vegetables
      </option>
      <option value="fruit">
        Fruit
      </option> 
    </rs-select>
    <h4>使用方法</h4>
    ${copyCodeBlock(
` <rs-select class="food-select" label="Pick a Food Group">
    <option value=""></option>
    <option value="grains">Bread, Cereal, Rice, and Pasta</option>
    <option value="vegetables" disabled>Vegetables</option>
    <option value="fruit">Fruits</option> 
  </rs-select>`,
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
        <td>rs-select</td>
        <td>セレクト本体を表示します</td>
        <td>option</td>
        <td>-</td>
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
        <td>label</td>
        <td>ラベルを表示します</td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>name</td>
        <td>nameを設定します</td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>value</td>
        <td>初期値を設定します</td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>オプションを無効にします</td>
        <td>Boolean</td>
        <td>optionに付けます</td>
      </tr>
      <tr>
        <td>selected</td>
        <td>オブションを選択状態にします</td>
        <td>Boolean</td>
        <td>optionに付けます</td>
      </tr>
    </table>
  `)

storiesOf('Components|Select/スタイルのカスタマイズ/セレクトのタイプを変える', module)
  .add('default', () => `
    <h4>default</h4>
    <h4>使用するmixin</h4>
    <p>なし</p>
  `)
  .add('outlined', () => `
    <h4>outlined</h4>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-type($type)`, { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`@import "@rsmdc/select/rs-select.scss";

rs-select {
  @include rs-select-type(outlined);
}`, 
      { lang: 'scss' }
    )}
`)

storiesOf('Components|Select/スタイルのカスタマイズ', module)
  .add('選択したテキストの色を変える', () => `
    <h4>選択したテキストの色を変える</h4>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-ink-color($color)`, { lang: 'scss' }
    )}
    ${copyCodeBlock(
`@import "@rsmdc/select/rs-select.scss";

rs-select {
  @include rs-select-ink-color(pink);
}`, 
      { lang: 'scss' }
    )}
  `)
  .add('背景色を変える', () => `
    <h4>背景色を変える</h4>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-container-fill-color($color)`, { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`@import "@rsmdc/select/rs-select.scss";

rs-select {
  @include rs-select-container-fill-color(beige);
}`, 
      { lang: 'scss' }
    )}
  `)
  .add('ラベルの色を変える', () => `
    <h4>ラベルの色を変える</h4>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-label-color($color)`, { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
  `@import "@rsmdc/select/rs-select.scss";

rs-select {
  @include rs-select-label-color(green);
}`, 
      { lang: 'scss' }
    )}
  `)
  .add('フォーカス時のラベルの色を変える', () => `
    <h4>フォーカス時のラベルの色を変える</h4>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-focused-label-color($color)`, { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`@import "@rsmdc/select/rs-select.scss";

rs-select {
  @include rs-select-focused-label-color(aqua);
}`, 
      { lang: 'scss' }
    )}
  `)  
  .add('下線の色を変える', () => `
    <h4>下線の色を変える</h4>
    <p>タイプがdefaultの時に使用</p>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-bottom-line-color($color)`, { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`@import "@rsmdc/select/rs-select.scss";

rs-select {
  @include rs-select-bottom-line-color(green);
}`, 
      { lang: 'scss' }
    )}
  `) 
  .add('ホバー時の下線の色を変える', () => `
    <h4>ホバー時の下線の色を変える</h4>
    <p>タイプがdefaultの時に使用</p>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-hover-bottom-line-color($color)`, { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`@import "@rsmdc/select/rs-select.scss";

rs-select {
  @include rs-select-hover-bottom-line-color(aqua);
}`, 
      { lang: 'scss' }
    )}
  `) 
  .add('フォーカス時の下線の色を変える', () => `
    <h4>フォーカス時の下線の色を変える</h4>
    <p>タイプがdefaultの時に使用</p>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-focused-bottom-line-color($color)`, { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`@import "@rsmdc/select/rs-select.scss";

rs-select {
  @include rs-select-focused-bottom-line-color(aqua);
}`, 
      { lang: 'scss' }
    )}
  `)  
  .add('枠線の色を変える', () => `
    <h4>枠線の色を変える</h4>
    <p>タイプがoutlinedの時に使用</p>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-outline-color($color)`, { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`@import "@rsmdc/select/rs-select.scss";

rs-select {
  @include rs-select-outline-color(green);
}`, 
      { lang: 'scss' }
    )}
  `)  
  .add('ホバー時の枠線の色を変える', () => `
    <h4>ホバー時の枠線の色を変える</h4>
    <p>タイプがoutlinedの時に使用</p>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-hover-outline-color($color)`, { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`@import "@rsmdc/select/rs-select.scss";

rs-select {
  @include rs-select-hover-outline-color(aqua);
}`, 
      { lang: 'scss' }
    )}
  `)
  .add('フォーカス時の枠線の色を変える', () => `
    <h4>フォーカス時の枠線の色を変える</h4>
    <p>タイプがoutlinedの時に使用</p>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-focused-outline-color($color)`, { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`@import "@rsmdc/select/rs-select.scss";

rs-select {
  @include rs-select-focused-outline-color(aqua);
}`, 
      { lang: 'scss' }
    )}
  `)  