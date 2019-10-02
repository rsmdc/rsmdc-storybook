import { storiesOf } from '@storybook/html'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'
const list = require('@rsmdc/list/loader')

import './css/style.scss'
import './css/list.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

list.defineCustomElements(window)

storiesOf('Components|List', module)
  .addDecorator(withLinks)
  .add('概要', () => `
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
  `)
  .add('使用方法', () => `
    <h4>使用方法</h4>
    <rs-list class="my-list">
      <rs-list-item class="item">
        <rs-list-text class="text">テキスト</rs-list-text>
        <rs-list-meta class="meta">メタ情報</rs-list-meta>
      </rs-list-item>
      <rs-list-item class="item">
        <rs-list-text class="text">テキスト</rs-list-text>
        <rs-list-meta class="meta">メタ情報</rs-list-meta>
      </rs-list-item>
    </rs-list>
    <rs-list-group class="group-list">
      <rs-list class="my-list -two-line -avatar-list">
        <rs-list-subheader class="subheader">リストタイトル</rs-list-subheader>
        <rs-list-divider class="divider"></rs-list-divider>
        <rs-list-item class="item">
          <rs-list-graphic class="graphic"></rs-list-graphic>
          <rs-list-text class="text">
            <rs-list-primary class="primary">1行目</rs-list-primary>
            <rs-list-secondary class="secondary">2行目</rs-list-secondary>
          </rs-list-text>
        </rs-list-item>
        <rs-list-item class="item">
          <rs-list-graphic class="graphic"></rs-list-graphic>
          <rs-list-text class="text">
            <rs-list-primary class="primary">1行目</rs-list-primary>
            <rs-list-secondary class="secondary">2行目</rs-list-secondary>
          </rs-list-text>
          <rs-list-meta class="meta">メタ情報</rs-list-meta>
        </rs-list-item>
      </rs-list>
    </rs-list-group>
    ${copyCodeBlock(
`<rs-list class="my-list">
  <rs-list-item class="item">
    <rs-list-text class="text">テキスト</rs-list-text>
    <rs-list-meta class="meta">メタ情報</rs-list-meta>
  </rs-list-item>
  <rs-list-item class="item">
    <rs-list-text class="text">テキスト</rs-list-text>
    <rs-list-meta class="meta">メタ情報</rs-list-meta>
  </rs-list-item>
</rs-list>
<rs-list-group class="group-list">
  <rs-list class="my-list -two-line -avatar-list">
    <rs-list-subheader class="subheader">リストタイトル</rs-list-subheader>
    <rs-list-divider class="divider"></rs-list-divider>
    <rs-list-item class="item">
      <rs-list-graphic class="graphic"></rs-list-graphic>
      <rs-list-text class="text">
        <rs-list-primary class="primary">1行目</rs-list-primary>
        <rs-list-secondary class="secondary">2行目</rs-list-secondary>
      </rs-list-text>
    </rs-list-item>
    <rs-list-item class="item">
      <rs-list-graphic class="graphic"></rs-list-graphic>
      <rs-list-text class="text">
        <rs-list-primary class="primary">1行目</rs-list-primary>
        <rs-list-secondary class="secondary">2行目</rs-list-secondary>
      </rs-list-text>
      <rs-list-meta class="meta">メタ情報</rs-list-meta>
    </rs-list-item>
  </rs-list>
</rs-list-group>`,
      { lang:'html' }
    )}
    ${copyCodeBlock(
`.group-list {
  > .list {
    @include rs-list-type(twoline, avatar-list);
  }
}`,
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
            <li><code>rs-list-subehader</code></li>
            <li><code>rs-list-divider</code></li>
            <li><code>rs-list-item</code></li>
          </ul>
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-list-subheader</td>
        <td>リストのサブヘッダー部分を示します</td>
        <td>テキスト</td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-list-divider</td>
        <td>リストの仕切り線を表示します</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-list-item</td>
        <td>リストのアイテム部分を表示します</td>
        <td>
          <ul>
            <li><code>rs-list-graphic</code></li>
            <li><code>rs-list-text</code></li>
            <li><code>rs-list-meta</code></li>
          </ul>
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-list-graphic</td>
        <td>アイテムの画像部分を表示します</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-list-text</td>
        <td>アイテムの主要テキスト部分を表示します</td>
        <td>
          <ul>
            <li><code>rs-list-primary</code></li>
            <li><code>rs-list-secondary</code></li>
          </ul>
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-list-primary</td>
        <td>テキストの1行目を表示します</td>
        <td>テキスト</td>
        <td>リストタイプがtwo-lineの場合のみ有効です</td>
      </tr>
      <tr>
        <td>rs-list-secondary</td>
        <td>テキストの2行目を表示します</td>
        <td>テキスト</td>
        <td>リストタイプがtwo-lineの場合のみ有効です</td>
      </tr>
      <tr>
        <td>rs-list-meta</td>
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

    <h4>テーマ変数</h4>
    <p>
    　rs-listで使われるテーマ変数です。 <br>
    　下記変数に新しく色を指定することで、テーマカラーが上書きされます。
    </p>
    <table>
      <tr>
        <th>変数名</th>
        <th>説明</th>
      </tr>
      <tr>
        <td>$rs-theme-primary</td>
        <td>選択状態のテキスト、背景、リップルの色に関わります。</td>
      </tr>
      <tr>
        <td>$rs-theme-on-surface</td>
        <td>未選択状態のリップルの色に関わります。</td>
      </tr>

    </table>
  `)

storiesOf('Components|List/スタイルのカスタマイズ/リストのタイプを変える', module)
  .add('normal (default)', () => `
    <h4>normal (デフォルト)</h4>
    <p>
      normalの場合mixinは不要。 <br>
      denseを使用する場合はmixinが必要（後述）。
    </p>
    <rs-list-group class="group-list">
      <rs-list class="my-list">
        <rs-list-item class="item">
          <rs-list-text class="text">テキスト</rs-list-text>
          <rs-list-meta class="meta">メタ情報</rs-list-meta>
        </rs-list-item>
        <rs-list-item class="item">
          <rs-list-text class="text">テキスト</rs-list-text>
          <rs-list-meta class="meta">メタ情報</rs-list-meta>
        </rs-list-item>
      </rs-list>
    </rs-list-group>
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list-group class="group-list">
  <rs-list class="my-list">
    <rs-list-item class="item">
      <rs-list-text class="text">テキスト</rs-list-text>
      <rs-list-meta class="meta">メタ情報</rs-list-meta>
    </rs-list-item>
    <rs-list-item class="item">
      <rs-list-text class="text">テキスト</rs-list-text>
      <rs-list-meta class="meta">メタ情報</rs-list-meta>
    </rs-list-item>
  </rs-list>
</rs-list-group>`,
      { lang: "html" }
    )}
    <h4>dense</h4>
    <rs-list-group class="group-list">
      <rs-list class="my-list -dense">
        <rs-list-item class="item">
          <rs-list-text class="text">テキスト</rs-list-text>
          <rs-list-meta class="meta">メタ情報</rs-list-meta>
        </rs-list-item>
        <rs-list-item class="item">
          <rs-list-text class="text">テキスト</rs-list-text>
          <rs-list-meta class="meta">メタ情報</rs-list-meta>
        </rs-list-item>
      </rs-list>
    </rs-list-group>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-list-type($type);`,
      { lang: "scss" }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list-group class="group-list">
  <rs-list class="my-list -dense">
    <rs-list-item class="item">
      <rs-list-text class="text">テキスト</rs-list-text>
      <rs-list-meta class="meta">メタ情報</rs-list-meta>
    </rs-list-item>
    <rs-list-item class="item">
      <rs-list-text class="text">テキスト</rs-list-text>
      <rs-list-meta class="meta">メタ情報</rs-list-meta>
    </rs-list-item>
  </rs-list>
</rs-list-group>`,
      { lang: "html" }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/list/rs-list.scss';

.my-list {
  @include rs-list-type(dense);
}`,
      { lang: "scss" }
    )}
  `)
  .add('twoline', () => `
    <h4>twoline</h4>
    <p>denseとavatar-listも一緒に使用できる。</p>
    <rs-list class="my-list -two-line">
      <rs-list-item class="item">
        <rs-list-text class="text">
          <rs-list-primary>1行目</rs-list-primary>
          <rs-list-secondary>2行目</rs-list-secondary>
        </rs-list-text>
        <rs-list-meta class="meta">メタ情報</rs-list-meta>
      </rs-list-item>
      <rs-list-item class="item">
        <rs-list-text class="text">
          <rs-list-primary>1行目</rs-list-primary>
          <rs-list-secondary>2行目</rs-list-secondary>
        </rs-list-text>
        <rs-list-meta class="meta">メタ情報</rs-list-meta>
      </rs-list-item>
    </rs-list>

    <rs-list-group class="group-list">
      <rs-list class="my-list -two-line -dense">
        <rs-list-subheader class="subheader">リストスタイル / dense</rs-list-subheader>
        <rs-list-divider></rs-list-divider>
        <rs-list-item class="item">
          <rs-list-text class="text">
            <rs-list-primary class="primary">1行目</rs-list-primary>
            <rs-list-secondary class="secondary">2行目</rs-list-secondary>
          </rs-list-text>
        </rs-list-item>
        <rs-list-item class="item">
          <rs-list-text class="text">
            <rs-list-primary class="primary">1行目</rs-list-primary>
            <rs-list-secondary class="secondary">2行目</rs-list-secondary>
          </rs-list-text>
        </rs-list-item>
      </rs-list>
      <rs-list class="my-list -two-line -avatar-list">
        <rs-list-subheader class="subheader">リストタイトル / avatar-list</rs-list-subheader>
        <rs-list-divider></rs-list-divider>
        <rs-list-item class="item">
          <rs-list-graphic class="graphic"></rs-list-graphic>
          <rs-list-text class="text">
            <rs-list-primary class="primary">1行目</rs-list-primary>
            <rs-list-secondary class="secondary">2行目</rs-list-secondary>
          </rs-list-text>
        </rs-list-item>
        <rs-list-item class="item">
          <rs-list-graphic class="graphic"></rs-list-graphic>
          <rs-list-text class="text">
            <rs-list-primary class="primary">1行目</rs-list-primary>
            <rs-list-secondary class="secondary">2行目</rs-list-secondary>
          </rs-list-text>
          <rs-list-meta class="meta">メタ情報</rs-list-meta>
        </rs-list-item>
      </rs-list>
    </rs-list-group>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-list-type($types...);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list class="my-list -two-line">
  <rs-list-item class="item">
    <rs-list-text class="text">
      <rs-list-primary>1行目</rs-list-primary>
      <rs-list-secondary>2行目</rs-list-secondary>
    </rs-list-text>
    <rs-list-meta class="meta">メタ情報</rs-list-meta>
  </rs-list-item>
  <rs-list-item class="item">
    <rs-list-text class="text">
      <rs-list-primary>1行目</rs-list-primary>
      <rs-list-secondary>2行目</rs-list-secondary>
    </rs-list-text>
    <rs-list-meta class="meta">メタ情報</rs-list-meta>
  </rs-list-item>
</rs-list>

<rs-list-group class="group-list">
  <rs-list class="my-list -two-line -dense">
    <rs-list-subheader class="subheader">リストスタイル / dense</rs-list-subheader>
    <rs-list-divider class="divider" />
    <rs-list-item class="item">
      <rs-list-text class="text">
        <rs-list-primary class="primary">1行目</rs-list-primary>
        <rs-list-secondary class="secondary">2行目</rs-list-secondary>
      </rs-list-text>
    </rs-list-item>
    <rs-list-item class="item">
      <rs-list-text class="text">
        <rs-list-primary class="primary">1行目</rs-list-primary>
        <rs-list-secondary class="secondary">2行目</rs-list-secondary>
      </rs-list-text>
    </rs-list-item>
  </rs-list>
  <rs-list class="my-list -two-line -avatar-list">
    <rs-list-subheader class="subheader">リストタイトル / avatar-list</rs-list-subheader>
    <rs-list-divider class="divider" />
    <rs-list-item class="item">
      <rs-list-graphic class="graphic"></rs-list-graphic>
      <rs-list-text class="text">
        <rs-list-primary class="primary">1行目</rs-list-primary>
        <rs-list-secondary class="secondary">2行目</rs-list-secondary>
      </rs-list-text>
    </rs-list-item>
    <rs-list-item class="item">
      <rs-list-graphic class="graphic"></rs-list-graphic>
      <rs-list-text class="text">
        <rs-list-primary class="primary">1行目</rs-list-primary>
        <rs-list-secondary class="secondary">2行目</rs-list-secondary>
      </rs-list-text>
      <rs-list-meta class="meta">メタ情報</rs-list-meta>
    </rs-list-item>
  </rs-list>
</rs-list-group>`,
    { lang:'html' }
  )}
    ${copyCodeBlock(
`@import '@rsmdc/list/rs-list.scss';

.my-list {
  &.-two-line.-dense {
    @include rs-list-type(two-line, dense);
  }
  &.-two-line.-avatar-list > .item > .graphic {
    @include rs-list-type(avatar-list);
    @include rs-list-graphic-image(
      Material Icons, map-get($material-icons-codepoints, face)
    );
  }
}`,
      { lang: 'scss' }
    )}
  `)
  .add('avatar-list', () => `
    <h4>avatar-list</h4>
    <p>
      リストにアバターを表示させる。 <br>
      denseとtwo-lineも一緒に使用できる。
    </p>
    <rs-list class="my-list -avatar-list">
      <rs-list-item class="item">
        <rs-list-graphic class="graphic"></rs-list-graphic>
        <rs-list-text class="text">テキスト</rs-list-text>
        <rs-list-meta class="meta">メタ情報</rs-list-meta>
      </rs-list-item>
      <rs-list-item class="item">
        <rs-list-graphic class="graphic"></rs-list-graphic>
        <rs-list-text class="text">テキスト</rs-list-text>
        <rs-list-meta class="meta">メタ情報</rs-list-meta>
      </rs-list-item>
    </rs-list>

    <rs-list-group class="group-list">
      <rs-list class="my-list -avatar-list -dense">
        <rs-list-subheader class="subheader">リストタイトル / dense</rs-list-subheader>
        <rs-list-divider class="divider"></rs-list-divider>
        <rs-list-item class="item">
          <rs-list-graphic class="graphic"></rs-list-graphic>
          <rs-list-text class="text">
            <rs-list-primary class="primary">1行目</rs-list-primary>
            <rs-list-secondary class="secondary">2行目</rs-list-secondary>
          </rs-list-text>
        </rs-list-item>
        <rs-list-item class="item">
          <rs-list-graphic class="graphic"></rs-list-graphic>
          <rs-list-text class="text">
            <rs-list-primary class="primary">1行目</rs-list-primary>
            <rs-list-secondary class="secondary">2行目</rs-list-secondary>
          </rs-list-text>
        </rs-list-item>
      </rs-list>
      <rs-list class="my-list -avatar-list -two-line">
        <rs-list-subheader class="subheader">リストタイトル / two-line</rs-list-subheader>
        <rs-list-divider class="divider" /></rs-list-divider>
        <rs-list-item class="item">
          <rs-list-graphic class="graphic"></rs-list-graphic>
          <rs-list-text class="text">
            <rs-list-primary class="primary">1行目</rs-list-primary>
            <rs-list-secondary class="secondary">2行目</rs-list-secondary>
          </rs-list-text>
        </rs-list-item>
        <rs-list-item class="item">
          <rs-list-graphic class="graphic"></rs-list-graphic>
            <rs-list-text class="text">
              <rs-list-primary class="primary">1行目</rs-list-primary>
              <rs-list-secondary class="secondary">2行目</rs-list-secondary>
            </rs-list-text>
            <rs-list-meta class="meta">メタ情報</rs-list-meta>
          </rs-list-item>
      </rs-list>
    </rs-list-group>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-list-type($types...);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list class="my-list -avatar-list">
  <rs-list-item class="item">
    <rs-list-graphic class="graphic" />
    <rs-list-text class="text">テキスト</rs-list-text>
    <rs-list-meta class="meta">メタ情報</rs-list-meta>
  </rs-list-item>
  <rs-list-item class="item">
    <rs-list-graphic class="graphic" />
    <rs-list-text class="text">テキスト</rs-list-text>
    <rs-list-meta class="meta">メタ情報</rs-list-meta>
  </rs-list-item>
</rs-list>

<rs-list-group class="group-list">
  <rs-list class="my-list -avatar-list -dense">
    <rs-list-subheader class="subheader">リストタイトル / dense</rs-list-subheader>
    <rs-list-divider class="divider" />
    <rs-list-item class="item">
      <rs-list-graphic class="graphic"></rs-list-graphic>
      <rs-list-text class="text">
        <rs-list-primary class="primary">1行目</rs-list-primary>
        <rs-list-secondary class="secondary">2行目</rs-list-secondary>
      </rs-list-text>
    </rs-list-item>
    <rs-list-item class="item">
      <rs-list-graphic class="graphic" />
      <rs-list-text class="text">
        <rs-list-primary class="primary">1行目</rs-list-primary>
        <rs-list-secondary class="secondary">2行目</rs-list-secondary>
      </rs-list-text>
    </rs-list-item>
  </rs-list>
  <rs-list class="my-list -avatar-list -two-line">
    <rs-list-subheader class="subheader">リストタイトル / two-line</rs-list-subheader>
    <rs-list-divider class="divider" />
    <rs-list-item class="item">
      <rs-list-graphic class="graphic"></rs-list-graphic>
      <rs-list-text class="text">
        <rs-list-primary class="primary">1行目</rs-list-primary>
        <rs-list-secondary class="secondary">2行目</rs-list-secondary>
      </rs-list-text>
    </rs-list-item>
    <rs-list-item class="item">
      <rs-list-graphic class="graphic" />
      <rs-list-text class="text">
        <rs-list-primary class="primary">1行目</rs-list-primary>
        <rs-list-secondary class="secondary">2行目</rs-list-secondary>
      </rs-list-text>
      <rs-list-meta class="meta">メタ情報</rs-list-meta>
    </rs-list-item>
  </rs-list>
</rs-list-group>`,
    { lang:'html' }
  )}
    ${copyCodeBlock(
`@import '@rsmdc/list/rs-list.scss';

.my-list {
  &.-avatar-list {
    @include rs-list-graphic-image(
      Material Icons, map-get($material-icons-codepoints, face)
    );
  }
  &.-avatar-list.-dense {
    @include rs-list-type(avatar-list, dense);
  }
  &.-avatar-list.-two-line {
    @include rs-list-type(avatar-list, two-line);
  }
}`,
      { lang: 'scss' }
    )}
  `)

storiesOf('Components|List/スタイルのカスタマイズ/仕切り線のタイプを変える', module)
  .add('normal (default)', () => `
    <h4>normal（デフォルト）</h4>
    <p>mixinは不要。</p>   
    <rs-list class="my-list">
      <rs-list-item class="item">
        <rs-list-text class="text">text</rs-list-text>
      </rs-list-item>
      <rs-list-divider class="divider"></rs-list-divider>
      <rs-list-item class="item">
        <rs-list-text class="text">text</rs-list-text>
      </rs-list-item>
    </rs-list>
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list class="my-list">
  <rs-list-item class="item">
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
  <rs-list-divider class="divider" />
  <rs-list-item class="item">
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
</rs-list>`,
      { lang: 'html' }
    )}
  `)
  .add('inset', () => `
    <h4>inset</h4>
    <p>paddedも一緒に使用できる。</p>
    <rs-list class="my-list">
      <rs-list-item class="item">
        <rs-list-text class="text">text</rs-list-text>
      </rs-list-item>
      <rs-list-divider class="divider -inset"></rs-list-divider>
      <rs-list-item class="item">
        <rs-list-text class="text">text</rs-list-text>
      </rs-list-item>
    </rs-list>
    <rs-list class="my-list">
      <rs-list-item class="item">
        <rs-list-text class="text">text</rs-list-text>
      </rs-list-item>
      <rs-list-divider class="divider -inset -padded"></rs-list-divider>
      <rs-list-item class="item">
        <rs-list-text class="text">text</rs-list-text>
      </rs-list-item>
    </rs-list>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-list-divider-type($types...);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list class="my-list">
  <rs-list-item class="item">
    <rs-list-text class="text">text</rs-list-text>
  </rs-list-item>
  <rs-list-divider class="divider -inset" />
  <rs-list-item class="item">
    <rs-list-text class="text">text</rs-list-text>
  </rs-list-item>
  </rs-list>
  <rs-list class="my-list">
  <rs-list-item class="item">
    <rs-list-text class="text">text</rs-list-text>
  </rs-list-item>
  <rs-list-divider class="divider -inset -padded" />
  <rs-list-item class="item">
    <rs-list-text class="text">text</rs-list-text>
  </rs-list-item>
</rs-list>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/list/rs-list.scss';

.my-list {
  > .divider.-inset {
    @include rs-list-divider-type(inset);
  }
  > .divider.-inset.-padded {
    @include rs-list-divider-type(inset, padded);
  }
}`,
      { lang: 'scss' }
    )}
  `)
  .add('padded', () => `
    <h4>padded</h4>
    insetも一緒に使える
    <rs-list class="my-list">
      <rs-list-item class="item">
        <rs-list-text class="text">text</rs-list-text>
      </rs-list-item>
      <rs-list-divider class="divider -padded"></rs-list-divider>
      <rs-list-item class="item">
        <rs-list-text class="text">text</rs-list-text>
      </rs-list-item>
    </rs-list>
    <rs-list class="my-list">
      <rs-list-item class="item">
        <rs-list-text class="text">text</rs-list-text>
      </rs-list-item>
      <rs-list-divider class="divider -inset"></rs-list-divider>
      <rs-list-item class="item">
        <rs-list-text class="text">text</rs-list-text>
      </rs-list-item>
    </rs-list>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(`@include rs-list-divider-type($types...);`, {
      lang: "scss"
    })}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list class="my-list">
  <rs-list-item class="item">
    <rs-list-text class="text">text</rs-list-text>
  </rs-list-item>
  <rs-list-divider class="divider -padded" />
  <rs-list-item class="item">
    <rs-list-text class="text">text</rs-list-text>
  </rs-list-item>
  </rs-list>
  <rs-list class="my-list">
  <rs-list-item class="item">
    <rs-list-text class="text">text</rs-list-text>
  </rs-list-item>
  <rs-list-divider class="divider -inset -padded" />
  <rs-list-item class="item">
    <rs-list-text class="text">text</rs-list-text>
  </rs-list-item>
</rs-list>`,
      { lang: "html" }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/list/rs-list.scss';

.my-list {
  > .divider.-padded {
    @include rs-list-divider-type(padded);
  }
  > .divider.-inset.-padded {
    @include rs-list-divider-type(inset, padded);
  }
}`,
      { lang: "scss" }
    )}
  `)
storiesOf('Components|List/スタイルのカスタマイズ/画像の形を変える (修正予定)', module)
  .add('normal (default)', () => `
    <h4>normal（デフォルト）</h4>
    <p>mixinは不要。</p>
    <rs-list class="my-list -graphic-type">
      <rs-list-item class="item">
        <rs-list-graphic class="graphic"></rs-list-graphic>
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
      <rs-list-item class="item">
        <rs-list-graphic class="graphic"></rs-list-graphic>
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
    </rs-list>
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list class="my-list -avatar-list">
  <rs-list-item class="item">
    <rs-list-graphic class="graphic" />
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
  <rs-list-item class="item">
    <rs-list-graphic class="graphic" />
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
</rs-list>`,
      { lang: 'html' }
    )}
  `)  
  .add('circle', () => `
    <h4>circle</h4>
    <rs-list class="my-list -graphic-type">
      <rs-list-item class="item">
        <rs-list-graphic class="graphic -circle"></rs-list-graphic>
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
      <rs-list-item class="item">
        <rs-list-graphic class="graphic -circle"></rs-list-graphic>
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
    </rs-list>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(`@include rs-list-graphic-type($type);`, {
      lang: "scss"
    })}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list class="my-list -avatar-list">
  <rs-list-item class="item">
    <rs-list-graphic class="graphic -circle" />
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
  <rs-list-item class="item">
    <rs-list-graphic class="graphic -circle" />
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
</rs-list>`,
      { lang: "html" }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/list/rs-list.scss';

.my-list {
  > .graphic.-circle {
    @include rs-list-graphic-type(circle);
    @include rs-list-graphic-image(url(\'https://cweb.canon.jp/showroom/personal/workshop/instaevent-2018/img/picture19.jpg\'));
  }
}`,
      { lang: "scss" }
    )}
  `)
  .add('rectangle', () => `
    <h4>rectangle</h4>
    <rs-list class="my-list -graphic-type">
      <rs-list-item class="item">
        <rs-list-graphic class="graphic -rectangle"></rs-list-graphic>
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
      <rs-list-item class="item">
        <rs-list-graphic class="graphic -rectangle"></rs-list-graphic>
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
    </rs-list>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(`@include rs-list-graphic-type($type);`, {
      lang: "scss"
    })}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list class="my-list -avatar-list">
  <rs-list-item class="item">
    <rs-list-graphic class="graphic -rectangle" />
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
  <rs-list-item class="item">
    <rs-list-graphic class="graphic -rectangle" />
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
</rs-list>`,
      { lang: "html" }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/list/rs-list.scss';

.my-list {
  > .graphic.-rectangle {'
    @include rs-list-graphic-type(rectangle);
    @include rs-list-graphic-image(url(\'https://cweb.canon.jp/showroom/personal/workshop/instaevent-2018/img/picture19.jpg\'));
  }'
}`,
      { lang: "scss" }
    )}
  `)
  .add('square', () => `
    <h4>square</h4>
    <rs-list class="my-list -graphic-type">
      <rs-list-item class="item">
        <rs-list-graphic class="graphic -square"></rs-list-graphic>
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
      <rs-list-item class="item">
        <rs-list-graphic class="graphic -square"></rs-list-graphic>
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
    </rs-list>
    <h4>使用するmixin</h4>
  ${copyCodeBlock(`@include rs-list-graphic-type($type);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-list class="my-list -avatarlist">
  <rs-list-item class="item">
    <rs-list-graphic class="graphic -square" />
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
  <rs-list-item class="item">
    <rs-list-graphic class="graphic -square" />
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
</rs-list>`,
    { lang: "html" }
  )}
  ${copyCodeBlock(
`@import '@rsmdc/list/rs-list.scss';

.my-list {
  > .graphic.-square {
    @include rs-list-graphic-type(square);
    @include rs-list-graphic-image(url(\'https://cweb.canon.jp/showroom/personal/workshop/instaevent-2018/img/picture19.jpg\'));
  }
}`,
    { lang: "scss" }
  )}
`)

storiesOf('Components|List/スタイルのカスタマイズ', module)
  .add('テキスト(1行目)の色を変える', () => `
    <h4>テキスト（1行目）の色を指定した色に変える。</h4>
    <rs-list class="my-list">
      <rs-list-item class="item">
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
      <rs-list-item class="item">
        <rs-list-text class="text -brown">テキスト</rs-list-text>
      </rs-list-item>
    </rs-list>
    <rs-list class="my-list -twoline">
      <rs-list-item class="item">
        <rs-list-text class="text">
          <rs-list-primary class="primary -brown">1行目</rs-list-primary>
          <rs-list-secondary class="secondary">2行目</rs-list-secondary>
        </rs-list-text>
      </rs-list-item>
      <rs-list-item class="item">
        <rs-list-text class="text -brown">
          <rs-list-primary class="primary">1行目</rs-list-primary>
          <rs-list-secondary class="secondary">2行目</rs-list-secondary>
        </rs-list-text>
      </rs-list-item>
    </rs-list>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-list-item-primary-text-ink-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list class="my-list">
  <rs-list-item class="item">
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
  <rs-list-item class="item">
    <rs-list-text class="text -brown">テキスト</rs-list-text>
  </rs-list-item>
</rs-list>
<rs-list class="my-list -twoline">
  <rs-list-item class="item">
    <rs-list-text class="text">
      <rs-list-primary class="primary -brown">1行目</rs-list-primary>
      <rs-list-secondary class="secondary">2行目</rs-list-secondary>
    </rs-list-text>
  </rs-list-item>
  <rs-list-item class="item">
    <rs-list-text class="text -brown">
      <rs-list-primary class="primary">1行目</rs-list-primary>
      <rs-list-secondary class="secondary">2行目</rs-list-secondary>
    </rs-list-text>
  </rs-list-item>
</rs-list>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/list/rs-list.scss';

.my-list {
  > .item > .text.-brown, 
  > .item > .text > .primary.-brown {
    @include rs-list-item-primary-text-ink-color(brown);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $color: インクの色コード <br> 例）#ee00ce
      </li>
    </ul>
  `)  
  .add('テキスト(2行目)の色を変える', () => `
    <h4>テキスト（2行目）の色を指定した色に変える。</h4>
    <rs-list class="my-list">
      <rs-list-item class="item">
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
      <rs-list-item class="item">
        <rs-list-text class="text -brown">テキスト</rs-list-text>
      </rs-list-item>
    </rs-list>
    <rs-list class="my-list -twoline">
      <rs-list-item class="item">
        <rs-list-text class="text">
          <rs-list-primary class="primary">1行目</rs-list-primary>
          <rs-list-secondary class="secondary -brown">2行目</rs-list-secondary>
        </rs-list-text>
      </rs-list-item>
      <rs-list-item class="item">
        <rs-list-text class="text">
          <rs-list-primary class="primary">1行目</rs-list-primary>
          <rs-list-secondary class="secondary -brown">2行目</rs-list-secondary>
        </rs-list-text>
      </rs-list-item>
    </rs-list>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-list-item-secondary-text-ink-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list class="my-list">
  <rs-list-item class="item">
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
  <rs-list-item class="item">
    <rs-list-text class="text -brown">テキスト</rs-list-text>
  </rs-list-item>
</rs-list>
<rs-list class="my-list -twoline">
  <rs-list-item class="item">
    <rs-list-text class="text">
      <rs-list-primary class="primary">1行目</rs-list-primary>
      <rs-list-secondary class="secondary -brown">2行目</rs-list-secondary>
    </rs-list-text>
  </rs-list-item>
  <rs-list-item class="item">
    <rs-list-text class="text">
      <rs-list-primary class="primary">1行目</rs-list-primary>
      <rs-list-secondary class="secondary -brown">2行目</rs-list-secondary>
    </rs-list-text>
  </rs-list-item>
</rs-list>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/list/rs-list.scss';

.my-list {
  > .item > .text > .secondary.-brown {
    @include rs-list-item-secondary-text-ink-color(brown);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: インクの色コード <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('メタ情報のテキストの色を変える', () => `
    <h4>メタ情報のテキストの色を指定した色に変える。</h4>
    <rs-list class="my-list">
      <rs-list-item class="item">
        <rs-list-text class="text">テキスト</rs-list-text>
        <rs-list-meta class="meta -brown">メタ情報</rs-list-meta>
      </rs-list-item>
      <rs-list-item class="item">
        <rs-list-text class="text">テキスト</rs-list-text>
        <rs-list-meta class="meta -brown">メタ情報</rs-list-meta>
      </rs-list-item>
    </rs-list>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-list-item-meta-ink-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list class="my-list">
  <rs-list-item class="item">
    <rs-list-text class="text">テキスト</rs-list-text>
    <rs-list-meta class="meta -brown">メタ情報</rs-list-meta>
  </rs-list-item>
  <rs-list-item class="item">
    <rs-list-text class="text">テキスト</rs-list-text>
    <rs-list-meta class="meta -brown">メタ情報</rs-list-meta>
  </rs-list-item>
</rs-list>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/list/rs-list.scss';

.my-list {
  > .item > .meta.-brown {
    @include rs-list-item-meta-ink-color(brown);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: インクの色コード <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('アイコンの色を変える', () => `
    <h4>アイコンの色を指定した色に変える。</h4>
    <rs-list class="my-list -avatar-list">
      <rs-list-item class="item">
        <rs-list-graphic class="graphic -blue"></rs-list-graphic>
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
      <rs-list-item class="item">
        <rs-list-graphic class="graphic -blue"></rs-list-graphic>
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
    </rs-list>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-list-item-graphic-ink-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list class="my-list -avatar-list">
  <rs-list-item class="item">
    <rs-list-graphic class="graphic -blue" />
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
  <rs-list-item class="item">
    <rs-list-graphic class="graphic -blue" />
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
</rs-list>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/list/rs-list.scss';
$material-icons-font-path: '~material-icons/iconfont/';
@import '~material-icons/iconfont/material-icons';

.my-list {
  > .item > .graphic.-blue {
    @include rs-list-graphic-image(Material Icons, map-get($material-icons-codepoints, face));
    @include rs-list-graphic-ink-color(rgb(106, 118, 223));
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: アイコンの色を指定 <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('画像の背景色を変える', () => `
    <h4>画像の背景色を指定した色に変える。</h4>
    <rs-list class="my-list -avatar-list">
      <rs-list-item class="item">
        <rs-list-graphic class="icon -container-blue"></rs-list-graphic>
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
      <rs-list-item class="item">
        <rs-list-graphic class="icon -container-blue"></rs-list-graphic>
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
    </rs-list>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-list-item-graphic-fill-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list class="my-list -avatarlist">
  <rs-list-item class="item">
    <rs-list-graphic class="graphic -container-blue" />
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
  <rs-list-item class="item">
    <rs-list-graphic class="graphic -container-blue" />
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
</rs-list>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/list/rs-list.scss';
$material-icons-font-path: '~material-icons/iconfont/';
@import '~material-icons/iconfont/material-icons';

.my-list {
  > .item > .graphic.-container-blue {
    @include rs-list-graphic-image(Material Icons, map-get($material-icons-codepoints, face));
    @include rs-list-graphic-fill-color(rgb(106, 196, 223));
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: コンテナの色の塗りコード <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('仕切り線の色を変える', () => `
    <h4>仕切り線の色を指定した色に変える。</h4>
    <rs-list class="my-list">
      <rs-list-item class="item">
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
      <rs-list-divider class="divider -blue"></rs-list-divider>
      <rs-list-item class="item">
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
    </rs-list>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-list-divider-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list class="my-list">
  <rs-list-item class="item">
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
  <rs-list-divider class="divider -blue" />
  <rs-list-item class="item">
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
</rs-list>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/list/rs-list.scss';

.my-list {
  > .divider.-blue {
    @include rs-list-divider-color(rgb(106, 118, 223));
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: 線の色を指定 <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('サブヘッダーの色を変える', () => `
    <h4>サブヘッダーの色を指定した色に変える。</h4>
    <rs-list-group class="group-list">
      <rs-list class="list">
        <rs-list-subheader class="subheader -brown">リストタイトル</rs-list-subheader>
        <rs-list-item class="item">
          <rs-list-text class="text">テキスト</rs-list-text>
        </rs-list-item>
        <rs-list-item class="item">
          <rs-list-text class="text">テキスト</rs-list-text>
        </rs-list-item>
      </rs-list>
      <rs-list class="list">
        <rs-list-subheader class="subheader -brown">リストタイトル</rs-list-subheader>
        <rs-list-item class="item">
          <rs-list-text class="text">テキスト</rs-list-text>
        </rs-list-item>
        <rs-list-item class="item">
          <rs-list-text class="text">テキスト</rs-list-text>
        </rs-list-item>
      </rs-list>
    </rs-list-group>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-list-group-subheader-ink-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list-group class="group-list">
  <rs-list class="list">
    <rs-list-subheader class="subheader -brown">リストタイトル</rs-list-subheader>
    <rs-list-item class="item">
      <rs-list-text class="text">テキスト</rs-list-text>
    </rs-list-item>
    <rs-list-item class="item">
      <rs-list-text class="text">テキスト</rs-list-text>
    </rs-list-item>
  </rs-list>
  <rs-list class="list">
    <rs-list-subheader class="subheader -brown">リストタイトル</rs-list-subheader>
    <rs-list-item class="item">
      <rs-list-text class="text">テキスト</rs-list-text>
    </rs-list-item>
    <rs-list-item class="item">
      <rs-list-text class="text">テキスト</rs-list-text>
    </rs-list-item>
  </rs-list>
</rs-list-group>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/list/rs-list.scss';

.group-list {
  > .list > .subheader.-brown {
    @include rs-list-group-subheader-ink-color(brown);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: インクの色コード <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('リップルの色を変える', () => `
    <h4>リップルの色を指定した色に変える。</h4>
    <rs-list class="my-list">
      <rs-list-item class="item">
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
      <rs-list-item class="item">
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
    </rs-list>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-list-item-states-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list class="my-list">
  <rs-list-item class="item">
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
  <rs-list-item class="item">
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
</rs-list>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/list/rs-list.scss';

.my-list {
  > .item {
    @include rs-list-item-states-color(rgb(106, 118, 223));
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: リップルの色を指定 <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('テキスト、背景色、リップルの色を一括で変える', () => `
    <h4>テキスト、背景色、リップルの色を指定した色に変える。</h4>
    <rs-list class="my-list">
      <rs-list-item class="item -green">
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
      <rs-list-item class="item -green">
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
    </rs-list>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-list-fill-color-accessible($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list class="my-list">
  <rs-list-item class="item">
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
  <rs-list-item class="item">
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
</rs-list>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/list/rs-list.scss';

.my-list {
  > .item {
    @include rs-list-fill-color-accessible(green);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: テキスト、背景色、リップルの色を指定 <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('画像・アイコンを設定する', () => `
    <h4>指定した画像・アイコンを表示する。</h4>
    <rs-list class="my-list -avatar-list">
      <rs-list-item class="item">
        <rs-list-graphic class="graphic -image"></rs-list-graphic>
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
      <rs-list-item class="item">
        <rs-list-graphic class="graphic -image"></rs-list-graphic>
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
    </rs-list>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-list-graphic-image($icon, $icon-name: \'\');`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list class="my-list -avatarlist">
  <rs-list-item class="item">
    <rs-list-graphic class="graphic -image" />
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
  <rs-list-item class="item">
    <rs-list-graphic class="graphic -image" />
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
</rs-list>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/list/rs-list.scss';

.graphic {
  > .-graphic.-image {
    @include rs-list-graphic-image(url(\'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAr4y0F.img?h=1080&w=1920&m=6&q=60&o=f&l=f\'));
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$url: 画像パス <br> 例）https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAr4y0F.img?h=1080&w=1920&m=6&q=60&o=f&l=f</li>
    </ul>
  `)
  .add('画像のサイズを変える', () => `
    <h4>画像のサイズを指定した大きさに変える。</h4>
    <rs-list class="my-list -graphic-type">
      <rs-list-item class="item">
        <rs-list-graphic class="graphic -size"></rs-list-graphic>
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
      <rs-list-item class="item">
        <rs-list-graphic class="graphic -size"></rs-list-graphic>
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
    </rs-list>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-list-graphic-size($size);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list class="my-list -avatarlist">
  <rs-list-item class="item">
    <rs-list-graphic class="graphic -size" />
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
  <rs-list-item class="item">
    <rs-list-graphic class="graphic -size" />
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
</rs-list>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/list/rs-list.scss';

.my-list {
  > .item > .graphic.-size {
    @include rs-list-graphic-size(40px);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$size: 画像の大きさを指定</li>
    </ul>
  `)
  .add('アイテム角の丸みを変える', () => `
    <h4>アイテムの角の丸みを指定したサイズに変える。</h4>
    <rs-list class="my-list">
      <rs-list-item class="item -roundness">
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
      <rs-list-item class="item -shape">
        <rs-list-text class="text">テキスト</rs-list-text>
      </rs-list-item>
    </rs-list>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-list-item-shape-radius($radius);`,
      { lang: "scss" }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-list class="my-list">
  <rs-list-item class="item -roundness">
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
  <rs-list-item class="item -roundness">
    <rs-list-text class="text">テキスト</rs-list-text>
  </rs-list-item>
</rs-list>`,
      { lang: "html" }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/list/rs-list.scss';

.my-list {
  > .item.-roundness {
    @include rs-list-item-shape-radius(10px);
  }
}`,
      { lang: "scss" }
    )}
    <ul>
      <li>$radius: 角の丸みを指定</li>
    </ul>
  `)
  