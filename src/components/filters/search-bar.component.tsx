"use client"
import React, {useState} from 'react';
import {Card} from "@/components/ui/card";
import {IoSearchOutline} from "react-icons/io5";
import {Input} from "@/components/ui/input";
import HStackComponent from "@/components/common/horizontal-stack.component";

const SearchbarComponent = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    return (
        <HStackComponent className={'rounded-lg border bg-card gap-2 w-full md:w-fit px-2 flex-row justify-start'}>
            <IoSearchOutline className={'w-[1rem] h-[1rem] text-gray-500 font-bold'}/>
            <Input placeholder={'Search'} onChange={(e) => setSearchTerm(e.target.value)}/>
        </HStackComponent>
    );
};

export default SearchbarComponent;
