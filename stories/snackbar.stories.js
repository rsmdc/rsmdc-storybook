import { storiesOf } from '@storybook/html'
import { Slider } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'
import './css/slider.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

storiesOf('Components|Snackbar', module)
  .addDecorator(withLinks)
  .add('概要', () => `
    <h4>Snackbar</h4>
    <p>アプリプロセスに関する簡単なメッセージを表示する</p>
    参考: <a href="https://material.io/design/components/snackbars.html">https://material.io/design/components/snackbars.html</a>
    <p>スナックバーのタイプ</p>
    <ul>
      <li>normal（デフォルト）</li>
      <li>leading：スナックバー本体を左端に表示</li>
      <li>stacked：テキストとアクション部分を改行して表示</li>
    </ul>
  `)
  .add('使用方法', () => `
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-snackbar class="snackbar">
  <rs-snackbar-text>sample</rs-snackbar-text>
</rs-snackbar>
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
        <td>rs-snackbar</td>
        <td>スナックバー本体を表示します</td>
        <td>rs-snackbar-text</td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-snackbar-text</td>
        <td>テキスト部分を表示します</td>
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
        <td>opened</td>
        <td>スナックバーを表示状態にします</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
    </table>
    <h4>テーマ変数</h4>
    <p>
      rs-snackbarで使われるテーマ変数です。 <br>
      下記変数に新しく色を指定することで、テーマカラーが上書きされます。
    </p>
    <table>
      <tr>
        <th>変数名</th>
        <th>説明</th>
      </tr>
      <tr>
        <td>$rs-theme-on-surface</td>
        <td>背景色に関わります。</td>
      </tr>
    </table>
  `)
