import React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const RequirementsDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button type="button">Requirements</Button>
      </DrawerTrigger>
      <DrawerContent className="flex items-center justify-center">
        <div className="flex flex-col justify-items-center md:w-1/2">
          <DrawerHeader className="text-left">
            <DrawerTitle>Please ensure the following:</DrawerTitle>
            <DrawerDescription>
              {" "}
              Check if the domain is correct <br />
              Check if the site is online <br />
              Check the address bars and punctuation
              <br />
              The URL is in the correct format <br />
              The monthly shortening limit has not been met
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button type="button">Okay</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default RequirementsDrawer;
