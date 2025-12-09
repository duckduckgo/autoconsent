import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_certina.com_0lb', ['https://www.certina.com/ch-en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
