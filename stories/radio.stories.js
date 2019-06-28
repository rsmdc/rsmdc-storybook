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
  .add('概要', () => {
    return `
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
    `
  })
  .add('使用方法', () => {
    return ` 
      <h4>使用方法</h4>
<<<<<<< Updated upstream
      <p>
        <span><x-radio class="radio" name="group">radio1</x-button></span>
        <span><x-radio class="radio" name="group">radio2</x-button></span>
        <span><x-radio class="radio" name="group" disabled>radio3</x-button></span>
      </p>
      ${copyCodeBlock(
        '<x-radio class="radio" name="group">radio1</x-button>\n' +
        '<x-radio class="radio" name="group">radio2</x-button>\n' +
        '<x-radio class="radio" name="group" disabled>radio3</x-button>\n',
=======
      <div>
        <rs-radio id="radio1" label="radio1" name="group" ></rs-radio>
        <rs-radio id="radio2" label="radio2" name="group"></rs-radio>
        <rs-radio id="radio3" label="radio3" name="group" disabled></rs-radio>
      </div>
      ${copyCodeBlock(
        '<rs-radio id="radio1" label="radio1" name="group"></rs-radio>\n' +
        '<rs-radio id="radio2" label="radio2" name="group"></rs-radio>\n' +
        '<rs-radio id="radio3" label="radio3" name="group" disabled></rs-radio>\n',
>>>>>>> Stashed changes
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
          <td>ラジオボタンとラベルを紐付ける</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>name</td>
          <td>ラジオボタンをグルーピングする</td>
          <td>String</td>
          <td>同じグループにする際は同じnameをつける</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>ラジオボタンを無効にする</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>cheked</td>
          <td>ラジオボタンを選択状態にする</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
      </table>
    `
  })

storiesOf('Components|Radio/スタイルのカスタマイズ', module)
  .add('チェックマークの色を変える', () => {
    return `
      <p>チェックマークの色を、指定した色に変える。</p>
<<<<<<< Updated upstream
      <p><x-radio class="radio -ink-color" name="group">radio1</x-button></p>
=======
      <rs-radio id="radio1" class="my-radio -ink-color" label="radio1" name="group"></rs-radio>
      <rs-radio id="radio2" class="my-radio -ink-color" label="radio2" name="group"></rs-radio>
>>>>>>> Stashed changes
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-radio-ink-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
<<<<<<< Updated upstream
        '<x-radio class="radio -ink-color" name="group">radio1</x-button>',
=======
        '<rs-radio id="radio1" class="my-radio -ink-color" label="radio1" name="group"></rs-radio>\n' +
        '<rs-radio id="radio2" class="my-radio -ink-color" label="radio2" name="group"></rs-radio>',
>>>>>>> Stashed changes
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/radio/rs-radio.scss\';\n\n' +
<<<<<<< Updated upstream
        '.radio {\n' +
=======
        '.my-radio {\n' +
>>>>>>> Stashed changes
        '   &.-ink-color {\n' +
        '       @include rs-radio-ink-color(brown);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>$color: チェックマークの色を指定 <br> 例）#ee00ce</li>
      </ul>
    `
  })
  .add('リップルの色を変える', () => {
    return `
      <p>リップルの色を指定した色に変える。</p>
<<<<<<< Updated upstream
      <p><x-radio class="radio -states-color" name="group">radio1</x-button></p>
=======
      <rs-radio id="radio1" class="my-radio -states-color" label="radio1" name="group"></rs-radio>
      <rs-radio id="radio2" class="my-radio -states-color" label="radio2" name="group"></rs-radio>
>>>>>>> Stashed changes
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-radio-states-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
<<<<<<< Updated upstream
        '<x-radio class="radio -states-color" name="group">radio1</x-button>',
=======
        '<rs-radio id="radio1" class="my-radio -states-color" label="radio1" name="group"></rs-radio>\n' +
        '<rs-radio id="radio2" class="my-radio -states-color" label="radio2" name="group"></rs-radio>',
>>>>>>> Stashed changes
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/radio/rs-radio.scss\';\n\n' +
<<<<<<< Updated upstream
        '.radio {\n' +
        '   &.-ink-color {\n' +
        '       @include rs-radio-states-color(brown);\n' +
=======
        '.my-radio {\n' +
        '   &.-states-color {\n' +
        '       @include rs-radio-states-color(pink);\n' +
>>>>>>> Stashed changes
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('選択状態の線の色を変える', () => {
    return `
      <p>選択状態の時の線の色を、選択した色に変える。</p>
<<<<<<< Updated upstream
      <p><x-radio class="radio -checked-stroke-color" name="group">radio1</x-button></p>
=======
      <rs-radio id="radio1" class="my-radio -checked-stroke-color" label="radio1" name="group"></rs-radio>
      <rs-radio id="radio2" class="my-radio -checked-stroke-color" label="radio2" name="group"></rs-radio>
>>>>>>> Stashed changes
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-radio-checked-stroke-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
<<<<<<< Updated upstream
        '<x-radio class="radio -checked-stroke-color" name="group">radio1</x-button>',
=======
        '<rs-radio id="radio1" class="my-radio -checked-stroke-color" label="radio1" name="group"></rs-radio>\n' +
        '<rs-radio id="radio2" class="my-radio -checked-stroke-color" label="radio2" name="group"></rs-radio>',
>>>>>>> Stashed changes
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/radio/rs-radio.scss\';\n\n' +
<<<<<<< Updated upstream
        '.radio {\n' +
        '   &.-ink-color {\n' +
        '       @include rs-radio-states-color(brown);\n' +
=======
        '.my-radio {\n' +
        '   &.-checked-stroke-color {\n' +
        '       @include rs-radio-checked-stroke-color(orange);\n' +
>>>>>>> Stashed changes
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('未選択状態の線の色を変える', () => {
    return `
      <p>未選択状態の時の線の色を、選択した色に変える。</p>
<<<<<<< Updated upstream
      <p><x-radio class="radio -unchecked-stroke-color" name="group">radio1</x-button></p>
=======
      <rs-radio id="radio1" class="my-radio -unchecked-stroke-color" label="radio1" name="group"></rs-radio>
      <rs-radio id="radio2" class="my-radio -unchecked-stroke-color" label="radio2" name="group"></rs-radio>
>>>>>>> Stashed changes
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-radio-unchecked-stroke-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
<<<<<<< Updated upstream
        '<x-radio class="radio -unchecked-stroke-color" name="group">radio1</x-button>',
=======
        '<rs-radio id="radio1" class="my-radio -unchecked-stroke-color" label="radio1" name="group"></rs-radio>\n' +
        '<rs-radio id="radio2" class="my-radio -unchecked-stroke-color" label="radio2" name="group"></rs-radio>',
>>>>>>> Stashed changes
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/radio/rs-radio.scss\';\n\n' +
<<<<<<< Updated upstream
        '.radio {\n' +
        '   &.-unchecked-stroke-color {\n' +
        '       @include rs-radio-unchecked-stroke-color(brown);\n' +
=======
        '.my-radio {\n' +
        '   &.-unchecked-stroke-color {\n' +
        '       @include rs-radio-unchecked-stroke-color(orange);\n' +
>>>>>>> Stashed changes
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
<<<<<<< Updated upstream
  .add('ラベルの位置を変える', () => {
    return `
      <p>ラベルの位置を指定した位置に変える。</p>
      <p><x-radio class="radio -label-position" name="group">radio1</x-button></p>
=======
  .add('選択状態・未選択状態の線、チェックマークの色を一括で変える', () => {
    return `
      <p>未選択状態の時の線の色を、選択した色に変える。</p>
      <rs-radio id="radio1" class="my-radio -fill-color-accessible" label="radio1" name="group"></rs-radio>
      <rs-radio id="radio2" class="my-radio -fill-color-accessible" label="radio2" name="group"></rs-radio>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-radio-fill-color-accessible($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<rs-radio id="radio1" class="my-radio -fill-color-accessible" label="radio1" name="group"></rs-radio>\n' +
        '<rs-radio id="radio2" class="my-radio -fill-color-accessible" label="radio2" name="group"></rs-radio>',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/radio/rs-radio.scss\';\n\n' +
        '.my-radio {\n' +
        '   &.-fill-color-accessible {\n' +
        '       @include rs-radio-fill-color-accessible(pink);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('ラベルの位置を変える', () => {
    return `
      <p>ラベルの位置を指定した位置に変える。</p>
      <div class="right-group">
        <rs-radio id="radio1" class="my-radio -label-position" label="radio1" name="group1"></rs-radio>
        <rs-radio id="radio2" class="my-radio -label-position" label="radio2" name="group1"></rs-radio>
      </div>
      <div class="left-group -left">
        <rs-radio id="radio3" class="my-radio -label-position" label="radio3" name="group2"></rs-radio>
        <rs-radio id="radio4" class="my-radio -label-position" label="radio4" name="group2"></rs-radio>
      </div>
>>>>>>> Stashed changes
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-radio-label-position($position);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
<<<<<<< Updated upstream
        '<x-radio class="radio -label-position" name="group">radio1</x-button>',
=======
        '<div class="right-group">\n' +
        '   <rs-radio id="radio1" class="my-radio" label="radio1" name="group1"></rs-radio>\n' +
        '   <rs-radio id="radio2" class="my-radio " label="radio2" name="group1"></rs-radio>\n' +
        '</div>\n' +
        '<div class="left-group">\n' +
        '   <rs-radio id="radio3" class="my-radio" label="radio3" name="group2"></rs-radio>\n' +
        '   <rs-radio id="radio4" class="my-radio " label="radio4" name="group2"></rs-radio>\n' +
        '</div>',
>>>>>>> Stashed changes
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/radio/rs-radio.scss\';\n\n' +
        '.radio {\n' +
        '   &.-label-position {\n' +
        '       @include rs-radio-label-position(left);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>
          $position: 位置を指定 <br>
          leftとrightがある（ defaultはright ）
        </li>
      </ul>
    `
  })
