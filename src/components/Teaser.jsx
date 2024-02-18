import React, {useEffect, useState} from 'react';
import {Button, Modal, Upload, Form, Input} from 'antd';
import { FloatButton } from 'antd';
const Teaser = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const {Dragger} = Upload;
    return (
        <section id="teaser" className="teaser
         relative
         bg-[url(/src/assets/images/2_mob_2.png)]
         md:bg-[url(/src/assets/images/2_md_teas.png)]
         dt:bg-[url(/src/assets/images/2_desk_815.png)]
         w-auto
         dt:w-auto
         h-[420px]
         dt:h-[815px]
         dt:m-auto
         dt:mt-[-100px]
         ">
            <div className="py-[15px] pb-[0] p-[30px] dt:pt-[180px] dt:px-[150px] flex flex-col items-center dt:items-start">
                <img className="w-auto h-auto mb-[20px] dt:w-[700px] dt:h-[149px] dt:mb-[45px] hd:w-[900px] hd:h-[220px]" src="/src/assets/images/asia.png" alt=""/>
                {/*<img className="dt:hidden md:hidden absolute top-[65px] left-0 right-0 ml-auto mr-auto w-[320px]" src="/src/assets/images/line_320_left.png" alt=""/>*/}
                <img className="dt:hidden md:hidden absolute top-[68px] left-0 right-0 ml-auto mr-auto" src="/src/assets/images/left_320_n.png" alt=""/>
                <div className="mb-[28px] text-center dt:text-left text-base dt:text-3xl w-auto dt:w-[810px] dt:h-[234px]"><span>Главный помощник вашего бизнеса при работе с Китаем.
      Мы предлагаем услуги по лингвистическому сопровождению компаний в рамках импортно-экспортных операций, бизнес-переговоров, миграционного оформления и прочее.</span>
                </div>
                <Button client:load="true" type="primary" onClick={showModal}
                        className="dt:m-0 button w-[160px] h-[40px]"><span>Узнайте цену</span></Button>
                <Modal client:load="true" className="" open={isModalOpen} onOk={handleOk}
                       onCancel={handleCancel}>
                    <Form className="" name="basic" labelCol={{
                        span: 8,
                    }}
                          wrapperCol={{
                              span: 32,
                          }}
                          size={"large"}
                          style={{
                              maxWidth: 600,
                          }}
                          initialValues={{
                              remember: true,
                          }}
                          onFinish={onFinish}
                          onFinishFailed={onFinishFailed}
                          autoComplete="off"
                    >
                        <Form.Item className="my-[0]" label="Почта" name="Почта">
                            <Input/>
                        </Form.Item>
                        <Form.Item className="my-[0]" label="Телефон" name="Телефон">
                            <Input/>
                        </Form.Item>
                        <Form.Item className="my-[0]" label="Язык перевода" name="Язык перевода">
                            <Input/>
                        </Form.Item>
                        <Form.Item className="my-[0]" label="Примечания" name="Примечания">
                            <Input.TextArea showCount maxLength={100}/>
                        </Form.Item>
                        <Form.Item label="Прикрепите файл" name="Прикрепите файл">
                            <Dragger>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">
                                    Support for a single or bulk upload. Strictly prohibited from uploading company data
                                    or
                                    other
                                    banned files.
                                </p>
                            </Dragger>
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="default" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
                <img className=" md:hidden dt:hidden absolute bottom-[0px] left-0 right-0 ml-auto mr-auto" src="/src/assets/images/right_320_n.png" alt=""/>
            </div>
            <FloatButton.BackTop />
        </section>
    )
}
export default Teaser;
