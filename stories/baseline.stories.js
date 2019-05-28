import { storiesOf } from '@storybook/html'
import copyCodeBlock from "@pickra/copy-code-block"

storiesOf('Common|はじめに', module)
  .add('rsmdc概要', () => {
    return `
      <h4>rsmdc概要</h4>
      <p>マテリアルデザイン採用している事、カスタムエレメンツである事を書く</p>
    `
  })
  .add('インストール', () => {
    return `
      <h4>インストール</h4>
      ${copyCodeBlock(
        '$ yarn add @rsmdc/rsmdc',
        { lang: 'shell' }
      )}
      <p>このコンポーネントを使うために、新しい型の HTML 要素た（HTML タグ）の作成が必要です。HTML タグ名は自由に定義出来るし、ダッシュ (-) を含む必要があります。</p>
      <p>例）&lt;x-button> の HTML 要素定義方法は 以下のようになります。</p>
      ${copyCodeBlock(
        'import { Button } from \'@rsmdc/rsmdc\'\n\n' +
        'window.customElements.define(\'x-button\', Button)',
        { lang: 'js' }
      )}
    `
  })
  .add('スタイル適用方法', () => {
    return `
      <h4>スタイル適用方法</h4>
      <p>sassのmixinでスタイルを変える説明</p>
    `
  })
