import {Button} from '../components/button/Button';
import {Input } from '../components/input/Input';
import {Label} from '../components/label/Label';

export const Login =() =>{

return(
<div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
       
          <div className ="card-body p-5 text-center">

            <h3 className="mb-5">Sign in</h3>

            <div className="form-outline mb-4">
             <Input
             name={'pasword'}
             type={'password '}/>
             <Label> c</Label>
            </div>

            <div className="form-outline mb-4">
            <Input
             name={'pasword'}
             type={'password '}/>
             <Label> c</Label>
              
            </div>

        
            <div className="form-check d-flex justify-content-start mb-4">
            <Input
             name={'pasword'}
             type={'password '}/>
             <Label> c</Label>
            </div>

            <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

            

          </div>
        </div>
      </div>
    </div>


)
}






  