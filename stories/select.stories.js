import { storiesOf } from '@storybook/html'
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
      <li>
        default <br>
        <a class="link" href="#" data-sb-kind="Components|select/スタイルのカスタマイズ/セレクトのタイプを変える" data-sb-story="default">参照はこちら</a>
      </li>
      <li>
        outlined <br>
        枠線がつく <br>
        <a class="link" href="#" data-sb-kind="Components|select/スタイルのカスタマイズ/セレクトのタイプを変える" data-sb-story="outlined">参照はこちら</a>
      </li>
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
`<rs-select class="food-select" label="Pick a Food Group">
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
        <td>rs-select・optionどちらにも使えます</td>
      </tr>
      <tr>
        <td>selected</td>
        <td>オブションを選択状態にします</td>
        <td>Boolean</td>
        <td>optionに付けます</td>
      </tr>
      <tr>
        <td>invalid</td>
        <td>セレクト本体をエラー状態にします</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
      <tr>
        <td>required</td>
        <td>セレクト本体を必須状態にします</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
      <tr>
      <td>multiple</td>
        <td>複数選択できるようにします</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
    </table>
    <h4>テーマ変数</h4>
    <p>
      rs-selectで使われるテーマ変数です。 <br>
      下記変数に新しく色を指定することで、テーマカラーが上書きされます。
    </p>
    <table>
      <tr>
        <th>変数名</th>
        <th>説明</th>
      </tr>
      <tr>
        <td>$rs-theme-primary</td>
        <td>選択状態のテキスト、背景、リップルの色に関わります。</td>
      </tr>
      <tr>
        <td>$rs-theme-on-surface</td>
        <td>未選択状態のテキスト、背景、リップルの色に関わります。</td>
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
`<rs-select class="food-select" label="Pick a Food Group">
  <option value="grains">Bread, Cereal, Rice, and Pasta</option>
  <option value="vegetables" disabled>Vegetables</option>
  <option value="fruit">Fruits</option> 
</rs-select>`,
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
      `@include rs-select-type($type);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-select class="food-select -outlined" label="Pick a Food Group">
  <option value="grains">Bread, Cereal, Rice, and Pasta</option>
  <option value="vegetables" disabled>Vegetables</option>
  <option value="fruit">Fruits</option> 
</rs-select>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/select/rs-select.scss';

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
`<rs-select class="food-select -ink-orange" label="Pick a Food Group">
  <option value="grains">Bread, Cereal, Rice, and Pasta</option>
  <option value="vegetables" disabled>Vegetables</option>
  <option value="fruit">Fruits</option> 
</rs-select>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/select/rs-select.scss';

.food-select {
  &.-ink-orange {
    @include rs-select-ink-color(orange);
  }
}`,
      { lang: 'scss' }
    )}
      <p>オプション</p>
      <ul>
        <li>$color: インクの色コード（選択された状態のものに適用） <br>　例）#ee00ce</li>
      </ul>
  `)
  .add('背景色を変える',() => `
    <h4>背景色を変える</h4>
    <rs-select class="food-select -fill-beige" label="Pick a Food Group">
      <option value="grains">Bread, Cereal, Rice, and Pasta</option>
      <option value="vegetables" disabled>Vegetables</option>
      <option value="fruit">Fruits</option> 
    </rs-select>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-container-fill-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-select class="food-select -fill-beige" label="Pick a Food Group">
  <option value="grains">Bread, Cereal, Rice, and Pasta</option>
  <option value="vegetables" disabled>Vegetables</option>
  <option value="fruit">Fruits</option> 
</rs-select>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/select/rs-select.scss';

.food-select {
  &.-fill-beige {
    @include rs-select-container-fill-color(beige);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: コンテナの色の塗りコード <br>　例）#ee00ce</li>
    </ul>
  `)
  .add('ラベルの色を変える',() => `
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
`<rs-select class="food-select -label-blue" label="Pick a Food Group">
  <option value="grains">Bread, Cereal, Rice, and Pasta</option>
  <option value="vegetables" disabled>Vegetables</option>
  <option value="fruit">Fruits</option> 
</rs-select>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/select/rs-select.scss';

.food-select {
  &.-label-blue {
    @include rs-select-label-color(blue);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: ラベルの色を指定 <br>　例）#ee00ce</li>
    </ul>
  `)
  .add('フォーカス時のラベルの色を変える',() => `
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
`<rs-select class="food-select -focused -label-orange" label="Pick a Food Group">
  <option value="grains">Bread, Cereal, Rice, and Pasta</option>
  <option value="vegetables" disabled>Vegetables</option>
  <option value="fruit">Fruits</option> 
</rs-select>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/select/rs-select.scss';

.food-select {
  &.-focused.-label-orange {
    @include rs-select-focused-label-color(orange);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: ラベルの色を指定（フォーカスした際に適用） <br>　例）#ee00ce</li>
    </ul>
  `)
  .add('線の色を変える',() => `
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
`<rs-select class="food-select -line-green" label="Pick a Food Group">
  <option value="grains">Bread, Cereal, Rice, and Pasta</option>
  <option value="vegetables" disabled>Vegetables</option>
  <option value="fruit">Fruits</option> 
</rs-select>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/select/rs-select.scss';

.food-select {
  &.-line-green {
    @include rs-select-bottom-line-color(green);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: 線の色を指定 <br>　例）#ee00ce</li>
    </ul>
  `)
  .add('ホバー時の下線の色を変える',() => `
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
`<rs-select class="food-select -hover -line-blue" label="Pick a Food Group">
  <option value="grains">Bread, Cereal, Rice, and Pasta</option>
  <option value="vegetables" disabled>Vegetables</option>
  <option value="fruit">Fruits</option> 
</rs-select>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/select/rs-select.scss';

.food-select {
  &.-hover.-line-blue {
    @include rs-select-hover-bottom-line-color(blue);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: 下線の色を指定（ホバーした際に適用） <br>　例）#ee00ce</li>
    </ul>
  `)
  .add('フォーカス時の下線の色を変える',() => `
    <h4>フォーカス時の下線の色を変える</h4>
    <p>タイプがdefaultの時に使用</p>
    <rs-select class="food-select -focused -line-pink" label="Pick a Food Group">
      <option value="grains">Bread, Cereal, Rice, and Pasta</option>
      <option value="vegetables" disabled>Vegetables</option>
      <option value="fruit">Fruits</option> 
    </rs-select>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-focused-bottom-line-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-select class="food-select -focused -line-pink" label="Pick a Food Group">
  <option value="grains">Bread, Cereal, Rice, and Pasta</option>
  <option value="vegetables" disabled>Vegetables</option>
  <option value="fruit">Fruits</option> 
</rs-select>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/select/rs-select.scss';

.food-select {
  &.-focused.-line-pink{
    @include rs-select-hover-bottom-line-color(pink);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: 下線の色を指定（フォーカスした際に適用） <br>　例）#ee00ce</li>
    </ul>
  `)
  .add('枠線の色を変える',() => `
    <h4>枠線の色を変える</h4>
    <p>タイプがoutlinedの時に使用</p>
    <rs-select class="food-select -outlined -blue" label="Pick a Food Group">
      <option value="grains">Bread, Cereal, Rice, and Pasta</option>
      <option value="vegetables" disabled>Vegetables</option>
      <option value="fruit">Fruits</option> 
    </rs-select>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-outline-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-select class="food-select -outlined -blue" label="Pick a Food Group">
  <option value="grains">Bread, Cereal, Rice, and Pasta</option>
  <option value="vegetables" disabled>Vegetables</option>
  <option value="fruit">Fruits</option> 
</rs-select>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/select/rs-select.scss';

.food-select {
  &.-outlined {
    @include rs-select-type(outlined);
  }
  &.-blue {
    @include rs-select-outline-color(blue);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: 枠線の色を指定 <br>　例）#ee00ce</li>
    </ul>
  `)
  .add('ホバー時の枠線の色を変える',() => `
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
`<rs-select class="food-select -outlined -hover -line-orange" label="Pick a Food Group">
  <option value="grains">Bread, Cereal, Rice, and Pasta</option>
  <option value="vegetables" disabled>Vegetables</option>
  <option value="fruit">Fruits</option> 
</rs-select>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/select/rs-select.scss';

.food-select {
  &.-outlined {
    @include rs-select-type(outlined);
  }
  &.-hover.-line-orange {
    @include rs-select-hover-outline-color(orange);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: 枠線の色を指定（ホバーした際に適用） <br>　例）#ee00ce</li>
    </ul>
  `)
  .add('フォーカス時の枠線の色を変える',() => `
    <h4>フォーカス時の枠線の色を変える</h4>
    <p>タイプがoutlinedの時に使用</p>
    <rs-select class="food-select -outlined -focused -line-pink" label="Pick a Food Group">
      <option value="grains">Bread, Cereal, Rice, and Pasta</option>
      <option value="vegetables" disabled>Vegetables</option>
      <option value="fruit">Fruits</option> 
    </rs-select>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-select-focused-outline-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-select class="food-select -outlined -focused -line-pink" label="Pick a Food Group">
  <option value="grains">Bread, Cereal, Rice, and Pasta</option>
  <option value="vegetables" disabled>Vegetables</option>
  <option value="fruit">Fruits</option> 
</rs-select>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/select/rs-select.scss';

.food-select {
  &.-outlined {
    @include rs-select-type(outlined);
  }
  &.-focused.-line-pink {
    @include rs-select-focused-outline-color(pink);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: 枠線の色を指定（フォーカスした際に適用） <br>　例）#ee00ce</li>
    </ul>
  `)