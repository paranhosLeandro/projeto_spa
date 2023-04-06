import CompServ from "../../CompHeaderFooter/CompServices";
import './style.css';

import { useSearchParams } from "react-router-dom";



/*const GetParam  = ()=>{
    
  //console.log('xxxxxxxxxxxxxxx'); // ▶ URLSearchParams {}

  return {searchParams.get('id')};

}*/

const Services = ()=>{
    const [searchParams] = useSearchParams();
    //GetParam();
   // alert(GetParam());
    return (
        <div className="container-services">
            <CompServ name={searchParams.get('id')}/>
        </div>
    )
}

export default Services;