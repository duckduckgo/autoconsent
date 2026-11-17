import generateCMPTests from '../playwright/runner';

generateCMPTests('bigid', [
    'https://www.muchloved.com/',
    'https://www.remitly.com/',
    'https://www.zs.com/',
    'https://www.dexus.com/', // no reject button on the first layer
]);

// notice-only layout with just "Accept all" and a close icon; the site is only reachable from the US
generateCMPTests('bigid', ['https://www.meijer.com/'], {
    onlyRegions: ['US'],
    testSelfTest: false,
});
