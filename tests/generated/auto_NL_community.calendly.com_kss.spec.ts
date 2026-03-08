import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_community.calendly.com_kss', ['https://community.calendly.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
