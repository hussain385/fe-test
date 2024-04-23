"use client"
import React, {useState} from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import HStackComponent from "@/components/common/horizontal-stack.component";
import {PiSortAscendingLight, PiSortDescendingLight} from "react-icons/pi";

const SortBySelect = () => {
    const [selectedValue, setSelectedValue] = useState<string>('Reviews (high first)');

    return (
        <Select onValueChange={(e)=> setSelectedValue(e)} defaultValue={'Reviews number (high first)'}>
            <SelectTrigger className="text-gray-500 w-full md:w-fit justify-start">
                <HStackComponent className={'w-full md:w-fit gap-2 flex-row justify-start'}>
                    {selectedValue === 'Reviews number (high first)' ? (
                        <PiSortAscendingLight className={'w-[1.5rem] h-[1.5rem]'}/>
                    ) : (
                        <PiSortDescendingLight className={'w-[1.5rem] h-[1.5rem]'}/>
                    )}
                    <p className={'overflow-ellipsis overflow-hidden'}>Sort by: {selectedValue}</p>
                </HStackComponent>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="Reviews (high first)">Reviews number (high first)</SelectItem>
                    <SelectItem value="Reviews (low first)">Reviews number (Low first)</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default SortBySelect;
