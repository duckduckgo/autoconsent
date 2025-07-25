import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_daikin.de_cge', ['https://www.daikin.de/de_de/privatkunden.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
