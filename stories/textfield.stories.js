import { storiesOf } from '@storybook/html'
import { TextField, TextFieldAction, TextArea, FormError, FormHelper, FormField } from '@rsmdc/rsmdc'
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
      <li>
        default <br>
        <a class="link" href="#" data-sb-kind="Components|textfield/スタイルのカスタマイズ/テキストフィールドのタイプを変える" data-sb-story="default">参照はこちら</a>
      </li>
      <li>
        outlined <br>
        枠線がつく <br>
        <a href="link" href="#" data-sb-kind="Components|textfield/スタイルのカスタマイズ/テキストフィールドのタイプを変える" data-sb-story="outlined">参照はこちら</a>
      </li>
    </ul>
  `)

  .add('使用方法', () => `
    <h4>Textfield</h4>
    <rs-form-field class="text-field">
      <rs-textfield class="input" label="label" maxlength="7" countable></rs-textfield>
      <rs-form-helper>helper text</rs-form-helper>
      <rs-form-error>error text</rs-form-error>
    </rs-form-field>
    <rs-form-field class="text-field">
      <rs-textfield class="input -outlined" label="label"></rs-textfield>
      <rs-form-helper>helper text</rs-form-helper>
      <rs-form-error>error text</rs-form-error>
    </rs-form-field>
    <rs-form-field class="text-field">
      <rs-textfield class="input" type="date" label="label"></rs-textfield>
      <rs-form-helper>helper text</rs-form-helper>
      <rs-form-error>error text</rs-form-error>
    </rs-form-field>
    <rs-form-field class="text-field" error>
      <rs-textfield class="input" label="label"></rs-textfield>
      <rs-form-helper>helper text</rs-form-helper>
      <rs-form-error>error text</rs-form-error>
    </rs-form-field>
    <rs-form-field class="text-field" disabled>
      <rs-textfield class="input" label="label"></rs-textfield>
      <rs-form-helper>helper text</rs-form-helper>
      <rs-form-error>error text</rs-form-error>
    </rs-form-field>
    <rs-form-field class="text-field">
      <rs-textarea class="input" label="label"></rs-textarea>
      <rs-form-helper>helper text</rs-form-helper>
      <rs-form-error>error text</rs-form-error>
    </rs-form-field>

    ${copyCodeBlock(
`<rs-form-field class="text-field">
  <rs-textfield class="input" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>

<rs-form-field class="text-field">
  <rs-textfield class="input -outlined" label="label" />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>

<rs-form-field class="text-field">
  <rs-textfield class="input" type="date" label="label" />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>

<rs-form-field class="text-field" error>
  <rs-textfield class="input" label="label" />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>

<rs-form-field class="text-field" disabled>
  <rs-textfield class="input" label="label" />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>

<rs-form-field class="text-field">
  <rs-textarea class="input" label="label" />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>
`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/textfield/rs-textfield.scss';

.text-field {
  > .input.-outlined {
    @include rs-textfield-type(outlined);
  }
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
        <td><code>rs-textfield</code>のみ有効です</td>
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
        <td>defaultは<code>text</code>です<br>
          日付入力などに変更したい時、使用してください<br>
          テキストフィールド(<code>rs-textfield</code>)のみ有効です
        </td>
      </tr>
      <tr>
        <td>cols</td>
        <td>テキストエリアの幅を指定します</td>
        <td>String</td>
        <td>テキストエリア(<code>rs-textarea</code>)のみ有効です</td>
      </tr>
      <tr>
        <td>rows</td>
        <td>テキストエリアの高さを指定します</td>
        <td>String</td>
        <td>テキストエリア(<code>rs-textarea</code>)のみ有効です</td>
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
    <rs-form-field class="text-field">
      <rs-textfield label="label" maxlength="7" countable></rs-textfield>
      <rs-form-helper>helper text</rs-form-helper>
      <rs-form-error>error text</rs-form-error>
    </rs-form-field>

    <rs-form-field class="text-field -dense">
      <rs-textfield label="label" maxlength="7" countable></rs-textfield>
      <rs-form-helper>helper text</rs-form-helper>
      <rs-form-error>error text</rs-form-error>
    </rs-form-field>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
  `@include rs-textfield-type($type);
  ※denseに使用する時のみ`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    <p>
      Denseタイプを作りたい時、<code>rs-textfield-type</code>のmixinにdenseを追加します。<br>
      <code>@include rs-textfield-type(dense);</code>のようになります。
    </p>
    ${copyCodeBlock(
`<rs-form-field class="text-field">
  <rs-textfield class="input" label="label" maxlength="7" countable />
  <rs-form-helper class="helper">helper text</rs-form-helper>
  <rs-form-error class="error">error text</rs-form-error>
</rs-form-field>

<rs-form-field class="text-field">
  <rs-textfield class="input -dense" label="label" maxlength="7" countable />
  <rs-form-helper class="helper">helper text</rs-form-helper>
  <rs-form-error class="error">error text</rs-form-error>
</rs-form-field>`,
      { lang: 'html' }
    )}

    ${copyCodeBlock(
`@import '@rsmdc/textfield/rs-textfield.scss';
      
.text-field {
  &.input.-dense {
    @include rs-textfield-type(dense);
  }
}`,
      { lang: 'scss' }
    )}
  `)
  .add('outlined', () => `
    <h4>outlined</h4>
    <rs-form-field class="text-field">
      <rs-textfield class="input -outlined" label="label" maxlength="7" countable></rs-textfield>
      <rs-form-helper>helper text</rs-form-helper>
      <rs-form-error>error text</rs-form-error>
    </rs-form-field>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-textfield-type($type);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-form-field class="text-field">
  <rs-textfield class="input -outlined" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/textfield/rs-textfield.scss';

.text-field {
  > .input.-outlined {
    @include rs-textfield-type(outlined);
  }
}`,
      { lang: 'scss' }
    )}
  `)

storiesOf('Components|Textfield/スタイルのカスタマイズ', module)
.add('入力文字の色を変える', () => `
  <h4>入力文字の色を変える</h4>
  <rs-form-field class="text-field">
    <rs-textfield class="input -ink-orange" label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <rs-form-field class="text-field">
    <rs-textarea class="input -textarea -ink-orange" label="label" maxlength="7" countable></rs-textarea>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
`@include rs-textfield-ink-color($color);
@include rs-textarea-ink-color($color);
`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field">
  <rs-textfield class="input -ink-orange" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>

<rs-form-field class="text-field">
  <rs-textarea class="input -textarea -ink-orange" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
      { lang: 'html' }
    )}
  ${copyCodeBlock(
`@import '@rsmdc/textfield/textfield.scss';

.text-field {
  > .input.-ink-orange:not(.-textarea)  {
    @include rs-textfield-ink-color(orange);
  }

  > .input.-ink-orange.-textarea {
    @include rs-textarea-ink-color(orange);
  }
}`,
    { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>$color: インクの色コード <br> 例）#ee00ce</li>
  </ul>
`)
.add('キャレットの色を変える', () => `
  <h4>キャレットの色を変える</h4>
  <rs-form-field class="text-field">
    <rs-textfield class="input -caret-orange" label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <rs-form-field class="text-field">
    <rs-textarea class="input -caret-orange -textarea" label="label" maxlength="7" countable></rs-textarea>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
`@include rs-textfield-caret-color($color);
@include rs-textarea-caret-color($color);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field">
  <rs-textfield class="input -caret-orange" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>

<rs-form-field class="text-field">
  <rs-textarea class="input -caret-orange -textarea" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
      { lang: 'html' }
    )}
  ${copyCodeBlock(
`@import '@rsmdc/textfield/textfield.scss';

.text-field {
  > .input.-caret-orange:not(.-textarea)  {
    @include rs-textfield-caret-color(orange);
  }

  > .input.-caret-orange.-textarea {
    @include rs-textarea-caret-color(orange);
  }
}`,
    { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>$color: キャレットの色を指定 <br> 例）#ee00ce</li>
  </ul>
`)
.add('背景色を変える', () => `
  <h4>背景色を変える</h4>
  <rs-form-field class="text-field">
    <rs-textfield class="input -fill-lavender" label="label" maxlength="7" countable />
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <rs-form-field class="text-field">
    <rs-textarea class="input -fill-lavender -textarea" label="label" maxlength="7" countable />
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
`@include rs-textfield-fill-color($color);
@include rs-textarea-fill-color($color);
`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field">
  <rs-textfield class="input -fill-lavender" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>

<rs-form-field class="text-field">
  <rs-textarea class="input -fill-lavender -textarea" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
`@import '@rsmdc/textfield/textfield.scss';

.text-field {
  > .input.-fill-lavender:not(.-textarea)  {
    @include rs-textfield-fill-color(lavender);
  }

  > .input.-fill-lavender.-textarea {
    @include rs-textarea-fill-color(lavender);
  }
}`,
    { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>$color: 背景色の指定 <br> 例）#ee00ce</li>
  </ul>
`)
.add('下線の色を変える', () => `
  <h4>下線の色を変える</h4>
  <rs-form-field class="text-field">
    <rs-textfield class="input -line-blue" label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
`@include rs-textfield-bottom-line-color($color);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field">
  <rs-textfield class="input -line-blue" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
`@import '@rsmdc/textfield/textfield.scss';

.text-field {
  > .input.-fill-lavender:not(.-textarea)  {
    @include rs-textfield-bottom-line-color(rgb(23, 179, 223));
  }
}`,
    { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>$color: 下線の色を指定 <br> 例）#ee00ce</li>
  </ul>
`)
.add('ホバー時の下線の色を変える', () => `
  <h4>ホバー時の下線の色を変える</h4>
  <rs-form-field class="text-field">
    <rs-textfield class="input -hover-line-blue" label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
`@include rs-textfield-hover-bottom-line-color($color);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field">
  <rs-textfield class="input -hover-line-blue" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>
`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
`@import '@rsmdc/textfield/textfield.scss';

.text-field {
  > .input.-hover-line-blue {
    @include rs-textfield-bottom-line-color(rgb(23, 179, 223));
  }
}`,
    { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>$color: 下線の色を指定（ホバーした際に適用される）<br> 例）#ee00ce</li>
  </ul>
`)
.add('フォーカス時の下線の色を変える', () => `
  <h4>フォーカス時の下線の色を変える</h4>
  <rs-form-field class="text-field">
    <rs-textfield class="input -focus-line-blue" label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
`@include rs-textfield-line-ripple-color($color);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field">
  <rs-textfield class="input -focus-line-blue" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
`@import '@rsmdc/textfield/textfield.scss';

.text-field {
  > .input.-focus-line-blue {
    @include rs-textfield-line-ripple-color(rgb(23, 179, 223));
  }
}`,
    { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>$color: 下線の色を指定（フォーカスした際に適用される）<br> 例）#ee00ce</li>
  </ul>
`)
.add('枠線の色を変える', () => `
  <h4>枠線の色を変える</h4>
  <rs-form-field class="text-field">
    <rs-textfield class="input -outlined -line-blue" label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <rs-form-field class="text-field">
    <rs-textarea class="input -textarea -line-blue" label="label" maxlength="7" countable></rs-textarea>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
`@include rs-textfield-stroke-color($color);
@include rs-textarea-stroke-color($color);
`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field">
  <rs-textfield class="input -outlined -line-blue" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>

<rs-form-field class="text-field">
  <rs-textarea class="input -textarea -line-blue" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
`@import '@rsmdc/textfield/textfield.scss';

.text-field {
  > .input.-outlined.-line-blue {
    @include rs-textfield-type(outlined);
    @include rs-textfield-stroke-color(rgb(23, 179, 223));
  }
  > .input.-textarea.-line-blue {
    @include rs-textarea-stroke-color(rgb(23, 179, 223));
  }  
}`,
    { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>$color: 枠線の色を指定 <br> 例）#ee00ce</li>
  </ul>
`)
.add('ホバー時の枠線の色を変える', () => `
  <h4>ホバー時の枠線の色を変える</h4>
  <rs-form-field class="text-field">
    <rs-textfield class="input -outlined -hover-line-blue" label="label" maxlength="7" countable></rs-text-field>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <rs-form-field class="text-field">
    <rs-textarea class="input -textarea -hover-line-blue" label="label" maxlength="7" countable></re-textarea>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
`@include rs-textfield-hover-outline-color($color);
@include rs-textarea-hover-outline-color($color);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field">
  <rs-textfield class="input -outlined -hover-line-blue" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>

<rs-form-field class="text-field">
  <rs-textarea class="input -textarea -hover-line-blue" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
`@import '@rsmdc/textfield/textfield.scss';

.text-field {
  > .input.-outlined.-hover-line-blue {
    @include rs-textfield-type(outlined);
    @include rs-textfield-hover-outline-color(rgb(23, 179, 223));
  }
  > .input.-textarea.-hover-line-blue {
    @include  rs-textarea-hover-outline-color(rgb(23, 179, 223));
  }
}`,
    { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>$color: 枠線の色を指定（ホバーした際に適用される） <br> 例）#ee00ce</li>
  </ul>
`)
.add('フォーカス時の枠線の色を変える', () => `
  <h4>フォーカス時の枠線の色を変える</h4>
  <rs-form-field class="text-field">
    <rs-textfield class="input -outlined -focus-line-blue" label="label" maxlength="7" countable></rs-text-field>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <rs-form-field class="text-field">
    <rs-textarea class="input -textarea -focus-line-blue" label="label" maxlength="7" countable></re-textarea>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
`@include rs-textfield-focused-outline-color($color);
@include rs-textarea-focused-outline-color($color)`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field">
  <rs-textfield class="input -outlined -focus-line-blue" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>

<rs-form-field class="text-field">
  <rs-textarea class="input -textarea -focus-line-blue" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
`@import '@rsmdc/textfield/textfield.scss';

.text-field {
  > .input.-focus-line-blue {
    @include rs-form-field-focus-label-ink-color(rgb(23, 179, 223));
  }
  > .input.-outlined.-focus-line-blue {
    @include rs-textfield-type(outlined);
    @include rs-textfield-focused-outline-color(rgb(23, 179, 223));
  }
  > .input.-textarea.-focus-line-blue {
    @include rs-textarea-focused-outline-color(rgb(23, 179, 223));
  }
}`,
    { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>$color: 枠線の色を指定（フォーカスした際に適用される） <br> 例）#ee00ce</li>
  </ul>
`)
.add('フォーカス時の色を一括で変える', () => `
  <h4>フォーカス時の線の色、ラベル、キャレットの色を変える</h4>
  <rs-form-field class="text-field">
    <rs-textfield class="input -focus-blue" label="label" maxlength="7" countable></rs-text-field>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <rs-form-field class="text-field">
    <rs-textfield class="input -outlined -focus-blue" label="label" maxlength="7" countable></rs-text-field>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <rs-form-field class="text-field">
    <rs-textarea class="input -textarea -focus-blue" label="label" maxlength="7" countable></re-textarea>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
`@include rs-textfield-focused-color-accessible($color);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field">
  <rs-textfield class="input -focus-blue" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>

<rs-form-field class="text-field">
  <rs-textfield class="input -outlined -focus-blue" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>

<rs-form-field class="text-field">
  <rs-textarea class="input -textarea -focus-blue" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
`@import '@rsmdc/textfield/textfield.scss';

.text-field {
  > .input.-outlined {
    @include rs-textfield-type(outlined);
  }
  > .input.-focus-blue {
    @include rs-textfield-focused-color-accessible(rgb(23, 179, 223));
  }
}`,
    { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>$color: 線、ラベル、キャレットの色を指定（フォーカスした際に適用される） <br> 例）#ee00ce</li>
  </ul>
`)
.add('文字数カウンターの色を変える', () => `
  <h4>文字数カウンターの色を変える</h4>
  <rs-form-field class="text-field">
    <rs-textfield class="input -counter-orange" label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
`@include rs-textfield-character-counter-ink-color($color);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field">
  <rs-textfield class="input -counter-orange" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
`@import '@rsmdc/textfield/textfield.scss';

.text-field {
  > .input.-counter-orange {
    @include rs-textfield-character-counter-ink-color(orange);
  }
}`,
    { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>$color: 文字数カウンターの色を指定</li>
  </ul>
`)
.add('文字数カウンターの位置を変える', () => `
  <h4>文字数カウンターの位置を変える</h4>
  <rs-form-field class="text-field">
    <rs-textfield class="input -top" label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
'@include rs-textfield-character-counter-position($xOffset, $yOffset);',
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field">
  <rs-textfield class="input -top" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
`@import '@rsmdc/textfield/textfield.scss';

.text-field {
  > .input.-top {
    @include rs-textfield-character-counter-position(0, 60px);
  }
}`,
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
  <rs-form-field class="text-field">
    <rs-textarea class="input -wide" cols="20" rows="5" label="label" placeholder="placeholder"></rs-textarea>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-textarea-line-height($height);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field">
  <rs-textarea class="input -wide" cols="20" rows="5" label="label" placeholder="placeholder" />
</rs-form-field>
`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
`@import '@rsmdc/textfield/textfield.scss';

.text-field {
  > .input.-wide {
    @include rs-textarea-line-height(10px);
  }
}`,
    { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>$height：行間の指定</li>
  </ul>
`)
.add('テキストフィールド・テキストエリアの角の丸みを変える', () => `
  <h4>テキストフィールド・テキストエリアの角の丸みを変える</h4>
  <rs-form-field class="text-field">
    <rs-textfield class="input -roundness" label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <rs-form-field class="text-field">
    <rs-textarea class="input -textarea -roundness" label="label" placeholder="placeholder"></rs-textarea>
    <rs-form-helper>helper text</rs-form-helper>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
`@include rs-textfield-shape-radius($radius);
@include rs-textarea-shape-radius($radius);
`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field">
  <rs-textfield class="input -roundness" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>

<rs-form-field class="text-field">
  <rs-textarea class="input -textarea -roundness" label="label" placeholder="placeholder" />
  <rs-form-helper>helper text</rs-form-helper>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
`@import '@rsmdc/textfield/textfield.scss;'

.text-field {
  > .input.-roundness:not(.-textarea) {
    @include rs-textfield-shape-radius(20px);
  }
  > .input.-roundness.-textarea {
    @include rs-textarea-shape-radius(20px);
  }
}`,
    { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>$radius：角の丸みのサイズを指定 <br> 例）15px</li>
  </ul>
`)
.add('左側のアイコン(leading icon)を設定する', () => `
  <h4>左側のアイコン(leading icon)を設定する</h4>
  <rs-form-field class="text-field">
    <rs-textfield class="input -leadingicon" label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <rs-form-field class="text-field">
    <rs-textfield class="input -leadingicon -png" label="label" maxlength="7" countable></rs-textfield>
    <rs-form-helper>helper text</rs-form-helper>
    <rs-form-error>error text</rs-form-error>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
`@include rs-textfield-icon-image($icon, $codepoint: '');`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field">
  <rs-textfield class="input -leadingicon" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>

<rs-form-field class="text-field">
  <rs-textfield class="input -leadingicon -png" label="label" maxlength="7" countable />
  <rs-form-helper>helper text</rs-form-helper>
  <rs-form-error>error text</rs-form-error>
</rs-form-field>
`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
`@import '@rsmdc/textfield/textfield.scss';

.text-field {
  > .input.-leadingicon:not(.-png) {
    @include rs-textfield-icon-image(
      Material Icons, 
      map-get($material-icons-codepoints, mail_outline)
    );
  }
  > .input.-leadingicon.-png {
    @include rs-textfield-icon-image(url('http://icons.iconarchive.com/icons/iconsmind/outline/512/Mail-icon.png'));
  }
}`,
    { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>$icon: <br>
      ・icon-font: font-family<br>
        (例)  Material Icons<br>
      ・image    : 画像パス<br>
        (例)  url('example.png')
    </li>
    <li>$codepoint: コードポイント　(icon-fontの時のみ)<br>
        (例)  e063
    </li>
  </ul>
`)
.add('右側のアイコン(trairing icon)を設定する', () => `
  <h4>右側のアイコン(trairing icon)を設定する</h4>
  <rs-form-field class="text-field">
    <rs-textfield class="input" label="label" maxlength="7" countable>
      <rs-textfield-trailing class="icon"></rs-textfield-trailing>
    </rs-textfield>
  </rs-form-field>
  <rs-form-field class="text-field">
    <rs-textfield class="input" label="label" maxlength="7" countable>
      <rs-textfield-trailing class="icon -png"></rs-textfield-trailing>
    </rs-textfield>
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
`@include rs-textfield-action-icon-image($icon, $codepoint: '');`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field">
  <rs-textfield class="input" label="label" maxlength="7" countable>
    <rs-textfield-trailing class="icon" />
  </rs-textfield>
</rs-form-field>

<rs-form-field class="text-field">
  <rs-textfield class="input" label="label" maxlength="7" countable>
    <rs-textfield-trailing class="icon -png" />
  </rs-textfield>
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
`@import '@rsmdc/textfield/textfield.scss';

.text-field {
  > .input > .icon:not(.-png) {
    @include rs-textfield-action-icon-image(
      Material Icons, 
      map-get($material-icons-codepoints, mail_outline)
    );
  }
  > .input > .icon.-png {
    @include rs-textfield-action-icon-image(url('http://icons.iconarchive.com/icons/iconsmind/outline/512/Mail-icon.png'));
  }
}`,
    { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>$icon: <br>
      ・icon-font: font-family<br>
        (例)  Material Icons<br>
      ・image    : 画像パス<br>
        (例)  url('example.png')
    </li>
    <li>$codepoint: コードポイント　(icon-fontの時のみ)<br>
        (例)  e063
    </li>
  </ul>
`)

.add('横幅を変える', () => `
  <h4>横幅を指定したサイズに変える</h4>
  <rs-form-field class="text-field">
    <rs-textfield class="input -width" label="label" maxlength="7" countable />
  </rs-form-field>
  <rs-form-field class="text-field">
    <rs-textarea class="input -textarea -width" cols="20" rows="3" label="label" placeholder="placeholder" />
  </rs-form-field>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
`@include rs-textfield-width($width);
@include rs-textarea-width($width);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-form-field class="text-field">
  <rs-textfield class="input -width" label="label" maxlength="7" countable />
</rs-form-field>
  
<rs-form-field class="text-area">
  <rs-textarea class="input -textarea -width" cols="20" rows="5" label="label" placeholder="placeholder" />
</rs-form-field>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
`@import '@rsmdc/textfield/textfield.scss';

.text-field {
  > .input.-width {
    @include rs-textfield-width(300px);
  }
  > .input.-textarea.-width {
    @include rs-textarea-width(400px);
  }
}`,
    { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>$width: 横幅を指定<br>例）300px</li>
  </ul>
`)








