import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-script', ['https://www.english-heritage.org.uk/', 'https://www.thamesclippers.com/', 'https://www.fluentu.com/']);
