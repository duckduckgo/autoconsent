import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_miles-and-more.com_qo7', ['https://www.miles-and-more.com/row/en/earn/airlines/mileage-calculator.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
