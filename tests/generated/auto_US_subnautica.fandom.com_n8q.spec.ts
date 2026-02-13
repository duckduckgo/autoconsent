import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_subnautica.fandom.com_n8q', ['https://subnautica.fandom.com/wiki/Subnautica_Wiki'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
