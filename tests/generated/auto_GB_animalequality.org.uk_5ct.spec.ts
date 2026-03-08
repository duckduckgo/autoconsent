import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_animalequality.org.uk_5ct', ['https://animalequality.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
