import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cegeplimoilou.ca_9tg', ['https://www.cegeplimoilou.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
