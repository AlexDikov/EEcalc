import { useDispatch, useSelector } from 'react-redux';
import { secondFormMock } from '../../__mock__';
import { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { secondFormSelector, setSecondForm } from '../../store';

export const WallData = () => {
  const dispatch = useDispatch();
  const handleSubmit = useCallback(() => dispatch(setSecondForm(secondFormMock)), [dispatch]);

  const secondForm = useSelector(secondFormSelector);
  const formData = secondForm?.formData;

  return (
    <>
      <Button onClick={handleSubmit}>Test</Button>
      <h1>{formData && formData.concrete.thickness}</h1>
    </>
  );
};
