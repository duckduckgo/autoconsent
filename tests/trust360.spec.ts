import generateCMPTests from '../playwright/runner';

generateCMPTests('trust360', ['https://www.sompo-japan.co.jp/webloan/', 'https://wedding.fujiyahotel.jp/'], {
    testOptIn: false,
    testSelfTest: false,
});
