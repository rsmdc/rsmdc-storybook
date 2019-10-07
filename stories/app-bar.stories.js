import { storiesOf } from '@storybook/html'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'
const appbar = require('@rsmdc/appbar/loader')

import './css/style.scss'
import './css/app-bar.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

appbar.defineCustomElements(window)

storiesOf('Components|App bar', module)
  .addDecorator(withLinks)
  .add('概要', () => `
    <h4>App bar</h4>
    <p>現在の画面に関連するコンテンツとアクションが表示される。</p>
    <p>
      参照:
      <a href="https://material.io/design/components/app-bars-top.html">
        https://material.io/design/components/app-bars-top.html
      </a>
    </p>
    <p>タイプ</p>
    <ul>
      <li>normal(default) <br> 
        <a class="link" href="#" data-sb-kind="Components|app-bar/スタイルのカスタマイズ/アップバーのタイプを変える" data-sb-story="fixed">参照はこちら</a>
      </li>
      <li>
        short <br>
        スクロールするとApp barの幅が短くなり、アイコンのみの表示になる<br>
        <a class="link" href="#" data-sb-kind="Components|app-bar/スタイルのカスタマイズ/アップバーのタイプを変える" data-sb-story="short">参照はこちら</a>
      </li>
      <li>prominent <br>
        幅が広いタイプ <br>
        <a class="link" href="#" data-sb-kind="Components|app-bar/スタイルのカスタマイズ/アップバーのタイプを変える" data-sb-story="prominent">参照はこちら</a>
      </li>
      <li>
        fixed <br>
        App barが固定される <br>
        <a class="link" href="#" data-sb-kind="Components|app-bar/スタイルのカスタマイズ/アップバーのタイプを変える" data-sb-story="fixed">参照はこちら</a>
      </li>
    </ul>
  `)
  .add('使用方法', () => `
    <rs-app-bar class="app-bar">
      <rs-app-bar-nav class="nav"></rs-app-bar-nav>
      <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
      <rs-app-bar-tool class="tool">
        <rs-app-bar-item class="item -search"></rs-app-bar-item>
      </rs-app-bar-tool>
    </rs-app-bar>
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-app-bar class="app-bar">
  <rs-app-bar-nav class="nav" />
  <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
  <rs-app-bar-tool class="tool">
    <rs-app-bar-item class="item -search" />
  </rs-app-bar-tool>
</rs-app-bar>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/appbar/rs-app-bar.scss';

.app-bar {
  > .nav {
    @include rs-app-bar-nav-icon-image(
      Material Icons,
      map-get($material-icons-codepoints, menu)
    );
  }
  > .tool > .item.-search {
    @include rs-app-bar-tool-icon-image(
       Material Icons,
       map-get($material-icons-codepoints, search)
    );
  }
}`,
      { lang: 'scss' }
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
        <td>rs-app-bar</td>
        <td>アップバー本体を表示します</td>
        <td>
          <ul>
            <li><code>rs-app-bar-nav</code></li>
            <li><code>rs-app-bar-title</code></li>
            <li><code>rs-app-bar-tool</code></li>
          </ul>
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-app-bar-nav</td>
        <td>ナビゲーションを表示します</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-app-bar-title</td>
        <td>タイトルを表示します</td>
        <td>テキスト</td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-app-bar-tool</td>
        <td>アクションエリアを表示します</td>
        <td><code>rs-app-bar-item</code></td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-app-bar-item</td>
        <td>アクションボタンを表示します</td>
        <td>-</td>
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
        <td>app-barを上部に固定します</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
      <tr>
        <td>compactable</td>
        <td>スクロール時のapp-barの長さを短くし、上部に固定します</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
    </table>

    <h4>テーマ変数</h4>
    <p>
    　rs-app-barで使われるテーマ変数です。 <br>
    　下記変数に新しく色を指定することで、テーマカラーが上書きされます。
    </p>
    <table>
      <tr>
        <th>変数名</th>
        <th>説明</th>
      </tr>
      <tr>
        <td>$rs-theme-primary</td>
        <td>背景色に関わります。</td>
      </tr>
      <tr>
        <td>$rs-theme-on-primary</td>
        <td>
          テキスト、アイコン、リップルの色に関わります。
        </td>
      </tr>
    </table>
  `)

storiesOf('Components|App bar/スタイルのカスタマイズ/アップバーのタイプを変える', module)
  .add('normal (default)', () => `
    <rs-app-bar class="app-bar -dense">
      <rs-app-bar-nav class="nav"></rs-app-bar-nav>
      <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
      <rs-app-bar-tool class="tool">
        <rs-app-bar-item class="item -search"></rs-app-bar-item>
      </rs-app-bar-tool>
    </rs-app-bar>
    <h4>normal（デフォルト）</h4>
    <p>
      normalを使用する場合mixinは不要。<br>
      denseを使用する場合はmixinが必要（後述）。<br>
      （ 表示されているのはdense ）
    </p>
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-app-bar class="app-bar">
  <rs-app-bar-nav class="nav" />
  <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
  <rs-app-bar-tool class="tool">
    <rs-app-bar-item class="item -search" />
  </rs-app-bar-tool>
</rs-app-bar>`,
      { lang: 'html' }
    )}
    <p>denseを使用する場合</p>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      '@include rs-app-bar-type($type);',
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-app-bar class="app-bar -dense">
  <rs-app-bar-nav class="nav" />
  <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
  <rs-app-bar-tool class="tool">
    <rs-app-bar-item class="item -search" />
  </rs-app-bar-tool>
</rs-app-bar>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/appbar/rs-app-bar.scss';

.app-bar {
  &.-dense {
    @include rs-app-bar-type(dense);
  }
  > .nav {
    @include rs-app-bar-nav-icon-image(
      Material Icons,
      map-get($material-icons-codepoints, menu)
    );
  }
  > .tool > .item.-search {
    @include rs-app-bar-action-icon-image(
      Material Icons,
      map-get($material-icons-codepoints, search)
    );
  }
}`,
      { lang: 'scss' }
    )}
  `)
  .add('short', () => `
    <rs-app-bar class="app-bar -short" compactable>
      <rs-app-bar-nav class="nav"></rs-app-bar-nav>
      <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
      <rs-app-bar-tool class="tool">
        <rs-app-bar-item class="item -search"></rs-app-bar-item>
      </rs-app-bar-tool>
    </rs-app-bar>
    <h4>short</h4>
    <p>app barの横幅を短くする。</p>
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-app-bar class="app-bar -short" compactable>
  <rs-app-bar-nav class="nav" />
  <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
  <rs-app-bar-tool class="tool">
    <rs-app-bar-item class="item -search" />
  </rs-app-bar-tool>
</rs-app-bar>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/appbar/rs-app-bar.scss';

.app-bar {
  > .nav {
    @include rs-app-bar-nav-icon-image(
      Material Icons,
      map-get($material-icons-codepoints, menu)
    );
  }
  > .tool > .item.-search {
    @include rs-app-bar-action-icon-image(
      Material Icons,
      map-get($material-icons-codepoints, search)
    );
  }
}`,
      { lang: 'scss' }
    )}
  `)
  .add('prominent', () => `
    <rs-app-bar class="app-bar -prominent">
      <rs-app-bar-nav class="nav"></rs-app-bar-nav>
      <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
      <rs-app-bar-tool class="tool">
        <rs-app-bar-item class="item -search"></rs-app-bar-item>
      </rs-app-bar-tool>
    </rs-app-bar>
    <h4>prominent</h4>
    <p>denseも同時に指定できる</p>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      '@include rs-app-bar-type($type);',
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-app-bar class="app-bar -prominent">
  <rs-app-bar-nav class="nav"></rs-app-bar-nav>
  <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
  <rs-app-bar-tool class="tool">
    <rs-app-bar-item class="item -search"></rs-app-bar-item>
  </rs-app-bar-tool>
</rs-app-bar>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/appbar/rs-app-bar.scss';

.app-bar {
  &.-prominent {
    @include rs-app-bar-type(prominent);
  }
  > .nav {
    @include rs-app-bar-nav-icon-image(
      Material Icons,
      map-get($material-icons-codepoints, menu)
    );
  }
  > .tool > .item.-search {
    @include rs-app-bar-action-icon-image(
      Material Icons,
      map-get($material-icons-codepoints, search)
    );
  }
}`,
      { lang: 'scss' }
    )}
  `)
  .add('fixed', () => `
    <rs-app-bar class="app-bar -fixed" fixed>
      <rs-app-bar-nav class="nav"></rs-app-bar-nav>
      <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
      <rs-app-bar-tool class="tool">
        <rs-app-bar-item class="item -search"></rs-app-bar-item>
      </rs-app-bar-tool>
    </rs-app-bar>
    <h4>fixed</h4>
    App barを固定する。
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-app-bar class="app-bar -fixed" fixed>
  <rs-app-bar-nav class="nav" />
  <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
  <rs-app-bar-tool class="tool">
    <rs-app-bar-item class="item -search" />
  </rs-app-bar-tool>
</rs-app-bar>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/appbar/rs-app-bar.scss';

.app-bar {
  > .nav {
    @include rs-app-bar-nav-icon-image(
      Material Icons,
      map-get($material-icons-codepoints, menu)
    );
  }
  > .tool > .item.-search {
    @include rs-app-bar-action-icon-image(
      Material Icons,
      map-get($material-icons-codepoints, search)
    );
  }
}`,
      { lang: 'scss' }
    )}
  `)

storiesOf('Components|App bar/スタイルのカスタマイズ', module)
//   .add('タイトルの色を変える', () => `
//     <rs-app-bar class="app-bar">
//       <rs-app-bar-nav class="nav"></rs-app-bar-nav>
//       <rs-app-bar-title class="title -ink-dark">タイトル</rs-app-bar-title>
//     </rs-app-bar>
//     <h4>タイトルの色を指定した色に変える。</h4>
//     <h4>使用するmixin</h4>
//     ${copyCodeBlock(
//       '@include rs-rs-app-bar-title-ink-color($color);',
//       { lang: 'scss' }
//     )}
//     <h4>使用方法</h4>
//     ${copyCodeBlock(
// `<rs-app-bar class="app-bar">
//   <rs-app-bar-nav class="nav" />
//   <rs-app-bar-title class="title -ink-dark">タイトル</rs-app-bar-title>
// </rs-app-bar>`,
//       { lang: 'html' }
//     )}
//     ${copyCodeBlock(
// `@import '@rsmdc/appbar/rs-app-bar.scss';

// .app-bar {
//     > .nav {
//       @include rs-app-bar-nav-icon-image(
//         Material Icons,
//         map-get($material-icons-codepoints, menu)
//       );
//     }
//     > .title.-ink-dark {
//       @include rs-app-bar-title-ink-color(#000);
//     }
// }`,
//       { lang: 'scss' }
//     )}
//   <p>オプション</p>
//   <ul>
//     <li>$color: インクの色コード <br> 例）#ee00ce</li>
//   </ul>
//   `)
//   .add('アイコンの色を変える', () => `
//     <rs-app-bar class="app-bar">
//       <rs-app-bar-nav class="nav -icon-orange"></rs-app-bar-nav>
//       <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
//     </rs-app-bar>
//     <h4>アイコンの色を指定した色に変える。</h4>
//     <h4>使用するmixin</h4>
//     ${copyCodeBlock(
//       '@include rs-app-bar-icon-ink-color($containerColor);',
//       { lang: 'scss' }
//     )}
//     <h4>使用方法</h4>
//     ${copyCodeBlock(
// `<rs-app-bar class="app-bar">
//   <rs-app-bar-nav class="nav -icon-orange" />
//   <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
// </rs-app-bar>`,
//       { lang: 'html' }
//     )}
//     ${copyCodeBlock(
// `@import '@rsmdc/appbar/rs-app-bar.scss';

// .app-bar {
//   > .nav {
//     @include rs-app-bar-nav-icon-image(
//       Material Icons,
//       map-get($material-icons-codepoints, menu)
//     );
//   }
//   > .nav.-icon-orange {
//     @include rs-app-bar-icon-ink-color(orange);
//   }
// }`,
//       { lang: 'scss' }
//     )}
//     <p>オプション</p>
//     <ul>
//       <li>$color: アイコンの色を指定 <br>　例）#ee00ce</li>
//     </ul>
//   `)
//   .add('背景色を変える', () => `
//     <rs-app-bar class="app-bar -bar-orange">
//       <rs-app-bar-nav class="nav"></rs-app-bar-nav>
//       <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
//     </rs-app-bar>
//     <h4>背景色を指定した色に変える。</h4>
//     <h4>使用するmixin</h4>
//     ${copyCodeBlock(
//       '@include rs-app-bar-fill-color($color);',
//       { lang: 'scss' }
//     )}
//     ${copyCodeBlock(
// `<rs-app-bar class="app-bar -bar-orange">
//     <rs-app-bar-nav class="nav" />
//     <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
// </rs-app-bar>`,
//       { lang: 'html' }
//     )}
//     ${copyCodeBlock(
// `@import '@rsmdc/appbar/rs-app-bar.scss';

// .app-bar {
//   &.-bar-orange {
//     @include rs-app-bar-fill-color(orange);
//   }
//   > .nav {
//     @include rs-app-bar-nav-icon-image(
//       Material Icons,
//       map-get($material-icons-codepoints, menu)
//     );
//   }
// }`,
//       { lang: 'scss' }
//     )}
//     <p>オプション</p>
//     <ul>
//       <li>$color: コンテナの色の塗りコード <br> 例）#ee00ce</li>
//     </ul>
//   `)
//   .add('リップルの色を変える', () => `
//     <rs-app-bar class="app-bar">
//       <rs-app-bar-nav class="nav -ripple-dark"></rs-app-bar-nav>
//       <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
//     </rs-app-bar>
//     <h4>リップルの色を指定した色に変える。</h4>
//     <h4>使用するmixin</h4>
//     ${copyCodeBlock(
//       '@include rs-app-bar-icon-states-color($containerColor);',
//       { lang: 'scss' }
//     )}
//       <h4>使用方法</h4>
//     ${copyCodeBlock(
// `<rs-app-bar class="app-bar">
//   <rs-app-bar-nav class="nav -ripple-dark" />
//   <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
// </rs-app-bar>`,
//       { lang: 'html' }
//     )}
//     ${copyCodeBlock(
// `@import '@rsmdc/appbar/rs-app-bar.scss';

// .app-bar {
//   > .nav {
//     @include rs-app-bar-nav-icon-image(
//       Material Icons,
//       map-get($material-icons-codepoints, menu)
//     );
//   }
//   > .nav.-ripple-dark {
//     @include rs-app-bar-icon-states-color(#000);
//   }
// }`,
//       { lang: 'scss' }
//     )}
//     <p>オプション</p>
//     <ul>
//       <li>$color: リップルの色を指定 <br>　例）#ee00ce</li>
//     </ul>
//   `)
//   .add('背景色とタイトルの色を変える', () => `
//     <rs-app-bar class="app-bar -bar-pink">
//       <rs-app-bar-nav class="nav"></rs-app-bar-nav>
//       <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
//     </rs-app-bar>
//     <h4>背景色とタイトルの色を変える。</h4>
//     <p>指定した背景色の色を元に、タイトルの色は自動調整される。</p>
//     <h4>使用するmixin</h4>
//     ${copyCodeBlock(
//       '@include rs-app-bar-fill-color-accessible($containerColor);',
//       { lang: 'scss' }
//     )}
//       <h4>使用方法</h4>
//     ${copyCodeBlock(
// `<rs-app-bar class="app-bar -bar-pink">
//   <rs-app-bar-nav class="nav" />
//   <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
// </rs-app-bar>`,
//       { lang: 'html' }
//     )}
//     ${copyCodeBlock(
// `@import '@rsmdc/appbar/rs-app-bar.scss';

// .app-bar {
//   &.-bar-pink {
//     @include rs-app-bar-fill-color-accessible(pink);
//   }
//   > .nav {
//     @include rs-app-bar-nav-icon-image(
//       Material Icons,
//       map-get($material-icons-codepoints, menu)
//     );
//   }
// }`,
//       { lang: 'scss' }
//     )}
//     <p>オプション</p>
//     <ul>
//       <li>$color: コンテナの色の塗りコード <br> 例）#ee00ce</li>
//     </ul>
//   `)
//   .add('アップバーの角の丸みを変える', () => `
//     <rs-app-bar class="app-bar -short -roundness">
//       <rs-app-bar-nav class="nav"></rs-app-bar-nav>
//       <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
//       <rs-app-bar-tool class="tool">
//         <rs-app-bar-item class="item -search"></rs-app-bar-item>
//       </rs-app-bar-tool>
//     </rs-app-bar>
//     <h4>アップバーの角の丸みを指定したサイズに変える。</h4>
//     <p>タイプがshortの時のみ。</p>
//     <h4>使用するmixin</h4>
//     ${copyCodeBlock(
//       '@include rs-app-bar-short-shape-radius($radius);',
//       { lang: 'scss' }
//     )}
//     <h4>使用方法</h4>
//     ${copyCodeBlock(
// `<rs-app-bar class="app-bar -short -roundness">
//   <rs-app-bar-nav class="nav" />
//   <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
//   <rs-app-bar-tool class="tool">
//     <rs-app-bar-item class="item -search" />
//   </rs-app-bar-tool>
// </rs-app-bar>`,
//       { lang: 'html' }
//     )}
//     ${copyCodeBlock(
// `@import '@rsmdc/appbar/rs-app-bar.scss';

// .app-bar {
//   &.-short {
//     @include rs-app-bar-type(short);
//   }
//   &.-short.-roundness {
//     @include rs-app-bar-short-shape-radius(20px);
//   }
//   > .nav {
//     @include rs-app-bar-nav-icon-image(
//       Material Icons,
//       map-get($material-icons-codepoints, menu)
//     );
//   }
//   > .tool > .item.-search {
//     @include rs-app-bar-action-icon-image(
//       Material Icons,
//       map-get($material-icons-codepoints, search)
//     );
//   }
// }`,
//       { lang: 'scss' }
//     )}
//     <p>オプション</p>
//     <ul>
//       <li>$radius: 角の丸みのサイズを指定</li>
//     </ul>
//   `)
  .add('ナビゲーションのアイコンを設定する', () => `
    <rs-app-bar class="app-bar">
      <rs-app-bar-nav class="nav"></rs-app-bar-nav>
      <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
    </rs-app-bar>
    <h4>ナビゲーションにアイコンを設定する</h4>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      '@include rs-app-bar-nav-icon-image($icon, $codepoint: \'\');',
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-app-bar class="app-bar">
  <rs-app-bar-nav class="nav" />
  <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
</rs-app-bar>`,
      { lang: 'html' }
    )}
      ${copyCodeBlock(
`@import '@rsmdc/appbar/rs-app-bar.scss';

.app-bar {
  > .nav {
    @include rs-app-bar-nav-icon-image(
      Material Icons,
      map-get($material-icons-codepoints, menu)
    );
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$icon: <br>
        ・icon-font: font-family<br>
          (例)  Material Icons<br>
        ・image    : 画像パス<br>
          (例)  url('example.png')
      </li>
      <li>$codepoint: コードポイント　(icon-fontの時のみ)<br>
          (例)  e063
      </li>
    </ul>
  `)
  .add('アクションのアイコンを設定する', () => `
    <rs-app-bar class="app-bar">
      <rs-app-bar-nav class="nav"></rs-app-bar-nav>
      <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
      <rs-app-bar-tool class="tool">
        <rs-app-bar-item class="item -search"></rs-app-bar-item>
      </rs-app-bar-tool>
    </rs-app-bar>
    <h4>アクションにアイコンを設定する</h4>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      '@include rs-app-bar-action-icon-image($icon, $codepoint: \'\');',
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-app-bar class="app-bar">
  <rs-app-bar-nav class="nav" />
  <rs-app-bar-title class="title">タイトル</rs-app-bar-title>
  <rs-app-bar-tool class="tool">
    <rs-app-bar-item class="item -search" />
  </rs-app-bar-tool>
</rs-app-bar>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
`@import '@rsmdc/appbar/rs-app-bar.scss';

.app-bar {
  > .tool > .item.-search {
    @include rs-app-bar-action-icon-image(
      Material Icons,
      map-get($material-icons-codepoints, menu)
    );
  }
}`,
        { lang: 'scss' }
      )}
    <p>オプション</p>
    <ul>
      <li>$icon: <br>
        ・icon-font: font-family<br>
          (例)  Material Icons<br>
        ・image    : 画像パス<br>
          (例)  url('example.png')
      </li>
      <li>$codepoint: コードポイント　(icon-fontの時のみ)<br>
          (例)  e063
      </li>
    </ul>
  `)






