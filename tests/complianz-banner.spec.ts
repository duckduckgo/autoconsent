import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'Complianz banner',
    [
        'https://bloodpressureok.com/',
        'https://www.fussball-wm.pro/',
        'https://sportsbrackets.net/2026/05/02/2026-world-cup-san-francisco-schedule/',
    ],
    {},
);
