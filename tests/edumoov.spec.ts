import generateCMPTests from '../playwright/runner';

generateCMPTests('edumoov', ['https://www.edumoov.com/'], { testOptIn: false });
