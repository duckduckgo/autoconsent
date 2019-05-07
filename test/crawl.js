import { html, render } from '../node_modules/lit-html/lit-html.js';
import sitesToTest from './test-sites.js';

// const testCases = sitesToTest.reduce((cases, url) => ({
//     ...cases,
//     [url]: {},
// }), {});
const testCases = {};
console.log(testCases);

(async () => {
    const { test } = await browser.runtime.getBackgroundPage();
    const saved = await browser.storage.local.get();
    Object.keys(saved).forEach((url) => {
        try {
            testCases[url] = JSON.parse(saved[url]);
        } catch (e) {
            console.warn(`Error loading result for ${url}`, e, saved[url]);
            browser.storage.local.remove(url);
        }
    });

    const rowTemplate = (url, result) => {
        const onClick = {
            async handleEvent() {
                const res = await test(url);
                testCases[url] = res;
                browser.storage.local.set({ [url]: JSON.stringify(res) });
                console.log('result', url, res);
                renderResults();
            }
        };
        const failed = !result.reconsent
            || result.reconsentFailure
            || result.reconsentTest == false;
        return html`
            <tr class="${failed ? 'failed' : ''}">
                <td><a @click=${onClick}>Test</a></td>
                <td>${url}</td>
                <td>${result.reconsent || 'none'}</td>
                <td>${result.reconsentHidden || ''}</td>
                <td>${result.reconsentCMPShown ? 'Yes' : 'No'}</td>
                <td>${result.reconsentTest ? 'PASS' : result.reconsentTest === undefined ? 'NOT RUN' : 'FAILED'}</td>
                <td>${result.reconsentFailure || ''}</td>
                <td>${result.screenshot ? html`<img src="${result.screenshot}" width=400 />` : ''}</td>
            </tr>`;
    }
    const tableTemplate = (tests) => html`
        ${Object.keys(tests).map(url => rowTemplate(url, tests[url]))}
    `;
    const renderResults = () => {
        const table = document.querySelector('tbody');
        render(tableTemplate(testCases), table);
    }

    const testCaseButtons = Object.keys(sitesToTest).map((category) => {
        const addTestCases = {
            handleEvent() {
                sitesToTest[category].forEach((site) => {
                    testCases[site] = {};
                });
                renderResults();
            }
        };
        return html`<button class="button" @click=${addTestCases}>${category}</button>`;
    });
    render(testCaseButtons, document.querySelector('#testCases'));

    renderResults();
})();
