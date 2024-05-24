import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegUserCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
const data = [
  "User Image",
  "User Id",
  "User name",
  "Membership",
  "Book in Hand",
  "Rented History",
  "Favourite Books Count",
  "Requested Books Count",
  "Update",
  "Delete",
];

const UsersBoard = () => {
  const [userData, setUserData] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);
  const [newInfo, setNewInfo] = useState({
    username: "",
    email: "",
    membership: "",
  });

  const getUsersData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/` //process.env.REACT_APP_API_URL hasbeen changed
      );
      setUserData(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const handleUpdate = (user) => {
    setModal((prev) => !prev);
    setModalInfo(user);
  };

  const handleChange = (type, value) => {
    setNewInfo((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  console.log(userData);

  const handleUserDel = async (user) => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_API_URL}/user/delete/${user?._id}`
      );

      if (response.status === 200) {
        setUserData((prev) => {
          return prev.filter((val) => {
            return val._id !== user._id;
          });
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const commitUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/user/edit`,
        {
          id: modalInfo?._id,
          username: newInfo?.username,
          email: newInfo?.email,
        }
      );
      if (response?.status === 200) {
        setModal((prev) => !prev);
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-[95%] h-max overflow-x-scroll scrollbar">
      <table className="w-[100%] border-collapse ">
        <thead>
          <tr className="bg-slate-800 text-white border-[1px] border-slate-200">
            {data?.map((data, idx) => {
              return (
                <th
                  key={idx}
                  className="p-2 border-[0.5px] border-r-slate-400 min-w-fit whitespace-nowrap"
                >
                  {data}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {userData?.map((data, idx) => {
            return (
              <tr
                key={idx}
                className="bg-slate-500 text-white border-[1px] border-slate-200"
              >
                <td className="p-3 border-r-slate-400 w-[100%] whitespace-nowrap flex justify-center items-center text-3xl">
                  {<FaRegUserCircle />}
                </td>
                <td className="p-3 text-center border-[0.5px] border-r-slate-400 w-[100%] whitespace-nowrap ">
                  {data?.email}
                </td>
                <td className="p-3 text-center border-[0.5px] border-r-slate-400 w-[100%] whitespace-nowrap ">
                  {data?.username}
                </td>
                <td className="p-3 text-center border-[0.5px] border-r-slate-400 w-[100%] whitespace-nowrap ">
                  {data?.membership ? "Yes" : "No"}
                </td>
                <td className="p-3 text-center border-[0.5px] border-r-slate-400 w-[100%] whitespace-nowrap ">
                  {data?.bookInHand?.length}
                </td>
                <td className="p-3 text-center border-[0.5px] border-r-slate-400 w-[100%] whitespace-nowrap ">
                  {data?.rentedHistory?.length}
                </td>
                <td className="p-3 text-center border-[0.5px] border-r-slate-400 w-[100%] whitespace-nowrap ">
                  {data?.favourites?.length}
                </td>
                <td className="p-3 text-center border-[0.5px] border-r-slate-400 w-[100%] whitespace-nowrap ">
                  {data?.requestedBooks?.length}
                </td>
                <td className="p-3 text-center border-[0.5px] border-r-slate-400 w-[100%] whitespace-nowrap ">
                  <button
                    onClick={() => handleUpdate(data)}
                    className="w-[100px] font-semibold bg-emerald-500 p-1 rounded-md shadow-md"
                  >
                    UPDATE
                  </button>
                </td>
                <td className="p-3 text-center font-semibold border-[0.5px] border-r-slate-400 w-[100%] whitespace-nowrap ">
                  <button
                    onClick={() => handleUserDel(data)}
                    className="w-[100px] bg-red-500 p-1 rounded-md shadow-md"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* MODAL */}
      {modal && (
        <div className="absolute top-[15%] p-5 rounded-md shadow-xl left-[45%] sm:left-[5%] w-[450px] xsm:w-[98%] xsm:left-1 xsm:mt-1 xsm:p-2 h-max bg-slate-200">
          <div className="flex justify-end items-center mb-3 text-2xl ">
            <div
              onClick={() => setModal((prev) => !prev)}
              className="cursor-pointer"
            >
              <MdCancel />
            </div>
          </div>
          <form
            onSubmit={commitUpdate}
            className="flex flex-col justify-center items-start"
          >
            <label>Username</label>
            <input
              onChange={(e) => handleChange("username", e.target.value)}
              className="w-[100%] mb-3 p-2 bg-slate-400 rounded-md"
              type="text"
              placeholder="Username"
              defaultValue={modalInfo?.username}
            ></input>
            <label>Email</label>
            <input
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-[100%] mb-3 p-2 bg-slate-400 rounded-md"
              type="email"
              placeholder="Email"
              defaultValue={modalInfo?.email}
            ></input>
            <label>Membership Status</label>
            <input
              className="w-[100%] mb-3 p-2 bg-slate-400 rounded-md"
              type="text"
              placeholder="Membership"
              defaultValue={modalInfo?.membership}
            ></input>
            <div className="w-[100%]">
              <label>Favourite Books</label>
              <select
                className="w-[100%] mb-3 p-2 bg-slate-400 rounded-md"
                placeholder="Favourite Books"
              >
                {modalInfo?.favourite?.length > 0 ? (
                  modalInfo?.favourite?.map((val) => {
                    return <option>{val}</option>;
                  })
                ) : (
                  <option>Empty!</option>
                )}
              </select>
            </div>
            <div className="w-[100%]">
              <label>Rented Books</label>
              <select className="w-[100%] mb-3 p-2 bg-slate-400 rounded-md">
                {modalInfo?.rentedHistory?.length > 0 ? (
                  modalInfo?.rentedHistory?.map((val) => {
                    return <option>{val?.bookname}</option>;
                  })
                ) : (
                  <option>Empty!</option>
                )}
              </select>
            </div>
            <div className="w-[100%]">
              <label>Requested Books</label>
              <select className="w-[100%] mb-3 p-2 bg-slate-400 rounded-md">
                {modalInfo?.requestedBooks?.length > 0 ? (
                  modalInfo?.requestedBooks?.map((val, idx) => {
                    return <option key={idx}>{val?.bookname}</option>;
                  })
                ) : (
                  <option>Empty!</option>
                )}
              </select>
            </div>
            <button
              type="submit"
              className="mx-auto w-[200px] text-white font-semibold bg-emerald-600 p-2 rounded-lg mt-2 shadow-md"
            >
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UsersBoard;
