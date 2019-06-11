import { storiesOf } from '@storybook/html'
import copyCodeBlock from "@pickra/copy-code-block"

storiesOf('Getting Started', module)
  .add('イントロダクション', () => {
    return `
      <h4>イントロダクション</h4>
      <p>内容：マテリアルデザイン採用、custom elements採用、sassのmixinでスタイル変更</p>
    `
  })
  .add('インストール方法', () => {
    return `
      <h4>インストール方法</h4>
      <p>yarn → define → html → scss</p>
      <p>nuxtでのセットアップ方法も</p>
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