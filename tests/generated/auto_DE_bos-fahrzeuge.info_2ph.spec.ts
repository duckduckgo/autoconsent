import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bos-fahrzeuge.info_2ph', ['https://bos-fahrzeuge.info/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
