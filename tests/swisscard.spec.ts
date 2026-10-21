import generateCMPTests from '../playwright/runner';

generateCMPTests('swisscard', ['https://www.swisscard.ch/en', 'https://www.cashback-cards.ch/en', 'https://www.americanexpress.ch/en']);
