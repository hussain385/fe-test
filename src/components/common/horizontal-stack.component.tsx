import React from 'react';
import {cn} from "@/lib/utils";

const HStackComponent = ({children, className}: {children: React.ReactNode, className?: string}) => {
    return (
        <div className={cn(
            "flex gap-4 flex-col items-center justify-center w-full md:flex-row",
            className
        )}>
            {children}
        </div>
    );
};

export default HStackComponent;
