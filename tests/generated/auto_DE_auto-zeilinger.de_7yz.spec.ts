import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_auto-zeilinger.de_7yz', ['https://auto-zeilinger.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
