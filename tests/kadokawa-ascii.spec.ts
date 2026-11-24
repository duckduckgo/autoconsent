import generateCMPTests from '../playwright/runner';

generateCMPTests('kadokawa-ascii', ['https://weekly.ascii.jp/', 'https://mobileascii.jp/'], {
    testOptIn: false,
});
