import { ReactNode } from 'react';
import styles from './Button.module.css'
import 'bootstrap/dist/css/bootstrap.css'

interface Props { 
    children: ReactNode;
    /*customStyle?: React.CSSProperties;*/
    color?: 'primary' | 'secondary' | 'danger';
    onClick: () => void;
}

const Button = ({children, color, onClick} : Props) => {
  return (
    <div>        
        {<button className={[styles.btn, styles['btn-' + color]].join(' ')} onClick={onClick}>{children}</button>}
        {/* {<button style={{...customStyle}}>{text}</button> } */}

    </div>    
  );
};

export default Button