import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tvgenial.online_qes', ['https://tvgenial.online/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
