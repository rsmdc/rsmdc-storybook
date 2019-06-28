import { storiesOf } from '@storybook/html'
import { Menu } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'
import './css/menu.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

window.customElements.define('rs-menu', Menu)

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
<<<<<<< Updated upstream
      <div class="menu-area">
        <x-menu class="my-menu" opened>
          <x-list class="list">
            <list-item>
              <list-text>aiueo</list-text>
            </list-item>
          </x-list>
        </x-menu>
      </div>
      ${copyCodeBlock(      
        '<x-menu class="my-menu" opened>\n' +
        '   <x-list class="list">\n' +
        '      <list-item>\n' +
        '         <list-text>...</list-text>\n' +
        '      </list-item>\n' +
        '   </x-list>\n' +
        '</x-menu>\n',
=======
      <div class="result">
        <rs-menu class="my-menu" opened>
          <rs-list class="list">
            <list-item>
              <list-text>テキスト</list-text>
            </list-item>
            <list-item>
              <list-text>テキスト</list-text>
            </list-item>
          </rs-list>
        </rs-menu>
      </div>
      ${copyCodeBlock(      
        '<rs-menu class="my-menu" opened>\n' +
        '   <rs-list class="list">\n' +
        '       <list-item>\n' +
        '           <list-text>テキスト<list-text>\n' +
        '       </list-item>\n' +
        '       <list-item>\n' +
        '           <list-text>テキスト<list-text>\n' +
        '       </list-item>\n' +
        '   </rs-list>\n' +
        '</rs-menu>\n',
>>>>>>> Stashed changes
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
          <td>rs-menu</td>
          <td>メニュー本体を表示します</td>
          <td><code>rs-list</code></td>
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
<<<<<<< Updated upstream
      <div class="menu-area">
        <x-menu class="my-menu -ink-color"" opened>
          <x-list>
            <list-item>
              <list-text>aiueo</list-text>
            </list-item>
          </x-list>
        </x-menu>
=======
      <div class="result">
        <rs-menu class="my-menu -ink-color"" opened>
          <rs-list>
            <list-item>
              <list-text>テキスト</list-text>
            </list-item>
            <list-item>
              <list-text>テキスト</list-text>
            </list-item>
          </rs-list>
        </rs-menu>
>>>>>>> Stashed changes
      </div>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(  
        '@include rs-menu-surface-ink-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(  
        '<rs-menu class="my-menu -ink-color" opened>\n' +
        '   <rs-list class="list">\n' +
        '      <list-item>\n' +
        '          <list-text>aiueo</list-text>\n' +
        '      </list-item>\n' +
        '   </rs-list>\n' +
        '</rs-menu>',
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
          $color: インクの色コード <br> 例）#ee00ce
        </li>
      </ul>
    `
  })
  .add('背景色を変える', () => {
    return `
      <p>背景色を指定した色に変える。</p>
<<<<<<< Updated upstream
      <div class="menu-area">
        <x-menu class="my-menu -fill-color" opened>
          <x-list class="list">
            <list-item>
              <list-text>aiueo</list-text>
            </list-item>
          </x-listt>
        </x-menu>
=======
      <div class="result">
        <rs-menu class="my-menu -fill-color" opened>
          <rs-list>
            <list-item>
              <list-text>テキスト</list-text>
            </list-item>
            <list-item>
              <list-text>テキスト</list-text>
            </list-item>
          </rs-list>
        </rs-menu>
>>>>>>> Stashed changes
      </div>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(  
        '@include rs-menu-surface-fill-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
<<<<<<< Updated upstream
      ${copyCodeBlock(
        '<x-menu class="my-menu -fill-color" opened>\n' +
        '   <x-list class="list">\n' +
=======
      ${copyCodeBlock(  
        '<rs-menu class="my-menu -fill-color" opened>\n' +
        '   <rs-list class="list">\n' +
>>>>>>> Stashed changes
        '      <list-item>\n' +
        '         <list-text>aiueo</list-text>\n' +
        '      </list-item>\n' +
        '   </rs-list>\n' +
        '</rs-menu>',
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
<<<<<<< Updated upstream
      <div class="menu-area">
      <x-menu class="my-menu -width" opened>
        <x-list class="list">
          <list-item>
            <list-text>aiueo</list-text>
          </list-item>
        </x-list>
      </x-menu>
=======
      <div class="result">
        <rs-menu class="my-menu -width" opened>
          <rs-list>
            <list-item>
              <list-text>テキスト</list-text>
            </list-item>
            <list-item>
              <list-text>テキスト</list-text>
            </list-item>
          </rs-list>
        </rs-menu>
>>>>>>> Stashed changes
      </div>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(  
        '@include rs-menu-width($width);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
<<<<<<< Updated upstream
      ${copyCodeBlock(
        '<x-menu class="my-menu -width" opened>\n' +
        '   <x-list class="list">\n' +
=======
      ${copyCodeBlock(  
        '<rs-menu class="my-menu -width" opened>\n' +
        '   <rs-list class="list">\n' +
>>>>>>> Stashed changes
        '      <list-item>\n' +
        '         <list-text>aiueo</list-text>\n' +
        '      </list-item>\n' +
        '   </rs-list>\n' +
        '</rs-menu>',
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
<<<<<<< Updated upstream
      <div class="menu-area">
        <x-menu class="my-menu -shape-radius" opened>
          <x-list class="list">
            <list-item>
              <list-text>aiueo</list-text>
            </list-item>
          </x-list>
        </x-menu>
      </div>
      <h4>使用するmixin</h4>
=======
      <div class="result">
        <rs-menu class="my-menu -shape-radius" opened>
          <rs-list>
            <list-item>
              <list-text>テキスト</list-text>
            </list-item>
            <list-item>
              <list-text>テキスト</list-text>
            </list-item>
          </rs-list>
        </rs-menu>
      </div>
>>>>>>> Stashed changes
      ${copyCodeBlock(  
        '@include rs-menu-surface-shape-radius($radius);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
<<<<<<< Updated upstream
      ${copyCodeBlock(
        '<x-menu class="my-menu -shape-radius" opened>\n' +
        '   <x-list class="list">\n' +
=======
      ${copyCodeBlock(  
        '<rs-menu class="my-menu -shape-radius" opened>\n' +
        '   <rs-list class="list">\n' +
>>>>>>> Stashed changes
        '      <list-item>\n' +
        '         <list-text>aiueo</list-text>\n' +
        '      </list-item>\n' +
        '   </rs-list>\n' +
        '</rs-menu>',
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
