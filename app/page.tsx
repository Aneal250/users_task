"use client";

import SearchInput from "@components/common/SearchInput";
import { TableColumn } from "../src/types/table";
import { AddUser, User } from "../src/types/data";
import { useGetUsers } from "hooks/useUser";
import Avatar from "@components/common/Avatar";
import Table from "@components/Table";
import { useEffect, useRef, useState } from "react";
import PrimaryButton from "@components/common/PrimaryButton";
import AddUserModal from "@components/modal/AddUserModal";
import { useAppSelector, useAppDispatch } from "@lib/hooks";
import {
  addUser,
  fetchUsers,
  searchUsersByNameOrEmail,
  users,
  clearSearch,
} from "../src/features/usersSlice";
import UserModal from "@components/modal/UserModal";

export default function Home() {
  const { data: usersData, isLoading: isLoadingUsers } = useGetUsers();

  const [showAddUserModal, setShowAddUserModal] = useState<boolean>(false);
  const [showViewUserModal, setShowViewUserModal] = useState<boolean>(false);

  const [selectedUser, setSelectedUser] = useState<User | null>();

  const [search, setSearch] = useState("");

  const handleViewUser = (user: User) => {
    setSelectedUser(user);
  };

  const handleCloseViewUser = () => {
    setSelectedUser(null);
    setShowViewUserModal(false);
  };

  const columns: TableColumn<User>[] = [
    {
      header: "ID",
      cell: (item) => <div className="flex items-center gap-2">{item.id}</div>,
    },
    {
      header: "Name",
      cell: (item) => {
        return (
          <div className="flex items-center gap-2">
            <Avatar firstName={item.name} lastName={item.name} />
            <div>{item.name}</div>
          </div>
        );
      },
    },
    {
      header: "Email Address",
      cell: (item) => (item.email ? item.email : "----------------"),
    },
    {
      header: "Phone number",
      cell: (item) => (item.phone ? item.phone : "----------------"),
    },
    {
      header: "Website",
      cell: (item) => (
        <div className="capitalize text-sub-text">{item.website}</div>
      ),
    },
    {
      header: "Action",
      cell: (item) => (
        <button
          type="button"
          className="bg-red-500 rounded-md text-11 h-4 flex items-center justify-center text-white px-2 py-3 cursor-pointer"
          onClick={() => {
            setSelectedUser(item);
            setShowViewUserModal(true);
          }}
        >
          View User
        </button>
      ),
    },
  ];

  const dispatch = useAppDispatch();

  const usersList = useAppSelector(users);

  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // const handleSearch = (value: string) => {
  //   setSearch(value);

  //   if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);

  //   searchTimeoutRef.current = setTimeout(() => {
  //     if (value.trim()) {
  //       // Search if value is non-empty
  //       dispatch(searchUsersByNameOrEmail(value));
  //     } else {
  //       // Fetch all users if search is cleared
  //       if (usersData) dispatch(fetchUsers(usersData));
  //     }
  //   }, 300);
  // };

  const handleSearch = (value: string) => {
    setSearch(value);

    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);

    searchTimeoutRef.current = setTimeout(() => {
      if (value.trim()) {
        dispatch(searchUsersByNameOrEmail(value));
      } else {
        dispatch(clearSearch()); // Clears search to show all users
      }
    }, 300);
  };

  const handleAddUser = (user: AddUser) => {
    dispatch(addUser(user));
    setShowAddUserModal(false);
  };

  // // Clear search and reset users data
  // const clearSearch = () => {
  //   setSearch("");
  //   if (usersData) {
  //     dispatch(fetchUsers(usersData));
  //   }
  // };

  useEffect(() => {
    if (usersData) {
      dispatch(fetchUsers(usersData));
    }
  }, [dispatch, usersData]);

  return (
    <>
      {showAddUserModal && (
        <AddUserModal
          open={showAddUserModal}
          onClose={() => setShowAddUserModal(false)}
          addUser={handleAddUser}
        />
      )}

      {showViewUserModal && selectedUser && (
        <UserModal
          open={showViewUserModal}
          onClose={() => handleCloseViewUser()}
          selectedUser={selectedUser}
        />
      )}

      <div className="h-screen mx-auto bg-grey-bg w-full md:pt-8 pt-2 ">
        <div className=" rounded-[15px] bg-white px-8 py-4 max-w-[1300px] mx-auto">
          <p className="font-semibold">All Users</p>
          <div className="mt-6 flex items-center justify-center">
            <SearchInput
              placeholder="Search by name or email"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />

            <div className="flex gap-2">
              {/* please help me implement clear search properly */}
              {search.trim().length > 0 && (
                <PrimaryButton
                  onClick={() => {
                    setSearch("");
                    dispatch(clearSearch());
                  }}
                  variant="blueOutline"
                  className=""
                >
                  Clear search
                </PrimaryButton>
              )}
              <PrimaryButton onClick={() => setShowAddUserModal(true)}>
                Add User
              </PrimaryButton>
            </div>
          </div>
          <Table<User>
            columns={columns}
            data={
              usersList.filteredUsers
                ? usersList.filteredUsers
                : usersList.users
            }
            errorMessage="No users Found"
            isLoading={isLoadingUsers || usersList.isLoadingUser}
            tableClassName="mt-5"
            thClassName="h-[40px]"
          />
        </div>
      </div>
    </>
  );
}
