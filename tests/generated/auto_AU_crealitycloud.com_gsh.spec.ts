import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_crealitycloud.com_gsh', ['http://www.crealitycloud.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
