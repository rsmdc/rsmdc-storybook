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
window.customElements.define('rs-list-group', ListGroup)
window.customElements.define('rs-list', List)

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
      <li>normal(デフォルト） <br>
        1行表示 <br>
        <a class="link" href="#" data-sb-kind="Components|List/スタイルのカスタマイズ/リストのタイプを変える" data-sb-story="normal(default)">参照はこちら</a></li>
      <li>
        twoline <br> 
        2行表示 <br>
        <a class="link" href="#" data-sb-kind="Components|List/スタイルのカスタマイズ/リストのタイプを変える" data-sb-story="twoline">参照はこちら</a>
      </li>
      <li>
        avatar-list <br>
        アバターを表示<br>
        <a class="link" href="#" data-sb-kind="Components|List/スタイルのカスタマイズ/リストのタイプを変える" data-sb-story="avatar-list">参照はこちら</a>
      </li>
    </ul>
    <p>仕切り線のタイプ</p>
    <ul>
      <li>normal(デフォルト） <br> <a class="link" href="#" data-sb-kind="Components|List/スタイルのカスタマイズ/仕切り線のタイプを変える" data-sb-story="normal(default)">参照はこちら</a></li>
      <li>inset <br> <a class="link" href="#" data-sb-kind="Components|List/スタイルのカスタマイズ/仕切り線のタイプを変える" data-sb-story="inset">参照はこちら</a></li>
      <li>padded <br> <a class="link" href="#" data-sb-kind="Components|List/スタイルのカスタマイズ/仕切り線のタイプを変える" data-sb-story="padded">参照はこちら</a></li>
    </ul>
    <p>画像タイプ</p>
    <ul>
      <li>normal（デフォルト） <br> <a class="link" href="#" data-sb-kind="Components|List/スタイルのカスタマイズ/画像の形を変える(修正予定)" data-sb-story="normal(default)">参照はこちら</a></li>
      <li>
        circle <br>
        丸く表示 <br>
        <a class="link" href="#" data-sb-kind="Components|List/スタイルのカスタマイズ/画像の形を変える(修正予定)" data-sb-story="circle">参照はこちら</a>
      </li>
      <li>requtangle <br>
        長方形に表示 <br>
        <a class="link" href="#" data-sb-kind="Components|List/スタイルのカスタマイズ/画像の形を変える(修正予定)" data-sb-story="requtangle">参照はこちら</a>
      </li>
      <li>square <br>
        四角に表示 <br>
        <a class="link" href="#" data-sb-kind="Components|List/スタイルのカスタマイズ/画像の形を変える(修正予定)" data-sb-story="square">参照はこちら</a>
      </li>
    </ul>
  `
  })
  .add('使用方法', () => `
    <h4>使用方法</h4>
    <rs-list class="my-list">
      <list-item class="item">
        <list-text class="text">テキスト</list-text>
        <list-meta class="meta">メタ情報</list-meta>
      </list-item>
      <list-item class="item">
        <list-text class="text">テキスト</list-text>
        <list-meta class="meta">メタ情報</list-meta>
      </list-item>
    </rs-list>
    <rs-list-group class="group-list">
      <rs-list class="my-list -twoline">
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
      </rs-list>
      <rs-list class="my-list -twoline">
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
      </rs-list>
    </rs-list-group>
    ${copyCodeBlock(
`<rs-list class="my-list">
    <list-item class="item">
        <list-text class="text">テキスト</list-text>
        <list-meta class="meta">メタ情報</list-meta>
    </list-item>
    <list-item class="item">
        <list-text class="text">テキスト</list-text>
        <list-meta class="meta">メタ情報</list-meta>
    </list-item>
</rs-list>
<rs-list-group class="group-list">
    <rs-list class="my-list -twoline">
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
    </rs-list>
    <rs-list class="my-list -twoline">
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
    </rs-list>
</rs-list-group>`,
      { lang:'html' }
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
    <p>custom elementsを<code>rs</code>と<code>card</code>のプレフィックスをつけて定義した前提です。<br>
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
        <td>rs-list-group</td>
        <td>複数のリストをグルーピングします</td>
        <td><code>rs-list</code></td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-list</td>
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
      <rs-list-group class="group-list">
        <rs-list class="my-list -dense">
          <list-item class="item">
            <list-text class="text">テキスト</list-text>
            <list-meta class="meta">メタ情報</list-meta>
          </list-item>
          <list-item class="item">
            <list-text class="text">テキスト</list-text>
            <list-meta class="meta">メタ情報</list-meta>
          </list-item>
        </rs-list>
      </rs-list-group>
      
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-list-group class="group-list">
    <rs-list class="my-list">
        <list-item class="item">
            <list-text class="text">テキスト</list-text>
            <list-meta class="meta">メタ情報</list-meta>
        </list-item>
        <list-item class="item">
            <list-text class="text">テキスト</list-text>
            <list-meta class="meta">メタ情報</list-meta>
        </list-item>
    </rs-list>
</rs-list-group>`,
      { lang:'html' }
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
        '.my-list {\n' +
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
      <rs-list class="my-list">
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
          <list-meta class="meta">メタ情報</list-meta>
        </list-item>
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
          <list-meta class="meta">メタ情報</list-meta>
        </list-item>
      </rs-list>
      <rs-list-group class="group-list">
        <rs-list class="my-list -twoline">
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
        </rs-list>
        <rs-list class="my-list -twoline">
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
        </rs-list>
      </rs-list-group>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-type($types...);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-list class="my-list">
    <list-item class="item">
        <list-text class="text">テキスト</list-text>
        <list-meta class="meta">メタ情報</list-meta>
    </list-item>
    <list-item class="item">
        <list-text class="text">テキスト</list-text>
        <list-meta class="meta">メタ情報</list-meta>
    </list-item>
</rs-list>
<rs-list-group class="group-list">
    <rs-list class="my-list -twoline">
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
    </rs-list>
    <rs-list class="my-list -twoline">
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
    </rs-list>
</rs-list-group>`,
      { lang:'html' }
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
      <rs-list class="list">
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
          <list-meta class="meta">メタ情報</list-meta>
        </list-item>
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
          <list-meta class="meta">メタ情報</list-meta>
        </list-item>
      </rs-list>
      <rs-list-group class="group-list">
        <rs-list class="my-list -avatarlist">
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
        </rs-list>
        <rs-list class="my-list -avatarlist">
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
        </rs-list>
      </rs-list-group>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-type($types...);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-list class="my-list">
    <list-item class="item">
        <list-text class="text">テキスト</list-text>
        <list-meta class="meta">メタ情報</list-meta>
    </list-item>
    <list-item class="item">
        <list-text class="text">テキスト</list-text>
        <list-meta class="meta">メタ情報</list-meta>
    </list-item>
</rs-list>
<rs-list-group class="group-list">
    <rs-list class="my-list -avatarlist">
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
    </rs-list>
    <rs-list class="my-list -avatarlist">
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
    </rs-list>
</rs-list-group>`,
      { lang:'html' }
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
      <rs-list class="my-list">
        <list-item class="item">
          <list-text class="text">text</list-text>
        </list-item>
        <list-divider class="divider"></list-divider>
        <list-item class="item">
          <list-text class="text">text</list-text>
        </list-item>
      </rs-list>
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-list class="my-list">
    <list-item class="item">
        <list-text class="text">テキスト</list-text>
    </list-item>
    <list-divider class="divider"></list-divider>
    <list-item class="item">
        <list-text class="text">テキスト</list-text>
    </list-item>
</rs-list>`,
        { lang: 'html' }
      )}
    `
  })
  .add('inset', () => {
    return `
      <h4>inset</h4>
      <p>paddedも一緒に使用できる。</p>
      <rs-list class="my-list">
        <list-item class="item">
          <list-text class="text">text</list-text>
        </list-item>
        <list-divider class="divider -inset"></list-divider>
        <list-item class="item">
          <list-text class="text">text</list-text>
        </list-item>
      </rs-list>
      <rs-list class="my-list">
        <list-item class="item">
          <list-text class="text">text</list-text>
        </list-item>
        <list-divider class="divider -inset -padded"></list-divider>
        <list-item class="item">
          <list-text class="text">text</list-text>
        </list-item>
      </rs-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-divider-type($types...);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-list class="my-list">
    <list-item class="item">
        <list-text class="text">text</list-text>
    </list-item>
    <list-divider class="divider -inset"></list-divider>
    <list-item class="item">
        <list-text class="text">text</list-text>
    </list-item>
</rs-list>
<rs-list class="my-list">
    <list-item class="item">
        <list-text class="text">text</list-text>
    </list-item>
    <list-divider class="divider -inset -padded"></list-divider>
    <list-item class="item">
        <list-text class="text">text</list-text>
    </list-item>
</rs-list>`,
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
      <rs-list class="my-list">
        <list-item class="item">
          <list-text class="text">text</list-text>
        </list-item>
        <list-divider class="divider -padded"></list-divider>
        <list-item class="item">
          <list-text class="text">text</list-text>
        </list-item>
      </rs-list>
      <rs-list class="my-list">
        <list-item class="item">
          <list-text class="text">text</list-text>
        </list-item>
        <list-divider class="divider -inset -padded"></list-divider>
        <list-item class="item">
          <list-text class="text">text</list-text>
        </list-item>
      </rs-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-divider-type($types...);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-list class="my-list">
    <list-item class="item">
        <list-text class="text">text</list-text>
    </list-item>
    <list-divider class="divider -padded"></list-divider>
    <list-item class="item">
        <list-text class="text">text</list-text>
    </list-item>
</rs-list>
<rs-list class="my-list">
    <list-item class="item">
        <list-text class="text">text</list-text>
    </list-item>
    <list-divider class="divider -inset -padded"></list-divider>
    <list-item class="item">
        <list-text class="text">text</list-text>
    </list-item>
</rs-list>`,
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
      <rs-list class="my-list -avatarlist -graphic">
        <list-item class="item">
          <list-graphic class="graphic"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item">
          <list-graphic class="graphic"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
      </rs-list>
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-list class="my-list -avatarlist">
    <list-item class="item">
        <list-graphic class="graphic"></list-graphic>
        <list-text class="text">テキスト</list-text>
    </list-item>
    <list-item class="item">
        <list-graphic class="graphic"></list-graphic>
        <list-text class="text">テキスト</list-text>
    </list-item>
</rs-list>`,
        { lang: 'html' }
      )}
    `
  })  
  .add('circle', () => {
    return `
      <h4>circle</h4>
      <rs-list class="my-list -avatarlist -graphic">
        <list-item class="item">
          <list-graphic class="graphic -circle"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item">
          <list-graphic class="graphic -circle"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
      </rs-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-graphic-type($type);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-list class="my-list -avatarlist">
    <list-item class="item">
        <list-graphic class="graphic -circle"></list-graphic>
        <list-text class="text">テキスト</list-text>
    </list-item>
    <list-item class="item">
        <list-graphic class="graphic -circle"></list-graphic>
        <list-text class="text">テキスト</list-text>
    </list-item>
</rs-list>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.my-list {\n' +
        '   > .graphic.-circle {\n' +
        '     @include rs-list-graphic-type(circle);\n' +
        '     @include rs-list-graphic-image(url(\'http://icons.iconarchive.com/icons/iconsmind/outline/512/Mail-icon.png\'));\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('rectangle', () => {
    return `
      <h4>rectangle</h4>
      <rs-list class="my-list -avatarlist -graphic">
        <list-item class="item">
          <list-graphic class="graphic -rectangle"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item">
          <list-graphic class="graphic -rectangle"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
      </rs-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-graphic-type($type);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-list class="my-list -avatarlist">
    <list-item class="item">
        <list-graphic class="graphic -rectangle"></list-graphic>
        <list-text class="text">テキスト</list-text>
    </list-item>
    <list-item class="item">
        <list-graphic class="graphic -rectangle"></list-graphic>
        <list-text class="text">テキスト</list-text>
    </list-item>
</rs-list>`,
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
      <rs-list class="my-list -avatarlist -graphic">
        <list-item class="item">
          <list-graphic class="graphic -square"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item">
          <list-graphic class="graphic -square"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
      </rs-list>
      <h4>使用するmixin</h4>
    ${copyCodeBlock(
      '@include rs-list-graphic-type($type);',
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list class="my-list -avatarlist">
    <list-item class="item">
        <list-graphic class="graphic -square"></list-graphic>
        <list-text class="text">テキスト</list-text>
    </list-item>
    <list-item class="item">
        <list-graphic class="graphic -square"></list-graphic>
        <list-text class="text">テキスト</list-text>
    </list-item>
</rs-list>`,
        { lang: 'html' }
      )}
    ${copyCodeBlock(
      '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
      '.my-list {\n' +
      '   > .graphic.-square {\n' +
      '     @include rs-list-graphic-type(square);\n' +
      '     @include rs-list-graphic-image(url(\'http://icons.iconarchive.com/icons/iconsmind/outline/512/Mail-icon.png\'));\n' +
      '   }\n' +
      '}',
    { lang: 'scss' }
    )}
    `
  })

storiesOf('Components|List/スタイルのカスタマイズ', module)
  .add('テキスト(1行目)の色を変える', () => {
    return `
      <p>テキスト（1行目）の色を指定した色に変える。</p>
      <rs-list class="my-list">
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item">
          <list-text class="text -brown">テキスト</list-text>
        </list-item>
      </rs-list>
      <rs-list class="my-list -twoline">
        <list-item class="item">
          <list-text class="text">
            <list-primary class="primary -brown">1行目</list-primary>
            <list-secondary class="secondary">2行目</list-secondary>
          </list-text>
        </list-item>
        <list-item class="item">
          <list-text class="text -brown">
            <list-primary class="primary">1行目</list-primary>
            <list-secondary class="secondary">2行目</list-secondary>
          </list-text>
        </list-item>
      </rs-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-item-primary-text-ink-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-list class="my-list">
    <list-item class="item">
        <list-text class="text">テキスト</list-text>
    </list-item>
    <list-item class="item">
        <list-text class="text -brown">テキスト</list-text>
    </list-item>
</rs-list>
<rs-list class="my-list -twoline">
    <list-item class="item">
        <list-text class="text">
            <list-primary class="primary -brown">1行目</list-primary>
            <list-secondary class="secondary">2行目</list-secondary>
        </list-text>
    </list-item>
    <list-item class="item">
        <list-text class="text -brown">
            <list-primary class="primary">1行目</list-primary>
            <list-secondary class="secondary">2行目</list-secondary>
        </list-text>
    </list-item>
</rs-list>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.my-list {\n' +
        '  > .item > .text.-brown, \n' +
        '  > .item > .text > .primary.-brown {\n' +
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
      <rs-list class="my-list">
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item">
          <list-text class="text -brown">テキスト</list-text>
        </list-item>
      </rs-list>
      <rs-list class="my-list -twoline">
        <list-item class="item">
          <list-text class="text">
            <list-primary class="primary">1行目</list-primary>
            <list-secondary class="secondary -brown">2行目</list-secondary>
          </list-text>
        </list-item>
        <list-item class="item">
          <list-text class="text">
            <list-primary class="primary">1行目</list-primary>
            <list-secondary class="secondary -brown">2行目</list-secondary>
          </list-text>
        </list-item>
      </rs-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-item-secondary-text-ink-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-list class="my-list">
    <list-item class="item">
        <list-text class="text">テキスト</list-text>
    </list-item>
    <list-item class="item">
        <list-text class="text -brown">テキスト</list-text>
    </list-item>
</rs-list>
<rs-list class="my-list -twoline">
    <list-item class="item">
        <list-text class="text">
            <list-primary class="primary">1行目</list-primary>
            <list-secondary class="secondary -brown">2行目</list-secondary>
        </list-text>
    </list-item>
    <list-item class="item">
        <list-text class="text -brown">
            <list-primary class="primary">1行目</list-primary>
            <list-secondary class="secondary -brown">2行目</list-secondary>
        </list-text>
    </list-item>
</rs-list>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.my-list {\n' +
        '  > .item > .text > .secondary.-brown {\n' +
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
      <rs-list class="my-list">
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
          <list-meta class="meta -brown">メタ情報</list-meta>
        </list-item>
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
          <list-meta class="meta -brown">メタ情報</list-meta>
        </list-item>
      </rs-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-item-meta-ink-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-list class="my-list">
    <list-item class="item">
        <list-text class="text">テキスト</list-text>
        <list-meta class="meta -brown">メタ情報</list-meta>
    </list-item>
    <list-item class="item">
        <list-text class="text">テキスト</list-text>
        <list-meta class="meta -brown">メタ情報</list-meta>
    </list-item>
</rs-list>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.my-list {\n' +
        '  > .item > .meta.-brown {\n' +
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
      <rs-list class="my-list -avatarlist -graphic">
        <list-item class="item">
          <list-graphic class="graphic -blue"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item">
          <list-graphic class="graphic"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
      </rs-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-item-graphic-ink-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-list class="my-list -avatarlist -graphic">
    <list-item class="item">
        <list-graphic class="graphic -blue"></list-graphic>
        <list-text class="text">テキスト</list-text>
    </list-item>
    <list-item class="item">
        <list-graphic class="graphic"></list-graphic>
        <list-text class="text">テキスト</list-text>
    </list-item>
</rs-list>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '$material-icons-font-path: \'~material-icons/iconfont/\';\n\n' +
        '@import \'~material-icons/iconfont/material-icons\';\n\n' +
        '.my-list {\n' +
        '  > .item > .graphic.-blue {\n' +
        '   @include rs-list-item-graphic-image(Material Icons, map-get($material-icons-codepoints, face));\n' +
        '   @include rs-list-item-graphic-ink-color(rgb(106, 118, 223));\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('画像の背景色を変える', () => {
    return `
      <p>画像の背景色を指定した色に変える。</p>
      <rs-list class="my-list -avatarlist -graphic">
        <list-item class="item">
          <list-graphic class="graphic -container-blue"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item">
          <list-graphic class="graphic -container-blue"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
      </rs-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-item-graphic-fill-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-list class="my-list -avatarlist -graphic">
    <list-item class="item">
        <list-graphic class="graphic -container-blue"></list-graphic>
        <list-text class="text">テキスト</list-text>
    </list-item>
    <list-item class="item">
        <list-graphic class="graphic -container-blue"></list-graphic>
        <list-text class="text">テキスト</list-text>
    </list-item>
</rs-list>`,
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
      <rs-list class="my-list">
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-divider class="divider -blue"></list-divider>
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
        </list-item>
      </rs-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-divider-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-list class="my-list">
    <list-item class="item">
        <list-text class="text">テキスト</list-text>
    </list-item>
    <list-divider class="divider -blue"></list-divider>
    <list-item class="item">
        <list-text class="text">テキスト</list-text>
    </list-item>
</rs-list>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.my-list {\n' +
        '  > .divider.-blue {\n' +
        '   @include rs-list-divider-color(rgb(106, 118, 223));\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('サブヘッダーの色を変える', () => {
    return `
      <p>サブヘッダーの色を指定した色に変える。</p>
      <rs-list-group class="group-list">
        <rs-list class="list">
          <list-subheader class="subheader -brown">リストタイトル</list-subheader>
          <list-item class="item">
            <list-text class="text">テキスト</list-text>
          </list-item>
          <list-item class="item">
            <list-text class="text">テキスト</list-text>
          </list-item>
        </rs-list>
        <rs-list class="list">
          <list-subheader class="subheader -brown">リストタイトル</list-subheader>
          <list-item class="item">
            <list-text class="text">テキスト</list-text>
          </list-item>
          <list-item class="item">
            <list-text class="text">テキスト</list-text>
          </list-item>
        </rs-list>
      </rs-list-group>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-group-subheader-ink-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-list-group class="group-list">
    <rs-list class="my-list">
        <list-subheader class="subheader -brown">リストタイトル</list-subheader>
        <list-item class="item">
            <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item">
            <list-text class="text">テキスト</list-text>
        </list-item>
    </rs-list>
    <rs-list class="list">
        <list-subheader class="subheader -brown">リストタイトル</list-subheader>
        <list-item class="item">
            <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item -states-color">
            <list-text class="text">テキスト</list-text>
        </list-item>
    </rs-list>
</rs-list-group>`,
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
      <rs-list class="my-list">
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item">
          <list-text class="text">テキスト</list-text>
        </list-item>
      </rs-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-item-states-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-list class="my-list">
    <list-item class="item">
        <list-text class="text">テキスト</list-text>
    </list-item>
    <list-item class="item">
        <list-text class="text">テキスト</list-text>
    </list-item>
</rs-list>`,
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
      <p>テキスト、背景色、リップルの色を指定した色に変える。</p>
      <rs-list class="my-list">
        <list-item class="item -green">
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item -green">
          <list-text class="text">テキスト</list-text>
        </list-item>
      </rs-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-fill-color-accessible($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-list class="my-list">
    <list-item class="item">
        <list-text class="text">テキスト</list-text>
    </list-item>
    <list-item class="item">
        <list-text class="text">テキスト</list-text>
    </list-item>
</rs-list>`,
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
      <rs-list class="my-list -avatarlist -graphic">
        <list-item class="item">
          <list-graphic class="graphic -image"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item">
          <list-graphic class="graphic -image"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
      </rs-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-graphic-image($icon, $icon-name: \'\');',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-list class="my-list -avatarlist">
    <list-item class="item">
        <list-graphic class="graphic -image"></list-graphic>
        <list-text class="text">テキスト</list-text>
    </list-item>
    <list-item class="item">
        <list-graphic class="graphic -image"></list-graphic>
        <list-text class="text">テキスト</list-text>
    </list-item>
</rs-list>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.graphic {\n' +
        '  > .-graphic-image {\n' +
        '   @include rs-list-graphic-image(url(\'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAr4y0F.img?h=1080&w=1920&m=6&q=60&o=f&l=f\'));\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('画像のサイズを変える', () => {
    return `
      <p>画像のサイズを指定した大きさに変える。</p>
      <rs-list class="my-list -avatarlist -graphic">
        <list-item class="item">
          <list-graphic class="graphic -size"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item">
          <list-graphic class="graphic -size"></list-graphic>
          <list-text class="text">テキスト</list-text>
        </list-item>
      </rs-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-graphic-size($size);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-list class="my-list -avatarlist">
    <list-item class="item">
        <list-graphic class="graphic -size"></list-graphic>
        <list-text class="text">テキスト</list-text>
    </list-item>
    <list-item class="item">
        <list-graphic class="graphic -size"></list-graphic>
        <list-text class="text">テキスト</list-text>
    </list-item>
</rs-list>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/list/rs-list.scss\';\n\n' +
        '.my-list {\n' +
        '  > .item > .graphic.-size {\n' +
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
      <rs-list class="my-list">
        <list-item class="item -shape">
          <list-text class="text">テキスト</list-text>
        </list-item>
        <list-item class="item -shape">
          <list-text class="text">テキスト</list-text>
        </list-item>
      </rs-list>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-list-item-shape-radius($radius);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-list class="my-list">
    <list-item class="item -shape">
        <list-text class="text">テキスト</list-text>
    </list-item>
    <list-item class="item -shape">
        <list-text class="text">テキスト</list-text>
    </list-item>
</rs-list>`,
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
  