import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "redux/store";
import { Card, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { selectorObject, tableDataType } from "./types";
import { getUsersList } from "redux/actions/getList";
import { addUser, removeUser } from "redux/actions/tableActions";
import "./home.scss";
import Loading from "components/Loading";

const { Meta } = Card;

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { usersList, tableReducer, loadingRedcer }: selectorObject =
    useSelector((state: RootState) => ({
      usersList: state.usersListRedcer,
      tableReducer: state.tableReducer,
      loadingRedcer: state.loadingRedcer,
    }));

  useEffect(() => {
    dispatch(getUsersList());
  }, []);

  const columns: ColumnsType<tableDataType> = [
    {
      title: "id",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "Action",
      render: (text, record) => (
        <div
          className="remove-button"
          onClick={() => {
            dispatch(removeUser(record?.key));
          }}
        >
          Remove
        </div>
      ),
    },
  ];
  if (loadingRedcer) return <Loading />;
  return (
    <div className="home">
      <div className="card-container">
        {usersList?.map((item) => {
          return (
            <Card
              key={item?.id}
              hoverable
              style={{ width: 140, padding: "10px" }}
              cover={
                <div className="img-wrappr">
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                </div>
              }
              onClick={() => {
                const record: tableDataType = {
                  name: item?.name,
                  key: `${item?.id}`,
                  email: item.email,
                };
                dispatch(addUser(record));
              }}
            >
              <Meta title={`${item.id}-${item.name}`} />
            </Card>
          );
        })}
      </div>
      <hr />
      <hr />
      <div>
        <Table columns={columns} dataSource={tableReducer} pagination={false} />
      </div>
    </div>
  );
};

export default Home;
