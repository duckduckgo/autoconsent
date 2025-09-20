import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_yourusabiz.tech_jli', ['https://yourusabiz.tech/mcdonalds-ceo-alarm-customer-behavior/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
