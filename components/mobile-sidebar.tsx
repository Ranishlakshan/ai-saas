"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const MobileSideBar = () => {
    return (
        <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
            </Button>
    );
}

export default MobileSideBar;