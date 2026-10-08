import generateCMPTests from '../playwright/runner';

generateCMPTests('costco', ['https://www.costco.ca/', 'https://www.costcobusinesscentre.ca/'], {
    testOptIn: false,
});
