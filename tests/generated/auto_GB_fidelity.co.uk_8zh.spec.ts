import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fidelity.co.uk_8zh', ['https://www.fidelity.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
