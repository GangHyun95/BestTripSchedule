import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Modal from "../../Layout/Modal";
import { logout } from "../../store/userSlice";
import Login from "./Login";

const Header = () => {
  // 화면이동
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // user redux
  const user = useSelector((state) => state.user);
  // 모달 만들기
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setModalVisible(false);
  };

  // 프로필 클릭
  const [isClicked, setIsClicked] = useState(false);
  const handleCircleClick = () => {
    setIsClicked(!isClicked);
  };

  const headerRef = useRef();
  const { pathname } = useLocation();
  const handleScroll = () => {
    if (pathname === "/") {
      if (window.scrollY > 0) {
        headerRef.current.classList.add("bg-main");
      } else {
        headerRef.current.classList.remove("bg-main");
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (pathname !== "/") {
      headerRef.current.classList.add("bg-main");
    }
    if (window.scrollY === 0 && pathname === "/") {
      headerRef.current.classList.remove("bg-main");
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <header
      className="fixed top-0 w-full z-50 text-white transition-all duration-500"
      ref={headerRef}
    >
      <nav className="flex items-center justify-between h-20 max-w-[1440px] px-5 mx-auto">
        <Link to="/">
          <img
            className="w-[100px] h-[100px]"
            src="/photo/bonvoyagelogo.png"
            alt="로고"
          ></img>
        </Link>

        <div className="flex items-center gap-4">
          {user.miStatus === 0 ? (
            ""
          ) : (
            <button onClick={openModal}>
              {" "}
              <img
                className="w-[40px] h-[40px]"
                src="/photo/login.png"
                alt="로고"
              ></img>
            </button>
          )}
          {/* 닉네임 */}
          {user.miNickname}
          {user.miStatus === 0 && (
            <div
              className="relative cursor-pointer rounded-3xl  bg-gray-400 text-center w-[40px] h-[40px]"
              onClick={handleCircleClick}
            >
              <img src="/photo/info.png" alt="profile" />
              {isClicked && (
                <div className="absolute top-8 left-5 text-black bg-white w-[100px] h-[96px]">
                  <ul className="text-center">
                    <li
                      className="py-3 hover:bg-gray-200"
                      onClick={() => navigate("/mypage")}
                    >
                      마이페이지
                    </li>
                    <li
                      className="py-3 hover:bg-gray-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsClicked(false);
                        dispatch(logout());
                        navigate("/");  
                      }}
                    >
                      로그아웃
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
        {modalVisible && (
          <Modal
            width={700}
            height={800}
            onClose={closeModal}
            visible={modalVisible}
          >
            <Login closeModal={closeModal} setModalVisible={setModalVisible} />
          </Modal>
        )}
      </nav>
    </header>
  );
};
export default Header;
