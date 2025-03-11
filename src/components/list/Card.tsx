import  { FC, useState } from 'react'
import { Car } from '../../types/Types';
import calcPrice from '../../utils/CalcPrice';
import Info from './Info';
import Button from '../button/Button';
import { motion } from "motion/react";
import Modal from '../modal/Modal';
import generateImage from '../../utils/generateImage';

interface Props {
    car:Car;
}
const Card:FC<Props> = ({car}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    generateImage(car)
  return (
    <div className='car-card group'>
        <h2 className='car-card-content-title'>{car.make}{car.model}</h2>
        <div className='flex mt-6 text-[19px]'>
            <span className='font-semibold'>$</span><span className='text-[32px]'>{calcPrice(car)}</span><span className='font-semibold self-end'>/day</span>
        </div>
        <div>
            <img src={generateImage(car)} alt={car.model} className='w-full h-full object-contain min-h-[200px]' />
        </div>
        <div className='w-full'>
            <div className='group-hover:hidden'>
                <Info car={car}/>
            </div>
            <motion.div initial={{ scale: 0.5 }} whileInView={{ scale: 1 }} className="hidden group-hover:block">
          <Button  text="Daha Fazla" designs="w-full text-white mt-[0.5px]" fn={()=> setIsOpen(true)}/>
        </motion.div>
        </div>
        <Modal close={()=>setIsOpen(false)} isOpen={isOpen} car={car}/>
    </div>
  )
}

export default Card