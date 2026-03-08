import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_europe.nflshop.com_qcx', ['https://europe.nflshop.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
