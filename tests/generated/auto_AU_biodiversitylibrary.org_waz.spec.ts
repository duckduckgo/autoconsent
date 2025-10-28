import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_biodiversitylibrary.org_waz', ['https://www.biodiversitylibrary.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
