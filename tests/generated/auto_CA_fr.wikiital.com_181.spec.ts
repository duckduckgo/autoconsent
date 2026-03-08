import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fr.wikiital.com_181', ['https://fr.wikiital.com/wiki/6_marzo'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
