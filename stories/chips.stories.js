import { storiesOf } from '@storybook/html'
import { Slider } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

storiesOf('Components|Chip', module)
  .addDecorator(withLinks)
  .add('概要', () => `
    <h4>Chip</h4>
    <p>チップは、入力、属性、またアクションを表すコンパクトな要素。</p>
    参考: <a href="https://material.io/components/chips/">https://material.io/components/chips/</a>
    <p>スナックバーのタイプ</p>
    <ul>
      <li>normal（デフォルト）</li>
      <li>shaped：四角い状態</li>
      <li>outlined：枠線がつく</li>
    </ul>
  `)
  .add('使用方法', () => `
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-chip class="chip">sample</rs-chip>
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
        <td>rs-chip</td>
        <td>チップ本体を表示します</td>
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
        <td>selected</td>
        <td>チップを選択状態にします。</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
    </table>
    <h4>テーマ変数</h4>
    <p>
      rs-chipで使われるテーマ変数です。 <br>
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
        <td>未選択状態のテキスト、背景、リップルの色に関わります。</td>
      </tr>
    </table>
  `)
