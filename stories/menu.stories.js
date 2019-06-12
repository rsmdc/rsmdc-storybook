import { storiesOf } from '@storybook/html'
import { Menu } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'
import './css/menu.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

window.customElements.define('x-menu', Menu)

storiesOf('Components|Menu', module)
  .addDecorator(withLinks)
  .add('概要', () => {
    return `
      <h4>Menu</h4>
      <p>ユーザーがボタンやアクションを操作した時に表示される。</p>
      <p>
        参考:
        <a href="https://material.io/design/components/menus.html">
          https://material.io/design/components/menus.html
        </a>
      </p>
    `
  })
  .add('使用方法', () => {
    return `
      <h4>使用方法</h4>
      <x-menu class="my-menu" opened>
        <x-list class="list">
          aiueo
        </x-list>
      </x-menu>
      <br><br><br>
      ${copyCodeBlock(      
        '<x-menu class="my-menu" opened>\n' +
        '   <x-list class="list">\n' +
        '       ...\n' +
        '   </x-list>\n' +
        '</x-menu>\n',
        { lang: 'html' }
      )}
      <h4>HTML要素</h4>
      <p>custom elementsを<code>x</code>のプレフィックスをつけて定義した前提です。<br>
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
          <td>x-menu</td>
          <td>メニュー本体を表示します</td>
          <td><code>x-list</code></td>
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
          <td>メニューを表示状態にします</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
      </table>
    `
  })
storiesOf('Components|Menu/スタイルのカスタマイズ', module)
  .add('テキストの色を変える', () => {
    return `
      <p>テキストの色を指定した色に変える。</p>
      <x-menu class="my-menu -ink-color"" opened>
        <x-list>
          <list-item disabled>
            <list-text>aiueo</list-text>
          </list-item>
        </x-list>
      </x-menu>
      <br><br>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(  
        '@include rs-menu-surface-ink-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(  
        '<x-menu class="my-menu -ink-color" opened>\n' +
        '   <x-list class="list">\n' +
        '      <list-item disabled>\n' +
        '          <list-text>テキスト</list-text>\n' +
        '      </list-item>\n' +
        '   </x-list>\n' +
        '</x-menu>',
        { lang: 'html' }
      )}
      ${copyCodeBlock(  
        '@import \'@rsmdc/menu/rs-menu.scss\';\n\n' +
        '.my-menu {\n' +
        '   &.-ink-color {\n' +
        '      @include rs-menu-surface-ink-color(brown);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>
          $color: インクの色コード <br> 例）#ee00ce <br>
          ※テキストの色を変える際は、x-listの中にさらに子要素を用意する必要がある。
        </li>
      </ul>
    `
  })
  .add('背景色を変える', () => {
    return `
      <p>背景色を指定した色に変える。</p>
      <x-menu class="my-menu -fill-color" opened>
        <x-list class="list">
          aiueo
        </x-listt>
      </x-menu>
      <br><br>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(  
        '@include rs-menu-surface-fill-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(  
        '<x-menu class="my-menu -fill-color" opened>\n' +
        '   <x-list class="list">\n' +
        '      aiueo\n' +
        '   </x-list>\n' +
        '</x-menu>',
        { lang: 'html' }
      )}
      ${copyCodeBlock(  
        '@import \'@rsmdc/menu/rs-menu.scss\';\n\n' +
        '.my-menu {\n' +
        '   &.-fill-color {\n' +
        '      @include rs-menu-surface-fill-color(gray);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>$color: コンテナの色の塗りコード <br> 例）#ee00ce</li>
      </ul>
    `
  })
  .add('メニューの幅を変える', () => {
    return `
      <p>メニューの幅を指定したサイズに変更する。</p>
      <x-menu class="my-menu -width" opened>
        <x-list class="list">
          aiueo
        </x-list>
      </x-menu>
      <br><br>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(  
        '@include rs-menu-width($width);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(  
        '<x-menu class="my-menu -width" opened>\n' +
        '   <x-list class="list">\n' +
        '      aiueo\n' +
        '   </x-list>\n' +
        '</x-menu>',
        { lang: 'html' }
      )}
      ${copyCodeBlock(  
        '@import \'@rsmdc/menu/rs-menu.scss\';\n\n' +
        '.my-menu {\n' +
        '   &.-width {\n' +
        '      @include rs-menu-width(200px);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>$width: 横幅のサイズを指定</li>
      </ul>
    `
  })
  .add('メニューの角の丸みを変える', () => {
    return `
      <p>メニューの角の丸みを指定したサイズに変える。</p>
      <x-menu class="my-menu -shape-radius" opened>
        <x-list class="list">
          aiueo
        </x-list>
      </x-menu>
      <br><br>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(  
        '@include rs-menu-surface-shape-radius($radius);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(  
        '<x-menu class="my-menu -shape-radius" opened>\n' +
        '   <x-list class="list">\n' +
        '      aiueo\n' +
        '   </x-list>\n' +
        '</x-menu>',
        { lang: 'html' }
      )}
      ${copyCodeBlock(  
        '@import \'@rsmdc/menu/rs-menu.scss\';\n\n' +
        '.my-menu {\n' +
        '   &.-shape-radius {\n' +
        '      @include rs-menu-surface-shape-radius(10px);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>$radius: 角の丸みのサイズを指定</li>
      </ul>
    `
  })
