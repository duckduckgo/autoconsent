import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_au.roborock.com_6uk', ['https://au.roborock.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
