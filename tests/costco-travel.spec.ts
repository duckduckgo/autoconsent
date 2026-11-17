import generateCMPTests from '../playwright/runner';

generateCMPTests('costco-travel', ['https://www.costcotravel.ca/', 'https://www.costcotravel.com.au/'], {
    testOptIn: false,
});
