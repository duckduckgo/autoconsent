import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bradleys-estate-agents.co.uk_5g7', ['https://www.bradleys-estate-agents.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
