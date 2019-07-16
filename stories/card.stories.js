import { storiesOf } from '@storybook/html'
import { CardActions, CardMedia, CardDescription, CardSubtitle, CardTitle, CardHeader, CardContents, Card } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'
import './css/card.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

window.customElements.define('rs-card-actions', CardActions)
window.customElements.define('rs-card-media', CardMedia)
window.customElements.define('rs-card-description', CardDescription)
window.customElements.define('rs-card-subtitle', CardSubtitle)
window.customElements.define('rs-card-title', CardTitle)
window.customElements.define('rs-card-header', CardHeader)
window.customElements.define('rs-card-contents', CardContents)
window.customElements.define('rs-card', Card)

storiesOf('Components|Card', module)
  .addDecorator(withLinks)
  .add('概要', () => `
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
      <li>
        outlined: 枠線をつける
      </li>
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
  `)
  .add('使用方法', () => `
    <h4>使用方法</h4>
    <div class="result">
      <rs-card class="my-card">
        <rs-card-contents class="contents">
          <rs-card-media class="media"></rs-card-media>
          <rs-card-header class="header">
            <rs-card-title>タイトル</rs-card-title>
            <rs-card-subtitle>サブタイトル</rs-card-subtitle>
          </rs-card-header>
          <rs-card-description class="description">説明</rs-card-description>
        </rs-card-contents>
        <rs-card-actions class="actions">
          <rs-button>ボタン</rs-button>
          <rs-button class="icon"></rs-button>
        </rs-card-actions>
      </rs-card>
    </div>
    ${copyCodeBlock(
`<rs-card class="my-card">
  <rs-card-contents class="contents">
    <rs-card-media class="media" />
    <rs-card-header class="header">
      <rs-card-title>タイトル</rs-card-title>
      <rs-card-subtitle>サブタイトル</rs-card-subtitle>
    </rs-card-header>
    <rs-card-description class="description">説明</rs-card-description>
  </rs-card-contents>
  <rs-card-actions class="actions">
    <rs-button>ボタン</rs-button>
    <rs-button class="icon" />
  </rs-card-actions>
</rs-card>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`.my-card {
  @include rs-card-size(350px);
  > .contents > .media {
    @include rs-card-media-type(16-9);
    @include rs-card-media-image(url(\'example.png\'));
  }
  > .actions > .icon {
    @include rs-button-icon-image(url(\'icon.png\'));
  }
}`,
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
          <li><code>rs-card-contents</code></li>
          <li><code>rs-card-media</code></li>
          <li><code>rs-card-header</code></li>
          <li><code>rs-card-description</code></li>
          <li><code>rs-card-actions</code></li>
        </ul>
      </td>
      <td>-</td>
    </tr>
    <tr>
      <td>rs-card-contens</td>
      <td>カードの主要エリアを示します</td>
      <td>
        <ul>
          <li><code>rs-card-media</code></li>
          <li><code>rs-card-header</code></li>
          <li><code>rs-card-description</code></li>
        </ul>
      </td>
      <td>主要エリアにはリップルがつく<br>※主要エリアは必須ではない</td>
    </tr>
    <tr>
      <td>rs-card-media</td>
      <td>カードの画像を表示します</td>
      <td>テキスト</td>
      <td>テキストは画像のタイトルを示す</td>
    </tr>
    <tr>
      <td>rs-card-header</td>
      <td>カードのヘッダーを表示します</td>
      <td>
        <ul>
          <li><code>rs-card-title</code></li>
          <li><code>rs-card-subtitle</code></li>
        </ul>
      </td>
      <td>-</td>
    </tr>
    <tr>
      <td>rs-card-title</td>
      <td>カードのタイトルを表示します</td>
      <td>テキスト</td>
      <td>-</td>
    </tr>
    <tr>
      <td>rs-card-subtitle</td>
      <td>カードのサブタイトルを表示しますtd>
      <td>テキスト</td>
      <td>-</td>
    </tr>
    <tr>
      <td>rs-card-description</td>
      <td>カードの説明部分を表示します</td>
      <td>テキストなど全て可</td>
      <td>-</td>
    </tr>
    <tr>
      <td>rs-card-actions</td>
      <td>カードのアクション部分を表示します</td>
      <td><code>rs-button</code></td>
      <td>-</td>
    </tr>
    </table>
    <h4>HTML属性</h4>
    <p>なし</p>
  `)

storiesOf('Components|Card/スタイルのカスタマイズ', module)
  .add('カードの背景色を変える', () => `
    <h4>カードの背景色を指定した色に変える。</h4>
    <rs-card class="my-card -fill-dark">
      <rs-card-contents class="contents">
      <rs-card-media class="media"></rs-card-media>
        <rs-card-header class="header">
          <rs-card-title>タイトル</rs-card-title>
          <rs-card-subtitle>サブタイトル</rs-card-subtitle>
        </rs-card-header>
        <rs-card-description class="description">説明</rs-card-description>
      </rs-card-contents>
      <rs-card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
      </rs-card-actions>
    </rs-card>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-card-fill-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-card class="my-card -fill-dark">
  <rs-card-contents class="contents">
    <rs-card-media class="media" />
    <rs-card-header class="header">
      <rs-card-title>タイトル</rs-card-title>
      <rs-card-subtitle>サブタイトル</rs-card-subtitle>
    </rs-card-header>
    <rs-card-description class="description">説明</rs-card-description>
  </rs-card-contents>
  <rs-card-actions class="actions">
    <rs-button>ボタン</rs-button>
    <rs-button class="icon" />
  </rs-card-actions>
</rs-card>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/card/rs-card.scss';

.my-card {
  &.-fill-dark {
    @include rs-card-fill-color(#f8f8f8);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $color: コンテナの色の塗りコード <br>
        例）#ee00ce
      </li>
    </ul>
  `)
  .add('タイトルの色を変える', () => `
    <h4>タイトルの色を指定した色に変える。</h4>
    <rs-card class="my-card -title -ink-brown">
      <rs-card-contents class="contents">
      <rs-card-media class="media"></rs-card-media>
        <rs-card-header class="header">
          <rs-card-title>タイトル</rs-card-title>
          <rs-card-subtitle>サブタイトル</rs-card-subtitle>
        </rs-card-header>
        <rs-card-description class="description">説明</rs-card-description>
      </rs-card-contents>
      <rs-card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
      </rs-card-actions>
    </rs-card>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-card-title-ink-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-card class="my-card -title -ink-brown">
  <rs-card-contents class="contents">
    <rs-card-media class="media" />
    <rs-card-header class="header">
      <rs-card-title>タイトル</rs-card-title>
      <rs-card-subtitle>サブタイトル</rs-card-subtitle>
    </rs-card-header>
    <rs-card-description class="description">説明</rs-card-description>
  </rs-card-contents>
  <rs-card-actions class="actions">
    <rs-button>ボタン</rs-button>
    <rs-button class="icon" />
  </rs-card-actions>
</rs-card>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/card/rs-card.scss';

.my-card {
  &.-title.-ink-brown{
    @include rs-card-title-ink-color(brown);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $color: インクの色コード <br>
        例）#ee00ce
      </li>
    </ul>
  `)
  .add('サブタイトルの色を変える', () => `
    <h4>サブタイトルの色を指定した色に変える。</h4>
    <rs-card class="my-card -subtitle -ink-brown">
      <rs-card-contents class="contents">
      <rs-card-media class="media"></rs-card-media>
        <rs-card-header class="header">
          <rs-card-title>タイトル</rs-card-title>
          <rs-card-subtitle>サブタイトル</rs-card-subtitle>
        </rs-card-header>
        <rs-card-description class="description">説明</rs-card-description>
      </rs-card-contents>
      <rs-card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
      </rs-card-actions>
    </rs-card>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-card-subtitle-ink-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-card class="my-card -subtitle -ink-brown">
  <rs-card-contents class="contents">
    <rs-card-media class="media" />
    <rs-card-header class="header">
      <rs-card-title>タイトル</rs-card-title>
      <rs-card-subtitle>サブタイトル</rs-card-subtitle>
    </rs-card-header>
    <rs-card-description class="description">説明</rs-card-description>
  </rs-card-contents>
  <rs-card-actions class="actions">
    <rs-button>ボタン</rs-button>
    <rs-button class="icon" />
  </rs-card-actions>
</rs-card>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/card/rs-card.scss';

.my-card {
  &.-subtitle.-ink-color {
    @include rs-card-subtitle-ink-color(brown);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: インクの色コード <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('説明文の色を変える', () => `
    <h4>説明部分の色を指定した色に変える。</h4>
    <rs-card class="my-card -description -ink-brown">
      <rs-card-contents class="contents">
      <rs-card-media class="media"></rs-card-media>
        <rs-card-header class="header">
          <rs-card-title>タイトル</rs-card-title>
          <rs-card-subtitle>サブタイトル</rs-card-subtitle>
        </rs-card-header>
        <rs-card-description class="description">説明</rs-card-description>
      </rs-card-contents>
      <rs-card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
      </rs-card-actions>
    </rs-card>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-card-description-ink-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-card class="my-card -description -ink-brown">
  <rs-card-contents class="contents">
    <rs-card-media class="media" />
    <rs-card-header class="header">
      <rs-card-title>タイトル</rs-card-title>
      <rs-card-subtitle>サブタイトル</rs-card-subtitle>
    </rs-card-header>
    <rs-card-description class="description">説明</rs-card-description>
  </rs-card-contents>
  <rs-card-actions class="actions">
    <rs-button>ボタン</rs-button>
    <rs-button class="icon" />
  </rs-card-actions>
</rs-card>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/card/rs-card.scss';

.my-card {
  &.-description.-ink-brown {
      @include rs-card-description-ink-color(brown);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: インクの色コード <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('画像タイトルの色を変える', () => `
    <h4>画像タイトルの色を指定した色に変える。</h4>
    <rs-card class="my-card">
      <rs-card-contents class="contents">
      <rs-card-media class="media -title -ink-white">画像タイトル</rs-card-media>
        <rs-card-header class="header">
          <rs-card-title>タイトル</rs-card-title>
          <rs-card-subtitle>サブタイトル</rs-card-subtitle>
        </rs-card-header>
        <rs-card-description class="description">説明</rs-card-description>
      </rs-card-contents>
      <rs-card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
      </rs-card-actions>
    </rs-card>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-card-media-content-ink-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-card class="my-card">
  <rs-card-contents class="contents">
    <rs-card-media class="media -title -ink-white" />
    <rs-card-header class="header">
      <rs-card-title>タイトル</rs-card-title>
      <rs-card-subtitle>サブタイトル</rs-card-subtitle>
    </rs-card-header>
    <rs-card-description class="description">説明</rs-card-description>
  </rs-card-contents>
  <rs-card-actions class="actions">
    <rs-button>ボタン</rs-button>
    <rs-button class="icon" />
  </rs-card-actions>
</rs-card>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/card/rs-card.scss';

.my-card {
  .contents > .media {
    &.-title.-ink-white {
        @include rs-card-media-content-ink-color(white);
    }
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: インクの色コード <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('リップルの色を変える', () => `
    <h4>画像タイトルの色を指定した色に変える。</h4>
    <rs-card class="my-card -ripple-orange">
      <rs-card-contents class="contents">
      <rs-card-media class="media"></rs-card-media>
        <rs-card-header class="header">
          <rs-card-title>タイトル</rs-card-title>
          <rs-card-subtitle>サブタイトル</rs-card-subtitle>
        </rs-card-header>
        <rs-card-description class="description">説明</rs-card-description>
      </rs-card-contents>
      <rs-card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
      </rs-card-actions>
    </rs-card>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-card-states-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-card class="my-card -ripple-orange">
  <rs-card-contents class="contents">
    <rs-card-media class="media" />
    <rs-card-header class="header">
      <rs-card-title>タイトル</rs-card-title>
      <rs-card-subtitle>サブタイトル</rs-card-subtitle>
    </rs-card-header>
    <rs-card-description class="description">説明</rs-card-description>
  </rs-card-contents>
  <rs-card-actions class="actions">
      <rs-button>ボタン</rs-button>
      <rs-button class="icon" />
  </card-actions>
</rs-card>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/card/rs-card.scss';

.my-card {
  &.-ripple-orange {
    @include rs-card-states-color(orange);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: リップルの色を指定 <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('カード全体のサイズを変える', () => `
    <h4>カード全体のサイズを指定したサイズに変える。</h4>
    <rs-card class="my-card -size">
      <rs-card-contents class="contents">
      <rs-card-media class="media"></rs-card-media>
        <rs-card-header class="header">
          <rs-card-title>タイトル</rs-card-title>
          <rs-card-subtitle>サブタイトル</rs-card-subtitle>
        </rs-card-header>
        <rs-card-description class="description">説明</rs-card-description>
      </rs-card-contents>
      <rs-card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
      </rs-card-actions>
    </rs-card>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-card-size($width);`, 
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-card class="my-card -size">
  <rs-card-contents class="contents">
    <rs-card-media class="media" />
    <rs-card-header class="header">
      <rs-card-title>タイトル</rs-card-title>
      <rs-card-subtitle>サブタイトル</rs-card-subtitle>
    </rs-card-header>
    <rs-card-description class="description">説明</rs-card-description>
  </rs-card-contents>
  <rs-card-actions class="actions">
    <rs-button>ボタン</rs-button>
    <rs-button class="icon" />
  </rs-card-actions>
</rs-card>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/card/rs-card.scss';

.my-card {
  &.-size {
    @include rs-card-size(300px);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $width: サイズを指定 <br>
      </li>
    </ul>
  `)
  .add('画像を設定する', () => `
    <h4>指定した画像を表示する。</h4>
    <rs-card class="my-card">
      <rs-card-contents class="contents">
      <rs-card-media class="media -image"></rs-card-media>
        <rs-card-header class="header">
          <rs-card-title>タイトル</rs-card-title>
          <rs-card-subtitle>サブタイトル</rs-card-subtitle>
        </rs-card-header>
        <rs-card-description class="description">説明</rs-card-description>
      </rs-card-contents>
      <rs-card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
      </rs-card-actions>
    </rs-card>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-card-media-image($url);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-card class="my-card">
  <rs-card-contents class="contents">
  <rs-card-media class="media -image" />
    <rs-card-header class="header">
      <rs-card-title>タイトル</rs-card-title>
      <rs-card-subtitle>サブタイトル</rs-card-subtitle>
    </rs-card-header>
    <rs-card-description class="description">説明</rs-card-description>
  </rs-card-contents>
  <rs-card-actions class="actions">
    <rs-button>ボタン</rs-button>
    <rs-button class="icon" />
  </rs-card-actions>
</rs-card>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/card/rs-card.scss';

.my-card {
  > .contents > .media {
    &.-image {
      @include rs-card-media-image(url(\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlzip6xw4cKmSkb0hOs79KPvArM_QBHM77ynJ3VDY8gQ3sVxu\'));
    }
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $url: 画像URL <br>
        例）url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVlzip6xw4cKmSkb0hOs79KPvArM_QBHM77ynJ3VDY8gQ3sVxu'));
      </li>
    </ul>
  `)
  .add('画像のサイズを設定する', () => `
    <h4>画像のサイズを指定した大きさに変える。</h4>
    <rs-card class="my-card">
      <rs-card-contents class="contents">
      <rs-card-media class="media -square"></rs-card-media>
        <rs-card-header class="header">
          <rs-card-title>タイトル</rs-card-title>
          <rs-card-subtitle>サブタイトル</rs-card-subtitle>
        </rs-card-header>
        <rs-card-description class="description">説明</rs-card-description>
      </rs-card-contents>
      <rs-card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
      </rs-card-actions>
    </rs-card>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
`@include rs-card-media-type($type);
or
@include rs-card-media-aspect-ratio($X, $y);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-card class="my-card">
  <rs-card-contents class="contents">
    <rs-card-media class="media -square" />
    <rs-card-header class="header">
      <rs-card-title>タイトル</rs-card-title>
      <rs-card-subtitle>サブタイトル</rs-card-subtitle>
    </rs-card-header>
    <rs-card-description class="description">説明</rs-card-description>
  </rs-card-contents>
  <rs-card-actions class="actions">
    <rs-button>ボタン</rs-button>
    <rs-button class="icon" />
  </rs-card-actions>
</rs-card>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/card/rs-card.scss';

.my-card {
  > .contents > .media {
    &.-square {
      @include rs-card-media-type(square)
    }
  }
}`,
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
  `)
  .add('カードに枠線をつける', () => `
    <h4>カードに枠線をつける。</h4>
    <rs-card class="my-card -outlined">
      <rs-card-contents class="contents">
      <rs-card-media class="media"></rs-card-media>
        <rs-card-header class="header">
          <rs-card-title>タイトル</rs-card-title>
          <rs-card-subtitle>サブタイトル</rs-card-subtitle>
        </rs-card-header>
        <rs-card-description class="description">説明</rs-card-description>
      </rs-card-contents>
      <rs-card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
      </rs-card-actions>
    </rs-card>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-card-type($type);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
 `<rs-card class="my-card -outlined">
    <rs-card-contents class="contents">
    <rs-card-media class="media" />
    <rs-card-header class="header">
      <rs-card-title>タイトル</rs-card-title>
      <rs-card-subtitle>サブタイトル</rs-card-subtitle>
    </rs-card-header>
    <rs-card-description class="description">説明</rs-card-description>
    </rs-card-contents>
    <rs-card-actions class="actions">
      <rs-button>ボタン</rs-button>
      <rs-button class="icon" />
  </rs-card-actions>
</rs-card>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/card/rs-card.scss';

.my-card {
  &.-outlined {
    @include rs-card-type(outlined);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$type: 枠線のタイプ指定 <br>
        outlinedのみ
      </li>
    </ul>
  `)
  .add('ボタン幅をアクションエリア幅に合わせる', () => `
    <h4>ボタンの幅をアクションエリアの幅に合わせる。</h4>
    <rs-card class="my-card -action-area">
      <rs-card-contents class="contents">
      <rs-card-media class="media"></rs-card-media>
        <rs-card-header class="header">
          <rs-card-title>タイトル</rs-card-title>
          <rs-card-subtitle>サブタイトル</rs-card-subtitle>
        </rs-card-header>
        <rs-card-description class="description">説明</rs-card-description>
      </rs-card-contents>
      <rs-card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
      </rs-card-actions>
    </rs-card>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-card-actions-type($type);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-card class="my-card -action-area">
    <rs-card-contents class="contents">
      <rs-card-media class="media" />
      <rs-card-header class="header">
        <rs-card-title>タイトル</rs-card-title>
        <rs-card-subtitle>サブタイトル</rs-card-subtitle>
      </rs-card-header>
      <rs-card-description class="description">説明</rs-card-description>
    </rs-card-contents>
    <rs-card-actions class="actions">
      <rs-button>ボタン</rs-button>
      <rs-button class="icon" />
    </rs-card-actions>
</rs-card>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/card/rs-card.scss';

.my-card {
  > .-action-area {
    @include rs-card-type(full-bleed);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$type: タイプの指定 <br>
        full-bleedのみ
      </li>
    </ul>
  `)
  .add('カードの角の丸みを変える', () => `
    <h4>カードの角の丸みを指定したサイズに変える。</h4>
    <rs-card class="my-card -roundness">
      <rs-card-contents class="contents">
      <rs-card-media class="media"></rs-card-media>
        <rs-card-header class="header">
          <rs-card-title>タイトル</rs-card-title>
          <rs-card-subtitle>サブタイトル</rs-card-subtitle>
        </rs-card-header>
        <rs-card-description class="description">説明</rs-card-description>
      </rs-card-contents>
      <rs-card-actions class="actions">
        <rs-button>ボタン</rs-button>
        <rs-button class="icon"></rs-button>
      </rs-card-actions>
    </rs-card>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-card-shape-radius($radius);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-card class="my-card -roundness">
  <rs-card-contents class="contents">
    <rs-card-media class="media" />
    <rs-card-header class="header">
      <rs-card-title>タイトル</rs-card-title>
      <rs-card-subtitle>サブタイトル</rs-card-subtitle>
    </rs-card-header>
    <rs-card-description class="description">説明</rs-card-description>
  </rs-card-contents>
  <rs-card-actions class="actions">
    <rs-button>ボタン</rs-button>
    <rs-button class="icon" />
  </rs-card-actions>
</rs-card>`,
      { lang: 'html' }
    )}

    ${copyCodeBlock(
`@import '@rsmdc/card/rs-card.scss';

.my-card {
  &.-roundness {
    @include rs-card-shape-radius(15px);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>
        $radius: 角の丸みのサイズ指定 <br>
      </li>
    </ul>
  `)
