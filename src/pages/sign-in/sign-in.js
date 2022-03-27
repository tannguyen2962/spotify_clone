import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Styles from './signin.scss';

const SignIn = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getUser = async () => {
    await axios.get('http://localhost:4000/users').then((response) => {
      setUsers(response.data);
    });
  };

  const toSignUp = () => {
    navigate('/signUp');
  };

  const Finish = (formValues) => {
    const { email, password } = formValues;
    const targetUser = users.find((user) => user.email === email && user.password === password);

    if (targetUser) {
      localStorage.setItem('targetUser', JSON.stringify(targetUser));
      message.success('login success');
      navigate('/search');
    } else {
      message.error('please try again');
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={Styles.form}>
      <div className={Styles.title}>
        <h2> Sign In</h2>
      </div>

      <div className={Styles.formContent}>
        <Form name="nest-messages" onFinish={Finish} initialValues={users}>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: 'email',
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button onClick={toSignUp}> SignUp</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
