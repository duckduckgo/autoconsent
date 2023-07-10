import { test, expect } from "@playwright/test";
import { click, elementSelector, querySelectorChain, querySingleReplySelector } from "../lib/rule-executors";

const mockPage = `<!DOCTYPE html>
<html>
  <head><title>Rule test page</title></head>
  <body>
    <h1>Hello test</h1>
    <div id="first"><button id="test">0</button></div>
    <div id="second"><button>0</button></div>
  </body>
</html>`

function buildRuleEvalString(ruleFn: string, args: any[]) {
  // console.log(`(${ruleFn})(${args.map(s => JSON.stringify(s)).join(',')})`)
  return `(() => {
    const _config = { enableLogs: false };
    const querySelectorChain = ${querySelectorChain.toString()};
    const querySingleReplySelector = ${querySingleReplySelector.toString()};
    const elementSelector = ${elementSelector.toString()};
    return (${ruleFn})(${args.map(s => JSON.stringify(s)).join(',')})
  })()`
}

async function getButtonClickCount(page, id) {
  return await page.evaluate((id) => parseInt(document.querySelector(`#${id} > button`)?.innerHTML || '0', 10), id)
}

test.beforeEach(async ({ page }) => {
  await page.setContent(mockPage);
  // set up a click counter on the buttons
  await page.evaluate(() => {
    document.querySelectorAll('button').forEach(el => el.addEventListener('click', () => el.innerText = JSON.stringify(parseInt(el.innerText, 10) + 1)))
  })
})

test.describe("click", () => {
  test("click on button", async ({ page }) => {
    expect(await page.evaluate(buildRuleEvalString(click.toString(), ['#test']))).toBe(true);
    expect(await getButtonClickCount(page, 'first')).toEqual(1)
  });

  test('click all', async ({page}) => {
    expect(await page.evaluate(buildRuleEvalString(click.toString(), ['button', true]))).toBe(true);
    expect(await getButtonClickCount(page, 'first')).toEqual(1)
    expect(await getButtonClickCount(page, 'second')).toEqual(1)
  })

  test('click single with multiple matches', async ({page}) => {
    expect(await page.evaluate(buildRuleEvalString(click.toString(), ['button']))).toBe(true);
    expect(await getButtonClickCount(page, 'first')).toEqual(1)
    expect(await getButtonClickCount(page, 'second')).toEqual(0)
  })

  test('chained selector', async ({ page }) => {
    expect(await page.evaluate(buildRuleEvalString(click.toString(), [['#second', 'button']]))).toBe(true);
    expect(await getButtonClickCount(page, 'first')).toEqual(0)
    expect(await getButtonClickCount(page, 'second')).toEqual(1)
  })

  test('xpath selector', async ({ page }) => {
    expect(await page.evaluate(buildRuleEvalString(click.toString(), ['xpath///*[@id="second"]/button']))).toBe(true);
    expect(await page.evaluate(() => document.querySelector('#first > button')?.innerHTML)).toEqual('0')
    expect(await page.evaluate(() => document.querySelector('#second > button')?.innerHTML)).toEqual('1')
  })

  test('click open shadow dom element', async ({ page}) => {
    const shadowRoot = await page.evaluateHandle(() => {
      const shadowDiv = document.createElement('div')
      shadowDiv.id = 'shadow'
      document.body.appendChild(shadowDiv)
      const shadow = shadowDiv.attachShadow({ mode: 'open' })
      const shadowButton = document.createElement('button')
      shadowButton.innerText = '0'
      shadow.appendChild(shadowButton)
      shadowButton.addEventListener('click', () => shadowButton.innerText = JSON.stringify(parseInt(shadowButton.innerText, 10) + 1))
      return shadow
    })
    expect(await page.evaluate(buildRuleEvalString(click.toString(), [['#shadow', 'button']]))).toBe(true)
    expect(await page.evaluate(() => document.querySelector('#first > button')?.innerHTML)).toEqual('0')
    expect(await page.evaluate(() => document.querySelector('#second > button')?.innerHTML)).toEqual('0')
    expect(await page.evaluate((shadow) => shadow.querySelector('button')?.innerHTML || '0', shadowRoot)).toEqual('1')
  })
});
