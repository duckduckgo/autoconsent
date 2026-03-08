import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_colonelsaab.co.uk_anu', ['https://colonelsaab.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
