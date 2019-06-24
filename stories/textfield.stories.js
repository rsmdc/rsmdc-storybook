import { storiesOf } from '@storybook/html'
import { TextField, TextFieldAction, TextArea, FormError, FormHelper, FormField } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'
import './css/textfield.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

window.customElements.define('rs-textfield-trailing', TextFieldAction)
window.customElements.define('rs-textarea', TextArea)
window.customElements.define('rs-textfield', TextField)
window.customElements.define('rs-form-error', FormError)
window.customElements.define('rs-form-helper', FormHelper)
window.customElements.define('rs-form-field', FormField)

storiesOf('Components|Textfield', module)
  .addDecorator(withLinks)
  .add('概要', () => ``)
  .add('使用方法', () => `
    <h4>Textfield</h4>
    <rs-form-field>
      <rs-textfield label="label" maxlength="7" countable></rs-textfield>
      <rs-form-helper>helper text</rs-form-helper>
      <rs-form-error>error text</rs-form-error>
    </rs-form-field>
    <rs-form-field>
      <rs-textfield class="outlined" label="label"></rs-textfield>
      <rs-form-helper>helper text</rs-form-helper>
      <rs-form-error>error text</rs-form-error>
    </rs-form-field>
    <rs-form-field error>
      <rs-textfield label="label" maxlength="7" countable></rs-textfield>
      <rs-form-helper>helper text</rs-form-helper>
      <rs-form-error>error text</rs-form-error>
    </rs-form-field>
    <rs-form-field>
      <rs-textfield class="outlined" label="label" type="date"></rs-textfield>
      <rs-form-helper>helper text</rs-form-helper>
      <rs-form-error>error text</rs-form-error>
    </rs-form-field>
    <rs-form-field>
      <rs-textarea label="label" placeholder="placeholder"></rs-textarea>
    </rs-form-field>
    ${copyCodeBlock(
`<rs-form-field>
    <rs-textfield label="label" maxlength="7" countable />
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
</rs-form-field>
<rs-form-field>
    <rs-textfield class="outlined" label="label" />
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
</rs-form-field>
<rs-form-field error>
  <rs-textfield label="label" maxlength="7" countable></rs-textfield>
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>
<rs-form-field>
  <rs-textfield class="outlined" label="label" type="date"></rs-textfield>
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>
<rs-form-field>
    <rs-textarea label="label" placeholder="placeholder" />
</rs-form-field>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import "@rsmdc/textfield/rs-text-field.scss";

.outlined {
    @include rs-text-field-type(outlined);
}`,
      { lang: 'scss' }
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
        <td>rs-textfield</td>
        <td>テキストフィールドを表示します</td>
        <td><code>rs-textfield-trailing</code></td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-textfield-trailing</td>
        <td>テキストフィールド内の右側のアイコンを表示します</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-textarea</td>
        <td>テキストエリアを表示します</td>
        <td>-</td>
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
        <td>label</td>
        <td>ラベルを表示します</td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>プレースホルダーを設定します</td>
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
        <td>maxlength</td>
        <td>入力最大文字数を設定します</td>
        <td>Number</td>
        <td>-</td>
      </tr>
      <tr>
        <td>type</td>
        <td>テキストフィールドのタイプを指定します</td>
        <td>String</td>
        <td>defaultは<code>text</code>です。<br>
          日付などの入力に変更したい時、使用してください。
        </td>
      </tr>
      <tr>
        <td>countable</td>
        <td>入力文字数のカウンターを表示します</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>テキストフィールド・テキストエリアを無効にします</td>
        <td>Boolean</td>
        <td><code>rs-form-field</code>に<code>disabled</code>を指定すると自動で付与されます</td>
      </tr>
      <tr>
        <td>required</td>
        <td>テキストフィールド・テキストエリアを必須にします</td>
        <td>Boolean</td>
        <td><code>rs-form-field</code>に<code>required</code>を指定すると自動で付与されます</td>
      </tr>
      <tr>
        <td>invalid</td>
        <td>テキストフィールド・テキストエリアをエラーにします</td>
        <td>Boolean</td>
        <td><code>rs-form-field</code>に<code>error</code>を指定すると自動で付与されます</td>
      </tr>
    </table>
  `)

storiesOf('Components|Textfield/スタイルのカスタマイズ/テキストフィールドのタイプを変える', module)
  .add('default', () => `
    <h4>default</h4>
    <h4>使用するmixin</h4>
    <p>なし</p>
  `)
  .add('outlined', () => `
    <h4>outlined</h4>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-top-app-bar-type($type);`,
      { lang: 'scss' }
    )}
  `)

storiesOf('Components|Textfield/スタイルのカスタマイズ', module)
.add('入力文字の色を変える', () => `
  <h4>入力文字の色を変える</h4>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-text-field-ink-color($color);
@include rs-textarea-ink-color($color);`,
    { lang: 'scss' }
  )}
`)
.add('キャレットの色を変える', () => `
  <h4>キャレットの色を変える</h4>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-text-field-caret-color($color);
@include rs-textarea-caret-color($color);`,
    { lang: 'scss' }
  )}
`)
.add('背景色を変える', () => `
  <h4>背景色を変える</h4>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-text-field-fill-color($color);
@include rs-textarea-fill-color($color);`,
    { lang: 'scss' }
  )}
`)
.add('線の色を変える　(default)', () => `
  <h4>線の色を変える　(default)</h4>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-text-field-bottom-line-color($color);`,
    { lang: 'scss' }
  )}
`)
.add('ホバー時の線の色を変える　(default)', () => `
  <h4>ホバー時の線の色を変える  (default)</h4>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-text-field-hover-bottom-line-color($color);`,
    { lang: 'scss' }
  )}
`)
.add('フォーカス時の線の色を変える　(default)', () => `
  <h4>フォーカス時の線の色を変える  (default)</h4>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-text-field-line-ripple-color($color);`,
    { lang: 'scss' }
  )}
`)
.add('線の色を変える　(outlined)', () => `
  <h4>線の色を変える　(outlined)</h4>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-text-field-stroke-color($color);
@include rs-textarea-stroke-color($color);`,
    { lang: 'scss' }
  )}
`)
.add('ホバー時の線の色を変える　(outlined)', () => `
  <h4>ホバー時の線の色を変える　(outlined)</h4>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-text-field-hover-outline-color($color);
@include rs-textarea-hover-outline-color(($color);`,
    { lang: 'scss' }
  )}
`)
.add('フォーカス時の線の色を変える　(outlined)', () => `
  <h4>フォーカス時の線の色を変える　(outlined)</h4>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-text-field-focused-outline-color($color);
@include rs-textarea-focused-outline-color($color);`,
    { lang: 'scss' }
  )}
`)
.add('フォーカス時の色を一括で変える', () => `
  <h4>フォーカス時の線の色、ラベル、キャレットの色を変える</h4>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-text-field-focused-color-accessible($color);`,
    { lang: 'scss' }
  )}
`)
.add('文字数カウンターの色を変える', () => `
  <h4>文字数カウンターの色を変える</h4>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-text-field-character-counter-ink-color($color);`,
    { lang: 'scss' }
  )}
`)
.add('文字数カウンターの位置を変える', () => `
  <h4>文字数カウンターの色を変える</h4>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-text-field-character-counter-position($xOffset, $yOffset);`,
    { lang: 'scss' }
  )}
`)
.add('テキストエリアの行間を変える', () => `
  <h4>テキストエリアの行間を変える</h4>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-textarea-line-height($height);`,
    { lang: 'scss' }
  )}
`)
.add('テキストフィールド・テキストエリアの角の丸みを変える', () => `
  <h4>テキストフィールド・テキストエリアの角の丸みを変える</h4>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-text-field-shape-radius($radius);
@include rs-textarea-shape-radius($radius);`,
    { lang: 'scss' }
  )}
`)
.add('左側のアイコン(leading icon)を設定する', () => `
  <h4>左側のアイコン(leading icon)を設定する</h4>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `rs-text-field-icon-image($icon, $codepoint: '');`,
    { lang: 'scss' }
  )}
`)
.add('右側のアイコン(trairing icon)を設定する', () => `
  <h4>右側のアイコン(trairing icon)を設定する</h4>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `rs-text-field-action-icon-image($icon, $codepoint: '');`,
    { lang: 'scss' }
  )}
`)










