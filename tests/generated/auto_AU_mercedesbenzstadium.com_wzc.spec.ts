import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_mercedesbenzstadium.com_wzc', ['https://www.mercedesbenzstadium.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
