import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_in-berlin-brandenburg.com_imd', ['https://www.in-berlin-brandenburg.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
