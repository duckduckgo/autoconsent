import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_publicnoticeportal.uk_86c', ['https://publicnoticeportal.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
