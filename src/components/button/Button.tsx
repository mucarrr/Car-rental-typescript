import { FC } from "react";

interface Props {
    text:string;
    designs?:string;
    disabled?:boolean;
    type?:"submit" | "button" | "reset";
    fn?:() => void;
}
// type Props ={} bu sekilde de olabilirdi. props nesne olacagi icin interface de olabilir dedik. 
const Button:FC<Props> = ({text, designs, disabled, type, fn}) => { 
  return (
    <button onClick={fn} type={type} disabled={disabled} className={`custom-btn ${designs}`}>{text}</button>
  )
}

export default Button




//su sekilde de olurdu
/* const Button = ({text, designs}:Props):JSX.Element => { 
    return (
      <button className={`custom-btn ${designs}`}>{text}</button>
    )
  }
  
  export default Button */