import generateCMPTests from '../playwright/runner';

generateCMPTests('hmgroup-turbocookie', [
    'https://www2.hm.com/ja_jp/productpage.1374063001.html',
    'https://www2.hm.com/en_gb/index.html',
    'https://www.cos.com/en-gb',
]);
