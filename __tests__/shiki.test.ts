import { it, expect } from 'vitest'
import { codeToHtml, transformers } from '../templates/shiki.bundle'

it('code snippet', async () => {
  const snippet = await codeToHtml(
    `
console.log(1 + 1 = 3) // [!code --]
console.log(1 + 1 = 2) // [!code ++]
    `,
    {
      lang: 'ts',
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark'
      },
      defaultColor: false,
      transformers
    }
  )
  expect(snippet).toMatchInlineSnapshot(`
    "<pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212" tabindex="0"><code><span class="line"></span>
    <span class="line diff remove"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> +</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
    <span class="line diff add"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> +</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
    <span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span></code></pre>"
  `)
})
