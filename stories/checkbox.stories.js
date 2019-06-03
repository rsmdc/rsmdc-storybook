import { storiesOf } from '@storybook/html'
import { Checkbox } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'

window.customElements.define('x-checkbox', Checkbox)

storiesOf('Components|Checkbox', module)
  .addDecorator(withLinks)
  .add('概要', () => `

  `)
  .add('使い方', () => `
    <h4>使い方</h4>
    ${copyCodeBlock(
      '<x-checkbox class="checkbox">check1<x-checkbox>',
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
      <td>x-checkbox</td>
      <td>チェックボックスを表示します</td>
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
        <td>id</td>
        <td>チェックボックスとラベルを紐付けます</td>
        <td>String</td>
        <td>-</td>
      </tr>
      <tr>
        <td>checked</td>
        <td>チェックボックスを選択された状態にします</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>チェックボックスを無効にします</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
      <tr>
        <td>indeterminate</td>
        <td>選択・未選択がされていない状態を示します</td>
        <td>Boolean</td>
        <td>-</td>
      </tr>
    </table>
  `)

storiesOf('Components|Checkbox/スタイルのカスタマイズ', module)
  .add('チェックマークの色を変える', () => `
    @include rs-checkbox-checkmark-ink-color($color);
  `)
  .add('チェックボックスのリップルの色を変える', () => `
    @include rs-checkbox-focus-indicator-color($color);
  
  `)
  .add('選択状態のチェックボックスの枠線と内部の色を変える(修正予定)', () => `
    @include rs-checkbox-checked-container-color($borderColor, $containerColor);
  `)
  .add('未選択状態のチェックボックスの枠線と内部の色を変える(修正予定)', () => `
    @include rs-checkbox-unchecked-container-color($borderColor, $containerColor);
  `)
  .add('チェックボックスのラベルの位置を設定する', () => `
    @include rs-chechbox-label-position($position);<br>
    default位置はright
  `)

