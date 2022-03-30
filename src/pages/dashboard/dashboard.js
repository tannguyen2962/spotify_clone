import React, { useState, useEffect } from 'react';
import { Table, Space, Modal, Form, Input, Button, message } from 'antd';
import axios from 'axios';
import ApiUrl from 'utils/get-request-url';
import Search from '../header/header';
import Styles from './dashboard.scss';

const { Column } = Table;

const Dashboard = () => {
  const [song, setSong] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState({});
  const [mode, setMode] = useState('');

  const dataSong = () => {
    axios.get(ApiUrl('songs')).then((response) => {
      setSong(response.data);
    });
  };

  const updateSong = async (formValues) => {
    if (mode === 'edit') {
      await axios.put(ApiUrl(`song/${selectedSong._id}`), formValues);

      message.success('update success');
    }

    if (mode === 'create') {
      await axios.post(ApiUrl('song'), formValues);

      setSelectedSong(null);
      message.success('update success');
    }
  };

  useEffect(() => {
    dataSong();
  }, [song]);

  const renderAddSongButton = () => {
    return (
      <div className={Styles.btnAdd}>
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
    );
  };

  const renderCreateEditFormModal = () => {
    if (!isOpen) {
      return null;
    }

    return (
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
    );
  };

  const renderSongTable = () => {
    return (
      <div className={Styles.formData}>
        <Table dataSource={song} rowKey="_id" pageNumber={5}>
          <Column width={200} align="center" title="Name" dataIndex="fullname" key="fullname" />
          <Column align="center" title="Artist" dataIndex="artist" key="artist" />
          <Column align="center" title="Category" dataIndex="category" key="category" />
          <Column align="center" title="Link" dataIndex="link" key="Link" />
          <Column align="center" title="Avatar" dataIndex="avatar" key="avatar" />
          <Column
            align="center"
            title="Action"
            key="id"
            render={(text, record) => (
              <Space key={record.id} size="middle">
                {/*  button Delete */}

                <button
                  onClick={async () => {
                    await axios.delete(ApiUrl(`song/${record._id}`));
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

  return (
    <div style={{ padding: '20x' }}>
      {' '}
      <div className={Styles.form}>
        <Search />
        {renderAddSongButton()}
        {renderCreateEditFormModal()}
        {renderSongTable()}
      </div>
    </div>
  );
};

export default Dashboard;
