import { storiesOf } from '@storybook/html'
import { Menu } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'

window.customElements.define('x-menu', Menu)


storiesOf('Components|menu', module)
  .addDecorator(withLinks)
  .add('概要', () => `


  `)
  .add('使い方', () => `
    ${copyCodeBlock(
      '<x-menu class="my-menu">\n' +
      '   <x-list class="list">\n' +
      '       ...\n' +
      '   </x-listt>\n' +
      '</x-app-layout>\n',
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
        <td>x-menu</td>
        <td>メニュー本体を表示します</td>
        <td><code>x-list</code></td>
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
        <td>opened</td>
        <td>メニューを表示状態にします</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
    </table>
  `)
  

