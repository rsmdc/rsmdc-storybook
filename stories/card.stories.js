import { storiesOf } from '@storybook/html'
import { CardActions, CardMedia, CardDescription, CardSubtitle, CardTitle, CardHeader, CardContents, Card } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'
import './css/card.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

window.customElements.define('card-actions', CardActions)
window.customElements.define('card-media', CardMedia)
window.customElements.define('card-description', CardDescription)
window.customElements.define('card-subtitle', CardSubtitle)
window.customElements.define('card-title', CardTitle)
window.customElements.define('card-header', CardHeader)
window.customElements.define('card-contents', CardContents)
window.customElements.define('rs-card', Card)

storiesOf('Components|Card', module)
  .addDecorator(withLinks)
  .add('概要', () => {
    return `
      <h4>Card</h4>
      <p>
        関連性のある情報を1つのカードにまとめる = 1カード1テーマ<br>
        情報を詰め込まず、重要度の高い事柄に絞って載せる。
      </p>
      <p>
        参考:
        <a href="https://material.io/design/components/cards.html#">
          https://material.io/design/components/cards.html#
        </a>
      </p>

      <p>タイプ</p>
      <h5>card</h5>
      <ul>
        <li>outlined: 枠線をつける</li>
      </ul>
      <h5>media</h5>
      <ul>
        <li>16-9: 16:9のサイズで表示</li>
        <li>square: 正方形に表示</li>
      </ul>
      <h5>actions</h5>
      <ul>
        <li>full-bleed: アクションエリアに合わせる</li>
      </ul>
    `
  })
  .add('使用方法', () => {
    return `
      <h4>使用方法</h4>
      <div class="result">
        <rs-card class="my-card">
          <card-contents class="contents">
            <card-media class="media"></card-media>
            <card-header class="header">
              <card-title>タイトル</card-title>
              <card-subtitle>サブタイトル</card-subtitle>
            </card-header>
            <card-description class="description">説明</card-description>
          </card-contents>
          <card-actions class="actions">
            <rs-button>ボタン</rs-button>
            <rs-button class="icon"></rs-button>
          </card-actions>
        </rs-card>
      </div>
      ${copyCodeBlock(
`<rs-card class="my-card">
    <card-contents class="contents">
    <card-media class="media"></card-media>
    <card-header class="header">
        <card-title>タイトル</card-title>
        <card-subtitle>サブタイトル</card-subtitle>
    </card-header>
        <card-description class="description">説明</card-description>
    </card-contents>
    <card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
    </card-actions>
</rs-card>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '.my-card {\n' +
        '   @include rs-card-size(350px);\n' +
        '   > .contents > .media {\n' +
        '      @include rs-card-media-type(16-9);\n' +
        '      @include rs-card-media-image(url(\'example.png\'));\n' +
        '   }\n' +
        '   > .actions > .icon {\n' +
        '      @include rs-button-icon-image(url(\'icon.png\'));\n' +
        '   }\n' +
        '}',
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
        <th>許可されている子要素です</th>
        <th>備考</th>
      </tr>
      <tr>
        <td>rs-card</td>
        <td>カード本体を表示します</td>
        <td>
          <ul>
            <li><code>card-contents</code></li>
            <li><code>card-media</code></li>
            <li><code>card-header</code></li>
            <li><code>card-description</code></li>
            <li><code>card-actions</code></li>
          </ul>
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>card-contens</td>
        <td>カードの主要エリアを示します</td>
        <td>
          <ul>
            <li><code>card-media</code></li>
            <li><code>card-header</code></li>
            <li><code>card-description</code></li>
          </ul>
        </td>
        <td>主要エリアにはリップルがつく<br>※主要エリアは必須ではない</td>
      </tr>
      <tr>
        <td>card-media</td>
        <td>カードの画像を表示します</td>
        <td>テキスト</td>
        <td>テキストは画像のタイトルを示す</td>
      </tr>
      <tr>
        <td>card-header</td>
        <td>カードのヘッダーを表示します</td>
        <td>
          <ul>
            <li><code>card-title</code></li>
            <li><code>card-subtitle</code></li>
          </ul>
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>card-title</td>
        <td>カードのタイトルを表示します</td>
        <td>テキスト</td>
        <td>-</td>
      </tr>
      <tr>
        <td>card-subtitle</td>
        <td>カードのサブタイトルを表示しますtd>
        <td>テキスト</td>
        <td>-</td>
      </tr>
      <tr>
        <td>card-description</td>
        <td>カードの説明部分を表示します</td>
        <td>テキストなど全て可</td>
        <td>-</td>
      </tr>
      <tr>
        <td>card-actions</td>
        <td>カードのアクション部分を表示します</td>
        <td><code>rs-button</code></td>
        <td>-</td>
      </tr>
      </table>
      <h4>HTML属性</h4>
      <p>なし</p>
    `
  })

storiesOf('Components|Card/スタイルのカスタマイズ', module)
  .add('カードの背景色を変える', () => {
    return `
      <p>カードの背景色を指定した色に変える。</p>
      <rs-card class="my-card -fill-gray">
        <card-contents class="contents">
        <card-media class="media"></card-media>
          <card-header class="header">
            <card-title>タイトル</card-title>
            <card-subtitle>サブタイトル</card-subtitle>
          </card-header>
          <card-description class="description">説明</card-description>
        </card-contents>
        <card-actions class="actions">
          <rs-button>ボタン</rs-button>
          <rs-button class="icon"></rs-button>
        </card-actions>
      </rs-card>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-card-fill-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-card class="my-card -fill-gray">
    <card-contents class="contents">
    <card-media class="media"></card-media>
    <card-header class="header">
        <card-title>タイトル</card-title>
        <card-subtitle>サブタイトル</card-subtitle>
    </card-header>
        <card-description class="description">説明</card-description>
    </card-contents>
    <card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
    </card-actions>
</rs-card>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/card/rs-card.scss\';\n\n' +
        '.my-card {\n' +
        '   &.-fill-gray {\n' +
        '     @include rs-card-fill-color(#f8f8f8);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>
          $color: コンテナの色の塗りコード <br>
          例）#ee00ce
        </li>
      </ul>
    `
  })
  .add('タイトルの色を変える', () =>  {
    return `
      <p>タイトルの色を指定した色に変える。</p>
      <rs-card class="my-card -title -ink-brown">
        <card-contents class="contents">
        <card-media class="media"></card-media>
          <card-header class="header">
            <card-title>タイトル</card-title>
            <card-subtitle>サブタイトル</card-subtitle>
          </card-header>
          <card-description class="description">説明</card-description>
        </card-contents>
        <card-actions class="actions">
          <rs-button>ボタン</rs-button>
          <rs-button class="icon"></rs-button>
        </card-actions>
      </rs-card>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-card-title-ink-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-card class="my-card -title -ink-brown">
    <card-contents class="contents">
    <card-media class="media"></card-media>
    <card-header class="header">
        <card-title>タイトル</card-title>
        <card-subtitle>サブタイトル</card-subtitle>
    </card-header>
        <card-description class="description">説明</card-description>
    </card-contents>
    <card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
    </card-actions>
</rs-card>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/card/rs-card.scss\';\n\n' +
        '.my-card {\n' +
        '   &.-title.-ink-brown{\n' +
        '     @include rs-card-title-ink-color(brown);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>
          $color: インクの色コード <br>
          例）#ee00ce
        </li>
      </ul>
    `
  })
  .add('サブタイトルの色を変える', () => {
    return `
      <p>サブタイトルの色を指定した色に変える。</p>
      <rs-card class="my-card -subtitle -ink-brown">
        <card-contents class="contents">
        <card-media class="media"></card-media>
          <card-header class="header">
            <card-title>タイトル</card-title>
            <card-subtitle>サブタイトル</card-subtitle>
          </card-header>
          <card-description class="description">説明</card-description>
        </card-contents>
        <card-actions class="actions">
          <rs-button>ボタン</rs-button>
          <rs-button class="icon"></rs-button>
        </card-actions>
      </rs-card>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        ' @include rs-card-subtitle-ink-color($color)；',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-card class="my-card -subtitle -ink-brown">
    <card-contents class="contents">
    <card-media class="media"></card-media>
    <card-header class="header">
        <card-title>タイトル</card-title>
        <card-subtitle>サブタイトル</card-subtitle>
    </card-header>
        <card-description class="description">説明</card-description>
    </card-contents>
    <card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
    </card-actions>
</rs-card>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/card/rs-card.scss\';\n\n' +
        '.my-card {\n' +
        '   &.-subtitle.-ink-color {\n' +
        '     @include rs-card-subtitle-ink-color(brown);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('説明文の色を変える', () => {
    return `
    <p>説明部分の色を指定した色に変える。</p>
    <rs-card class="my-card -description -ink-brown">
      <card-contents class="contents">
      <card-media class="media"></card-media>
        <card-header class="header">
          <card-title>タイトル</card-title>
          <card-subtitle>サブタイトル</card-subtitle>
        </card-header>
        <card-description class="description">説明</card-description>
      </card-contents>
      <card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
      </card-actions>
    </rs-card>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
     ' @include rs-card-description-ink-color($color);',
     { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-card class="my-card -description -ink-brown">
    <card-contents class="contents">
    <card-media class="media"></card-media>
    <card-header class="header">
        <card-title>タイトル</card-title>
        <card-subtitle>サブタイトル</card-subtitle>
    </card-header>
        <card-description class="description">説明</card-description>
    </card-contents>
    <card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
    </card-actions>
</rs-card>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
      '@import \'@rsmdc/card/rs-card.scss\';\n\n' +
      '.my-card {\n' +
      '   &.-description.-ink-brown {\n' +
      '       @include rs-card-description-ink-color(brown);\n' +
      '   }\n' +
      '}',
      { lang: 'scss' }
     )}
    `
  })
  .add('画像タイトルの色を変える', () => {
    return `
      <p>画像タイトルの色を指定した色に変える。</p>
      <rs-card class="my-card">
        <card-contents class="contents">
        <card-media class="media -title -ink-white">画像タイトル</card-media>
          <card-header class="header">
            <card-title>タイトル</card-title>
            <card-subtitle>サブタイトル</card-subtitle>
          </card-header>
          <card-description class="description">説明</card-description>
        </card-contents>
        <card-actions class="actions">
          <rs-button>ボタン</rs-button>
          <rs-button class="icon"></rs-button>
        </card-actions>
      </rs-card>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        ' @include rs-card-media-content-ink-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-card class="my-card">
    <card-contents class="contents">
    <card-media class="media -title -ink-white"></card-media>
    <card-header class="header">
        <card-title>タイトル</card-title>
        <card-subtitle>サブタイトル</card-subtitle>
    </card-header>
        <card-description class="description">説明</card-description>
    </card-contents>
    <card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
    </card-actions>
</rs-card>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/card/rs-card.scss\';\n\n' +
        '.my-card {\n' +
        '   .contents > .media {\n' +
        '      &.-title.-ink-white {\n' +
        '         @include rs-card-media-content-ink-color(white);\n' +
        '      }\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('リップルの色を変える', () => {
    return `
      <p>画像タイトルの色を指定した色に変える。</p>
      <rs-card class="my-card -states-orange">
        <card-contents class="contents">
        <card-media class="media"></card-media>
          <card-header class="header">
            <card-title>タイトル</card-title>
            <card-subtitle>サブタイトル</card-subtitle>
          </card-header>
          <card-description class="description">説明</card-description>
        </card-contents>
        <card-actions class="actions">
          <rs-button>ボタン</rs-button>
          <rs-button class="icon"></rs-button>
        </card-actions>
      </rs-card>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-card-states-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
  `<rs-card class="my-card -states-orange">
      <card-contents class="contents">
      <card-media class="media"></card-media>
      <card-header class="header">
          <card-title>タイトル</card-title>
          <card-subtitle>サブタイトル</card-subtitle>
      </card-header>
          <card-description class="description">説明</card-description>
      </card-contents>
      <card-actions class="actions">
          <rs-button>ボタン</rs-button>
          <rs-button class="icon"></rs-button>
      </card-actions>
  </rs-card>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/card/rs-card.scss\';\n\n' +
        '.my-card {\n' +
        '   &.-states-orange {\n' +
        '      @include rs-card-states-color(orange);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('カード全体のサイズを変える', () => {
    return `
    <p>カード全体のサイズを指定したサイズに変える。</p>
    <rs-card class="my-card -size">
      <card-contents class="contents">
      <card-media class="media"></card-media>
        <card-header class="header">
          <card-title>タイトル</card-title>
          <card-subtitle>サブタイトル</card-subtitle>
        </card-header>
        <card-description class="description">説明</card-description>
      </card-contents>
      <card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
      </card-actions>
    </rs-card>

    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      '@include rs-card-size($width);',
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-card class="my-card -size">
    <card-contents class="contents">
    <card-media class="media"></card-media>
    <card-header class="header">
        <card-title>タイトル</card-title>
        <card-subtitle>サブタイトル</card-subtitle>
    </card-header>
        <card-description class="description">説明</card-description>
    </card-contents>
    <card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
    </card-actions>
</rs-card>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
      '@import \'@rsmdc/card/rs-card.scss\';\n\n' +
      '.my-card {\n' +
      '   &.-size {\n' +
      '      @include rs-card-size(300px);\n' +
      '   }\n' +
      '}',
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $width: サイズを指定 <br>
      </li>
    </ul>
    `
  })
  .add('画像を設定する', () => {
    return `
      <p>指定した画像を表示する。</p>
      <rs-card class="my-card">
        <card-contents class="contents">
        <card-media class="media -image"></card-media>
          <card-header class="header">
            <card-title>タイトル</card-title>
            <card-subtitle>サブタイトル</card-subtitle>
          </card-header>
          <card-description class="description">説明</card-description>
        </card-contents>
        <card-actions class="actions">
          <rs-button>ボタン</rs-button>
          <rs-button class="icon"></rs-button>
        </card-actions>
      </rs-card>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-card-media-image($url);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-card class="my-card">
    <card-contents class="contents">
    <card-media class="media -image"></card-media>
    <card-header class="header">
        <card-title>タイトル</card-title>
        <card-subtitle>サブタイトル</card-subtitle>
    </card-header>
        <card-description class="description">説明</card-description>
    </card-contents>
    <card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
    </card-actions>
</rs-card>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/card/rs-card.scss\';\n\n' +
        '.my-card {\n' +
        '   > .contents > .media {\n' +
        '       &.-image {\n' +
        '          @include rs-card-media-image(url(\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlzip6xw4cKmSkb0hOs79KPvArM_QBHM77ynJ3VDY8gQ3sVxu\'));\n' +
        '       }\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>
          $url: 画像URL <br>
          例）url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlzip6xw4cKmSkb0hOs79KPvArM_QBHM77ynJ3VDY8gQ3sVxu'));
        </li>
      </ul>
    `
  })
  .add('画像のサイズを設定する', () => {
    return `
      <p>画像のサイズを指定した大きさに変える。</p>
      <rs-card class="my-card">
        <card-contents class="contents">
        <card-media class="media -square"></card-media>
          <card-header class="header">
            <card-title>タイトル</card-title>
            <card-subtitle>サブタイトル</card-subtitle>
          </card-header>
          <card-description class="description">説明</card-description>
        </card-contents>
        <card-actions class="actions">
          <rs-button>ボタン</rs-button>
          <rs-button class="icon"></rs-button>
        </card-actions>
      </rs-card>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-card-media-type($type);\n' +
        'or\n' +
        '@include rs-card-media-aspect-ratio($X, $y);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-card class="my-card">
    <card-contents class="contents">
    <card-media class="media -square"></card-media>
    <card-header class="header">
        <card-title>タイトル</card-title>
        <card-subtitle>サブタイトル</card-subtitle>
    </card-header>
        <card-description class="description">説明</card-description>
    </card-contents>
    <card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
    </card-actions>
</rs-card>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/card/rs-card.scss\';\n\n' +
        '.my-card {\n' +
        '   > .contents > .media {\n' +
        '       &.-square {\n' +
        '          @include rs-card-media-type(square)\n' +
        '       }\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>
          $type: アスペクト比の指定 <br>
          squareか16-9が指定できる
        </li>
        <li>$X, $y: アスペクト比のカスタマイズ</li>
      </ul>
    `
  })
  .add('カードに枠線をつける', () => {
    return `
    <p>カードに枠線をつける。</p>
    <rs-card class="my-card -outlined">
      <card-contents class="contents">
      <card-media class="media"></card-media>
        <card-header class="header">
          <card-title>タイトル</card-title>
          <card-subtitle>サブタイトル</card-subtitle>
        </card-header>
        <card-description class="description">説明</card-description>
      </card-contents>
      <card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
      </card-actions>
    </rs-card>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      '@include rs-card-type($type);',
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-card class="my-card -outlined">
    <card-contents class="contents">
    <card-media class="media"></card-media>
    <card-header class="header">
        <card-title>タイトル</card-title>
        <card-subtitle>サブタイトル</card-subtitle>
    </card-header>
        <card-description class="description">説明</card-description>
    </card-contents>
    <card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
    </card-actions>
</rs-card>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
      '@import \'@rsmdc/card/rs-card.scss\';\n\n' +
      '.my-card {\n' +
      '   &.-outlined {\n' +
      '      @include rs-card-type(outlined);\n' +
      '   }\n' +
      '}',
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$type: 枠線のタイプ指定 <br>
        outlinedのみ
      </li>
    </ul>
    `
  })
  .add('ボタン幅をアクションエリア幅に合わせる', () => {
    return `
    <p>ボタンの幅をアクションエリアの幅に合わせる。</p>
      <rs-card class="my-card -action-area">
        <card-contents class="contents">
        <card-media class="media"></card-media>
          <card-header class="header">
            <card-title>タイトル</card-title>
            <card-subtitle>サブタイトル</card-subtitle>
          </card-header>
          <card-description class="description">説明</card-description>
        </card-contents>
        <card-actions class="actions">
          <rs-button>ボタン</rs-button>
          <rs-button class="icon"></rs-button>
        </card-actions>
      </rs-card>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      '@include rs-card-actions-type($type);',
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-card class="my-card -action-area">
    <card-contents class="contents">
    <card-media class="media"></card-media>
    <card-header class="header">
        <card-title>タイトル</card-title>
        <card-subtitle>サブタイトル</card-subtitle>
    </card-header>
        <card-description class="description">説明</card-description>
    </card-contents>
    <card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
    </card-actions>
</rs-card>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
      '@import \'@rsmdc/card/rs-card.scss\';\n\n' +
      '.my-card {\n' +
      '   > .-action-area {\n' +
      '      @include rs-card-type(full-bleed);\n' +
      '   }\n' +
      '}',
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$type: タイプの指定 <br>
        full-bleedのみ
      </li>
    </ul>
    `
  })
  .add('カードの角の丸みを変える', () => {
    return `
      <p>カードの角の丸みを指定したサイズに変える。</p>
      <rs-card class="my-card -roundness">
        <card-contents class="contents">
        <card-media class="media"></card-media>
          <card-header class="header">
            <card-title>タイトル</card-title>
            <card-subtitle>サブタイトル</card-subtitle>
          </card-header>
          <card-description class="description">説明</card-description>
        </card-contents>
        <card-actions class="actions">
          <rs-button>ボタン</rs-button>
          <rs-button class="icon"></rs-button>
        </card-actions>
      </rs-card>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-card-shape-radius($radius);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-card class="my-card -roundness">
    <card-contents class="contents">
    <card-media class="media"></card-media>
    <card-header class="header">
        <card-title>タイトル</card-title>
        <card-subtitle>サブタイトル</card-subtitle>
    </card-header>
        <card-description class="description">説明</card-description>
    </card-contents>
    <card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
    </card-actions>
</rs-card>`,
        { lang: 'html' }
      )}

      ${copyCodeBlock(
        '@import \'@rsmdc/card/rs-card.scss\';\n\n' +
        '.my-card {\n' +
        '   &.-roundness {\n' +
        '      @include rs-card-shape-radius(15px);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>
          $radius: 角の丸みのサイズ指定 <br>
        </li>
      </ul>
    `
  })
