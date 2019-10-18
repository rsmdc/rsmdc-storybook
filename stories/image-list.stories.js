import { storiesOf } from '@storybook/html'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'
const dialog = require('@rsmdc/dialog/loader')

import './css/style.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

dialog.defineCustomElements(window)

storiesOf('Components|Image list', module)
  .addDecorator(withLinks)
  .add('概要', () => `
    <h4>Image List</h4>
    <p>イメージリストは、画像のコレクションが整理されたグリッドで表示される。</p>
    参考: <a href="https://material.io/components/image-lists/">https://material.io/components/image-lists/</a>

    <p>ダイアログのタイプ</p>
    <ul>
      <li>normal（デフォルト）</li>
      <li>masonry：コンテナの高さを各画像のサイズの高さで表示</li>
    </ul>
  `)
  .add('使用方法', () => `
    <h4>使用方法</h4>

    ${copyCodeBlock(
`<rs-image-list class="image-list">
  <rs-image-list-item class="item">
    <rs-image-list-media class="image" src="https://cdn.goat.at/blog/user/3oozjY55/contents/23390302450634/public/image/277695612708954112.jpg" alt="風景" />
    <rs-image-list-label class="label">テキスト</rs-image-list-label>
  </rs-image-list-item>
  <rs-image-list-item class="item">
    <rs-image-list-media class="image" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg" alt="風景" />
    <rs-image-list-label class="label">テキスト</rs-image-list-label>
  </rs-image-list-item>
  <rs-image-list-item class="item">
    <rs-image-list-media class="image" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/2x3/2.jpg" alt="風景" />
    <rs-image-list-label class="label">テキスト</rs-image-list-label>
  </rs-image-list-item>
  <rs-image-list-item class="item">
    <rs-image-list-media class="image" src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/3.jpg" alt="サボテン" />
    <rs-image-list-label class="label">テキスト</rs-image-list-label>
  </rs-image-list-item>
  <rs-image-list-item class="item">
    <rs-image-list-media class="image" src="https://cdn.goat.at/blog/user/3oozjY55/contents/23390302450634/public/image/277695612708954112.jpg" alt="花" />
    <rs-image-list-label class="label">テキスト</rs-image-list-label>
  </rs-image-list-item>
</rs-image-list>
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
        <td>rs-image-list</td>
        <td>イメージリスト本体を表示します</td>
        <td>
          <ul>
            <li>rs-image-list-media</li>
            <li>rs-image-list-label</li>
          </ul>
        </td>
        <td>-</td>
      </tr>
      <tr>
        <td>rs-image-list-media</td>
        <td>画像を表示します</td>
        <td>テキスト</td>
        <td>テキストは画像のタイトルを示す</td>
      </tr>
      <tr>
        <td>rs-image-list-label</td>
        <td>テキスト部分を表示します</td>
        <td>
          <ul>  
            <li>rs-button</li>
            <li>テキスト</li>
          </ul>
        </td>
        <td>-</td>
      </tr>
    </table>
  `)