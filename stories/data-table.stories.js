import { storiesOf } from '@storybook/html'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'
const dataTable = require('@rsmdc/data-table/loader')

import './css/style.scss'
import './css/data-table.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

dataTable.defineCustomElements(window)

storiesOf('Components|Data table', module)
  .addDecorator(withLinks)
  .add('概要', () => `
    <h4>Data table</h4>
    <p>データテーブルには、行と列にまたがるデータのセットが表示される。</p>
    参考: <a href="https://material.io/components/data-tables/">https://material.io/components/data-tables/</a>
  `)
  .add('使用方法', () => `
    <h4>使用方法</h4>
    <rs-data-table class="data-table">
      <rs-data-table-header class="header">
        <rs-data-table-row class="row">
          <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
          <rs-data-table-cell class="cell">花</rs-data-table-cell>
          <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
          <rs-data-table-cell class="cell">国</rs-data-table-cell>
        </rs-data-table-row>
      </rs-data-table-header>
      <rs-data-table-body class="body">
        <rs-data-table-row class="row">
          <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
          <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
          <rs-data-table-cell class="cell">野球</rs-data-table-cell>
          <rs-data-table-cell class="cell">日本</rs-data-table-cell>
        </rs-data-table-row>
        <rs-data-table-row class="row">
          <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
          <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
          <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
          <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
        </rs-data-table-row>
        <rs-data-table-row class="row">
          <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
          <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
          <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
          <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
        </rs-data-table-row>
        <rs-data-table-row class="row">
          <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
          <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
          <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
          <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
        </rs-data-table-row>
      </rs-data-table-body>
    </rs-data-table>

    <rs-data-table class="data-table">
      <rs-data-table-header class="header">
        <rs-data-table-row class="row">
          <rs-data-table-cell class="cell">
            <rs-checkbox></rs-checkbox>
          </rs-data-table-cell>
          <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
          <rs-data-table-cell class="cell">花</rs-data-table-cell>
          <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
          <rs-data-table-cell class="cell">国</rs-data-table-cell>
        </rs-data-table-row>
      </rs-data-table-header>
      <rs-data-table-body class="body">
        <rs-data-table-row class="row">
          <rs-data-table-cell class="cell">
            <rs-checkbox></rs-checkbox>
          </rs-data-table-cell>
          <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
          <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
          <rs-data-table-cell class="cell">野球</rs-data-table-cell>
          <rs-data-table-cell class="cell">日本</rs-data-table-cell>
        </rs-data-table-row>
        <rs-data-table-row class="row">
          <rs-data-table-cell class="cell">
            <rs-checkbox></rs-checkbox>
          </rs-data-table-cell>
          <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
          <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
          <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
          <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
        </rs-data-table-row>
        <rs-data-table-row class="row">
          <rs-data-table-cell class="cell">
            <rs-checkbox></rs-checkbox>
          </rs-data-table-cell>
          <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
          <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
          <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
          <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
        </rs-data-table-row>
        <rs-data-table-row class="row">
          <rs-data-table-cell class="cell">
            <rs-checkbox></rs-checkbox>
          </rs-data-table-cell>
          <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
          <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
          <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
          <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
        </rs-data-table-row>
      </rs-data-table-body>
    </rs-data-table>
    
    ${copyCodeBlock(
`<rs-data-table class="data-table">
  <rs-data-table-header class="header">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
      <rs-data-table-cell class="cell">花</rs-data-table-cell>
      <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
      <rs-data-table-cell class="cell">国</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-header>
  <rs-data-table-body class="body">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
      <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
      <rs-data-table-cell class="cell">野球</rs-data-table-cell>
      <rs-data-table-cell class="cell">日本</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
      <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
      <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
      <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
      <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
      <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
      <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
      <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
      <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
      <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-body>
</rs-data-table>

<rs-data-table class="data-table">
  <rs-data-table-header class="header">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
      <rs-data-table-cell class="cell">花</rs-data-table-cell>
      <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
      <rs-data-table-cell class="cell">国</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-header>
  <rs-data-table-body class="body">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
      <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
      <rs-data-table-cell class="cell">野球</rs-data-table-cell>
      <rs-data-table-cell class="cell">日本</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
      <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
      <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
      <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
      <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
      <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
      <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
      <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
      <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
      <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
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

  storiesOf('Components|Data table/スタイルのカスタマイズ', module)
  .add('ヘッダーのテキストの色を変える', () => `
    <h4>ヘッダーのテキストの色を指定した色に変える。</h4>
    <rs-data-table class="data-table -header-text-orange">
      <rs-data-table-header class="header">
        <rs-data-table-row class="row">
          <rs-data-table-cell class="cell">
            <rs-checkbox></rs-checkbox>
          </rs-data-table-cell>
          <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
          <rs-data-table-cell class="cell">花</rs-data-table-cell>
          <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
          <rs-data-table-cell class="cell">国</rs-data-table-cell>
        </rs-data-table-row>
      </rs-data-table-header>
      <rs-data-table-body class="body">
        <rs-data-table-row class="row">
          <rs-data-table-cell class="cell">
            <rs-checkbox></rs-checkbox>
          </rs-data-table-cell>
          <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
          <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
          <rs-data-table-cell class="cell">野球</rs-data-table-cell>
          <rs-data-table-cell class="cell">日本</rs-data-table-cell>
        </rs-data-table-row>
        <rs-data-table-row class="row">
          <rs-data-table-cell class="cell">
            <rs-checkbox></rs-checkbox>
          </rs-data-table-cell>
          <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
          <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
          <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
          <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
        </rs-data-table-row>
        <rs-data-table-row class="row">
          <rs-data-table-cell class="cell">
            <rs-checkbox></rs-checkbox>
          </rs-data-table-cell>
          <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
          <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
          <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
          <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
        </rs-data-table-row>
        <rs-data-table-row class="row">
          <rs-data-table-cell class="cell">
            <rs-checkbox></rs-checkbox>
          </rs-data-table-cell>
          <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
          <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
          <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
          <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
        </rs-data-table-row>
      </rs-data-table-body>
    </rs-data-table> 
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-data-table-header-row-text-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-data-table class="data-table -header-text-orange">
  <rs-data-table-header class="header">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
      <rs-data-table-cell class="cell">花</rs-data-table-cell>
      <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
      <rs-data-table-cell class="cell">国</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-header>
  <rs-data-table-body class="body">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
      <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
      <rs-data-table-cell class="cell">野球</rs-data-table-cell>
      <rs-data-table-cell class="cell">日本</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
      <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
      <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
      <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
      <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
      <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
      <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
      <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
      <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
      <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-body>
</rs-data-table>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/data-table/rs-data-table.scss';

.data-table {
  &.-header-text-orange {
    @include rs-data-table-header-row-text-color(orange);
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
    
  .add('ボディーのテキストの色を変える', () => `
  <h4>ボディーのテキストの色を指定した色に変える。</h4>
  <rs-data-table class="data-table -body-text-orange">
    <rs-data-table-header class="header">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
        <rs-data-table-cell class="cell">花</rs-data-table-cell>
        <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
        <rs-data-table-cell class="cell">国</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
        <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
        <rs-data-table-cell class="cell">野球</rs-data-table-cell>
        <rs-data-table-cell class="cell">日本</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
        <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
        <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
        <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
        <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
        <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
        <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
        <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
        <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
        <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-body>
  </rs-data-table> 
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-data-table-row-text-color($color);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-data-table class="data-table -body-text-orange">
  <rs-data-table-header class="header">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
      <rs-data-table-cell class="cell">花</rs-data-table-cell>
      <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
      <rs-data-table-cell class="cell">国</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-header>
  <rs-data-table-body class="body">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
      <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
      <rs-data-table-cell class="cell">野球</rs-data-table-cell>
      <rs-data-table-cell class="cell">日本</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
      <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
      <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
      <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
      <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
      <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
      <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
      <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
      <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
      <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-body>
</rs-data-table>`,
    { lang: 'html' }
  )}
  ${copyCodeBlock(
`@import '@rsmdc/data-table/rs-data-table.scss';

.data-table {
  &.-body-text-orange {
    @include rs-data-table-row-text-color(orange);
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

  .add('テーブルの背景色を変える', () => `
  <h4>テーブル全体の背景色を指定した色に変える。</h4>
  <rs-data-table class="data-table -fill-beige">
    <rs-data-table-header class="header">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
        <rs-data-table-cell class="cell">花</rs-data-table-cell>
        <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
        <rs-data-table-cell class="cell">国</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
        <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
        <rs-data-table-cell class="cell">野球</rs-data-table-cell>
        <rs-data-table-cell class="cell">日本</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
        <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
        <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
        <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
        <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
        <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
        <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
        <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
        <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
        <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-body>
  </rs-data-table> 
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-data-table-fill-color($color);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-data-table class="data-table -fill-beige">
  <rs-data-table-header class="header">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
      <rs-data-table-cell class="cell">花</rs-data-table-cell>
      <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
      <rs-data-table-cell class="cell">国</rs-data-table-cell>
    </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
      <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
      <rs-data-table-cell class="cell">野球</rs-data-table-cell>
      <rs-data-table-cell class="cell">日本</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
      <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
      <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
      <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
      <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
      <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
      <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
      <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
      <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
      <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-body>
</rs-data-table>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/data-table/rs-data-table.scss';

.data-table {
  &.-fill-beige{
    @include rs-data-table-fill-color(beige);
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

  .add('ヘッダーの背景色を変える', () => `
  <h4>ヘッダーの背景色を指定した色に変える。</h4>
  <rs-data-table class="data-table -header-fill-beige">
    <rs-data-table-header class="header">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
        <rs-data-table-cell class="cell">花</rs-data-table-cell>
        <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
        <rs-data-table-cell class="cell">国</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
        <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
        <rs-data-table-cell class="cell">野球</rs-data-table-cell>
        <rs-data-table-cell class="cell">日本</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
        <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
        <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
        <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
        <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
        <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
        <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
        <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
        <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
        <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-body>
  </rs-data-table> 
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-data-table-header-row-fill-color($color);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-data-table class="data-table -header-fill-beige">
  <rs-data-table-header class="header">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
      <rs-data-table-cell class="cell">花</rs-data-table-cell>
      <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
      <rs-data-table-cell class="cell">国</rs-data-table-cell>
    </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
      <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
      <rs-data-table-cell class="cell">野球</rs-data-table-cell>
      <rs-data-table-cell class="cell">日本</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
      <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
      <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
      <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
      <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
      <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
      <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
      <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
      <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
      <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-body>
</rs-data-table>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/data-table/rs-data-table.scss';

.data-table {
  &.-header-fill-beige {
    @include rs-data-table-header-row-fill-color(beige);
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

  .add('ボディーの背景色を変える', () => `
  <h4>ボディーの背景色を指定した色に変える。</h4>
  <rs-data-table class="data-table -body-fill-beige">
    <rs-data-table-header class="header">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
        <rs-data-table-cell class="cell">花</rs-data-table-cell>
        <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
        <rs-data-table-cell class="cell">国</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
        <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
        <rs-data-table-cell class="cell">野球</rs-data-table-cell>
        <rs-data-table-cell class="cell">日本</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
        <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
        <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
        <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
        <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
        <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
        <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
        <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
        <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
        <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-body>
  </rs-data-table> 
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-data-table-row-fill-color($color);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-data-table class="data-table -body-fill-beige">
  <rs-data-table-header class="header">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
      <rs-data-table-cell class="cell">花</rs-data-table-cell>
      <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
      <rs-data-table-cell class="cell">国</rs-data-table-cell>
    </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
      <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
      <rs-data-table-cell class="cell">野球</rs-data-table-cell>
      <rs-data-table-cell class="cell">日本</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
      <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
      <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
      <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
      <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
      <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
      <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
      <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
      <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
      <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-body>
</rs-data-table>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/data-table/rs-data-table.scss';

.data-table {
  &.-body-fill-beige {
    @include rs-data-table-row-fill-color(beige);
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

  .add('選択状態の背景色の色を変える', () => `
  <h4>選択状態の背景色の色を指定した色に変える。</h4>
  <rs-data-table class="data-table -select-fill-beige">
    <rs-data-table-header class="header">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
        <rs-data-table-cell class="cell">花</rs-data-table-cell>
        <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
        <rs-data-table-cell class="cell">国</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
        <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
        <rs-data-table-cell class="cell">野球</rs-data-table-cell>
        <rs-data-table-cell class="cell">日本</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
        <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
        <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
        <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
        <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
        <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
        <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
        <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
        <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
        <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-body>
  </rs-data-table> 
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-data-table-selected-row-fill-color($color);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-data-table class="data-table -select-fill-beige">
  <rs-data-table-header class="header">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
      <rs-data-table-cell class="cell">花</rs-data-table-cell>
      <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
      <rs-data-table-cell class="cell">国</rs-data-table-cell>
    </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
      <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
      <rs-data-table-cell class="cell">野球</rs-data-table-cell>
      <rs-data-table-cell class="cell">日本</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
      <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
      <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
      <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
      <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
      <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
      <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
      <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
      <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
      <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-body>
</rs-data-table>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/data-table/rs-data-table.scss';

.data-table {
  &.-select-fill-beige {
    @include rs-data-table-selected-row-fill-color(beige);
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

  .add('ホバー状態の行の背景色を変える', () => `
  <h4>ホバー状態の行の背景色を指定した色に変える。</h4>
  <rs-data-table class="data-table -hover-orange">
    <rs-data-table-header class="header">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
        <rs-data-table-cell class="cell">花</rs-data-table-cell>
        <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
        <rs-data-table-cell class="cell">国</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
        <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
        <rs-data-table-cell class="cell">野球</rs-data-table-cell>
        <rs-data-table-cell class="cell">日本</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
        <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
        <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
        <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
        <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
        <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
        <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
        <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
        <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
        <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-body>
  </rs-data-table> 
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-data-table-row-hover-fill-color($color);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-data-table class="data-table -hover-orange">
  <rs-data-table-header class="header">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
      <rs-data-table-cell class="cell">花</rs-data-table-cell>
      <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
      <rs-data-table-cell class="cell">国</rs-data-table-cell>
    </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
      <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
      <rs-data-table-cell class="cell">野球</rs-data-table-cell>
      <rs-data-table-cell class="cell">日本</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
      <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
      <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
      <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
      <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
      <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
      <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
      <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
      <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
      <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-body>
</rs-data-table>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/data-table/rs-data-table.scss';

.data-table {
  &.-hover-orange {
    @include rs-data-table-row-hover-fill-color(orange);
  }
}
`,
      { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>
      $color: 背景色を指定 <br> 例）#ee00ce
    </li>
  </ul>
  `)

  .add('線の色を変える', () => `
  <h4>テーブル全体の線の色を指定した色に変える。</h4>
  <rs-data-table class="data-table -stroke-orange">
    <rs-data-table-header class="header">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
        <rs-data-table-cell class="cell">花</rs-data-table-cell>
        <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
        <rs-data-table-cell class="cell">国</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
        <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
        <rs-data-table-cell class="cell">野球</rs-data-table-cell>
        <rs-data-table-cell class="cell">日本</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
        <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
        <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
        <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
        <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
        <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
        <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
        <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
        <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
        <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-body>
  </rs-data-table> 
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-data-table-stroke-color($color);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-data-table class="data-table -stroke-orange">
  <rs-data-table-header class="header">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
      <rs-data-table-cell class="cell">花</rs-data-table-cell>
      <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
      <rs-data-table-cell class="cell">国</rs-data-table-cell>
    </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
      <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
      <rs-data-table-cell class="cell">野球</rs-data-table-cell>
      <rs-data-table-cell class="cell">日本</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
      <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
      <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
      <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
      <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
      <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
      <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
      <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
      <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
      <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-body>
</rs-data-table>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/data-table/rs-data-table.scss';

.data-table {
  &.-stroke-orange {
    @include rs-data-table-stroke-color(orange);
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

  .add('線の太さを変える', () => `
  <h4>テーブル全体の線の太さを指定したサイズに変える。</h4>
  <rs-data-table class="data-table -stroke-width">
    <rs-data-table-header class="header">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
        <rs-data-table-cell class="cell">花</rs-data-table-cell>
        <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
        <rs-data-table-cell class="cell">国</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
        <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
        <rs-data-table-cell class="cell">野球</rs-data-table-cell>
        <rs-data-table-cell class="cell">日本</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
        <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
        <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
        <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
        <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
        <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
        <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
        <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
        <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
        <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-body>
  </rs-data-table> 
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-data-table-stroke-size($width);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-data-table class="data-table -stroke-width">
  <rs-data-table-header class="header">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
      <rs-data-table-cell class="cell">花</rs-data-table-cell>
      <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
      <rs-data-table-cell class="cell">国</rs-data-table-cell>
    </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
      <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
      <rs-data-table-cell class="cell">野球</rs-data-table-cell>
      <rs-data-table-cell class="cell">日本</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
      <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
      <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
      <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
      <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
      <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
      <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
      <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
      <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
      <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-body>
</rs-data-table>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/data-table/rs-data-table.scss';

.data-table {
  &.-stroke-width {
    @include rs-data-table-stroke-size(4px);
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
  </ul>
  `)

  .add('仕切りの線の色を変える', () => `
  <h4>仕切り線の色を指定した色に変える。</h4>
  <rs-data-table class="data-table -divider-orange">
    <rs-data-table-header class="header">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
        <rs-data-table-cell class="cell">花</rs-data-table-cell>
        <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
        <rs-data-table-cell class="cell">国</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
        <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
        <rs-data-table-cell class="cell">野球</rs-data-table-cell>
        <rs-data-table-cell class="cell">日本</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
        <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
        <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
        <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
        <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
        <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
        <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
        <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
        <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
        <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-body>
  </rs-data-table> 
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-data-table-divider-color($color);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-data-table class="data-table -divider-color">
  <rs-data-table-header class="header">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
      <rs-data-table-cell class="cell">花</rs-data-table-cell>
      <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
      <rs-data-table-cell class="cell">国</rs-data-table-cell>
    </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
      <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
      <rs-data-table-cell class="cell">野球</rs-data-table-cell>
      <rs-data-table-cell class="cell">日本</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
      <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
      <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
      <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
      <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
      <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
      <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
      <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
      <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
      <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-body>
</rs-data-table>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/data-table/rs-data-table.scss';

.data-table {
  &.-divider-width {
    @include rs-data-table-divider-color(orange);
  }
}
`,
      { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>
      $color: 線の色を指定 <br> 例）#ee00ce
    </li>
  </ul>
  `)

  .add('仕切り線の太さを変える', () => `
  <h4>仕切り線の太さを指定したサイズに変える。</h4>
  <rs-data-table class="data-table -divider-width">
    <rs-data-table-header class="header">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
        <rs-data-table-cell class="cell">花</rs-data-table-cell>
        <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
        <rs-data-table-cell class="cell">国</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
        <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
        <rs-data-table-cell class="cell">野球</rs-data-table-cell>
        <rs-data-table-cell class="cell">日本</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
        <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
        <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
        <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
        <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
        <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
        <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
        <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
        <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
        <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-body>
  </rs-data-table> 
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-data-table-divider-size($width);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-data-table class="data-table -divider-width">
  <rs-data-table-header class="header">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
      <rs-data-table-cell class="cell">花</rs-data-table-cell>
      <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
      <rs-data-table-cell class="cell">国</rs-data-table-cell>
    </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
      <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
      <rs-data-table-cell class="cell">野球</rs-data-table-cell>
      <rs-data-table-cell class="cell">日本</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
      <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
      <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
      <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
      <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
      <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
      <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
      <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
      <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
      <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-body>
</rs-data-table>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/data-table/rs-data-table.scss';

.data-table {
  &.-divider-width {
    @include rs-data-table-divider-size(2px);
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
  </ul>
  `)

  .add('テーブルの角の丸みを変える', () => `
  <h4>テーブルの角の丸みを指定したサイズに変える。</h4>
  <rs-data-table class="data-table -radius">
    <rs-data-table-header class="header">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
        <rs-data-table-cell class="cell">花</rs-data-table-cell>
        <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
        <rs-data-table-cell class="cell">国</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
        <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
        <rs-data-table-cell class="cell">野球</rs-data-table-cell>
        <rs-data-table-cell class="cell">日本</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
        <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
        <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
        <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
        <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
        <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
        <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
        <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
        <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
        <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-body>
  </rs-data-table> 
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-data-table-shape-radius($radius);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-data-table class="data-table -radius">
  <rs-data-table-header class="header">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
      <rs-data-table-cell class="cell">花</rs-data-table-cell>
      <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
      <rs-data-table-cell class="cell">国</rs-data-table-cell>
    </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
      <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
      <rs-data-table-cell class="cell">野球</rs-data-table-cell>
      <rs-data-table-cell class="cell">日本</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
      <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
      <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
      <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
      <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
      <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
      <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
      <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
      <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
      <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-body>
</rs-data-table>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/data-table/rs-data-table.scss';

.data-table {
  &.-radius {
    @include rs-data-table-shape-radius(20px);
  }
}
`,
      { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>
      $radius: 角の丸みを指定 <br> 例）20px
    </li>
  </ul>
  `)

  .add('ボディーの高さを変える', () => `
  <h4>ボディー全体の高さを指定したサイズに変える。</h4>
  <p>fixed属性を付けることで、ボディー内をスクロールできる。</p>
  <rs-data-table class="data-table -body-height" fixed>
    <rs-data-table-header class="header">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
        <rs-data-table-cell class="cell">花</rs-data-table-cell>
        <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
        <rs-data-table-cell class="cell">国</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
        <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
        <rs-data-table-cell class="cell">野球</rs-data-table-cell>
        <rs-data-table-cell class="cell">日本</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
        <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
        <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
        <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
        <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
        <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
        <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
        <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
        <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
        <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-body>
  </rs-data-table> 
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-data-table-height($height);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-data-table class="data-table -body-height" fixed>
  <rs-data-table-header class="header">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
      <rs-data-table-cell class="cell">花</rs-data-table-cell>
      <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
      <rs-data-table-cell class="cell">国</rs-data-table-cell>
    </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
      <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
      <rs-data-table-cell class="cell">野球</rs-data-table-cell>
      <rs-data-table-cell class="cell">日本</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
      <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
      <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
      <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
      <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
      <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
      <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
      <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
      <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
      <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-body>
</rs-data-table>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/data-table/rs-data-table.scss';

.data-table {
  &.-body-height {
    @include rs-data-table-height(160px);
  }
}
`,
      { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>
      $height: 高さを指定 <br> 例）200px
    </li>
  </ul>
  `)

  .add('ヘッダーの行の高さを変える', () => `
  <h4>ヘッダーの行の高さを指定したサイズに変える。</h4>
  <rs-data-table class="data-table -header-row-height">
    <rs-data-table-header class="header">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
        <rs-data-table-cell class="cell">花</rs-data-table-cell>
        <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
        <rs-data-table-cell class="cell">国</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
        <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
        <rs-data-table-cell class="cell">野球</rs-data-table-cell>
        <rs-data-table-cell class="cell">日本</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
        <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
        <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
        <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
        <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
        <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
        <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
        <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
        <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
        <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-body>
  </rs-data-table> 
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-data-table-header-row-height($height);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-data-table class="data-table -header-row-height">
  <rs-data-table-header class="header">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
      <rs-data-table-cell class="cell">花</rs-data-table-cell>
      <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
      <rs-data-table-cell class="cell">国</rs-data-table-cell>
    </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
      <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
      <rs-data-table-cell class="cell">野球</rs-data-table-cell>
      <rs-data-table-cell class="cell">日本</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
      <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
      <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
      <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
      <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
      <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
      <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
      <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
      <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
      <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-body>
</rs-data-table>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/data-table/rs-data-table.scss';

.data-table {
  &.-header-row-height {
    @include rs-data-table-header-row-height(68px);
  }
}
`,
      { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>
      $height: 高さを指定 <br> 例）60px
    </li>
  </ul>
  `)

  .add('ボディーの行の高さを変える', () => `
  <h4>ボディーの行の高さを指定したサイズに変える。</h4>
  <rs-data-table class="data-table -row-height">
    <rs-data-table-header class="header">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
        <rs-data-table-cell class="cell">花</rs-data-table-cell>
        <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
        <rs-data-table-cell class="cell">国</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
        <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
        <rs-data-table-cell class="cell">野球</rs-data-table-cell>
        <rs-data-table-cell class="cell">日本</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
        <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
        <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
        <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
        <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
        <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
        <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
        <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
        <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
        <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-body>
  </rs-data-table> 
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-data-table-row-height($height);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-data-table class="data-table -row-height">
  <rs-data-table-header class="header">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
      <rs-data-table-cell class="cell">花</rs-data-table-cell>
      <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
      <rs-data-table-cell class="cell">国</rs-data-table-cell>
    </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
      <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
      <rs-data-table-cell class="cell">野球</rs-data-table-cell>
      <rs-data-table-cell class="cell">日本</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
      <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
      <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
      <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
      <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
      <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
      <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
      <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
      <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
      <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-body>
</rs-data-table>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/data-table/rs-data-table.scss';

.data-table {
  &.-row-height {
    @include rs-data-table-row-height(58px);
  }
}
`,
      { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>
      $height: 高さを指定 <br> 例）60px
    </li>
  </ul>
  `)

  .add('セルの横幅の余白を変える', () => `
  <h4>セルの横幅の余白を指定したサイズに変える</h4>
  <rs-data-table class="data-table -cell-padding">
    <rs-data-table-header class="header">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
        <rs-data-table-cell class="cell">花</rs-data-table-cell>
        <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
        <rs-data-table-cell class="cell">国</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
        <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
        <rs-data-table-cell class="cell">野球</rs-data-table-cell>
        <rs-data-table-cell class="cell">日本</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
        <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
        <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
        <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
        <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
        <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
        <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
        <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
        <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
        <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-body>
  </rs-data-table> 
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-data-table-cell-padding($padding);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-data-table class="data-table -cell-padding">
  <rs-data-table-header class="header">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
      <rs-data-table-cell class="cell">花</rs-data-table-cell>
      <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
      <rs-data-table-cell class="cell">国</rs-data-table-cell>
    </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
      <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
      <rs-data-table-cell class="cell">野球</rs-data-table-cell>
      <rs-data-table-cell class="cell">日本</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
      <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
      <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
      <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
      <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
      <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
      <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
      <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
      <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
      <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-body>
</rs-data-table>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/data-table/rs-data-table.scss';

.data-table {
  &.-cell-padding {
    @include rs-data-table-cell-padding(40px);
  }
}
`,
      { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>
      $padding: 横幅の余白を指定 <br> 例）40px
    </li>
  </ul>
  `)

  .add('ヘッダーのテキストの位置を変える', () => `
  <h4>ヘッダーのテキストの位置を指定した位置に変える。</h4>
  <rs-data-table class="data-table -header-text-center" fixed>
    <rs-data-table-header class="header">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
        <rs-data-table-cell class="cell">花</rs-data-table-cell>
        <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
        <rs-data-table-cell class="cell">国</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
        <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
        <rs-data-table-cell class="cell">野球</rs-data-table-cell>
        <rs-data-table-cell class="cell">日本</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
        <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
        <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
        <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
        <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
        <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
        <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
        <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
        <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
        <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-body>
  </rs-data-table> 
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-data-table-header-text-align($text-align);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-data-table class="data-table -header-text-center" fixed>
  <rs-data-table-header class="header">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
      <rs-data-table-cell class="cell">花</rs-data-table-cell>
      <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
      <rs-data-table-cell class="cell">国</rs-data-table-cell>
    </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
      <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
      <rs-data-table-cell class="cell">野球</rs-data-table-cell>
      <rs-data-table-cell class="cell">日本</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
      <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
      <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
      <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
      <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
      <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
      <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
      <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
      <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
      <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-body>
</rs-data-table>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/data-table/rs-data-table.scss';

.data-table {
  &.-header-text-center {
    @include rs-data-table-header-text-align(center);
  }
}
`,
      { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>
      $text-align: テキストの位置を指定 <br>
      <ul>
        <li>left：左揃え（デフォルト）</li>
        <li>center：中央揃え</li>
        <li>right：右揃え</li>
      </ul>
    </li>
  </ul>
  `)

  .add('ボディーのテキストの位置を変える', () => `
  <h4>ボディーのテキストの位置を指定した位置に変える。</h4>
  <rs-data-table class="data-table -text-center" fixed>
    <rs-data-table-header class="header">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
        <rs-data-table-cell class="cell">花</rs-data-table-cell>
        <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
        <rs-data-table-cell class="cell">国</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
        <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
        <rs-data-table-cell class="cell">野球</rs-data-table-cell>
        <rs-data-table-cell class="cell">日本</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
        <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
        <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
        <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
        <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
        <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
        <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
      </rs-data-table-row>
      <rs-data-table-row class="row">
        <rs-data-table-cell class="cell">
          <rs-checkbox></rs-checkbox>
        </rs-data-table-cell>
        <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
        <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
        <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
        <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
      </rs-data-table-row>
    </rs-data-table-body>
  </rs-data-table> 
  <h4>使用するmixin</h4>
  ${copyCodeBlock(
    `@include rs-data-table-text-align($text-align);`,
    { lang: 'scss' }
  )}
  <h4>使用方法</h4>
  ${copyCodeBlock(
`<rs-data-table class="data-table -text-center" fixed>
  <rs-data-table-header class="header">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">食べ物</rs-data-table-cell>
      <rs-data-table-cell class="cell">花</rs-data-table-cell>
      <rs-data-table-cell class="cell">スポーツ</rs-data-table-cell>
      <rs-data-table-cell class="cell">国</rs-data-table-cell>
    </rs-data-table-row>
    </rs-data-table-header>
    <rs-data-table-body class="body">
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ラーメン</rs-data-table-cell>
      <rs-data-table-cell class="cell">ひまわり</rs-data-table-cell>
      <rs-data-table-cell class="cell">野球</rs-data-table-cell>
      <rs-data-table-cell class="cell">日本</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">寿司</rs-data-table-cell>
      <rs-data-table-cell class="cell">コスモス</rs-data-table-cell>
      <rs-data-table-cell class="cell">バスケットボール</rs-data-table-cell>
      <rs-data-table-cell class="cell">韓国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">ハンバーグ</rs-data-table-cell>
      <rs-data-table-cell class="cell">紫陽花</rs-data-table-cell>
      <rs-data-table-cell class="cell">バドミントン</rs-data-table-cell>
      <rs-data-table-cell class="cell">アメリカ合衆国</rs-data-table-cell>
    </rs-data-table-row>
    <rs-data-table-row class="row">
      <rs-data-table-cell class="cell">
        <rs-checkbox></rs-checkbox>
      </rs-data-table-cell>
      <rs-data-table-cell class="cell">オムライス</rs-data-table-cell>
      <rs-data-table-cell class="cell">チューリップ</rs-data-table-cell>
      <rs-data-table-cell class="cell">サッカー</rs-data-table-cell>
      <rs-data-table-cell class="cell">フランス</rs-data-table-cell>
    </rs-data-table-row>
  </rs-data-table-body>
</rs-data-table>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/data-table/rs-data-table.scss';

.data-table {
  &.-text-center {
    @include rs-data-table-text-align(center);
  }
}
`,
      { lang: 'scss' }
  )}
  <p>オプション</p>
  <ul>
    <li>
      $text-align: テキストの位置を指定 <br>
      <ul>
        <li>left：左揃え（デフォルト）</li>
        <li>center：中央揃え</li>
        <li>right：右揃え</li>
      </ul>
    </li>
  </ul>
  `)

  