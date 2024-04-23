"use client"
import React, {useState} from 'react';
import {Card} from "@/components/ui/card";
import HStackComponent from "@/components/common/horizontal-stack.component";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger} from "@/components/ui/select";
import {PiSortAscendingLight, PiSortDescendingLight} from "react-icons/pi";
import {IoLocationOutline} from "react-icons/io5";
import {Checkbox} from "@/components/ui/checkbox";
import VStackComponent from "@/components/common/vertical-stack.component";

const FiltersCard = ({toggle}: {toggle: () => void}) => {
    const [selectedValue, setSelectedValue] = useState<string>('');

    return (
        <Card className={'flex flex-col gap-2 md:w-auto w-full'}>
            <HStackComponent className={'justify-between px-2 pt-2 flex-row'}>
                <h2 className={'font-bold text-sm'}>Filters</h2>
                <Button onClick={toggle} variant={'ghost'} className={'!py-0 !px-2 h-[2em]'}>
                    X
                </Button>
            </HStackComponent>
            <p className={'px-2'}>Operating in</p>
            <Select onValueChange={(e) => setSelectedValue(e)} defaultValue={''}>
                <SelectTrigger className="md:w-fit text-gray-500 m-2 w-[initial]">
                    <HStackComponent className={'md:min-w-[15em] md:w-fit gap-2 justify-start flex-row'}>
                        <IoLocationOutline className={'w-[1.2rem] h-[1.2rem]'}/>
                        <p>{selectedValue !== '' ? selectedValue : 'Select a country'}</p>
                    </HStackComponent>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="Greece">Greece</SelectItem>
                        <SelectItem value="Spain">Spain</SelectItem>
                        <SelectItem value="India">India</SelectItem>
                        <SelectItem value="Pakistan">Pakistan</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <div className={'bg-gray-200 rounded w-full h-[2px]'}/>
            <div className={'px-2 pb-3'}>
                <p>Ferry types</p>
                <VStackComponent className={'gap-2 text-gray-500 text-xs items-start mt-2'}>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="normal" className={'w-3.5 h-3.5'}/>
                        <label
                            htmlFor="terms"
                            className="font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Normal ferries
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="high-speed" className={'w-3.5 h-3.5'}/>
                        <label
                            htmlFor="terms"
                            className="font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            High-speed ferries
                        </label>
                    </div>
                </VStackComponent>
            </div>
        </Card>
    );
};

export default FiltersCard;
