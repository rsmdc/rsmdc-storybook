import { storiesOf } from '@storybook/html'
import { TabItem, TabBar } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'

window.customElements.define('tab-item', TabItem)
window.customElements.define('x-tab-bar', TabBar)

storiesOf('Components|Tabs', module)
  .addDecorator(withLinks)
  .add('概要', () => `


  `)
  .add('使い方', () => `
    ${copyCodeBlock(
      '<x-tab-bar class="tab-bar">\n' +
      '   <tab-item class="tab" activated><tab-item>\n' +
      '   <tab-item class="tab"><tab-item>\n' +
      '   <tab-item class="tab"><tab-item>\n' +
      '</x-tab-bar>\n',
      { lang: 'html' }
    )}
    <h4>HTML要素</h4>
    <p>custom elementsを<code>x</code>と<code>tab</code>のプレフィックスをつけて定義した前提です。<br>
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
        <td>x-tab-bar</td>
        <td>タブバー本体を表示します</td>
        <td><code>tab-item</code></td>
        <td>-</td>
      </tr>
      <tr>
        <td>x-tab-bar</td>
        <td>タブを表示します</td>
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
        <td>activated</td>
        <td>タブを活性化状態にします</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
    </table>
  `)

storiesOf('Components|Tabs/スタイルのカスタマイズ', module)
  .add('テキストの色を変える', () => `
    @include rs-tab-ink-color($color);
  `)
  .add('リップルの色を変える', () => `
    @include rs-tab-states-color($color);
  `)
  .add('タブの下線の色を変える', () => `
    @include rs-tab-indicator-color($color);
  `)
  .add('タブの下線の太さを変える', () => `
    @include rs-tab-indicator-height($height);
  `)
  .add('タブの下線幅をテキスト幅に合わせる', () => `
    @include rs-tab-indicator-width-fixed-contents;
  `)
  .add('タブバーの幅を変える', () => `
    @include rs-tab-bar-width($width);
  `)
  .add('タブ幅を変える', () => `
    @include rs-tab-fixed-width($width);<br>
    タブ幅が全て固定になる
  `)
  .add('タブ全体の位置を変える', () => `
    @include rs-tab-bar-position($position);<br>
    defaultはalign-start。align-endとalign-centerがある
  `)
  .add('アイコンをつける', () => `
    @include rs-tab-icon-image($url);
  `)
  .add('アイコンの位置を変える', () => `
    @include rs-tab-icon-position($position);<br>
    defaultはleft、rightとcenterがある。アイコンのみの時は不要。
  `)
