import generateCMPTests from '../playwright/runner';

generateCMPTests('tracsis-delay-repay', [
    'https://greateranglia.delayrepaycompensation.com/index.cfm',
    'https://delayrepay.eastmidlandsrailway.co.uk/',
]);
