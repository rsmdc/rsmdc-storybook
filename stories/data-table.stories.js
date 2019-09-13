import { storiesOf } from '@storybook/html'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

storiesOf('Components|Data table', module)
  .addDecorator(withLinks)
  .add('概要', () => `
    <h4>Data table</h4>
    <p>データテーブルには、行と列にまたがるデータのセットが表示される。</p>
    参考: <a href="https://material.io/components/data-tables/">https://material.io/components/data-tables/</a>
  `)
  .add('使用方法', () => `
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-data-table class="data-table">
  <rs-data-table-header>
    <rs-data-table-row>
      <rs-data-table-cell>sample</rs-data-table-cell>
      <rs-data-table-cell>sample</rs-data-table-cell>
      <rs-data-table-cell>sample</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-header>
  <rs-data-table-body>
    <rs-data-table-row>
      <rs-data-table-cell>content</rs-data-table-cell>
      <rs-data-table-cell>content</rs-data-table-cell>
      <rs-data-table-cell>content</rs-data-table-cell>
      <rs-data-table-cell>content</rs-data-table-cell>
      <rs-data-table-cell>content</rs-data-table-cell>
      <rs-data-table-cell>content</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-body>
</rs-data-table>
`,
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
        <td>rs-data-table</td>
        <td>データテーブル本体を表示します</td>
        <td>
          <ul>
            <li>rs-data-table-header</li>
            <li>rs-data-table-body</li>
          </ul>
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-data-table-header</td>
        <td>ヘッダー部分を示します</td>
        <td>rs-data-table-row</td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-data-table-body</td>
        <td>ボディー部分を示します</td>
        <td>rs-data-table-row</td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-data-table-row</td>
        <td>行の部分を示します</td>
        <td>rs-data-table-cell</td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-data-cell</td>
        <td>セル部分を示します</td>
        <td>
          <ul>
            <li>rs-checkbox</li>
            <li>テキスト</li>
          </ul>
        </td>
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
        <td>fixed</td>
        <td>ヘッダーを固定してボディーをスクロール状態にします。</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
    </table>
    <h4>テーマ変数</h4>
    <p>
      rs-data-tableで使われるテーマ変数です。 <br>
      下記変数に新しく色を指定することで、テーマカラーが上書きされます。
    </p>
    <table>
      <tr>
        <th>変数名</th>
        <th>説明</th>
      </tr>
      <tr>
        <td>$rs-theme-on-surface</td>
        <td>テキストの色に関わります。</td>
      </tr>
      <tr>
        <td>$rs-theme-primary</td>
        <td>チェックボックスが選択状態の時の背景色に関わります。</td>
      </tr>
    </table>
  `)
