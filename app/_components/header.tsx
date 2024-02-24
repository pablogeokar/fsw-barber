import { Card, CardContent } from "@/app/_components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 flex justify-between items-center">
        <Image src="/logo.png" alt="FSW Barber" height={18} width={120} />
        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
