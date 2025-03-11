import { Car } from "../types/Types";

type ReturnType =[string, string | number | null][]
export default function formatdata(car:Car):ReturnType{
    const accepted = [
        "make",
        "model",
        "cylinders",
        "drive",
        "fueltype",
        "trany",
        "vclass",
        "year",
        "startstop",
        "co2",
        "displ",
        "atvtype",
      ];
    const arr = Object.entries(car).filter((i)=>accepted.includes(i[0]))
   
    
 return arr
    
}