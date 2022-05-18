import { enableLogs } from './config';
import { AutoCMP, TabActor } from './types';

export default async function detectDialog(retries: number, rules: AutoCMP[]): Promise<AutoCMP> {
  let breakEarly = false;
  const found: number = await new Promise(async (resolve) => {
    let earlyReturn = false;
    enableLogs && console.groupCollapsed(`Detecting CMPs (${rules.length} rules) on ${window.location.href}`)
    await Promise.all(rules.map(async (r, index) => {
      try {
        if (await r.detectCmp()) {
          earlyReturn = true;
          enableLogs && console.log(`Found CMP: ${r.name}`);
          resolve(index)
        }
      } catch (e) {
        breakEarly = true;
      }
    }));
    if (!earlyReturn) {
      resolve(-1)
    }
  })
  enableLogs && console.log(`CMP detection finished, found rule #${found}`);
  enableLogs && console.groupEnd();
  if (found === -1 && retries > 0 && !breakEarly) {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const result = detectDialog(retries - 1, rules);
        resolve(result);
      }, 500);
    });
  }
  return found > -1 ? rules[found] : null;
}