import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_folien-zentrum.com_33l', ['https://folien-zentrum.com/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
