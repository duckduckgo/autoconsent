import generateCMPTests from '../playwright/runner';

generateCMPTests('newsbreak', ['https://www.newsbreak.com/'], { testSelfTest: true });
