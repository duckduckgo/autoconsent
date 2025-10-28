import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_journals.openedition.org_z6k', ['https://journals.openedition.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
