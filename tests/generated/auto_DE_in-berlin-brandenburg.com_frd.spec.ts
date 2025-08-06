import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_in-berlin-brandenburg.com_frd', ['https://www.in-berlin-brandenburg.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
