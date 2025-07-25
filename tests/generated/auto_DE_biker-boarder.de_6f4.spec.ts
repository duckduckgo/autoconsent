import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_biker-boarder.de_6f4', ['https://www.biker-boarder.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
