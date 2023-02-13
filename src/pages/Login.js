import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="pt-20">
            <div className="  p-6  max-w-2xl mx-auto">
                <section className=" h-screen">
                    <div className="px-3 mx-auto text-gray-800">
                        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap g-6">
                          
                            <div>
                                <div className="mb-6">
                                    <span className="mb-">이메일</span>
                                    <input
                                        type="email"
                                        className="form-control block w-[450px] px-1 py-2 text-base font-normal text-gray-700 bg-white 
                      bg-clip-padding border-b-[1px]  border-gray-300  transition ease-in-out m-0 
                      focus:text-gray-700 focus:bg-white focus:border-gray-400 focus:outline-none"
                                        id=""
                                        placeholder="abc@gmail.com"
                                        value=""
                                    />
                                </div>

                                <div className="mb-6">
                                    <span className="">비밀번호</span>
                                    <input
                                        type="text"
                                        className="form-control block w-full px-1 py-2 text-base font-normal text-gray-700 bg-white 
                     bg-clip-padding border-b-[1px]  border-gray-300  transition ease-in-out m-0 
                     focus:text-gray-700 focus:bg-white focus:border-gray-400 focus:outline-none"
                                        id=""
                                        placeholder="영문,숫자,특수문자"
                                        value=""
                                    />
                                </div>

                                <div className="text-center relative ">
                                    <button
                                        className="inline-block w-full py-3 mb-12  bg-main
                      text-white
                       font-medium text-sm leading-snug uppercase rounded 
                       "
                                    >
                                        로그인
                                    </button>
                                </div>

                                <div className="mb-6">
                                    <p className="my- text-center">
                                        회원이 아니세요?
                                        <Link className="ml-2 font-bold text-main" to="/SignUp">
                                            회원가입하기
                                        </Link>
                                    </p>
                                </div>
                                <div className="">
                                    <div className="mb-6 text-center">or</div>
                                    <div className="text-center mb-8">SNS 간편 로그인</div>
                                    <div className="text-center">
                                        <button className="pr-2">카카오톡</button>
                                        <button>구글</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Login;
