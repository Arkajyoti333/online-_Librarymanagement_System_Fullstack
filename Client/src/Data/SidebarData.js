import { BiUser, BiBookAlt } from "react-icons/bi";
import { CiSquareQuestion } from "react-icons/ci";
import UsersBoard from "../components/admin/UsersBoard";
import RequestsBoard from "../components/admin/RequestsBoard";
import RentedBoard from "../components/admin/RentedBorad";
import CreateBook from "../components/admin/CreateBook";
import UpdateBook from "../components/admin/UpdateBook";
import DeleteBook from "../components/admin/DeleteBook";

export const SideBarData = [
  {
    title: "LISTS",
    subCategory: [
      { icon: <BiUser />, name: "Users" },
      { icon: <CiSquareQuestion />, name: "Book Requests" },
      { icon: <BiBookAlt />, name: "Rented Books" },
    ],
  },
  {
    title: "EXTRAS",
    subCategory: [
      { icon: <BiUser />, name: "Create Books" },
      { icon: <CiSquareQuestion />, name: "Delete Books" },
      { icon: <BiBookAlt />, name: "Update Books" },
    ],
  },
];

export const AdminComps = [
  {
    name: "Users",
    comp: <UsersBoard />,
  },
  {
    name: "Book Requests",
    comp: <RequestsBoard />,
  },
  {
    name: "Rented Books",
    comp: <RentedBoard />,
  },
  {
    name: "Create Books",
    comp: <CreateBook />,
  },
  {
    name: "Delete Books",
    comp: <DeleteBook />,
  },
  {
    name: "Update Books",
    comp: <UpdateBook />,
  },
];
