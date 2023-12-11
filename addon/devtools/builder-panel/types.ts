export type SelectedElementData = {
  tag: string;
  id: string;
  classes: string[];
  attributes: { [name: string]: string };
  extras: {
    isChecked?: boolean;
    isDisabled?: boolean;
  }
}

export type ActiveSelectorBlocksItem = Partial<SelectedElementData> & {
  isUsed: boolean; // is this selector used in the final selector
}
