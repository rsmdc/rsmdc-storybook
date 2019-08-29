import { storiesOf } from '@storybook/html'
import { Slider } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'
import './css/slider.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

storiesOf('Components|Slider', module)
  .addDecorator(withLinks)
  .add('概要', () => `
    <h4>Slider</h4>
    <p>スライダーを使用すると、ユーザーは値の範囲から選択できる。</p>
    参考: <a href="https://material.io/design/components/sliders.html#">https://material.io/design/components/sliders.html#</a>

  `)
  .add('使用方法', () => `
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-slider class="slider" />`,
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
        <td>rs-slider</td>
        <td>スライダー本体を表示します</td>
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
        <td>disabled</td>
        <td>スライダーを無効にします</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
      <tr>
        <td>min</td>
        <td>最小値を設定します</td>
        <td>number</td>
        <td>-</td>
      </tr>
      <tr>
        <td>max</td>
        <td>最大値を設定します</td>
        <td>number</td>
        <td>-</td>
      </tr>
      <tr>
        <td>now</td>
        <td>現在の値を設定します</td>
        <td>number</td>
        <td>-</td>
      </tr>
      <tr>
        <td>countable</td>
        <td>カウンターを表示します</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
      <tr>
        <td>marked</td>
        <td>マーカーを表示します</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
    </table>

    <h4>テーマ変数</h4>
    <p>
    　rs-sliderで使われるテーマ変数です。 <br>
    　下記変数に新しく色を指定することで、テーマカラーが上書きされます。
    </p>
    <table>
      <tr>
        <th>変数名</th>
        <th>説明</th>
      </tr>
      <tr>
        <td>$rs-theme-secondary</td>
        <td>選択状態の線、リップル、ピン、マーカーの色に関わります。</td>
      </tr>
    </table>
  `)
