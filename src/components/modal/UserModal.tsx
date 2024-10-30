import { Modal } from "@mui/material";
import { User } from "../../types/data";
import React from "react";
import { twMerge } from "tailwind-merge";
import Avatar from "@components/common/Avatar";
import DataRow from "@components/common/DataRow";
import PrimaryButton from "@components/common/PrimaryButton";

interface ViewUserModalProps {
  open: boolean;
  onClose: () => void;
  className?: string;
  selectedUser: User;
}

const UserModal: React.FC<ViewUserModalProps> = ({
  open,
  onClose,
  selectedUser,
}) => {
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <div
          className={twMerge(
            "absolute left-1/2 top-1/3 mt-[2.188rem] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-8"
          )}
        >
          <div className="flex items-center justify-between border-b border-grey-outline px-8 pb-3">
            <h4 className="text-13 font-bold">View User</h4>
            <button
              onClick={onClose}
              type="button"
              className="primary-transition grid h-6 w-6 place-content-center rounded-[0.313rem] bg-grey-bg hover:bg-grey-bg-toggle text-sub-text"
              aria-label="close"
            >
              x
            </button>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center justify-center my-4">
              <Avatar
                firstName={selectedUser.name}
                lastName={selectedUser.name}
                className="h-40 w-40"
              />
            </div>

            <div className="space-y-4 px-4">
              <DataRow label="name" value={selectedUser.name} />
              <DataRow label="email" value={selectedUser.email} />
              <DataRow label="Phone Number" value={selectedUser.phone} />
              <DataRow label="Website" value={selectedUser.website} />
              <DataRow
                label="Address"
                value={`${selectedUser.address.street} ${selectedUser.address.city}`}
              />
            </div>
          </div>
          <div className=" flex items-center justify-center mt-4 ">
            <PrimaryButton onClickCapture={onClose} className="mt-2 w-[200px]">
              Ok
            </PrimaryButton>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserModal;
