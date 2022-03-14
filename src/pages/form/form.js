import React, { useState, useEffect } from 'react';
import { Table, Space, Modal, Form, Input, Button, message } from 'antd';
import axios from 'axios';
import Search from '../header/header';
import Styles from './form.scss';

const { Column, ColumnGroup } = Table;

const ChangeValue = () => {
  const [song, setSong] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState({});
  const [mode, setMode] = useState('');

  const dataSong = () => {
    axios.get('http://localhost:4000/songs').then((response) => {
      setSong(response.data);
    });
  };

  const updateSong = async (formValues) => {
    if (mode === 'edit') {
      await axios.put(`http://localhost:4000/song/${selectedSong._id}`, formValues);

      message.success('update success');
    }

    if (mode === 'create') {
      await axios.post('http://localhost:4000/song/', formValues);

      setSelectedSong(null);
      message.success('update success');
    }
  };

  useEffect(() => {
    dataSong();
  }, [song]);

  return (
    <div className={Styles.form}>
      <Search />
      <div className={Styles.btnadd}>
        <Button
          onClick={() => {
            setIsOpen(true);
            setMode('create');
          }}
          type="primary"
        >
          Add Song
        </Button>
      </div>
      <Modal
        title="Basic Modal"
        visible={isOpen}
        onCancel={() => {
          setSelectedSong(null);
          setMode(null);
          setIsOpen(null);
        }}
      >
        <div>
          <Form onFinish={updateSong} layout="vertical" initialValues={selectedSong}>
            <Form.Item name="fullname" label="FullName" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="artist" label="Artist" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="category" label="Category" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="link" label="Link">
              <Input />
            </Form.Item>
            <Form.Item name="avatar" label="Avatar">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>{' '}
        </div>
      </Modal>
      <Table dataSource={song} rowKey="_id" pageNumber={5}>
        <ColumnGroup title="Name" align="center">
          <Column align="center" title="Name" dataIndex="fullname" key="fullname" />
          <Column align="center" title="Artist" dataIndex="artist" key="artist" />
          <Column align="center" title="Category" dataIndex="category" key="category" />
        </ColumnGroup>
        <ColumnGroup title="Link & Avatar" align="center">
          <Column align="center" title="Link" dataIndex="link" key="Link" />
          <Column align="center" title="Avatar" dataIndex="avatar" key="avatar" />
        </ColumnGroup>

        <Column
          align="center"
          title="Action"
          key="id"
          render={(text, record) => (
            <Space key={record.id} size="middle">
              {/*  button Delete */}

              <button
                onClick={async () => {
                  await axios.delete(`http://localhost:4000/song/${record._id}`);
                }}
              >
                Delete
              </button>
              {/*  button Update */}
              <button
                onClick={() => {
                  setIsOpen(true);
                  setMode('edit');
                  setSelectedSong(record);
                }}
              >
                Update
              </button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default ChangeValue;
