import React from 'react';
import {cn} from "@/lib/utils";

const VStackComponent = ({children, className}: {children: React.ReactNode, className?: string}) => {
    return (
        <div className={cn(
            "flex gap-4 items-center justify-center w-full flex-col",
            className
        )}>
            {children}
        </div>
    );
};

export default VStackComponent;
