import { FC } from 'react'
import { Car } from '../../types/Types'
import generateImage from '../../utils/generateImage';

interface Props{
    car:Car;
}
const Images:FC<Props> = ({car}) => {
  return (
    <div className='flex-1 flex-col gap-3'>
        <div className='w-full h-40'>
            <img src={generateImage(car, undefined, true)} alt="h-full w-full mx-auto object-cover rounded-md" />
        </div>
        <div className='flex gap-3 my-3 mt-32'>
            <div className='rounded flex-1 flex relative h-24 bg-primary-blue-100 '>
                <img src={generateImage(car, "29")} alt="" className='mx-auto object-contain min-w-[140px]'/>
            </div>
            <div className='rounded flex-1 flex relative h-24 bg-primary-blue-100 '>
                <img src={generateImage(car, "33")} alt="" className='mx-auto object-contain min-w-[140px]'/>
            </div>
            <div className='rounded flex-1 flex relative h-24 bg-primary-blue-100 '>
                <img src={generateImage(car, "13")} alt="" className='mx-auto object-contain min-w-[140px]'/>
            </div>
        </div>
    </div>
  )
}

export default Images