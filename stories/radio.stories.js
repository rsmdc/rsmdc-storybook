import { storiesOf } from '@storybook/html'
import { Radio } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'
import './css/radio.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

window.customElements.define('rs-radio', Radio)

storiesOf('Components|Radio', module)
  .addDecorator(withLinks)
  .add('概要', () => `
    <h4>Radio</h4>
    <p>
      ラジオボタンは、複数の選択肢の中から1つだけ選択できる。<br>
      デフォルトは最も一般的に使用されるオプションが選択された状態にしておくと良い。
    </p>
    <p>
      参考:
      <a href="https://material.io/design/components/selection-controls.html#radio-buttons">
        https://material.io/design/components/selection-controls.html#radio-buttons
      </a>
    </p>
  `)
  .add('使用方法', () => `
    <h4>使用方法</h4>
    <rs-radio id="radio1" label="radio1" name="group"></rs-radio>
    <rs-radio id="radio2" label="radio2" name="group"></rs-radio>
    <rs-radio id="radio3" label="radio3" name="group" disabled></rs-radio>
    ${copyCodeBlock(
`<rs-radio id="radio1" label="radio1" name="group" />
<rs-radio id="radio2" label="radio2" name="group" />
<rs-radio id="radio3" label="radio3" name="group" disabled />`,
      { lang: 'html' }
    )}
    <h4>HTML要素</h4>
    <p>custom elementsを<code>rs</code>のプレフィックスをつけて定義した前提。<br>
      下記HTML要素を使うことで、custom elementsが表示される。
    </p>
    <table>
      <tr>
        <th>要素名</th>
        <th>説明</th>
        <th>許可されている子要素</th>
        <th>備考</th>
      </tr>
      <tr>
        <td>rs-radio</td>
        <td>ラジオボタンを表示します</td>
        <td>テキスト</td>
        <td>-</td>
      </tr>
    </table>
    <h4>HTML属性</h4>
    <p>下記HTML属性をつけることで、custom elementsの状態が変化する。</p>
    <table>
      <tr>
        <th>属性</th>
        <th>説明</th>
        <th>タイプ</th>
        <th>備考</th>
      </tr>
      <tr>
        <td>id</td>
        <td>ラジオボタンとラベルを紐付けます</td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>label</td>
        <td>ラジオボタンのラベルを表します</td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>name</td>
        <td>ラジオボタンをグルーピングします</td>
        <td>String</td>
        <td>同じグループにする際は同じnameをつけてください</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>ラジオボタンを無効にします</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
      <tr>
        <td>cheked</td>
        <td>ラジオボタンを選択状態にします</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
    </table>
  `)

storiesOf('Components|Radio/スタイルのカスタマイズ', module)
  .add('チェックマークの色を変える', () => `
    <h4>チェックマークの色を、指定した色に変える。</h4>
    <rs-radio id="radio1" class="my-radio -ink-orange" label="radio1" name="group"></rs-radio>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-radio-ink-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      `<rs-radio id="radio1" class="my-radio -ink-orange" label="radio1" name="group" />`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/radio/rs-radio.scss';

.my-radio {
  &.-ink-orange {
    @include rs-radio-ink-color(brown);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: チェックマークの色を指定 <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('リップルの色を変える', () => `
    <h4>リップルの色を指定した色に変える。</h4>
    <rs-radio id="radio1" class="my-radio -ripple-blue" label="radio1" name="group"></rs-radio>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-radio-states-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      `<rs-radio id="radio1" class="my-radio -ripple-blue" label="radio1" name="group" />`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/radio/rs-radio.scss';

.my-radio {
  &.-ripple-blue {
    @include rs-radio-states-color(blue);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: リップルの色を指定 <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('選択状態の線の色を変える', () => `
    <h4>選択状態の時の線の色を、選択した色に変える。</h4>
    <rs-radio id="radio1" class="my-radio -checked -line-brown" label="radio1" name="group"></rs-radio>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-radio-checked-stroke-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      `<rs-radio id="radio1" class="my-radio -checked -line-brown" label="radio1" name="group" />`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/radio/rs-radio.scss';

.my-radio {
  &.-checked.-line-brown {
    @include rs-radio-checked-stroke-color(brown);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: 線の色を指定（選択された時に適用） <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('未選択状態の線の色を変える', () => `
    <h4>未選択状態の時の線の色を、選択した色に変える。</h4>
    <rs-radio id="radio1" class="my-radio -unchecked -line-brown" label="radio1" name="group"></rs-radio>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-radio-unchecked-stroke-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      `<rs-radio id="radio1" class="my-radio -unchecked -line-brown" label="radio1" name="group" />`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/radio/rs-radio.scss';

.my-radio {
  &.-unchecked.-line-brown {
    @include rs-radio-unchecked-stroke-color(brown);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: 線の色を指定（未選択の時に適用） <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('選択状態・未選択状態の線、チェックマークの色を一括で変える', () => `
    <h4>選択状態・未選択状態の時の線とチェックマークの色を選択した色に変える。</h4>
    <rs-radio id="radio1" class="my-radio -container -blue" label="radio1" name="group"></rs-radio>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-radio-fill-color-accessible($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      `<rs-radio id="radio1" class="my-radio -container -blue" label="radio1" name="group" />`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/radio/rs-radio.scss';

.my-radio {
  &.-container.-blue{
    @include rs-radio-fill-color-accessible(blue);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: 線・チェックマークの色を指定 <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('ラベルの位置を変える', () => `
    <h4>ラベルの位置を指定した位置に変える。</h4>
    <div class="right-group">
      <rs-radio id="radio1" class="my-radio" label="radio1" name="group1"></rs-radio>
      <rs-radio id="radio2" class="my-radio" label="radio2" name="group1"></rs-radio>
    </div>
    <div class="label -position">
      <rs-radio id="radio3" class="my-radio" label="radio3" name="group2"></rs-radio>
      <rs-radio id="radio4" class="my-radio" label="radio4" name="group2"></rs-radio>
    </div>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-radio-label-position($position);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<div class="right-group">
  <rs-radio id="radio1" class="my-radio" label="radio1" name="group1" />
  <rs-radio id="radio2" class="my-radio " label="radio2" name="group1" />
</div>
<div class="label -position">
  <rs-radio id="radio3" class="my-radio" label="radio3" name="group2" />
  <rs-radio id="radio4" class="my-radio " label="radio4" name="group2" />
</div>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/radio/rs-radio.scss';

.label.-position {
  @include rs-radio-label-position(left);
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $position: 位置を指定 <br>
        leftとrightがある（ defaultはright ）
      </li>
    </ul>
  `)
