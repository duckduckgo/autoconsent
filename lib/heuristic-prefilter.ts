/**
 * Required-literal prefilter for heuristic detect patterns (see docs/heuristic-prefilter.md): each built-in pattern has
 * literals that any match must contain, generated at build time into heuristic-literals.ts. A text is checked for all
 * of them in one pass, and a pattern whose literals are all absent can't match, so it is skipped without changing any
 * result.
 */

/**
 * Finds which literals a text contains in one pass: a zero-width lookahead over the literals, longest first, reports
 * the longest one starting at each position, and any other literal starting there is a prefix of it.
 */
export function literalIndex(all: string[]): { present: (lower: string) => Set<string> } {
    const distinct = [...new Set(all)].sort((a, b) => b.length - a.length);
    if (distinct.length === 0) {
        return { present: () => new Set() };
    }
    const escape = (l: string) => l.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
    const any = new RegExp(`(?=(${distinct.map(escape).join('|')}))`, 'g');
    // which literals a reported one implies (itself and its prefixes), worked out only for literals a page contains
    const implies = new Map<string, string[]>();
    const impliedBy = (m: string) => {
        let list = implies.get(m);
        if (!list) {
            list = distinct.filter((l) => m.startsWith(l));
            implies.set(m, list);
        }
        return list;
    };
    return {
        present(lower: string) {
            const found = new Set<string>();
            for (const m of lower.matchAll(any)) {
                if (!found.has(m[1])) {
                    impliedBy(m[1]).forEach((l) => found.add(l));
                }
            }
            return found;
        },
    };
}
