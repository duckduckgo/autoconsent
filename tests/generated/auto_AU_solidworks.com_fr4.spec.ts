import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_solidworks.com_fr4', ['https://www.solidworks.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
