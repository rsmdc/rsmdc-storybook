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
  .add('概要', () => `
    <h4>Textfield</h4>
    <p>テキストフィールドを使用すると、ユーザーはテキストを入力したり編集できる。</p>
    <p>参照：<a href="https://material.io/design/components/text-fields.html">https://material.io/design/components/text-fields.html</a></p>
    <p>タイプ</p>
    <ul>
      <li>default</li>
      <li>outlined：枠線がつく</li>
    </ul>
  `)

  .add('使用方法', () => `
    <h4>Textfield</h4>
    <rs-form-field class="text-field">
      <rs-textfield label="label" maxlength="7" countable></rs-textfield>
      <rs-form-helper>helper text</rs-form-helper>
      <rs-form-error>error text</rs-form-error>
    </rs-form-field>
    <rs-form-field class="text-field">
      <rs-textfield class="outlined" label="label"></rs-textfield>
      <rs-form-helper>helper text</rs-form-helper>
      <rs-form-error>error text</rs-form-error>
    </rs-form-field>
    ${copyCodeBlock(
`<rs-form-field class="text-field">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
</rs-form-field>

<rs-form-field class="text-field">
    <rs-textfield class="outlined" label="label"></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
      '@import "@rsmdc/textfield/rs-text-field.scss";\n\n' +
      '.outlined {\n' +
      '   @include rs-text-field-type(outlined);\n' +
      '}',
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
    <p>デフォルトの場合mixinは不要。</p>
    <rs-form-field class="text-field">
      <rs-textfield label="label" maxlength="7" countable></rs-textfield>
      <rs-form-helper>helper text</rs-form-helper>
      <rs-form-error>error text</rs-form-error>
    </rs-form-field>
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-form-field class="text-field">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
      { lang: 'html' }
    )}
  `)
  .add('outlined', () => `
    <h4>outlined</h4>
    <rs-form-field class="text-field">
      <rs-textfield class="outlined" label="label" maxlength="7" countable></rs-textfield>
      <rs-form-helper>helper text</rs-form-helper>
      <rs-form-error>error text</rs-form-error>
    </rs-form-field>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-top-app-bar-type($type);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-form-field class="text-field">
    <rs-textfield class="outlined" label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
      '@include rs-top-app-bar-type($type);\n\n' +
      '.outlined {\n' +
      '    @include rs-text-field-type(outlined);\n' +
      '}',
      { lang: 'scss' }
    )}
  `)

storiesOf('Components|Textfield/スタイルのカスタマイズ', module)
.add('入力文字の色を変える', () => `
  <h4>入力文字の色を変える</h4>
  <rs-form-field class="text-field -ink-orange">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    '@include rs-text-field-ink-color($color);\n' +
    '@include rs-textarea-ink-color($color);',
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field -ink-orange">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
      { lang: 'html' }
    )}
  ${copyCodeBlock(
    '@include rs-top-app-bar-type($type);\n\n' +
    '.text-field {\n' +
    '   &.-ink-orange {\n' +
    '      @include rs-text-field-ink-color(orange);\n' +
    '      @include rs-textarea-ink-color(orange);\n' +
    '   }\n' +
    '}',
    { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>$color: インクの色コード <br> 例）#ee00ce</li>
  </ul>
`)
.add('キャレットの色を変える', () => `
  <h4>キャレットの色を変える</h4>
  <rs-form-field class="text-field -caret-orange">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    '@include rs-text-field-caret-color($color)\n' +
    '@include rs-textarea-caret-color($color);',
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field -caret-orange">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
      { lang: 'html' }
    )}
  ${copyCodeBlock(
    '@include rs-top-app-bar-type($type);\n\n' +
    '.text-field {\n' +
    '   &.-caret-orange {\n' +
    '      @include rs-text-field-caret-color(orange);\n' +
    '      @include rs-textarea-caret-color(orange);\n' +
    '   }\n' +
    '}',
    { lang: 'scss' }
  )}
`)
.add('背景色を変える', () => `
  <h4>背景色を変える</h4>
  <rs-form-field class="text-field -fill-lavender">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    '@include rs-text-field-fill-color($color);\n' +
    '@include rs-textarea-fill-color($color);',
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field -fill-lavender">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
    '@include rs-top-app-bar-type($type);\n\n' +
    '.text-field {\n' +
    '   &.-fill-lavender {\n' +
    '      @include rs-text-field-fill-color(lavender);\n' +
    '      @include rs-textarea-fill-color(lavender);\n' +
    '   }\n' +
    '}',
    { lang: 'scss' }
  )}
`)
.add('線の色を変える　(default)', () => `
  <h4>線の色を変える</h4>
  <p>タイプがdefaultの時に使用</p>
  <rs-form-field class="text-field -line-blue">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-text-field-bottom-line-color($color);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field -line-blue">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
    '@include rs-top-app-bar-type($type);\n\n' +
    '.text-field {\n' +
    '   &.-line-blue {\n' +
    '      @include rs-text-field-bottom-line-color(blue);\n' +
    '   }\n' +
    '}',
    { lang: 'scss' }
  )}
`)
.add('ホバー時の線の色を変える　(default)', () => `
  <h4>ホバー時の線の色を変える</h4>
  <p>タイプがdefaultの時に使用</p>
  <rs-form-field class="text-field -hover -line-color">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-text-field-hover-bottom-line-color($color);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field -hover -line-color">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
    '@include rs-top-app-bar-type($type);\n\n' +
    '.text-field {\n' +
    '   &.-hover.-line-color {\n' +
    '      @include rs-text-field-hover-bottom-line-color(blue);\n' +
    '   }\n' +
    '}',
    { lang: 'scss' }
  )}
`)
.add('フォーカス時の線の色を変える　(default)', () => `
  <h4>フォーカス時の線の色を変える</h4>
  <p>タイプがdefaultの時に使用</p>
  <rs-form-field class="text-field  -ripple -line-color">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-text-field-line-ripple-color($color);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field -ripple -line-color">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
    '@include rs-top-app-bar-type($type);\n\n' +
    '.text-field {\n' +
    '   &.-ripple.-line-color {\n' +
    '      @include rs-text-field-line-ripple-color(blue);\n' +
    '   }\n' +
    '}',
    { lang: 'scss' }
  )}
`)
.add('線の色を変える　(outlined)', () => `
  <h4>線の色を変える</h4>
  <p>タイプがoutlinedの時に使用</p>
  <rs-form-field class="text-field -stroke-blue">
    <rs-textfield class="outlined" label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    '@include rs-text-field-stroke-color($color);\n' +
    '@include rs-textarea-stroke-color($color);',
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field -stroke-blue">
    <rs-textfield class="outlined" label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
    '@include rs-top-app-bar-type($type);\n\n' +
    '.text-field {\n' +
    '   &.-stroke-blue {\n' +
    '      @include rs-text-field-stroke-color(blue);\n' +
    '      @include rs-textarea-stroke-color(blue);\n' +
    '   }\n' +
    '}',
    { lang: 'scss' }
  )}
`)
.add('ホバー時の線の色を変える　(outlined)', () => `
  <h4>ホバー時の線の色を変える</h4>
  <p>タイプがoutlinedの時に使用</p>
  <rs-form-field class="text-field -hover -line-orange">
    <rs-textfield class="outlined" label="label"></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    '@include rs-text-field-hover-outline-color($color);\n' +
    '@include rs-textarea-hover-outline-color($color);',
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field -hover -line-orange">
    <rs-textfield class="outlined" label="label"></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
    '@include rs-top-app-bar-type($type);\n\n' +
    '.text-field {\n' +
    '   &.-hover.-line-orange {\n' +
    '      @include rs-text-field-hover-outline-color(orange);\n' +
    '      @include rs-textarea-hover-outline-color(orange);\n' +
    '   }\n' +
    '}',
    { lang: 'scss' }
  )}
`)
.add('フォーカス時の線の色を変える　(outlined)', () => `
  <h4>フォーカス時の線の色を変える</h4>
  <p>タイプがoutlinedの時に使用</p>
  <rs-form-field class="text-field -focused -line-orange">
    <rs-textfield class="outlined" label="label"></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    '@include rs-text-field-focused-outline-color($color);\n' +
    '@include rs-textarea-focused-outline-color($color);',
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field -focused -line-orange">
    <rs-textfield class="outlined" label="label"></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
    '@include rs-top-app-bar-type($type);\n\n' +
    '.text-field {\n' +
    '   &.-focused.-line-orange {\n' +
    '      @include rs-text-field-focused-outline-color(orange);\n' +
    '      @include rs-textarea-focused-outline-color(orange);\n' +
    '   }\n' +
    '}',
    { lang: 'scss' }
  )}
`)
.add('フォーカス時の色を一括で変える', () => `
  <h4>フォーカス時の線の色、ラベル、キャレットの色を変える</h4>
  <rs-form-field class="text-field -focused -blue-accessible">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    '@include rs-text-field-focused-color-accessible($color);',
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field -focused -blue-accessible">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
    '@include rs-top-app-bar-type($type);\n\n' +
    '.text-field {\n' +
    '   &.-focused.-blue-accessible {\n' +
    '      @include rs-text-field-focused-color-accessible(blue);\n' +
    '   }\n' +
    '}',
    { lang: 'scss' }
  )}
`)
.add('文字数カウンターの色を変える', () => `
  <h4>文字数カウンターの色を変える</h4>
  <rs-form-field class="text-field -counter-orange">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    '@include rs-text-field-character-counter-ink-color($color);',
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field -counter-orange">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
    '@include rs-top-app-bar-type($type);\n\n' +
    '.text-field {\n' +
    '   &.-counter-orange {\n' +
    '      @include rs-text-field-character-counter-ink-color(orange);\n' +
    '   }\n' +
    '}',
    { lang: 'scss' }
  )}
`)
.add('文字数カウンターの位置を変える', () => `
  <h4>文字数カウンターの色を変える</h4>
  <rs-form-field class="text-field -counter-position">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    '@include rs-text-field-character-counter-position($xOffset, $yOffset);',
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field -counter-position">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
    '@include rs-top-app-bar-type($type);\n\n' +
    '.text-field {\n' +
    '   &.-counter-position {\n' +
    '      @include rs-text-field-character-counter-position(0, 60px);\n' +
    '   }\n' +
    '}',
    { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>$xOffset：横の位置を指定</li>
    <li>$yOffset：縦の位置を指定</li>
  </ul>
`)
.add('テキストエリアの行間を変える', () => `
  <h4>テキストエリアの行間を変える</h4>
  <rs-form-field class="text-field -line-height">
    <rs-textarea label="label" placeholder="placeholder"></rs-textarea>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-textarea-line-height($height);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field -line-height">
    <rs-textarea label="label" placeholder="placeholder"></rs-textarea>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
    '@include rs-top-app-bar-type($type);\n\n' +
    '.text-field {\n' +
    '   &.-line-height {\n' +
    '      @include rs-textarea-line-height(60px);\n' +
    '   }\n' +
    '}',
    { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>$height：行間の指定</li>
  </ul>
`)
.add('テキストフィールド・テキストエリアの角の丸みを変える', () => `
  <h4>テキストフィールド・テキストエリアの角の丸みを変える</h4>
  <rs-form-field class="text-field -roundness">
    <rs-textfield class="outlined" label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <rs-form-field class="text-field -shape-radius">
    <rs-textarea label="label" placeholder="placeholder"></rs-textarea>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    '@include rs-text-field-shape-radius($radius);\n' +
    '@include rs-textarea-shape-radius($radius);',
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field -roundness">
    <rs-textfield class="outlined" label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
</rs-form-field>
<rs-form-field class="text-field -roundness">
    <rs-textarea label="label" placeholder="placeholder"></rs-textarea>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
    '@include rs-top-app-bar-type($type);\n\n' +
    '.text-field {\n' +
    '   &.-roundness {\n' +
    '      @include rs-text-field-shape-radius(10px);\n' +
    '      @include rs-textarea-shape-radius(10px);\n' +
    '   }\n' +
    '}',
    { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>$radius：角の丸みを指定</li>
  </ul>
`)
.add('左側のアイコン(leading icon)を設定する', () => `
  <h4>左側のアイコン(leading icon)を設定する</h4>
  <rs-form-field class="text-field -icon">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-text-field-icon-image($icon, $codepoint: '');`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field -icon">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
    '@include rs-top-app-bar-type($type);\n\n' +
    '.text-field {\n' +
    '   &.-icon {\n' +
    '      @include rs-text-field-icon-image(url(\'http://icons.iconarchive.com/icons/iconsmind/outline/512/Mail-icon.png\'));\n' +
    '   }\n' +
    '}',
    { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>$icon：iconの指定</li>
  </ul>
`)
.add('右側のアイコン(trairing icon)を設定する', () => `
  <h4>右側のアイコン(trairing icon)を設定する</h4>
  <rs-form-field class="text-field -action-icon">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-text-field-action-icon-image($icon, $codepoint: '');`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field -action-icon">
    <rs-textfield label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
    '@include rs-top-app-bar-type($type);\n\n' +
    '.text-field {\n' +
    '   &.-action-icon {\n' +
    '      @include rs-text-field-action-icon-image(url(\'http://icons.iconarchive.com/icons/iconsmind/outline/512/Mail-icon.png\'));\n' +
    '   }\n' +
    '}',
    { lang: 'scss' }
  )}
`)










