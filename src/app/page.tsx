"use client"
import TravelOptionCard from "@/components/card/travel-option.card";
import SortBySelect from "@/components/filters/sort-by-select.component";
import HStackComponent from "@/components/common/horizontal-stack.component";
import SearchbarComponent from "@/components/filters/search-bar.component";
import {Button} from "@/components/ui/button";
import {TfiWorld} from "react-icons/tfi";
import {useState} from "react";
import {MdArrowForwardIos, MdTune} from "react-icons/md";
import FiltersCard from "@/components/card/filter.card";
import {cardInfo} from "@/data/travel-card.data";
import VStackComponent from "@/components/common/vertical-stack.component";


export default function Home() {
    const [filtersSelected, setFiltersSelected] = useState<boolean>(true)
    return (
        <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-5">
            <div className="z-10 md:max-w-7xl w-full font-mono text-sm flex flex-col gap-2">
                <HStackComponent className={'mb-3 justify-between items-start'}>
                    <div>
                        <h1 className={'text-xl font-bold'}>Ferry operators</h1>
                        <p className={'text-xs md:text-sm text-gray-400'}>Discover the <span
                            className={'text-gray-600'}>57 ferry operators</span> we work with</p>
                    </div>
                    <Button variant={'outline'} className={'gap-2 text-white bg-blue_theme min-w-[13em] hidden md:flex font-light hover:bg-[#009bbd] hover:text-white'}>
                        <MdArrowForwardIos className={'w-[1rem] h-[1rem]'}/>
                        <p>Book your tickets</p>
                    </Button>
                </HStackComponent>
                <HStackComponent className={'justify-between'}>
                    <HStackComponent className={'justify-start mb-5 md:mb-auto'}>
                        <Button variant={'outline'}
                                className={'gap-2 font-light text-gray-500 w-full md:w-auto justify-start'} onClick={() => setFiltersSelected(!filtersSelected)}>
                            <MdTune className={`w-[1.2rem] h-[1.2rem] ${filtersSelected && 'text-blue_theme'}`}/>
                            <p>Filters</p>
                        </Button>
                        <SortBySelect/>
                        <SearchbarComponent/>
                    </HStackComponent>
                    <Button variant={'outline'} className={'gap-3 text-blue_theme min-w-[13em] hidden md:flex font-light'}>
                        <TfiWorld className={'w-[1rem] h-[1rem]'}/>
                        <p>Live Map View</p>
                    </Button>
                </HStackComponent>
                <HStackComponent className={'items-start'}>
                    {filtersSelected && (
                        <FiltersCard toggle={() => setFiltersSelected(!filtersSelected)}/>
                    )}
                    <VStackComponent>
                        {cardInfo.map((cardInfo, key) => (
                            <TravelOptionCard key={key} cardInfo={cardInfo}/>
                        ))}
                    </VStackComponent>
                </HStackComponent>
            </div>
        </main>
    )
}
