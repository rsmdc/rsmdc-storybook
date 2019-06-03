import { storiesOf } from '@storybook/html'
import { Radio } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'

window.customElements.define('x-radio', Radio)

storiesOf('Components|Radio', module)
  .addDecorator(withLinks)
  .add('概要', () => `


  `)
  .add('使い方', () => `
    ${copyCodeBlock(
      '<x-radio class="radio" name="group">radio1</x-button>\n' +
      '<x-radio class="radio" name="group">radio2</x-button>\n' +
      '<x-radio class="radio" name="group" disabled>radio3</x-button>\n',
      { lang: 'html' }
    )}
    <h4>HTML要素</h4>
    <p>custom elementsを<code>x</code>のプレフィックスをつけて定義した前提です。<br>
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
        <td>x-radio</td>
        <td>ラジオボタンを表示します</td>
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
        <td>ラジオボタンとラベルを紐付けます</td>
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
        <td>ラジオボタンを無効します</td>
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

