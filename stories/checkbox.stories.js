import { storiesOf } from '@storybook/html'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'
const checkbox = require('@rsmdc/checkbox/loader')

import './css/style.scss'
import './css/checkbox.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

checkbox.defineCustomElements(window)

storiesOf('Components|Checkbox', module)
  .addDecorator(withLinks)
  .add('概要', () => `
      <h4>Checkbox</h4>
      <p>
        チェックボックスは複数の項目を選択するもの。<br>
      </p>
      <p>
        参考:
        <a href="https://material.io/design/components/selection-controls.html#checkboxes">
          https://material.io/design/components/selection-controls.html#checkboxes
        </a>
      </p>
    `)
  .add('使用方法', () => `
      <h4>使用方法</h4>
      <rs-checkbox class="checkbox" id="check1" label="check1"></rs-checkbox>
      <rs-checkbox class="checkbox" id="check2" label="check2"></rs-checkbox>
      <rs-checkbox class="checkbox" id="check3" label="check3" disabled></rs-checkbox>
      <rs-checkbox class="checkbox" id="check4" label="check4" indeterminate></rs-checkbox>
      ${copyCodeBlock(
`<rs-checkbox class="checkbox" id="check1" label="check1" />
<rs-checkbox class="checkbox" id="check2" label="check2" />
<rs-checkbox class="checkbox" id="check3" label="check3" disabled />
<rs-checkbox class="checkbox" id="check4" label="check4" indeterminate />`,
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
        <td>rs-checkbox</td>
        <td>チェックボックスを表示します</td>
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
          <td>id</td>
          <td>チェックボックスとラベルを紐付けます</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>label</td>
          <td>チェックボックスのラベルを表します</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>checked</td>
          <td>チェックボックスを選択された状態にします</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>チェックボックスを無効にします</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>indeterminate</td>
          <td>選択・未選択がされていない状態を示します</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
      </table>
    <h4>テーマ変数</h4>
    <p><code>rs-checkbox</code>で使われるテーマ変数です。<br>
      下記変数に新しく色を指定することで、テーマカラーが上書きされます。
    </p>
    <table>
    <tr>
      <th>変数名</th>
      <th>説明</th>
    </tr>
    <tr>
      <td>$rs-theme-on-primary</td>
      <td>チェックマークの色に関わります。</td>
    </tr>
    <tr>
      <td>$rs-theme-secondary</td>
      <td>選択・indeterminate状態の線、リップルの色に関わります。</td>
    </tr>
    <tr>
      <td>$rs-theme-on-surface</td>
      <td>未選択状態の線、リップルの色に関わります。</td>
    </tr>
  </table>
`)

storiesOf('Components|Checkbox/スタイルのカスタマイズ', module)
  .add('チェックマークの色を変える', () => `
      <h4>チェックマークの色を指定した色に変える。</h4>
      <rs-checkbox class="checkbox -ink-yellow" id="check1" label="check1"></rs-checkbox>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        `@include rs-checkbox-checkmark-ink-color($color);`,
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        `<rs-checkbox class="checkbox -ink-yellow" />`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
`@import '@rsmdc/checkbox/rs-checkbox.scss';

.checkbox {
  &.-ink-yellow {
    @include rs-checkbox-checkmark-ink-color(yellow);
  }
}`,
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>$color: インクの色コード <br> 例）#ee00ce</li>
      </ul>
    `)
  .add('リップルの色を指定した色に変える', () => `
      <h4>リップルの色を変える。</h4>
      <rs-checkbox class="checkbox -ripple-brown" id="check1" label="check1"></rs-checkbox>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-checkbox-focus-indicator-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        `<rs-checkbox class="checkbox -ripple-brown" />`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
`@import '@rsmdc/checkbox/rs-checkbox.scss';

.checkbox {
  &.-ripple-brown {
    @include rs-checkbox-focus-indicator-color(brown);
  }
}`,
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>$color: リップルの色を指定 <br> 例）#ee00ce</li>
      </ul>
    `)
  .add('選択状態の枠線と内部の色を変える', () => `
    <h4>選択状態の枠線と内部の色を、指定した色に変える。</h4>
    <rs-checkbox class="checkbox -checked -container-red" id="check1" label="check1"></rs-checkbox>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      '@include rs-checkbox-checked-container-colors($color);',
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      `<rs-checkbox class="checkbox -container -red" />`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/checkbox/rs-checkbox.scss';

.checkbox {
  &.-checked.-container-red {
    @include rs-checkbox-checked-container-color(red);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: 枠線と内部の色を指定（選択した時に適用） <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('選択状態の枠線・内部・リップルの色を変える', () => `
    <h4>選択状態の枠線・内部・リップルの色を、指定した色に変える。</h4>
    <rs-checkbox class="checkbox -checked -fill-orange" id="check1" label="check1"></rs-checkbox>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-checkbox-fill-color-accessible($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      `<rs-checkbox class="checkbox -checked -fill-orange" />`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/checkbox/rs-checkbox.scss';

.checkbox {
  &.-checked.-fill-orange {
    @include rs-checkbox-fill-color-accessible(orange);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: 枠線・内部・リップルの色を指定（選択した時に適用） <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('未選択状態の枠線と内部の色を変える', () => `
    <h4>未選択状態の枠線と内部の色を、指定した色に変える。</h4>
    <rs-checkbox class="checkbox -unchecked -container-orange" id="check1" label="check1"></rs-checkbox>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-checkbox-unchecked-stroke-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      `<rs-checkbox class="checkbox -unchecked -container-orange" />`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/checkbox/rs-checkbox.scss';

.checkbox {
  &.-unchecked.-container-orange {
    @include rs-checkbox-unchecked-stroke-color($color);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: 枠線と内部の色を指定（未選択の時に適用） <br> 例）#ee00ce</li>  
    </ul>
    `)
  .add('ラベルの位置を変える', () => `
      <h4>ラベルの位置を指定した位置に変える。</h4>
      <rs-checkbox class="checkbox -label -position" id="check1" label="check1"></rs-checkbox>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        `@include rs-checkbox-label-position($position);`,
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        `<rs-checkbox class="checkbox -label -position" />`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
`@import '@rsmdc/checkbox/rs-checkbox.scss';

.checkbox {
  &.-label.-position {
    @include rs-checkbox-label-position(left);
  }
}`,
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>
          $position: 位置の指定 <br>
          デフォルトはright
        </li>
      </ul>
    `)

