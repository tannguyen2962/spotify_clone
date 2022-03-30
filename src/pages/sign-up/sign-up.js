import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import ApiUrl from 'utils/get-request-url';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Styles from './signup.scss';

const SignUp = () => {
  const { Option } = Select;
  const [song, setSong] = useState({});
  const navigate = useNavigate();

  const toSignIn = () => {
    navigate('/signIn');
  };

  const Finish = (formValue) => {
    axios.post(ApiUrl('user'), formValue).then((response) => {
      setSong(response.data);
      navigate('/signIn');
    });
  };

  return (
    <div className={Styles.form}>
      <div className={Styles.bgForm}>
        <div className={Styles.title}>
          <h2> Sign Up</h2>
          <h3> SignUp to listen more music</h3>
        </div>
        <div className={Styles.formContent}>
          <Form name="nest-messages" onFinish={Finish} initialValues={song}>
            <Form.Item
              name="fullname"
              label="Full Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
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
            <Form.Item
              name="phone"
              label="Phone"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="address"
              label="Address"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="position" label="Position">
              <Select
                defaultValue="User"
                style={{
                  width: 100,
                }}
              >
                <Option value="User">User</Option>
                <Option value="Admin">Admin</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
              <Button onClick={toSignIn}> Sign In</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
