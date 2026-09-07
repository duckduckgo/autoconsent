import generateCMPTests from '../playwright/runner';

generateCMPTests('Complianz opt-out', ['https://www.thefoxandpheasant.com/food-menu/', 'https://www.museum.de/', 'https://www.dtv.de/'], {
    testOptIn: false,
});
