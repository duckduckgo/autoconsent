import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_weather.com_wi0', ['https://weather.com/en-GB/weather/today/l/UKXX0085:1:UK?Goto=Redirected'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['GB'],
});
