import { Modal } from "antd";
import { useEffect, useState } from "react";
import { BsGlobe, BsFillTriangleFill, BsBuildings } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";
import { useNavigate } from "react-router";

const Stock = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const navigate = useNavigate();

  ////////// FETCH DATA //////////
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

  ////////// HANDLE MODAL //////////
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

  ////////// HANDLE CLICK REGISTRATION FORM //////////
  const handleClickForm = () => {
    navigate("/registration-form");
  };

  return (
    <div className="md:max-w-2xl lg:max-w-4xl mx-auto my-12">
      {/* HEADLINE */}
      <div className="flex items-center justify-center m-6 text-white text-4xl font-extrabold uppercase">
        <AiOutlineStock className="mr-2 text-5xl" />
        <p>Stock</p>
      </div>

      {/* REGISTRATION FORM */}
      <div className="flex justify-center">
        <button
          className="max-w-sm mb-3 bg-[#727b81] px-6 py-2 rounded-full border-2 border-white text-white font-semibold shadow-md hover:shadow-lg hover:bg-[#929a9f] focus:bg-[#a8b0b5]"
          onClick={handleClickForm}
        >
          Registration Form
        </button>
      </div>

      {/* DATA */}
      {data.length > 0 &&
        data.map((item, index) => {
          return (
            <div
              className="m-3 py-3 px-5 bg-gradient-to-tr from-[#42ade6] to-[#acdcff] rounded-2xl shadow-xl text-white"
              key={index}
            >
              <div className="grid grid-cols-3 lg:grid-cols-4 lg:items-center">
                {/* NAME */}
                <div className="m-1 col-span-2">
                  <p className="text-3xl font-extrabold">{item.N_name}</p>
                  <p className="text-white text-[13px] font-semibold">
                    {item.N_fullname}
                  </p>
                </div>

                {/* MARKET CAP */}
                <div className="m-1 col-span-1">
                  <div>
                    <div className="flex items-center">
                      <BsFillTriangleFill className="mr-[6px] text-xs flex-shrink-0" />
                      {item.marketcap ? (
                        <p className="text-3xl font-extrabold">
                          {(item.marketcap / 1000000000).toFixed(2)}
                        </p>
                      ) : (
                        <span className="text-[#d9eeff] text-lg font-bold uppercase">
                          No data
                        </span>
                      )}
                    </div>
                    <p className="-mt-1">
                      <span className="mr-1 font-medium">billion</span>
                      <span className="text-sm font-medium">THB</span>
                    </p>
                  </div>
                  <p className="text-[#2d6991] text-xs font-medium">
                    Market cap
                  </p>
                </div>

                {/* COMPANY PROFILE LINK */}
                <div className="col-span-3 lg:col-span-1 flex text-[#ffffff] text-sm font-semibold uppercase">
                  <p
                    className="flex items-center m-1 w-fit text-[#ffffff] text-sm font-semibold uppercase hover:scale-105 bg-gradient-to-tr from-[#1c3854] to-[#3e8ad1] rounded-md px-3 py-1 h-[40px] shadow-md hover:shadow-lg cursor-pointer"
                    // className="flex items-center m-1 hover:scale-105 bg-gradient-to-tr from-[#e1ab06] to-[#FACC15] rounded-md px-3 py-1 shadow-md hover:shadow-lg cursor-pointer"
                    onClick={() => {
                      showModal(item);
                    }}
                  >
                    <BsBuildings className="mr-1" />
                    company profile
                  </p>
                </div>
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
};

export default Stock;
