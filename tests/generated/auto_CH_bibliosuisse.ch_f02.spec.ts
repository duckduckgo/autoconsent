import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bibliosuisse.ch_f02', ['https://www.bibliosuisse.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
