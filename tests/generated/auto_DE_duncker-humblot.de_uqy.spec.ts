import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_duncker-humblot.de_uqy', ['https://www.duncker-humblot.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
