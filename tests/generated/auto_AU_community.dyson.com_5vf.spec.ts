import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_community.dyson.com_5vf', ['https://community.dyson.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
