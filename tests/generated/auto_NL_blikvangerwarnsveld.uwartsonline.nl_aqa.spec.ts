import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_blikvangerwarnsveld.uwartsonline.nl_aqa', ['https://blikvangerwarnsveld.uwartsonline.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
