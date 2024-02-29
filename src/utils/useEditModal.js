import { useState } from "react";

export default function useEditModal(){
  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  
  return [showEdit,handleCloseEdit,handleShowEdit];
}