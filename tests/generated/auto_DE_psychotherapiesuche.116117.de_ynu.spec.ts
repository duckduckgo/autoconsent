import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_psychotherapiesuche.116117.de_ynu', ['https://arztsuche.116117.de/?ag=12&extendedSearch=true'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
