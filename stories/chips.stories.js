import { storiesOf } from '@storybook/html'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'
const chips = require('@rsmdc/chips/loader')

import './css/style.scss'
import './css/chips.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

chips.defineCustomElements(window)

storiesOf('Components|Chip', module)
  .addDecorator(withLinks)
  .add('概要', () => `
    <h4>Chip</h4>
    <p>チップは、入力、属性、またアクションを表すコンパクトな要素。</p>
    参考: <a href="https://material.io/components/chips/">https://material.io/components/chips/</a>
    <p>スナックバーのタイプ</p>
    <ul>
      <li>normal（デフォルト）</li>
      <li>outlined：枠線がつく</li>
      <li>shaped：形状が四角いスタイル</li>
    </ul>
  `)
  .add('使用方法', () => `
    <h4>使用方法</h4>
    <rs-chip class="my-chip">sample</rs-chip>
    <rs-chip class="my-chip" selected>sample</rs-chip>
    ${copyCodeBlock(
`<rs-chip class="my-chip">sample</rs-chip>
<rs-chip class="my-chip" selected>sample</rs-chip>`,
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
        <td>未選択状態のテキスト、背景、枠線、リップルの色に関わります。</td>
      </tr>
    </table>
  `)


  storiesOf('Components|Chip/スタイルのカスタマイズ/チップスのタイプを変える', module)
  .add('normal（デフォルト）', () => `
    <h4>normal</h4>
    <p>normalの場合mixinは不要。</p>
    <rs-chip class="my-chip">テキスト</rs-chip>
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-chip class="my-chip">テキスト</rs-chip>`,
      { lang: 'html' }
    )}
  `)

  .add('outlined', () => `
    <h4>outlined</h4>
    <p>枠線で囲まれたスタイル。</p>
    <rs-chip class="my-chip -outlined">テキスト</rs-chip>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-chip-type($type);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-chip class="my-chip -outlined">テキスト</rs-chip>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/chips/rs-chips.scss';

.my-chip {
  &.-outlined {
    @include rs-chip-type(outlined);
  }
}`,
      { lang: 'scss' }
    )}
  `)

  .add('shaped', () => `
  <h4>shaped</h4>
  <p>チップスの形状が四角いスタイル。</p>
  <rs-chip class="my-chip -shaped">テキスト</rs-chip>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
`@include rs-chip-type($type);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-chip class="my-chip -shaped">テキスト</rs-chip>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
`@import '@rsmdc/chips/rs-chips.scss';

.my-chip {
  &.-shaped {
    @include rs-chip-type(shaped);
  }
}`,
    { lang: 'scss' }
  )}
`)

  storiesOf('Components|Chip/スタイルのカスタマイズ', module)
  .add('テキストの色を変える', () => `
    <h4>テキストの色を指定した色に変える。</h4>
    <rs-chip class="my-chip -text-orange">テキスト</rs-chip>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-chip-ink-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-chip class="my-chip -text-orange">テキスト</rs-chip>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/chips/rs-chips.scss';

.my-chip {
  &.-text-orange {
    @include rs-chip-ink-color(orange);
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

  .add('選択状態のテキストの色を変える', () => `
    <h4>選択状態のテキストの色を指定した色に変える。</h4>
    <rs-chip class="my-chip -selected-text-blue" selected>テキスト</rs-chip>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-chip-selected-ink-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-chip class="my-chip -selected-text-blue" selected>テキスト</rs-chip>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/chips/rs-chips.scss';

.my-chip {
  &.-selected-text-blue {
    @include rs-chip-selected-ink-color(#61b8f1);
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

  .add('背景色を変える', () => `
    <h4>背景色を指定した色に変える。</h4>
    <rs-chip class="my-chip -fill-orange">テキスト</rs-chip>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-chip-fill-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-chip class="my-chip -fill-orange">テキスト</rs-chip>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/chips/rs-chips.scss';

.my-chip {
  &.-fill-orange {
    @include rs-chip-fill-color(orange);
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

        
  .add('選択状態の背景色を変える', () => `
  <h4>選択状態の背景色の色を指定した色に変える。</h4>
  <rs-chip class="my-chip -selected-fill-blue" selected>テキスト</rs-chip>
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
`@include rs-chip-selected-fill-color($color);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-chip class="my-chip -selected-fill-blue" selected>テキスト</rs-chip>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
`@import '@rsmdc/chips/rs-chips.scss';

.my-chip {
  &.-selected-fill-blue {
    @include rs-chip-selected-fill-color(#61b8f1);
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
    
  .add('背景色からテキストとリップルの色を変える', () => `
    <h4>指定した背景色の色を元にテキストとリップルの色が自動調整される。</h4>
    <rs-chip class="my-chip -accessible-dark">テキスト</rs-chip>
    <rs-chip class="my-chip -accessible-light">テキスト</rs-chip>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-chip-fill-color-accessible($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-chip class="my-chip -accessible-dark">テキスト</rs-chip>
<rs-chip class="my-chip -accessible-light">テキスト</rs-chip>`,
    { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/chips/rs-chips.scss';

.my-chip {
  &.-accessible-dark {
    @include rs-chip-fill-color-accessible(black);
  }
  &.-accessible-light {
    @include rs-chip-fill-color-accessible(orange);
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

  .add('チップスの角の丸みを変える', () => `
    <h4>チップスの角の丸みを指定したサイズに変える。</h4>
    <rs-chip class="my-chip -radius">テキスト</rs-chip>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-chip-shape-radius($radius);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-chip class="my-chip -radius">テキスト</rs-chip>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/chips/rs-chips.scss';

.my-chip {
  &.-radius {
    @include rs-chip-shape-radius(10px);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $radius: 角の丸みのサイズを指定 <br> 例）10px
      </li>
    </ul>
  `)

  .add('枠線の色を変える', () => `
    <h4>枠線の色を指定した色に変える</h4>
    <p>タイプがoutlinedの時に使用</p>
    <rs-chip class="my-chip -outlined -line-orange">テキスト</rs-chip>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-chip-outline-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-chip class="my-chip -outliend -line-orange">テキスト</rs-chip>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/chips/rs-chips.scss';

.my-chip {
  &.-outlined.-line-orange {
    @include rs-chip-outline-color(orange);
    @include rs-chip-type(outlined);
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

  .add('選択状態の枠線の色を変える', () => `
    <h4>選択状態の枠線の色を指定した色に変える。</h4>
    <p>タイプがoutlinedの時に使用</p>
    <rs-chip class="my-chip -outlined -selected-line-blue" selected>テキスト</rs-chip>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-chip-selected-outline-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-chip class="my-chip -outlined -selected-line-blue" selected>テキスト</rs-chip>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/chips/rs-chips.scss';

.my-chip {
  &.-outlined.-selected-line-blue {
    @include rs-chip-selected-outline-color(#61b8f1);
    @include rs-chip-type(outlined);
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

  .add('枠線の太さを変える', () => `
    <h4>枠線の太さを指定したサイズに変える。</h4>
    <p>タイプがoutlinedの時に使用。</p>
    <rs-chip class="my-chip -outlined -line-width">テキスト</rs-chip>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-chip-outline-width($width);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-chip class="my-chip -outliend -line-width">テキスト</rs-chip>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/chips/rs-chips.scss';

.my-chip {
  &.-outlined.-line-width {
    @include rs-chip-outline-width(3px);
    @include rs-chip-type(outlined);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $width: 線の太さを指定 <br> 例）3px
      </li>
    </ul>
  `)

  .add('枠線のスタイルを変える', () => `
    <h4>枠線のスタイルを指定したスタイルに変える。</h4>
    <p>タイプがoutlinedの時に使用。</p>
    <rs-chip class="my-chip -outlined -line-style">テキスト</rs-chip>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-chip-outline-border-style($style);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-chip class="my-chip -outlined -line-style">テキスト</rs-chip>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/chips/rs-chips.scss';

.my-chip {
  &.-outlined.-line-style {
    @include rs-chip-outline-border-style(double);
    @include rs-chip-outline-width(4px);
    @include rs-chip-type(outlined);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $style: 線のスタイルを指定 <br> 例）double
      </li>
    </ul>
  `)

  .add('枠線のスタイルを一括で変える', () => `
    <h4>枠線のスタイル、線の太さ、線の色を一括で変える。</h4>
    <p>タイプがoutlinedの時に使用。</p>
    <rs-chip class="my-chip -outlined -style">テキスト</rs-chip>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-chip-outline-style($width, $style, $color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-chip class="my-chip -outlined -line">テキスト</rs-chip>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/chips/rs-chips.scss';

.my-chip {
  &.-outlined.-style {
    @include rs-chip-outline-style(4px, double, orange);
    @include rs-chip-type(outlined);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $width: 線の太さを指定 <br> 例）4px
      </li>
      <li>
        $style: 線のスタイルを指定 <br> 例）double
      </li>
      <li>
        $color: 線の色を指定 <br> 例）#ee00ce
      </li>
    </ul>
  `)

  .add('チップスの高さを変える', () => `
    <h4>チップスの高さを指定したサイズに変える。</h4>
    <rs-chip class="my-chip -height">01</rs-chip>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-chip-height($height);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-chip class="my-chip -height">01</rs-chip>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/chips/rs-chips.scss';

.my-chip {
  &.-height {
    @include rs-chip-height(40px);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $height: 高さを指定 <br> 例）40px
      </li>
    </ul>
  `)

  .add('チップス内の横幅の余白を変える', () => `
    <h4>チップス内の横幅の余白（パディング）を指定したサイズに変える。</h4>
    <rs-chip class="my-chip -horizontal-padding">テキスト</rs-chip>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-chip-horizontal-padding($padding);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-chip class="my-chip -horizontal-padding">テキスト</rs-chip>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/chips/rs-chips.scss';

.my-chip {
  &.-horizontal-padding {
    @include rs-chip-horizontal-padding(30px);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$padding: 横幅の余白を指定 <br> 例）30px</li>
    </ul>
  `)

  .add('アイコンを設定する', () => `
    <h4>アイコンを設定する</h4>
    <rs-chip class="my-chip -icon">テキスト</rs-chip>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-chip-icon-image($icon, $codepoint: '');`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-chip class="my-chip -icon">テキスト</rs-chip>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/chips/rs-chips.scss';

.my-chip {
  &.-icon {
    @include rs-chip-icon-image(
      Material Icons,
      map-get($material-icons-codepoints, star)
    );
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $icon:
        <ul>
          <li>
            icon-font: font-family <br> 例）Material Icons
          </li>
          <li>
            image: 画像パス <br> url('example.png')
          </li>
        </ul>
        <li>$codepoint: コードポイント（icon-fontの時のみ）<br> 例）e063</li>
      </li>
    </ul>
  `)
    
  .add('アイコンの位置を変える', () => `
    <h4>表示したアイコンの位置を変える</h4>
    <rs-chip class="my-chip -icon -position">テキスト</rs-chip>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-chip-icon-position($position);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-chip class="my-chip -icon -position">テキスト</rs-chip>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/chips/rs-chips.scss';

.my-chip {
  &.-icon.-position {
    @include rs-chip-icon-image(
      Material Icons,
      map-get($material-icons-codepoints, star)
    );
    @include rs-chip-icon-position(right);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$position: アイコンの位置を指定<br>leftかrightで指定する（ デフォルトはleft ）</li>
    </ul>
  `)

  .add('アイコンの色を変える', () => `
    <h4>アイコンの色を指定した色に変える。</h4>
    <rs-chip class="my-chip -icon -orange">テキスト</rs-chip>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-chip-icon-color($color)`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-chip class="my-chip -icon -orange">テキスト</rs-chip>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/chips/rs-chips.scss';

.my-chip {
  &.-icon.-orange {
    @include rs-chip-icon-color(orange);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $color:　アイコンの色を指定 <br> 例）#ee00ce
      </li>
    </ul>
  `)

  .add('選択状態のアイコンの色を変える', () => `
    <h4>選択状態のアイコンの色を指定した色に変える。</h4>
    <rs-chip class="my-chip -icon -selected-blue" selected>テキスト</rs-chip>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-chip-selected-icon-color($color)`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-chip class="my-chip -icon -selected-blue" selected>テキスト</rs-chip>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/chips/rs-chips.scss';

.my-chip {
  &.-icon.-selected-blue {
    @include rs-chip-icon-image(
      Material Icons,
      map-get($material-icons-codepoints, star)
    );
    @include rs-chip-selected-icon-color(#61b8f1);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $color:　アイコンの色を指定 <br> 例）#ee00ce
      </li>
    </ul>
  `)

  .add('アイコンのサイズを変える', () => `
    <h4>アイコンのサイズを指定した大きさに変える。</h4>
    <rs-chip class="my-chip -icon -size">テキスト</rs-chip>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-chip-icon-size($size)`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-chip class="my-chip -icon -size">テキスト</rs-chip>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/chips/rs-chips.scss';

.my-chip {
  &.-icon.-size {
    @include rs-chip-icon-size(14px);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$size: アイコンのサイズを指定 <br> 例）14px</li>
    </ul>
  `)

  .add('アイコン周辺の余白を変える', () => `
    <h4>アイコン周辺の余白を指定したサイズに変える。</h4>
    <rs-chip class="my-chip -icon -margin">テキスト</rs-chip>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-chip-icon-margin($left-margin, $right-margin);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-chip class="my-chip -icon -margin">テキスト</rs-chip>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/chips/rs-chips.scss';

.my-chip {
  &.-icon.-margin {
    @include rs-chip-icon-margin(10px, 5px);
  }
}
`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$left-margin: アイコンの左側の余白を指定<br>例）10px</li>
      <li>$right-margin: アイコンの右側の余白を指定<br>例）5px</li>
    </ul>
  `)
