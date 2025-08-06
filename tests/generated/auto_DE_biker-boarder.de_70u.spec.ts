import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_biker-boarder.de_70u', ['https://www.biker-boarder.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
