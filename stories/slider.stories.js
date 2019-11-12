import { storiesOf } from '@storybook/html'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'
const slider = require('@rsmdc/slider/loader')

import './css/style.scss'
import './css/slider.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

slider.defineCustomElements(window)

storiesOf('Components|Slider', module)
  .addDecorator(withLinks)
  .add('概要', () => `
    <h4>Slider</h4>
    <p>スライダーを使用すると、ユーザーは値の範囲から選択できる。</p>
    参考: <a href="https://material.io/design/components/sliders.html#">https://material.io/design/components/sliders.html#</a>

  `)
  .add('使用方法', () => `
    <h4>使用方法</h4>
    <rs-slider></rs-slider>
    <rs-slider class="rs-slider" now="0" max="100" countable></rs-slider>
    <rs-slider class="rs-slider" max="100" countable marked></rs-slider>
    ${copyCodeBlock(
`<rs-slider class="slider" />
<rs-slider class="rs-slider" now="0" max="100" countable />
<rs-slider class="rs-slider" max="100" countable marked />`,
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

storiesOf('Components|Slider/スタイルのカスタマイズ', module)
  .add('スライドされた時の色を変える', () => `
    <h4>スライドされた（オン）状態の色を指定した色に変える。</h4>
    <rs-slider class="my-slider -slide-orange"></rs-slider>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-slider-highlight-color($color);`,
    { lang: 'scss' }
  )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-slider class="my-slider -slide-orange" />`,
    { lang: 'html' }
  )}
    ${copyCodeBlock(
`@import '@rsmdc/slider/rs-slider.scss';

.my-slider {
  &.-slide-orange {
    @include rs-slider-highlight-color(orange);
  }
}
`,
    { lang: 'scss' }
  )}
    <p>オプション</p>
    <ul>
      <li>
        $color: インクの色コード <br> 例）#ee00ce
      </li>
    </ul>
  `)
  
  .add('レールの色を変える', () => `
    <h4>レールの色を指定した色に変える。</h4>
    <rs-slider class="my-slider -rail-orange"></rs-slider>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-slider-rail-color($color);`,
    { lang: 'scss' }
  )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-slider class="my-slider -rail-orange" />`,
    { lang: 'html' }
  )}
    ${copyCodeBlock(
`@import '@rsmdc/slider/rs-slider.scss';

.my-slider {
  &.-rail-orange {
    @include rs-slider-rail-color(orange);
  }
}
`,
    { lang: 'scss' }
  )}
    <p>オプション</p>
    <ul>
      <li>
        $color: インクの色コード <br> 例）#ee00ce
      </li>
    </ul>
  `)


  .add('マーカーの色を変える', () => `
    <h4>マーカー（目盛り）の色を指定した色に変える。</h4>
    <p>marked属性をつけた場合のみ有効。</p>
    <rs-slider class="my-slider -mark-orange" marked countable></rs-slider>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-slider-rail-tick-mark-color($color);`,
    { lang: 'scss' }
  )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-slider class="my-slider -mark-orange" marked countable />`,
    { lang: 'html' }
  )}
    ${copyCodeBlock(
`@import '@rsmdc/slider/rs-slider.scss';

.my-slider {
  &.-mark-orange {
    @include rs-slider-rail-tick-mark-color(orange);
  }
}
`,
    { lang: 'scss' }
  )}
    <p>オプション</p>
    <ul>
      <li>
        $color: インクの色コード <br> 例）#ee00ce
      </li>
    </ul>
  `)

  .add('つまみの色を変える', () => `
    <h4>つまみ部分の色を指定した色に変える。</h4>
    <rs-slider class="my-slider -thumb-orange"></rs-slider>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-slider-thumb-color($color);`,
    { lang: 'scss' }
  )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-slider class="my-slider -thumb-orange" />`,
    { lang: 'html' }
  )}
    ${copyCodeBlock(
`@import '@rsmdc/slider/rs-slider.scss';

.my-slider {
  &.-thumb-orange {
    @include rs-slider-thumb-color(orange);
  }
}
`,
    { lang: 'scss' }
  )}
    <p>オプション</p>
    <ul>
      <li>
        $color: インクの色コード <br> 例）#ee00ce
      </li>
    </ul>
  `)

  .add('つまみの枠線の色を変える', () => `
    <h4>つまみの枠線の色を指定した色に変える。</h4>
    <rs-slider class="my-slider -stroke-orange"></rs-slider>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-slider-thumb-stroke-cutout($color);`,
    { lang: 'scss' }
  )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-slider class="my-slider -stroke-orange" />`,
    { lang: 'html' }
  )}
    ${copyCodeBlock(
`@import '@rsmdc/slider/rs-slider.scss';

.my-slider {
  &.-stroke-orange {
    @include rs-slider-thumb-stroke-cutout(orange);
  }
}
`,
    { lang: 'scss' }
  )}
    <p>オプション</p>
    <ul>
      <li>
        $color: インクの色コード <br> 例）#ee00ce
      </li>
    </ul>
  `)
  
  .add('フォーカス時の色を変える', () => `
    <h4>フォーカス時の色を指定した色に変える。</h4>
    <rs-slider class="my-slider -focus-orange"></rs-slider>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-slider-focus-halo-color($color);`,
    { lang: 'scss' }
  )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-slider class="my-slider -focus-orange" />`,
    { lang: 'html' }
  )}
    ${copyCodeBlock(
`@import '@rsmdc/slider/rs-slider.scss';

.my-slider {
  &.-focus-orange {
    @include rs-slider-focus-halo-color(orange);
  }
}
`,
    { lang: 'scss' }
  )}
    <p>オプション</p>
    <ul>
      <li>
        $color: インクの色コード <br> 例）#ee00ce
      </li>
    </ul>
  `)

  .add('ピンの背景色を変える', () => `
    <h4>ピンの背景色を指定した色に変える。</h4>
    <p>countable属性をつけた場合のみ有効。</p>
    <rs-slider class="my-slider -pin-fill-orange" countable></rs-slider>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-slider-value-pin-fill-color($color);`,
    { lang: 'scss' }
  )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-slider class="my-slider -pin-fill-orange" countable />`,
    { lang: 'html' }
  )}
    ${copyCodeBlock(
`@import '@rsmdc/slider/rs-slider.scss';

.my-slider {
  &.-pin-fill-orange {
    @include rs-slider-value-pin-fill-color(orange);
  }
}
`,
    { lang: 'scss' }
  )}
    <p>オプション</p>
    <ul>
      <li>
        $color: インクの色コード <br> 例）#ee00ce
      </li>
    </ul>
  `)

  .add('ピンのテキストの色を変える', () => `
    <h4>ピンのテキストの色を指定した色に変える。</h4>
    <rs-slider class="my-slider -pin-orange" countable></rs-slider>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-slider-value-pin-ink-color($color);`,
    { lang: 'scss' }
  )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-slider class="my-slider -pin-orange" countable />`,
    { lang: 'html' }
  )}
    ${copyCodeBlock(
`@import '@rsmdc/slider/rs-slider.scss';

.my-slider {
  &.-pin-orange {
    @include rs-slider-value-pin-ink-color(orange);
  }
}
`,
    { lang: 'scss' }
  )}
    <p>オプション</p>
    <ul>
      <li>
        $color: インクの色コード <br> 例）#ee00ce
      </li>
    </ul>
  `)

  .add('スライダーの色を一括で変える', () => `
    <h4>レール、マーカー、つまみ、フォーカス、ピンの色を一括で指定した色に変える。</h4>
    <rs-slider class="my-slider -orange"></rs-slider>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-slider-color-accessible($color);`,
    { lang: 'scss' }
  )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-slider class="my-slider -orange" />`,
    { lang: 'html' }
  )}
    ${copyCodeBlock(
`@import '@rsmdc/slider/rs-slider.scss';

.my-slider {
  &.-orange {
    @include rs-slider-color-accessible(orange);
  }
}
`,
    { lang: 'scss' }
  )}
    <p>オプション</p>
    <ul>
      <li>
        $color: インクの色コード <br> 例）#ee00ce
      </li>
    </ul>
  `)