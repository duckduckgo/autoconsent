import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_elibrary.duncker-humblot.com_77l', ['https://elibrary.duncker-humblot.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
