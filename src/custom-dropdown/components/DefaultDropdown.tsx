import { Item } from "../interface/dropdownInterface";

interface Props {
    label: string;
    itemSelected: Item | undefined;
    handleIsOpen: () => void;
}

export const DefaultDropdown = ({ handleIsOpen, itemSelected, label }: Props) => {
    return (
        <label onClick={handleIsOpen}>{itemSelected?.value ? itemSelected?.label : label}</label>
    )
}
