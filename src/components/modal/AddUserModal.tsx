import TextFieldInput from "@components/common/TextFieldInput";
import { Modal } from "@mui/material";
import React from "react";
import { twMerge } from "tailwind-merge";
import { userSchema } from "../../schemas/users";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface AddUserModalProps {
  open: boolean;
  onClose: () => void;
  className?: string;
  addUser: (user: UserFormData) => void;
}

type UserFormData = z.infer<typeof userSchema>;

const AddUserModal: React.FC<AddUserModalProps> = ({
  open,
  onClose,
  addUser,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  // Function to handle form submission
  const onSubmit = (data: UserFormData) => {
    addUser(data);
    reset(); // Reset form fields
    onClose(); // Close the modal
  };

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <div
          className={twMerge(
            "absolute left-1/2 top-1/3 mt-[2.188rem] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-8"
          )}
        >
          <div className="flex items-center justify-between border-b border-grey-outline px-8 pb-3">
            <h4 className="text-13 font-bold">Add User</h4>
            <button
              onClick={onClose}
              type="button"
              className="primary-transition grid h-6 w-6 place-content-center rounded-[0.313rem] bg-grey-bg hover:bg-grey-bg-toggle text-sub-text"
              aria-label="close"
            >
              x
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="px-8 space-y-4">
            <TextFieldInput
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
              placeholder="Enter Name"
              label="Name"
              type="text"
            />
            <TextFieldInput
              {...register("username")}
              error={!!errors.username}
              helperText={errors.username?.message}
              placeholder="Enter Username"
              label="Username"
              type="text"
            />
            <TextFieldInput
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              placeholder="Enter Email"
              label="Email"
              type="email"
            />
            <TextFieldInput
              {...register("address")}
              error={!!errors.address}
              helperText={errors.address?.message}
              placeholder="Enter Address"
              label="Address"
              type="text"
            />
            <TextFieldInput
              {...register("phone")}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              placeholder="Enter Phone"
              label="Phone"
              type="text"
            />
            <TextFieldInput
              {...register("company")}
              error={!!errors.company}
              helperText={errors.company?.message}
              placeholder="Enter Company"
              label="Company"
              type="text"
            />

            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="mr-4 bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddUserModal;
