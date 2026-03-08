import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_behaviorchange.group_f8j', ['https://behaviorchange.group/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
