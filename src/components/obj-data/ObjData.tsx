import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { firstFormMock } from '../../__mock__';
import { firstFormSelector, setFirstForm } from '../../store/';

export const ObjData = () => {
  const dispatch = useDispatch();

  const firstForm = useSelector(firstFormSelector);

  const formData = firstForm?.formData;

  return (
    <>
      <Button onClick={useCallback(() => dispatch(setFirstForm(firstFormMock)), [dispatch])}>Test</Button>
      <h1>{formData && formData.city}</h1>
    </>
  );
};
