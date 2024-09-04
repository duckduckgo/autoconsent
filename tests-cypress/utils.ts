// there is likely a better "cypress way" to do this, e.g. to provide nicer output in the command log
export function assertArrayContainsObject(expectedObject: {type: string} & {[key: string]: any}) {
  return (actualArray) => {
    const index = actualArray.map(e => e.type).indexOf(expectedObject.type)

    expect(index).not.equal(-1)

    for (const k of Object.keys(expectedObject)) {
      expect(actualArray[index]).have.nested.property(k, expectedObject[k])
    }
  }
}
