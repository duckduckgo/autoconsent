import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hampshirechronicle.co.uk_zsa', ['https://www.hampshirechronicle.co.uk/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
