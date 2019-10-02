import { storiesOf } from '@storybook/html'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'
const dialog = require('@rsmdc/dialog/loader')

import './css/style.scss'
import './css/dialog.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

dialog.defineCustomElements(window)

storiesOf('Components|Dialog', module)
  .addDecorator(withLinks)
  .add('概要', () => `
    <h4>Dialog</h4>
    <p>ダイアログは、ユーザーによる意思決定や追加情報の入力用などに表示される。</p>
    参考: <a href="https://material.io/components/dialogs/#">https://material.io/components/dialogs/#</a>

    <p>ダイアログのタイプ</p>
    <ul>
      <li>normal（デフォルト）</li>
      <li>stacked：ボタンが改行された状態で表示</li>
    </ul>
  `)
  .add('使用方法', () => `
    <h4>使用方法</h4>
    <rs-dialog class="dialog" opened>
      <rs-dialog-title>タイトル</rs-dialog-title>
      <rs-dialog-content>ダイアログの内容が入る</rs-dialog-content>
      <rs-button>ボタン1</rs-button>
      <rs-button>ボタン2</rs-button>
    </rs-dialog>
    ${copyCodeBlock(
`<rs-dialog class="dialog">
  <rs-dialog-title class="title">タイトル</rs-dialog-title>
  <rs-dialog-content class="content">ダイアログの内容が入る</rs-dialog-content>
  <rs-button class="button">ボタン1</rs-button>
  <rs-button class="button">ボタン2</rs-button>
</rs-dialog>
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
        <td>rs-dialog</td>
        <td>ダイアログ本体を表示します</td>
        <td>
          <ul>
            <li>rs-dialog-title</li>
            <li>rs-dialog-content</li>
          </ul>
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-dialog-title</td>
        <td>タイトルを表示します</td>
        <td>テキスト</td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-dialog-content</td>
        <td>コンテンツ部分を表示します</td>
        <td>
          <ul>  
            <li>rs-list</li>
            <li>テキスト</li>
          </ul>
        </td>
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
        <td>opened</td>
        <td>ダイアログを表示状態にします。</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
      <tr>
        <td>scrollable</td>
        <td>コンテンツが溢れる場合スクロール状態にする。</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
    </table>

    <h4>テーマ変数</h4>
    <p>
    　rs-dialogで使われるテーマ変数です。 <br>
    　下記変数に新しく色を指定することで、テーマカラーが上書きされます。
    </p>
    <table>
      <tr>
        <th>変数名</th>
        <th>説明</th>
      </tr>
      <tr>
        <td>$rs-theme-surface</td>
        <td>選択状態の背景色に関わります。</td>
      </tr>
      <tr>
        <td>$rs-theme-on-surface</td>
        <td>選択状態のテキストの色に関わります。</td>
      </tr>
    </table>
  `)
