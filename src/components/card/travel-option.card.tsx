"use client"
import React from 'react';
import {ITravelCardProp} from "@/interfaces/travel-option.interafce";
import {Card} from "@/components/ui/card";
import Image from "next/image";
import HStackComponent from "@/components/common/horizontal-stack.component";
import VStackComponent from "@/components/common/vertical-stack.component";
import ReactRating from "react-rating";
import { StarIcon } from "@chakra-ui/icons";
import { FaArrowCircleRight } from "react-icons/fa";
import {Button} from "@/components/ui/button";

const TravelOptionCard = ({cardInfo}: {cardInfo: ITravelCardProp}) => {
    return (
        <Card className={'w-full'}>
            <HStackComponent className={'justify-between border-b bg-gray-50 p-4'}>
                <Image src={cardInfo.image} width={'500'} height={'200'} alt={'logo'}/>
                <VStackComponent className={'items-start md:items-end gap-0'}>
                    <h2 className={'text-xl font-bold'}>{cardInfo.companyName}</h2>
                    <HStackComponent className={'gap-1 flex-row justify-start md:justify-end'}>
                        {/* @ts-ignore */}
                        <ReactRating
                            fractions={0}
                            readonly={true}
                            initialRating={cardInfo.ratings}
                            fullSymbol={
                                <StarIcon fontSize={20} color={"#ffe800"} stroke={"transparent"}/>
                            }
                            emptySymbol={
                                <StarIcon fontSize={20} color={"transparent"} stroke={"#a8a8a8"}/>
                            }
                        />
                        <p className={'mt-[2px] font-light text-gray-600'}>by <span className={'font-bold'}>{cardInfo.customerCount} customers</span></p>
                    </HStackComponent>
                </VStackComponent>
            </HStackComponent>
            <HStackComponent className={'p-4 items-start'}>
                <VStackComponent className={'items-start justify-start h-full'}>
                    <div>
                        <p>Operates in</p>
                        {cardInfo.operationCountry.map((value, key) => (
                            <HStackComponent key={key} className={'gap-1 justify-start flex-row'}>
                                <Image src={value.countryFlag} width={'20'} height={'10'} alt={'country'}/>
                                <p>{value.countryName}</p>
                            </HStackComponent>
                        ))}
                    </div>
                    <div>
                        <p>Vessels number: {cardInfo.vesselsNo}</p>
                        <p>Ferry types: {cardInfo.vesselsType}</p>
                    </div>
                    <div>
                        <p>Popular vessels:</p>
                        <p className={'text-blue_theme'}>{cardInfo.popularVessels}</p>
                    </div>
                </VStackComponent>
                <VStackComponent className={'gap-2'}>
                    <p className={'text-[0.8rem]'}>{cardInfo.description}</p>
                    <div className={'bg-gray-200 rounded w-full h-[2px]'}/>
                    <Button variant={'ghost'} className={'gap-2 w-fit self-end h-[2.5em]'}>
                        <p className={'text-blue_theme'}>More about {cardInfo.companyName}</p>
                        <FaArrowCircleRight className={'text-blue_theme w-5 h-5'}/>
                    </Button>
                </VStackComponent>
            </HStackComponent>
        </Card>
    );
};

export default TravelOptionCard;
