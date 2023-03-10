import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router";
import Modal from "../../Layout/Modal";

const PlaceCard = ({ place }) => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = (e) => {
    e.stopPropagation();
    setModalVisible(false);
  };

  return (
    <div
      className="flex flex-col shadow rounded overflow-hidden"
      onClick={openModal}
    >
      <div className="overflow-hidden flex-1">
        <img
          src={`http://192.168.0.112:8888/api/images/download/local?imgname=${place.child.image?.iiFileName}`}
          alt="임시"
          className="hover:scale-[115%] transition-transform duration-200 ease-in-out h-full"
        />
      </div>
      <div className="text-start p-6">
        <p className="font-Mont text-2xl font-bold">{place.child.engname}</p>
        <p className="text-sm my-2">{place.child.name}</p>
      </div>
      {modalVisible && (
        <Modal visible={modalVisible} onClose={closeModal} width={1200}>
          <div className="flex items-center p-12 gap-12">
            <GrClose
              className="absolute top-12 right-10 text-2xl cursor-pointer"
              onClick={closeModal}
            />
            <section className="flex flex-col relative basis-1/3 overflow-hidden rounded max-w-[352px] max-h-[352px] min-h-[352px] object-contain">
              <img
                src={`http://192.168.0.112:8888/api/images/download/local?imgname=${place.child.image.iiFileName}`}
                alt="ㅇㅇ"
                className="w-full object-cover flex-1"
              />
            </section>
            <section className="basis-2/3 flex flex-col gap-10 items-start text-start">
              <h2 className="font-Mont">
                <p className="text-4xl font-bold pb-2">{place.child.engname}</p>
                <span className="text-gray-400 font-bold">
                  {place.child.name}
                </span>
              </h2>
              <p className="text-justify pr-14 text-gray-700">
                {place.child.explanation}
              </p>
              <button
                className="bg-main text-white justify-self-end py-3 px-7 rounded hover:brightness-110"
                onClick={() => {
                  navigate(`/detail/${place.child.seq}`, {
                    state: { place: place.child },
                  });
                }}
              >
                일정 만들기
              </button>
            </section>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default PlaceCard;
