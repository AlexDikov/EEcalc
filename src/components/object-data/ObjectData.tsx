import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { firstFormMock } from '../../__mock__';
import { firstFormSelector, setFirstForm } from '../../store';

export const ObjectData = () => {
  const dispatch = useDispatch();
  const handleSubmit = useCallback(() => dispatch(setFirstForm(firstFormMock)), [dispatch]);

  const firstForm = useSelector(firstFormSelector);
  const formData = firstForm?.formData;

  return (
    <>
      <Button onClick={handleSubmit}>Test</Button>
      <h1>{formData && formData.city}</h1>
    </>
  );
};
