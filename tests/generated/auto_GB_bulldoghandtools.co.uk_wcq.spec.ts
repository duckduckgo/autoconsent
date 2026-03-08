import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bulldoghandtools.co.uk_wcq', ['https://bulldoghandtools.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
