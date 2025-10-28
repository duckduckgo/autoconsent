import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ersatzteilshop.de_ndx', ['https://www.ersatzteilshop.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
