import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_badparentinggame.com_rcu', ['https://badparentinggame.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
