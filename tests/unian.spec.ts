import generateCMPTests from '../playwright/runner';

generateCMPTests('unian', ['https://www.unian.net/'], { testOptIn: false });
