import generateCMPTests from '../playwright/runner';

generateCMPTests('buyee-connect', ['https://crosset.onward.co.jp/', 'https://creema.jp/', 'https://buyma.com/', 'https://locondo.jp/'], {
    skipRegions: ['US'],
});
