import { storiesOf } from '@storybook/html'
import { ListTextPrimary, ListTextSecondary, ListText, ListGraphic, ListMeta, ListItem, ListDivider, ListSubheader, ListGroup, List } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'
import './css/list.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

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
  .add('概要', () => {
    return `
    <h4>List</h4>
    <p>
      リストはテキストや画像の連続したグループ。<br>
      アイコンとテキストで表される主要なアクションと補足的なアクションを含むアイテムで構成されている。
    </p>
    <p>
      参考:
      <a href="https://material.io/design/components/lists.html#">
        https://material.io/design/components/lists.html#
      </a>
    </p>
    <p>リストのタイプ</p>
    <ul>
      <li>normal(デフォルト）</li>
      <li>twoline: 2行表示</li>
      <li>avatar-list: アバター表示</li>
    </ul>
    <p>仕切り線のタイプ</p>
    <ul>
      <li>normal(デフォルト）</li>
      <li>inset</li>
      <li>padded</li>
    </ul>
  `
  })
  .add('使用方法', () => `
    <h4>使用方法</h4>
    <x-list class="my-list">
      <list-item class="item">
        <list-text class="text">テキスト</list-text>
        <list-meta class="meta">メタ情報</list-meta>
      </list-item>
      <list-item class="item">
        <list-text class="text">テキスト</list-text>
        <list-meta class="meta">メタ情報</list-meta>
      </list-item>
    </x-list>
    <x-list-group class="group-list -avatarlist">
      <x-list class="my-list">
        <list-subheader class="subheader">リストタイトル</list-subheader>
        <list-divider></list-divider>
        <list-item class="item">
          <list-graphic class="graphic"></list-graphic>
          <list-text class="text">
            <list-primary class="primary">1行目</list-primary>
            <list-secondary class="secondary">2行目</list-secondary>
          </list-text>
        </list-item>
        <list-item class="item">
          <list-graphic class="graphic"></list-graphic>
          <list-text class="text">
            <list-primary class="primary">1行目</list-primary>
            <list-secondary class="secondary">2行目</list-secondary>
          </list-text>
        </list-item>
      </x-list>
      <x-list class="my-list">
        <list-subheader class="subheader">リストタイトル</list-subheader>
        <list-divider></list-divider>
        <list-item class="item">
          <list-graphic class="graphic"></list-graphic>
          <list-text class="text">
            <list-primary class="primary">1行目</list-primary>
            <list-secondary class="secondary">2行目</list-secondary>
          </list-text>
        </list-item>
        <list-item class="item">
          <list-graphic class="graphic"></list-graphic>
            <list-text class="text">
              <list-primary class="primary">1行目</list-primary>
              <list-secondary class="secondary">2行目</list-secondary>
            </list-text>
            <list-meta class="meta">メタ情報</list-meta>
        </list-item>
      </x-list>
    </x-list-group>

    ${copyCodeBlock(
      '<x-list class="my-list">\n' +
      '   <list-item class="item">\n' +
      '      <list-text class="text">テキスト</list-text>\n' +
      '      <list-meta class="meta">メタ情報</list-meta>\n' +
      '   </list-item>\n' +
      '   <list-item class="item">\n' +
      '      <list-text class="text">テキスト</list-text>\n' +
      '      <list-meta class="meta">メタ情報</list-meta>\n' +
      '   </list-item>\n' +
      '</x-list>\n\n' +
      '<x-list-group class="group-list">\n' +
      '   <x-list class="ist">\n' +
      '      <list-subheader class="subheader">リストタイトル</list-subheader>\n' +
      '      <list-divider></list-dividar>\n' +
      '      <list-item class="item">\n' +
      '         <list-graphic class="graphic"></list-graphic>\n' +
      '         <list-text class="text">\n' +
      '             <list-primary class="primary">1行目</list-text>\n' +
      '             <list-secondary class="secondary">2行目</list-text>\n' +
      '         </list-text>\n' +
      '      </list-item>\n' +
      '      <list-item class="item">\n' +
      '         <list-graphic class="graphic"></list-graphic>\n' +
      '         <list-text class="text">\n' +
      '             <list-primary class="primary">1行目</list-text>\n' +
      '             <list-secondary class="secondary">2行目</list-text>\n' +
      '         </list-text>\n' +
      '       </list-item>\n' +
      '   </x-list>\n' +
      '   <x-list class="list">\n' +
      '      <list-subheader class="subheader">リストタイトル</list-subheader>\n' +
      '      <list-divider />\n' +
      '      <list-item class="item">\n' +
      '         <list-graphic class="graphic"></list-graphic>\n' +
      '         <list-text class="text">\n' +
      '             <list-primary class="primary">1行目</list-text>\n' +
      '             <list-secondary class="secondary">2行目</list-text>\n' +
      '         </list-text>\n' +
      '      </list-item>\n' +
      '      </list-item>\n' +
      '      <list-item class="item">\n' +
      '         <list-graphic class="graphic"></list-graphic>\n' +
      '         <list-text class="text">\n' +
      '             <list-primary class="primary">1行目</list-text>\n' +
      '             <list-secondary class="secondary">2行目</list-text>\n' +
      '         </list-text>\n' +
      '         <list-meta class="meta">メタ情報</list-meta>\n' +
      '       </list-item>\n' +
      '   </x-list>\n' +
      '</x-list-group>\n',
      { lang: 'html' }
    )}
    ${copyCodeBlock(
      '.group-list {\n' +
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

storiesOf('Components|List/スタイルのカスタマイズ/リストのタイプを変える', module)
  .add('normal (default)', () =>  {
    return `
      <h4>normal (デフォルト)</h4>
      <p>
        normalの場合mixinは不要。 <br>
        denseを使用する場合はmixinが必要（後述）。
      </p>
      <x-list class="my-list">
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
          <list-meta class="meta">メタ情報</list-meta>
        </list-item>
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
          <list-meta class="meta">メタ情報</list-meta>
        </list-item>
      </x-list>
      <x-list-group class="group-list">
        <x-list class="list">
          <list-subheader class="subheader">リストタイトル</list-subheader>
          <list-divider></list-divider>
          <list-item class="item">
            <list-graphic class="graphic"></list-graphic>
            <list-text class="text">
              <list-primary class="primary">1行目</list-primary>
              <list-secondary class="secondary">2行目</list-secondary>
            </list-text>
          </list-item>
          <list-item class="item">
            <list-graphic class="graphic"></list-graphic>
            <list-text class="text">
              <list-primary class="primary">1行目</list-primary>
              <list-secondary class="secondary">2行目</list-secondary>
            </list-text>
          </list-item>
        </x-list>
        <x-list class="list">
          <list-subheader class="subheader">リストタイトル</list-subheader>
          <list-divider></list-divider>
          <list-item class="item">
            <list-graphic class="graphic"></list-graphic>
            <list-text class="text">
              <list-primary class="primary">1行目</list-primary>
              <list-secondary class="secondary">2行目</list-secondary>
            </list-text>
          </list-item>
          <list-item class="item">
            <list-graphic class="graphic"></list-graphic>
              <list-text class="text">
                <list-primary class="primary">1行目</list-primary>
                <list-secondary class="secondary">2行目</list-secondary>
              </list-text>
              <list-meta class="meta">メタ情報</list-meta>
          </list-item>
        </x-list>
      </x-list-group>
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-list class="my-list">\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '      <list-meta class="meta">メタ情報</list-meta>\n' +
        '   </list-item>\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '      <list-meta class="meta">メタ情報</list-meta>\n' +
        '   </list-item>\n' +
        '</x-list>\n' +
        '<x-list-group class="group-list">\n' +
        '   <x-list class="list">\n' +
        '      <list-subheader class="subheader">リストタイトル</list-subheader>\n' +
        '      <list-divider></list-divider>\n' +
        '      <list-item class="item">\n' +
        '         <list-graphic class="graphic"></list-graphic>\n' +
        '         <list-text class="text">\n' +
        '             <list-primary class="primary">1行目</list-primary>\n' +
        '             <list-secondary class="secondary">2行目</list-secondary>\n' +
        '          </list-text>\n' +
        '      </list-item>\n' +
        '      <list-item class="item">\n' +
        '        <list-graphic class="graphic"></list-graphic>\n' +
        '        <list-text class="text">\n' +
        '          <list-primary class="primary">1行目</list-primary>\n' +
        '          <list-secondary class="secondary">2行目</list-secondary>\n' +
        '        </list-text>\n' +
        '      </list-item>\n' +
        '   </x-list>\n' +
        '   <x-list class="list">\n' +
        '      <list-subheader class="subheader">リストタイトル</list-subheader>\n' +
        '      <list-divider></list-divider>\n' +
        '      <list-item class="item">\n' +
        '         <list-graphic class="graphic"></list-graphic>\n' +
        '         <list-text class="text">\n' +
        '            <list-primary class="primary">1行目</list-primary>\n' +
        '            <list-secondary class="secondary">2行目</list-secondary>\n' +
        '         </list-text>\n' +
        '      </list-item>\n' +
        '      <list-item class="item">\n' +
        '         <list-graphic class="graphic"></list-graphic>\n' +
        '         <list-text class="text">\n' +
        '            <list-primary class="primary">1行目</list-primary>\n' +
        '            <list-secondary class="secondary">2行目</list-secondary>\n' +
        '         </list-text>\n' +
        '         <list-meta class="meta">メタ情報</list-meta>\n' +
        '      </list-item>\n' +
        '   </x-list>\n' +
        '</x-list-group>\n' ,
        { lang: 'html' }
      )}
      <p>denseを使用する場合</p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-type($type);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.list {\n' +
        '   @include rs-list-type(dense);\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('twoline', () => {
    return `
      <h4>twoline</h4>
      <p>denseとavatar-listも一緒に使用できる。</p>
      <x-list class="my-list">
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
          <list-meta class="meta">メタ情報</list-meta>
        </list-item>
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
          <list-meta class="meta">メタ情報</list-meta>
        </list-item>
      </x-list>
      <x-list-group class="group-list -twoline">
        <x-list class="list">
          <list-subheader class="subheader">リストタイトル</list-subheader>
          <list-divider></list-divider>
          <list-item class="item">
            <list-graphic class="graphic"></list-graphic>
            <list-text class="text">
              <list-primary class="primary">1行目</list-primary>
              <list-secondary class="secondary">2行目</list-secondary>
            </list-text>
          </list-item>
          <list-item class="item">
            <list-graphic class="graphic"></list-graphic>
            <list-text class="text">
              <list-primary class="primary">1行目</list-primary>
              <list-secondary class="secondary">2行目</list-secondary>
            </list-text>
          </list-item>
        </x-list>
        <x-list class="list">
          <list-subheader class="subheader">リストタイトル</list-subheader>
          <list-divider></list-divider>
          <list-item class="item">
            <list-graphic class="graphic"></list-graphic>
            <list-text class="text">
              <list-primary class="primary">1行目</list-primary>
              <list-secondary class="secondary">2行目</list-secondary>
            </list-text>
          </list-item>
          <list-item class="item">
            <list-graphic class="graphic"></list-graphic>
              <list-text class="text">
                <list-primary class="primary">1行目</list-primary>
                <list-secondary class="secondary">2行目</list-secondary>
              </list-text>
              <list-meta class="meta">メタ情報</list-meta>
          </list-item>
        </x-list>
      </x-list-group>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-type($types...);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-list class="my-list">\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '      <list-meta class="meta">メタ情報</list-meta>\n' +
        '   </list-item>\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '      <list-meta class="meta">メタ情報</list-meta>\n' +
        '   </list-item>\n' +
        '</x-list>\n' +
        '<x-list-group class="group-list">\n' +
        '   <x-list class="list -twoline">\n' +
        '      <list-subheader class="subheader">リストタイトル</list-subheader>\n' +
        '      <list-divider></list-divider>\n' +
        '      <list-item class="item">\n' +
        '         <list-graphic class="graphic"></list-graphic>\n' +
        '         <list-text class="text">\n' +
        '             <list-primary class="primary">1行目</list-primary>\n' +
        '             <list-secondary class="secondary">2行目</list-secondary>\n' +
        '          </list-text>\n' +
        '      </list-item>\n' +
        '      <list-item class="item">\n' +
        '        <list-graphic class="graphic"></list-graphic>\n' +
        '        <list-text class="text">\n' +
        '          <list-primary class="primary">1行目</list-primary>\n' +
        '          <list-secondary class="secondary">2行目</list-secondary>\n' +
        '        </list-text>\n' +
        '      </list-item>\n' +
        '   </x-list>\n' +
        '   <x-list class="list -twoline -dense">\n' +
        '      <list-subheader class="subheader">リストタイトル</list-subheader>\n' +
        '      <list-divider></list-divider>\n' +
        '      <list-item class="item">\n' +
        '         <list-graphic class="graphic"></list-graphic>\n' +
        '         <list-text class="text">\n' +
        '            <list-primary class="primary">1行目</list-primary>\n' +
        '            <list-secondary class="secondary">2行目</list-secondary>\n' +
        '         </list-text>\n' +
        '      </list-item>\n' +
        '      <list-item class="item">\n' +
        '         <list-graphic class="graphic"></list-graphic>\n' +
        '         <list-text class="text">\n' +
        '            <list-primary class="primary">1行目</list-primary>\n' +
        '            <list-secondary class="secondary">2行目</list-secondary>\n' +
        '         </list-text>\n' +
        '         <list-meta class="meta">メタ情報</list-meta>\n' +
        '      </list-item>\n' +
        '   </x-list>\n' +
        '</x-list-group>\n' ,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.my-list {\n' +
        '  &.-twoline {\n' +
        '   @include rs-list-type(two-line);\n' +
        '  }\n' +
        '  &.-twoline.-dense {\n' +
        '   @include rs-list-type(two-line, dense);\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('avatar-list', () => {
    return `
      <h4>avatar-list</h4>
      <p>
        リストにアバターを表示させる。 <br>
        denseとtwo-lineも一緒に使用できる。
      </p>
      <x-list class="list -avatarlist">
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
          <list-meta class="meta">メタ情報</list-meta>
        </list-item>
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
          <list-meta class="meta">メタ情報</list-meta>
        </list-item>
      </x-list>
      <x-list-group class="group-list">
        <x-list class="list -avatarlist -twoline">
          <list-subheader class="subheader">リストタイトル</list-subheader>
          <list-divider></list-divider>
          <list-item class="item">
            <list-graphic class="graphic"></list-graphic>
            <list-text class="text">
              <list-primary class="primary">1行目</list-primary>
              <list-secondary class="secondary">2行目</list-secondary>
            </list-text>
          </list-item>
          <list-item class="item">
            <list-graphic class="graphic"></list-graphic>
            <list-text class="text">
              <list-primary class="primary">1行目</list-primary>
              <list-secondary class="secondary">2行目</list-secondary>
            </list-text>
          </list-item>
        </x-list>
        <x-list class="list -avatarlist -dense">
          <list-subheader class="subheader">リストタイトル</list-subheader>
          <list-divider></list-divider>
          <list-item class="item">
            <list-graphic class="graphic"></list-graphic>
            <list-text class="text">
              <list-primary class="primary">1行目</list-primary>
              <list-secondary class="secondary">2行目</list-secondary>
            </list-text>
          </list-item>
          <list-item class="item">
            <list-graphic class="graphic"></list-graphic>
              <list-text class="text">
                <list-primary class="primary">1行目</list-primary>
                <list-secondary class="secondary">2行目</list-secondary>
              </list-text>
              <list-meta class="meta">メタ情報</list-meta>
            </list-item>
        </x-list>
      </x-list-group>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-type($types...);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-list class="list -avatarlist">\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '      <list-meta class="meta">メタ情報</list-meta>\n' +
        '   </list-item>\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '      <list-meta class="meta">メタ情報</list-meta>\n' +
        '   </list-item>\n' +
        '</x-list>\n' +
        '<x-list-group class="group-list">\n' +
        '   <x-list class="list -avatarlist -dense">\n' +
        '      <list-subheader class="subheader">リストタイトル</list-subheader>\n' +
        '      <list-divider></list-divider>\n' +
        '      <list-item class="item">\n' +
        '         <list-graphic class="graphic"></list-graphic>\n' +
        '         <list-text class="text">\n' +
        '             <list-primary class="primary">1行目</list-primary>\n' +
        '             <list-secondary class="secondary">2行目</list-secondary>\n' +
        '          </list-text>\n' +
        '      </list-item>\n' +
        '      <list-item class="item">\n' +
        '        <list-graphic class="graphic"></list-graphic>\n' +
        '        <list-text class="text">\n' +
        '          <list-primary class="primary">1行目</list-primary>\n' +
        '          <list-secondary class="secondary">2行目</list-secondary>\n' +
        '        </list-text>\n' +
        '      </list-item>\n' +
        '   </x-list>\n' +
        '   <x-list class="list -avatarlist -twoline">\n' +
        '      <list-subheader class="subheader">リストタイトル</list-subheader>\n' +
        '      <list-divider></list-divider>\n' +
        '      <list-item class="item">\n' +
        '         <list-graphic class="graphic"></list-graphic>\n' +
        '         <list-text class="text">\n' +
        '            <list-primary class="primary">1行目</list-primary>\n' +
        '            <list-secondary class="secondary">2行目</list-secondary>\n' +
        '         </list-text>\n' +
        '      </list-item>\n' +
        '      <list-item class="item">\n' +
        '         <list-graphic class="graphic"></list-graphic>\n' +
        '         <list-text class="text">\n' +
        '            <list-primary class="primary">1行目</list-primary>\n' +
        '            <list-secondary class="secondary">2行目</list-secondary>\n' +
        '         </list-text>\n' +
        '         <list-meta class="meta">メタ情報</list-meta>\n' +
        '      </list-item>\n' +
        '   </x-list>\n' +
        '</x-list-group>\n' ,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.my-list {\n' +
        '  &.-avatarlist {\n' +
        '   @include rs-list-type(avatar-list);\n' +
        '  }\n' +
        '  &.-avatarlist.-dense {\n' +
        '   @include rs-list-type(avatar-list, dense);\n' +
        '  }\n' +
        '  &.-avatarlist.-twoline {\n' +
        '   @include rs-list-type(avatar-list, twoline);\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })

storiesOf('Components|List/スタイルのカスタマイズ/仕切り線のタイプを変える', module)
  .add('normal (default)', () => {
    return `
      <h4>normal（デフォルト）</h4>
      <p>mixinは不要。</p>   
      <x-list class="my-list">
        <list-item class="item">
          <list-text class="text">text</list-text>
        </list-item>
        <list-divider class="divider"></list-divider>
        <list-item class="item">
          <list-text class="text">text</list-text>
        </list-item>
      </x-list>
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-list class="my-list">\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '   <list-divider class="divider"/>\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '</x-list>\n',
        { lang: 'html' }
      )}
    `
  })
  .add('inset', () => {
    return `
      <h4>inset</h4>
      <p>paddedも一緒に使用できる。</p>
      <x-list class="my-list">
        <list-item class="item">
          <list-text class="text">text</list-text>
        </list-item>
        <list-divider class="divider -inset"></list-divider>
        <list-item class="item">
          <list-text class="text">text</list-text>
        </list-item>
      </x-list>
      <x-list class="my-list">
        <list-item class="item">
          <list-text class="text">text</list-text>
        </list-item>
        <list-divider class="divider -inset -padded"></list-divider>
        <list-item class="item">
          <list-text class="text">text</list-text>
        </list-item>
      </x-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-divider-type($types...);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-list class="my-list">\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '   <list-divider class="divider -inset"/>\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '</x-list>\n' +
        '<x-list class="my-list">\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '   <list-divider class="divider -inset -padded"/>\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '</x-list>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.my-list {\n' +
        '   > .divider.-inset {\n' +
        '     @include rs-list-divider-type(inset);\n' +
        '   }\n' +
        '   > .divider.-inset.-padded {\n' +
        '     @include rs-list-divider-type(inset, padded);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('padded', () => {
    return `
      <h4>padded</h4>
      insetも一緒に使える
      <x-list class="my-list">
        <list-item class="item">
          <list-text class="text">text</list-text>
        </list-item>
        <list-divider class="divider -padded"></list-divider>
        <list-item class="item">
          <list-text class="text">text</list-text>
        </list-item>
      </x-list>
      <x-list class="my-list">
        <list-item class="item">
          <list-text class="text">text</list-text>
        </list-item>
        <list-divider class="divider -inset -padded"></list-divider>
        <list-item class="item">
          <list-text class="text">text</list-text>
        </list-item>
      </x-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-divider-type($types...);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-list class="my-list">\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '   <list-divider class="divider -padded"/>\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '</x-list>\n' +
        '<x-list class="my-list">\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '   <list-divider class="divider -inset -padded"/>\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '</x-list>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.my-list {\n' +
        '   > .divider.-padded {\n' +
        '     @include rs-list-divider-type(padded);\n' +
        '   }\n' +
        '   > .divider.-inset.-padded {\n' +
        '     @include rs-list-divider-type(inset, padded);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
storiesOf('Components|List/スタイルのカスタマイズ/画像の形を変える (修正予定)', module)
  .add('normal (default)', () => {
    return `
      <h4>normal（デフォルト）</h4>
      <p>mixinは不要。</p>
      <x-list class="list -avatarlist">
        <list-item class="item">
          <list-graphic class="graphic"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item">
          <list-graphic class="graphic"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
      </x-list>
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-list class="list -avatarlist">\n' +
        '   <list-item class="item">\n' +
        '      <list-graphic class="graphic" />\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '   <list-item class="item">\n' +
        '      <list-graphic class="graphic" />\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '</x-list>\n',
        { lang: 'html' }
      )}
    `
  })  
  .add('circle', () => {
    return `
      <h4>circle</h4>
      <x-list class="list -avatarlist">
        <list-item class="item">
          <list-graphic class="graphic -circle"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item">
          <list-graphic class="graphic -circle"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
      </x-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-graphic-type($type);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-list class="list -avatarlist">\n' +
        '   <list-item class="item">\n' +
        '      <list-graphic class="graphic -circle" />\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '   <list-item class="item">\n' +
        '      <list-graphic class="graphic -circle" />\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '</x-list>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.my-list {\n' +
        '   > .graphic.-circle {' +
        '     @include rs-list-graphic-type(circle);\n' +
        '     @include rs-list-graphic-image(url(\'http://icons.iconarchive.com/icons/iconsmind/outline/512/Mail-icon.png\'));\n' +
        '   }' +
        '}\n',
        { lang: 'scss' }
      )}
    `
  })
  .add('rectangle', () => {
    return `
      <h4>rectangle</h4>
      <x-list class="list -avatarlist">
        <list-item class="item">
          <list-graphic class="graphic -rectangle"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item">
          <list-graphic class="graphic -rectangle"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
      </x-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-graphic-type($type);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-list class="list -avatarlist">\n' +
        '   <list-item class="item">\n' +
        '      <list-graphic class="graphic -rectangle" />\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '   <list-item class="item">\n' +
        '      <list-graphic class="graphic -rectangle" />\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '</x-list>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.my-list {\n' +
        '   > .graphic.-rectangle {' +
        '     @include rs-list-graphic-type(rectangle);\n' +
        '     @include rs-list-graphic-image(url(\'http://icons.iconarchive.com/icons/iconsmind/outline/512/Mail-icon.png\'));\n' +
        '   }' +
        '}\n',
        { lang: 'scss' }
      )}
    `
  })
  .add('square', () => {
    return `
      <h4>square</h4>
      <x-list class="list -avatarlist">
        <list-item class="item">
          <list-graphic class="graphic -square"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item">
          <list-graphic class="graphic -square"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
      </x-list>
      <h4>使用するmixin</h4>
    ${copyCodeBlock(
      '@include rs-list-graphic-type($type);',
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
      '<x-list class="list -avatarlist">\n' +
      '   <list-item class="item">\n' +
      '      <list-graphic class="graphic -square" />\n' +
      '      <list-text class="text">テキスト</list-text>\n' +
      '   </list-item>\n' +
      '   <list-item class="item">\n' +
      '      <list-graphic class="graphic -square" />\n' +
      '      <list-text class="text">テキスト</list-text>\n' +
      '   </list-item>\n' +
      '</x-list>\n',
    { lang: 'html' }
    )}
    ${copyCodeBlock(
      '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
      '.my-list {\n' +
      '   > .graphic.-square {' +
      '     @include rs-list-graphic-type(square);\n' +
      '     @include rs-list-graphic-image(url(\'http://icons.iconarchive.com/icons/iconsmind/outline/512/Mail-icon.png\'));\n' +
      '   }' +
      '}\n',
    { lang: 'scss' }
    )}
    `
  })

storiesOf('Components|List/スタイルのカスタマイズ', module)
  .add('テキスト(1行目)の色を変える', () => {
    return `
      <p>テキスト（1行目）の色を指定した色に変える。</p>
      <x-list class="my-list">
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item">
          <list-text class="text -brown">テキスト</list-text>
        </list-item>
      </x-list>
      <x-list class="my-list">
        <list-item class="item">
          <list-text class="text">
            <list-primary class="primary -brown">1行目</list-primary>
            <list-secondary class="secondary">2行目</list-secondary>
          </list-text>
        </list-item>
        <list-item class="item">
          <list-text class="text">
            <list-primary class="primary">1行目</list-primary>
            <list-secondary class="secondary">2行目</list-secondary>
          </list-text>
        </list-item>
      </x-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-item-primary-text-ink-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-list class="my-list">\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text -brown">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '</x-list>\n' +
        '<x-list class="my-list">\n' +
        '    <list-item class="item">\n' +
        '       <list-text class="text">\n' +
        '          <list-primary class="primary -brown">1行目</list-primary>\n' +
        '          <list-secondary class="secondary">2行目</list-secondary>\n' +
        '       </list-text>\n' +
        '    </list-item>\n' +
        '    <list-item class="item">\n' +
        '       <list-text class="text">\n' +
        '          <list-primary class="primary">1行目</list-primary>\n' +
        '          <list-secondary class="secondary">2行目</list-secondary>\n' +
        '       </list-text>\n' +
        '    </list-item>\n' +
        '</x-list>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.my-list {\n' +
        '  > .item > .text.-brown, \n' +
        '  > .item > .text > .primary.-brown, {\n' +
        '   @include rs-list-item-primary-text-ink-color(brown);\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>
          $color: インクの色コード <br> 例）#ee00ce
        </li>
      </ul>
    `
  })  
  .add('テキスト(2行目)の色を変える', () => {
    return `
      <p>テキスト（2行目）の色を指定した色に変える。</p>
      <x-list class="my-list">
        <list-item class="item">
          <list-text class="text">
            <list-primary class="primary">1行目</list-primary>
            <list-secondary class="secondary -brown">2行目</list-secondary>
          </list-text>
        </list-item>
        <list-item class="item">
          <list-text class="text">
            <list-primary class="primary">1行目</list-primary>
            <list-secondary class="secondary">2行目</list-secondary>
          </list-text>
        </list-item>
      </x-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-item-secondary-text-ink-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-list class="my-list">\n' +
        '    <list-item class="item">\n' +
        '       <list-text class="text">\n' +
        '          <list-primary class="primary">1行目</list-primary>\n' +
        '          <list-secondary class="secondary -brown">2行目</list-secondary>\n' +
        '       </list-text>\n' +
        '    </list-item>\n' +
        '    <list-item class="item">\n' +
        '       <list-text class="text">\n' +
        '          <list-primary class="primary">1行目</list-primary>\n' +
        '          <list-secondary class="secondary">2行目</list-secondary>\n' +
        '       </list-text>\n' +
        '    </list-item>\n' +
        '</x-list>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.my-list {\n' +
        '  > .item > .text > .secondary.-brown, {\n' +
        '   @include rs-list-item-secondary-text-ink-color(brown);\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('メタ情報のテキストの色を変える', () => {
    return `
      <p>メタ情報のテキストの色を指定した色に変える。</p>
      <x-list class="list -pink">
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
          <list-meta class="meta">メタ情報</list-meta>
        </list-item>
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
          <list-meta class="meta">メタ情報</list-meta>
        </list-item>
      </x-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-item-meta-ink-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-list class="my-list">\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '      <list-meta class="meta -brown">メタ情報</list-meta>\n' +
        '   </list-item>\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '      <list-meta class="meta">メタ情報</list-meta>\n' +
        '   </list-item>\n' +
        '</x-list>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.my-list {\n' +
        '  > .item > .text > .meta.-brown, {\n' +
        '   @include rs-list-item-meta-ink-color(brown);\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('アイコンの色を変える', () => {
    return `
      <p>アイコンの色を指定した色に変える。</p>
      <x-list class="list -avatarlist">
        <list-item class="item">
          <list-graphic class="graphic -blue"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item">
          <list-graphic class="graphic"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
      </x-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-item-graphic-ink-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-list class="my-list">\n' +
        '   <list-item class="item">\n' +
        '      <list-graphic class="graphic -blue"></list-graphic>\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '   <list-item class="item">\n' +
        '      <list-graphic class="graphic"></list-graphic>\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '</x-list>\n' +
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '$material-icons-font-path: \'~material-icons/iconfont/\';\n\n' +
        '@import \'~material-icons/iconfont/material-icons\';\n\n' +
        '.my-list {\n' +
        '  > .item > .graphic.-blue {\n' +
        '   @include rs-list-item-graphic-image(Material Icons, map-get($material-icons-codepoints, face));\n' +
        '   @include rs-list-item-graphic-ink-color(rgb(106, 118, 223);\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('画像の背景色を変える', () => {
    return `
      <p>画像の背景色を指定した色に変える。</p>
      <x-list class="list -avatarlist">
        <list-item class="item">
          <list-graphic class="graphic -container-blue"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item">
          <list-graphic class="graphic"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
      </x-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-item-graphic-fill-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-list class="my-list">\n' +
        '   <list-item class="item">\n' +
        '      <list-graphic class="graphic -container-blue"></list-graphic>\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '   <list-item class="item">\n' +
        '      <list-graphic class="graphic"></list-graphic>\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '</x-list>\n' +
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '$material-icons-font-path: \'~material-icons/iconfont/\';\n\n' +
        '@import \'~material-icons/iconfont/material-icons\';\n\n' +
        '.my-list {\n' +
        '  > .item > .graphic.-container-blue {\n' +
        '   @include rs-list-item-graphic-image(Material Icons, map-get($material-icons-codepoints, face));\n' +
        '   @include rs-list-item-graphic-fill-color(rgb(106, 196, 223));\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('仕切り線の色を変える', () => {
    return `
      <p>仕切り線の色を指定した色に変える。</p>
      <x-list class="my-list">
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-divider></list-divider>
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
        </list-item>
      </x-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-divider-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-list class="my-list">\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '   <list-divider class="divider -blue" />\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '</x-list>\n', 
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.my-list {\n' +
        '  > .divider.-blue {\n' +
        '   @include rs-list-divider-color(rgb(106, 118, 223);\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('サブヘッダーの色を変える', () => {
    return `
      <p>サブヘッダーの色を指定した色に変える。</p>
      <x-list-group class="group-list">
        <x-list class="list">
          <list-subheader class="subheader -brown">リストタイトル</list-subheader>
          <list-item class="item">
            <list-text class="text">テキスト</list-text>
          </list-item>
          <list-item class="item">
            <list-text class="text">テキスト</list-text>
          </list-item>
        </x-list>
        <x-list class="list">
          <list-subheader class="subheader">リストタイトル</list-subheader>
          <list-item class="item">
            <list-text class="text">テキスト</list-text>
          </list-item>
          <list-item class="item">
            <list-text class="text">テキスト</list-text>
          </list-item>
        </x-list>
      </x-list-group>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-group-subheader-ink-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-list-group class="group-list>\n' +
        '   <x-list class="list">\n' +
        '      <list-subheader class="subheader -brown">リストタイトル</list-subheader>\n' +
        '      <list-item class="item">\n' +
        '         <list-text class="text">テキスト</list-text>\n' +
        '      </list-item>\n' +
        '      <list-item class="item">\n' +
        '         <list-text class="text">テキスト</list-text>\n' +
        '      </list-item>\n' +
        '   </x-list>\n' +
        '   <x-list class="list">\n' +
        '      <list-subheader class="subheader">リストタイトル</list-subheader>\n' +
        '      <list-item class="item">\n' +
        '         <list-text class="text">テキスト</list-text>\n' +
        '      </list-item>\n' +
        '      <list-item class="item">\n' +
        '         <list-text class="text">テキスト</list-text>\n' +
        '      </list-item>\n' +
        '   </x-list>\n' +
        '</x-list-group>\n' ,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.group-list {\n' +
        '  > .list > .subheader.-brown {\n' +
        '   @include rs-list-group-subheader-ink-color(brown);\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('リップルの色を変える', () => {
    return `
      <p>リップルの色を指定した色に変える。</p>
        <x-list class="my-list">
          <list-item class="item">
            <list-text class="text">テキスト</list-text>
          </list-item>
          <list-item class="item">
            <list-text class="text">テキスト</list-text>
          </list-item>
        </x-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-item-states-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-list class="my-list">\n' +
        '   <list-item class="item -blue">\n' +
        '       <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '   <list-item class="item">\n' +
        '       <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '</x-list>\n' ,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.my-list {\n' +
        '  > .item {\n' +
        '   @include rs-list-item-states-color(rgb(106, 118, 223));\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('テキスト、背景色、リップルの色を一括で変える', () => {
    return `
      <p>リップルの色を指定した色に変える。</p>
        <x-list class="my-list">
          <list-item class="item -green">
            <list-text class="text">テキスト</list-text>
          </list-item>
          <list-item class="item">
            <list-text class="text">テキスト</list-text>
          </list-item>
        </x-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-fill-color-accessible($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-list class="my-list">\n' +
        '   <list-item class="item -green">\n' +
        '       <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '   <list-item class="item">\n' +
        '       <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '</x-list>\n' ,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.my-list {\n' +
        '  > .item {\n' +
        '   @include rs-list-fill-color-accessible(green);\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('画像・アイコンを設定する', () => {
    return `
    <p>指定した画像・アイコンを表示する。</p>
      <x-list class="list -avatarlist">
        <list-item class="item">
          <list-graphic class="graphic"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item">
          <list-graphic class="graphic"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
      </x-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-graphic-image($icon, $icon-name: \'\');',
        { lang: 'scss' }
      )}
    `
  })
  .add('画像のサイズを変える', () => {
    return `
      <p>画像のサイズを指定した大きさに変える。</p>
      <x-list class="list -avatarlist">
        <list-item class="item">
          <list-graphic class="graphic -size"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item">
        <list-item class="item">
          <list-graphic class="graphic"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
      </x-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-graphic-size($size);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-list class="list -avatarlist">\n' +
        '   <list-item class="item">\n' +
        '      <list-graphic class="graphic -size" />\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '   <list-item class="item">\n' +
        '      <list-graphic class="graphic" />\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '</x-list>\n'、
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.my-list {\n' +
        '  > .item > .graphic.-brown {\n' +
        '   @include rs-list-graphic-size(40px);\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>$size: 画像の大きさを指定</li>
      </ul>
    `
  })
  .add('アイテム角の丸みを変える', () => {
    return `
      <p>アイテムの角の丸みを指定したサイズに変える。</p>
      <x-list class="list -shape">
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
        </list-item>
      </x-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-item-shape-radius($radius);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-list class="my-list">\n' +
        '   <list-item class="item -shape">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '   <list-item class="item">\n' +
        '      <list-text class="text">テキスト</list-text>\n' +
        '   </list-item>\n' +
        '</x-list>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.my-list {\n' +
        '  > .item.-shape {\n' +
        '   @include rs-list-item-shape-radius(10px);\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  