import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_carpaintcode.vernicispray.co.uk_9jk', ['https://carpaintcode.vernicispray.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
