import { storiesOf } from '@storybook/html'
import { TabItem, TabBar } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'

window.customElements.define('tab-item', TabItem)
window.customElements.define('x-tab-bar', TabBar)

storiesOf('Components|Tabs', module)
  .addDecorator(withLinks)
  .add('概要', () => `


  `)
  .add('使い方', () => `
    ${copyCodeBlock(
      '<x-tab-bar class="tab-bar">\n' +
      '   <tab-item class="tab" activated><tab-item>\n' +
      '   <tab-item class="tab"><tab-item>\n' +
      '   <tab-item class="tab"><tab-item>\n' +
      '</x-tab-bar>\n',
      { lang: 'html' }
    )}
    <h4>HTML要素</h4>
    <p>custom elementsを<code>x</code>と<code>tab</code>のプレフィックスをつけて定義した前提です。<br>
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
        <td>x-tab-bar</td>
        <td>タブバー本体を表示します</td>
        <td><code>tab-item</code></td>
        <td>-</td>
      </tr>
      <tr>
        <td>x-tab-bar</td>
        <td>タブを表示します</td>
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
        <td>activated</td>
        <td>タブを活性化状態にします</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
    </table>
  `)
