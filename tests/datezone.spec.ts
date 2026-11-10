import generateCMPTests from '../playwright/runner';

generateCMPTests('datezone', ['https://pl.datezone.com/', 'https://de.datezone.com/', 'https://en.datezone.com/']);
