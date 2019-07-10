import { storiesOf } from '@storybook/html'
import { Checkbox } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'
import './css/checkbox.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

window.customElements.define('rs-checkbox', Checkbox)

storiesOf('Components|Checkbox', module)
  .addDecorator(withLinks)
  .add('概要', () => {
    return `
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
    `
  })
  .add('使用方法', () => {
    return `
      <h4>使用方法</h4>
      <rs-checkbox class="checkbox">check1</rs-checkbox>
      ${copyCodeBlock(
        `<rs-checkbox class="checkbox">check1<rs-checkbox>`,
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
    `
  })

storiesOf('Components|Checkbox/スタイルのカスタマイズ', module)
  .add('チェックマークの色を変える', () => {
    return `
      <p>チェックマークの色を指定した色に変える。</p>
      <rs-checkbox class="checkbox -ink-yellow">check1</rs-checkbox>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        `@include rs-checkbox-checkmark-ink-color($color);`,
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        `<rs-checkbox class="checkbox -ink-yellow">check1</rs-checkbox>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
`@import \'@rsmdc/checkbox/rs-checkbox.scss\';

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
    `
  })
  .add('リップルの色を指定した色に変える', () => {
    return `
      <p>リップルの色を変える。</p>
      <rs-checkbox class="checkbox -ripple-brown">check1</rs-checkbox>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-checkbox-focus-indicator-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        `<rs-checkbox class="checkbox -ripple-brown">check1</rs-checkbox>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
`@import \'@rsmdc/checkbox/rs-checkbox.scss\';

.checkbox {
  &.-ripple-brown {
    @include rs-checkbox-focus-indicator-color(brown);
  }
}`,
        { lang: 'scss' }
      )}
    `
  })
  .add('選択状態の枠線と内部の色を変える', () => {
    return `
    <p>選択状態の枠線と内部の色を、指定した色に変える。</p>
    <rs-checkbox class="checkbox -checked -container-red">check1</rs-checkbox>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      '@include rs-checkbox-checked-container-colors($color);',
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      `<rs-checkbox class="checkbox -container -red">check1</rs-checkbox>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import \'@rsmdc/checkbox/rs-checkbox.scss\';

.checkbox {
  &.-checked.-container-red {
    @include rs-checkbox-checked-container-color(red);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$borderColor: 枠線の色を指定</li>
      <li>$containerColor: 内部の色を指定</li>
    </ul>
  `
  })
  .add('選択状態の枠線・内部・リップルの色を変える', () => {
    return `
    <p>選択状態の枠線・内部・リップルの色を、指定した色に変える。</p>
    <rs-checkbox class="checkbox -checked -fill-orange">check1</rs-checkbox>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-checkbox-fill-color-accessible($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      `<rs-checkbox class="checkbox -checked -fill-orange">check1</rs-checkbox>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import \'@rsmdc/checkbox/rs-checkbox.scss\';

.checkbox {
  &.-checked.-fill-orange {
    @include rs-checkbox-fill-color-accessible(orange);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$borderColor: 枠線の色を指定</li>
      <li>$containerColor: 内部の色を指定</li>
    </ul>
  `
  })
  .add('未選択状態の枠線と内部の色を変える', () => {
    return `
    <p>未選択状態の枠線と内部の色を、指定した色に変える。</p>
    <rs-checkbox class="checkbox -unchecked -container-orange">check1</rs-checkbox>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-checkbox-unchecked-stroke-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      `<rs-checkbox class="checkbox -unchecked -container-orange">check1</rs-checkbox>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import \'@rsmdc/checkbox/rs-checkbox.scss\';

.checkbox {
  &.-unchecked.-container-orange {
    @include rs-checkbox-unchecked-stroke-color($color);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$borderColor: 枠線の色を指定</li>
      <li>$containerColor: 内部の色を指定</li>
    </ul>
    `
  })
  .add('ラベルの位置を変える', () => {
    return `
      <p>ラベルの位置を指定した位置に変える。</p>
      <rs-checkbox class="checkbox -label -position">check1</rs-checkbox>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        `@include rs-checkbox-label-position($position);`,
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        `<rs-checkbox class="checkbox -label -position">check1</rs-checkbox>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
`@import \'@rsmdc/checkbox/rs-checkbox.scss\';

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
    `
  })

