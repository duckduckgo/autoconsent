import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dealershop.intersteel.nl_klx', ['https://dealershop.intersteel.nl/en_US/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
