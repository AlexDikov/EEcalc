import { useDispatch, useSelector } from 'react-redux';
import { fourthFormSelector } from '../../store/fourth-form/selectors';
import { useCallback } from 'react';
import { setFourthForm } from '../../store/fourth-form/slices';
import { fourthFormMock } from '../../__mock__';
import { Button } from 'react-bootstrap';

export const BracketData = () => {
  const dispatch = useDispatch();
  const handleSubmit = useCallback(() => dispatch(setFourthForm(fourthFormMock)), [dispatch]);

  const fourthForm = useSelector(fourthFormSelector);
  const formData = fourthForm.formData;

  return (
    <>
      <Button onClick={handleSubmit}>Test</Button>
      <h1>{formData && formData.pcs}</h1>
    </>
  );
};
