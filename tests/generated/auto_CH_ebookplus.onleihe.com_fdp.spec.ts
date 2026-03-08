import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ebookplus.onleihe.com_fdp', ['https://ebookplus.onleihe.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
