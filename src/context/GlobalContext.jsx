import { createContext, useEffect, useState, useContext } from "react";
import { LoginContext } from "./LoginContext";
import axios from "axios";
export const initialContext = {
  items: [],
  activeItems: [],
  transferItems: [],
  remowedItems: [],
  insertActive: false,
  updateActive: false,
  itemID: null,
  selectedMenu: 0,
  transfervisible: false,
  transferListData: {},
  transferClickID: null,
  transferData: {
    itemID: null,
    fromUser: null,
    toUser: "",
    comment: "",
    transferStatus: "",
  },
  item: {
    item: "",
    owner: "",
    location: "",
    value: "",
    status: "",
    createdate: "",
    comment: "",
    condition: "",
  },

  fetchAllItems: () => {},
  handleDelete: () => {},
  handleInsertActive: () => {},
  handleUpdateActive: () => {},
  handleUpdateActiveOFF: () => {},
  handleUpdateClick: () => {},
  handleInputChange: () => {},
  handleFieldClear: () => {},
  handleInsertClick: () => {},
  handleActiveItems: () => {},
  handleRemowedItems: () => {},
  handleTranfsersItems: () => {},
  handleTransferMenuOpen: () => {},
  createTransfer: () => {},
  handleTransferComment: () => {},
  handleTransferMenuClose: () => {},
  acceptTransfer: () => {},
  declineTransfer: () => {},
};
export const GlobalContext = createContext(initialContext);
export function ContextWrapper(props) {
  const { authorizedUser } = useContext(LoginContext);
  const [items, setItems] = useState(initialContext.items);
  const [item, setItem] = useState(initialContext.item);
  const [insertActive, setinsertActive] = useState(initialContext.insertActive);
  const [updateActive, setUpdateActive] = useState(initialContext.updateActive);
  const [itemID, setitemID] = useState(initialContext.itemID);
  const [activeItems, setActiveItems] = useState(initialContext.activeItems);
  const [transferItems, setTransferItems] = useState(
    initialContext.transferItems
  );
  const [remowedItems, setRemowedItems] = useState(initialContext.remowedItems);
  const [visibleItems, setVisibleItems] = useState(items);
  const [selectedMenu, setSelectedMenu] = useState(initialContext.selectedMenu);
  const [transferData, setTransferData] = useState(initialContext.transferData);
  const [transfervisible, setTransfervisible] = useState(
    initialContext.transfervisible
  );
  const [transferListData, setTransferListData] = useState(
    initialContext.transferListData
  );
  const [transferClickID, setTransferClickID] = useState(
    initialContext.transferClickID
  );
  // console.log(items);

  // ITEM array is filled with data ant first page opening
  useEffect(function () {
    fetchAllItems();
    fetchTransferListData();
  }, []);
  useEffect(() => {
    const foundItem = items.find((s) => s.id === itemID);
    if (foundItem) {
      console.log(foundItem);

      setItem(foundItem);
    }
    fetchTransferListData();
  }, [itemID, items]);
  //Clear input field
  const handleFieldClear = () => {
    setItem(initialContext.item);
  };

  //HANDLING INPUTCHANGE
  const handleInputChange = (e) => {
    setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleTransferComment = (e) => {
    console.log(e);

    setTransferData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleTransferDataChange = (e) => {
    setTransferData((prev) => ({
      ...prev,
      [e.target.name]: parseInt(e.target.value),
    }));
  };
  // console.log(transferData);

  const handleTransferMenuOpen = (ID, index) => {
    setTransferData((prevData) => ({
      ...prevData,
      itemID: ID,
      fromUser: authorizedUser.userID,
      transferStatus: "pending",
    }));
    setTransfervisible(true);
    handleUpdateActiveOFF();
    setinsertActive(false);
    setTransferClickID(index);
  };
  const handleTransferMenuClose = () => {
    setTransferData(initialContext.transferData);
    setTransfervisible(false);
    setTransferClickID(null);
  };

  // INSERT NEW ITEM AND UPDATE ITEM WINDOW
  const handleInsertActive = () => {
    handleFieldClear();
    setUpdateActive(false);
    setinsertActive(!insertActive);
    setSelectedMenu(1);
    setitemID(initialContext.itemID);
    handleTransferMenuClose();
  };

  const handleUpdateActive = (id) => {
    setinsertActive(false);
    setitemID(id);
    setUpdateActive(true);
    handleTransferMenuClose();
  };

  const handleUpdateActiveOFF = () => {
    handleFieldClear();
    setUpdateActive(false);
  };
  const handleActiveItems = () => {
    handleTransferMenuClose();
    setUpdateActive(false);
    setinsertActive(false);
    handleFieldClear();
  };

  const handleRemowedItems = () => {
    handleTransferMenuClose();
    setUpdateActive(false);
    setinsertActive(false);
    handleFieldClear();
  };

  const handleTranfsersItems = () => {
    handleTransferMenuClose();
    setUpdateActive(false);
    setinsertActive(false);
    handleFieldClear();
  };
  const getlist = () => {
    fetchTransferListData();
  };

  const serverAPI = "https://main-project-server.onrender.com";
  // Get data from SQL
  const fetchAllItems = async () => {
    try {
      const res = await axios.get(serverAPI + "/inventory");
      setItems(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchTransferListData = async () => {
    try {
      const res = await axios.get(serverAPI + "/inventory/transferlist");
      setTransferListData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(transferListData);

  // Remowe selected item
  const handleDelete = async (id) => {
    try {
      await axios.put(`${serverAPI}/inventory/delete/${id}`);
      fetchAllItems();
    } catch (err) {
      console.log(err);
    }
  };
  //Update selected item API
  const handleUpdateClick = async (e, item) => {
    e.preventDefault();
    try {
      await axios.put(serverAPI + "/inventory/" + itemID, item);
      console.log(itemID);
      console.log(item);

      fetchAllItems();
      handleUpdateActiveOFF();
      handleFieldClear();
    } catch (err) {
      console.log(err);
    }
  };
  //INSERTING NEW ITEM TO SQL
  const handleInsertClick = async (e) => {
    e.preventDefault();
    // handleFieldClear();
    try {
      await axios.post(serverAPI + "/inventory", item);

      fetchAllItems();
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  const createTransfer = async (e) => {
    e.preventDefault();
    try {
      await axios.post(serverAPI + "/inventory/transfer", transferData);
      handleTransferMenuClose();
      fetchAllItems();
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  const acceptTransfer = async (e, itemId, transferId) => {
    e.preventDefault();
    try {
      await axios.put(
        `${serverAPI}/inventory/transfer/accept/${itemId}/${transferId}`,
        authorizedUser
      );
      fetchTransferListData();
      fetchAllItems();
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  const declineTransfer = async (e, itemId, transferId) => {
    e.preventDefault();
    try {
      await axios.put(
        `${serverAPI}/inventory/transfer/decline/${itemId}/${transferId}`
      );
      fetchTransferListData();
      fetchAllItems();
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  // ITEM filters array is filled with data ant first page opening
  useEffect(
    function () {
      setActiveItems(items.filter((item) => item.status === "Active"));
      setRemowedItems(items.filter((item) => item.status === "Removed"));
      setTransferItems(items.filter((item) => item.status === "Transfer"));
      setVisibleItems(items); // Show all items by defaul
    },
    [items]
  );

  const value = {
    items,
    item,
    fetchAllItems,
    handleDelete,
    insertActive,
    handleInsertActive,
    updateActive,
    handleUpdateActive,
    itemID,
    setitemID,
    handleUpdateActiveOFF,
    handleUpdateClick,
    handleInputChange,
    setItem,
    handleFieldClear,
    handleInsertClick,
    handleActiveItems,
    handleRemowedItems,
    handleTranfsersItems,
    visibleItems,
    activeItems,
    transferItems,
    remowedItems,
    selectedMenu,
    setSelectedMenu,
    setinsertActive,
    setUpdateActive,
    handleTransferDataChange,
    transferData,
    handleTransferMenuOpen,
    createTransfer,
    handleTransferComment,
    transfervisible,
    handleTransferMenuClose,
    getlist,
    transferListData,
    acceptTransfer,
    declineTransfer,
    transferClickID,
    setTransferClickID,
  };
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}
