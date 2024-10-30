"use client";

import SearchInput from "@components/common/SearchInput";
import { TableColumn } from "../src/types/table";
import { User } from "../src/types/data";
import { useGetUsers } from "hooks/useUser";
import Avatar from "@components/common/Avatar";
import Table from "@components/Table";
import { useEffect, useState } from "react";
import PrimaryButton from "@components/common/PrimaryButton";
import AddUserModal from "@components/modal/AddUserModal";

export default function Home() {
  const { data: usersData, isLoading: isLoadingUsers } = useGetUsers();

  const [showAddUserModal, setShowAddUserModal] = useState<boolean>(false);

  const [search, setSearch] = useState("");

  const columns: TableColumn<User>[] = [
    {
      header: "S/N",
      cell: (item) => item.id,
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
  ];

  const [users, setUsers] = useState<User[]>([]);

  const handleAddUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
    setShowAddUserModal(false);
  };

  useEffect(() => {
    setUsers(usersData);
  }, [usersData]);

  return (
    <>
      {showAddUserModal && (
        <AddUserModal
          open={showAddUserModal}
          onClose={() => setShowAddUserModal(false)}
          addUser={handleAddUser}
        />
      )}

      <div className="h-screen mx-auto bg-grey-bg px-8 py-12">
        <div className=" rounded-[15px] bg-white px-8 py-4">
          <p className="font-semibold">All Users</p>
          <div className="mt-6 flex items-center justify-center">
            <SearchInput
              placeholder="Search by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              // className="w-full"
            />

            <PrimaryButton onClick={() => setShowAddUserModal(true)}>
              Add User
            </PrimaryButton>
          </div>
          <Table<User>
            columns={columns}
            data={users}
            errorMessage="No users Found"
            isLoading={isLoadingUsers}
            tableClassName="mt-5"
            thClassName="h-[40px]"
          />
        </div>
      </div>
    </>
  );
}
