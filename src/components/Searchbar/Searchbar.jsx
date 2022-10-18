import { Component } from 'react';
import {
  Header,
  SearchForm,
  FormButton,
  ButtonLabel,
  Input,
} from './Searchbar.styled';
import { Formik } from 'formik';

export function Searchbar({ onSubmit }) {
  const handleSubmit = (values, actions) => {
    onSubmit(values.quary);
    actions.resetForm();
  };

  const initialValues = {
    quary: '',
  };
  return (
    <Header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <SearchForm>
          <FormButton type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </FormButton>

          <Input
            className="input"
            type="text"
            autoComplete="off"
            name="quary"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </Header>
  );
}
