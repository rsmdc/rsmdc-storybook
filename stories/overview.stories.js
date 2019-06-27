import { storiesOf } from '@storybook/html'
import copyCodeBlock from "@pickra/copy-code-block"

storiesOf('overview|Getting Started', module)
  .add('イントロダクション', () => {
    return `
      <h4>イントロダクション</h4>
      <h5>マテリアルデザイン</h5>
      <p>
        Googleによって作られたデザインシステム。<br>
        どのデバイスでも直感的に操作ができるよう一貫性のあるルールが定義された。
      </p>
      <h5>custom elementsの採用</h5>
      <p>
        custom elementsは、開発者が独自にHTMLタグを定義し、サイト上で利用できるようにする。<br>
        繰り返し利用されるコンポーネントを単純化し、再利用できるので手間を大幅に削減できる。
      </p>
      <h5>mixin</h5>
      <p>
        mixinは、別で定義したスタイルを@includeで何度も呼び出せる。<br>
        関数的な使い方ができるためコードがすっきりし、メンテナンス性も高まる。
      </p>
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