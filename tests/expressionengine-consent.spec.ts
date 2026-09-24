import generateCMPTests from '../playwright/runner';

generateCMPTests('expressionengine-consent', ['https://bryantpark.org/activities/category/winter-village', 'https://wintervillage.org/'], {
    testSelfTest: false,
});
