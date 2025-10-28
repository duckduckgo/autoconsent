import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bnf.nice.org.uk_lxh', ['https://bnf.nice.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
