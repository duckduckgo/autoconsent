import generateCMPTests from '../playwright/runner';

generateCMPTests('ecbeing', [
    'https://store.kadokawa.co.jp/shop/default.aspx',
    'https://www.iodata.jp/shop/',
    'https://www.fujiya-avic.co.jp/',
]);
