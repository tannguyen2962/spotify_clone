import React, { useState, useEffect } from 'react';
import { Table, Space } from 'antd';
import axios from 'axios';
import Styles from './form.scss';

const FormValue = () => {
  const { Column, ColumnGroup } = Table;
  const [song, setSong] = useState([]);

  const dataSong = () => {
    axios.get('localhost:4000/songs').then((response) => {
      console.log('data', response.data);
      setSong(response.data);
    });
  };

  useEffect(() => {
    dataSong();
  }, []);

  // const song = [
  //   {
  //     key: '1',
  //     Name: 'John',
  //     Artist: 'Brown',
  //     Category: 32,
  //     Link: 'New York No. 1 Lake Park',
  //     Avatar: 'New York No. 1 Lake Park',
  //   },
  //   {
  //     key: '2',
  //     Name: 'Jim',
  //     Artist: 'Green',
  //     Category: 42,
  //     Link: 'London No. 1 Lake Park',
  //     Avatar: 'New York No. 1 Lake Park',
  //   },
  //   {
  //     key: '3',
  //     Name: 'Joe',
  //     Artist: 'Black',
  //     Category: 32,
  //     Link: 'Sidney No. 1 Lake Park',
  //     Avatar: 'New York No. 1 Lake Park',
  //   },
  // ];
  return (
    <div className={Styles.form}>
      <Table dataSource={song}>
        <ColumnGroup title="Name" align="center">
          <Column align="center" title="Name" dataIndex="Name" key="Name" />
          <Column align="center" title="Artist" dataIndex="Artist" key="Artist" />
          <Column align="center" title="Category" dataIndex="Category" key="Category" />
        </ColumnGroup>
        <ColumnGroup title="Link & Avatar" align="center">
          <Column align="center" title="Link" dataIndex="Link" key="Link" />
          <Column align="center" title="Avatar" dataIndex="Avatar" key="Avatar" />
        </ColumnGroup>

        <Column
          align="center"
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
              <a>Update</a>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default FormValue;
