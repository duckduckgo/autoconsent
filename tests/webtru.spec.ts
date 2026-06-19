import generateCMPTests from '../playwright/runner';

generateCMPTests('webtru', ['https://billboard-cc.com/', 'https://www.billboard-japan.com/', 'https://skyticket.com/'], {});
