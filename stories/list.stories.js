import { storiesOf } from '@storybook/html'
import { ListTextPrimary, ListTextSecondary, ListText, ListGraphic, ListMeta, ListItem, ListDivider, ListSubheader, ListGroup, List } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'

window.customElements.define('list-primary', ListTextPrimary)
window.customElements.define('list-secondary', ListTextSecondary)
window.customElements.define('list-text', ListText)
window.customElements.define('list-graphic', ListGraphic)
window.customElements.define('list-meta', ListMeta)
window.customElements.define('list-item', ListItem)
window.customElements.define('list-divider', ListDivider)
window.customElements.define('list-subheader', ListSubheader)
window.customElements.define('x-list-group', ListGroup)
window.customElements.define('x-list', List)

storiesOf('Components|List', module)
  .addDecorator(withLinks)
  .add('概要', () => `
  
  `)
  .add('使い方', () => `
    <h4>使い方</h4>
    ${copyCodeBlock(
      '<x-list class="list">\n' +
      '   <list-item class="item">\n' +
      '      <item-text class="text">テキスト</item-text>\n' +
      '      <item-meta class="meta">メタ情報</item-meta>\n' +
      '   </list-item>\n' +
      '   <list-item class="item">\n' +
      '      <item-text class="text">テキスト</item-text>\n' +
      '      <item-meta class="meta">メタ情報</item-meta>\n' +
      '   </list-item>\n' +
      '</x-list>\n\n' +
      '<x-list-group class="group-list">\n' +
      '   <x-list class="list -twoline -avatarlist">\n' +
      '      <list-subheader class="subheader">リストタイトル</list-subheader>\n' +
      '      <list-divider />\n' +
      '      <list-item class="item">\n' +
      '         <item-graphic class="graphic" />\n' +
      '         <item-text class="text">\n' +
      '             <item-primary class="primary">1行目</item-text>\n' +
      '             <item-secondary class="secondary">2行目</item-text>\n' +
      '         </item-text>\n' +
      '      </list-item>\n' +
      '      <list-item class="item">\n' +
      '         <item-graphic class="graphic" />\n' +
      '         <item-text class="text">\n' +
      '             <item-primary class="primary">1行目</item-text>\n' +
      '             <item-secondary class="secondary">2行目</item-text>\n' +
      '         </item-text>\n' +
      '       </list-item>\n' +
      '   </x-list>\n' +
      '   <x-list class="list -twoline -avatarlist">\n' +
      '      <list-subheader class="subheader">リストタイトル</list-subheader>\n' +
      '      <list-divider />\n' +
      '      <list-item class="item">\n' +
      '         <item-graphic class="graphic" />\n' +
      '         <item-text class="text">\n' +
      '             <item-primary class="primary">1行目</item-text>\n' +
      '             <item-secondary class="secondary">2行目</item-text>\n' +
      '         </item-text>\n' +
      '      </list-item>\n' +
      '      </list-item>\n' +
      '      <list-item class="item">\n' +
      '         <item-graphic class="graphic" />\n' +
      '         <item-text class="text">\n' +
      '             <item-primary class="primary">1行目</item-text>\n' +
      '             <item-secondary class="secondary">2行目</item-text>\n' +
      '         </item-text>\n' +
      '         <item-meta class="meta">メタ情報</item-meta>\n' +
      '       </list-item>\n' +
      '   </x-list>\n' +
      '</x-list-group>\n',
      { lang: 'html' }
    )}
    ${copyCodeBlock(
      '.x-list-group {\n' +
      '   > .list {\n' +
      '      @include rs-list-type(twoline, avatar-list);\n' +
      '   }\n' +
      '}',
      { lang: 'scss' }
    )}
    <h4>HTML要素</h4>
    <p>custom elementsを<code>x</code>と<code>card</code>のプレフィックスをつけて定義した前提です。<br>
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
        <td>x-list-group</td>
        <td>複数のリストをグルーピングします</td>
        <td><code>x-list</code></td>
        <td>-</td>
      </tr>
      <tr>
        <td>x-list</td>
        <td>リスト本体を表示します</td>
        <td>
          <ul>
            <li><code>list-subehader</code></li>
            <li><code>list-divider</code></li>
            <li><code>list-item</code></li>
          </ul>
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>list-subheader</td>
        <td>リストのサブヘッダー部分を示します</td>
        <td>テキスト</td>
        <td>-</td>
      </tr>
      <tr>
        <td>list-divider</td>
        <td>リストの仕切り線を表示します</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>list-item</td>
        <td>リストのアイテム部分を表示します</td>
        <td>
          <ul>
            <li><code>list-graphic</code></li>
            <li><code>list-text</code></li>
            <li><code>list-meta</code></li>
          </ul>
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>list-graphic</td>
        <td>アイテムの画像部分を表示します</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>list-text</td>
        <td>アイテムの主要テキスト部分を表示します</td>
        <td>
          <ul>
            <li><code>list-primary</code></li>
            <li><code>list-secondary</code></li>
          </ul>
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>list-primary</td>
        <td>テキストの1行目を表示します</td>
        <td>テキスト</td>
        <td>リストタイプがtwo-lineの場合のみ有効です</td>
      </tr>
      <tr>
        <td>list-secondary</td>
        <td>テキストの2行目を表示します</td>
        <td>テキスト</td>
        <td>リストタイプがtwo-lineの場合のみ有効です</td>
      </tr>
      <tr>
        <td>list-meta</td>
        <td>アイテムのメタ情報部分を表示します</td>
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
        <td>disabled</td>
        <td>アイテムを無効にします</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
      <tr>
        <td>selected</td>
        <td>アイテムを選択状態にします</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
      <tr>
        <td>activated</td>
        <td>アイテムを活性化状態にします</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
    </table>
  `)
