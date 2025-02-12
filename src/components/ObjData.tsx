import { useDispatch } from 'react-redux';
import { firstFormMock } from '../__mock__/formMock';
import { Button } from 'react-bootstrap';
import { setFirstForm } from '../store/slices/firstForm';



export default function ObjData() {

  const dispatch = useDispatch()

  return (
        <Button onClick={() => dispatch(setFirstForm(firstFormMock))}>Test</Button>
  );
}