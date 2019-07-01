import { storiesOf } from '@storybook/html'
import { TopAppBarActionItem, TopAppBarActions, TopAppBarTitle, TopAppBarNav, TopAppBar } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'
import './css/select.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

const customElement = require('@rsmdc/select/loader')
customElement.defineCustomElements(window)

storiesOf('Components|Select', module)
  .addDecorator(withLinks)
  .add('概要', () => `
    <h4>Select</h4>
    <p>
      セレクトボックスはいくつかの選択肢から一つを選択する時に使われる。<br>
      ラジオボタンと似ているが、選択肢の表示形式がリストやコンボボックスのように表示される。
    </p>
    <p>タイプ</p>
    <ul>
      <li>default</li>
      <li>outlined：枠線がつく</li>
    </ul>
  `)
  .add('使用方法', () => `
    <rs-select class="food-select" label="Pick a Food Group">
      <option value="grains"> Bread, Cereal, Rice, and Pasta</option>
      <option value="vegetables" disabled>Vegetables</option>
      <option value="fruit">Fruit</option> 
    </rs-select>
    <h4>使用方法</h4>
    ${copyCodeBlock(
` <rs-select class="food-select" label="Pick a Food Group">
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
    <p>デフォルトの場合mixinは不必要。</p>
    <rs-select class="food-select" label="Pick a Food Group">
      <option value="grains">Bread, Cereal, Rice, and Pasta</option>
      <option value="vegetables" disabled>Vegetables</option>
      <option value="fruit">Fruits</option> 
    </rs-select>
    <h4>使用方法</h4>
    ${copyCodeBlock(
      '<rs-select class="food-select" label="Pick a Food Group">\n' +
      '   <option value="grains">Bread, Cereal, Rice, and Pasta</option>\n' +
      '   <option value="vegetables" disabled>Vegetables</option>\n' +
      '   <option value="fruit">Fruits</option>\n' + 
      '</rs-select>',
      { lang: 'html' }
    )}
  `)
  .add('outlined', () => `
    <h4>outlined</h4>
    <rs-select class="food-select -outlined" label="Pick a Food Group">
      <option value="grains">Bread, Cereal, Rice, and Pasta</option>
      <option value="vegetables" disabled>Vegetables</option>
      <option value="fruit">Fruits</option> 
    </rs-select>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-type($type);`, { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      '<rs-select class="food-select -outlined" label="Pick a Food Group">\n' +
      '   <option value="grains">Bread, Cereal, Rice, and Pasta</option>\n' +
      '   <option value="vegetables" disabled>Vegetables</option>\n' +
      '   <option value="fruit">Fruits</option>\n' + 
      '</rs-select>',
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import "@rsmdc/select/rs-select.scss";

.food-select {
  &.-outlined {
    @include rs-select-type(outlined);
  }
}`, 
        { lang: 'scss' }
    )}
  `)

storiesOf('Components|Select/スタイルのカスタマイズ', module)
  .add('選択したテキストの色を変える', () => `
    <h4>選択したテキストの色を変える</h4>
    <rs-select class="food-select -ink-orange" label="Pick a Food Group">
      <option value="grains">Bread, Cereal, Rice, and Pasta</option>
      <option value="vegetables" disabled>Vegetables</option>
      <option value="fruit">Fruits</option> 
    </rs-select>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-ink-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      '<rs-select class="food-select -ink-orange" label="Pick a Food Group">\n' +
      '   <option value="grains">Bread, Cereal, Rice, and Pasta</option>\n' +
      '   <option value="vegetables" disabled>Vegetables</option>\n' +
      '   <option value="fruit">Fruits</option>\n' + 
      '</rs-select>',
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import "@rsmdc/select/rs-select.scss";

.food-select {
  &.-ink-orange {
    @include rs-select-ink-color(orange);
  }
}`, 
      { lang: 'scss' }
    )}
  `)
  .add('背景色を変える', () => `
    <h4>背景色を変える</h4>
    <rs-select class="food-select -fill-beige" label="Pick a Food Group">
      <option value="grains">Bread, Cereal, Rice, and Pasta</option>
      <option value="vegetables" disabled>Vegetables</option>
      <option value="fruit">Fruits</option> 
    </rs-select>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-container-fill-color($color);`, { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      '<rs-select class="food-select -fill-beige" label="Pick a Food Group">\n' +
      '   <option value="grains">Bread, Cereal, Rice, and Pasta</option>\n' +
      '   <option value="vegetables" disabled>Vegetables</option>\n' +
      '   <option value="fruit">Fruits</option>\n' + 
      '</rs-select>',
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import "@rsmdc/select/rs-select.scss";

.food-select {
  &.-fill-beige {
    @include rs-select-container-fill-color(beige);
  }
}`, 
        { lang: 'scss' }
    )}
  `)
  .add('ラベルの色を変える', () => `
    <h4>ラベルの色を変える</h4>
    <rs-select class="food-select -label-blue" label="Pick a Food Group">
      <option value="grains">Bread, Cereal, Rice, and Pasta</option>
      <option value="vegetables" disabled>Vegetables</option>
      <option value="fruit">Fruits</option> 
    </rs-select>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-label-color($color);`, 
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      '<rs-select class="food-select -label-blue" label="Pick a Food Group">\n' +
      '   <option value="grains">Bread, Cereal, Rice, and Pasta</option>\n' +
      '   <option value="vegetables" disabled>Vegetables</option>\n' +
      '   <option value="fruit">Fruits</option>\n' + 
      '</rs-select>',
      { lang: 'html' }
    )}
    ${copyCodeBlock(
      '@import "@rsmdc/select/rs-select.scss";\n' +
      '.food-select {\n' +
      '   &.-label-blue {\n' +
      '      @include rs-select-label-color(blue);\n' +
      '   }\n' +
      '}', 
      { lang: 'scss' }
    )}
  `)
  .add('フォーカス時のラベルの色を変える', () => `
    <h4>フォーカス時のラベルの色を変える</h4>
    <rs-select class="food-select -focused -label-orange" label="Pick a Food Group">
      <option value="grains">Bread, Cereal, Rice, and Pasta</option>
      <option value="vegetables" disabled>Vegetables</option>
      <option value="fruit">Fruits</option> 
    </rs-select>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-focused-label-color($color);`, 
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      '<rs-select class="food-select -focused -label-orange" label="Pick a Food Group">\n' +
      '   <option value="grains">Bread, Cereal, Rice, and Pasta</option>\n' +
      '   <option value="vegetables" disabled>Vegetables</option>\n' +
      '   <option value="fruit">Fruits</option>\n' + 
      '</rs-select>',
      { lang: 'html' }
    )}
    ${copyCodeBlock(
      '@import "@rsmdc/select/rs-select.scss";\n' +
      '.food-select {\n' +
      '   &.-focused.-label-orange {\n' +
      '      @include rs-select-focused-label-color(orange);\n' +
      '   }\n' +
      '}', 
      { lang: 'scss' }
    )}
  `)  
  .add('線の色を変える', () => `
    <h4>線の色を変える</h4>
    <p>タイプがdefaultの時に使用</p>
    <rs-select class="food-select -line-green" label="Pick a Food Group">
      <option value="grains">Bread, Cereal, Rice, and Pasta</option>
      <option value="vegetables" disabled>Vegetables</option>
      <option value="fruit">Fruits</option> 
    </rs-select>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-bottom-line-color($color);`, 
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      '<rs-select class="food-select -line-green" label="Pick a Food Group">\n' +
      '   <option value="grains">Bread, Cereal, Rice, and Pasta</option>\n' +
      '   <option value="vegetables" disabled>Vegetables</option>\n' +
      '   <option value="fruit">Fruits</option>\n' + 
      '</rs-select>',
      { lang: 'html' }
    )}
    ${copyCodeBlock(
      '@import "@rsmdc/select/rs-select.scss";\n' +
      '.food-select {\n' +
      '   &.-line-green {\n' +
      '      @include rs-select-bottom-line-color(green);\n' +
      '   }\n' +
      '}', 
      { lang: 'scss' }
    )}
  `) 
  .add('ホバー時の下線の色を変える', () => `
    <h4>ホバー時の下線の色を変える</h4>
    <p>タイプがdefaultの時に使用</p>
    <rs-select class="food-select -hover -line-blue" label="Pick a Food Group">
      <option value="grains">Bread, Cereal, Rice, and Pasta</option>
      <option value="vegetables" disabled>Vegetables</option>
      <option value="fruit">Fruits</option> 
    </rs-select>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-hover-bottom-line-color($color);`, 
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      '<rs-select class="food-select -hover -line-blue" label="Pick a Food Group">\n' +
      '   <option value="grains">Bread, Cereal, Rice, and Pasta</option>\n' +
      '   <option value="vegetables" disabled>Vegetables</option>\n' +
      '   <option value="fruit">Fruits</option>\n' + 
      '</rs-select>',
      { lang: 'html' }
    )}
    ${copyCodeBlock(
      '@import "@rsmdc/select/rs-select.scss";\n' +
      '.food-select {\n' +
      '   &.-hover.-line-blue {\n' +
      '      @include rs-select-hover-bottom-line-color(blue);\n' +
      '   }\n' +
      '}', 
      { lang: 'scss' }
    )}
  `) 
  .add('フォーカス時の下線の色を変える', () => `
    <h4>フォーカス時の下線の色を変える</h4>
    <p>タイプがdefaultの時に使用</p>
    <rs-select class="food-select -focused -line-pink" label="Pick a Food Group">
      <option value="grains">Bread, Cereal, Rice, and Pasta</option>
      <option value="vegetables" disabled>Vegetables</option>
      <option value="fruit">Fruits</option> 
    </rs-select>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-focused-bottom-line-color($color);`, { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      '<rs-select class="food-select -focused -line-pink" label="Pick a Food Group">\n' +
      '   <option value="grains">Bread, Cereal, Rice, and Pasta</option>\n' +
      '   <option value="vegetables" disabled>Vegetables</option>\n' +
      '   <option value="fruit">Fruits</option>\n' + 
      '</rs-select>',
      { lang: 'html' }
    )}
    ${copyCodeBlock(
      '@import "@rsmdc/select/rs-select.scss";\n' +
      '.food-select {\n' +
      '   &.-focused.-line-pink{\n' +
      '      @include rs-select-hover-bottom-line-color(pink);\n' +
      '   }\n' +
      '}', 
      { lang: 'scss' }
    )}
  `)  
  .add('枠線の色を変える', () => `
    <h4>枠線の色を変える</h4>
    <p>タイプがoutlinedの時に使用</p>
    <rs-select class="food-select -outlined -blue" label="Pick a Food Group">
      <option value="grains">Bread, Cereal, Rice, and Pasta</option>
      <option value="vegetables" disabled>Vegetables</option>
      <option value="fruit">Fruits</option> 
    </rs-select>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-outline-color($color);`, { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      '<rs-select class="food-select -outlined -blue" label="Pick a Food Group">\n' +
      '   <option value="grains">Bread, Cereal, Rice, and Pasta</option>\n' +
      '   <option value="vegetables" disabled>Vegetables</option>\n' +
      '   <option value="fruit">Fruits</option>\n' + 
      '</rs-select>',
      { lang: 'html' }
    )}
    ${copyCodeBlock(
      '@import "@rsmdc/select/rs-select.scss";\n' +
      '.food-select {\n' +
      '   &.-outlined {\n' +
      '      @include rs-select-type(outlined);\n' +
      '   }\n' +
      '   &.-blue {\n' +
      '      @include rs-select-outline-color(blue);\n' +
      '   }\n' +
      '}', 
      { lang: 'scss' }
    )}
  `)  
  .add('ホバー時の枠線の色を変える', () => `
    <h4>ホバー時の枠線の色を変える</h4>
    <p>タイプがoutlinedの時に使用</p>
    <rs-select class="food-select -outlined -hover -line-orange" label="Pick a Food Group">
      <option value="grains">Bread, Cereal, Rice, and Pasta</option>
      <option value="vegetables" disabled>Vegetables</option>
      <option value="fruit">Fruits</option> 
    </rs-select>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-hover-outline-color($color);`, 
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      '<rs-select class="food-select -outlined -hover -line-orange" label="Pick a Food Group">\n' +
      '   <option value="grains">Bread, Cereal, Rice, and Pasta</option>\n' +
      '   <option value="vegetables" disabled>Vegetables</option>\n' +
      '   <option value="fruit">Fruits</option>\n' + 
      '</rs-select>',
      { lang: 'html' }
    )}
    ${copyCodeBlock(
      '@import "@rsmdc/select/rs-select.scss";\n' +
      '.food-select {\n' +
      '   &.-outlined {\n' +
      '      @include rs-select-type(outlined);\n' +
      '   }\n' +
      '   &.-hover.-line-orange {\n' +
      '      @include rs-select-hover-outline-color(orange);\n' +
      '   }\n' +
      '}', 
      { lang: 'scss' }
    )}
  `)
  .add('フォーカス時の枠線の色を変える', () => `
    <h4>フォーカス時の枠線の色を変える</h4>
    <p>タイプがoutlinedの時に使用</p>
    <rs-select class="food-select -outlined -focused -line-pink" label="Pick a Food Group">
      <option value="grains">Bread, Cereal, Rice, and Pasta</option>
      <option value="vegetables" disabled>Vegetables</option>
      <option value="fruit">Fruits</option> 
    </rs-select>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-focused-outline-color($color);`, { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      '<rs-select class="food-select -select-type -focused -line-pink" label="Pick a Food Group">\n' +
      '   <option value="grains">Bread, Cereal, Rice, and Pasta</option>\n' +
      '   <option value="vegetables" disabled>Vegetables</option>\n' +
      '   <option value="fruit">Fruits</option>\n' + 
      '</rs-select>',
      { lang: 'html' }
    )}
    ${copyCodeBlock(
      '@import "@rsmdc/select/rs-select.scss";\n' +
      '.food-select {\n' +
      '   &.-outlined {\n' +
      '      @include rs-select-type(outlined);\n' +
      '   }\n' +
      '   &.-focused.-line-pink {\n' +
      '      @include rs-select-focused-outline-color(pink);\n' +
      '   }\n' +
      '}', 
      { lang: 'scss' }
    )}
  `)  