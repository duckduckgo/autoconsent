import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cloudynights.com_efw', ['https://www.cloudynights.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
