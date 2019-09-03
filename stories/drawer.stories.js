import { storiesOf } from '@storybook/html'
import { DrawerContent, DrawerTitle, DrawerSubtitle, DrawerHeader, Drawer } from '@rsmdc/rsmdc'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'


import './css/style.scss'
import './css/drawer.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

window.customElements.define('rs-drawer-title', DrawerTitle)
window.customElements.define('rs-drawer-subtitle', DrawerSubtitle)
window.customElements.define('rs-drawer-header', DrawerHeader)
window.customElements.define('rs-drawer-content', DrawerContent)
window.customElements.define('rs-drawer', Drawer)

storiesOf('Components|Drawer', module)
  .addDecorator(withLinks)
  .add('概要', () => `
    <h4>Drawer</h4>
    <p>
      遷移先への切り替えやアカウントの切り替えなど、アプリ機能へのアクセスを提供する。
    </p>
    <p>
      参考:
      <a href="https://material.io/design/components/navigation-drawer.html#">
        https://material.io/design/components/navigation-drawer.html#
      </a>
    </p>
    <p>タイプ</p>
    <ul>
      <li>
        permanent (デフォルト) <br>
        常に開いた状態。 <br>
        <a class="link" href="#" data-sb-kind="Components|Drawer/スタイルのカスタマイズ/ドロワーのタイプを変える" data-sb-story="permanent(default)">参照はこちら</a>
      </li>
      <li>
        dismissible <br>
        表示・非表示が切り替えれる。 <br>
        <a class="link" href="#" data-sb-kind="Components|Drawer/スタイルのカスタマイズ/ドロワーのタイプを変える" data-sb-story="dismissible">参照はこちら</a>
      </li>
      <li>
        modal <br>
        モーダル状で表示される。 <br>
        <a class="link" href="#" data-sb-kind="Components|Drawer/スタイルのカスタマイズ/ドロワーのタイプを変える" data-sb-story="modal">参照はこちら</a>
      </li>
    </ul>
  `)
  .add('使用方法', () => `
    <rs-app-layout class="app-layout">
      <rs-drawer class="drawer" opened>
        <rs-drawer-header class="header">
          <rs-drawer-title class="title">タイトル</rs-drawer-title>
          <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
        </rs-drawer-header>
        <rs-drawer-content class="contents">
        </rs-drawer-content>
      </rs-drawer>
      <rs-app-layout-content class="contents">
        <rs-app-bar class="appbar">
          <rs-app-bar-nav class="nav"></rs-app-bar-nav>
          <rs-app-bar-title>title</rs-app-bar-title>
        </rs-app-bar>
        <h4>使用方法</h4>
      </rs-app-layout-content>
    </rs-app-layout>
    ${copyCodeBlock(
`<rs-app-layout class="app-layout">
  <rs-drawer class="drawer" opened>
    <rs-drawer-header class="header">
      <rs-drawer-title class="title">タイトル</rs-drawer-title>
      <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
    </rs-drawer-header>
    <rs-drawer-content class="contents">
      <rs-list class="list">
        ...
      </rs-list>
    </rs-drawer-content>
  </rs-drawer>
  <rs-app-layout-content class="contents">
    <rs-app-bar class="appbar">
      <rs-app-bar-nav />
      <rs-app-bar-title>title</rs-app-bar-title>
    </rs-app-bar>
      ...
  </rs-app-layout-content>
</rs-app-layout>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`.app-layout {
  > .drawer {
    @include rs-drawer-type(dismissible);
  }
}`,
      { lang: 'scss' }
    )}
    <h4>HTML要素</h4>
    <p>custom elementsを<code>rs</code>と<code>drawer</code>のプレフィックスをつけて定義した前提です。<br>
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
        <td>rs-drawer</td>
        <td>ドロワー本体を表示します</td>
        <td>
          <ul>
            <li><code>rs-drawer-header</code></li>
            <li><code>rs-drawer-content</code></li>
          </ul>
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-drawer-header</td>
        <td>ドロワーのヘッダーを表示します</td>
        <td>
          <ul>
            <li><code>rs-drawer-title</code></li>
            <li><code>rs-drawer-subtitle</code></li>
          </ul>
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-drawer-title</td>
        <td>ドロワーのタイトルを表示します</td>
        <td>テキスト</td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-drawer-subtitle</td>
        <td>ドロワーのサブタイトルを表示します</td>
        <td>テキスト</td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-drawer-content</td>
        <td>ドロワーのコンテンツ部分を表示します</td>
        <td>
          <ul>
            <li><code>rs-list</code></li>
            <li>テキストなど全て可</li>
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
        <td>opened</td>
        <td>ドロワーを表示状態にします</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
    </table>
  `)

storiesOf('Components|Drawer/スタイルのカスタマイズ/ドロワーのタイプを変える', module)
  .add('permanent (default)', () => `
    <rs-app-layout class="app-layout">
      <rs-drawer class="drawer -permanent" opened>
        <rs-drawer-header class="header">
          <rs-drawer-title class="title">タイトル</rs-drawer-title>
          <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
        </rs-drawer-header>
        <rs-drawer-content class="contents"></drawer-content>
      </rs-drawer>
      <rs-app-layout-content class="contents">
        <rs-app-bar class="appbar">
          <rs-app-bar-title>title</rs-app-bar-title>
        </rs-app-bar>
        <h4>permanent（デフォルト）</h4>
      </rs-app-layout-content>
    </rs-app-layout>
    <p>ドロワーが左側に常に開きっぱなしの状態</p>
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-app-layout class="app-layout">
  <rs-drawer class="drawer -permanent" opened>
    <rs-drawer-header class="header">
      <rs-drawer-title class="title">タイトル</rs-drawer-title>
      <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
    </rs-drawer-header>
    <rs-drawer-content class="contents" />
  </rs-drawer>
  <rs-app-layout-content class="contents">
    <rs-app-bar class="appbar">
      <rs-app-bar-title>title</rs-app-bar-title>
    </rs-app-bar>
  </rs-app-layout-content>
</rs-app-layout>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/drawer/rs-drawer.scss';

.app-layout {
  > .drawer {
    @include rs-drawer-type(permanent);
  }
}`,
      { lang: 'scss' }
    )}
  `)
  .add('dismissible', () => `
    <rs-app-layout class="app-layout">
      <rs-drawer class="drawer" opened>
        <rs-drawer-header class="header">
          <rs-drawer-title class="title">タイトル</rs-drawer-title>
          <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
        </rs-drawer-header>
        <rs-drawer-content class="contents"></rs-drawer-content>
      </rs-drawer>
      <rs-app-layout-content class="contents">
        <rs-app-bar class="appbar">
          <rs-app-bar-nav class="nav"></rs-app-bar-nav>
          <rs-app-bar-title>title</rs-app-bar-title>
        </rs-app-bar>
        <h4>dismissible</h4>
      </rs-app-layout-content>
    </rs-app-layout>
    <p>
      ドロワーが左側に表示される。 <br>
      opened属性の有無によって表示・非表示が切り替わる。
    </p>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-drawer-type($type);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-app-layout class="app-layout">
  <rs-drawer class="drawer" opened>
    <rs-drawer-header class="header">
      <rs-drawer-title class="title">タイトル</rs-drawer-title>
      <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
    </rs-drawer-header>
    <rs-drawer-content class="contents" />
  </rs-drawer>
  <rs-app-layout-content class="contents">
    <rs-app-bar class="appbar">
      <rs-app-bar-nav class="nav" />
      <rs-app-bar-title>title</rs-app-bar-title>
    </rs-app-bar>
  </rs-app-layout-content>
</rs-app-layout>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/drawer/rs-drawer.scss';

.app-layout {
  > .drawer {
    @include rs-drawer-type(dismissible);
  }
}`,
      { lang: 'scss' }
    )}
  `)
  .add('modal', () => `
    <rs-app-layout class="app-layout">
      <rs-drawer class="drawer -modal" opened>
        <rs-drawer-header class="header">
          <rs-drawer-title class="title">タイトル</rs-drawer-title>
          <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
        </rs-drawer-header>
        <rs-drawer-content class="contents" />
      </rs-drawer>
      <rs-app-layout-content class="contents">
        <rs-app-bar class="appbar">
          <rs-app-bar-nav class="nav" />
          <rs-app-bar-title>title</rs-app-bar-title>
        </rs-app-bar>
      </rs-app-layout-content>
    </rs-app-lauout>
    <h4>modal</h4>
    <p>
      ドロワーがモーダル状で表示される。 <br>
      opened属性の有無によって表示・非表示が切り替わる。
    </p>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-drawer-type(type);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-app-layout class="app-layout">
  <rs-drawer class="drawer -modal" opened>
    <rs-drawer-header class="header">
      <rs-drawer-title class="title">タイトル</rs-drawer-title>
      <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
    </rs-drawer-header>
    <rs-drawer-content class="contents" />
  </rs-drawer>
  <rs-app-layout-content class="contents">
    <rs-app-bar class="appbar">
      <rs-app-bar-nav class="nav" />
      <rs-app-bar-title>title</rs-app-bar-title>
    </rs-app-bar>
  </rs-app-layout-content>
</rs-app-lauout>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/drawer/rs-drawer.scss';

.app-layout {
  > .drawer {
    @include rs-drawer-type(modal);
  }
}`,
      { lang: 'scss' }
    )}
  `)
storiesOf('Components|Drawer/スタイルのカスタマイズ', module)
  .add('タイトルの色を変える', () => `
    <rs-app-layout class="app-layout">
      <rs-drawer class="drawer -title -ink-brown" opened>
        <rs-drawer-header class="header">
          <rs-drawer-title class="title">タイトル</rs-drawer-title>
          <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
        </rs-drawer-header>
        <rs-drawer-content class="contents" />
      </rs-drawer>
      <rs-app-layout-content class="contents">
        <rs-app-bar class="appbar">
          <rs-app-bar-nav class="nav" />
          <rs-app-bar-title>title</rs-app-bar-title>
        </rs-app-bar>
      </rs-app-layout-content>
    </rs-app-layout>
    <h4>タイトルの色を指定した色に変える。</h4>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-drawer-title-ink-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-app-layout class="app-layout">
  <rs-drawer class="drawer -title -ink-brown" opened>
    <rs-drawer-header class="header">
      <rs-drawer-title class="title">タイトル</rs-drawer-title>
      <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
    </rs-drawer-header>
    <rs-drawer-content class="contents" />
  </rs-drawer>
  <rs-app-layout-content class="contents">
    <rs-app-bar class="appbar">
      <rs-app-bar-nav class="nav" />
      <rs-app-bar-title>title</rs-app-bar-title>
    </rs-app-bar>
  </rs-app-layout-content>
</rs-app-layout>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/drawer/rs-drawer.scss';

.app-layout {
  > .drawer {
    &.-title.-ink-brown {
      @include rs-drawer-title-ink-color(brown);
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
  .add('サブタイトルの色を変える', () => `
    <rs-app-layout class="app-layout">
      <rs-drawer class="drawer -subtitle -ink-brown" opened>
        <rs-drawer-header class="header">
          <rs-drawer-title class="title">タイトル</rs-drawer-title>
          <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
        </rs-drawer-header>
        <rs-drawer-content class="contents"></rs-drawer-content>
      </rs-drawer>
      <rs-app-layout-content class="contents">
        <rs-app-bar class="appbar">
          <rs-app-bar-nav class="nav"></rs-app-bar-nav>
          <rs-app-bar-title>title</rs-app-bar-title>
        </rs-app-bar>
      </rs-app-layout-content>
    </rs-app-layout>
    <h4>サブタイトルの色を指定した色に変える。</h4>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-drawer-subtitle-ink-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-app-layout class="app-layout">
  <rs-drawer class="drawer -subtitle -ink-brown" opened>
    <rs-drawer-header class="header">
      <rs-drawer-title class="title">タイトル</rs-drawer-title>
      <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
    </rs-drawer-header>
    <rs-drawer-content class="contents" />
  </rs-drawer>
  <rs-app-layout-content class="contents">
    <rs-app-bar class="appbar">
      <rs-app-bar-nav class="nav" />
      <rs-app-bar-title>title</rs-app-bar-title>
    </rs-app-bar>
  </rs-app-layout-content>
</rs-app-layout>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/drawer/rs-drawer.scss';

.app-layout {
  > .drawer {
    &.-subtitle.-ink-brown {
      @include rs-drawer-subtitle-ink-color(brown);
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
  .add('背景色を変える', () => `
    <rs-app-layout class="app-layout">
      <rs-drawer class="drawer -fill-beige" opened>
        <rs-drawer-header class="header">
          <rs-drawer-title class="title">タイトル</rs-drawer-title>
          <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
        </rs-drawer-header>
        <rs-drawer-content class="contents"></rs-drawer-content>
      </rs-drawer>
      <rs-app-layout-content class="contents">
        <rs-app-bar class="appbar">
          <rs-app-bar-nav class="nav"></rs-app-bar-nav>
          <rs-app-bar-title>title</rs-app-bar-title>
        </rs-app-bar>
      </rs-app-layout-content>
    </rs-app-layout>
    <h4>背景色を指定した色に変える。</h4>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-drawer-surface-fill-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-app-layout class="app-layout">
  <rs-drawer class="drawer -fill-beige" opened>
    <rs-drawer-header class="header">
      <rs-drawer-title class="title">タイトル</rs-drawer-title>
      <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
    </rs-drawer-header>
    <rs-drawer-content class="contents" />
  </rs-drawer>
  <rs-app-layout-content class="contents">
    <rs-app-bar class="appbar">
      <rs-app-bar-nav class="nav" />
      <rs-app-bar-title>title</rs-app-bar-title>
    </rs-app-bar>
  </rs-app-layout-content>
</rs-app-layout>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/drawer/rs-drawer.scss';

.app-layout {
  > .drawer {
    &.-fill-beige {
      @include rs-drawer-surface-fill-color(beige);
    }
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: コンテナの色の塗りコード <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('モーダルの色を変える', () => `
    <rs-app-layout class="app-layout">
      <rs-drawer class="drawer -modal -fill-beige" opened>
        <rs-drawer-header class="header">
          <rs-drawer-title class="title">タイトル</rs-drawer-title>
          <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
        </rs-drawer-header>
        <rs-drawer-content class="contents"></rs-drawer-content>
      </rs-drawer>
      <rs-app-layout-content class="contents">
        <rs-app-bar class="appbar">
          <rs-app-bar-nav class="nav"></rs-app-bar-nav>
          <rs-app-bar-title>title</rs-app-bar-title>
        </rs-app-bar>
      </rs-app-layout-content>
    </rs-app-lauout>
    <h4>モーダルの色を指定した色に変える。</h4>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-drawer-scrim-fill-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-app-layout class="app-layout">
  <rs-drawer class="drawer -modal -fill-beige" opened>
    <rs-drawer-header class="header">
      <rs-drawer-title class="title">タイトル</rs-drawer-title>
      <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
    </rs-drawer-header>
    <rs-drawer-content class="contents" />
  </rs-drawer>
  <rs-app-layout-content class="contents">
    <rs-app-bar class="appbar">
      <rs-app-bar-nav class="nav" />
      <rs-app-bar-title>title</rs-app-bar-title>
    </rs-app-bar>
  </rs-app-layout-content>
</rs-app-lauout>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/drawer/rs-drawer.scss';

.app-layout {
  > .drawer {
    &.-modal.-fill-beige {
      @include rs-drawer-type(modal);
      @include rs-drawer-scrim-fill-color(beige);
    }
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: モーダルの色を指定 <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('背景色とテキストの色を変える', () => `
    <rs-app-layout class="app-layout">
      <rs-drawer class="drawer -container -orange" opened>
        <rs-drawer-header class="header">
          <rs-drawer-title class="title">タイトル</rs-drawer-title>
          <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
        </rs-drawer-header>
        <rs-drawer-content class="contents"></rs-drawer-content>
      </rs-drawer>
      <rs-app-layout-content class="contents">
        <rs-app-bar class="appbar">
          <rs-app-bar-nav class="nav"></rs-app-bar-nav>
          <rs-app-bar-title>title</rs-app-bar-title>
        </rs-app-bar>
      </rs-app-layout-content>
    </rs-app-layout>
    <h4>背景色とテキストの色を変える。</h4>
    <p>指定した背景色の色を元にテキストの色は自動で調整される。</p>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-drawer-fill-color-accessible($containerColor);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-app-layout class="app-layout">
  <rs-drawer class="drawer -container -orange" opened>
    <rs-drawer-header class="header">
      <rs-drawer-title class="title">タイトル</rs-drawer-title>
      <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
    </rs-drawer-header>
    <rs-drawer-content class="contents" />
  </rs-drawer>
  <rs-app-layout-content class="contents">
    <rs-app-bar class="appbar">
      <rs-app-bar-nav class="nav" />
      <rs-app-bar-title>title</rs-app-bar-title>
    </rs-app-bar>
  </rs-app-layout-content>
</rs-app-layout>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/drawer/rs-drawer.scss';

.app-layout {
  > .drawer {
    &.-container.-orange {
      @include rs-drawer-fill-color-accessible(orange);
    }
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$containerColor: 背景色を指定。</li>
    </ul>
  `)
  .add('線の色を変える', () => `
    <rs-app-layout class="app-layout">
      <rs-drawer class="drawer -line-brown" opened>
        <rs-drawer-header class="header">
          <rs-drawer-title class="title">タイトル</rs-drawer-title>
          <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
        </rs-drawer-header>
        <rs-drawer-content class="contents"></rs-drawer-content>
      </rs-drawer>
      <rs-app-layout-content class="contents">
        <rs-app-bar class="appbar">
          <rs-app-bar-nav class="nav"></rs-app-bar-nav>
          <rs-app-bar-title>title</rs-app-bar-title>
        </rs-app-bar>
      </rs-app-layout-content>
    </rs-app-layout>
    <h4>線の色を指定した色に変える。</h4>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-drawer-border-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-app-layout class="app-layout">
  <rs-drawer class="drawer -line-brown" opened>
    <rs-drawer-header class="header">
      <rs-drawer-title class="title">タイトル</rs-drawer-title>
      <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
    </rs-drawer-header>
    <rs-drawer-content class="contents" />
  </rs-drawer>
  <rs-app-layout-content class="contents">
    <rs-app-bar class="appbar">
      <rs-app-bar-nav class="nav" />
      <rs-app-bar-title>title</rs-app-bar-title>
    </rs-app-bar>
  </rs-app-layout-content>
</rs-app-layout>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/drawer/rs-drawer.scss';

.app-layout {
  > .drawer {
    &.-line-brown {
      @include rs-drawer-border-color(brown);
    }
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: 線の色を指定 <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('ドロワー内の仕切り線の色を変える', () => `
    <rs-app-layout class="app-layout">
      <rs-drawer class="drawer -divider-blue" opened>
        <rs-drawer-header class="header">
          <rs-drawer-title class="title">タイトル</rs-drawer-title>
          <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
          <rs-list>
            <rs-list-item>
              <rs-list-text class="text">テキスト</rs-list-text>
            </rs-list-item>
          </rs-list>
        <rs-list-divider></rs-list-divider>
        </rs-drawer-header>
        <rs-drawer-content class="contents"></rs-drawer-content>
      </rs-drawer>
      <rs-app-layout-content class="contents">
        <rs-app-bar class="appbar">
          <rs-app-bar-nav class="nav"></rs-app-bar-nav>
          <rs-app-bar-title>title</rs-app-bar-title>
        </rs-app-bar>
      </rs-app-layout-content>
    </rs-app-layout>
    <h4>ドロワー内の仕切り線の色を指定した色に変える。</h4>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-drawer-divider-color($color);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-app-layout class="app-layout">
  <rs-drawer class="drawer -divider-blue" opened>
    <rs-drawer-header class="header">
      <rs-drawer-title class="title">タイトル</rs-drawer-title>
      <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
      <rs-list>
        <rs-list-item>
          <rs-list-text class="text">テキスト</rs-list-text>
        </rs-list-item>
      </rs-list>
    <rs-list-divider />
    </rs-drawer-header>
    <rs-drawer-content class="contents" />
  </rs-drawer>
  <rs-app-layout-content class="contents">
    <rs-app-bar class="appbar">
      <rs-app-bar-nav class="nav" />
      <rs-app-bar-title>title</rs-app-bar-title>
    </rs-app-bar>
  </rs-app-layout-content>
</rs-app-layout>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/drawer/rs-drawer.scss';

.app-layout {
  > .drawer {
    &.-divider-blue {
      @include rs-drawer-border-color(blue);
    }
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$color: 線の色を指定 <br> 例）#ee00ce</li>
    </ul>
  `)
  .add('ドロワーの幅を変える', () => `
    <rs-app-layout class="app-layout">
      <rs-drawer class="drawer -width" opened>
        <rs-drawer-header class="header">
          <rs-drawer-title class="title">タイトル</rs-drawer-title>
          <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
        </rs-drawer-header>
        <rs-drawer-content class="contents"></rs-drawer-content>
      </rs-drawer>
      <rs-app-layout-content class="contents">
        <rs-app-bar class="appbar">
          <rs-app-bar-nav class="nav"></rs-app-bar-nav>
          <rs-app-bar-title>title</rs-app-bar-title>
        </rs-app-bar>
      </rs-app-layout-content>
    </rs-app-layout>
    <h4>ドロワーの幅を指定したサイズに変える。</h4>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-drawer-width($width);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-app-layout class="app-layout">
  <rs-drawer class="drawer -width" opened>
    <rs-drawer-header class="header">
      <rs-drawer-title class="title">タイトル</rs-drawer-title>
      <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
    </rs-drawer-header>
    <rs-drawer-content class="contents" />
  </rs-drawer>
  <rs-app-layout-content class="contents">
    <rs-app-bar class="appbar">
      <rs-app-bar-nav class="nav" />
      <rs-app-bar-title>title</rs-app-bar-title>
    </rs-app-bar>
  </rs-app-layout-content>
</rs-app-layout>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import '@rsmdc/drawer/rs-drawer.scss';

.app-layout {
  > .drawer {
    &.-width {
      @include rs-drawer-width(300px);
    }
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$width: 横幅を指定</li>
    </ul>
  `)
  .add('ドロワーの角の丸みを変える', () => `
    <rs-app-layout class="app-layout">
      <rs-drawer class="drawer -roundness" opened>
        <rs-drawer-header class="header">
          <rs-drawer-title class="title">タイトル</rs-drawer-title>
          <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
        </rs-drawer-header>
        <rs-drawer-content class="contents"></rs-drawer-content>
      </rs-drawer>
      <rs-app-layout-content class="contents">
        <rs-app-bar class="appbar">
          <rs-app-bar-nav class="nav"></rs-app-bar-nav>
          <rs-app-bar-title>title</rs-app-bar-title>
        </rs-app-bar>
      </rs-app-layout-content>
    </rs-app-layout>
    <h4>ドロワーの角の丸みを指定したサイズに変える。</h4>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-drawer-item-shape-radius($radius);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-app-layout class="app-layout">
  <rs-drawer class="drawer -roundness" opened>
    <rs-drawer-header class="header">
      <rs-drawer-title class="title">タイトル</rs-drawer-title>
      <rs-drawer-subtitle class="subtitle">サブタイトル</rs-drawer-subtitle>
    </rs-drawer-header>
    <rs-drawer-content class="contents" />
  </rs-drawer>
  <rs-app-layout-content class="contents">
    <rs-app-bar class="appbar">
      <rs-app-bar-nav class="nav" />
      <rs-app-bar-title>title</rs-app-bar-title>
    </rs-app-bar>
  </rs-app-layout-content>
</rs-app-layout>`,
    { lang: 'html' }
  )}
    ${copyCodeBlock(
`@import '@rsmdc/drawer/rs-drawer.scss';

.app-layout {
  > .drawer {
    &.-roundness {
      @include rs-drawer-shape-radius(10px);
    }
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$radius: 角の丸みのサイズを指定</li>
    </ul>
  `)


