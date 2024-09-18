import { Data } from "../interface/dropdownInterface";

import { useCustomDropdown } from "../hooks/useCustomDropdown";
import { ItemDropdown } from "./ItemDropdown";
import { DefaultDropdown } from "./DefaultDropdown";

interface Props {
    data: Data
}

export const CustomDropdown = ({ data }: Props) => {

    const { handleIsOpen, handleItemSelected, isOpen, itemSelected } = useCustomDropdown();

    return (
        <>
            <DefaultDropdown label={data.default.label} handleIsOpen={handleIsOpen} itemSelected={itemSelected} />
            {isOpen &&
                data.items.map((item) => (
                    <ItemDropdown item={item} key={item.label} handleItemSelected={handleItemSelected} itemSelected={itemSelected} />
                ))
            }
        </>
    )
}