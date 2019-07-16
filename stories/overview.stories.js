import { storiesOf } from '@storybook/html'
import copyCodeBlock from "@pickra/copy-code-block"

import './css/style.scss'

storiesOf('overview|Getting Started', module)
  .add('イントロダクション', () => `
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
  `)
  .add('インストール方法', () => `
    <h4>インストール方法</h4>
    <p>nuxtでの利用を例に挙げ説明します。</p>
    <h5>1. パッケージのインストール</h5>
    ${copyCodeBlock(
`$ yarn add @rsmdc/rsmdc
$ yarn add --dev node-sass sass-loader`,
      { lang: 'shell' }
    )}
    <p>yarnもしくはnpmで<code>@rsmdc/rsmdc</code>をインストールします。<br>
      また<code>node-sass</code>・<code>sass-loader</code>も使用するためインストールします。
    </p>
    <h5>2. plugins/custom-elements.client.jsの作成</h5>
    <p>plugins/custom-elements.client.js</p>
    ${copyCodeBlock(
`// Select以外のコンポーネントの場合
import { Button } from '@rsmdc/rsmdc'
window.customElements.define('rs-button', Button)

// Selectコンポーネントの場合
const customElement = require('@rsmdc/select/loader')
customElement.defineCustomElements(window)
`,
      { lang: 'js' }
    )}
    <p>custom elementsを定義します。(名前が<code>rs-</code>で固定になったため、呼び出し方法を変える可能性あり)<br>
      clientでのみ呼び出します。
    </p>
    <h5>3. nuxt.config.jsの編集</h5>
    <p>nuxt.config.js</p>
    ${copyCodeBlock(
`import path from 'path'

export default {

  ...

  vue: {
    config: {
      ignoredElements: [/^rs-/]
    }
  },
      
  ...
  
  plugins: ['~plugins/custom-elements.client.js'],

  ...

  build: {
    loaders: {
      scss: {
        includePaths: [path.resolve(__dirname, 'node_modules')],
        data: \`@import '@rsmdc/button/rs-button.scss'; \`
      }
    }
  }
}`,
      { lang: 'js' }
    )}
    <p><code>vue.config.ignoredElements</code><br>
    Vueに登録したプレフィックスから始まるカスタム要素、つまりcustom elementsを無視するよう伝えます。</p>
    <p><code>plugins</code><br>
    作成したpluginパスを記述します。</p>
    <p><code>build.loaders.scss.includePaths</code><br>
    node_module以下のscssファイルをimportするように設定します。</p>
    <p><code>build.loaders.scss.data</code><br>
    必須の設定ではありませんが、ここに各scssファイルを記述することで、変数・mixinがグローバルに使用できます。</p>
    <h5>4. vueファイルの編集</h5>
    <p>example.vue<p>
    
    ${copyCodeBlock(
`<template>
  <rs-button class="my-button">送信</rs-button>
</template>
<style lang="scss">
  .my-button {
    @include rs-button-type(outlined);
  }
</scss>
`,
      { lang: 'html' }
    )}
    <p>下記のように表示されます。</p>
    <rs-button class="outlined">送信</rs-button>
  `)
  .add('v-model-3利用方法', () => `
    <h4>v-model-3利用方法</h4>
    <p>rsmdcをVueやNuxtで利用し、且つ<code>v-model</code>ディレクティブを使用したい場合、<br>
    <code>v-model</code>の代わりに<code>v-model-3</code>を利用してください。
    </p>
    <p><code>v-model-3</code>はrsmdc用の<code>v-model</code>です。<br>
    現状Vueの<code>v-model</code>はcustom elementsに対応していません。<br>
    <code>v-model-3</code>を使うことで<code>v-model</code>と同じ機能が実現できます。<br>
    (Vue3系で<code>v-model</code>がcustom elementsに対応するようです。Vue3以降は本家の<code>v-model</code>を使ってください)
    </p>

    <h5>1. plugins/custom-directive.client.jsの作成</h5>
    <p>plugins/custom-directive.client.js</p>
    ${copyCodeBlock(
`import Vue from 'vue'
import { VModel3 } from '@rsmdc/rsmdc/v-model3'

Vue.directive('model3', VModel3)
`,
      { lang: 'js' }
    )}
    <p><code>Vue.directive</code>に<code>VModel3</code>を追加します。</p>

    <h5>2. nuxt.config.jsの編集</h5>
    <p>nuxt.config.js</p>
    ${copyCodeBlock(
`export default {

  ...

  plugins: [
    '~/plugins/custom-directive'
  ],

  ...

}
`,
      { lang: 'js' }
    )}
    <p><code>plugins</code>に作成したファイルを追加します。</p>

    <h5>3. vueファイルの編集</h5>
    <p>example.vue</p>
    ${copyCodeBlock(
`<template>
  <div>
    <!-- radio -->
    <rs-radio id="male" label="男" name="sex value="1" type="radio" v-model-3="sex" />
    <rs-radio id="female" label="女" name="sex value="2" type="radio" v-model-3="sex" />

    <!-- checkbox -->
    <x-checkbox id="java" label="java" value="1" type="checkbox" v-model-3="languages" />
    <x-checkbox id="ruby" label="ruby" value="2" type="checkbox" v-model-3="languages" />
    <x-checkbox id="php" label="php" value="3" type="checkbox" v-model-3="languages" />
  
    <!-- textfield・textarea -->
    <rs-textfield label="メールアドレス" :value="mail" type="text" v-model-3="mail"/>
    <rs-textarea label="メモ" :value="memo" type="text" v-model-3="memo"/>

    <!-- select -->
    <rs-select label="趣味" type="select" v-model-3="hobby">
      <option value="1">料理</option>
      <option value="2">散歩</option>
      <option value="3">読書</option> 
    </rs-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        sex: '',
        languages:[],
        mail: '',
        memo: '',
        hobby: ''
      }
    }
  }
</script>
`,
      { lang: 'html' }
    )}
    <p><code>type</code>でフォームタイプを指定し、<code>v-model-3</code>にバインディングさせる値を指定することで<br>
    双方向バインディングが可能になります。</p>
    <p>下記にrsmdcで<code>v-model</code>の使用を想定している要素と、使用する場合に指定するタイプをまとめています。</p>
    <table>
      <tr>
        <th>要素名</th>
        <th>指定するタイプ</th>
      </tr>
      <tr>
        <td><code>rs-radio</code></td>
        <td>radio</td>
      </tr>
      <tr>
        <td><code>rs-checkbox</code></td>
        <td>checkbox</td>
      </tr>
      <tr>
        <td><code>rs-textfield</code></td>
        <td>
          <ul>
            <li>text</li>
            <li>date</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td><code>rs-textarea</code></td>
        <td>text</td>
      </tr>
      <tr>
        <td><code>rs-select</code></td>
        <td>select</td>
      </tr>
    </table>
  `)