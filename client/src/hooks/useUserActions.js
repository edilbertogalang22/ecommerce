import useModal from "./useModal";
const useUserActions = (createUser, readUser, updateUser, deleteUser) => {
    const { closeModal } = useModal();

    const handleCreateUser =  async (data) =>{
        await createUser(data);
        closeModal()
    }

    const handleReadUser = async (id) =>{
        await readUser(id);
        closeModal()
    }

    const handleUpdateUser = async (id, data) =>{
        await updateUser(id, data);
        closeModal()
    }

    const handleDeleteUser = async (id) =>{
        await deleteUser(id);
        closeModal()
    }
  return {
    handleCreateUser,
    handleReadUser,
    handleUpdateUser,
    handleDeleteUser}
};

export default useUserActions;
