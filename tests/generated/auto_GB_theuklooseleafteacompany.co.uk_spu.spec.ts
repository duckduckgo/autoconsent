import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_theuklooseleafteacompany.co.uk_spu', ['https://theuklooseleafteacompany.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
