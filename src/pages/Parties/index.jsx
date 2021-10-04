/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Form} from '@unform/web';
import * as Yup from 'yup';

import {
  getPartiesRequest,
  createPartiesRequest,
} from '../../store/modules/parties/actions';

import Toolbar from '../../components/Toolbar';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Table from '../../components/Table';
import Toast from '../../components/Toast';

function PartiesPage() {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  const parties = useSelector((state) => state.parties);

  const [list, setList] = useState(parties.data);
  const [openModal, setOpenModal] = useState(false);
  const [toast, setToast] = useState({
    open: false,
    message: 'Parte criada com sucesso!',
    type: 'success',
  });

  const handleCreatePartie = async (data) => {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        first_name: Yup.string().required(),
        last_name: Yup.string().required(),
        email: Yup.string().email().required(),
        cpf: Yup.string().length(11).required(),
        phone: Yup.string().required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      dispatch(createPartiesRequest(data));
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  };

  const handleFormActions = (type = 'submit') => {
    if (formRef && formRef.current) {
      switch (type) {
        case 'submit':
          formRef.current.submitForm();
          break;
        case 'reset':
          formRef.current.reset();
          break;
        default:
          formRef.current.reset();
          break;
      }
    }
  };

  const handleDoSearch = (search) => {
    const val = search.toLowerCase();
    const results = parties.data
      .map((item) => ({
        ...item,
        tag: `${item.first_name} ${item.last_name} ${item.cpf}`,
      }))
      .filter((item) => item.tag.toLowerCase().indexOf(val) !== -1 || !val);
    setList(results);
  };

  useEffect(() => {
    if (parties.data.length > 0) setList(parties.data);

    if (parties.success) {
      setList(parties.data);
      setOpenModal(false);
      setToast({...toast, open: true});
      handleFormActions('reset');
    } else if (parties.error) {
      setToast({
        open: true,
        message: 'Algo saiu errado, tente novamente!',
        type: 'error',
      });
    }
  }, [parties]);

  useEffect(() => {
    dispatch(getPartiesRequest());
  }, [dispatch]);

  return (
    <div>
      <Toolbar
        title="Partes"
        actionButtonLabel="Nova Parte"
        handleActionButton={() => setOpenModal(true)}
      />
      {parties && (
        <Table
          handleSearch={(val) => handleDoSearch(val)}
          headers={[
            {
              title: '#',
              key: 'avatar',
            },
            {
              title: 'Nome',
              key: 'first_name',
            },
            {
              title: 'Sobrenome',
              key: 'last_name',
            },
            {
              title: 'E-mail',
              key: 'email',
            },
            {
              title: 'CPF',
              key: 'cpf',
            },
            {
              title: 'Telefone',
              key: 'phone',
            },
          ]}
          data={list}
        />
      )}

      <Modal
        size="sm"
        open={openModal}
        handleClose={() => setOpenModal(false)}
        handleConfirm={() => handleFormActions()}
        loading={parties.loading}
        title="Nova Parte">
        <Form ref={formRef} onSubmit={handleCreatePartie} className="form">
          <div className="form-row">
            <div className="form-col">
              <Input
                label="Primeiro Nome"
                validationMsg="Informe seu Primeiro Nome"
                variant="outlined"
                name="first_name"
              />
            </div>
            <div className="form-col">
              <Input
                label="Sobrenome"
                validationMsg="Informe seu Sobrenome"
                variant="outlined"
                name="last_name"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-col">
              <Input
                label="CPF"
                validationMsg="Informe um CPF válido"
                variant="outlined"
                name="cpf"
              />
            </div>
            <div className="form-col">
              <Input
                type="phone"
                label="Telefone"
                validationMsg="Informe seu Telefone"
                variant="outlined"
                name="phone"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-col">
              <Input
                type="email"
                label="E-mail"
                validationMsg="Informe um e-mail válido"
                variant="outlined"
                name="email"
              />
            </div>
          </div>
        </Form>
      </Modal>

      <Toast
        open={toast.open}
        message={toast.message}
        type={toast.type}
        handleClose={() => setToast({...toast, open: false})}
      />
    </div>
  );
}

export default PartiesPage;
