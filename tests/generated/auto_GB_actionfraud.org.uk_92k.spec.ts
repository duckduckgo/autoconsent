import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_actionfraud.org.uk_92k', ['https://www.actionfraud.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
