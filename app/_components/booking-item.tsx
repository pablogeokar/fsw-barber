import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
  return (
    <div>
      <Card>
        <CardContent className="p-5 py-0 flex justify-between">
          <div className="flex flex-col gap-2 py-5">
            <Badge className="bg-[#221c3d] text-primary hover:bg-[#221c3d] w-fit">
              Confirmado
            </Badge>

            <h2 className="font-bold">Corte de cabelo</h2>

            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
            </div>

            <h3 className="text-sm">Vintage Barber</h3>
          </div>

          <div className="flex flex-col items-center justify-center border-l border-solid border-secondary">
            <p className="text-sm">Fevereiro</p>
            <p className="text-2xl">06</p>
            <p className="text-sm">09:45</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingItem;
