import CompServ from "../../CompHeaderFooter/CompServices";
import './style.css';

import { useSearchParams,useParams } from "react-router-dom";



/*const GetParam  = ()=>{
    
  //console.log('xxxxxxxxxxxxxxx'); // ▶ URLSearchParams {}

  return {searchParams.get('id')};

}*/

const Services = ()=>{
    const [searchParams] = useSearchParams();
    const { orig } = useParams();
    //GetParam();
   // alert(GetParam());
    return (
        <div className="container-services">
            <CompServ name={searchParams.get('id')} orig={orig}/>
        </div>
    )
}

export default Services;