import { storiesOf } from '@storybook/html'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'
const switch1 = require('@rsmdc/switch/loader')

import './css/style.scss'
import './css/switch.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'


switch1.defineCustomElements(window)

storiesOf('Components|Switch', module)
  .addDecorator(withLinks)
  .add('概要', () => `
    <h4>Switch</h4>
    <p>スイッチは単一の設定の状態をオンまたはオフに切り替える。</p>
    参考: <a href="https://material.io/design/components/selection-controls.html#switches">https://material.io/design/components/selection-controls.html#switches</a>

  `)
  .add('使用方法', () => `
    <h4>使用方法</h4>
    <div class="switch-demo">
      <rs-switch class="rs-switch" id="switch" label="ラベル"></rs-switch>
      <rs-switch class="rs-switch" id="switch" label="ラベル" disabled></rs-switch>
    </div>
    ${copyCodeBlock(
`<rs-switch class="switch" id="switch" label="ラベル" />
<rs-switch class="switch" id="switch" label="ラベル" disabled />`,
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
        <td>rs-switch</td>
        <td>スイッチ本体を表示します</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>
    <h4>HTML属性</h4>
    <p>下記HTML属性をつけることで、custom elementsの状態が変化します</p>
    <table>
      <tr>
        <th>属性</th>
        <th>説明</th>
        <th>タイプ</th>
        <th>備考</th>
      </tr>
      <tr>
        <td>id</td>
        <td>スイッチとラベルを紐付けます</td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>label</td>
        <td>ラベルを表示します</td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>checked</td>
        <td>スイッチを選択された状態にします</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>スイッチを無効にします</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
    </table>
    <h4>テーマ変数</h4>
    <p>
    　rs-switchで使われるテーマ変数です。 <br>
    　下記変数に新しく色を指定することで、テーマカラーが上書きされます。
    </p>
    <table>
      <tr>
        <th>変数名</th>
        <th>説明</th>
      </tr>
      <tr>
        <td>$rs-theme-secondary</td>
        <td>選択状態の背景色に関わります。</td>
      </tr>
      <tr>
        <td>$rs-theme-surface</td>
        <td>未選択状態の背景色に関わります。</td>
      </tr>
      <tr>
        <td>$rs-theme-on-surface</td>
        <td>未選択状態のバーの色に関わります。</td>
      </tr>
    </table>
  `)
