import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_audreyschocolates.co.uk_31h', ['https://audreyschocolates.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
