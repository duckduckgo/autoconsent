import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_app.secure.particuliers.societegenerale.mobi_gjo', ['https://app.secure.particuliers.societegenerale.mobi/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
