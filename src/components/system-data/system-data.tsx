import { useDispatch, useSelector } from 'react-redux';
import { setThirdForm, thirdFormSelector } from '../../store';
import { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { thirdFormMock } from '../../__mock__';

export const SystemData = () => {
  const dispatch = useDispatch();
  const handleSubmit = useCallback(() => dispatch(setThirdForm(thirdFormMock)), [dispatch]);

  const thirdForm = useSelector(thirdFormSelector);
  const formData = thirdForm.formData;

  return (
    <>
      <Button onClick={handleSubmit}>Test</Button>
      <h1>{formData && formData.blockArea}</h1>
    </>
  );
};
