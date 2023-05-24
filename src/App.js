import "./App.css";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { BsGlobe, BsFillTriangleFill, BsBuildings } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";

function App() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const showModal = (item) => {
    setModalData({
      name: item.N_name,
      company: item.N_COMPANY_E,
      profile: item.N_BUSINESS_TYPE_E,
      website: item.N_URL,
    });
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // const onHandleClickWebsite = (event) => {
  //   event.preventDefault();
  //   window.location.href = modalData.website;
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://stockradars.co/assignment/data.php"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log("fetchData error =", error);
      }
    };

    fetchData();
  }, []);

  // console.log(data[0]?.N_name);

  return (
    <div className="md:max-w-2xl lg:max-w-5xl mx-auto">
      <div className="flex items-center justify-center m-6 text-white text-4xl font-extrabold uppercase">
        <AiOutlineStock className="mr-2 text-5xl" />
        <p>Stock</p>
      </div>
      {/* <img
        className="mx-auto w-[250px]"
        src="https://www.stockradars.co/images/Logo_StockRadars.png"
        alt="logo"
      /> */}
      {data.length > 0 &&
        data.map((item, index) => {
          return (
            <div
              className="m-3 py-3 px-6 bg-gradient-to-tr from-[#3ca2da] to-[#97d4ff] rounded-2xl shadow-xl text-white"
              key={index}
            >
              <div className="grid grid-cols-3">
                <div className="m-1 col-span-2">
                  <p className="text-3xl font-extrabold">{item.N_name}</p>
                  <p className="text-white text-[13px] font-semibold">
                    {item.N_fullname}
                  </p>
                </div>

                <div className="m-1 col-span-1">
                  <div>
                    <p className="flex items-center">
                      <BsFillTriangleFill className="mr-2 text-sm" />
                      <span className="text-3xl font-extrabold">
                        {(item.marketcap / 1000000000).toFixed(2)}
                      </span>
                    </p>
                    <p className="-mt-1">
                      <span className="mr-1 font-medium">billion</span>
                      <span className="text-sm font-medium">THB</span>
                    </p>
                  </div>
                  <p className="text-[#2d6991] text-xs font-medium">
                    Market cap
                  </p>
                </div>
              </div>

              <div className="flex text-[#ffffff] text-sm font-semibold uppercase">
                <p
                  className="flex items-center m-1 w-fit text-[#ffffff] text-sm font-semibold uppercase hover:scale-105 bg-gradient-to-tr from-[#1c3854] to-[#3e8ad1] rounded-md px-3 py-1 shadow-md hover:shadow-lg cursor-pointer"
                  // className="flex items-center m-1 hover:scale-105 bg-gradient-to-tr from-[#e1ab06] to-[#FACC15] rounded-md px-3 py-1 shadow-md hover:shadow-lg cursor-pointer"
                  onClick={() => {
                    showModal(item);
                  }}
                >
                  <BsBuildings className="mr-1" />
                  company profile
                </p>
                {/* <a
                  className="flex items-center m-1 hover:scale-105 bg-gradient-to-tr from-[#1d446a] to-[#3883c8] rounded-md px-3 py-1 shadow-md hover:shadow-lg cursor-pointer"
                  href={item.N_URL}
                >
                  <BsGlobe className="mr-1" />
                  website
                </a> */}
              </div>

              <Modal
                maskStyle={{
                  backgroundColor: "rgba(0, 0, 0, 0.02)",
                }}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={[]}
              >
                {/* <h1 className="text-3xl font-bold">{modalData.name}</h1> */}
                <p className="mb-3 text-base font-semibold">
                  {modalData.company}
                </p>
                <p className="mb-3">{modalData.profile}</p>
                {/* <p
                  // className="flex items-center w-fit text-[#ffffff] text-sm font-semibold uppercase hover:scale-105 bg-gradient-to-tr from-[#1d446a] to-[#3883c8] rounded-md px-3 py-1 shadow-md hover:shadow-lg cursor-pointer"
                  className="flex items-center text-blue-500 hover:text-blue-600 font-medium uppercase cursor-pointer"
                  onClick={onHandleClickWebsite}
                >
                  <BsGlobe className="mr-1" />
                  website
                </p> */}
                <a
                  // className="flex items-center w-fit text-[#ffffff] text-sm font-semibold uppercase hover:scale-105 bg-gradient-to-tr from-[#1d446a] to-[#3883c8] rounded-md px-3 py-1 shadow-md hover:shadow-lg cursor-pointer"
                  className="flex items-center text-blue-500 hover:text-blue-600 font-medium uppercase cursor-pointer"
                  href={
                    modalData.website && modalData.website.startsWith("http://")
                      ? modalData.website
                      : `http://${modalData.website}`
                  }
                >
                  <BsGlobe className="mr-1" />
                  website
                </a>
              </Modal>
            </div>
          );
        })}
      <div></div>
    </div>
  );
}

export default App;
