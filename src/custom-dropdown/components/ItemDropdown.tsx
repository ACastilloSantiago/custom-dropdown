import { Item } from "../interface/dropdownInterface"

interface Props {
    item: Item
    handleItemSelected: (item: Item) => void;
    itemSelected: Item | undefined;
}

export const ItemDropdown = ({ item: { label, value }, handleItemSelected, itemSelected }: Props) => {
    return (
        <div key={label}>
            <label onClick={() => handleItemSelected({ label, value })
            }>{label}</label>
            {
                itemSelected?.value === value && (<span>💚</span>)
            }
        </div>
    )
}
