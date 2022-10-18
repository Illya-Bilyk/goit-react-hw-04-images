import { Component } from 'react';
import {
  Header,
  SearchForm,
  FormButton,
  ButtonLabel,
  Input,
} from './Searchbar.styled';
import { Formik } from 'formik';

export class Searchbar extends Component {
  handleSubmit = (values, actions) => {
    const { onSubmit } = this.props;
    onSubmit(values.quary);
    actions.resetForm();
  };

  render() {
    const initialValues = {
      quary: '',
    };
    return (
      <Header>
        <Formik initialValues={initialValues} onSubmit={this.handleSubmit}>
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
}
